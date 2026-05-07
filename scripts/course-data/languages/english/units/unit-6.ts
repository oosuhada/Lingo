import type { UnitSeed } from "../../../types";

export const unit6: UnitSeed = {
  "title": "Unit 6",
  "description": "Put English words into simple sentences",
  "lessons": [
    {
      "title": "Identity sentences",
      "challenges": [
        {
          "type": "SELECT",
          "question": "Which one means \"저는 학생입니다\"?",
          "options": [
            {
              "text": "I am a student",
              "correct": true
            },
            {
              "text": "I am a teacher",
              "correct": false
            },
            {
              "text": "I am hungry",
              "correct": false
            },
            {
              "text": "I am at home",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "I am a student",
          "options": [
            {
              "text": "저는 학생입니다",
              "correct": true
            },
            {
              "text": "저는 선생님입니다",
              "correct": false
            },
            {
              "text": "그는 제 친구입니다",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"저는 선생님입니다\"?",
          "options": [
            {
              "text": "I am a teacher",
              "correct": true
            },
            {
              "text": "I am a student",
              "correct": false
            },
            {
              "text": "I am tired",
              "correct": false
            },
            {
              "text": "I am here",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "I am a teacher",
          "options": [
            {
              "text": "저는 선생님입니다",
              "correct": true
            },
            {
              "text": "저는 학생입니다",
              "correct": false
            },
            {
              "text": "그는 제 친구입니다",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"그는 제 친구입니다\"?",
          "options": [
            {
              "text": "He is my friend",
              "correct": true
            },
            {
              "text": "She is my friend",
              "correct": false
            },
            {
              "text": "He is my brother",
              "correct": false
            },
            {
              "text": "They are my friends",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "He is my friend",
          "options": [
            {
              "text": "그는 제 친구입니다",
              "correct": true
            },
            {
              "text": "저는 학생입니다",
              "correct": false
            },
            {
              "text": "저는 선생님입니다",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"그녀는 의사입니다\"?",
          "options": [
            {
              "text": "She is a doctor",
              "correct": true
            },
            {
              "text": "He is a doctor",
              "correct": false
            },
            {
              "text": "She is a teacher",
              "correct": false
            },
            {
              "text": "She is a student",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "She is a doctor",
          "options": [
            {
              "text": "그녀는 의사입니다",
              "correct": true
            },
            {
              "text": "저는 학생입니다",
              "correct": false
            },
            {
              "text": "저는 선생님입니다",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Location sentences",
      "challenges": [
        {
          "type": "SELECT",
          "question": "Which one means \"저는 집에 있어요\"?",
          "options": [
            {
              "text": "I am at home",
              "correct": true
            },
            {
              "text": "I am at school",
              "correct": false
            },
            {
              "text": "I am at the park",
              "correct": false
            },
            {
              "text": "I am at work",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "I am at home",
          "options": [
            {
              "text": "저는 집에 있어요",
              "correct": true
            },
            {
              "text": "책은 책상 위에 있어요",
              "correct": false
            },
            {
              "text": "학교는 공원 근처에 있어요",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"책은 책상 위에 있어요\"?",
          "options": [
            {
              "text": "The book is on the desk",
              "correct": true
            },
            {
              "text": "The book is under the desk",
              "correct": false
            },
            {
              "text": "The pen is on the desk",
              "correct": false
            },
            {
              "text": "The bag is on the chair",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "The book is on the desk",
          "options": [
            {
              "text": "책은 책상 위에 있어요",
              "correct": true
            },
            {
              "text": "저는 집에 있어요",
              "correct": false
            },
            {
              "text": "학교는 공원 근처에 있어요",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"학교는 공원 근처에 있어요\"?",
          "options": [
            {
              "text": "The school is near the park",
              "correct": true
            },
            {
              "text": "The park is near the school",
              "correct": false
            },
            {
              "text": "The store is near the park",
              "correct": false
            },
            {
              "text": "The school is far away",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "The school is near the park",
          "options": [
            {
              "text": "학교는 공원 근처에 있어요",
              "correct": true
            },
            {
              "text": "저는 집에 있어요",
              "correct": false
            },
            {
              "text": "책은 책상 위에 있어요",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"가방은 의자 아래에 있어요\"?",
          "options": [
            {
              "text": "The bag is under the chair",
              "correct": true
            },
            {
              "text": "The bag is on the chair",
              "correct": false
            },
            {
              "text": "The book is under the chair",
              "correct": false
            },
            {
              "text": "The bag is near the door",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "The bag is under the chair",
          "options": [
            {
              "text": "가방은 의자 아래에 있어요",
              "correct": true
            },
            {
              "text": "저는 집에 있어요",
              "correct": false
            },
            {
              "text": "책은 책상 위에 있어요",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Likes sentences",
      "challenges": [
        {
          "type": "SELECT",
          "question": "Which one means \"저는 커피를 좋아해요\"?",
          "options": [
            {
              "text": "I like coffee",
              "correct": true
            },
            {
              "text": "I like tea",
              "correct": false
            },
            {
              "text": "I need coffee",
              "correct": false
            },
            {
              "text": "I drink water",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "I like coffee",
          "options": [
            {
              "text": "저는 커피를 좋아해요",
              "correct": true
            },
            {
              "text": "저는 책을 좋아해요",
              "correct": false
            },
            {
              "text": "그는 음악을 좋아해요",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"저는 책을 좋아해요\"?",
          "options": [
            {
              "text": "I like books",
              "correct": true
            },
            {
              "text": "I read books",
              "correct": false
            },
            {
              "text": "I have books",
              "correct": false
            },
            {
              "text": "I like school",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "I like books",
          "options": [
            {
              "text": "저는 책을 좋아해요",
              "correct": true
            },
            {
              "text": "저는 커피를 좋아해요",
              "correct": false
            },
            {
              "text": "그는 음악을 좋아해요",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"그는 음악을 좋아해요\"?",
          "options": [
            {
              "text": "He likes music",
              "correct": true
            },
            {
              "text": "She likes music",
              "correct": false
            },
            {
              "text": "He studies music",
              "correct": false
            },
            {
              "text": "He likes food",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "He likes music",
          "options": [
            {
              "text": "그는 음악을 좋아해요",
              "correct": true
            },
            {
              "text": "저는 커피를 좋아해요",
              "correct": false
            },
            {
              "text": "저는 책을 좋아해요",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"우리는 영화를 좋아해요\"?",
          "options": [
            {
              "text": "We like movies",
              "correct": true
            },
            {
              "text": "They like movies",
              "correct": false
            },
            {
              "text": "We watch movies",
              "correct": false
            },
            {
              "text": "We like music",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "We like movies",
          "options": [
            {
              "text": "우리는 영화를 좋아해요",
              "correct": true
            },
            {
              "text": "저는 커피를 좋아해요",
              "correct": false
            },
            {
              "text": "저는 책을 좋아해요",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Routine sentences",
      "challenges": [
        {
          "type": "SELECT",
          "question": "Which one means \"저는 아침에 공부해요\"?",
          "options": [
            {
              "text": "I study in the morning",
              "correct": true
            },
            {
              "text": "I study at night",
              "correct": false
            },
            {
              "text": "I work in the morning",
              "correct": false
            },
            {
              "text": "I sleep in the morning",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "I study in the morning",
          "options": [
            {
              "text": "저는 아침에 공부해요",
              "correct": true
            },
            {
              "text": "저는 저녁에 운동해요",
              "correct": false
            },
            {
              "text": "그녀는 매일 걸어요",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"저는 저녁에 운동해요\"?",
          "options": [
            {
              "text": "I exercise in the evening",
              "correct": true
            },
            {
              "text": "I cook in the evening",
              "correct": false
            },
            {
              "text": "I exercise in the morning",
              "correct": false
            },
            {
              "text": "I rest in the evening",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "I exercise in the evening",
          "options": [
            {
              "text": "저는 저녁에 운동해요",
              "correct": true
            },
            {
              "text": "저는 아침에 공부해요",
              "correct": false
            },
            {
              "text": "그녀는 매일 걸어요",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"그녀는 매일 걸어요\"?",
          "options": [
            {
              "text": "She walks every day",
              "correct": true
            },
            {
              "text": "He walks every day",
              "correct": false
            },
            {
              "text": "She runs every day",
              "correct": false
            },
            {
              "text": "She walks today",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "She walks every day",
          "options": [
            {
              "text": "그녀는 매일 걸어요",
              "correct": true
            },
            {
              "text": "저는 아침에 공부해요",
              "correct": false
            },
            {
              "text": "저는 저녁에 운동해요",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"우리는 주말에 쉬어요\"?",
          "options": [
            {
              "text": "We rest on the weekend",
              "correct": true
            },
            {
              "text": "We work on the weekend",
              "correct": false
            },
            {
              "text": "They rest on the weekend",
              "correct": false
            },
            {
              "text": "We study at night",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "We rest on the weekend",
          "options": [
            {
              "text": "우리는 주말에 쉬어요",
              "correct": true
            },
            {
              "text": "저는 아침에 공부해요",
              "correct": false
            },
            {
              "text": "저는 저녁에 운동해요",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Past and future",
      "challenges": [
        {
          "type": "SELECT",
          "question": "Which one means \"저는 어제 공부했어요\"?",
          "options": [
            {
              "text": "I studied yesterday",
              "correct": true
            },
            {
              "text": "I study today",
              "correct": false
            },
            {
              "text": "I will study tomorrow",
              "correct": false
            },
            {
              "text": "I worked yesterday",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "I studied yesterday",
          "options": [
            {
              "text": "저는 어제 공부했어요",
              "correct": true
            },
            {
              "text": "저는 내일 갈 거예요",
              "correct": false
            },
            {
              "text": "그는 방금 도착했어요",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"저는 내일 갈 거예요\"?",
          "options": [
            {
              "text": "I will go tomorrow",
              "correct": true
            },
            {
              "text": "I went yesterday",
              "correct": false
            },
            {
              "text": "I will come tomorrow",
              "correct": false
            },
            {
              "text": "I go today",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "I will go tomorrow",
          "options": [
            {
              "text": "저는 내일 갈 거예요",
              "correct": true
            },
            {
              "text": "저는 어제 공부했어요",
              "correct": false
            },
            {
              "text": "그는 방금 도착했어요",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"그는 방금 도착했어요\"?",
          "options": [
            {
              "text": "He just arrived",
              "correct": true
            },
            {
              "text": "She just arrived",
              "correct": false
            },
            {
              "text": "He will arrive soon",
              "correct": false
            },
            {
              "text": "He just left",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "He just arrived",
          "options": [
            {
              "text": "그는 방금 도착했어요",
              "correct": true
            },
            {
              "text": "저는 어제 공부했어요",
              "correct": false
            },
            {
              "text": "저는 내일 갈 거예요",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"우리는 곧 시작할 거예요\"?",
          "options": [
            {
              "text": "We will start soon",
              "correct": true
            },
            {
              "text": "We started already",
              "correct": false
            },
            {
              "text": "They will start soon",
              "correct": false
            },
            {
              "text": "We will finish soon",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "We will start soon",
          "options": [
            {
              "text": "우리는 곧 시작할 거예요",
              "correct": true
            },
            {
              "text": "저는 어제 공부했어요",
              "correct": false
            },
            {
              "text": "저는 내일 갈 거예요",
              "correct": false
            }
          ]
        }
      ]
    }
  ]
};
