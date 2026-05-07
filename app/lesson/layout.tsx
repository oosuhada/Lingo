import type { PropsWithChildren } from "react";

const LessonLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex min-h-screen w-full flex-col">{children}</div>
    </div>
  );
};

export default LessonLayout;
