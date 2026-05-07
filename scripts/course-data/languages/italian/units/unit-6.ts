import type { UnitSeed } from "../../../types";

export const unit6: UnitSeed = {
  "title": "Unit 6",
  "description": "Put Italian words into simple sentences",
  "lessons": [
    {
      "title": "Identity sentences",
      "challenges": [
        {
          "type": "SELECT",
          "question": "Which one means \"I am a student\"?",
          "options": [
            {
              "text": "Sono uno studente",
              "correct": true
            },
            {
              "text": "Sono un insegnante",
              "correct": false
            },
            {
              "text": "Ho fame",
              "correct": false
            },
            {
              "text": "Sono a casa",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "Sono uno studente",
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
              "text": "Sono un insegnante",
              "correct": true
            },
            {
              "text": "Sono uno studente",
              "correct": false
            },
            {
              "text": "Sono stanco",
              "correct": false
            },
            {
              "text": "Sono qui",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "Sono un insegnante",
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
              "text": "Lui è il mio amico",
              "correct": true
            },
            {
              "text": "Lei è la mia amica",
              "correct": false
            },
            {
              "text": "Lui è mio fratello",
              "correct": false
            },
            {
              "text": "Sono i miei amici",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "Lui è il mio amico",
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
              "text": "Lei è una dottoressa",
              "correct": true
            },
            {
              "text": "Lui è un dottore",
              "correct": false
            },
            {
              "text": "Lei è un’insegnante",
              "correct": false
            },
            {
              "text": "Lei è una studentessa",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "Lei è una dottoressa",
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
              "text": "Sono a casa",
              "correct": true
            },
            {
              "text": "Sono a scuola",
              "correct": false
            },
            {
              "text": "Sono al parco",
              "correct": false
            },
            {
              "text": "Sono al lavoro",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "Sono a casa",
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
              "text": "Il libro è sulla scrivania",
              "correct": true
            },
            {
              "text": "Il libro è sotto la scrivania",
              "correct": false
            },
            {
              "text": "La penna è sulla scrivania",
              "correct": false
            },
            {
              "text": "La borsa è sulla sedia",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "Il libro è sulla scrivania",
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
              "text": "La scuola è vicino al parco",
              "correct": true
            },
            {
              "text": "Il parco è vicino alla scuola",
              "correct": false
            },
            {
              "text": "Il negozio è vicino al parco",
              "correct": false
            },
            {
              "text": "La scuola è lontana",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "La scuola è vicino al parco",
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
              "text": "La borsa è sotto la sedia",
              "correct": true
            },
            {
              "text": "La borsa è sulla sedia",
              "correct": false
            },
            {
              "text": "Il libro è sotto la sedia",
              "correct": false
            },
            {
              "text": "La borsa è vicino alla porta",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "La borsa è sotto la sedia",
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
              "text": "Mi piace il caffè",
              "correct": true
            },
            {
              "text": "Mi piace il tè",
              "correct": false
            },
            {
              "text": "Ho bisogno di caffè",
              "correct": false
            },
            {
              "text": "Bevo acqua",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "Mi piace il caffè",
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
              "text": "Mi piacciono i libri",
              "correct": true
            },
            {
              "text": "Leggo libri",
              "correct": false
            },
            {
              "text": "Ho libri",
              "correct": false
            },
            {
              "text": "Mi piace la scuola",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "Mi piacciono i libri",
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
              "text": "A lui piace la musica",
              "correct": true
            },
            {
              "text": "A lei piace la musica",
              "correct": false
            },
            {
              "text": "Lui studia musica",
              "correct": false
            },
            {
              "text": "A lui piace il cibo",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "A lui piace la musica",
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
              "text": "Ci piacciono i film",
              "correct": true
            },
            {
              "text": "A loro piacciono i film",
              "correct": false
            },
            {
              "text": "Guardiamo film",
              "correct": false
            },
            {
              "text": "Ci piace la musica",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "Ci piacciono i film",
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
              "text": "Studio la mattina",
              "correct": true
            },
            {
              "text": "Studio la sera",
              "correct": false
            },
            {
              "text": "Lavoro la mattina",
              "correct": false
            },
            {
              "text": "Dormo la mattina",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "Studio la mattina",
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
              "text": "Faccio esercizio la sera",
              "correct": true
            },
            {
              "text": "Cucino la sera",
              "correct": false
            },
            {
              "text": "Faccio esercizio la mattina",
              "correct": false
            },
            {
              "text": "Mi riposo la sera",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "Faccio esercizio la sera",
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
              "text": "Lei cammina ogni giorno",
              "correct": true
            },
            {
              "text": "Lui cammina ogni giorno",
              "correct": false
            },
            {
              "text": "Lei corre ogni giorno",
              "correct": false
            },
            {
              "text": "Lei cammina oggi",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "Lei cammina ogni giorno",
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
              "text": "Ci riposiamo nel weekend",
              "correct": true
            },
            {
              "text": "Lavoriamo nel weekend",
              "correct": false
            },
            {
              "text": "Loro si riposano nel weekend",
              "correct": false
            },
            {
              "text": "Studiamo di notte",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "Ci riposiamo nel weekend",
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
      "title": "Past and future",
      "challenges": [
        {
          "type": "SELECT",
          "question": "Which one means \"I studied yesterday\"?",
          "options": [
            {
              "text": "Ho studiato ieri",
              "correct": true
            },
            {
              "text": "Studio oggi",
              "correct": false
            },
            {
              "text": "Studierò domani",
              "correct": false
            },
            {
              "text": "Ho lavorato ieri",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "Ho studiato ieri",
          "options": [
            {
              "text": "I studied yesterday",
              "correct": true
            },
            {
              "text": "I will go tomorrow",
              "correct": false
            },
            {
              "text": "He just arrived",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"I will go tomorrow\"?",
          "options": [
            {
              "text": "Andrò domani",
              "correct": true
            },
            {
              "text": "Sono andato ieri",
              "correct": false
            },
            {
              "text": "Verrò domani",
              "correct": false
            },
            {
              "text": "Vado oggi",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "Andrò domani",
          "options": [
            {
              "text": "I will go tomorrow",
              "correct": true
            },
            {
              "text": "I studied yesterday",
              "correct": false
            },
            {
              "text": "He just arrived",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"He just arrived\"?",
          "options": [
            {
              "text": "Lui è appena arrivato",
              "correct": true
            },
            {
              "text": "Lei è appena arrivata",
              "correct": false
            },
            {
              "text": "Lui arriverà presto",
              "correct": false
            },
            {
              "text": "Lui è appena partito",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "Lui è appena arrivato",
          "options": [
            {
              "text": "He just arrived",
              "correct": true
            },
            {
              "text": "I studied yesterday",
              "correct": false
            },
            {
              "text": "I will go tomorrow",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"We will start soon\"?",
          "options": [
            {
              "text": "Inizieremo presto",
              "correct": true
            },
            {
              "text": "Abbiamo già iniziato",
              "correct": false
            },
            {
              "text": "Loro inizieranno presto",
              "correct": false
            },
            {
              "text": "Finiremo presto",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "Inizieremo presto",
          "options": [
            {
              "text": "We will start soon",
              "correct": true
            },
            {
              "text": "I studied yesterday",
              "correct": false
            },
            {
              "text": "I will go tomorrow",
              "correct": false
            }
          ]
        }
      ]
    }
  ]
};
