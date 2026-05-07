import type { UnitSeed } from "../../../types";

export const unit1: UnitSeed = {
  "title": "Unit 1",
  "description": "Learn hiragana greetings and starter vocabulary",
  "lessons": [
    {
      "title": "Greetings",
      "challenges": [
        {
          "type": "SELECT",
          "question": "Which one means \"hello / 안녕하세요\"?",
          "options": [
            {
              "text": "こんにちは",
              "correct": true
            },
            {
              "text": "さようなら",
              "correct": false
            },
            {
              "text": "ありがとう",
              "correct": false
            },
            {
              "text": "はい",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "こんにちは",
          "options": [
            {
              "text": "hello / 안녕하세요",
              "correct": true
            },
            {
              "text": "thank you / 고마워요",
              "correct": false
            },
            {
              "text": "yes / 네",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"thank you / 고마워요\"?",
          "options": [
            {
              "text": "ありがとう",
              "correct": true
            },
            {
              "text": "すみません",
              "correct": false
            },
            {
              "text": "はい",
              "correct": false
            },
            {
              "text": "いいえ",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "ありがとう",
          "options": [
            {
              "text": "thank you / 고마워요",
              "correct": true
            },
            {
              "text": "hello / 안녕하세요",
              "correct": false
            },
            {
              "text": "yes / 네",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"yes / 네\"?",
          "options": [
            {
              "text": "はい",
              "correct": true
            },
            {
              "text": "いいえ",
              "correct": false
            },
            {
              "text": "水",
              "correct": false
            },
            {
              "text": "本",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "はい",
          "options": [
            {
              "text": "yes / 네",
              "correct": true
            },
            {
              "text": "hello / 안녕하세요",
              "correct": false
            },
            {
              "text": "thank you / 고마워요",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"goodbye / 안녕히 가세요\"?",
          "options": [
            {
              "text": "さようなら",
              "correct": true
            },
            {
              "text": "こんにちは",
              "correct": false
            },
            {
              "text": "ありがとう",
              "correct": false
            },
            {
              "text": "すみません",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "さようなら",
          "options": [
            {
              "text": "goodbye / 안녕히 가세요",
              "correct": true
            },
            {
              "text": "hello / 안녕하세요",
              "correct": false
            },
            {
              "text": "thank you / 고마워요",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Basics",
      "challenges": [
        {
          "type": "SELECT",
          "question": "Which one means \"water / 물\"?",
          "options": [
            {
              "text": "水",
              "correct": true
            },
            {
              "text": "本",
              "correct": false
            },
            {
              "text": "学校",
              "correct": false
            },
            {
              "text": "家",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "水",
          "options": [
            {
              "text": "water / 물",
              "correct": true
            },
            {
              "text": "book / 책",
              "correct": false
            },
            {
              "text": "school / 학교",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"book / 책\"?",
          "options": [
            {
              "text": "本",
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
              "text": "犬",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "本",
          "options": [
            {
              "text": "book / 책",
              "correct": true
            },
            {
              "text": "water / 물",
              "correct": false
            },
            {
              "text": "school / 학교",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"school / 학교\"?",
          "options": [
            {
              "text": "学校",
              "correct": true
            },
            {
              "text": "家",
              "correct": false
            },
            {
              "text": "本",
              "correct": false
            },
            {
              "text": "公園",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "学校",
          "options": [
            {
              "text": "school / 학교",
              "correct": true
            },
            {
              "text": "water / 물",
              "correct": false
            },
            {
              "text": "book / 책",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"house / 집\"?",
          "options": [
            {
              "text": "家",
              "correct": true
            },
            {
              "text": "学校",
              "correct": false
            },
            {
              "text": "店",
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
          "question": "家",
          "options": [
            {
              "text": "house / 집",
              "correct": true
            },
            {
              "text": "water / 물",
              "correct": false
            },
            {
              "text": "book / 책",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Hiragana words",
      "challenges": [
        {
          "type": "SELECT",
          "question": "Which one means \"morning / 아침\"?",
          "options": [
            {
              "text": "あさ",
              "correct": true
            },
            {
              "text": "よる",
              "correct": false
            },
            {
              "text": "ひる",
              "correct": false
            },
            {
              "text": "いま",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "あさ",
          "options": [
            {
              "text": "morning / 아침",
              "correct": true
            },
            {
              "text": "night / 밤",
              "correct": false
            },
            {
              "text": "now / 지금",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"night / 밤\"?",
          "options": [
            {
              "text": "よる",
              "correct": true
            },
            {
              "text": "あさ",
              "correct": false
            },
            {
              "text": "きょう",
              "correct": false
            },
            {
              "text": "あした",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "よる",
          "options": [
            {
              "text": "night / 밤",
              "correct": true
            },
            {
              "text": "morning / 아침",
              "correct": false
            },
            {
              "text": "now / 지금",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"now / 지금\"?",
          "options": [
            {
              "text": "いま",
              "correct": true
            },
            {
              "text": "あと",
              "correct": false
            },
            {
              "text": "まえ",
              "correct": false
            },
            {
              "text": "きのう",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "いま",
          "options": [
            {
              "text": "now / 지금",
              "correct": true
            },
            {
              "text": "morning / 아침",
              "correct": false
            },
            {
              "text": "night / 밤",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"sky / 하늘\"?",
          "options": [
            {
              "text": "そら",
              "correct": true
            },
            {
              "text": "うみ",
              "correct": false
            },
            {
              "text": "やま",
              "correct": false
            },
            {
              "text": "かわ",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "そら",
          "options": [
            {
              "text": "sky / 하늘",
              "correct": true
            },
            {
              "text": "morning / 아침",
              "correct": false
            },
            {
              "text": "night / 밤",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "People",
      "challenges": [
        {
          "type": "SELECT",
          "question": "Which one means \"person / 사람\"?",
          "options": [
            {
              "text": "人",
              "correct": true
            },
            {
              "text": "友だち",
              "correct": false
            },
            {
              "text": "先生",
              "correct": false
            },
            {
              "text": "学生",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "人",
          "options": [
            {
              "text": "person / 사람",
              "correct": true
            },
            {
              "text": "friend / 친구",
              "correct": false
            },
            {
              "text": "teacher / 선생님",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"friend / 친구\"?",
          "options": [
            {
              "text": "友だち",
              "correct": true
            },
            {
              "text": "人",
              "correct": false
            },
            {
              "text": "家族",
              "correct": false
            },
            {
              "text": "子ども",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "友だち",
          "options": [
            {
              "text": "friend / 친구",
              "correct": true
            },
            {
              "text": "person / 사람",
              "correct": false
            },
            {
              "text": "teacher / 선생님",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"teacher / 선생님\"?",
          "options": [
            {
              "text": "先生",
              "correct": true
            },
            {
              "text": "学生",
              "correct": false
            },
            {
              "text": "友だち",
              "correct": false
            },
            {
              "text": "医者",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "先生",
          "options": [
            {
              "text": "teacher / 선생님",
              "correct": true
            },
            {
              "text": "person / 사람",
              "correct": false
            },
            {
              "text": "friend / 친구",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"student / 학생\"?",
          "options": [
            {
              "text": "学生",
              "correct": true
            },
            {
              "text": "先生",
              "correct": false
            },
            {
              "text": "人",
              "correct": false
            },
            {
              "text": "家族",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "学生",
          "options": [
            {
              "text": "student / 학생",
              "correct": true
            },
            {
              "text": "person / 사람",
              "correct": false
            },
            {
              "text": "friend / 친구",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Polite phrases",
      "challenges": [
        {
          "type": "SELECT",
          "question": "Which one means \"please / 부탁합니다\"?",
          "options": [
            {
              "text": "お願いします",
              "correct": true
            },
            {
              "text": "ありがとう",
              "correct": false
            },
            {
              "text": "すみません",
              "correct": false
            },
            {
              "text": "はい",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "お願いします",
          "options": [
            {
              "text": "please / 부탁합니다",
              "correct": true
            },
            {
              "text": "excuse me / 실례합니다",
              "correct": false
            },
            {
              "text": "good morning / 좋은 아침",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"excuse me / 실례합니다\"?",
          "options": [
            {
              "text": "すみません",
              "correct": true
            },
            {
              "text": "お願いします",
              "correct": false
            },
            {
              "text": "いいえ",
              "correct": false
            },
            {
              "text": "おはよう",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "すみません",
          "options": [
            {
              "text": "excuse me / 실례합니다",
              "correct": true
            },
            {
              "text": "please / 부탁합니다",
              "correct": false
            },
            {
              "text": "good morning / 좋은 아침",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"good morning / 좋은 아침\"?",
          "options": [
            {
              "text": "おはよう",
              "correct": true
            },
            {
              "text": "こんばんは",
              "correct": false
            },
            {
              "text": "こんにちは",
              "correct": false
            },
            {
              "text": "さようなら",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "おはよう",
          "options": [
            {
              "text": "good morning / 좋은 아침",
              "correct": true
            },
            {
              "text": "please / 부탁합니다",
              "correct": false
            },
            {
              "text": "excuse me / 실례합니다",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"good evening / 좋은 저녁\"?",
          "options": [
            {
              "text": "こんばんは",
              "correct": true
            },
            {
              "text": "おはよう",
              "correct": false
            },
            {
              "text": "ありがとう",
              "correct": false
            },
            {
              "text": "はい",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "こんばんは",
          "options": [
            {
              "text": "good evening / 좋은 저녁",
              "correct": true
            },
            {
              "text": "please / 부탁합니다",
              "correct": false
            },
            {
              "text": "excuse me / 실례합니다",
              "correct": false
            }
          ]
        }
      ]
    }
  ]
};
