import type { UnitSeed } from "../../types";

export const unit1: UnitSeed = {
  "title": "Unit 1",
  "description": "Connect common Hanja characters with Korean meanings",
  "lessons": [
    {
      "title": "Core characters",
      "challenges": [
        {
          "type": "SELECT",
          "question": "Which one means \"사람\"?",
          "options": [
            {
              "text": "人",
              "correct": true
            },
            {
              "text": "山",
              "correct": false
            },
            {
              "text": "水",
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
          "question": "人",
          "options": [
            {
              "text": "사람",
              "correct": true
            },
            {
              "text": "산",
              "correct": false
            },
            {
              "text": "물",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"산\"?",
          "options": [
            {
              "text": "山",
              "correct": true
            },
            {
              "text": "人",
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
          "question": "山",
          "options": [
            {
              "text": "산",
              "correct": true
            },
            {
              "text": "사람",
              "correct": false
            },
            {
              "text": "물",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"물\"?",
          "options": [
            {
              "text": "水",
              "correct": true
            },
            {
              "text": "火",
              "correct": false
            },
            {
              "text": "木",
              "correct": false
            },
            {
              "text": "日",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "水",
          "options": [
            {
              "text": "물",
              "correct": true
            },
            {
              "text": "사람",
              "correct": false
            },
            {
              "text": "산",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"나무\"?",
          "options": [
            {
              "text": "木",
              "correct": true
            },
            {
              "text": "金",
              "correct": false
            },
            {
              "text": "土",
              "correct": false
            },
            {
              "text": "月",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "木",
          "options": [
            {
              "text": "나무",
              "correct": true
            },
            {
              "text": "사람",
              "correct": false
            },
            {
              "text": "산",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Nature",
      "challenges": [
        {
          "type": "SELECT",
          "question": "Which one means \"불\"?",
          "options": [
            {
              "text": "火",
              "correct": true
            },
            {
              "text": "水",
              "correct": false
            },
            {
              "text": "月",
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
          "question": "火",
          "options": [
            {
              "text": "불",
              "correct": true
            },
            {
              "text": "해 또는 날",
              "correct": false
            },
            {
              "text": "달",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"해 또는 날\"?",
          "options": [
            {
              "text": "日",
              "correct": true
            },
            {
              "text": "月",
              "correct": false
            },
            {
              "text": "山",
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
          "question": "日",
          "options": [
            {
              "text": "해 또는 날",
              "correct": true
            },
            {
              "text": "불",
              "correct": false
            },
            {
              "text": "달",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"달\"?",
          "options": [
            {
              "text": "月",
              "correct": true
            },
            {
              "text": "日",
              "correct": false
            },
            {
              "text": "火",
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
          "question": "月",
          "options": [
            {
              "text": "달",
              "correct": true
            },
            {
              "text": "불",
              "correct": false
            },
            {
              "text": "해 또는 날",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"흙\"?",
          "options": [
            {
              "text": "土",
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
              "text": "天",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "土",
          "options": [
            {
              "text": "흙",
              "correct": true
            },
            {
              "text": "불",
              "correct": false
            },
            {
              "text": "해 또는 날",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Numbers 1",
      "challenges": [
        {
          "type": "SELECT",
          "question": "Which one means \"하나\"?",
          "options": [
            {
              "text": "一",
              "correct": true
            },
            {
              "text": "二",
              "correct": false
            },
            {
              "text": "三",
              "correct": false
            },
            {
              "text": "十",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "一",
          "options": [
            {
              "text": "하나",
              "correct": true
            },
            {
              "text": "둘",
              "correct": false
            },
            {
              "text": "셋",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"둘\"?",
          "options": [
            {
              "text": "二",
              "correct": true
            },
            {
              "text": "一",
              "correct": false
            },
            {
              "text": "四",
              "correct": false
            },
            {
              "text": "百",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "二",
          "options": [
            {
              "text": "둘",
              "correct": true
            },
            {
              "text": "하나",
              "correct": false
            },
            {
              "text": "셋",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"셋\"?",
          "options": [
            {
              "text": "三",
              "correct": true
            },
            {
              "text": "二",
              "correct": false
            },
            {
              "text": "五",
              "correct": false
            },
            {
              "text": "千",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "三",
          "options": [
            {
              "text": "셋",
              "correct": true
            },
            {
              "text": "하나",
              "correct": false
            },
            {
              "text": "둘",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"넷\"?",
          "options": [
            {
              "text": "四",
              "correct": true
            },
            {
              "text": "三",
              "correct": false
            },
            {
              "text": "六",
              "correct": false
            },
            {
              "text": "萬",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "四",
          "options": [
            {
              "text": "넷",
              "correct": true
            },
            {
              "text": "하나",
              "correct": false
            },
            {
              "text": "둘",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Directions",
      "challenges": [
        {
          "type": "SELECT",
          "question": "Which one means \"위\"?",
          "options": [
            {
              "text": "上",
              "correct": true
            },
            {
              "text": "下",
              "correct": false
            },
            {
              "text": "中",
              "correct": false
            },
            {
              "text": "外",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "上",
          "options": [
            {
              "text": "위",
              "correct": true
            },
            {
              "text": "아래",
              "correct": false
            },
            {
              "text": "가운데",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"아래\"?",
          "options": [
            {
              "text": "下",
              "correct": true
            },
            {
              "text": "上",
              "correct": false
            },
            {
              "text": "內",
              "correct": false
            },
            {
              "text": "前",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "下",
          "options": [
            {
              "text": "아래",
              "correct": true
            },
            {
              "text": "위",
              "correct": false
            },
            {
              "text": "가운데",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"가운데\"?",
          "options": [
            {
              "text": "中",
              "correct": true
            },
            {
              "text": "外",
              "correct": false
            },
            {
              "text": "左",
              "correct": false
            },
            {
              "text": "右",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "中",
          "options": [
            {
              "text": "가운데",
              "correct": true
            },
            {
              "text": "위",
              "correct": false
            },
            {
              "text": "아래",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"밖\"?",
          "options": [
            {
              "text": "外",
              "correct": true
            },
            {
              "text": "內",
              "correct": false
            },
            {
              "text": "中",
              "correct": false
            },
            {
              "text": "後",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "外",
          "options": [
            {
              "text": "밖",
              "correct": true
            },
            {
              "text": "위",
              "correct": false
            },
            {
              "text": "아래",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Time basics",
      "challenges": [
        {
          "type": "SELECT",
          "question": "Which one means \"해 또는 해의 한 해\"?",
          "options": [
            {
              "text": "年",
              "correct": true
            },
            {
              "text": "月",
              "correct": false
            },
            {
              "text": "日",
              "correct": false
            },
            {
              "text": "時",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "年",
          "options": [
            {
              "text": "해 또는 해의 한 해",
              "correct": true
            },
            {
              "text": "달 또는 월",
              "correct": false
            },
            {
              "text": "날",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"달 또는 월\"?",
          "options": [
            {
              "text": "月",
              "correct": true
            },
            {
              "text": "年",
              "correct": false
            },
            {
              "text": "日",
              "correct": false
            },
            {
              "text": "分",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "月",
          "options": [
            {
              "text": "달 또는 월",
              "correct": true
            },
            {
              "text": "해 또는 해의 한 해",
              "correct": false
            },
            {
              "text": "날",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"날\"?",
          "options": [
            {
              "text": "日",
              "correct": true
            },
            {
              "text": "月",
              "correct": false
            },
            {
              "text": "時",
              "correct": false
            },
            {
              "text": "間",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "日",
          "options": [
            {
              "text": "날",
              "correct": true
            },
            {
              "text": "해 또는 해의 한 해",
              "correct": false
            },
            {
              "text": "달 또는 월",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"때 또는 시간\"?",
          "options": [
            {
              "text": "時",
              "correct": true
            },
            {
              "text": "分",
              "correct": false
            },
            {
              "text": "秒",
              "correct": false
            },
            {
              "text": "年",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "時",
          "options": [
            {
              "text": "때 또는 시간",
              "correct": true
            },
            {
              "text": "해 또는 해의 한 해",
              "correct": false
            },
            {
              "text": "달 또는 월",
              "correct": false
            }
          ]
        }
      ]
    }
  ]
};
