export type UiLocale = "en" | "ko";

export const UI_LOCALE_COOKIE = "lingo-ui-locale";

export const normalizeUiLocale = (locale?: string | null): UiLocale => {
  return locale === "ko" ? "ko" : "en";
};

export const uiCopy = {
  en: {
    common: {
      login: "Login",
      appLanguage: "Interface language",
      english: "English",
      korean: "Korean",
      unit: "Unit",
    },
    courseKinds: {
      language: "Language",
      hanja: "Hanja",
      programming: "Programming",
    },
    courseKindDescriptions: {
      language: "Vocabulary, listening cues, and translation practice.",
      hanja: "Characters, meanings, and Korean reading patterns.",
      programming: "Code drills, syntax memory, and problem-solving flow.",
    },
    marketing: {
      headline: "Learn, practice and master new languages with Lingo.",
      subhead: "Choose the interface language first, then start your course.",
      continueLearning: "Continue Learning",
      getStarted: "Get Started",
      signIn: "I already have an account",
    },
    nav: {
      learn: "Learn",
      leaderboard: "Leaderboard",
      quests: "Quests",
      shop: "Shop",
    },
    courses: {
      eyebrow: "Choose your path",
      title: "Course Library",
      description:
        "Languages, Hanja, and programming now have separate course surfaces so each track can grow into its own learning experience.",
      languageTitle: "Language Courses",
      languageDescription:
        "Everyday listening, translation, and vocabulary paths.",
      hanjaTitle: "Hanja Studio",
      hanjaDescription:
        "Character-first lessons for meaning and reading memory.",
      programmingTitle: "Code Labs",
      programmingDescription:
        "Python and Java courses shaped for syntax drills.",
      startCourse: "Start course",
      activeCourse: "Continue your next lesson",
      error: "Something went wrong.",
    },
    promo: {
      title: "Upgrade to Pro",
      description: "Get unlimited hearts and more!",
      action: "Upgrade today",
    },
    questsPanel: {
      title: "Quests",
      description: "Complete quests by earning points.",
      viewAll: "View all",
      earnXp: (value: number) => `Earn ${value} XP`,
    },
    leaderboard: {
      title: "Leaderboard",
      description: "See where you stand among other learners in the community.",
    },
    shop: {
      title: "Shop",
      description: "Spend your points on useful learning boosts.",
      refillHearts: "Refill hearts",
      unlimitedHearts: "Unlimited hearts",
      full: "full",
      settings: "settings",
      upgrade: "upgrade",
      redirecting: "Redirecting to checkout...",
    },
    modals: {
      heartsTitle: "You ran out of hearts!",
      heartsDescription:
        "Get Pro for unlimited hearts, or purchase them in the shop.",
      getUnlimitedHearts: "Get unlimited hearts",
      noThanks: "No thanks",
      practiceTitle: "Practice lesson",
      practiceDescription:
        "Use practice lessons to regain hearts and points. You cannot lose hearts or points in practice lessons.",
      understand: "I understand",
      exitTitle: "Wait, don't go!",
      exitDescription: "You're about to leave the lesson. Are you sure?",
      keepLearning: "Keep learning",
      endSession: "End session",
    },
    lesson: {
      reviewLesson: "Review lesson",
      completedMessage: "Great job! You've completed the lesson.",
      selectCorrectMeaning: "Select the correct meaning",
      lessonScorecard: "Lesson scorecard",
      reviewAnswers: "Review your answers",
      reviewEmpty: "Finish at least one challenge to see a review card.",
      closeReview: "Close review",
      yourResponse: "Your response",
      correctResponse: "Correct response",
      noResponse: "No response",
      codeTokenDrill: "Code token drill",
      streakLabel: "streak",
      correctDefault: "Correct. Nicely done.",
      streakMessages: {
        3: "3 in a row. Your rhythm is getting sharper.",
        5: "5 in a row. Full focus mode.",
        10: "10 in a row. That is real mastery energy.",
        15: "15 in a row. Keep the streak alive.",
        20: "20 in a row. Legendary run.",
      },
      nicelyDone: "Nicely done!",
      tryAgain: "Try again.",
      practiceAgain: "Practice again",
      check: "Check",
      next: "Next",
      retry: "Retry",
      continue: "Continue",
      heartsLeft: "Hearts Left",
      totalXp: "Total XP",
    },
    microcopy: {
      language: {
        action: "Continue your next lesson",
        unitCta: "Continue",
        currentLabel: "Start",
        lockedLabel: "Locked",
        completeLabel: "Practice",
      },
      hanja: {
        action: "Trace the next character set",
        unitCta: "Open Guide",
        currentLabel: "Start",
        lockedLabel: "Locked",
        completeLabel: "Practice",
      },
      programming: {
        action: "Build the next concept",
        unitCta: "Open Lab",
        currentLabel: "Start Lab",
        lockedLabel: "Locked",
        completeLabel: "Review",
      },
    },
  },
  ko: {
    common: {
      login: "로그인",
      appLanguage: "인터페이스 언어",
      english: "영어",
      korean: "한국어",
      unit: "유닛",
    },
    courseKinds: {
      language: "언어",
      hanja: "한자",
      programming: "프로그래밍",
    },
    courseKindDescriptions: {
      language: "어휘, 듣기 단서, 번역 연습을 함께 진행합니다.",
      hanja: "한자 뜻과 음, 한국어 어휘 연결을 익힙니다.",
      programming: "코드 문법, 토큰 기억, 문제 해결 흐름을 연습합니다.",
    },
    marketing: {
      headline: "Lingo로 새 언어를 배우고, 연습하고, 완성해보세요.",
      subhead: "먼저 안내 언어를 고른 다음 학습을 시작하세요.",
      continueLearning: "학습 이어가기",
      getStarted: "시작하기",
      signIn: "이미 계정이 있어요",
    },
    nav: {
      learn: "학습",
      leaderboard: "랭킹",
      quests: "퀘스트",
      shop: "상점",
    },
    courses: {
      eyebrow: "학습 경로 선택",
      title: "코스 라이브러리",
      description:
        "언어, 한자, 프로그래밍 코스를 분리해 각 트랙이 자기 방식으로 확장될 수 있게 구성했습니다.",
      languageTitle: "언어 코스",
      languageDescription: "듣기, 번역, 어휘를 일상 표현 중심으로 연습합니다.",
      hanjaTitle: "한자 스튜디오",
      hanjaDescription: "뜻과 음, 한국어 어휘 연결을 문자 중심으로 익힙니다.",
      programmingTitle: "코드 랩",
      programmingDescription:
        "Python과 Java 문법을 문제 풀이 흐름에 맞춰 연습합니다.",
      startCourse: "코스 시작",
      activeCourse: "다음 학습 이어가기",
      error: "문제가 발생했습니다.",
    },
    promo: {
      title: "Pro로 업그레이드",
      description: "하트를 무제한으로 사용하고 더 편하게 학습하세요.",
      action: "오늘 업그레이드",
    },
    questsPanel: {
      title: "퀘스트",
      description: "포인트를 모아 퀘스트를 완료하세요.",
      viewAll: "전체 보기",
      earnXp: (value: number) => `${value} XP 획득`,
    },
    leaderboard: {
      title: "랭킹",
      description: "다른 학습자들과 비교해 내 위치를 확인하세요.",
    },
    shop: {
      title: "상점",
      description: "포인트를 학습에 도움이 되는 아이템에 사용하세요.",
      refillHearts: "하트 채우기",
      unlimitedHearts: "무제한 하트",
      full: "가득 참",
      settings: "설정",
      upgrade: "업그레이드",
      redirecting: "결제 화면으로 이동 중...",
    },
    modals: {
      heartsTitle: "하트가 모두 소진됐어요!",
      heartsDescription:
        "Pro로 무제한 하트를 사용하거나 상점에서 하트를 충전하세요.",
      getUnlimitedHearts: "무제한 하트 받기",
      noThanks: "괜찮아요",
      practiceTitle: "연습 학습",
      practiceDescription:
        "연습 학습으로 하트와 포인트를 회복할 수 있어요. 연습 중에는 하트나 포인트를 잃지 않습니다.",
      understand: "알겠어요",
      exitTitle: "잠깐, 나가시겠어요?",
      exitDescription: "학습을 떠나려는 중입니다. 정말 나가시겠어요?",
      keepLearning: "계속 학습",
      endSession: "학습 종료",
    },
    lesson: {
      reviewLesson: "복습하기",
      completedMessage: "잘했어요! 이번 학습을 완료했습니다.",
      selectCorrectMeaning: "올바른 뜻을 고르세요",
      lessonScorecard: "학습 기록",
      reviewAnswers: "답변 다시 보기",
      reviewEmpty: "문제를 하나 이상 풀면 복습 카드가 표시됩니다.",
      closeReview: "복습 닫기",
      yourResponse: "내 답변",
      correctResponse: "정답",
      noResponse: "답변 없음",
      codeTokenDrill: "코드 토큰 연습",
      streakLabel: "연속 정답",
      correctDefault: "정답이에요. 잘했어요.",
      streakMessages: {
        3: "3문제 연속 정답이에요. 리듬이 좋아지고 있어요.",
        5: "5문제 연속 정답이에요. 집중력이 좋습니다.",
        10: "10문제 연속 정답이에요. 제대로 익히고 있어요.",
        15: "15문제 연속 정답이에요. 흐름을 유지해보세요.",
        20: "20문제 연속 정답이에요. 대단한 기록입니다.",
      },
      nicelyDone: "잘했어요!",
      tryAgain: "다시 시도해보세요.",
      practiceAgain: "다시 연습",
      check: "확인",
      next: "다음",
      retry: "다시",
      continue: "계속",
      heartsLeft: "남은 하트",
      totalXp: "총 XP",
    },
    microcopy: {
      language: {
        action: "다음 학습 이어가기",
        unitCta: "계속하기",
        currentLabel: "시작",
        lockedLabel: "잠김",
        completeLabel: "연습",
      },
      hanja: {
        action: "다음 한자 세트 익히기",
        unitCta: "가이드 열기",
        currentLabel: "시작",
        lockedLabel: "잠김",
        completeLabel: "복습",
      },
      programming: {
        action: "다음 개념 만들기",
        unitCta: "랩 열기",
        currentLabel: "랩 시작",
        lockedLabel: "잠김",
        completeLabel: "복습",
      },
    },
  },
} as const;

export const localizeQuestion = (question: string, locale: UiLocale) => {
  if (locale === "en") return question;

  if (question === "Select the correct meaning") return "올바른 뜻을 고르세요";

  const whichMeans = question.match(/^Which one means "(.+)"\?$/);
  if (whichMeans) return `"${whichMeans[1]}"의 뜻으로 맞는 것은?`;

  const whichOne = question.match(/^Which one of these is "(.+)"\?$/);
  if (whichOne) return `"${whichOne[1]}"에 해당하는 것은?`;

  const fillBlank = question.match(/^Fill the blank: (.+)$/);
  if (fillBlank) return `빈칸을 채우세요: ${fillBlank[1]}`;

  const bestSentence = question.match(/^Choose the best sentence: (.+)$/);
  if (bestSentence) return `알맞은 문장을 고르세요: ${bestSentence[1]}`;

  return question;
};
