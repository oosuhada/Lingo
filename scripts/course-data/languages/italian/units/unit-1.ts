import type { UnitSeed } from "../../../types";

export const unit1: UnitSeed = {
  "title": "Unit 1",
  "description": "Learn common Italian words and phrases",
  "lessons": [
    {
      "title": "Greetings",
      "challenges": [
        {
          "type": "SELECT",
          "question": "Which one means \"hello\"?",
          "options": [
            {
              "text": "ciao",
              "correct": true
            },
            {
              "text": "grazie",
              "correct": false
            },
            {
              "text": "prego",
              "correct": false
            },
            {
              "text": "scusa",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "ciao",
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
              "text": "please",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"thank you\"?",
          "options": [
            {
              "text": "grazie",
              "correct": true
            },
            {
              "text": "ciao",
              "correct": false
            },
            {
              "text": "per favore",
              "correct": false
            },
            {
              "text": "arrivederci",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "grazie",
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
              "text": "please",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"please\"?",
          "options": [
            {
              "text": "per favore",
              "correct": true
            },
            {
              "text": "libro",
              "correct": false
            },
            {
              "text": "acqua",
              "correct": false
            },
            {
              "text": "scusa",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "per favore",
          "options": [
            {
              "text": "please",
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
              "text": "arrivederci",
              "correct": true
            },
            {
              "text": "ciao",
              "correct": false
            },
            {
              "text": "grazie",
              "correct": false
            },
            {
              "text": "sì",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "arrivederci",
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
      "title": "Basics",
      "challenges": [
        {
          "type": "SELECT",
          "question": "Which one means \"water\"?",
          "options": [
            {
              "text": "acqua",
              "correct": true
            },
            {
              "text": "pane",
              "correct": false
            },
            {
              "text": "libro",
              "correct": false
            },
            {
              "text": "scuola",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "acqua",
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
              "text": "libro",
              "correct": true
            },
            {
              "text": "acqua",
              "correct": false
            },
            {
              "text": "casa",
              "correct": false
            },
            {
              "text": "caffè",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "libro",
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
              "text": "scuola",
              "correct": true
            },
            {
              "text": "casa",
              "correct": false
            },
            {
              "text": "acqua",
              "correct": false
            },
            {
              "text": "pane",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "scuola",
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
              "text": "casa",
              "correct": true
            },
            {
              "text": "scuola",
              "correct": false
            },
            {
              "text": "libro",
              "correct": false
            },
            {
              "text": "mela",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "casa",
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
          "question": "Which one means \"man\"?",
          "options": [
            {
              "text": "uomo",
              "correct": true
            },
            {
              "text": "donna",
              "correct": false
            },
            {
              "text": "bambino",
              "correct": false
            },
            {
              "text": "amico",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "uomo",
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
              "text": "friend",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"woman\"?",
          "options": [
            {
              "text": "donna",
              "correct": true
            },
            {
              "text": "uomo",
              "correct": false
            },
            {
              "text": "insegnante",
              "correct": false
            },
            {
              "text": "studente",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "donna",
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
              "text": "friend",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"friend\"?",
          "options": [
            {
              "text": "amico",
              "correct": true
            },
            {
              "text": "famiglia",
              "correct": false
            },
            {
              "text": "insegnante",
              "correct": false
            },
            {
              "text": "bambino",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "amico",
          "options": [
            {
              "text": "friend",
              "correct": true
            },
            {
              "text": "man",
              "correct": false
            },
            {
              "text": "woman",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"teacher\"?",
          "options": [
            {
              "text": "insegnante",
              "correct": true
            },
            {
              "text": "studente",
              "correct": false
            },
            {
              "text": "amico",
              "correct": false
            },
            {
              "text": "uomo",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "insegnante",
          "options": [
            {
              "text": "teacher",
              "correct": true
            },
            {
              "text": "man",
              "correct": false
            },
            {
              "text": "woman",
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
          "question": "Which one means \"pen\"?",
          "options": [
            {
              "text": "penna",
              "correct": true
            },
            {
              "text": "scrivania",
              "correct": false
            },
            {
              "text": "sedia",
              "correct": false
            },
            {
              "text": "borsa",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "penna",
          "options": [
            {
              "text": "pen",
              "correct": true
            },
            {
              "text": "bag",
              "correct": false
            },
            {
              "text": "chair",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"bag\"?",
          "options": [
            {
              "text": "borsa",
              "correct": true
            },
            {
              "text": "penna",
              "correct": false
            },
            {
              "text": "finestra",
              "correct": false
            },
            {
              "text": "porta",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "borsa",
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
              "text": "chair",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"chair\"?",
          "options": [
            {
              "text": "sedia",
              "correct": true
            },
            {
              "text": "scrivania",
              "correct": false
            },
            {
              "text": "libro",
              "correct": false
            },
            {
              "text": "insegnante",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "sedia",
          "options": [
            {
              "text": "chair",
              "correct": true
            },
            {
              "text": "pen",
              "correct": false
            },
            {
              "text": "bag",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"desk\"?",
          "options": [
            {
              "text": "scrivania",
              "correct": true
            },
            {
              "text": "sedia",
              "correct": false
            },
            {
              "text": "studente",
              "correct": false
            },
            {
              "text": "borsa",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "scrivania",
          "options": [
            {
              "text": "desk",
              "correct": true
            },
            {
              "text": "pen",
              "correct": false
            },
            {
              "text": "bag",
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
          "question": "Which one means \"excuse me\"?",
          "options": [
            {
              "text": "scusa",
              "correct": true
            },
            {
              "text": "grazie",
              "correct": false
            },
            {
              "text": "ciao",
              "correct": false
            },
            {
              "text": "sì",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "scusa",
          "options": [
            {
              "text": "excuse me",
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
              "text": "sì",
              "correct": true
            },
            {
              "text": "no",
              "correct": false
            },
            {
              "text": "forse",
              "correct": false
            },
            {
              "text": "grazie",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "sì",
          "options": [
            {
              "text": "yes",
              "correct": true
            },
            {
              "text": "excuse me",
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
              "text": "no",
              "correct": true
            },
            {
              "text": "sì",
              "correct": false
            },
            {
              "text": "per favore",
              "correct": false
            },
            {
              "text": "scusa",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "no",
          "options": [
            {
              "text": "no",
              "correct": true
            },
            {
              "text": "excuse me",
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
          "question": "Which one means \"you are welcome\"?",
          "options": [
            {
              "text": "prego",
              "correct": true
            },
            {
              "text": "buongiorno",
              "correct": false
            },
            {
              "text": "a presto",
              "correct": false
            },
            {
              "text": "ho fame",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "prego",
          "options": [
            {
              "text": "you are welcome",
              "correct": true
            },
            {
              "text": "excuse me",
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
