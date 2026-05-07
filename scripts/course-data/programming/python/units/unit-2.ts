import type { UnitSeed } from "../../../types";

export const unit2: UnitSeed = {
  "title": "Unit 2. 조건문",
  "description": "if / elif / else, 비교·논리 연산자",
  "lessons": [
    {
      "title": "종합 기본개념 — 조건문",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — if 기본 구조",
          "prompt": "정수 n을 입력받아 0보다 크면 '양수'를 출력하세요.",
          "code": "if n ___ 0:",
          "hint": "비교 연산자 >는 왼쪽이 오른쪽보다 클 때 True입니다.",
          "options": [
            {
              "text": ">",
              "correct": true
            },
            {
              "text": ">=",
              "correct": false
            },
            {
              "text": "==",
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
          "question": "드릴 2 — elif 사용",
          "prompt": "정수 n을 입력받아 양수면 '양수', 음수면 '음수', 0이면 '영'을 출력하세요.",
          "code": "___ n < 0:",
          "hint": "elif는 else if가 아닌 한 단어입니다!",
          "options": [
            {
              "text": "elif",
              "correct": true
            },
            {
              "text": "else if",
              "correct": false
            },
            {
              "text": "else",
              "correct": false
            },
            {
              "text": "if",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — and 논리 연산자",
          "prompt": "두 정수 a, b를 입력받아 둘 다 양수면 '모두 양수'를 출력하세요.",
          "code": "if a > 0 ___ b > 0:",
          "hint": "Python의 AND 연산자는 and (&&가 아님).",
          "options": [
            {
              "text": "and",
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
              "text": "&",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — 삼항 연산자",
          "prompt": "정수 n을 입력받아 짝수면 '짝수', 홀수면 '홀수'를 한 줄로 출력하세요.",
          "code": "print('짝수' ___ n % 2 == 0 else '홀수')",
          "hint": "Python 삼항: 참값 if 조건 else 거짓값",
          "options": [
            {
              "text": "if",
              "correct": true
            },
            {
              "text": "elif",
              "correct": false
            },
            {
              "text": "when",
              "correct": false
            },
            {
              "text": "?",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "양수/음수/영 판별",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 양수·음수·영 판별",
          "prompt": "정수 n을 입력받아 양수면 '양수', 음수면 '음수', 0이면 '영'을 출력하세요.",
          "code": "if n > 0:\n    print('양수')\n___ n < 0:\n    print('음수')\nelse:\n    print('영')",
          "hint": "elif는 앞선 if가 False일 때 추가 조건을 검사합니다.",
          "options": [
            {
              "text": "elif",
              "correct": true
            },
            {
              "text": "else if",
              "correct": false
            },
            {
              "text": "else",
              "correct": false
            },
            {
              "text": "if",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 짝수·홀수 판별",
          "prompt": "정수 n을 입력받아 짝수면 '짝수', 홀수면 '홀수'를 출력하세요.",
          "code": "if n % 2 ___ 0:",
          "hint": "비교 연산자는 == 두 개입니다. = 하나는 대입이에요!",
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
              "text": "is",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 성인·미성년자 판별",
          "prompt": "나이 age를 입력받아 20세 이상이면 '성인', 미만이면 '미성년자'를 출력하세요. 삼항 연산자를 사용합니다.",
          "code": "result = '성인' ___ age >= 20 else '미성년자'",
          "hint": "파이썬 삼항: 참일때값 if 조건 else 거짓일때값",
          "options": [
            {
              "text": "if",
              "correct": true
            },
            {
              "text": "when",
              "correct": false
            },
            {
              "text": "then",
              "correct": false
            },
            {
              "text": "?",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — 두 수 중 최댓값",
          "prompt": "두 정수 a, b를 입력받아 더 큰 수를 출력하세요. if-else를 사용합니다.",
          "code": "if a ___ b:\n    print(a)\nelse:\n    print(b)",
          "hint": "같은 경우(==)도 포함하려면 >= 를 씁니다.",
          "options": [
            {
              "text": ">=",
              "correct": true
            },
            {
              "text": ">",
              "correct": false
            },
            {
              "text": "<=",
              "correct": false
            },
            {
              "text": "==",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 5 — 세 구간 분류",
          "prompt": "점수 score를 입력받아 90 이상이면 'A', 70 이상이면 'B', 그 미만이면 'C'를 출력하세요.",
          "code": "if score >= 90:\n    print('A')\n___ score >= 70:\n    print('B')\nelse:\n    print('C')",
          "hint": "앞 조건(>=90)에서 이미 걸러지므로 elif에는 >=70만 써도 됩니다.",
          "options": [
            {
              "text": "elif",
              "correct": true
            },
            {
              "text": "else if",
              "correct": false
            },
            {
              "text": "if",
              "correct": false
            },
            {
              "text": "else",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "짝수/홀수 판별",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 짝수·홀수 판별",
          "prompt": "정수 n을 입력받아 짝수면 '짝수', 홀수면 '홀수'를 출력하세요.",
          "code": "if n % 2 ___ 0:",
          "hint": "% 2가 0이면 짝수, 1이면 홀수입니다.",
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
              "text": "is",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 3의 배수 판별",
          "prompt": "정수 n을 입력받아 3의 배수이면 '3의 배수', 아니면 '아님'을 출력하세요.",
          "code": "if n ___ 3 == 0:",
          "hint": "배수 판별은 % 연산으로 나머지가 0인지 확인합니다.",
          "options": [
            {
              "text": "%",
              "correct": true
            },
            {
              "text": "//",
              "correct": false
            },
            {
              "text": "**",
              "correct": false
            },
            {
              "text": "*",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 5와 3의 공배수",
          "prompt": "정수 n을 입력받아 5와 3의 공배수이면 '공배수', 아니면 '해당없음'을 출력하세요.",
          "code": "if n % 5 == 0 ___ n % 3 == 0:",
          "hint": "두 조건을 동시에 만족할 때는 and를 씁니다.",
          "options": [
            {
              "text": "and",
              "correct": true
            },
            {
              "text": "or",
              "correct": false
            },
            {
              "text": "&&",
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
          "question": "드릴 4 — in으로 모음 판별",
          "prompt": "문자 한 개를 입력받아 모음(aeiouAEIOU)이면 '모음', 아니면 '자음'을 출력하세요.",
          "code": "if ch ___ 'aeiouAEIOU':",
          "hint": "in은 문자열 안에 특정 문자가 포함되어 있는지 확인합니다.",
          "options": [
            {
              "text": "in",
              "correct": true
            },
            {
              "text": "==",
              "correct": false
            },
            {
              "text": "is",
              "correct": false
            },
            {
              "text": "has",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "삼항 연산자 성인 판별",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 성인 판별",
          "prompt": "나이를 입력받아 20 이상이면 '성인', 미만이면 '미성년자'를 출력하세요.",
          "code": "result = '성인' ___ age >= 20 else '미성년자'",
          "hint": "파이썬 삼항: 참일때값 if 조건 else 거짓일때값",
          "options": [
            {
              "text": "if",
              "correct": true
            },
            {
              "text": "when",
              "correct": false
            },
            {
              "text": "then",
              "correct": false
            },
            {
              "text": "?",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 절댓값 구하기",
          "prompt": "정수 n을 입력받아 0 이상이면 그대로, 0 미만이면 부호를 바꾼 값을 출력하세요. (삼항 연산자 사용)",
          "code": "result = n if n >= 0 ___ -n",
          "hint": "삼항 연산자는 반드시 else로 끝납니다.",
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
          "question": "드릴 3 — 최댓값 삼항",
          "prompt": "두 정수 a, b를 입력받아 더 큰 수를 삼항 연산자 한 줄로 출력하세요.",
          "code": "print(a ___ a > b else b)",
          "hint": "삼항 연산자를 print 안에서 바로 쓸 수 있습니다.",
          "options": [
            {
              "text": "if",
              "correct": true
            },
            {
              "text": "elif",
              "correct": false
            },
            {
              "text": "else",
              "correct": false
            },
            {
              "text": "when",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — 패스·불합격 판별",
          "prompt": "시험 점수를 입력받아 60 이상이면 'PASS', 미만이면 'FAIL'을 출력하세요.",
          "code": "print('PASS' if score ___ 60 else 'FAIL')",
          "hint": "60점 이상이므로 >= 60입니다.",
          "options": [
            {
              "text": ">=",
              "correct": true
            },
            {
              "text": ">",
              "correct": false
            },
            {
              "text": "==",
              "correct": false
            },
            {
              "text": "<=",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "and 논리 연산자 — 로그인 처리",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 로그인 처리",
          "prompt": "아이디가 'admin'이고 비밀번호가 '1234'일 때만 '로그인 성공'을 출력하세요.",
          "code": "if uid == 'admin' ___ pw == '1234':",
          "hint": "두 조건을 동시에 만족해야 할 때는 and를 씁니다.",
          "options": [
            {
              "text": "and",
              "correct": true
            },
            {
              "text": "or",
              "correct": false
            },
            {
              "text": "&&",
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
          "question": "드릴 2 — 범위 조건 검사",
          "prompt": "정수 n을 입력받아 10 이상 20 이하이면 '범위 내', 아니면 '범위 밖'을 출력하세요.",
          "code": "if 10 ___ n ___ 20:",
          "hint": "파이썬은 10 <= n <= 20처럼 연속 비교가 가능합니다!",
          "options": [
            {
              "text": "<= / <=",
              "correct": true
            },
            {
              "text": "< / <",
              "correct": false
            },
            {
              "text": "and / and",
              "correct": false
            },
            {
              "text": "in / in",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — or 조건 처리",
          "prompt": "정수 n을 입력받아 0이거나 음수이면 '0 이하'를 출력하세요.",
          "code": "if n == 0 ___ n < 0:",
          "hint": "둘 중 하나만 참이어도 되는 조건에는 or를 씁니다.",
          "options": [
            {
              "text": "or",
              "correct": true
            },
            {
              "text": "and",
              "correct": false
            },
            {
              "text": "||",
              "correct": false
            },
            {
              "text": "|",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — not 연산자",
          "prompt": "리스트 arr이 비어있지 않으면 첫 번째 원소를 출력하세요. not을 사용합니다.",
          "code": "if ___ arr:",
          "hint": "not은 True/False를 뒤집습니다. 빈 리스트는 False이므로 not False → True.",
          "options": [
            {
              "text": "not",
              "correct": true
            },
            {
              "text": "!",
              "correct": false
            },
            {
              "text": "no",
              "correct": false
            },
            {
              "text": "empty",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "in 연산자로 포함 확인",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 리스트 존재 확인",
          "prompt": "리스트 arr에 2가 있으면 '존재', 없으면 '없음'을 출력하세요.",
          "code": "if 2 ___ arr:",
          "hint": "in 키워드로 리스트 안에 값이 있는지 바로 확인합니다.",
          "options": [
            {
              "text": "in",
              "correct": true
            },
            {
              "text": "has",
              "correct": false
            },
            {
              "text": "contains",
              "correct": false
            },
            {
              "text": "==",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 문자열 포함 확인",
          "prompt": "문자열 s와 단어 w를 입력받아 s 안에 w가 포함되면 '포함', 아니면 '없음'을 출력하세요.",
          "code": "if w ___ s:",
          "hint": "in은 문자열 안에 부분 문자열이 포함됐는지도 확인합니다.",
          "options": [
            {
              "text": "in",
              "correct": true
            },
            {
              "text": "==",
              "correct": false
            },
            {
              "text": "has",
              "correct": false
            },
            {
              "text": "contains",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — not in 활용",
          "prompt": "리스트 banned에 입력 단어가 없으면 '허용', 있으면 '차단'을 출력하세요.",
          "code": "if word ___ banned:",
          "hint": "not in은 '포함되어 있지 않으면'을 의미합니다.",
          "options": [
            {
              "text": "not in",
              "correct": true
            },
            {
              "text": "in",
              "correct": false
            },
            {
              "text": "!=",
              "correct": false
            },
            {
              "text": "not ==",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — 딕셔너리 키 확인",
          "prompt": "딕셔너리 d = {'a':1, 'b':2}에 키 'c'가 있으면 '있음', 없으면 '없음'을 출력하세요.",
          "code": "if 'c' ___ d:",
          "hint": "in은 딕셔너리의 키 존재 여부도 확인합니다.",
          "options": [
            {
              "text": "in",
              "correct": true
            },
            {
              "text": "==",
              "correct": false
            },
            {
              "text": "has",
              "correct": false
            },
            {
              "text": "d.contains",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "not 연산자 — 0 판별",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — not 연산자 — 0 판별",
          "prompt": "정수 n을 입력받아 0일 때 '0입니다'를 출력하는 코드를 완성하세요. 파이썬에서 0은 거짓(Falsy)으로 평가된다는 점을 활용합니다.",
          "code": "if ___ n:",
          "hint": "파이썬에서 0, 빈 리스트 [], 빈 문자열 ''은 모두 False로 평가됩니다.",
          "options": [
            {
              "text": "not",
              "correct": true
            },
            {
              "text": "!",
              "correct": false
            },
            {
              "text": "no",
              "correct": false
            },
            {
              "text": "false",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 빈 문자열 Falsy 확인",
          "prompt": "문자열 s를 입력받아 빈 문자열이면 '비어있음'을 출력하세요. not을 사용합니다.",
          "code": "if ___ s:",
          "hint": "빈 문자열 ''도 Falsy입니다. not을 활용하면 간결하게 확인할 수 있어요.",
          "options": [
            {
              "text": "not",
              "correct": true
            },
            {
              "text": "s ==",
              "correct": false
            },
            {
              "text": "empty",
              "correct": false
            },
            {
              "text": "!",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — None 또는 0 체크",
          "prompt": "변수 val = 0일 때 Falsy이면 '거짓값'을 출력하세요. not을 사용합니다.",
          "code": "if ___ val:",
          "hint": "0, '', [], {}, None 모두 not으로 Falsy 여부를 확인할 수 있습니다.",
          "options": [
            {
              "text": "not",
              "correct": true
            },
            {
              "text": "val ==",
              "correct": false
            },
            {
              "text": "False",
              "correct": false
            },
            {
              "text": "!",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "범위 조건 — 연속 비교",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 범위 조건 — 연속 비교",
          "prompt": "정수 n = 15가 10 이상 20 이하인지 확인해 '범위 내'를 출력하는 코드를 완성하세요. 파이썬의 연속 비교(chained comparison)를 사용합니다.",
          "code": "if 10 ___ n ___ 20:",
          "hint": "파이썬은 10 <= n <= 20처럼 비교를 연속으로 쓸 수 있습니다. 다른 언어와 달라요!",
          "options": [
            {
              "text": "<= / <=",
              "correct": true
            },
            {
              "text": "< / <",
              "correct": false
            },
            {
              "text": "and / and",
              "correct": false
            },
            {
              "text": "in / in",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 0~100 범위 체크",
          "prompt": "점수 score를 입력받아 0 이상 100 이하이면 '유효'를 출력하세요.",
          "code": "if 0 ___ score ___ 100:",
          "hint": "파이썬 연속 비교: 0 <= score <= 100 한 줄로 범위를 표현합니다.",
          "options": [
            {
              "text": "<= / <=",
              "correct": true
            },
            {
              "text": "< / <",
              "correct": false
            },
            {
              "text": "and / and",
              "correct": false
            },
            {
              "text": "== / ==",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 삼각형 조건 판별",
          "prompt": "세 변 a, b, c를 입력받아 세 변이 모두 양수이고 가장 큰 변이 나머지 두 변의 합보다 작으면 '삼각형'을 출력하세요.",
          "code": "if a > 0 and b > 0 and c > 0 and max(a,b,c) ___ a+b+c-max(a,b,c):",
          "hint": "가장 큰 변 < 나머지 두 변의 합 조건이 삼각형 성립 요건입니다.",
          "options": [
            {
              "text": "<",
              "correct": true
            },
            {
              "text": "<=",
              "correct": false
            },
            {
              "text": ">",
              "correct": false
            },
            {
              "text": "==",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "학점 변환 — 다중 elif",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 학점 변환 — 다중 elif",
          "prompt": "점수 score를 입력받아 90점 이상 A, 80점 이상 B, 70점 이상 C, 나머지 F를 출력하는 코드를 완성하세요. 여러 단계의 조건을 순서대로 처리합니다.",
          "code": "elif score >= 80:\n    grade = ___",
          "hint": "문자열 리터럴은 따옴표로 감싸야 합니다. B는 변수, 'B'는 문자열이에요.",
          "options": [
            {
              "text": "'B'",
              "correct": true
            },
            {
              "text": "B",
              "correct": false
            },
            {
              "text": "grade_b",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 온도 단계 분류",
          "prompt": "온도 temp를 입력받아 30 이상 '더움', 15 이상 '적당', 그 미만 '추움'을 출력하세요.",
          "code": "if temp >= 30:\n    print('더움')\n___ temp >= 15:\n    print('적당')\nelse:\n    print('추움')",
          "hint": "elif는 앞 if가 False일 때만 실행됩니다. 순서가 중요합니다.",
          "options": [
            {
              "text": "elif",
              "correct": true
            },
            {
              "text": "else if",
              "correct": false
            },
            {
              "text": "else",
              "correct": false
            },
            {
              "text": "if",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — BMI 체중 분류",
          "prompt": "BMI 값을 입력받아 18.5 미만 '저체중', 25 미만 '정상', 30 미만 '과체중', 그 이상 '비만'을 출력하세요.",
          "code": "if bmi < 18.5:\n    print('저체중')\nelif bmi < 25:\n    print('정상')\n___ bmi < 30:\n    print('과체중')\nelse:\n    print('비만')",
          "hint": "elif를 여러 번 써서 4단계 이상도 분류할 수 있습니다.",
          "options": [
            {
              "text": "elif",
              "correct": true
            },
            {
              "text": "else if",
              "correct": false
            },
            {
              "text": "if",
              "correct": false
            },
            {
              "text": "else",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "isupper() — 대문자 확인",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — isupper() — 대문자 확인",
          "prompt": "문자열 s를 입력받아 모두 대문자이면 '대문자', 아니면 '대문자 아닙'을 출력하는 코드를 완성하세요. 문자열의 내장 메서드를 사용합니다.",
          "code": "if s.___():",
          "hint": "isupper()는 문자열이 모두 대문자일 때 True를 반환합니다. islower(), isdigit()도 있어요.",
          "options": [
            {
              "text": "isupper",
              "correct": true
            },
            {
              "text": "upper",
              "correct": false
            },
            {
              "text": "is_upper",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — islower() 소문자 확인",
          "prompt": "문자열 s를 입력받아 모두 소문자이면 '소문자'를 출력하세요.",
          "code": "if s.___():\n    print('소문자')",
          "hint": "islower()는 문자열의 모든 알파벳이 소문자일 때 True를 반환합니다.",
          "options": [
            {
              "text": "islower",
              "correct": true
            },
            {
              "text": "isupper",
              "correct": false
            },
            {
              "text": "lower",
              "correct": false
            },
            {
              "text": "isalpha",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — isdigit() 숫자 문자열 확인",
          "prompt": "문자열 s를 입력받아 모두 숫자이면 '숫자만'을 출력하세요.",
          "code": "if s.___():",
          "hint": "isdigit()은 문자열이 모두 숫자 문자로 이루어졌을 때 True입니다.",
          "options": [
            {
              "text": "isdigit",
              "correct": true
            },
            {
              "text": "isnumeric",
              "correct": false
            },
            {
              "text": "isalpha",
              "correct": false
            },
            {
              "text": "isdecimal",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "5와 7의 공배수",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 5와 7의 공배수",
          "prompt": "정수 n을 입력받아, 5와 7의 공배수이면 '공배수', 5만의 배수이면 '5의 배수', 7만의 배수이면 '7의 배수', 아무것도 아니면 '해당 없음'을 출력하는 코드를 완성하세요.",
          "code": "if n % 5 ___ 0 and n % 7 ___ 0:",
          "hint": "배수 확인은 % 연산으로 나머지가 0인지 확인합니다.",
          "options": [
            {
              "text": "== / ==",
              "correct": true
            },
            {
              "text": "= / =",
              "correct": false
            },
            {
              "text": "!= / !=",
              "correct": false
            },
            {
              "text": "% / %",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 3과 4의 공배수",
          "prompt": "정수 n을 입력받아 3과 4의 공배수이면 '공배수', 아니면 '해당없음'을 출력하세요.",
          "code": "if n % 3 == 0 ___ n % 4 == 0:",
          "hint": "두 조건을 동시에 만족하려면 and를 사용합니다.",
          "options": [
            {
              "text": "and",
              "correct": true
            },
            {
              "text": "or",
              "correct": false
            },
            {
              "text": "&&",
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
          "question": "드릴 3 — 5의 배수 또는 7의 배수",
          "prompt": "정수 n을 입력받아 5의 배수이거나 7의 배수이면 '해당'을 출력하세요.",
          "code": "if n % 5 == 0 ___ n % 7 == 0:",
          "hint": "둘 중 하나만 참이어도 되면 or를 사용합니다.",
          "options": [
            {
              "text": "or",
              "correct": true
            },
            {
              "text": "and",
              "correct": false
            },
            {
              "text": "||",
              "correct": false
            },
            {
              "text": "|",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "빈 리스트 확인 패턴",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 빈 리스트 확인 패턴",
          "prompt": "리스트 arr = []가 비어 있으면 '비어있음', 요소가 있으면 '요소 있음'을 출력하는 코드를 완성하세요. Falsy 값 특성을 활용한 파이썬다운 방식을 사용합니다.",
          "code": "if ___ arr:",
          "hint": "빈 리스트는 False로 평가됩니다. if not arr: 는 if len(arr)==0: 과 같습니다.",
          "options": [
            {
              "text": "not",
              "correct": true
            },
            {
              "text": "len(arr)==0 and",
              "correct": false
            },
            {
              "text": "!",
              "correct": false
            },
            {
              "text": "empty",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 빈 딕셔너리 확인",
          "prompt": "딕셔너리 d = {}가 비어있으면 '비어있음'을 출력하세요. not을 사용합니다.",
          "code": "if ___ d:",
          "hint": "빈 딕셔너리 {}도 Falsy입니다. not d로 확인할 수 있어요.",
          "options": [
            {
              "text": "not",
              "correct": true
            },
            {
              "text": "d ==",
              "correct": false
            },
            {
              "text": "len(d) ==",
              "correct": false
            },
            {
              "text": "empty",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 리스트가 비어있지 않으면 합계 출력",
          "prompt": "리스트 arr이 비어있지 않으면 합계를 출력하고, 비어있으면 '빈 리스트'를 출력하세요.",
          "code": "if ___:\n    print(sum(arr))\nelse:\n    print('빈 리스트')",
          "hint": "리스트가 비어있지 않으면 자체가 Truthy입니다. if arr: 처럼 사용합니다.",
          "options": [
            {
              "text": "arr",
              "correct": true
            },
            {
              "text": "not arr",
              "correct": false
            },
            {
              "text": "arr != []",
              "correct": false
            },
            {
              "text": "len(arr)",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "문자열 모음 포함 확인",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 문자열 모음 포함 확인",
          "prompt": "문자 하나 ch를 입력받아 모음(a, e, i, o, u, 대소문자 모두)이면 '모음', 아니면 '자음'을 출력하는 코드를 완성하세요. in을 문자열에 적용합니다.",
          "code": "if ch ___ 'aeiouAEIOU':",
          "hint": "in은 문자열 안에 특정 문자가 포함되어 있는지도 확인합니다.",
          "options": [
            {
              "text": "in",
              "correct": true
            },
            {
              "text": "==",
              "correct": false
            },
            {
              "text": "is",
              "correct": false
            },
            {
              "text": "has",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 알파벳인지 확인",
          "prompt": "문자 ch를 입력받아 알파벳(a~z, A~Z)이면 '알파벳'을 출력하세요.",
          "code": "if ch ___ 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ':",
          "hint": "in 연산자로 문자가 문자열 안에 포함됐는지 확인합니다.",
          "options": [
            {
              "text": "in",
              "correct": true
            },
            {
              "text": "==",
              "correct": false
            },
            {
              "text": "is",
              "correct": false
            },
            {
              "text": "has",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 금지 단어 포함 확인",
          "prompt": "문자열 s를 입력받아 'spam'이 포함되어 있으면 '스팸 감지'를 출력하세요.",
          "code": "if 'spam' ___ s:",
          "hint": "in으로 부분 문자열 포함 여부도 확인할 수 있습니다.",
          "options": [
            {
              "text": "in",
              "correct": true
            },
            {
              "text": "==",
              "correct": false
            },
            {
              "text": "is",
              "correct": false
            },
            {
              "text": "contains",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "다중 조건문 심화 (1) - 미세먼지 농도",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 다중 조건문 심화 (1) - 미세먼지 농도",
          "prompt": "미세먼지 수치 pm을 입력받아 0~30이면 '좋음', 31~80이면 '보통', 81~150이면 '나쁨', 그 이상이면 '매우나쁨'을 출력하는 코드를 완성하세요.",
          "code": "___ pm <= 80:\n    print('보통')",
          "hint": "상위 조건(<=30)에서 이미 걸러지기 때문에 다음 조건에서는 <=80 만 써도 31~80을 의미하게 됩니다.",
          "options": [
            {
              "text": "elif",
              "correct": true
            },
            {
              "text": "else if",
              "correct": false
            },
            {
              "text": "if",
              "correct": false
            },
            {
              "text": "else",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 소음 단계 분류",
          "prompt": "소음(dB) db를 입력받아 40 이하 '조용', 70 이하 '보통', 그 초과 '시끄러움'을 출력하세요.",
          "code": "if db <= 40:\n    print('조용')\n___ db <= 70:\n    print('보통')\nelse:\n    print('시끄러움')",
          "hint": "elif는 앞 if가 False인 경우에만 실행됩니다. 순서대로 검사합니다.",
          "options": [
            {
              "text": "elif",
              "correct": true
            },
            {
              "text": "else if",
              "correct": false
            },
            {
              "text": "if",
              "correct": false
            },
            {
              "text": "else",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 바람 단계 분류",
          "prompt": "풍속(m/s) wind를 입력받아 5 미만 '약풍', 15 미만 '보통', 25 미만 '강풍', 그 이상 '폭풍'을 출력하세요.",
          "code": "if wind < 5:\n    print('약풍')\nelif wind < 15:\n    print('보통')\n___ wind < 25:\n    print('강풍')\nelse:\n    print('폭풍')",
          "hint": "4단계 분류: if → elif → elif → else 패턴입니다.",
          "options": [
            {
              "text": "elif",
              "correct": true
            },
            {
              "text": "else if",
              "correct": false
            },
            {
              "text": "if",
              "correct": false
            },
            {
              "text": "else",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "다중 조건문 심화 (2) - 윤년 판별",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 다중 조건문 심화 (2) - 윤년 판별",
          "prompt": "연도 year가 4의 배수이면서 100의 배수가 아닐 때, 또는 400의 배수일 때 윤년(True)입니다. 윤년 여부를 판별해 출력하는 코드를 완성하세요.",
          "code": "if (year % 4 == 0 ___ year % 100 != 0) ___ (year % 400 == 0):",
          "hint": "논리 연산자 and와 or를 조합하여 괄호로 명확하게 묶어줍니다.",
          "options": [
            {
              "text": "and / or",
              "correct": true
            },
            {
              "text": "or / and",
              "correct": false
            },
            {
              "text": "&& / ||",
              "correct": false
            },
            {
              "text": "& / |",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 400의 배수 단독 조건",
          "prompt": "연도를 입력받아 400의 배수이면 '윤년'을 출력하세요.",
          "code": "if year ___ 400 == 0:",
          "hint": "% (나머지) 연산자로 배수 여부를 확인합니다.",
          "options": [
            {
              "text": "%",
              "correct": true
            },
            {
              "text": "//",
              "correct": false
            },
            {
              "text": "**",
              "correct": false
            },
            {
              "text": "*",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 완전한 윤년 판별 (복합 조건)",
          "prompt": "연도를 입력받아 완전한 윤년 조건을 구현하세요: 4의 배수이고 100의 배수가 아니거나, 400의 배수이면 '윤년'.",
          "code": "if (year % 4 == 0 and year % 100 ___ 0) or year % 400 == 0:",
          "hint": "100의 배수이면 윤년이 아님 → != 0 조건이 필요합니다.",
          "options": [
            {
              "text": "!=",
              "correct": true
            },
            {
              "text": "==",
              "correct": false
            },
            {
              "text": "<=",
              "correct": false
            },
            {
              "text": "<",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "다중 조건문 심화 (3) - 사분면 고르기",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 다중 조건문 심화 (3) - 사분면 고르기",
          "prompt": "x 좌표와 y 좌표를 입력받아 어느 사분면에 속하는지 1, 2, 3, 4 중 하나를 출력하는 코드를 완성하세요. (x, y가 모두 양수면 1사분면 등)",
          "code": "elif x  0:\n    print(2)",
          "hint": "각 분기마다 x와 y의 부호를 둘 다(and) 확인해야 합니다.",
          "options": [
            {
              "text": "and",
              "correct": true
            },
            {
              "text": "or",
              "correct": false
            },
            {
              "text": "&&",
              "correct": false
            },
            {
              "text": "with",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 3사분면 확인",
          "prompt": "정수 x, y를 입력받아 둘 다 음수이면 '3사분면'을 출력하세요.",
          "code": "if x < 0 ___ y < 0:",
          "hint": "3사분면: x < 0이고(and) y < 0인 경우입니다.",
          "options": [
            {
              "text": "and",
              "correct": true
            },
            {
              "text": "or",
              "correct": false
            },
            {
              "text": "&&",
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
          "question": "드릴 3 — 전체 사분면 판별",
          "prompt": "정수 x, y를 입력받아 사분면 번호(1~4)를 출력하세요. (x>0,y>0)→1, (x0)→2, (x0,y<0)→4",
          "code": "if x > 0 and y > 0:\n    print(1)\nelif x  0:\n    print(2)\nelif x < 0 ___ y < 0:\n    print(3)\nelse:\n    print(4)",
          "hint": "각 사분면 조건은 x, y 부호 조합으로 결정됩니다.",
          "options": [
            {
              "text": "and",
              "correct": true
            },
            {
              "text": "or",
              "correct": false
            },
            {
              "text": "&&",
              "correct": false
            },
            {
              "text": "|",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "다중 조건문 심화 (4) - 로그인 처리 심화",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 다중 조건문 심화 (4) - 로그인 처리 심화",
          "prompt": "아이디와 비밀번호를 입력받습니다. 아이디가 'admin'이 아니면 '아이디 오류', 아이디는 맞으나 비밀번호가 '1234'가 아니면 '비밀번호 오류', 둘 다 맞으면 '로그인 성공'을 출력하세요.",
          "code": "___ uid != 'admin':\n    print('아이디 오류')\n___ pw != '1234':\n    print('비밀번호 오류')",
          "hint": "순차적으로 거르는 방식입니다. 먼저 아이디를 검사하고, 그 다음 비밀번호를 검사합니다.",
          "options": [
            {
              "text": "if / elif",
              "correct": true
            },
            {
              "text": "if / if",
              "correct": false
            },
            {
              "text": "elif / else",
              "correct": false
            },
            {
              "text": "if / else",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 단계적 오류 처리",
          "prompt": "점수를 입력받아 0~100 범위가 아니면 '범위 오류', 60 미만이면 '불합격', 그 외 '합격'을 출력하세요.",
          "code": "if not (0 ___ score ___ 100):",
          "hint": "not으로 조건을 부정할 수 있습니다. not (범위 조건)은 범위를 벗어난 경우입니다.",
          "options": [
            {
              "text": "<= / <=",
              "correct": true
            },
            {
              "text": "< / <",
              "correct": false
            },
            {
              "text": "== / ==",
              "correct": false
            },
            {
              "text": "and / and",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 회원 등급 확인",
          "prompt": "포인트를 입력받아 1000 이상 '골드', 500 이상 '실버', 100 이상 '브론즈', 미만 '일반'을 출력하세요.",
          "code": "if point >= 1000:\n    print('골드')\n___ point >= 500:\n    print('실버')\n___ point >= 100:\n    print('브론즈')\nelse:\n    print('일반')",
          "hint": "큰 값부터 순서대로 elif로 확인합니다.",
          "options": [
            {
              "text": "elif / elif",
              "correct": true
            },
            {
              "text": "else / else",
              "correct": false
            },
            {
              "text": "if / if",
              "correct": false
            },
            {
              "text": "elif / else",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "다중 조건문 심화 (5) - 과속 단속 카메라",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 다중 조건문 심화 (5) - 과속 단속 카메라",
          "prompt": "속도 speed와 제한속도 limit을 입력받아, limit 초과시 '과속', 10% 이내 초과시 '경고', 그 이하면 '정상'을 출력하는 코드를 완성하세요.",
          "code": "if speed > limit * ___:\n    print('과속')",
          "hint": "10% 초과는 제한속도에 1.1을 곱한 값보다 큰 경우입니다.",
          "options": [
            {
              "text": "1.1",
              "correct": true
            },
            {
              "text": "1.0",
              "correct": false
            },
            {
              "text": "0.1",
              "correct": false
            },
            {
              "text": "10",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 속도 초과 비율 계산",
          "prompt": "실제 속도와 제한 속도를 입력받아 초과율(%)을 계산해 출력하세요. 공식: (speed - limit) / limit * 100",
          "code": "over_rate = (speed - limit) ___ limit * 100",
          "hint": "초과율 = (초과분 / 제한속도) × 100 공식을 사용합니다.",
          "options": [
            {
              "text": "/",
              "correct": true
            },
            {
              "text": "*",
              "correct": false
            },
            {
              "text": "+",
              "correct": false
            },
            {
              "text": "-",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 벌점 계산 심화",
          "prompt": "속도와 제한속도를 입력받아 초과 없으면 '정상', 20km/h 이하 초과 '경고', 40km/h 이하 초과 '과태료', 그 초과 '면허정지'를 출력하세요.",
          "code": "over = speed - limit\nif over <= 0:\n    print('정상')\nelif over <= 20:\n    print('경고')\n___ over <= 40:\n    print('과태료')\nelse:\n    print('면허정지')",
          "hint": "초과분을 먼저 변수에 저장하면 elif 조건이 명확해집니다.",
          "options": [
            {
              "text": "elif",
              "correct": true
            },
            {
              "text": "else if",
              "correct": false
            },
            {
              "text": "if",
              "correct": false
            },
            {
              "text": "else",
              "correct": false
            }
          ]
        }
      ]
    }
  ]
};
