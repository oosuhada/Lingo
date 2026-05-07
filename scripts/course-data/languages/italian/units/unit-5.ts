import type { UnitSeed } from "../../../types";

export const unit5: UnitSeed = {
  "title": "Unit 5",
  "description": "Learn useful Italian phrases for real situations",
  "lessons": [
    {
      "title": "Polite requests",
      "challenges": [
        {
          "type": "SELECT",
          "question": "Which one means \"please help me\"?",
          "options": [
            {
              "text": "aiutami per favore",
              "correct": true
            },
            {
              "text": "aspetta per favore",
              "correct": false
            },
            {
              "text": "siediti per favore",
              "correct": false
            },
            {
              "text": "ascolta per favore",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "aiutami per favore",
          "options": [
            {
              "text": "please help me",
              "correct": true
            },
            {
              "text": "please wait",
              "correct": false
            },
            {
              "text": "please speak slowly",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"please wait\"?",
          "options": [
            {
              "text": "aspetta per favore",
              "correct": true
            },
            {
              "text": "aiutami per favore",
              "correct": false
            },
            {
              "text": "entra per favore",
              "correct": false
            },
            {
              "text": "leggi per favore",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "aspetta per favore",
          "options": [
            {
              "text": "please wait",
              "correct": true
            },
            {
              "text": "please help me",
              "correct": false
            },
            {
              "text": "please speak slowly",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"please speak slowly\"?",
          "options": [
            {
              "text": "parla lentamente per favore",
              "correct": true
            },
            {
              "text": "scrivilo per favore",
              "correct": false
            },
            {
              "text": "aprilo per favore",
              "correct": false
            },
            {
              "text": "mangia per favore",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "parla lentamente per favore",
          "options": [
            {
              "text": "please speak slowly",
              "correct": true
            },
            {
              "text": "please help me",
              "correct": false
            },
            {
              "text": "please wait",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"please say it again\"?",
          "options": [
            {
              "text": "ripetilo per favore",
              "correct": true
            },
            {
              "text": "aspetta qui per favore",
              "correct": false
            },
            {
              "text": "chiudilo per favore",
              "correct": false
            },
            {
              "text": "corri per favore",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "ripetilo per favore",
          "options": [
            {
              "text": "please say it again",
              "correct": true
            },
            {
              "text": "please help me",
              "correct": false
            },
            {
              "text": "please wait",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Shopping",
      "challenges": [
        {
          "type": "SELECT",
          "question": "Which one means \"How much is this?\"?",
          "options": [
            {
              "text": "Quanto costa questo?",
              "correct": true
            },
            {
              "text": "Dov’è questo?",
              "correct": false
            },
            {
              "text": "Che ore sono?",
              "correct": false
            },
            {
              "text": "Chi è questo?",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "Quanto costa questo?",
          "options": [
            {
              "text": "How much is this?",
              "correct": true
            },
            {
              "text": "I want to buy this",
              "correct": false
            },
            {
              "text": "I will pay by card",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"I want to buy this\"?",
          "options": [
            {
              "text": "Voglio comprare questo",
              "correct": true
            },
            {
              "text": "Voglio vendere questo",
              "correct": false
            },
            {
              "text": "Voglio leggere questo",
              "correct": false
            },
            {
              "text": "Voglio partire",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "Voglio comprare questo",
          "options": [
            {
              "text": "I want to buy this",
              "correct": true
            },
            {
              "text": "How much is this?",
              "correct": false
            },
            {
              "text": "I will pay by card",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"I will pay by card\"?",
          "options": [
            {
              "text": "Pago con carta",
              "correct": true
            },
            {
              "text": "Pago domani",
              "correct": false
            },
            {
              "text": "Mangio qui",
              "correct": false
            },
            {
              "text": "Cammino a casa",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "Pago con carta",
          "options": [
            {
              "text": "I will pay by card",
              "correct": true
            },
            {
              "text": "How much is this?",
              "correct": false
            },
            {
              "text": "I want to buy this",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"Please give me a receipt\"?",
          "options": [
            {
              "text": "Mi dia una ricevuta",
              "correct": true
            },
            {
              "text": "Mi dia acqua",
              "correct": false
            },
            {
              "text": "Mi chiami",
              "correct": false
            },
            {
              "text": "Si sieda",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "Mi dia una ricevuta",
          "options": [
            {
              "text": "Please give me a receipt",
              "correct": true
            },
            {
              "text": "How much is this?",
              "correct": false
            },
            {
              "text": "I want to buy this",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Travel",
      "challenges": [
        {
          "type": "SELECT",
          "question": "Which one means \"Where is the airport?\"?",
          "options": [
            {
              "text": "Dov’è l’aeroporto?",
              "correct": true
            },
            {
              "text": "Dov’è l’hotel?",
              "correct": false
            },
            {
              "text": "Dov’è il parco?",
              "correct": false
            },
            {
              "text": "Dov’è la banca?",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "Dov’è l’aeroporto?",
          "options": [
            {
              "text": "Where is the airport?",
              "correct": true
            },
            {
              "text": "One ticket, please",
              "correct": false
            },
            {
              "text": "I want to go to the hotel",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"One ticket, please\"?",
          "options": [
            {
              "text": "Un biglietto, per favore",
              "correct": true
            },
            {
              "text": "Un caffè, per favore",
              "correct": false
            },
            {
              "text": "Un libro, per favore",
              "correct": false
            },
            {
              "text": "Una stanza, per favore",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "Un biglietto, per favore",
          "options": [
            {
              "text": "One ticket, please",
              "correct": true
            },
            {
              "text": "Where is the airport?",
              "correct": false
            },
            {
              "text": "I want to go to the hotel",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"I want to go to the hotel\"?",
          "options": [
            {
              "text": "Voglio andare in hotel",
              "correct": true
            },
            {
              "text": "Voglio andare a scuola",
              "correct": false
            },
            {
              "text": "Voglio andare al negozio",
              "correct": false
            },
            {
              "text": "Voglio andare a casa",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "Voglio andare in hotel",
          "options": [
            {
              "text": "I want to go to the hotel",
              "correct": true
            },
            {
              "text": "Where is the airport?",
              "correct": false
            },
            {
              "text": "One ticket, please",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"Does it leave now?\"?",
          "options": [
            {
              "text": "Parte adesso?",
              "correct": true
            },
            {
              "text": "Arriva oggi?",
              "correct": false
            },
            {
              "text": "Apre adesso?",
              "correct": false
            },
            {
              "text": "Si ferma qui?",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "Parte adesso?",
          "options": [
            {
              "text": "Does it leave now?",
              "correct": true
            },
            {
              "text": "Where is the airport?",
              "correct": false
            },
            {
              "text": "One ticket, please",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Questions",
      "challenges": [
        {
          "type": "SELECT",
          "question": "Which one means \"What is this?\"?",
          "options": [
            {
              "text": "Che cos’è questo?",
              "correct": true
            },
            {
              "text": "Chi sei?",
              "correct": false
            },
            {
              "text": "Dove siamo?",
              "correct": false
            },
            {
              "text": "Quando è?",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "Che cos’è questo?",
          "options": [
            {
              "text": "What is this?",
              "correct": true
            },
            {
              "text": "Where is it?",
              "correct": false
            },
            {
              "text": "When do we meet?",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"Where is it?\"?",
          "options": [
            {
              "text": "Dov’è?",
              "correct": true
            },
            {
              "text": "Che cos’è?",
              "correct": false
            },
            {
              "text": "Chi c’è?",
              "correct": false
            },
            {
              "text": "Quanto costa?",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "Dov’è?",
          "options": [
            {
              "text": "Where is it?",
              "correct": true
            },
            {
              "text": "What is this?",
              "correct": false
            },
            {
              "text": "When do we meet?",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"When do we meet?\"?",
          "options": [
            {
              "text": "Quando ci incontriamo?",
              "correct": true
            },
            {
              "text": "Dove ci incontriamo?",
              "correct": false
            },
            {
              "text": "Cosa mangiamo?",
              "correct": false
            },
            {
              "text": "Chi chiamiamo?",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "Quando ci incontriamo?",
          "options": [
            {
              "text": "When do we meet?",
              "correct": true
            },
            {
              "text": "What is this?",
              "correct": false
            },
            {
              "text": "Where is it?",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"What is wrong?\"?",
          "options": [
            {
              "text": "Che succede?",
              "correct": true
            },
            {
              "text": "Dove sei?",
              "correct": false
            },
            {
              "text": "Che cos’è questo?",
              "correct": false
            },
            {
              "text": "Chi è pronto?",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "Che succede?",
          "options": [
            {
              "text": "What is wrong?",
              "correct": true
            },
            {
              "text": "What is this?",
              "correct": false
            },
            {
              "text": "Where is it?",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Health and help",
      "challenges": [
        {
          "type": "SELECT",
          "question": "Which one means \"I feel sick\"?",
          "options": [
            {
              "text": "Mi sento male",
              "correct": true
            },
            {
              "text": "Sono felice",
              "correct": false
            },
            {
              "text": "Sono pronto",
              "correct": false
            },
            {
              "text": "Sono in ritardo",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "Mi sento male",
          "options": [
            {
              "text": "I feel sick",
              "correct": true
            },
            {
              "text": "Please give me water",
              "correct": false
            },
            {
              "text": "I need a doctor",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"Please give me water\"?",
          "options": [
            {
              "text": "Mi dia acqua, per favore",
              "correct": true
            },
            {
              "text": "Mi dia pane, per favore",
              "correct": false
            },
            {
              "text": "Mi dia un libro, per favore",
              "correct": false
            },
            {
              "text": "Mi dia una borsa, per favore",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "Mi dia acqua, per favore",
          "options": [
            {
              "text": "Please give me water",
              "correct": true
            },
            {
              "text": "I feel sick",
              "correct": false
            },
            {
              "text": "I need a doctor",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "Which one means \"I need a doctor\"?",
          "options": [
            {
              "text": "Ho bisogno di un dottore",
              "correct": true
            },
            {
              "text": "Ho bisogno di un insegnante",
              "correct": false
            },
            {
              "text": "Ho bisogno di un biglietto",
              "correct": false
            },
            {
              "text": "Ho bisogno di un telefono",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "Ho bisogno di un dottore",
          "options": [
            {
              "text": "I need a doctor",
              "correct": true
            },
            {
              "text": "I feel sick",
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
          "question": "Which one means \"I need help\"?",
          "options": [
            {
              "text": "Ho bisogno di aiuto",
              "correct": true
            },
            {
              "text": "Ho bisogno di caffè",
              "correct": false
            },
            {
              "text": "Ho bisogno di dormire",
              "correct": false
            },
            {
              "text": "Ho bisogno di soldi",
              "correct": false
            }
          ]
        },
        {
          "type": "ASSIST",
          "question": "Ho bisogno di aiuto",
          "options": [
            {
              "text": "I need help",
              "correct": true
            },
            {
              "text": "I feel sick",
              "correct": false
            },
            {
              "text": "Please give me water",
              "correct": false
            }
          ]
        }
      ]
    }
  ]
};
