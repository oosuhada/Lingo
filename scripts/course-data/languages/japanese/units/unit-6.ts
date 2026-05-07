import type { UnitSeed } from "../../../types";

export const unit6: UnitSeed = {
  "title": "Unit 6",
  "description": "Read and build simple Japanese sentences",
  "lessons": [
    {
      "title": "Identity sentences",
      "challenges": [
        {
          "type": "SELECT",
          "question": "Which one means \"I am a student / 저는 학생입니다\"?",
          "options": [
            {
              "text": "私は学生です",
              "correct": true
            },
            {
              "text": "私は先生です",
              "correct": false
            },
            {
              "text": "私はお腹がすいています",
              "correct": false
            },
            {
              "text": "私は家にいます",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "私は学生です",
          "options": [
            {
              "text": "I am a student / 저는 학생입니다",
              "correct": true
            },
            {
              "text": "I am a teacher / 저는 선생님입니다",
              "correct": false
            },
            {
              "text": "He is my friend / 그는 제 친구입니다",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"I am a teacher / 저는 선생님입니다\"?",
          "options": [
            {
              "text": "私は先生です",
              "correct": true
            },
            {
              "text": "私は学生です",
              "correct": false
            },
            {
              "text": "私は疲れています",
              "correct": false
            },
            {
              "text": "私はここにいます",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "私は先生です",
          "options": [
            {
              "text": "I am a teacher / 저는 선생님입니다",
              "correct": true
            },
            {
              "text": "I am a student / 저는 학생입니다",
              "correct": false
            },
            {
              "text": "He is my friend / 그는 제 친구입니다",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"He is my friend / 그는 제 친구입니다\"?",
          "options": [
            {
              "text": "彼は私の友だちです",
              "correct": true
            },
            {
              "text": "彼女は私の友だちです",
              "correct": false
            },
            {
              "text": "彼は私の兄です",
              "correct": false
            },
            {
              "text": "彼らは私の友だちです",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "彼は私の友だちです",
          "options": [
            {
              "text": "He is my friend / 그는 제 친구입니다",
              "correct": true
            },
            {
              "text": "I am a student / 저는 학생입니다",
              "correct": false
            },
            {
              "text": "I am a teacher / 저는 선생님입니다",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"She is a doctor / 그녀는 의사입니다\"?",
          "options": [
            {
              "text": "彼女は医者です",
              "correct": true
            },
            {
              "text": "彼は医者です",
              "correct": false
            },
            {
              "text": "彼女は先生です",
              "correct": false
            },
            {
              "text": "彼女は学生です",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "彼女は医者です",
          "options": [
            {
              "text": "She is a doctor / 그녀는 의사입니다",
              "correct": true
            },
            {
              "text": "I am a student / 저는 학생입니다",
              "correct": false
            },
            {
              "text": "I am a teacher / 저는 선생님입니다",
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
          "question": "Which one means \"I am at home / 저는 집에 있어요\"?",
          "options": [
            {
              "text": "私は家にいます",
              "correct": true
            },
            {
              "text": "私は学校にいます",
              "correct": false
            },
            {
              "text": "私は公園にいます",
              "correct": false
            },
            {
              "text": "私は仕事にいます",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "私は家にいます",
          "options": [
            {
              "text": "I am at home / 저는 집에 있어요",
              "correct": true
            },
            {
              "text": "The book is on the desk / 책은 책상 위에 있어요",
              "correct": false
            },
            {
              "text": "The school is near the park / 학교는 공원 근처에 있어요",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"The book is on the desk / 책은 책상 위에 있어요\"?",
          "options": [
            {
              "text": "本は机の上にあります",
              "correct": true
            },
            {
              "text": "本は机の下にあります",
              "correct": false
            },
            {
              "text": "ペンは机の上にあります",
              "correct": false
            },
            {
              "text": "かばんは椅子の上にあります",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "本は机の上にあります",
          "options": [
            {
              "text": "The book is on the desk / 책은 책상 위에 있어요",
              "correct": true
            },
            {
              "text": "I am at home / 저는 집에 있어요",
              "correct": false
            },
            {
              "text": "The school is near the park / 학교는 공원 근처에 있어요",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"The school is near the park / 학교는 공원 근처에 있어요\"?",
          "options": [
            {
              "text": "学校は公園の近くにあります",
              "correct": true
            },
            {
              "text": "公園は学校の近くにあります",
              "correct": false
            },
            {
              "text": "店は公園の近くにあります",
              "correct": false
            },
            {
              "text": "学校は遠いです",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "学校は公園の近くにあります",
          "options": [
            {
              "text": "The school is near the park / 학교는 공원 근처에 있어요",
              "correct": true
            },
            {
              "text": "I am at home / 저는 집에 있어요",
              "correct": false
            },
            {
              "text": "The book is on the desk / 책은 책상 위에 있어요",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"The bag is under the chair / 가방은 의자 아래에 있어요\"?",
          "options": [
            {
              "text": "かばんは椅子の下にあります",
              "correct": true
            },
            {
              "text": "かばんは椅子の上にあります",
              "correct": false
            },
            {
              "text": "本は椅子の下にあります",
              "correct": false
            },
            {
              "text": "かばんはドアの近くにあります",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "かばんは椅子の下にあります",
          "options": [
            {
              "text": "The bag is under the chair / 가방은 의자 아래에 있어요",
              "correct": true
            },
            {
              "text": "I am at home / 저는 집에 있어요",
              "correct": false
            },
            {
              "text": "The book is on the desk / 책은 책상 위에 있어요",
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
          "question": "Which one means \"I like coffee / 저는 커피를 좋아해요\"?",
          "options": [
            {
              "text": "私はコーヒーが好きです",
              "correct": true
            },
            {
              "text": "私はお茶が好きです",
              "correct": false
            },
            {
              "text": "私はコーヒーが必要です",
              "correct": false
            },
            {
              "text": "私は水を飲みます",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "私はコーヒーが好きです",
          "options": [
            {
              "text": "I like coffee / 저는 커피를 좋아해요",
              "correct": true
            },
            {
              "text": "I like books / 저는 책을 좋아해요",
              "correct": false
            },
            {
              "text": "He likes music / 그는 음악을 좋아해요",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"I like books / 저는 책을 좋아해요\"?",
          "options": [
            {
              "text": "私は本が好きです",
              "correct": true
            },
            {
              "text": "私は本を読みます",
              "correct": false
            },
            {
              "text": "私は本を持っています",
              "correct": false
            },
            {
              "text": "私は学校が好きです",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "私は本が好きです",
          "options": [
            {
              "text": "I like books / 저는 책을 좋아해요",
              "correct": true
            },
            {
              "text": "I like coffee / 저는 커피를 좋아해요",
              "correct": false
            },
            {
              "text": "He likes music / 그는 음악을 좋아해요",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"He likes music / 그는 음악을 좋아해요\"?",
          "options": [
            {
              "text": "彼は音楽が好きです",
              "correct": true
            },
            {
              "text": "彼女は音楽が好きです",
              "correct": false
            },
            {
              "text": "彼は音楽を勉強します",
              "correct": false
            },
            {
              "text": "彼は食べ物が好きです",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "彼は音楽が好きです",
          "options": [
            {
              "text": "He likes music / 그는 음악을 좋아해요",
              "correct": true
            },
            {
              "text": "I like coffee / 저는 커피를 좋아해요",
              "correct": false
            },
            {
              "text": "I like books / 저는 책을 좋아해요",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"We like movies / 우리는 영화를 좋아해요\"?",
          "options": [
            {
              "text": "私たちは映画が好きです",
              "correct": true
            },
            {
              "text": "彼らは映画が好きです",
              "correct": false
            },
            {
              "text": "私たちは映画を見ます",
              "correct": false
            },
            {
              "text": "私たちは音楽が好きです",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "私たちは映画が好きです",
          "options": [
            {
              "text": "We like movies / 우리는 영화를 좋아해요",
              "correct": true
            },
            {
              "text": "I like coffee / 저는 커피를 좋아해요",
              "correct": false
            },
            {
              "text": "I like books / 저는 책을 좋아해요",
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
          "question": "Which one means \"I study in the morning / 저는 아침에 공부해요\"?",
          "options": [
            {
              "text": "私は朝に勉強します",
              "correct": true
            },
            {
              "text": "私は夜に勉強します",
              "correct": false
            },
            {
              "text": "私は朝に働きます",
              "correct": false
            },
            {
              "text": "私は朝に寝ます",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "私は朝に勉強します",
          "options": [
            {
              "text": "I study in the morning / 저는 아침에 공부해요",
              "correct": true
            },
            {
              "text": "I exercise in the evening / 저는 저녁에 운동해요",
              "correct": false
            },
            {
              "text": "She walks every day / 그녀는 매일 걸어요",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"I exercise in the evening / 저는 저녁에 운동해요\"?",
          "options": [
            {
              "text": "私は夕方に運動します",
              "correct": true
            },
            {
              "text": "私は夕方に料理します",
              "correct": false
            },
            {
              "text": "私は朝に運動します",
              "correct": false
            },
            {
              "text": "私は夕方に休みます",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "私は夕方に運動します",
          "options": [
            {
              "text": "I exercise in the evening / 저는 저녁에 운동해요",
              "correct": true
            },
            {
              "text": "I study in the morning / 저는 아침에 공부해요",
              "correct": false
            },
            {
              "text": "She walks every day / 그녀는 매일 걸어요",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"She walks every day / 그녀는 매일 걸어요\"?",
          "options": [
            {
              "text": "彼女は毎日歩きます",
              "correct": true
            },
            {
              "text": "彼は毎日歩きます",
              "correct": false
            },
            {
              "text": "彼女は毎日走ります",
              "correct": false
            },
            {
              "text": "彼女は今日歩きます",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "彼女は毎日歩きます",
          "options": [
            {
              "text": "She walks every day / 그녀는 매일 걸어요",
              "correct": true
            },
            {
              "text": "I study in the morning / 저는 아침에 공부해요",
              "correct": false
            },
            {
              "text": "I exercise in the evening / 저는 저녁에 운동해요",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"We rest on the weekend / 우리는 주말에 쉬어요\"?",
          "options": [
            {
              "text": "私たちは週末に休みます",
              "correct": true
            },
            {
              "text": "私たちは週末に働きます",
              "correct": false
            },
            {
              "text": "彼らは週末に休みます",
              "correct": false
            },
            {
              "text": "私たちは夜に勉強します",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "私たちは週末に休みます",
          "options": [
            {
              "text": "We rest on the weekend / 우리는 주말에 쉬어요",
              "correct": true
            },
            {
              "text": "I study in the morning / 저는 아침에 공부해요",
              "correct": false
            },
            {
              "text": "I exercise in the evening / 저는 저녁에 운동해요",
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
          "question": "Which one means \"Please help me / 도와주세요\"?",
          "options": [
            {
              "text": "助けてください",
              "correct": true
            },
            {
              "text": "待ってください",
              "correct": false
            },
            {
              "text": "座ってください",
              "correct": false
            },
            {
              "text": "聞いてください",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "助けてください",
          "options": [
            {
              "text": "Please help me / 도와주세요",
              "correct": true
            },
            {
              "text": "Please speak slowly / 천천히 말해 주세요",
              "correct": false
            },
            {
              "text": "Please give me water / 물을 주세요",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"Please speak slowly / 천천히 말해 주세요\"?",
          "options": [
            {
              "text": "ゆっくり話してください",
              "correct": true
            },
            {
              "text": "書いてください",
              "correct": false
            },
            {
              "text": "開けてください",
              "correct": false
            },
            {
              "text": "食べてください",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "ゆっくり話してください",
          "options": [
            {
              "text": "Please speak slowly / 천천히 말해 주세요",
              "correct": true
            },
            {
              "text": "Please help me / 도와주세요",
              "correct": false
            },
            {
              "text": "Please give me water / 물을 주세요",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"Please give me water / 물을 주세요\"?",
          "options": [
            {
              "text": "水をください",
              "correct": true
            },
            {
              "text": "パンをください",
              "correct": false
            },
            {
              "text": "本をください",
              "correct": false
            },
            {
              "text": "かばんをください",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "水をください",
          "options": [
            {
              "text": "Please give me water / 물을 주세요",
              "correct": true
            },
            {
              "text": "Please help me / 도와주세요",
              "correct": false
            },
            {
              "text": "Please speak slowly / 천천히 말해 주세요",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"I need help / 도움이 필요해요\"?",
          "options": [
            {
              "text": "助けが必要です",
              "correct": true
            },
            {
              "text": "コーヒーが必要です",
              "correct": false
            },
            {
              "text": "睡眠が必要です",
              "correct": false
            },
            {
              "text": "お金が必要です",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "助けが必要です",
          "options": [
            {
              "text": "I need help / 도움이 필요해요",
              "correct": true
            },
            {
              "text": "Please help me / 도와주세요",
              "correct": false
            },
            {
              "text": "Please speak slowly / 천천히 말해 주세요",
              "correct": false
            }
          ]
        }
      ]
    }
  ]
};
