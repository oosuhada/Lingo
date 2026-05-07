import type { UnitSeed } from "../../types";

export const unit3: UnitSeed = {
  "title": "Unit 3",
  "description": "Learn Hanja for nature, weather, and elements",
  "lessons": [
    {
      "title": "Sky and earth",
      "challenges": [
        {
          "type": "SELECT",
          "question": "Which one means \"하늘\"?",
          "options": [
            {
              "text": "天",
              "correct": true
            },
            {
              "text": "地",
              "correct": false
            },
            {
              "text": "雨",
              "correct": false
            },
            {
              "text": "風",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "天",
          "options": [
            {
              "text": "하늘",
              "correct": true
            },
            {
              "text": "땅",
              "correct": false
            },
            {
              "text": "비",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"땅\"?",
          "options": [
            {
              "text": "地",
              "correct": true
            },
            {
              "text": "天",
              "correct": false
            },
            {
              "text": "海",
              "correct": false
            },
            {
              "text": "山",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "地",
          "options": [
            {
              "text": "땅",
              "correct": true
            },
            {
              "text": "하늘",
              "correct": false
            },
            {
              "text": "비",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"비\"?",
          "options": [
            {
              "text": "雨",
              "correct": true
            },
            {
              "text": "雪",
              "correct": false
            },
            {
              "text": "雲",
              "correct": false
            },
            {
              "text": "水",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "雨",
          "options": [
            {
              "text": "비",
              "correct": true
            },
            {
              "text": "하늘",
              "correct": false
            },
            {
              "text": "땅",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"바람\"?",
          "options": [
            {
              "text": "風",
              "correct": true
            },
            {
              "text": "雨",
              "correct": false
            },
            {
              "text": "火",
              "correct": false
            },
            {
              "text": "山",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "風",
          "options": [
            {
              "text": "바람",
              "correct": true
            },
            {
              "text": "하늘",
              "correct": false
            },
            {
              "text": "땅",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Weather",
      "challenges": [
        {
          "type": "SELECT",
          "question": "Which one means \"눈\"?",
          "options": [
            {
              "text": "雪",
              "correct": true
            },
            {
              "text": "雨",
              "correct": false
            },
            {
              "text": "雲",
              "correct": false
            },
            {
              "text": "霜",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "雪",
          "options": [
            {
              "text": "눈",
              "correct": true
            },
            {
              "text": "구름",
              "correct": false
            },
            {
              "text": "서리",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"구름\"?",
          "options": [
            {
              "text": "雲",
              "correct": true
            },
            {
              "text": "雪",
              "correct": false
            },
            {
              "text": "風",
              "correct": false
            },
            {
              "text": "天",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "雲",
          "options": [
            {
              "text": "구름",
              "correct": true
            },
            {
              "text": "눈",
              "correct": false
            },
            {
              "text": "서리",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"서리\"?",
          "options": [
            {
              "text": "霜",
              "correct": true
            },
            {
              "text": "雪",
              "correct": false
            },
            {
              "text": "雨",
              "correct": false
            },
            {
              "text": "水",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "霜",
          "options": [
            {
              "text": "서리",
              "correct": true
            },
            {
              "text": "눈",
              "correct": false
            },
            {
              "text": "구름",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"빛\"?",
          "options": [
            {
              "text": "光",
              "correct": true
            },
            {
              "text": "音",
              "correct": false
            },
            {
              "text": "色",
              "correct": false
            },
            {
              "text": "火",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "光",
          "options": [
            {
              "text": "빛",
              "correct": true
            },
            {
              "text": "눈",
              "correct": false
            },
            {
              "text": "구름",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Land and water",
      "challenges": [
        {
          "type": "SELECT",
          "question": "Which one means \"내 또는 강\"?",
          "options": [
            {
              "text": "川",
              "correct": true
            },
            {
              "text": "江",
              "correct": false
            },
            {
              "text": "海",
              "correct": false
            },
            {
              "text": "山",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "川",
          "options": [
            {
              "text": "내 또는 강",
              "correct": true
            },
            {
              "text": "큰 강",
              "correct": false
            },
            {
              "text": "바다",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"큰 강\"?",
          "options": [
            {
              "text": "江",
              "correct": true
            },
            {
              "text": "川",
              "correct": false
            },
            {
              "text": "湖",
              "correct": false
            },
            {
              "text": "水",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "江",
          "options": [
            {
              "text": "큰 강",
              "correct": true
            },
            {
              "text": "내 또는 강",
              "correct": false
            },
            {
              "text": "바다",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"바다\"?",
          "options": [
            {
              "text": "海",
              "correct": true
            },
            {
              "text": "山",
              "correct": false
            },
            {
              "text": "田",
              "correct": false
            },
            {
              "text": "川",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "海",
          "options": [
            {
              "text": "바다",
              "correct": true
            },
            {
              "text": "내 또는 강",
              "correct": false
            },
            {
              "text": "큰 강",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"논밭\"?",
          "options": [
            {
              "text": "田",
              "correct": true
            },
            {
              "text": "石",
              "correct": false
            },
            {
              "text": "土",
              "correct": false
            },
            {
              "text": "林",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "田",
          "options": [
            {
              "text": "논밭",
              "correct": true
            },
            {
              "text": "내 또는 강",
              "correct": false
            },
            {
              "text": "큰 강",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Plants",
      "challenges": [
        {
          "type": "SELECT",
          "question": "Which one means \"숲\"?",
          "options": [
            {
              "text": "林",
              "correct": true
            },
            {
              "text": "森",
              "correct": false
            },
            {
              "text": "草",
              "correct": false
            },
            {
              "text": "花",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "林",
          "options": [
            {
              "text": "숲",
              "correct": true
            },
            {
              "text": "빽빽한 숲",
              "correct": false
            },
            {
              "text": "풀",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"빽빽한 숲\"?",
          "options": [
            {
              "text": "森",
              "correct": true
            },
            {
              "text": "林",
              "correct": false
            },
            {
              "text": "木",
              "correct": false
            },
            {
              "text": "竹",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "森",
          "options": [
            {
              "text": "빽빽한 숲",
              "correct": true
            },
            {
              "text": "숲",
              "correct": false
            },
            {
              "text": "풀",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"풀\"?",
          "options": [
            {
              "text": "草",
              "correct": true
            },
            {
              "text": "花",
              "correct": false
            },
            {
              "text": "竹",
              "correct": false
            },
            {
              "text": "木",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "草",
          "options": [
            {
              "text": "풀",
              "correct": true
            },
            {
              "text": "숲",
              "correct": false
            },
            {
              "text": "빽빽한 숲",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"꽃\"?",
          "options": [
            {
              "text": "花",
              "correct": true
            },
            {
              "text": "草",
              "correct": false
            },
            {
              "text": "林",
              "correct": false
            },
            {
              "text": "葉",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "花",
          "options": [
            {
              "text": "꽃",
              "correct": true
            },
            {
              "text": "숲",
              "correct": false
            },
            {
              "text": "빽빽한 숲",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Elements and materials",
      "challenges": [
        {
          "type": "SELECT",
          "question": "Which one means \"쇠 또는 금\"?",
          "options": [
            {
              "text": "金",
              "correct": true
            },
            {
              "text": "石",
              "correct": false
            },
            {
              "text": "土",
              "correct": false
            },
            {
              "text": "木",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "金",
          "options": [
            {
              "text": "쇠 또는 금",
              "correct": true
            },
            {
              "text": "돌",
              "correct": false
            },
            {
              "text": "대나무",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"돌\"?",
          "options": [
            {
              "text": "石",
              "correct": true
            },
            {
              "text": "金",
              "correct": false
            },
            {
              "text": "水",
              "correct": false
            },
            {
              "text": "火",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "石",
          "options": [
            {
              "text": "돌",
              "correct": true
            },
            {
              "text": "쇠 또는 금",
              "correct": false
            },
            {
              "text": "대나무",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"대나무\"?",
          "options": [
            {
              "text": "竹",
              "correct": true
            },
            {
              "text": "木",
              "correct": false
            },
            {
              "text": "草",
              "correct": false
            },
            {
              "text": "林",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "竹",
          "options": [
            {
              "text": "대나무",
              "correct": true
            },
            {
              "text": "쇠 또는 금",
              "correct": false
            },
            {
              "text": "돌",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"옥\"?",
          "options": [
            {
              "text": "玉",
              "correct": true
            },
            {
              "text": "金",
              "correct": false
            },
            {
              "text": "石",
              "correct": false
            },
            {
              "text": "土",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "玉",
          "options": [
            {
              "text": "옥",
              "correct": true
            },
            {
              "text": "쇠 또는 금",
              "correct": false
            },
            {
              "text": "돌",
              "correct": false
            }
          ]
        }
      ]
    }
  ]
};
