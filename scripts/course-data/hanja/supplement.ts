import type { ChallengeSeed, LessonSeed, UnitSeed } from "../types";

type HanjaPair = {
  meaning: string;
  character: string;
  altCharacters: string[];
  altMeanings: string[];
};

type HanjaLessonSeed = {
  title: string;
  pairs: HanjaPair[];
};

type HanjaUnitSeed = {
  title: string;
  description: string;
  lessons: HanjaLessonSeed[];
};

const makePairChallenges = (pair: HanjaPair): ChallengeSeed[] => [
  {
    type: "SELECT",
    question: `Which one means "${pair.meaning}"?`,
    options: [
      { text: pair.character, correct: true },
      ...pair.altCharacters.map((text) => ({ text, correct: false })),
    ],
  },
  {
    type: "ASSIST",
    question: pair.character,
    options: [
      { text: pair.meaning, correct: true },
      ...pair.altMeanings.map((text) => ({ text, correct: false })),
    ],
  },
];

const makeLesson = (lesson: HanjaLessonSeed): LessonSeed => ({
  title: lesson.title,
  challenges: lesson.pairs.flatMap(makePairChallenges),
});

const makeUnits = (units: HanjaUnitSeed[]): UnitSeed[] =>
  units.map((unit) => ({
    title: unit.title,
    description: unit.description,
    lessons: unit.lessons.map(makeLesson),
  }));

export const hanjaSupplementUnits = makeUnits([
  {
    title: "Unit 7",
    description: "Connect body, senses, and action characters",
    lessons: [
      {
        title: "Body characters",
        pairs: [
          {
            meaning: "눈",
            character: "目",
            altCharacters: ["耳", "口", "手"],
            altMeanings: ["귀", "입", "손"],
          },
          {
            meaning: "귀",
            character: "耳",
            altCharacters: ["目", "心", "言"],
            altMeanings: ["눈", "마음", "말"],
          },
          {
            meaning: "입",
            character: "口",
            altCharacters: ["手", "身", "力"],
            altMeanings: ["손", "몸", "힘"],
          },
          {
            meaning: "손",
            character: "手",
            altCharacters: ["目", "耳", "口"],
            altMeanings: ["눈", "귀", "입"],
          },
        ],
      },
      {
        title: "Mind and speech",
        pairs: [
          {
            meaning: "마음",
            character: "心",
            altCharacters: ["身", "力", "言"],
            altMeanings: ["몸", "힘", "말"],
          },
          {
            meaning: "몸",
            character: "身",
            altCharacters: ["心", "口", "目"],
            altMeanings: ["마음", "입", "눈"],
          },
          {
            meaning: "힘",
            character: "力",
            altCharacters: ["言", "手", "耳"],
            altMeanings: ["말", "손", "귀"],
          },
          {
            meaning: "말",
            character: "言",
            altCharacters: ["心", "力", "身"],
            altMeanings: ["마음", "힘", "몸"],
          },
        ],
      },
    ],
  },
  {
    title: "Unit 8",
    description: "Read school, learning, and relationship characters",
    lessons: [
      {
        title: "Learning",
        pairs: [
          {
            meaning: "배우다",
            character: "學",
            altCharacters: ["校", "文", "書"],
            altMeanings: ["학교", "글", "책"],
          },
          {
            meaning: "학교",
            character: "校",
            altCharacters: ["學", "先", "生"],
            altMeanings: ["배우다", "먼저", "살다"],
          },
          {
            meaning: "글",
            character: "文",
            altCharacters: ["書", "友", "師"],
            altMeanings: ["책", "벗", "스승"],
          },
          {
            meaning: "책",
            character: "書",
            altCharacters: ["文", "校", "學"],
            altMeanings: ["글", "학교", "배우다"],
          },
        ],
      },
      {
        title: "People at school",
        pairs: [
          {
            meaning: "먼저",
            character: "先",
            altCharacters: ["生", "友", "師"],
            altMeanings: ["살다", "벗", "스승"],
          },
          {
            meaning: "살다",
            character: "生",
            altCharacters: ["先", "校", "書"],
            altMeanings: ["먼저", "학교", "책"],
          },
          {
            meaning: "벗",
            character: "友",
            altCharacters: ["師", "文", "學"],
            altMeanings: ["스승", "글", "배우다"],
          },
          {
            meaning: "스승",
            character: "師",
            altCharacters: ["友", "先", "生"],
            altMeanings: ["벗", "먼저", "살다"],
          },
        ],
      },
    ],
  },
  {
    title: "Unit 9",
    description: "Practice society, place, and movement characters",
    lessons: [
      {
        title: "Places",
        pairs: [
          {
            meaning: "나라",
            character: "國",
            altCharacters: ["市", "家", "門"],
            altMeanings: ["도시", "집", "문"],
          },
          {
            meaning: "도시",
            character: "市",
            altCharacters: ["國", "行", "來"],
            altMeanings: ["나라", "가다", "오다"],
          },
          {
            meaning: "집",
            character: "家",
            altCharacters: ["門", "入", "出"],
            altMeanings: ["문", "들어가다", "나오다"],
          },
          {
            meaning: "문",
            character: "門",
            altCharacters: ["家", "市", "國"],
            altMeanings: ["집", "도시", "나라"],
          },
        ],
      },
      {
        title: "Movement",
        pairs: [
          {
            meaning: "가다",
            character: "行",
            altCharacters: ["來", "入", "出"],
            altMeanings: ["오다", "들어가다", "나오다"],
          },
          {
            meaning: "오다",
            character: "來",
            altCharacters: ["行", "門", "國"],
            altMeanings: ["가다", "문", "나라"],
          },
          {
            meaning: "들어가다",
            character: "入",
            altCharacters: ["出", "行", "來"],
            altMeanings: ["나오다", "가다", "오다"],
          },
          {
            meaning: "나오다",
            character: "出",
            altCharacters: ["入", "家", "市"],
            altMeanings: ["들어가다", "집", "도시"],
          },
        ],
      },
    ],
  },
  {
    title: "Unit 10",
    description: "Review common compounds from earlier characters",
    lessons: [
      {
        title: "Everyday compounds",
        pairs: [
          {
            meaning: "학교",
            character: "學校",
            altCharacters: ["火山", "人口", "日月"],
            altMeanings: ["화산", "인구", "해와 달"],
          },
          {
            meaning: "화산",
            character: "火山",
            altCharacters: ["學校", "水木", "國家"],
            altMeanings: ["학교", "물과 나무", "국가"],
          },
          {
            meaning: "인구",
            character: "人口",
            altCharacters: ["日月", "先生", "市門"],
            altMeanings: ["해와 달", "선생", "도시 문"],
          },
          {
            meaning: "국가",
            character: "國家",
            altCharacters: ["學校", "人間", "出入"],
            altMeanings: ["학교", "인간", "출입"],
          },
        ],
      },
      {
        title: "Reading review",
        pairs: [
          {
            meaning: "인간",
            character: "人間",
            altCharacters: ["出入", "先生", "文章"],
            altMeanings: ["출입", "선생", "문장"],
          },
          {
            meaning: "출입",
            character: "出入",
            altCharacters: ["人間", "日月", "火山"],
            altMeanings: ["인간", "해와 달", "화산"],
          },
          {
            meaning: "선생",
            character: "先生",
            altCharacters: ["學校", "國家", "文章"],
            altMeanings: ["학교", "국가", "문장"],
          },
          {
            meaning: "문장",
            character: "文章",
            altCharacters: ["人間", "出入", "國家"],
            altMeanings: ["인간", "출입", "국가"],
          },
        ],
      },
    ],
  },
]);
