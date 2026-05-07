import type { UnitSeed } from "../../../types";

export const unit2: UnitSeed = {
  "title": "Unit 2. 조건문",
  "description": "if / else if / else, 비교·논리 연산자, 삼항 연산자, switch",
  "lessons": [
    {
      "title": "종합 기본개념 — 조건문",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — else if 키워드",
          "prompt": "Java 조건문에서 Python의 elif에 해당하는 키워드를 빈칸에 채우세요.\n} ___ if (n",
          "code": "} ___ if (n < 0) {",
          "hint": "Java에서 Python의 elif는 'else if' 두 단어로 씁니다.",
          "options": [
            {
              "text": "else",
              "correct": true
            },
            {
              "text": "elif",
              "correct": false
            },
            {
              "text": "or",
              "correct": false
            },
            {
              "text": "other",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 홀짝 판별",
          "prompt": "정수 n이 짝수인지 홀수인지 판별하는 조건을 완성하세요.\nif (n % 2 ___ 0)",
          "code": "if (n % 2 ___ 0)",
          "hint": "나머지(%)가 0이면 짝수. 같음 비교는 == (대입 =이 아님).",
          "options": [
            {
              "text": "==",
              "correct": true
            },
            {
              "text": "=",
              "correct": false
            },
            {
              "text": "!=",
              "correct": false
            },
            {
              "text": ">=",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 논리 연산자 &&",
          "prompt": "두 조건이 모두 참일 때 실행되는 논리 연산자를 채우세요.\nif (a > 0 ___ b > 0)",
          "code": "if (a > 0 ___ b > 0)",
          "hint": "Java에서 AND 논리 연산자는 && 입니다. Python의 'and'와 다릅니다.",
          "options": [
            {
              "text": "&&",
              "correct": true
            },
            {
              "text": "||",
              "correct": false
            },
            {
              "text": "and",
              "correct": false
            },
            {
              "text": "&",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — 삼항 연산자",
          "prompt": "삼항 연산자로 나이에 따라 '성인'/'미성년자'를 결정하는 코드를 완성하세요.\nString result = (age >= 18) ___ \"성인\" : \"미성년자\";",
          "code": "String result = (age >= 18) ___ \"성인\" : \"미성년자\";",
          "hint": "삼항 연산자: 조건 ? 참일때값 : 거짓일때값. Python과 순서가 다릅니다!",
          "options": [
            {
              "text": "?",
              "correct": true
            },
            {
              "text": "if",
              "correct": false
            },
            {
              "text": "then",
              "correct": false
            },
            {
              "text": ":",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "String 비교 — equals()",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — equals() 사용",
          "prompt": "문자열 s가 \"YES\"와 같은지 올바르게 비교하는 코드를 완성하세요.\nif (s.___( \"YES\" ))",
          "code": "if (s.___( \"YES\" ))",
          "hint": "문자열 내용 비교는 .equals() 메서드를 사용합니다.",
          "options": [
            {
              "text": "equals",
              "correct": true
            },
            {
              "text": "==",
              "correct": false
            },
            {
              "text": "compare",
              "correct": false
            },
            {
              "text": "match",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 대소문자 무시 비교",
          "prompt": "대소문자를 무시하고 문자열을 비교하는 메서드를 완성하세요.\nif (s.___( \"yes\" ))",
          "code": "if (s.___( \"yes\" ))",
          "hint": "equalsIgnoreCase()는 대소문자를 무시하고 문자열 내용을 비교합니다.",
          "options": [
            {
              "text": "equalsIgnoreCase",
              "correct": true
            },
            {
              "text": "equals",
              "correct": false
            },
            {
              "text": "compareIgnoreCase",
              "correct": false
            },
            {
              "text": "matchCase",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 문자열이 포함하는지 확인",
          "prompt": "문자열 s가 특정 부분 문자열을 포함하는지 확인하는 코드를 완성하세요.\nif (s.___( \"Java\" ))",
          "code": "if (s.___( \"Java\" ))",
          "hint": "contains() 메서드는 문자열이 특정 부분 문자열을 포함하면 true를 반환합니다.",
          "options": [
            {
              "text": "contains",
              "correct": true
            },
            {
              "text": "includes",
              "correct": false
            },
            {
              "text": "has",
              "correct": false
            },
            {
              "text": "indexOf",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — switch 문",
          "prompt": "switch문으로 요일을 판별하는 코드를 완성하세요. 빈칸을 채우세요.",
          "code": "___ (day) {",
          "hint": "switch(변수)로 시작하고 각 case에서 break를 빠뜨리면 다음 case로 fall-through됩니다.",
          "options": [
            {
              "text": "switch",
              "correct": true
            },
            {
              "text": "if",
              "correct": false
            },
            {
              "text": "case",
              "correct": false
            },
            {
              "text": "select",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "switch 문과 fall-through",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — switch 기본 구조",
          "prompt": "switch 문에서 case 3이 선택될 때 출력하고 멈추는 코드를 완성하세요.",
          "code": "case 3: System.out.println(\"셋\"); ___;",
          "hint": "break가 없으면 다음 case로 이어집니다. 각 case 끝에 break를 쓰세요.",
          "options": [
            {
              "text": "break",
              "correct": true
            },
            {
              "text": "continue",
              "correct": false
            },
            {
              "text": "return",
              "correct": false
            },
            {
              "text": "stop",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — default 분기",
          "prompt": "switch에서 일치하는 case가 없을 때 실행되는 키워드를 완성하세요.",
          "code": "___: System.out.println(\"기타\"); break;",
          "hint": "default는 어떤 case에도 해당하지 않을 때 실행됩니다. if문의 else와 같습니다.",
          "options": [
            {
              "text": "default",
              "correct": true
            },
            {
              "text": "else",
              "correct": false
            },
            {
              "text": "other",
              "correct": false
            },
            {
              "text": "any",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 조건 범위 판별",
          "prompt": "점수가 90 이상이면 A, 80 이상이면 B, 나머지는 C를 출력하는 조건문을 완성하세요.",
          "code": "} ___ if (score >= 80) {",
          "hint": "Java에서 elif는 else if (두 단어)입니다.",
          "options": [
            {
              "text": "else",
              "correct": true
            },
            {
              "text": "elif",
              "correct": false
            },
            {
              "text": "or",
              "correct": false
            },
            {
              "text": "and",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — 논리연산자 복합 조건",
          "prompt": "연도가 윤년인지 판별하는 조건문을 완성하세요. (4의 배수이고 100의 배수가 아니거나, 400의 배수)",
          "code": "boolean isLeap = (year % 4 == 0 && year % 100 != 0) ___ (year % 400 == 0);",
          "hint": "|| 는 OR 연산자입니다. 두 조건 중 하나라도 참이면 참입니다.",
          "options": [
            {
              "text": "||",
              "correct": true
            },
            {
              "text": "&&",
              "correct": false
            },
            {
              "text": "or",
              "correct": false
            },
            {
              "text": "and",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "비교 연산자와 null 처리",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — null 체크",
          "prompt": "변수가 null인지 확인하는 코드를 완성하세요.",
          "code": "if (s ___ null)",
          "hint": "null 비교는 == 를 사용합니다. .equals()로는 null 비교 시 NPE가 발생합니다.",
          "options": [
            {
              "text": "==",
              "correct": true
            },
            {
              "text": "=",
              "correct": false
            },
            {
              "text": "equals",
              "correct": false
            },
            {
              "text": "!=",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 안전한 문자열 비교",
          "prompt": "변수 s가 null일 수 있을 때 NPE 없이 비교하는 방법을 선택하세요.",
          "code": "if (___.equals(s))",
          "hint": "리터럴.equals(변수) 형태로 쓰면 변수가 null이어도 NPE가 발생하지 않습니다.",
          "options": [
            {
              "text": "\"hello\"",
              "correct": true
            },
            {
              "text": "s",
              "correct": false
            },
            {
              "text": "null",
              "correct": false
            },
            {
              "text": "new String()",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 삼항으로 null 기본값",
          "prompt": "s가 null이면 \"기본값\"을 쓰는 삼항 연산자를 완성하세요.",
          "code": "String result = (s != null) ? s : ___;",
          "hint": "삼항 연산자로 null 대신 기본값을 반환하는 패턴입니다.",
          "options": [
            {
              "text": "\"기본값\"",
              "correct": true
            },
            {
              "text": "null",
              "correct": false
            },
            {
              "text": "\"\"",
              "correct": false
            },
            {
              "text": "s",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — 복합 조건 단락 평가",
          "prompt": "&&는 왼쪽이 false면 오른쪽을 평가하지 않습니다. 이를 활용한 null-safe 조건을 완성하세요.",
          "code": "if (s != null ___ s.equals(\"hello\"))",
          "hint": "&& 단락 평가: 왼쪽이 false면 오른쪽을 평가하지 않습니다. s != null이 false면 s.equals()를 호출하지 않아 안전합니다.",
          "options": [
            {
              "text": "&&",
              "correct": true
            },
            {
              "text": "||",
              "correct": false
            },
            {
              "text": "&",
              "correct": false
            },
            {
              "text": "|",
              "correct": false
            }
          ]
        }
      ]
    }
  ]
};
