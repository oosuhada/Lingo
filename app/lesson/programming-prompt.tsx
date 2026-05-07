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
    <div className="space-y-3 rounded-xl border-2 border-slate-200 bg-white p-4 text-left shadow-sm">
      {prompt && (
        <div className="flex gap-3">
          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-950 text-white">
            <Code2 className="h-4 w-4" />
          </div>
          <p className="whitespace-pre-wrap text-sm font-semibold leading-6 text-neutral-700 lg:text-base">
            {prompt}
          </p>
        </div>
      )}

      {code && (
        <pre className="overflow-x-auto rounded-lg border border-slate-800 bg-neutral-950 p-4 text-sm leading-6 text-white shadow-inner">
          <code>{code}</code>
        </pre>
      )}

      {hint && (
        <div className="flex gap-2 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm font-semibold leading-6 text-amber-900">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0" />
          <p className="whitespace-pre-wrap">{hint}</p>
        </div>
      )}
    </div>
  );
};
