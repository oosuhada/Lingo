import Image from "next/image";

import { Button } from "@/components/ui/button";

const marketingCourses = [
  { title: "Spanish", imageSrc: "/es.svg" },
  { title: "English", imageSrc: "/en.svg" },
  { title: "Korean", imageSrc: "/ko.svg" },
  { title: "Japanese", imageSrc: "/jp.svg" },
  { title: "Italian", imageSrc: "/it.svg" },
  { title: "Hanja", imageSrc: "/memoji/replacements/hanja.svg" },
  { title: "Python", imageSrc: "/memoji/replacements/python-logo.png" },
  { title: "Java", imageSrc: "/memoji/replacements/java-svgrepo-com.svg" },
];

export const Footer = () => {
  return (
    <div className="hidden h-20 w-full border-t-2 border-slate-200 p-2 lg:block">
      <div className="mx-auto flex h-full max-w-screen-lg items-center gap-2 overflow-x-auto">
        {marketingCourses.map((course) => (
          <Button
            key={course.title}
            size="lg"
            variant="ghost"
            className="min-w-fit cursor-default px-4"
          >
            <Image
              src={course.imageSrc}
              alt={course.title}
              height={32}
              width={40}
              className="mr-3 rounded-md"
            />
            {course.title}
          </Button>
        ))}
      </div>
    </div>
  );
};
