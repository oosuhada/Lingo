import type { UnitSeed } from "../../../types";

export const unit6: UnitSeed = {
  "title": "Unit 6",
  "description": "Read and build simple Korean sentences",
  "lessons": [
    {
      "title": "Identity sentences",
      "challenges": [
        {
          "type": "SELECT",
          "question": "Which one means \"I am a student\"?",
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
              "text": "저는 배고파요",
              "correct": false
            },
            {
              "text": "저는 집에 있어요",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "저는 학생입니다",
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
              "text": "He is my friend",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"I am a teacher\"?",
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
              "text": "저는 피곤해요",
              "correct": false
            },
            {
              "text": "저는 여기에 있어요",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "저는 선생님입니다",
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
              "text": "He is my friend",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"He is my friend\"?",
          "options": [
            {
              "text": "그는 제 친구입니다",
              "correct": true
            },
            {
              "text": "그녀는 제 친구입니다",
              "correct": false
            },
            {
              "text": "그는 제 형입니다",
              "correct": false
            },
            {
              "text": "그들은 제 친구입니다",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "그는 제 친구입니다",
          "options": [
            {
              "text": "He is my friend",
              "correct": true
            },
            {
              "text": "I am a student",
              "correct": false
            },
            {
              "text": "I am a teacher",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"She is a doctor\"?",
          "options": [
            {
              "text": "그녀는 의사입니다",
              "correct": true
            },
            {
              "text": "그는 의사입니다",
              "correct": false
            },
            {
              "text": "그녀는 선생님입니다",
              "correct": false
            },
            {
              "text": "그녀는 학생입니다",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "그녀는 의사입니다",
          "options": [
            {
              "text": "She is a doctor",
              "correct": true
            },
            {
              "text": "I am a student",
              "correct": false
            },
            {
              "text": "I am a teacher",
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
          "question": "Which one means \"I am at home\"?",
          "options": [
            {
              "text": "저는 집에 있어요",
              "correct": true
            },
            {
              "text": "저는 학교에 있어요",
              "correct": false
            },
            {
              "text": "저는 공원에 있어요",
              "correct": false
            },
            {
              "text": "저는 회사에 있어요",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "저는 집에 있어요",
          "options": [
            {
              "text": "I am at home",
              "correct": true
            },
            {
              "text": "The book is on the desk",
              "correct": false
            },
            {
              "text": "The school is near the park",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"The book is on the desk\"?",
          "options": [
            {
              "text": "책은 책상 위에 있어요",
              "correct": true
            },
            {
              "text": "책은 책상 아래에 있어요",
              "correct": false
            },
            {
              "text": "펜은 책상 위에 있어요",
              "correct": false
            },
            {
              "text": "가방은 의자 위에 있어요",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "책은 책상 위에 있어요",
          "options": [
            {
              "text": "The book is on the desk",
              "correct": true
            },
            {
              "text": "I am at home",
              "correct": false
            },
            {
              "text": "The school is near the park",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"The school is near the park\"?",
          "options": [
            {
              "text": "학교는 공원 근처에 있어요",
              "correct": true
            },
            {
              "text": "공원은 학교 근처에 있어요",
              "correct": false
            },
            {
              "text": "가게는 공원 근처에 있어요",
              "correct": false
            },
            {
              "text": "학교는 멀리 있어요",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "학교는 공원 근처에 있어요",
          "options": [
            {
              "text": "The school is near the park",
              "correct": true
            },
            {
              "text": "I am at home",
              "correct": false
            },
            {
              "text": "The book is on the desk",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"The bag is under the chair\"?",
          "options": [
            {
              "text": "가방은 의자 아래에 있어요",
              "correct": true
            },
            {
              "text": "가방은 의자 위에 있어요",
              "correct": false
            },
            {
              "text": "책은 의자 아래에 있어요",
              "correct": false
            },
            {
              "text": "가방은 문 근처에 있어요",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "가방은 의자 아래에 있어요",
          "options": [
            {
              "text": "The bag is under the chair",
              "correct": true
            },
            {
              "text": "I am at home",
              "correct": false
            },
            {
              "text": "The book is on the desk",
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
          "question": "Which one means \"I like coffee\"?",
          "options": [
            {
              "text": "저는 커피를 좋아해요",
              "correct": true
            },
            {
              "text": "저는 차를 좋아해요",
              "correct": false
            },
            {
              "text": "저는 커피가 필요해요",
              "correct": false
            },
            {
              "text": "저는 물을 마셔요",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "저는 커피를 좋아해요",
          "options": [
            {
              "text": "I like coffee",
              "correct": true
            },
            {
              "text": "I like books",
              "correct": false
            },
            {
              "text": "He likes music",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"I like books\"?",
          "options": [
            {
              "text": "저는 책을 좋아해요",
              "correct": true
            },
            {
              "text": "저는 책을 읽어요",
              "correct": false
            },
            {
              "text": "저는 책이 있어요",
              "correct": false
            },
            {
              "text": "저는 학교를 좋아해요",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "저는 책을 좋아해요",
          "options": [
            {
              "text": "I like books",
              "correct": true
            },
            {
              "text": "I like coffee",
              "correct": false
            },
            {
              "text": "He likes music",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"He likes music\"?",
          "options": [
            {
              "text": "그는 음악을 좋아해요",
              "correct": true
            },
            {
              "text": "그녀는 음악을 좋아해요",
              "correct": false
            },
            {
              "text": "그는 음악을 공부해요",
              "correct": false
            },
            {
              "text": "그는 음식을 좋아해요",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "그는 음악을 좋아해요",
          "options": [
            {
              "text": "He likes music",
              "correct": true
            },
            {
              "text": "I like coffee",
              "correct": false
            },
            {
              "text": "I like books",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"We like movies\"?",
          "options": [
            {
              "text": "우리는 영화를 좋아해요",
              "correct": true
            },
            {
              "text": "그들은 영화를 좋아해요",
              "correct": false
            },
            {
              "text": "우리는 영화를 봐요",
              "correct": false
            },
            {
              "text": "우리는 음악을 좋아해요",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "우리는 영화를 좋아해요",
          "options": [
            {
              "text": "We like movies",
              "correct": true
            },
            {
              "text": "I like coffee",
              "correct": false
            },
            {
              "text": "I like books",
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
          "question": "Which one means \"I study in the morning\"?",
          "options": [
            {
              "text": "저는 아침에 공부해요",
              "correct": true
            },
            {
              "text": "저는 밤에 공부해요",
              "correct": false
            },
            {
              "text": "저는 아침에 일해요",
              "correct": false
            },
            {
              "text": "저는 아침에 자요",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "저는 아침에 공부해요",
          "options": [
            {
              "text": "I study in the morning",
              "correct": true
            },
            {
              "text": "I exercise in the evening",
              "correct": false
            },
            {
              "text": "She walks every day",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"I exercise in the evening\"?",
          "options": [
            {
              "text": "저는 저녁에 운동해요",
              "correct": true
            },
            {
              "text": "저는 저녁에 요리해요",
              "correct": false
            },
            {
              "text": "저는 아침에 운동해요",
              "correct": false
            },
            {
              "text": "저는 저녁에 쉬어요",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "저는 저녁에 운동해요",
          "options": [
            {
              "text": "I exercise in the evening",
              "correct": true
            },
            {
              "text": "I study in the morning",
              "correct": false
            },
            {
              "text": "She walks every day",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"She walks every day\"?",
          "options": [
            {
              "text": "그녀는 매일 걸어요",
              "correct": true
            },
            {
              "text": "그는 매일 걸어요",
              "correct": false
            },
            {
              "text": "그녀는 매일 달려요",
              "correct": false
            },
            {
              "text": "그녀는 오늘 걸어요",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "그녀는 매일 걸어요",
          "options": [
            {
              "text": "She walks every day",
              "correct": true
            },
            {
              "text": "I study in the morning",
              "correct": false
            },
            {
              "text": "I exercise in the evening",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"We rest on the weekend\"?",
          "options": [
            {
              "text": "우리는 주말에 쉬어요",
              "correct": true
            },
            {
              "text": "우리는 주말에 일해요",
              "correct": false
            },
            {
              "text": "그들은 주말에 쉬어요",
              "correct": false
            },
            {
              "text": "우리는 밤에 공부해요",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "우리는 주말에 쉬어요",
          "options": [
            {
              "text": "We rest on the weekend",
              "correct": true
            },
            {
              "text": "I study in the morning",
              "correct": false
            },
            {
              "text": "I exercise in the evening",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Requests",
      "challenges": [
        {
          "type": "SELECT",
          "question": "Which one means \"Please help me\"?",
          "options": [
            {
              "text": "도와주세요",
              "correct": true
            },
            {
              "text": "기다려 주세요",
              "correct": false
            },
            {
              "text": "앉아 주세요",
              "correct": false
            },
            {
              "text": "들어 주세요",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "도와주세요",
          "options": [
            {
              "text": "Please help me",
              "correct": true
            },
            {
              "text": "Please speak slowly",
              "correct": false
            },
            {
              "text": "Please give me water",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"Please speak slowly\"?",
          "options": [
            {
              "text": "천천히 말해 주세요",
              "correct": true
            },
            {
              "text": "적어 주세요",
              "correct": false
            },
            {
              "text": "열어 주세요",
              "correct": false
            },
            {
              "text": "먹어 주세요",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "천천히 말해 주세요",
          "options": [
            {
              "text": "Please speak slowly",
              "correct": true
            },
            {
              "text": "Please help me",
              "correct": false
            },
            {
              "text": "Please give me water",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"Please give me water\"?",
          "options": [
            {
              "text": "물을 주세요",
              "correct": true
            },
            {
              "text": "빵을 주세요",
              "correct": false
            },
            {
              "text": "책을 주세요",
              "correct": false
            },
            {
              "text": "가방을 주세요",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "물을 주세요",
          "options": [
            {
              "text": "Please give me water",
              "correct": true
            },
            {
              "text": "Please help me",
              "correct": false
            },
            {
              "text": "Please speak slowly",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"I need help\"?",
          "options": [
            {
              "text": "도움이 필요해요",
              "correct": true
            },
            {
              "text": "커피가 필요해요",
              "correct": false
            },
            {
              "text": "잠이 필요해요",
              "correct": false
            },
            {
              "text": "돈이 필요해요",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "도움이 필요해요",
          "options": [
            {
              "text": "I need help",
              "correct": true
            },
            {
              "text": "Please help me",
              "correct": false
            },
            {
              "text": "Please speak slowly",
              "correct": false
            }
          ]
        }
      ]
    }
  ]
};
