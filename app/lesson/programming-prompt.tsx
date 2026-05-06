import { Lightbulb } from "lucide-react";

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
    <div className="space-y-3 rounded-lg border-2 border-slate-200 bg-white p-4 text-left shadow-sm">
      {prompt && (
        <p className="whitespace-pre-wrap text-sm leading-6 text-neutral-700 lg:text-base">
          {prompt}
        </p>
      )}

      {code && (
        <pre className="overflow-x-auto rounded-md bg-neutral-900 p-4 text-sm leading-6 text-white">
          <code>{code}</code>
        </pre>
      )}

      {hint && (
        <div className="flex gap-2 rounded-md border border-amber-200 bg-amber-50 p-3 text-sm leading-6 text-amber-900">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0" />
          <p className="whitespace-pre-wrap">{hint}</p>
        </div>
      )}
    </div>
  );
};
