export type ChallengeSeed = {
  type?: "SELECT" | "ASSIST";
  question: string;
  prompt?: string;
  code?: string;
  hint?: string;
  options: {
    text: string;
    correct: boolean;
    imageSrc?: string;
    audioSrc?: string;
  }[];
};

export type LessonSeed = {
  title: string;
  challenges: ChallengeSeed[];
};

export type UnitSeed = {
  title: string;
  description: string;
  lessons: LessonSeed[];
};

export type CourseSeed = {
  title: string;
  imageSrc: string;
  units: UnitSeed[];
};

export type VocabularyItem = {
  source: string;
  target: string;
  alt: string[];
};
