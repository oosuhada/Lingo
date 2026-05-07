import { Code2, Lightbulb } from "lucide-react";

type ProgrammingPromptProps = {
  prompt: string | null;
  code: string | null;
  hint: string | null;
};

export const ProgrammingPrompt = ({
  prompt,
  code,
  hint,
}: ProgrammingPromptProps) => {
  if (!prompt && !code && !hint) return null;

  return (
    <div className="glass-card space-y-3 rounded-2xl p-4 text-left">
      {prompt && (
        <div className="flex gap-3">
          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-950 text-white">
            <Code2 className="h-4 w-4" />
          </div>
          <p className="whitespace-pre-wrap text-sm font-semibold leading-6 text-foreground lg:text-base">
            {prompt}
          </p>
        </div>
      )}

      {code && (
        <pre className="glass-code overflow-x-auto rounded-lg p-4 text-sm leading-6 text-white shadow-inner">
          <code>{code}</code>
        </pre>
      )}

      {hint && (
        <div className="flex gap-2 rounded-lg border border-amber-300/60 bg-amber-300/15 p-3 text-sm font-semibold leading-6 text-amber-800 dark:text-amber-200">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0" />
          <p className="whitespace-pre-wrap">{hint}</p>
        </div>
      )}
    </div>
  );
};
