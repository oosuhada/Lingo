import type { ChallengeSeed, LessonSeed, UnitSeed, VocabularyItem } from "../types";

type SupportedLanguage = "English" | "Spanish" | "Korean" | "Japanese" | "Italian";

type SentenceItem = {
  prompt: string;
  answer: string;
  alt: string[];
};

type SupplementLesson = {
  title: string;
  vocabulary: VocabularyItem[];
  sentences: SentenceItem[];
};

type SupplementUnit = {
  title: string;
  description: string;
  lessons: SupplementLesson[];
};

const makeVocabularyChallenges = (
  vocabulary: VocabularyItem[]
): ChallengeSeed[] =>
  vocabulary.flatMap((item, index) => [
    {
      type: "SELECT",
      question: `Which one means "${item.source}"?`,
      options: [
        { text: item.target, correct: true },
        ...item.alt.map((text) => ({ text, correct: false })),
      ],
    },
    {
      type: "ASSIST",
      question: item.target,
      options: [
        { text: item.source, correct: true },
        ...vocabulary
          .filter((_, otherIndex) => otherIndex !== index)
          .slice(0, 2)
          .map((other) => ({ text: other.source, correct: false })),
      ],
    },
  ]);

const makeSentenceChallenges = (sentences: SentenceItem[]): ChallengeSeed[] =>
  sentences.map((sentence) => ({
    type: "SELECT",
    question: `Fill the blank: ${sentence.prompt}`,
    options: [
      { text: sentence.answer, correct: true },
      ...sentence.alt.map((text) => ({ text, correct: false })),
    ],
  }));

const makeLesson = (lesson: SupplementLesson): LessonSeed => ({
  title: lesson.title,
  challenges: [
    ...makeVocabularyChallenges(lesson.vocabulary),
    ...makeSentenceChallenges(lesson.sentences),
  ],
});

const makeUnits = (units: SupplementUnit[]): UnitSeed[] =>
  units.map((unit) => ({
    title: unit.title,
    description: unit.description,
    lessons: unit.lessons.map(makeLesson),
  }));

const courseUnits: Record<SupportedLanguage, SupplementUnit[]> = {
  English: [
    {
      title: "Unit 7",
      description: "Get around in a city and ask for directions",
      lessons: [
        {
          title: "City places",
          vocabulary: [
            { source: "역", target: "station", alt: ["market", "bank", "hotel"] },
            { source: "시장", target: "market", alt: ["station", "park", "street"] },
            { source: "은행", target: "bank", alt: ["hotel", "school", "market"] },
            { source: "호텔", target: "hotel", alt: ["bank", "station", "park"] },
          ],
          sentences: [
            { prompt: "The ___ is near.", answer: "station", alt: ["water", "read", "blue"] },
            { prompt: "I am at the ___.", answer: "market", alt: ["happy", "book", "sleep"] },
          ],
        },
        {
          title: "Directions",
          vocabulary: [
            { source: "왼쪽", target: "left", alt: ["right", "straight", "near"] },
            { source: "오른쪽", target: "right", alt: ["left", "far", "behind"] },
            { source: "곧장", target: "straight", alt: ["near", "left", "slow"] },
            { source: "근처", target: "near", alt: ["far", "right", "today"] },
          ],
          sentences: [
            { prompt: "Turn ___.", answer: "left", alt: ["eat", "school", "old"] },
            { prompt: "Go ___ ahead.", answer: "straight", alt: ["blue", "small", "water"] },
          ],
        },
      ],
    },
    {
      title: "Unit 8",
      description: "Order food and drink with useful phrases",
      lessons: [
        {
          title: "Food orders",
          vocabulary: [
            { source: "메뉴", target: "menu", alt: ["bill", "table", "fork"] },
            { source: "계산서", target: "bill", alt: ["menu", "water", "rice"] },
            { source: "테이블", target: "table", alt: ["fork", "bill", "door"] },
            { source: "주문", target: "order", alt: ["open", "walk", "read"] },
          ],
          sentences: [
            { prompt: "I want the ___.", answer: "menu", alt: ["left", "station", "old"] },
            { prompt: "Can I have the ___?", answer: "bill", alt: ["school", "happy", "book"] },
          ],
        },
        {
          title: "Taste",
          vocabulary: [
            { source: "달다", target: "sweet", alt: ["salty", "hot", "cold"] },
            { source: "짜다", target: "salty", alt: ["sweet", "fresh", "slow"] },
            { source: "뜨겁다", target: "hot", alt: ["cold", "small", "right"] },
            { source: "차갑다", target: "cold", alt: ["hot", "busy", "new"] },
          ],
          sentences: [
            { prompt: "The tea is ___.", answer: "hot", alt: ["left", "station", "market"] },
            { prompt: "This cake is ___.", answer: "sweet", alt: ["straight", "bank", "tired"] },
          ],
        },
      ],
    },
    {
      title: "Unit 9",
      description: "Talk about family, routines, and descriptions",
      lessons: [
        {
          title: "Family",
          vocabulary: [
            { source: "어머니", target: "mother", alt: ["father", "sister", "friend"] },
            { source: "아버지", target: "father", alt: ["mother", "brother", "teacher"] },
            { source: "친구", target: "friend", alt: ["family", "child", "parent"] },
            { source: "아이", target: "child", alt: ["friend", "teacher", "father"] },
          ],
          sentences: [
            { prompt: "My ___ is kind.", answer: "mother", alt: ["market", "left", "water"] },
            { prompt: "The ___ is young.", answer: "child", alt: ["bank", "sweet", "right"] },
          ],
        },
        {
          title: "Daily routine",
          vocabulary: [
            { source: "아침", target: "morning", alt: ["night", "today", "later"] },
            { source: "저녁", target: "evening", alt: ["morning", "now", "yesterday"] },
            { source: "일하다", target: "work", alt: ["rest", "eat", "walk"] },
            { source: "쉬다", target: "rest", alt: ["work", "open", "write"] },
          ],
          sentences: [
            { prompt: "I ___ in the morning.", answer: "work", alt: ["left", "sweet", "station"] },
            { prompt: "We ___ in the evening.", answer: "rest", alt: ["market", "blue", "cold"] },
          ],
        },
      ],
    },
    {
      title: "Unit 10",
      description: "Review stories and build short sentences",
      lessons: [
        {
          title: "Short story",
          vocabulary: [
            { source: "오늘", target: "today", alt: ["tomorrow", "yesterday", "now"] },
            { source: "내일", target: "tomorrow", alt: ["today", "soon", "never"] },
            { source: "함께", target: "together", alt: ["alone", "near", "far"] },
            { source: "다시", target: "again", alt: ["never", "later", "early"] },
          ],
          sentences: [
            { prompt: "We study ___.", answer: "together", alt: ["left", "bank", "hot"] },
            { prompt: "Try ___.", answer: "again", alt: ["market", "blue", "small"] },
          ],
        },
        {
          title: "Unit review",
          vocabulary: [
            { source: "문장", target: "sentence", alt: ["word", "letter", "sound"] },
            { source: "단어", target: "word", alt: ["sentence", "story", "answer"] },
            { source: "질문", target: "question", alt: ["answer", "lesson", "review"] },
            { source: "정답", target: "answer", alt: ["question", "word", "city"] },
          ],
          sentences: [
            { prompt: "Choose the correct ___.", answer: "answer", alt: ["station", "mother", "cold"] },
            { prompt: "Build a short ___.", answer: "sentence", alt: ["fork", "hotel", "old"] },
          ],
        },
      ],
    },
  ],
  Spanish: [
    {
      title: "Unit 7",
      description: "Get around in a city and ask for directions",
      lessons: [
        {
          title: "City places",
          vocabulary: [
            { source: "station", target: "la estacion", alt: ["el mercado", "el banco", "el hotel"] },
            { source: "market", target: "el mercado", alt: ["la estacion", "el parque", "la calle"] },
            { source: "bank", target: "el banco", alt: ["el hotel", "la escuela", "el mercado"] },
            { source: "hotel", target: "el hotel", alt: ["el banco", "la estacion", "el parque"] },
          ],
          sentences: [
            { prompt: "La ___ esta cerca.", answer: "estacion", alt: ["agua", "leer", "azul"] },
            { prompt: "Estoy en el ___.", answer: "mercado", alt: ["feliz", "libro", "dormir"] },
          ],
        },
        {
          title: "Directions",
          vocabulary: [
            { source: "left", target: "izquierda", alt: ["derecha", "recto", "cerca"] },
            { source: "right", target: "derecha", alt: ["izquierda", "lejos", "detras"] },
            { source: "straight", target: "recto", alt: ["cerca", "izquierda", "lento"] },
            { source: "near", target: "cerca", alt: ["lejos", "derecha", "hoy"] },
          ],
          sentences: [
            { prompt: "Gira a la ___.", answer: "izquierda", alt: ["comer", "escuela", "viejo"] },
            { prompt: "Sigue ___.", answer: "recto", alt: ["azul", "pequeno", "agua"] },
          ],
        },
      ],
    },
    {
      title: "Unit 8",
      description: "Order food and drink with useful phrases",
      lessons: [
        {
          title: "Food orders",
          vocabulary: [
            { source: "menu", target: "el menu", alt: ["la cuenta", "la mesa", "el tenedor"] },
            { source: "bill", target: "la cuenta", alt: ["el menu", "el agua", "el arroz"] },
            { source: "table", target: "la mesa", alt: ["el tenedor", "la cuenta", "la puerta"] },
            { source: "order", target: "pedir", alt: ["abrir", "caminar", "leer"] },
          ],
          sentences: [
            { prompt: "Quiero el ___.", answer: "menu", alt: ["izquierda", "estacion", "viejo"] },
            { prompt: "La ___, por favor.", answer: "cuenta", alt: ["escuela", "feliz", "libro"] },
          ],
        },
        {
          title: "Taste",
          vocabulary: [
            { source: "sweet", target: "dulce", alt: ["salado", "caliente", "frio"] },
            { source: "salty", target: "salado", alt: ["dulce", "fresco", "lento"] },
            { source: "hot", target: "caliente", alt: ["frio", "pequeno", "derecha"] },
            { source: "cold", target: "frio", alt: ["caliente", "ocupado", "nuevo"] },
          ],
          sentences: [
            { prompt: "El te esta ___.", answer: "caliente", alt: ["izquierda", "estacion", "mercado"] },
            { prompt: "Este pastel es ___.", answer: "dulce", alt: ["recto", "banco", "cansado"] },
          ],
        },
      ],
    },
    {
      title: "Unit 9",
      description: "Talk about family, routines, and descriptions",
      lessons: [
        {
          title: "Family",
          vocabulary: [
            { source: "mother", target: "la madre", alt: ["el padre", "la hermana", "el amigo"] },
            { source: "father", target: "el padre", alt: ["la madre", "el hermano", "el profesor"] },
            { source: "friend", target: "el amigo", alt: ["la familia", "el nino", "el padre"] },
            { source: "child", target: "el nino", alt: ["el amigo", "el profesor", "el padre"] },
          ],
          sentences: [
            { prompt: "Mi ___ es amable.", answer: "madre", alt: ["mercado", "izquierda", "agua"] },
            { prompt: "El ___ es joven.", answer: "nino", alt: ["banco", "dulce", "derecha"] },
          ],
        },
        {
          title: "Daily routine",
          vocabulary: [
            { source: "morning", target: "la manana", alt: ["la noche", "hoy", "despues"] },
            { source: "evening", target: "la tarde", alt: ["la manana", "ahora", "ayer"] },
            { source: "to work", target: "trabajar", alt: ["descansar", "comer", "caminar"] },
            { source: "to rest", target: "descansar", alt: ["trabajar", "abrir", "escribir"] },
          ],
          sentences: [
            { prompt: "Yo ___ por la manana.", answer: "trabajo", alt: ["izquierda", "dulce", "estacion"] },
            { prompt: "Nosotros ___ en la tarde.", answer: "descansamos", alt: ["mercado", "azul", "frio"] },
          ],
        },
      ],
    },
    {
      title: "Unit 10",
      description: "Review stories and build short sentences",
      lessons: [
        {
          title: "Short story",
          vocabulary: [
            { source: "today", target: "hoy", alt: ["manana", "ayer", "ahora"] },
            { source: "tomorrow", target: "manana", alt: ["hoy", "pronto", "nunca"] },
            { source: "together", target: "juntos", alt: ["solo", "cerca", "lejos"] },
            { source: "again", target: "otra vez", alt: ["nunca", "despues", "temprano"] },
          ],
          sentences: [
            { prompt: "Estudiamos ___.", answer: "juntos", alt: ["izquierda", "banco", "caliente"] },
            { prompt: "Intenta ___.", answer: "otra vez", alt: ["mercado", "azul", "pequeno"] },
          ],
        },
        {
          title: "Unit review",
          vocabulary: [
            { source: "sentence", target: "la frase", alt: ["la palabra", "la letra", "el sonido"] },
            { source: "word", target: "la palabra", alt: ["la frase", "la historia", "la respuesta"] },
            { source: "question", target: "la pregunta", alt: ["la respuesta", "la leccion", "el repaso"] },
            { source: "answer", target: "la respuesta", alt: ["la pregunta", "la palabra", "la ciudad"] },
          ],
          sentences: [
            { prompt: "Elige la ___ correcta.", answer: "respuesta", alt: ["estacion", "madre", "frio"] },
            { prompt: "Construye una ___ corta.", answer: "frase", alt: ["tenedor", "hotel", "viejo"] },
          ],
        },
      ],
    },
  ],
  Korean: [
    {
      title: "Unit 7",
      description: "도시에서 길을 묻고 위치를 말합니다",
      lessons: [
        {
          title: "도시 장소",
          vocabulary: [
            { source: "station", target: "역", alt: ["시장", "은행", "호텔"] },
            { source: "market", target: "시장", alt: ["역", "공원", "거리"] },
            { source: "bank", target: "은행", alt: ["호텔", "학교", "시장"] },
            { source: "hotel", target: "호텔", alt: ["은행", "역", "공원"] },
          ],
          sentences: [
            { prompt: "___이 가까워요.", answer: "역", alt: ["물", "읽다", "파란색"] },
            { prompt: "저는 ___에 있어요.", answer: "시장", alt: ["행복해요", "책", "자다"] },
          ],
        },
        {
          title: "방향",
          vocabulary: [
            { source: "left", target: "왼쪽", alt: ["오른쪽", "직진", "근처"] },
            { source: "right", target: "오른쪽", alt: ["왼쪽", "멀리", "뒤"] },
            { source: "straight", target: "직진", alt: ["근처", "왼쪽", "느리다"] },
            { source: "near", target: "근처", alt: ["멀리", "오른쪽", "오늘"] },
          ],
          sentences: [
            { prompt: "___으로 가세요.", answer: "왼쪽", alt: ["먹다", "학교", "오래된"] },
            { prompt: "계속 ___하세요.", answer: "직진", alt: ["파란색", "작은", "물"] },
          ],
        },
      ],
    },
    {
      title: "Unit 8",
      description: "식당에서 주문하고 맛을 표현합니다",
      lessons: [
        {
          title: "주문하기",
          vocabulary: [
            { source: "menu", target: "메뉴", alt: ["계산서", "테이블", "포크"] },
            { source: "bill", target: "계산서", alt: ["메뉴", "물", "밥"] },
            { source: "table", target: "테이블", alt: ["포크", "계산서", "문"] },
            { source: "order", target: "주문하다", alt: ["열다", "걷다", "읽다"] },
          ],
          sentences: [
            { prompt: "___를 주세요.", answer: "메뉴", alt: ["왼쪽", "역", "오래된"] },
            { prompt: "___ 주세요.", answer: "계산서", alt: ["학교", "행복한", "책"] },
          ],
        },
        {
          title: "맛 표현",
          vocabulary: [
            { source: "sweet", target: "달다", alt: ["짜다", "뜨겁다", "차갑다"] },
            { source: "salty", target: "짜다", alt: ["달다", "신선하다", "느리다"] },
            { source: "hot", target: "뜨겁다", alt: ["차갑다", "작다", "오른쪽"] },
            { source: "cold", target: "차갑다", alt: ["뜨겁다", "바쁘다", "새롭다"] },
          ],
          sentences: [
            { prompt: "차가 ___.", answer: "뜨거워요", alt: ["왼쪽", "역", "시장"] },
            { prompt: "케이크가 ___.", answer: "달아요", alt: ["직진", "은행", "피곤해요"] },
          ],
        },
      ],
    },
    {
      title: "Unit 9",
      description: "가족, 일상, 묘사를 말합니다",
      lessons: [
        {
          title: "가족",
          vocabulary: [
            { source: "mother", target: "어머니", alt: ["아버지", "누나", "친구"] },
            { source: "father", target: "아버지", alt: ["어머니", "형", "선생님"] },
            { source: "friend", target: "친구", alt: ["가족", "아이", "부모님"] },
            { source: "child", target: "아이", alt: ["친구", "선생님", "아버지"] },
          ],
          sentences: [
            { prompt: "제 ___는 친절해요.", answer: "어머니", alt: ["시장", "왼쪽", "물"] },
            { prompt: "그 ___는 어려요.", answer: "아이", alt: ["은행", "달아요", "오른쪽"] },
          ],
        },
        {
          title: "일상",
          vocabulary: [
            { source: "morning", target: "아침", alt: ["밤", "오늘", "나중"] },
            { source: "evening", target: "저녁", alt: ["아침", "지금", "어제"] },
            { source: "to work", target: "일하다", alt: ["쉬다", "먹다", "걷다"] },
            { source: "to rest", target: "쉬다", alt: ["일하다", "열다", "쓰다"] },
          ],
          sentences: [
            { prompt: "저는 아침에 ___.", answer: "일해요", alt: ["왼쪽", "달아요", "역"] },
            { prompt: "우리는 저녁에 ___.", answer: "쉬어요", alt: ["시장", "파란색", "차가워요"] },
          ],
        },
      ],
    },
    {
      title: "Unit 10",
      description: "짧은 이야기를 만들고 전체를 복습합니다",
      lessons: [
        {
          title: "짧은 이야기",
          vocabulary: [
            { source: "today", target: "오늘", alt: ["내일", "어제", "지금"] },
            { source: "tomorrow", target: "내일", alt: ["오늘", "곧", "절대"] },
            { source: "together", target: "함께", alt: ["혼자", "근처", "멀리"] },
            { source: "again", target: "다시", alt: ["절대", "나중에", "일찍"] },
          ],
          sentences: [
            { prompt: "우리는 ___ 공부해요.", answer: "함께", alt: ["왼쪽", "은행", "뜨거워요"] },
            { prompt: "___ 해보세요.", answer: "다시", alt: ["시장", "파란색", "작은"] },
          ],
        },
        {
          title: "종합 복습",
          vocabulary: [
            { source: "sentence", target: "문장", alt: ["단어", "글자", "소리"] },
            { source: "word", target: "단어", alt: ["문장", "이야기", "정답"] },
            { source: "question", target: "질문", alt: ["정답", "수업", "복습"] },
            { source: "answer", target: "정답", alt: ["질문", "단어", "도시"] },
          ],
          sentences: [
            { prompt: "올바른 ___을 고르세요.", answer: "정답", alt: ["역", "어머니", "차가운"] },
            { prompt: "짧은 ___을 만드세요.", answer: "문장", alt: ["포크", "호텔", "오래된"] },
          ],
        },
      ],
    },
  ],
  Japanese: [
    {
      title: "Unit 7",
      description: "Get around in a city and ask for directions",
      lessons: [
        {
          title: "City places",
          vocabulary: [
            { source: "station", target: "駅", alt: ["市場", "銀行", "ホテル"] },
            { source: "market", target: "市場", alt: ["駅", "公園", "道"] },
            { source: "bank", target: "銀行", alt: ["ホテル", "学校", "市場"] },
            { source: "hotel", target: "ホテル", alt: ["銀行", "駅", "公園"] },
          ],
          sentences: [
            { prompt: "___は近いです。", answer: "駅", alt: ["水", "読む", "青い"] },
            { prompt: "私は___にいます。", answer: "市場", alt: ["うれしい", "本", "寝る"] },
          ],
        },
        {
          title: "Directions",
          vocabulary: [
            { source: "left", target: "左", alt: ["右", "まっすぐ", "近く"] },
            { source: "right", target: "右", alt: ["左", "遠い", "後ろ"] },
            { source: "straight", target: "まっすぐ", alt: ["近く", "左", "遅い"] },
            { source: "near", target: "近く", alt: ["遠い", "右", "今日"] },
          ],
          sentences: [
            { prompt: "___に曲がってください。", answer: "左", alt: ["食べる", "学校", "古い"] },
            { prompt: "___進んでください。", answer: "まっすぐ", alt: ["青い", "小さい", "水"] },
          ],
        },
      ],
    },
    {
      title: "Unit 8",
      description: "Order food and drink with useful phrases",
      lessons: [
        {
          title: "Food orders",
          vocabulary: [
            { source: "menu", target: "メニュー", alt: ["会計", "テーブル", "フォーク"] },
            { source: "bill", target: "会計", alt: ["メニュー", "水", "ご飯"] },
            { source: "table", target: "テーブル", alt: ["フォーク", "会計", "ドア"] },
            { source: "order", target: "注文する", alt: ["開ける", "歩く", "読む"] },
          ],
          sentences: [
            { prompt: "___をください。", answer: "メニュー", alt: ["左", "駅", "古い"] },
            { prompt: "___をお願いします。", answer: "会計", alt: ["学校", "うれしい", "本"] },
          ],
        },
        {
          title: "Taste",
          vocabulary: [
            { source: "sweet", target: "甘い", alt: ["しょっぱい", "熱い", "冷たい"] },
            { source: "salty", target: "しょっぱい", alt: ["甘い", "新鮮", "遅い"] },
            { source: "hot", target: "熱い", alt: ["冷たい", "小さい", "右"] },
            { source: "cold", target: "冷たい", alt: ["熱い", "忙しい", "新しい"] },
          ],
          sentences: [
            { prompt: "お茶は___です。", answer: "熱い", alt: ["左", "駅", "市場"] },
            { prompt: "このケーキは___です。", answer: "甘い", alt: ["まっすぐ", "銀行", "疲れた"] },
          ],
        },
      ],
    },
    {
      title: "Unit 9",
      description: "Talk about family, routines, and descriptions",
      lessons: [
        {
          title: "Family",
          vocabulary: [
            { source: "mother", target: "母", alt: ["父", "姉", "友だち"] },
            { source: "father", target: "父", alt: ["母", "兄", "先生"] },
            { source: "friend", target: "友だち", alt: ["家族", "子ども", "親"] },
            { source: "child", target: "子ども", alt: ["友だち", "先生", "父"] },
          ],
          sentences: [
            { prompt: "私の___は親切です。", answer: "母", alt: ["市場", "左", "水"] },
            { prompt: "その___は若いです。", answer: "子ども", alt: ["銀行", "甘い", "右"] },
          ],
        },
        {
          title: "Daily routine",
          vocabulary: [
            { source: "morning", target: "朝", alt: ["夜", "今日", "後で"] },
            { source: "evening", target: "夕方", alt: ["朝", "今", "昨日"] },
            { source: "to work", target: "働く", alt: ["休む", "食べる", "歩く"] },
            { source: "to rest", target: "休む", alt: ["働く", "開ける", "書く"] },
          ],
          sentences: [
            { prompt: "私は朝に___。", answer: "働きます", alt: ["左", "甘い", "駅"] },
            { prompt: "私たちは夕方に___。", answer: "休みます", alt: ["市場", "青い", "冷たい"] },
          ],
        },
      ],
    },
    {
      title: "Unit 10",
      description: "Review stories and build short sentences",
      lessons: [
        {
          title: "Short story",
          vocabulary: [
            { source: "today", target: "今日", alt: ["明日", "昨日", "今"] },
            { source: "tomorrow", target: "明日", alt: ["今日", "すぐ", "決して"] },
            { source: "together", target: "一緒に", alt: ["一人で", "近く", "遠く"] },
            { source: "again", target: "もう一度", alt: ["決して", "後で", "早く"] },
          ],
          sentences: [
            { prompt: "私たちは___勉強します。", answer: "一緒に", alt: ["左", "銀行", "熱い"] },
            { prompt: "___やってください。", answer: "もう一度", alt: ["市場", "青い", "小さい"] },
          ],
        },
        {
          title: "Unit review",
          vocabulary: [
            { source: "sentence", target: "文", alt: ["単語", "文字", "音"] },
            { source: "word", target: "単語", alt: ["文", "物語", "答え"] },
            { source: "question", target: "質問", alt: ["答え", "授業", "復習"] },
            { source: "answer", target: "答え", alt: ["質問", "単語", "都市"] },
          ],
          sentences: [
            { prompt: "正しい___を選びます。", answer: "答え", alt: ["駅", "母", "冷たい"] },
            { prompt: "短い___を作ります。", answer: "文", alt: ["フォーク", "ホテル", "古い"] },
          ],
        },
      ],
    },
  ],
  Italian: [
    {
      title: "Unit 7",
      description: "Get around in a city and ask for directions",
      lessons: [
        {
          title: "City places",
          vocabulary: [
            { source: "station", target: "la stazione", alt: ["il mercato", "la banca", "l'hotel"] },
            { source: "market", target: "il mercato", alt: ["la stazione", "il parco", "la strada"] },
            { source: "bank", target: "la banca", alt: ["l'hotel", "la scuola", "il mercato"] },
            { source: "hotel", target: "l'hotel", alt: ["la banca", "la stazione", "il parco"] },
          ],
          sentences: [
            { prompt: "La ___ e vicina.", answer: "stazione", alt: ["acqua", "leggere", "blu"] },
            { prompt: "Sono al ___.", answer: "mercato", alt: ["felice", "libro", "dormire"] },
          ],
        },
        {
          title: "Directions",
          vocabulary: [
            { source: "left", target: "sinistra", alt: ["destra", "dritto", "vicino"] },
            { source: "right", target: "destra", alt: ["sinistra", "lontano", "dietro"] },
            { source: "straight", target: "dritto", alt: ["vicino", "sinistra", "lento"] },
            { source: "near", target: "vicino", alt: ["lontano", "destra", "oggi"] },
          ],
          sentences: [
            { prompt: "Gira a ___.", answer: "sinistra", alt: ["mangiare", "scuola", "vecchio"] },
            { prompt: "Vai ___.", answer: "dritto", alt: ["blu", "piccolo", "acqua"] },
          ],
        },
      ],
    },
    {
      title: "Unit 8",
      description: "Order food and drink with useful phrases",
      lessons: [
        {
          title: "Food orders",
          vocabulary: [
            { source: "menu", target: "il menu", alt: ["il conto", "il tavolo", "la forchetta"] },
            { source: "bill", target: "il conto", alt: ["il menu", "l'acqua", "il riso"] },
            { source: "table", target: "il tavolo", alt: ["la forchetta", "il conto", "la porta"] },
            { source: "order", target: "ordinare", alt: ["aprire", "camminare", "leggere"] },
          ],
          sentences: [
            { prompt: "Vorrei il ___.", answer: "menu", alt: ["sinistra", "stazione", "vecchio"] },
            { prompt: "Il ___, per favore.", answer: "conto", alt: ["scuola", "felice", "libro"] },
          ],
        },
        {
          title: "Taste",
          vocabulary: [
            { source: "sweet", target: "dolce", alt: ["salato", "caldo", "freddo"] },
            { source: "salty", target: "salato", alt: ["dolce", "fresco", "lento"] },
            { source: "hot", target: "caldo", alt: ["freddo", "piccolo", "destra"] },
            { source: "cold", target: "freddo", alt: ["caldo", "occupato", "nuovo"] },
          ],
          sentences: [
            { prompt: "Il te e ___.", answer: "caldo", alt: ["sinistra", "stazione", "mercato"] },
            { prompt: "Questa torta e ___.", answer: "dolce", alt: ["dritto", "banca", "stanco"] },
          ],
        },
      ],
    },
    {
      title: "Unit 9",
      description: "Talk about family, routines, and descriptions",
      lessons: [
        {
          title: "Family",
          vocabulary: [
            { source: "mother", target: "la madre", alt: ["il padre", "la sorella", "l'amico"] },
            { source: "father", target: "il padre", alt: ["la madre", "il fratello", "l'insegnante"] },
            { source: "friend", target: "l'amico", alt: ["la famiglia", "il bambino", "il genitore"] },
            { source: "child", target: "il bambino", alt: ["l'amico", "l'insegnante", "il padre"] },
          ],
          sentences: [
            { prompt: "Mia ___ e gentile.", answer: "madre", alt: ["mercato", "sinistra", "acqua"] },
            { prompt: "Il ___ e giovane.", answer: "bambino", alt: ["banca", "dolce", "destra"] },
          ],
        },
        {
          title: "Daily routine",
          vocabulary: [
            { source: "morning", target: "la mattina", alt: ["la notte", "oggi", "dopo"] },
            { source: "evening", target: "la sera", alt: ["la mattina", "adesso", "ieri"] },
            { source: "to work", target: "lavorare", alt: ["riposare", "mangiare", "camminare"] },
            { source: "to rest", target: "riposare", alt: ["lavorare", "aprire", "scrivere"] },
          ],
          sentences: [
            { prompt: "Io ___ la mattina.", answer: "lavoro", alt: ["sinistra", "dolce", "stazione"] },
            { prompt: "Noi ___ la sera.", answer: "riposiamo", alt: ["mercato", "blu", "freddo"] },
          ],
        },
      ],
    },
    {
      title: "Unit 10",
      description: "Review stories and build short sentences",
      lessons: [
        {
          title: "Short story",
          vocabulary: [
            { source: "today", target: "oggi", alt: ["domani", "ieri", "adesso"] },
            { source: "tomorrow", target: "domani", alt: ["oggi", "presto", "mai"] },
            { source: "together", target: "insieme", alt: ["da solo", "vicino", "lontano"] },
            { source: "again", target: "di nuovo", alt: ["mai", "dopo", "presto"] },
          ],
          sentences: [
            { prompt: "Studiamo ___.", answer: "insieme", alt: ["sinistra", "banca", "caldo"] },
            { prompt: "Prova ___.", answer: "di nuovo", alt: ["mercato", "blu", "piccolo"] },
          ],
        },
        {
          title: "Unit review",
          vocabulary: [
            { source: "sentence", target: "la frase", alt: ["la parola", "la lettera", "il suono"] },
            { source: "word", target: "la parola", alt: ["la frase", "la storia", "la risposta"] },
            { source: "question", target: "la domanda", alt: ["la risposta", "la lezione", "il ripasso"] },
            { source: "answer", target: "la risposta", alt: ["la domanda", "la parola", "la citta"] },
          ],
          sentences: [
            { prompt: "Scegli la ___ corretta.", answer: "risposta", alt: ["stazione", "madre", "freddo"] },
            { prompt: "Crea una ___ corta.", answer: "frase", alt: ["forchetta", "hotel", "vecchio"] },
          ],
        },
      ],
    },
  ],
};

export const buildLanguageSupplementUnits = (
  course: SupportedLanguage
): UnitSeed[] => makeUnits(courseUnits[course]);
