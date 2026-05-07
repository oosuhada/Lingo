import Image from "next/image";

type QuestionBubbleProps = {
  question: string;
};

export const QuestionBubble = ({ question }: QuestionBubbleProps) => {
  return (
    <div className="mb-6 flex items-center gap-x-4">
      <Image
        src="/memoji/replacements/mascot.png"
        alt="Mascot"
        height={60}
        width={60}
        className="hidden lg:block"
      />
      <Image
        src="/memoji/replacements/mascot.png"
        alt="Mascot"
        height={40}
        width={40}
        className="block lg:hidden"
      />

      <div className="glass-panel-strong relative rounded-xl px-4 py-2 text-sm text-foreground lg:text-base">
        {question}

        <div
          className="absolute -left-3 top-1/2 h-0 w-0 -translate-y-1/2 rotate-90 transform border-x-8 border-t-8 border-x-transparent border-t-border"
          aria-hidden
        />
      </div>
    </div>
  );
};
