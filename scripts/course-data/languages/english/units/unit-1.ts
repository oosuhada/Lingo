import type { UnitSeed } from "../../../types";

export const unit1: UnitSeed = {
  "title": "Unit 1",
  "description": "Learn everyday English words and phrases",
  "lessons": [
    {
      "title": "Greetings",
      "challenges": [
        {
          "type": "SELECT",
          "question": "Which one means \"안녕하세요\"?",
          "options": [
            {
              "text": "hello",
              "correct": true
            },
            {
              "text": "goodbye",
              "correct": false
            },
            {
              "text": "apple",
              "correct": false
            },
            {
              "text": "school",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "hello",
          "options": [
            {
              "text": "안녕하세요",
              "correct": true
            },
            {
              "text": "고마워요",
              "correct": false
            },
            {
              "text": "미안해요",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"고마워요\"?",
          "options": [
            {
              "text": "thank you",
              "correct": true
            },
            {
              "text": "please",
              "correct": false
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
          "type": "ASSIST",
          "question": "thank you",
          "options": [
            {
              "text": "고마워요",
              "correct": true
            },
            {
              "text": "안녕하세요",
              "correct": false
            },
            {
              "text": "미안해요",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"미안해요\"?",
          "options": [
            {
              "text": "sorry",
              "correct": true
            },
            {
              "text": "yes",
              "correct": false
            },
            {
              "text": "no",
              "correct": false
            },
            {
              "text": "house",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "sorry",
          "options": [
            {
              "text": "미안해요",
              "correct": true
            },
            {
              "text": "안녕하세요",
              "correct": false
            },
            {
              "text": "고마워요",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"안녕히 가세요\"?",
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
              "text": "thanks",
              "correct": false
            },
            {
              "text": "coffee",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "goodbye",
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
              "text": "고마워요",
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
          "question": "Which one means \"물\"?",
          "options": [
            {
              "text": "water",
              "correct": true
            },
            {
              "text": "bread",
              "correct": false
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
          "type": "ASSIST",
          "question": "water",
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
              "text": "학교",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"책\"?",
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
              "text": "house",
              "correct": false
            },
            {
              "text": "coffee",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "book",
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
              "text": "학교",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"학교\"?",
          "options": [
            {
              "text": "school",
              "correct": true
            },
            {
              "text": "house",
              "correct": false
            },
            {
              "text": "water",
              "correct": false
            },
            {
              "text": "bread",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "school",
          "options": [
            {
              "text": "학교",
              "correct": true
            },
            {
              "text": "물",
              "correct": false
            },
            {
              "text": "책",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"집\"?",
          "options": [
            {
              "text": "house",
              "correct": true
            },
            {
              "text": "school",
              "correct": false
            },
            {
              "text": "book",
              "correct": false
            },
            {
              "text": "apple",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "house",
          "options": [
            {
              "text": "집",
              "correct": true
            },
            {
              "text": "물",
              "correct": false
            },
            {
              "text": "책",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Classroom nouns",
      "challenges": [
        {
          "type": "SELECT",
          "question": "Which one means \"펜\"?",
          "options": [
            {
              "text": "pen",
              "correct": true
            },
            {
              "text": "desk",
              "correct": false
            },
            {
              "text": "chair",
              "correct": false
            },
            {
              "text": "bag",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "pen",
          "options": [
            {
              "text": "펜",
              "correct": true
            },
            {
              "text": "가방",
              "correct": false
            },
            {
              "text": "의자",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"가방\"?",
          "options": [
            {
              "text": "bag",
              "correct": true
            },
            {
              "text": "pen",
              "correct": false
            },
            {
              "text": "window",
              "correct": false
            },
            {
              "text": "door",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "bag",
          "options": [
            {
              "text": "가방",
              "correct": true
            },
            {
              "text": "펜",
              "correct": false
            },
            {
              "text": "의자",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"의자\"?",
          "options": [
            {
              "text": "chair",
              "correct": true
            },
            {
              "text": "desk",
              "correct": false
            },
            {
              "text": "book",
              "correct": false
            },
            {
              "text": "teacher",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "chair",
          "options": [
            {
              "text": "의자",
              "correct": true
            },
            {
              "text": "펜",
              "correct": false
            },
            {
              "text": "가방",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"책상\"?",
          "options": [
            {
              "text": "desk",
              "correct": true
            },
            {
              "text": "chair",
              "correct": false
            },
            {
              "text": "student",
              "correct": false
            },
            {
              "text": "bag",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "desk",
          "options": [
            {
              "text": "책상",
              "correct": true
            },
            {
              "text": "펜",
              "correct": false
            },
            {
              "text": "가방",
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
          "question": "Which one means \"남자\"?",
          "options": [
            {
              "text": "man",
              "correct": true
            },
            {
              "text": "woman",
              "correct": false
            },
            {
              "text": "child",
              "correct": false
            },
            {
              "text": "friend",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "man",
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
              "text": "친구",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"여자\"?",
          "options": [
            {
              "text": "woman",
              "correct": true
            },
            {
              "text": "man",
              "correct": false
            },
            {
              "text": "teacher",
              "correct": false
            },
            {
              "text": "student",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "woman",
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
              "text": "친구",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"친구\"?",
          "options": [
            {
              "text": "friend",
              "correct": true
            },
            {
              "text": "family",
              "correct": false
            },
            {
              "text": "teacher",
              "correct": false
            },
            {
              "text": "child",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "friend",
          "options": [
            {
              "text": "친구",
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
          "question": "Which one means \"선생님\"?",
          "options": [
            {
              "text": "teacher",
              "correct": true
            },
            {
              "text": "student",
              "correct": false
            },
            {
              "text": "friend",
              "correct": false
            },
            {
              "text": "man",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "teacher",
          "options": [
            {
              "text": "선생님",
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
      "title": "Everyday phrases",
      "challenges": [
        {
          "type": "SELECT",
          "question": "Which one means \"제발\"?",
          "options": [
            {
              "text": "please",
              "correct": true
            },
            {
              "text": "sorry",
              "correct": false
            },
            {
              "text": "hello",
              "correct": false
            },
            {
              "text": "yes",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "please",
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
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"네\"?",
          "options": [
            {
              "text": "yes",
              "correct": true
            },
            {
              "text": "no",
              "correct": false
            },
            {
              "text": "maybe",
              "correct": false
            },
            {
              "text": "thanks",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "yes",
          "options": [
            {
              "text": "네",
              "correct": true
            },
            {
              "text": "제발",
              "correct": false
            },
            {
              "text": "아니요",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"아니요\"?",
          "options": [
            {
              "text": "no",
              "correct": true
            },
            {
              "text": "yes",
              "correct": false
            },
            {
              "text": "please",
              "correct": false
            },
            {
              "text": "sorry",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "no",
          "options": [
            {
              "text": "아니요",
              "correct": true
            },
            {
              "text": "제발",
              "correct": false
            },
            {
              "text": "네",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"괜찮아요\"?",
          "options": [
            {
              "text": "it is okay",
              "correct": true
            },
            {
              "text": "good morning",
              "correct": false
            },
            {
              "text": "see you",
              "correct": false
            },
            {
              "text": "I am hungry",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "it is okay",
          "options": [
            {
              "text": "괜찮아요",
              "correct": true
            },
            {
              "text": "제발",
              "correct": false
            },
            {
              "text": "네",
              "correct": false
            }
          ]
        }
      ]
    }
  ]
};
