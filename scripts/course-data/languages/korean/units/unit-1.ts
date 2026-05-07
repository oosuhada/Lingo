import type { UnitSeed } from "../../../types";

export const unit1: UnitSeed = {
  "title": "Unit 1",
  "description": "Practice Korean greetings, nouns, and particles",
  "lessons": [
    {
      "title": "Greetings",
      "challenges": [
        {
          "type": "SELECT",
          "question": "Which one means \"hello\"?",
          "options": [
            {
              "text": "안녕하세요",
              "correct": true
            },
            {
              "text": "감사합니다",
              "correct": false
            },
            {
              "text": "미안합니다",
              "correct": false
            },
            {
              "text": "괜찮아요",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "안녕하세요",
          "options": [
            {
              "text": "hello",
              "correct": true
            },
            {
              "text": "thank you",
              "correct": false
            },
            {
              "text": "it's okay",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"thank you\"?",
          "options": [
            {
              "text": "감사합니다",
              "correct": true
            },
            {
              "text": "안녕하세요",
              "correct": false
            },
            {
              "text": "괜찮아요",
              "correct": false
            },
            {
              "text": "안녕히 가세요",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "감사합니다",
          "options": [
            {
              "text": "thank you",
              "correct": true
            },
            {
              "text": "hello",
              "correct": false
            },
            {
              "text": "it's okay",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"it's okay\"?",
          "options": [
            {
              "text": "괜찮아요",
              "correct": true
            },
            {
              "text": "미안합니다",
              "correct": false
            },
            {
              "text": "책",
              "correct": false
            },
            {
              "text": "물",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "괜찮아요",
          "options": [
            {
              "text": "it's okay",
              "correct": true
            },
            {
              "text": "hello",
              "correct": false
            },
            {
              "text": "thank you",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"goodbye\"?",
          "options": [
            {
              "text": "안녕히 가세요",
              "correct": true
            },
            {
              "text": "안녕하세요",
              "correct": false
            },
            {
              "text": "감사합니다",
              "correct": false
            },
            {
              "text": "네",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "안녕히 가세요",
          "options": [
            {
              "text": "goodbye",
              "correct": true
            },
            {
              "text": "hello",
              "correct": false
            },
            {
              "text": "thank you",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Particles",
      "challenges": [
        {
          "type": "SELECT",
          "question": "Which one means \"topic marker\"?",
          "options": [
            {
              "text": "은/는",
              "correct": true
            },
            {
              "text": "이/가",
              "correct": false
            },
            {
              "text": "을/를",
              "correct": false
            },
            {
              "text": "에",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "은/는",
          "options": [
            {
              "text": "topic marker",
              "correct": true
            },
            {
              "text": "subject marker",
              "correct": false
            },
            {
              "text": "object marker",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"subject marker\"?",
          "options": [
            {
              "text": "이/가",
              "correct": true
            },
            {
              "text": "은/는",
              "correct": false
            },
            {
              "text": "에서",
              "correct": false
            },
            {
              "text": "와/과",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "이/가",
          "options": [
            {
              "text": "subject marker",
              "correct": true
            },
            {
              "text": "topic marker",
              "correct": false
            },
            {
              "text": "object marker",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"object marker\"?",
          "options": [
            {
              "text": "을/를",
              "correct": true
            },
            {
              "text": "은/는",
              "correct": false
            },
            {
              "text": "이/가",
              "correct": false
            },
            {
              "text": "에",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "을/를",
          "options": [
            {
              "text": "object marker",
              "correct": true
            },
            {
              "text": "topic marker",
              "correct": false
            },
            {
              "text": "subject marker",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"location marker\"?",
          "options": [
            {
              "text": "에",
              "correct": true
            },
            {
              "text": "에서",
              "correct": false
            },
            {
              "text": "을/를",
              "correct": false
            },
            {
              "text": "와/과",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "에",
          "options": [
            {
              "text": "location marker",
              "correct": true
            },
            {
              "text": "topic marker",
              "correct": false
            },
            {
              "text": "subject marker",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Basic nouns",
      "challenges": [
        {
          "type": "SELECT",
          "question": "Which one means \"water\"?",
          "options": [
            {
              "text": "물",
              "correct": true
            },
            {
              "text": "책",
              "correct": false
            },
            {
              "text": "집",
              "correct": false
            },
            {
              "text": "학교",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "물",
          "options": [
            {
              "text": "water",
              "correct": true
            },
            {
              "text": "book",
              "correct": false
            },
            {
              "text": "school",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"book\"?",
          "options": [
            {
              "text": "책",
              "correct": true
            },
            {
              "text": "물",
              "correct": false
            },
            {
              "text": "밥",
              "correct": false
            },
            {
              "text": "친구",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "책",
          "options": [
            {
              "text": "book",
              "correct": true
            },
            {
              "text": "water",
              "correct": false
            },
            {
              "text": "school",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"school\"?",
          "options": [
            {
              "text": "학교",
              "correct": true
            },
            {
              "text": "집",
              "correct": false
            },
            {
              "text": "공원",
              "correct": false
            },
            {
              "text": "가게",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "학교",
          "options": [
            {
              "text": "school",
              "correct": true
            },
            {
              "text": "water",
              "correct": false
            },
            {
              "text": "book",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"house\"?",
          "options": [
            {
              "text": "집",
              "correct": true
            },
            {
              "text": "학교",
              "correct": false
            },
            {
              "text": "책",
              "correct": false
            },
            {
              "text": "병원",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "집",
          "options": [
            {
              "text": "house",
              "correct": true
            },
            {
              "text": "water",
              "correct": false
            },
            {
              "text": "book",
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
          "question": "Which one means \"person\"?",
          "options": [
            {
              "text": "사람",
              "correct": true
            },
            {
              "text": "친구",
              "correct": false
            },
            {
              "text": "선생님",
              "correct": false
            },
            {
              "text": "학생",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "사람",
          "options": [
            {
              "text": "person",
              "correct": true
            },
            {
              "text": "friend",
              "correct": false
            },
            {
              "text": "teacher",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"friend\"?",
          "options": [
            {
              "text": "친구",
              "correct": true
            },
            {
              "text": "사람",
              "correct": false
            },
            {
              "text": "가족",
              "correct": false
            },
            {
              "text": "아이",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "친구",
          "options": [
            {
              "text": "friend",
              "correct": true
            },
            {
              "text": "person",
              "correct": false
            },
            {
              "text": "teacher",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"teacher\"?",
          "options": [
            {
              "text": "선생님",
              "correct": true
            },
            {
              "text": "학생",
              "correct": false
            },
            {
              "text": "친구",
              "correct": false
            },
            {
              "text": "의사",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "선생님",
          "options": [
            {
              "text": "teacher",
              "correct": true
            },
            {
              "text": "person",
              "correct": false
            },
            {
              "text": "friend",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"student\"?",
          "options": [
            {
              "text": "학생",
              "correct": true
            },
            {
              "text": "선생님",
              "correct": false
            },
            {
              "text": "사람",
              "correct": false
            },
            {
              "text": "가족",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "학생",
          "options": [
            {
              "text": "student",
              "correct": true
            },
            {
              "text": "person",
              "correct": false
            },
            {
              "text": "friend",
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
          "question": "Which one means \"please\"?",
          "options": [
            {
              "text": "제발",
              "correct": true
            },
            {
              "text": "네",
              "correct": false
            },
            {
              "text": "아니요",
              "correct": false
            },
            {
              "text": "고마워요",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "제발",
          "options": [
            {
              "text": "please",
              "correct": true
            },
            {
              "text": "yes",
              "correct": false
            },
            {
              "text": "no",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"yes\"?",
          "options": [
            {
              "text": "네",
              "correct": true
            },
            {
              "text": "아니요",
              "correct": false
            },
            {
              "text": "제발",
              "correct": false
            },
            {
              "text": "미안해요",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "네",
          "options": [
            {
              "text": "yes",
              "correct": true
            },
            {
              "text": "please",
              "correct": false
            },
            {
              "text": "no",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"no\"?",
          "options": [
            {
              "text": "아니요",
              "correct": true
            },
            {
              "text": "네",
              "correct": false
            },
            {
              "text": "안녕하세요",
              "correct": false
            },
            {
              "text": "감사합니다",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "아니요",
          "options": [
            {
              "text": "no",
              "correct": true
            },
            {
              "text": "please",
              "correct": false
            },
            {
              "text": "yes",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"excuse me\"?",
          "options": [
            {
              "text": "실례합니다",
              "correct": true
            },
            {
              "text": "괜찮아요",
              "correct": false
            },
            {
              "text": "잘 가요",
              "correct": false
            },
            {
              "text": "좋아요",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "실례합니다",
          "options": [
            {
              "text": "excuse me",
              "correct": true
            },
            {
              "text": "please",
              "correct": false
            },
            {
              "text": "yes",
              "correct": false
            }
          ]
        }
      ]
    }
  ]
};
