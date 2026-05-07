"use client";

import { useTransition } from "react";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { upsertUserProgress } from "@/actions/user-progress";
import { courses, userProgress } from "@/db/schema";
import { uiCopy, type UiLocale } from "@/lib/ui-copy";

import { Card } from "./card";

type ListProps = {
  title: string;
  description: string;
  courses: (typeof courses.$inferSelect)[];
  activeCourseId?: typeof userProgress.$inferSelect.activeCourseId;
  uiLocale: UiLocale;
};

export const List = ({
  title,
  description,
  courses,
  activeCourseId,
  uiLocale,
}: ListProps) => {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const onClick = (id: number) => {
    if (pending) return;

    if (id === activeCourseId) return router.push("/learn");

    startTransition(() => {
      upsertUserProgress(id)
        .then(() => {
          router.push("/learn");
          router.refresh();
        })
        .catch(() => toast.error(uiCopy[uiLocale].courses.error));
    });
  };

  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-xl font-extrabold text-foreground">{title}</h2>
        <p className="mt-1 text-sm font-medium text-muted-foreground">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(220px,1fr))]">
        {courses.map((course) => (
          <Card
            key={course.id}
            id={course.id}
            title={course.title}
            imageSrc={course.imageSrc}
            onClick={onClick}
            disabled={pending}
            isActive={course.id === activeCourseId}
            uiLocale={uiLocale}
          />
        ))}
      </div>
    </section>
  );
};
