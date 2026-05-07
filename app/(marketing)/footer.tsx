import Image from "next/image";

const marketingCourses = [
  { title: "Korean", imageSrc: "/ko.svg" },
  { title: "Japanese", imageSrc: "/jp.svg" },
  { title: "Spanish", imageSrc: "/es.svg" },
  { title: "Italian", imageSrc: "/it.svg" },
  { title: "English", imageSrc: "/en.svg" },
  { title: "Hanja", imageSrc: "/memoji/replacements/hanja.svg" },
  { title: "Python", imageSrc: "/memoji/replacements/python-logo.png" },
  { title: "Java", imageSrc: "/memoji/replacements/java-svgrepo-com.svg" },
];

export const Footer = () => {
  const marqueeCourses = [...marketingCourses, ...marketingCourses];

  return (
    <div className="glass-nav hidden h-20 w-full overflow-hidden border-t p-2 lg:block">
      <div className="lingo-marquee-track h-full items-center gap-3">
        {marqueeCourses.map((course, index) => (
          <div
            key={`${course.title}-${index}`}
            className="flex h-12 min-w-fit select-none items-center gap-3 rounded-2xl px-6 text-sm font-extrabold uppercase tracking-wide text-muted-foreground"
            aria-hidden={index >= marketingCourses.length}
          >
            <Image
              src={course.imageSrc}
              alt={course.title}
              height={32}
              width={40}
              className="mr-3 rounded-md"
              style={{ height: 32, width: "auto" }}
            />
            {course.title}
          </div>
        ))}
      </div>
    </div>
  );
};
