"use client";

import { useEffect, useState, useTransition } from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Confetti from "react-confetti";
import { useAudio, useWindowSize, useMount } from "react-use";
import { toast } from "sonner";
import { BookOpenCheck, CheckCircle, X, XCircle } from "lucide-react";

import { upsertChallengeProgress } from "@/actions/challenge-progress";
import { reduceHearts } from "@/actions/user-progress";
import { MAX_HEARTS } from "@/constants";
import { challengeOptions, challenges, userSubscription } from "@/db/schema";
import { getCourseKind, getCourseTheme } from "@/lib/course-style";
import { localizeQuestion, uiCopy, type UiLocale } from "@/lib/ui-copy";
import { cn } from "@/lib/utils";
import { useHeartsModal } from "@/store/use-hearts-modal";
import { usePracticeModal } from "@/store/use-practice-modal";

import { Challenge } from "./challenge";
import { Footer } from "./footer";
import { Header } from "./header";
import { ProgrammingPrompt } from "./programming-prompt";
import { QuestionBubble } from "./question-bubble";
import { ResultCard } from "./result-card";

type QuizProps = {
  courseTitle: string;
  uiLocale: UiLocale;
  initialPercentage: number;
  initialHearts: number;
  initialLessonId: number;
  initialLessonChallenges: (typeof challenges.$inferSelect & {
    completed: boolean;
    challengeOptions: (typeof challengeOptions.$inferSelect)[];
  })[];
  userSubscription:
    | (typeof userSubscription.$inferSelect & {
        isActive: boolean;
      })
    | null;
};

type QuestionResult = {
  id: number;
  question: string;
  prompt: string | null;
  code: string | null;
  hint: string | null;
  yourResponse: string;
  correctResponse: string;
  correct: boolean;
};

export const Quiz = ({
  courseTitle,
  uiLocale,
  initialPercentage,
  initialHearts,
  initialLessonId,
  initialLessonChallenges,
  userSubscription,
}: QuizProps) => {
  const courseTheme = getCourseTheme({ title: courseTitle });
  const courseKind = getCourseKind({ title: courseTitle });
  const copy = uiCopy[uiLocale].lesson;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [correctAudio, _c, correctControls] = useAudio({ src: "/correct.wav" });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [incorrectAudio, _i, incorrectControls] = useAudio({
    src: "/incorrect.wav",
  });
  const [finishAudio] = useAudio({
    src: "/finish.mp3",
    autoPlay: true,
  });
  const { width, height } = useWindowSize();

  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const { open: openHeartsModal } = useHeartsModal();
  const { open: openPracticeModal } = usePracticeModal();

  useMount(() => {
    if (initialPercentage === 100) openPracticeModal();
  });

  const [lessonId] = useState(initialLessonId);
  const [hearts, setHearts] = useState(initialHearts);
  const [percentage, setPercentage] = useState(() => {
    return initialPercentage === 100 ? 0 : initialPercentage;
  });
  const [challenges] = useState(initialLessonChallenges);
  const [activeIndex, setActiveIndex] = useState(() => {
    const uncompletedIndex = challenges.findIndex(
      (challenge) => !challenge.completed
    );

    return uncompletedIndex === -1 ? 0 : uncompletedIndex;
  });

  const [selectedOption, setSelectedOption] = useState<number>();
  const [status, setStatus] = useState<"none" | "wrong" | "correct">("none");
  const [streak, setStreak] = useState(0);
  const [burst, setBurst] = useState<{
    key: number;
    pieces: number;
    message: string;
  } | null>(null);
  const [questionResults, setQuestionResults] = useState<QuestionResult[]>([]);
  const [reviewOpen, setReviewOpen] = useState(false);

  const challenge = challenges[activeIndex];
  const options = challenge?.challengeOptions ?? [];
  const displayQuestion = challenge
    ? localizeQuestion(challenge.question, uiLocale)
    : "";

  useEffect(() => {
    if (!burst) return;

    const timeout = window.setTimeout(() => setBurst(null), 2400);

    return () => window.clearTimeout(timeout);
  }, [burst]);

  const onNext = () => {
    setActiveIndex((current) => current + 1);
  };

  const onSelect = (id: number) => {
    if (status !== "none") return;

    setSelectedOption(id);
  };

  const recordQuestionResult = ({
    correct,
    correctResponse,
  }: {
    correct: boolean;
    correctResponse: string;
  }) => {
    const selectedResponse =
      options.find((option) => option.id === selectedOption)?.text ?? "";

    setQuestionResults((current) => [
      ...current,
      {
        id: challenge.id,
        question: displayQuestion,
        prompt: challenge.prompt,
        code: challenge.code,
        hint: challenge.hint,
        yourResponse: selectedResponse,
        correctResponse,
        correct,
      },
    ]);
  };

  const onContinue = () => {
    if (!selectedOption) return;

    if (status === "wrong") {
      setStatus("none");
      setSelectedOption(undefined);
      return;
    }

    if (status === "correct") {
      onNext();
      setStatus("none");
      setSelectedOption(undefined);
      return;
    }

    const correctOption = options.find((option) => option.correct);

    if (!correctOption) return;

    if (correctOption.id === selectedOption) {
      recordQuestionResult({
        correct: true,
        correctResponse: correctOption.text,
      });

      startTransition(() => {
        upsertChallengeProgress(challenge.id)
          .then((response) => {
            if (response?.error === "hearts") {
              openHeartsModal();
              return;
            }

            void correctControls.play();
            setStatus("correct");
            setPercentage((prev) => prev + 100 / challenges.length);
            setStreak((current) => {
              const next = current + 1;
              const milestone =
                copy.streakMessages[next as keyof typeof copy.streakMessages];

              setBurst({
                key: Date.now(),
                pieces: Math.min(120 + next * 24, 420),
                message: milestone ?? copy.correctDefault,
              });

              return next;
            });

            // This is a practice
            if (initialPercentage === 100) {
              setHearts((prev) => Math.min(prev + 1, MAX_HEARTS));
            }
          })
          .catch(() => toast.error(`${uiCopy[uiLocale].courses.error}`));
      });
    } else {
      recordQuestionResult({
        correct: false,
        correctResponse: correctOption.text,
      });

      startTransition(() => {
        reduceHearts(challenge.id)
          .then((response) => {
            if (response?.error === "hearts") {
              openHeartsModal();
              return;
            }

            void incorrectControls.play();
            setStatus("wrong");
            setStreak(0);

            if (!response?.error) setHearts((prev) => Math.max(prev - 1, 0));
          })
          .catch(() => toast.error(`${uiCopy[uiLocale].courses.error}`));
      });
    }
  };

  if (!challenge) {
    return (
      <>
        {finishAudio}
        <Confetti
          recycle={false}
          numberOfPieces={500}
          tweenDuration={10_000}
          width={width}
          height={height}
        />
        <div className="glass-panel-strong mx-auto flex max-w-lg flex-col items-center justify-center gap-y-4 rounded-3xl p-8 text-center lg:gap-y-8">
          <Image
            src="/memoji/replacements/finish.png"
            alt="Finish"
            className="hidden lg:block"
            height={100}
            width={100}
          />

          <Image
            src="/memoji/replacements/finish.png"
            alt="Finish"
            className="block lg:hidden"
            height={100}
            width={100}
          />

          <h1 className="text-lg font-bold text-foreground lg:text-3xl">
            {copy.completedMessage}
          </h1>

          <div className="flex w-full items-center gap-x-4">
            <ResultCard
              uiLocale={uiLocale}
              variant="points"
              value={challenges.length * 10}
            />
            <ResultCard
              uiLocale={uiLocale}
              variant="hearts"
              value={userSubscription?.isActive ? Infinity : hearts}
            />
          </div>

          <button
            className="glass-control flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-extrabold uppercase text-muted-foreground transition hover:text-foreground active:translate-y-0.5"
            onClick={() => setReviewOpen(true)}
          >
            <BookOpenCheck className="h-5 w-5" />
            {copy.reviewLesson}
          </button>
        </div>

        <Footer
          lessonId={lessonId}
          status="completed"
          onCheck={() => router.push("/learn")}
          uiLocale={uiLocale}
        />

        <ReviewLessonModal
          open={reviewOpen}
          onClose={() => setReviewOpen(false)}
          results={questionResults}
          courseTitle={courseTitle}
          uiLocale={uiLocale}
        />
      </>
    );
  }

  const title =
    challenge.type === "ASSIST"
      ? copy.selectCorrectMeaning
      : challenge.question;

  return (
    <>
      {incorrectAudio}
      {correctAudio}
      {burst && (
        <>
          <Confetti
            key={burst.key}
            recycle={false}
            numberOfPieces={burst.pieces}
            tweenDuration={4000}
            width={width}
            height={height}
          />
          <div className="glass-panel-strong pointer-events-none fixed left-1/2 top-6 z-50 -translate-x-1/2 rounded-full px-4 py-2 text-sm font-bold text-green-600">
            {burst.message}
          </div>
        </>
      )}
      {streak >= 2 && (
        <div className="glass-panel-strong pointer-events-none fixed right-5 top-5 z-40 rounded-full px-3 py-2 text-sm font-bold text-orange-600">
          {streak} {copy.streakLabel}
        </div>
      )}
      <Header
        hearts={hearts}
        percentage={percentage}
        hasActiveSubscription={!!userSubscription?.isActive}
      />

      <div className="flex-1">
        <div className="flex h-full items-center justify-center">
          <div className="flex w-full flex-col gap-y-12 px-6 lg:min-h-[350px] lg:w-[600px] lg:px-0">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={cn(
                  "rounded-full px-3 py-1 text-xs font-extrabold uppercase",
                  courseTheme.softClass,
                  courseTheme.textClass
                )}
              >
                {uiCopy[uiLocale].courseKinds[courseTheme.kind]}
              </span>
              {courseKind === "programming" && (
                <span className="glass-control rounded-full px-3 py-1 text-xs font-extrabold uppercase text-slate-600 dark:text-slate-200">
                  {copy.codeTokenDrill}
                </span>
              )}
            </div>

            <h1 className="text-center text-lg font-bold text-foreground lg:text-start lg:text-3xl">
              {localizeQuestion(title, uiLocale)}
            </h1>

            <div className="space-y-4">
              {challenge.type === "ASSIST" && (
                <QuestionBubble question={displayQuestion} />
              )}

              <ProgrammingPrompt
                prompt={challenge.prompt}
                code={challenge.code}
                hint={challenge.hint}
              />

              <Challenge
                options={options}
                onSelect={onSelect}
                status={status}
                selectedOption={selectedOption}
                disabled={pending}
                type={challenge.type}
                courseTitle={courseTitle}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer
        disabled={pending || !selectedOption}
        status={status}
        onCheck={onContinue}
        uiLocale={uiLocale}
      />
    </>
  );
};

const ReviewLessonModal = ({
  open,
  onClose,
  results,
  courseTitle,
  uiLocale,
}: {
  open: boolean;
  onClose: () => void;
  results: QuestionResult[];
  courseTitle: string;
  uiLocale: UiLocale;
}) => {
  const theme = getCourseTheme({ title: courseTitle });
  const copy = uiCopy[uiLocale].lesson;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center p-4 transition",
        open ? "opacity-100" : "pointer-events-none opacity-0"
      )}
      aria-hidden={!open}
    >
      <div
        className="absolute inset-0 bg-slate-950/70 backdrop-blur-xl"
        onClick={onClose}
        role="button"
        aria-label={copy.closeReview}
      />

      <section className="glass-panel-strong relative max-h-[86vh] w-full max-w-4xl overflow-hidden rounded-2xl shadow-2xl">
        <header
          className={cn(
            "flex items-start justify-between gap-4 border-b-2 p-5 text-white",
            theme.bannerClass
          )}
        >
          <div>
            <p className="text-xs font-extrabold uppercase text-white/75">
              {copy.lessonScorecard}
            </p>
            <h2 className="mt-1 text-2xl font-extrabold">
              {copy.reviewAnswers}
            </h2>
          </div>
          <button
            className="rounded-full bg-white/15 p-2 text-white transition hover:bg-white/25"
            onClick={onClose}
            title={copy.closeReview}
          >
            <X className="h-5 w-5" />
            <span className="sr-only">{copy.closeReview}</span>
          </button>
        </header>

        <div className="max-h-[calc(86vh-98px)] overflow-y-auto p-5">
          {results.length === 0 ? (
            <div className="glass-panel-soft rounded-xl border-dashed p-8 text-center text-sm font-semibold text-muted-foreground">
              {copy.reviewEmpty}
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {results.map((result, index) => (
                <article
                  key={`${result.id}-${index}`}
                  className={cn(
                    "glass-card space-y-3 rounded-xl p-4",
                    result.correct
                      ? "border-green-300/60 bg-green-500/10"
                      : "border-rose-300/60 bg-rose-500/10"
                  )}
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-sm font-extrabold leading-6 text-foreground">
                      {result.question}
                    </h3>
                    {result.correct ? (
                      <CheckCircle className="h-5 w-5 shrink-0 text-green-600" />
                    ) : (
                      <XCircle className="h-5 w-5 shrink-0 text-rose-600" />
                    )}
                  </div>

                  {result.prompt && (
                    <p className="glass-panel-soft whitespace-pre-wrap rounded-lg p-3 text-xs font-semibold leading-5 text-foreground">
                      {result.prompt}
                    </p>
                  )}

                  {result.code && (
                    <pre className="glass-code overflow-x-auto rounded-lg p-3 text-xs leading-5 text-white">
                      <code>{result.code}</code>
                    </pre>
                  )}

                  <div className="grid gap-2 text-xs font-bold">
                    <div>
                      <div className="uppercase text-muted-foreground">
                        {copy.yourResponse}
                      </div>
                      <div className="glass-panel-soft mt-1 rounded-lg p-2 text-foreground">
                        {result.yourResponse || copy.noResponse}
                      </div>
                    </div>
                    <div>
                      <div className="uppercase text-muted-foreground">
                        {copy.correctResponse}
                      </div>
                      <div className="glass-panel-soft mt-1 rounded-lg p-2 text-foreground">
                        {result.correctResponse}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
