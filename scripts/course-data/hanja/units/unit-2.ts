import type { UnitSeed } from "../../types";

export const unit2: UnitSeed = {
  "title": "Unit 2",
  "description": "Learn Hanja for people, family, and the body",
  "lessons": [
    {
      "title": "People",
      "challenges": [
        {
          "type": "SELECT",
          "question": "Which one means \"남자\"?",
          "options": [
            {
              "text": "男",
              "correct": true
            },
            {
              "text": "女",
              "correct": false
            },
            {
              "text": "子",
              "correct": false
            },
            {
              "text": "父",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "男",
          "options": [
            {
              "text": "남자",
              "correct": true
            },
            {
              "text": "여자",
              "correct": false
            },
            {
              "text": "아이",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"여자\"?",
          "options": [
            {
              "text": "女",
              "correct": true
            },
            {
              "text": "男",
              "correct": false
            },
            {
              "text": "母",
              "correct": false
            },
            {
              "text": "人",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "女",
          "options": [
            {
              "text": "여자",
              "correct": true
            },
            {
              "text": "남자",
              "correct": false
            },
            {
              "text": "아이",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"아이\"?",
          "options": [
            {
              "text": "子",
              "correct": true
            },
            {
              "text": "父",
              "correct": false
            },
            {
              "text": "母",
              "correct": false
            },
            {
              "text": "兄",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "子",
          "options": [
            {
              "text": "아이",
              "correct": true
            },
            {
              "text": "남자",
              "correct": false
            },
            {
              "text": "여자",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"벗\"?",
          "options": [
            {
              "text": "友",
              "correct": true
            },
            {
              "text": "兄",
              "correct": false
            },
            {
              "text": "弟",
              "correct": false
            },
            {
              "text": "人",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "友",
          "options": [
            {
              "text": "벗",
              "correct": true
            },
            {
              "text": "남자",
              "correct": false
            },
            {
              "text": "여자",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Family",
      "challenges": [
        {
          "type": "SELECT",
          "question": "Which one means \"아버지\"?",
          "options": [
            {
              "text": "父",
              "correct": true
            },
            {
              "text": "母",
              "correct": false
            },
            {
              "text": "兄",
              "correct": false
            },
            {
              "text": "弟",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "父",
          "options": [
            {
              "text": "아버지",
              "correct": true
            },
            {
              "text": "어머니",
              "correct": false
            },
            {
              "text": "형 또는 오빠",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"어머니\"?",
          "options": [
            {
              "text": "母",
              "correct": true
            },
            {
              "text": "父",
              "correct": false
            },
            {
              "text": "姉",
              "correct": false
            },
            {
              "text": "妹",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "母",
          "options": [
            {
              "text": "어머니",
              "correct": true
            },
            {
              "text": "아버지",
              "correct": false
            },
            {
              "text": "형 또는 오빠",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"형 또는 오빠\"?",
          "options": [
            {
              "text": "兄",
              "correct": true
            },
            {
              "text": "弟",
              "correct": false
            },
            {
              "text": "父",
              "correct": false
            },
            {
              "text": "友",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "兄",
          "options": [
            {
              "text": "형 또는 오빠",
              "correct": true
            },
            {
              "text": "아버지",
              "correct": false
            },
            {
              "text": "어머니",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"아우\"?",
          "options": [
            {
              "text": "弟",
              "correct": true
            },
            {
              "text": "兄",
              "correct": false
            },
            {
              "text": "母",
              "correct": false
            },
            {
              "text": "子",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "弟",
          "options": [
            {
              "text": "아우",
              "correct": true
            },
            {
              "text": "아버지",
              "correct": false
            },
            {
              "text": "어머니",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Body",
      "challenges": [
        {
          "type": "SELECT",
          "question": "Which one means \"입\"?",
          "options": [
            {
              "text": "口",
              "correct": true
            },
            {
              "text": "目",
              "correct": false
            },
            {
              "text": "耳",
              "correct": false
            },
            {
              "text": "手",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "口",
          "options": [
            {
              "text": "입",
              "correct": true
            },
            {
              "text": "눈",
              "correct": false
            },
            {
              "text": "귀",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"눈\"?",
          "options": [
            {
              "text": "目",
              "correct": true
            },
            {
              "text": "口",
              "correct": false
            },
            {
              "text": "足",
              "correct": false
            },
            {
              "text": "心",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "目",
          "options": [
            {
              "text": "눈",
              "correct": true
            },
            {
              "text": "입",
              "correct": false
            },
            {
              "text": "귀",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"귀\"?",
          "options": [
            {
              "text": "耳",
              "correct": true
            },
            {
              "text": "目",
              "correct": false
            },
            {
              "text": "手",
              "correct": false
            },
            {
              "text": "力",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "耳",
          "options": [
            {
              "text": "귀",
              "correct": true
            },
            {
              "text": "입",
              "correct": false
            },
            {
              "text": "눈",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"손\"?",
          "options": [
            {
              "text": "手",
              "correct": true
            },
            {
              "text": "足",
              "correct": false
            },
            {
              "text": "口",
              "correct": false
            },
            {
              "text": "身",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "手",
          "options": [
            {
              "text": "손",
              "correct": true
            },
            {
              "text": "입",
              "correct": false
            },
            {
              "text": "눈",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Body and mind",
      "challenges": [
        {
          "type": "SELECT",
          "question": "Which one means \"발\"?",
          "options": [
            {
              "text": "足",
              "correct": true
            },
            {
              "text": "手",
              "correct": false
            },
            {
              "text": "耳",
              "correct": false
            },
            {
              "text": "目",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "足",
          "options": [
            {
              "text": "발",
              "correct": true
            },
            {
              "text": "마음",
              "correct": false
            },
            {
              "text": "힘",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"마음\"?",
          "options": [
            {
              "text": "心",
              "correct": true
            },
            {
              "text": "力",
              "correct": false
            },
            {
              "text": "身",
              "correct": false
            },
            {
              "text": "口",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "心",
          "options": [
            {
              "text": "마음",
              "correct": true
            },
            {
              "text": "발",
              "correct": false
            },
            {
              "text": "힘",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"힘\"?",
          "options": [
            {
              "text": "力",
              "correct": true
            },
            {
              "text": "心",
              "correct": false
            },
            {
              "text": "目",
              "correct": false
            },
            {
              "text": "足",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "力",
          "options": [
            {
              "text": "힘",
              "correct": true
            },
            {
              "text": "발",
              "correct": false
            },
            {
              "text": "마음",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"몸\"?",
          "options": [
            {
              "text": "身",
              "correct": true
            },
            {
              "text": "手",
              "correct": false
            },
            {
              "text": "耳",
              "correct": false
            },
            {
              "text": "心",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "身",
          "options": [
            {
              "text": "몸",
              "correct": true
            },
            {
              "text": "발",
              "correct": false
            },
            {
              "text": "마음",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Social roles",
      "challenges": [
        {
          "type": "SELECT",
          "question": "Which one means \"임금 또는 왕\"?",
          "options": [
            {
              "text": "王",
              "correct": true
            },
            {
              "text": "民",
              "correct": false
            },
            {
              "text": "士",
              "correct": false
            },
            {
              "text": "師",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "王",
          "options": [
            {
              "text": "임금 또는 왕",
              "correct": true
            },
            {
              "text": "백성",
              "correct": false
            },
            {
              "text": "선비",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"백성\"?",
          "options": [
            {
              "text": "民",
              "correct": true
            },
            {
              "text": "王",
              "correct": false
            },
            {
              "text": "主",
              "correct": false
            },
            {
              "text": "客",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "民",
          "options": [
            {
              "text": "백성",
              "correct": true
            },
            {
              "text": "임금 또는 왕",
              "correct": false
            },
            {
              "text": "선비",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"선비\"?",
          "options": [
            {
              "text": "士",
              "correct": true
            },
            {
              "text": "師",
              "correct": false
            },
            {
              "text": "友",
              "correct": false
            },
            {
              "text": "子",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "士",
          "options": [
            {
              "text": "선비",
              "correct": true
            },
            {
              "text": "임금 또는 왕",
              "correct": false
            },
            {
              "text": "백성",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"스승\"?",
          "options": [
            {
              "text": "師",
              "correct": true
            },
            {
              "text": "士",
              "correct": false
            },
            {
              "text": "父",
              "correct": false
            },
            {
              "text": "兄",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "師",
          "options": [
            {
              "text": "스승",
              "correct": true
            },
            {
              "text": "임금 또는 왕",
              "correct": false
            },
            {
              "text": "백성",
              "correct": false
            }
          ]
        }
      ]
    }
  ]
};
