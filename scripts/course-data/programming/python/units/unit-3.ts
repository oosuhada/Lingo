import type { UnitSeed } from "../../../types";

export const unit3: UnitSeed = {
  "title": "Unit 3. 반복문",
  "description": "for, while, range(), break, continue",
  "lessons": [
    {
      "title": "종합 기본개념 — 반복문",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — range() 기본",
          "prompt": "0부터 4까지 출력하세요.",
          "code": "for i in range(___):",
          "hint": "range(5)는 0,1,2,3,4 — 5 미포함!",
          "options": [
            {
              "text": "5",
              "correct": true
            },
            {
              "text": "4",
              "correct": false
            },
            {
              "text": "6",
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
          "question": "드릴 2 — range(시작, 끝)",
          "prompt": "1부터 5까지 출력하세요.",
          "code": "for i in range(1, ___):",
          "hint": "끝값은 포함되지 않으므로 range(1, 6)은 1~5입니다.",
          "options": [
            {
              "text": "6",
              "correct": true
            },
            {
              "text": "5",
              "correct": false
            },
            {
              "text": "7",
              "correct": false
            },
            {
              "text": "4",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 누적 합산",
          "prompt": "1부터 10까지의 합을 출력하세요.",
          "code": "for i in range(1, ___):",
          "hint": "range(1, 11)은 1~10. 합산 패턴: total += i",
          "options": [
            {
              "text": "11",
              "correct": true
            },
            {
              "text": "10",
              "correct": false
            },
            {
              "text": "12",
              "correct": false
            },
            {
              "text": "n",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — while 반복",
          "prompt": "1, 2, 4, 8, 16처럼 2배씩 증가하다가 100 이하인 동안 출력하세요.",
          "code": "while n ___ 100:",
          "hint": "while 조건이 True인 동안 반복합니다.",
          "options": [
            {
              "text": "<=",
              "correct": true
            },
            {
              "text": "<",
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
        }
      ]
    },
    {
      "title": "range(n) 기본 순회",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 0~9 출력",
          "prompt": "0부터 9까지 한 줄씩 출력하세요.",
          "code": "for i in ___(10):",
          "hint": "range(10)은 0, 1, 2, ..., 9를 생성합니다.",
          "options": [
            {
              "text": "range",
              "correct": true
            },
            {
              "text": "loop",
              "correct": false
            },
            {
              "text": "iter",
              "correct": false
            },
            {
              "text": "count",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 1~n 합계",
          "prompt": "정수 n을 입력받아 1부터 n까지의 합을 출력하세요.",
          "code": "for i in range(1, ___):",
          "hint": "range(a, b)는 a부터 b-1까지입니다. n 포함: range(1, n+1)",
          "options": [
            {
              "text": "n + 1",
              "correct": true
            },
            {
              "text": "n",
              "correct": false
            },
            {
              "text": "n - 1",
              "correct": false
            },
            {
              "text": "11",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 리스트 요소 순회",
          "prompt": "리스트 arr = [10, 20, 30, 40]의 각 요소를 한 줄씩 출력하세요.",
          "code": "for item ___ arr:",
          "hint": "for 변수 in 리스트: 형태로 각 요소를 순서대로 꺼냅니다.",
          "options": [
            {
              "text": "in",
              "correct": true
            },
            {
              "text": "of",
              "correct": false
            },
            {
              "text": "from",
              "correct": false
            },
            {
              "text": "each",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — 홀수만 출력 (step)",
          "prompt": "1, 3, 5, 7, 9를 range만으로 출력하세요. continue 없이.",
          "code": "for i in range(1, 11, ___):",
          "hint": "range(시작, 끝, 간격)으로 2씩 건너뛸 수 있습니다.",
          "options": [
            {
              "text": "2",
              "correct": true
            },
            {
              "text": "1",
              "correct": false
            },
            {
              "text": "3",
              "correct": false
            },
            {
              "text": "0",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 5 — 역방향 순회",
          "prompt": "10부터 1까지 역순으로 출력하세요.",
          "code": "for i in range(10, 0, ___):",
          "hint": "step을 음수로 하면 감소하며 순회합니다.",
          "options": [
            {
              "text": "-1",
              "correct": true
            },
            {
              "text": "1",
              "correct": false
            },
            {
              "text": "-10",
              "correct": false
            },
            {
              "text": "0",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "누적 합계 패턴",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 1~n 합계",
          "prompt": "1부터 n까지의 합을 출력하세요.",
          "code": "total ___ i",
          "hint": "total += i는 total = total + i와 동일합니다.",
          "options": [
            {
              "text": "+=",
              "correct": true
            },
            {
              "text": "=+",
              "correct": false
            },
            {
              "text": "= total +",
              "correct": false
            },
            {
              "text": "++",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 짝수만의 합",
          "prompt": "1부터 n까지 짝수만의 합을 출력하세요.",
          "code": "for i in range(2, n + 1, ___):",
          "hint": "짝수만 순회: range(2, n+1, 2)",
          "options": [
            {
              "text": "2",
              "correct": true
            },
            {
              "text": "1",
              "correct": false
            },
            {
              "text": "0",
              "correct": false
            },
            {
              "text": "-1",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 누적 곱 (팩토리얼)",
          "prompt": "정수 n을 입력받아 n! (1×2×...×n)을 출력하세요.",
          "code": "result ___ i",
          "hint": "곱셈 누적은 *= 연산자를 사용합니다. 초기값은 1이어야 합니다!",
          "options": [
            {
              "text": "*=",
              "correct": true
            },
            {
              "text": "+=",
              "correct": false
            },
            {
              "text": "/=",
              "correct": false
            },
            {
              "text": "**=",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — while로 합계",
          "prompt": "1부터 n까지의 합을 while문으로 구하세요.",
          "code": "___ i <= n:",
          "hint": "while 조건: 형태로 조건이 참인 동안 반복합니다.",
          "options": [
            {
              "text": "while",
              "correct": true
            },
            {
              "text": "for",
              "correct": false
            },
            {
              "text": "if",
              "correct": false
            },
            {
              "text": "loop",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "enumerate로 인덱스와 값",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — enumerate 기본",
          "prompt": "리스트 ['a','b','c']를 enumerate로 순회해 인덱스와 값을 출력하세요.",
          "code": "for i, v in ___(arr):",
          "hint": "enumerate()는 (인덱스, 값) 쌍을 반환합니다.",
          "options": [
            {
              "text": "enumerate",
              "correct": true
            },
            {
              "text": "zip",
              "correct": false
            },
            {
              "text": "range",
              "correct": false
            },
            {
              "text": "index",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 인덱스 1부터 시작",
          "prompt": "리스트를 순회하며 1번부터 번호를 붙여 출력하세요. 예: 1. apple",
          "code": "for i, v in enumerate(fruits, ___):",
          "hint": "enumerate(리스트, 시작번호)로 시작 인덱스를 설정합니다.",
          "options": [
            {
              "text": "1",
              "correct": true
            },
            {
              "text": "0",
              "correct": false
            },
            {
              "text": "2",
              "correct": false
            },
            {
              "text": "-1",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 최댓값 인덱스 찾기",
          "prompt": "리스트 arr에서 최댓값의 인덱스를 enumerate로 찾아 출력하세요.",
          "code": "for i, v in ___(arr):",
          "hint": "enumerate()로 인덱스와 값을 동시에 비교할 수 있습니다.",
          "options": [
            {
              "text": "enumerate",
              "correct": true
            },
            {
              "text": "range",
              "correct": false
            },
            {
              "text": "zip",
              "correct": false
            },
            {
              "text": "items",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — zip으로 두 리스트 동시 순회",
          "prompt": "이름 리스트와 점수 리스트를 zip으로 묶어 '이름: 점수' 형식으로 출력하세요.",
          "code": "for name, score in ___(names, scores):",
          "hint": "zip()은 두 이터러블을 쌍으로 묶어 동시에 순회합니다.",
          "options": [
            {
              "text": "zip",
              "correct": true
            },
            {
              "text": "enumerate",
              "correct": false
            },
            {
              "text": "map",
              "correct": false
            },
            {
              "text": "range",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "break와 continue",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — break로 루프 탈출",
          "prompt": "정수를 계속 입력받아 2배를 출력하다가 입력이 0이면 종료하세요.",
          "code": "if n == 0:\n        ___",
          "hint": "break는 현재 반복문을 즉시 종료합니다.",
          "options": [
            {
              "text": "break",
              "correct": true
            },
            {
              "text": "exit",
              "correct": false
            },
            {
              "text": "stop",
              "correct": false
            },
            {
              "text": "return",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — continue로 건너뛰기",
          "prompt": "1~10 중 짝수는 건너뛰고 홀수만 출력하세요.",
          "code": "if i % 2 == 0:\n        ___",
          "hint": "continue는 이번 반복만 건너뛰고 다음 반복으로 넘어갑니다.",
          "options": [
            {
              "text": "continue",
              "correct": true
            },
            {
              "text": "break",
              "correct": false
            },
            {
              "text": "pass",
              "correct": false
            },
            {
              "text": "skip",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 특정 값에서 탈출",
          "prompt": "리스트를 순회하다가 음수를 만나면 즉시 멈추고 그 전까지의 합을 출력하세요.",
          "code": "if x < 0:\n        ___",
          "hint": "break는 for문에서도 사용합니다.",
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
              "text": "pass",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — pass로 빈 블록 처리",
          "prompt": "리스트를 순회하며 0이면 무시하고, 나머지는 2배로 출력하세요.",
          "code": "if x == 0:\n        ___",
          "hint": "pass는 아무것도 하지 않는 자리 채우기입니다.",
          "options": [
            {
              "text": "pass",
              "correct": true
            },
            {
              "text": "continue",
              "correct": false
            },
            {
              "text": "break",
              "correct": false
            },
            {
              "text": "None",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "while로 카운트다운",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — while로 카운트다운",
          "prompt": "정수 n을 입력받아 n부터 1까지 하나씩 줄여가며 출력하는 카운트다운 코드를 완성하세요. while 문을 사용합니다.",
          "code": "___ n > 0:",
          "hint": "while 조건: 형태로 조건이 참인 동안 반복합니다. n -= 1로 감소시키는 것 잊지 마세요!",
          "options": [
            {
              "text": "while",
              "correct": true
            },
            {
              "text": "for",
              "correct": false
            },
            {
              "text": "if",
              "correct": false
            },
            {
              "text": "loop",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — while 짝수 카운트다운",
          "prompt": "정수 n을 입력받아 n부터 1까지 짝수만 출력하세요. while문을 사용합니다.",
          "code": "while n ___ 0:",
          "hint": "while 조건을 만족하는 동안 반복합니다. 매번 n을 1씩 줄여야 무한루프를 막습니다.",
          "options": [
            {
              "text": ">",
              "correct": true
            },
            {
              "text": "<",
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
          "question": "드릴 3 — while로 합이 100 넘는 시점 찾기",
          "prompt": "1부터 시작해서 누적합이 처음으로 100을 초과하는 순간의 수를 출력하세요.",
          "code": "while total ___ 100:",
          "hint": "while 조건이 True인 동안 반복합니다. 100 이하인 동안 계속 더합니다.",
          "options": [
            {
              "text": "<=",
              "correct": true
            },
            {
              "text": "<",
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
        }
      ]
    },
    {
      "title": "break로 루프 탈출",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — break로 루프 탈출",
          "prompt": "정수를 계속 입력받아 2배 값을 출력하다가, 입력값이 0이면 반복을 종료하는 코드를 완성하세요. 무한 루프와 break를 함께 사용합니다.",
          "code": "if n == 0:\n        ___",
          "hint": "break는 현재 반복문을 즉시 종료합니다. while True:와 자주 함께 사용됩니다.",
          "options": [
            {
              "text": "break",
              "correct": true
            },
            {
              "text": "exit",
              "correct": false
            },
            {
              "text": "stop",
              "correct": false
            },
            {
              "text": "return",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — for + break 첫 음수 탐색",
          "prompt": "리스트 [3, 7, -1, 5, -2]에서 처음 음수를 만나면 그 값을 출력하고 탈출하세요.",
          "code": "if x < 0:\n        print(x)\n        ___",
          "hint": "break는 반복문을 즉시 종료합니다. 원하는 값을 찾은 뒤 더 볼 필요가 없을 때 사용합니다.",
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
              "text": "pass",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — while True + 사용자 입력 종료",
          "prompt": "문자열을 계속 입력받아 그대로 출력하다가 'quit'을 입력하면 종료하세요.",
          "code": "if s == 'quit':\n        ___",
          "hint": "while True는 무한루프입니다. 종료 조건에서 break로 탈출합니다.",
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
              "text": "exit",
              "correct": false
            },
            {
              "text": "return",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "continue로 홀수만 출력",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — continue로 홀수만 출력",
          "prompt": "1부터 10까지 순회하면서 짝수는 건너뛰고 홀수만 출력하는 코드를 완성하세요. continue를 사용합니다. 출력: 1, 3, 5, 7, 9",
          "code": "if i % 2 == 0:\n        ___",
          "hint": "continue는 이번 반복만 건너뛰고 다음 반복으로 넘어갑니다.",
          "options": [
            {
              "text": "continue",
              "correct": true
            },
            {
              "text": "break",
              "correct": false
            },
            {
              "text": "pass",
              "correct": false
            },
            {
              "text": "skip",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 3의 배수 건너뛰기",
          "prompt": "1부터 15까지 순회하면서 3의 배수는 건너뛰고 나머지를 출력하세요.",
          "code": "if i % 3 == 0:\n        ___",
          "hint": "continue는 이번 반복만 건너뛰고 다음 반복으로 넘어갑니다.",
          "options": [
            {
              "text": "continue",
              "correct": true
            },
            {
              "text": "break",
              "correct": false
            },
            {
              "text": "pass",
              "correct": false
            },
            {
              "text": "return",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 짝수만 누적 합산",
          "prompt": "1부터 20까지 홀수는 건너뛰고 짝수만 더해서 합계를 출력하세요. continue를 사용합니다.",
          "code": "if i % 2 != 0:\n        ___",
          "hint": "홀수일 때 continue로 건너뛰면 total += i는 짝수만 실행됩니다.",
          "options": [
            {
              "text": "continue",
              "correct": true
            },
            {
              "text": "break",
              "correct": false
            },
            {
              "text": "pass",
              "correct": false
            },
            {
              "text": "skip",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "step으로 홀수만 순회",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — step으로 홀수만 순회",
          "prompt": "range의 세 번째 인자(step)를 이용해 1, 3, 5, 7, 9를 순서대로 출력하는 코드를 완성하세요. continue 없이 range만으로 해결합니다.",
          "code": "for i in range(1, 11, ___):",
          "hint": "range(시작, 끝, 간격): 간격을 2로 하면 1,3,5,7,9가 순서대로 나옵니다.",
          "options": [
            {
              "text": "2",
              "correct": true
            },
            {
              "text": "1",
              "correct": false
            },
            {
              "text": "3",
              "correct": false
            },
            {
              "text": "0",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 3의 배수만 range step",
          "prompt": "3, 6, 9, 12, 15를 range의 step만으로 출력하세요.",
          "code": "for i in range(3, 16, ___):\n    print(i)",
          "hint": "range(시작, 끝, 간격): 시작 3, 끝 16(미포함), 간격 3입니다.",
          "options": [
            {
              "text": "3",
              "correct": true
            },
            {
              "text": "2",
              "correct": false
            },
            {
              "text": "1",
              "correct": false
            },
            {
              "text": "6",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 짝수 역방향 출력",
          "prompt": "10부터 2까지 짝수를 내림차순으로 출력하세요. range step을 활용합니다.",
          "code": "for i in range(10, 1, ___):\n    print(i)",
          "hint": "step을 -2로 하면 10, 8, 6, 4, 2 순서로 감소합니다.",
          "options": [
            {
              "text": "-2",
              "correct": true
            },
            {
              "text": "-1",
              "correct": false
            },
            {
              "text": "2",
              "correct": false
            },
            {
              "text": "-3",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "역방향 순회",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 역방향 순회",
          "prompt": "10부터 1까지 역순으로 출력하는 코드를 완성하세요. range의 step을 음수로 지정합니다. 출력: 10, 9, 8, ..., 1",
          "code": "for i in range(10, 0, ___):",
          "hint": "step을 음수로 하면 감소하며 순회합니다. range(10, 0, -1)은 10~1을 출력해요.",
          "options": [
            {
              "text": "-1",
              "correct": true
            },
            {
              "text": "1",
              "correct": false
            },
            {
              "text": "-10",
              "correct": false
            },
            {
              "text": "0",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 문자열 역방향 순회",
          "prompt": "문자열 'Python'을 역방향으로 순회하며 각 문자를 출력하세요.",
          "code": "for ch in s[___]:\n    print(ch)",
          "hint": "s[::-1]은 문자열을 뒤집습니다. 역방향 순회에 활용합니다.",
          "options": [
            {
              "text": "::-1",
              "correct": true
            },
            {
              "text": ":-1",
              "correct": false
            },
            {
              "text": "::1",
              "correct": false
            },
            {
              "text": "-1:",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — range 역방향으로 인덱스 접근",
          "prompt": "리스트 arr = [1, 2, 3, 4, 5]를 인덱스를 역방향으로 순회하며 출력하세요.",
          "code": "for i in range(len(arr)-1, -1, ___):\n    print(arr[i])",
          "hint": "range(len-1, -1, -1): 마지막 인덱스부터 0까지 역방향입니다.",
          "options": [
            {
              "text": "-1",
              "correct": true
            },
            {
              "text": "1",
              "correct": false
            },
            {
              "text": "-2",
              "correct": false
            },
            {
              "text": "0",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "이중 for문 — 구구단",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 이중 for문 — 구구단",
          "prompt": "2단부터 9단까지 구구단 전체를 출력하는 코드를 완성하세요. 이중 for문을 사용하며 f'{i} × {j} = {i*j}' 형식으로 출력합니다.",
          "code": "for j in range(1, ___):",
          "hint": "이중 for문: 외부 루프 1번마다 내부 루프 전체가 실행됩니다.",
          "options": [
            {
              "text": "10",
              "correct": true
            },
            {
              "text": "9",
              "correct": false
            },
            {
              "text": "11",
              "correct": false
            },
            {
              "text": "j",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 이중 for문으로 좌표 출력",
          "prompt": "x를 1~3, y를 1~3으로 순회하며 (x, y) 좌표를 출력하세요.",
          "code": "for x in range(1, 4):\n    for y in range(1, ___):\n        print(f'({x}, {y})')",
          "hint": "range(1, 4)는 1, 2, 3을 생성합니다.",
          "options": [
            {
              "text": "4",
              "correct": true
            },
            {
              "text": "3",
              "correct": false
            },
            {
              "text": "5",
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
          "question": "드릴 3 — 이중 for문으로 삼각형 곱셈표",
          "prompt": "i를 1~5, j를 1~i로 순회하며 i×j를 출력하세요. (삼각형 모양)",
          "code": "for j in range(1, ___):\n        print(f'{i}x{j}={i*j}', end=' ')",
          "hint": "j의 범위가 i+1이어야 j가 1부터 i까지 반복됩니다.",
          "options": [
            {
              "text": "i+1",
              "correct": true
            },
            {
              "text": "i",
              "correct": false
            },
            {
              "text": "i-1",
              "correct": false
            },
            {
              "text": "6",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "별 계단 패턴",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 별 계단 패턴",
          "prompt": "정수 n을 입력받아 별(*) 계단을 출력하는 코드를 완성하세요. n=4이면 *, **, ***, ****를 각각 한 줄씩 출력합니다. 문자열 반복 연산자를 활용합니다.",
          "code": "print('*' ___ i)",
          "hint": "'*' * i 는 '*'를 i번 반복합니다. '*' * 3 = '***'",
          "options": [
            {
              "text": "*",
              "correct": true
            },
            {
              "text": "+",
              "correct": false
            },
            {
              "text": "**",
              "correct": false
            },
            {
              "text": "×",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 숫자 계단 패턴",
          "prompt": "정수 n을 입력받아 1행에 1, 2행에 12, 3행에 123 형식의 계단을 출력하세요.",
          "code": "for i in range(1, ___):\n    print(''.join(str(j) for j in range(1, i+1)))",
          "hint": "range(1, n+1)은 1부터 n까지입니다.",
          "options": [
            {
              "text": "n+1",
              "correct": true
            },
            {
              "text": "n",
              "correct": false
            },
            {
              "text": "n-1",
              "correct": false
            },
            {
              "text": "n+2",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 역방향 별 계단",
          "prompt": "정수 n을 입력받아 n행부터 1행까지 역방향 별 계단을 출력하세요.",
          "code": "for i in range(n, 0, ___):\n    print('*' * i)",
          "hint": "역방향 range: range(n, 0, -1)은 n, n-1, ..., 1입니다.",
          "options": [
            {
              "text": "-1",
              "correct": true
            },
            {
              "text": "1",
              "correct": false
            },
            {
              "text": "-2",
              "correct": false
            },
            {
              "text": "0",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "문자열 각 문자 순회",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 문자열 각 문자 순회",
          "prompt": "문자열 s를 입력받아 각 문자를 한 줄씩 출력하는 코드를 완성하세요. 문자열도 for로 직접 순회할 수 있습니다.",
          "code": "for ch ___ s:",
          "hint": "문자열도 for로 순회하면 각 문자를 하나씩 꺼낼 수 있습니다.",
          "options": [
            {
              "text": "in",
              "correct": true
            },
            {
              "text": "of",
              "correct": false
            },
            {
              "text": "from",
              "correct": false
            },
            {
              "text": "each",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 문자열 대문자 문자 세기",
          "prompt": "문자열 s를 입력받아 대문자 개수를 세서 출력하세요.",
          "code": "for ch in ___:\n    if ch.isupper():\n        count += 1",
          "hint": "for ch in s: 로 문자열의 각 문자를 순회합니다.",
          "options": [
            {
              "text": "s",
              "correct": true
            },
            {
              "text": "s[:]",
              "correct": false
            },
            {
              "text": "range(s)",
              "correct": false
            },
            {
              "text": "enumerate(s)",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 단어 역순 출력",
          "prompt": "단어를 입력받아 각 문자를 역순으로 출력하세요.",
          "code": "for ch in ___(s):\n    print(ch, end='')",
          "hint": "reversed()는 시퀀스를 역방향으로 순회하는 이터레이터를 반환합니다.",
          "options": [
            {
              "text": "reversed",
              "correct": true
            },
            {
              "text": "reverse",
              "correct": false
            },
            {
              "text": "s[::-1]",
              "correct": false
            },
            {
              "text": "sorted",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "합산 누적 패턴",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 합산 누적 패턴",
          "prompt": "리스트 arr = [3, 1, 4, 1, 5]의 모든 요소의 합을 누적 변수 total로 구하는 코드를 완성하세요. 복합 대입 연산자를 사용합니다. (sum() 함수 사용 금지)",
          "code": "total ___ x",
          "hint": "total += x 는 total = total + x 와 동일합니다. 파이썬에는 ++ 가 없어요!",
          "options": [
            {
              "text": "+=",
              "correct": true
            },
            {
              "text": "=+",
              "correct": false
            },
            {
              "text": "= total +",
              "correct": false
            },
            {
              "text": "++",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 곱셈 누적",
          "prompt": "리스트 [1, 2, 3, 4, 5]의 모든 요소를 곱한 값을 출력하세요.",
          "code": "result ___ x",
          "hint": "곱셈 누적은 *= 연산자를 사용합니다. 초기값은 반드시 1입니다.",
          "options": [
            {
              "text": "*=",
              "correct": true
            },
            {
              "text": "+=",
              "correct": false
            },
            {
              "text": "/=",
              "correct": false
            },
            {
              "text": "**=",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 조건부 누적 합산",
          "prompt": "리스트 [1, -2, 3, -4, 5]에서 양수만 더한 합계를 출력하세요.",
          "code": "for x in arr:\n    if x ___ 0:\n        total += x",
          "hint": "if x > 0: 조건으로 양수만 필터링해서 누적합니다.",
          "options": [
            {
              "text": ">",
              "correct": true
            },
            {
              "text": "<",
              "correct": false
            },
            {
              "text": "==",
              "correct": false
            },
            {
              "text": ">=",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "최대값 직접 찾기",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 최대값 직접 찾기",
          "prompt": "리스트 arr = [3, 1, 4, 1, 5, 9, 2]에서 max() 함수 없이 반복문만으로 최대값을 찾는 코드를 완성하세요. 초기값을 arr[0]으로 설정하고 순회하며 갱신합니다.",
          "code": "if x > max_val:\n        max_val = ___",
          "hint": "현재 최대값보다 크면 갱신합니다. 이 패턴을 손에 익혀두세요!",
          "options": [
            {
              "text": "x",
              "correct": true
            },
            {
              "text": "max_val",
              "correct": false
            },
            {
              "text": "arr[0]",
              "correct": false
            },
            {
              "text": "max",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 최솟값 직접 찾기",
          "prompt": "리스트 [3, 1, 4, 1, 5, 9, 2]에서 내장 함수 없이 최솟값을 찾아 출력하세요.",
          "code": "if x ___ min_val:\n        min_val = x",
          "hint": "현재 요소가 최솟값보다 작으면 갱신합니다.",
          "options": [
            {
              "text": "<",
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
              "text": ">=",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 최댓값의 인덱스 찾기",
          "prompt": "리스트 [3, 1, 4, 1, 5, 9, 2]에서 최댓값의 인덱스를 출력하세요.",
          "code": "for i, x in ___(arr):\n    if x > max_val:",
          "hint": "enumerate()로 인덱스와 값을 동시에 받아 인덱스도 갱신합니다.",
          "options": [
            {
              "text": "enumerate",
              "correct": true
            },
            {
              "text": "range",
              "correct": false
            },
            {
              "text": "zip",
              "correct": false
            },
            {
              "text": "items",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "2차원 리스트 순회",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 2차원 리스트 순회",
          "prompt": "3×3 행렬 matrix = [[1,2,3],[4,5,6],[7,8,9]]의 모든 요소를 한 줄씩 출력하는 코드를 완성하세요. 이중 for문으로 행과 열을 각각 순회합니다.",
          "code": "for val ___ row:",
          "hint": "2차원 리스트는 이중 for문으로 순회합니다. 외부: 행, 내부: 열",
          "options": [
            {
              "text": "in",
              "correct": true
            },
            {
              "text": "of",
              "correct": false
            },
            {
              "text": "from",
              "correct": false
            },
            {
              "text": "each",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 2차원 리스트 행 합계",
          "prompt": "행렬 [[1,2,3],[4,5,6],[7,8,9]]에서 각 행의 합을 출력하세요.",
          "code": "for row in ___:\n    print(sum(row))",
          "hint": "for row in matrix:로 각 행을 순회하면 row가 [1,2,3] 형태의 리스트가 됩니다.",
          "options": [
            {
              "text": "matrix",
              "correct": true
            },
            {
              "text": "matrix[:]",
              "correct": false
            },
            {
              "text": "range(matrix)",
              "correct": false
            },
            {
              "text": "enumerate(matrix)",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 2차원 리스트에서 특정 값 찾기",
          "prompt": "행렬에서 값 5의 위치(행, 열)를 찾아 출력하세요.",
          "code": "for i, row in ___(matrix):\n    for j, val in ___(row):",
          "hint": "이중 enumerate로 행 인덱스(i)와 열 인덱스(j)를 동시에 얻습니다.",
          "options": [
            {
              "text": "enumerate / enumerate",
              "correct": true
            },
            {
              "text": "range / range",
              "correct": false
            },
            {
              "text": "zip / zip",
              "correct": false
            },
            {
              "text": "items / items",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "피보나치 수열 출력",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 피보나치 수열 출력",
          "prompt": "정수 n을 입력받아 피보나치 수열의 n번째 항까지 출력하는 코드를 완성하세요. a=0, b=1로 시작하며 while 반복으로 생성합니다. 예: n=6 → 0 1 1 2 3 5",
          "code": "a, b = b, ___ + ___",
          "hint": "a, b = b, a+b 로 한 번에 두 변수를 업데이트합니다. 파이썬의 다중 대입!",
          "options": [
            {
              "text": "a / b",
              "correct": true
            },
            {
              "text": "b / a",
              "correct": false
            },
            {
              "text": "a+b / a",
              "correct": false
            },
            {
              "text": "b+a / b",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 피보나치 n번째 값",
          "prompt": "n을 입력받아 피보나치 수열의 n번째 값(0-indexed)을 출력하세요.",
          "code": "a, b = b, ___ + b",
          "hint": "파이썬 다중 대입: a, b = b, a+b는 동시에 값을 바꿉니다.",
          "options": [
            {
              "text": "a",
              "correct": true
            },
            {
              "text": "b",
              "correct": false
            },
            {
              "text": "0",
              "correct": false
            },
            {
              "text": "1",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 피보나치 특정 값 초과 시점",
          "prompt": "피보나치 수열에서 처음으로 1000을 초과하는 값을 출력하세요.",
          "code": "while a ___ 1000:\n    a, b = b, a + b",
          "hint": "1000 이하인 동안 계속 다음 피보나치 값으로 이동합니다.",
          "options": [
            {
              "text": "<=",
              "correct": true
            },
            {
              "text": "<",
              "correct": false
            },
            {
              "text": "==",
              "correct": false
            },
            {
              "text": ">=",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "구간 내 소수 개수 세기",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 구간 내 소수 개수 세기",
          "prompt": "2부터 30까지 정수 중 소수가 몇 개인지 세어 출력하는 코드를 완성하세요. 소수 판별: 2부터 해당 수 미만의 수로 나누어 떨어지지 않으면 소수입니다.",
          "code": "for d in range(2, ___):\n        if n % d == 0:",
          "hint": "2부터 n-1까지 나누어보면 됩니다. range(2, n)이 정확해요.",
          "options": [
            {
              "text": "n",
              "correct": true
            },
            {
              "text": "n+1",
              "correct": false
            },
            {
              "text": "n-1",
              "correct": false
            },
            {
              "text": "31",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 소수 판별 함수",
          "prompt": "정수 n을 입력받아 소수이면 'prime', 아니면 'not prime'을 출력하세요.",
          "code": "for i in range(2, int(n**0.5)+___):\n    if n % i == 0:",
          "hint": "n의 제곱근까지만 나누어 보면 됩니다. int(n**0.5)+1로 범위 설정.",
          "options": [
            {
              "text": "1",
              "correct": true
            },
            {
              "text": "2",
              "correct": false
            },
            {
              "text": "0",
              "correct": false
            },
            {
              "text": "-1",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 에라토스테네스의 체",
          "prompt": "n을 입력받아 2부터 n까지 소수만 출력하세요. 에라토스테네스의 체를 사용합니다.",
          "code": "for j in range(i*i, n+1, ___):\n    sieve[j] = False",
          "hint": "i의 배수들을 i 간격으로 제거합니다. range(i*i, n+1, i)가 핵심입니다.",
          "options": [
            {
              "text": "i",
              "correct": true
            },
            {
              "text": "1",
              "correct": false
            },
            {
              "text": "2",
              "correct": false
            },
            {
              "text": "i*i",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "이중 for문 심화 (1) - 별 계단 패턴",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 이중 for문 심화 (1) - 별 계단 패턴",
          "prompt": "정수 n을 입력받아 별(*) 계단을 직각삼각형 모양으로 출력하는 코드를 완성하세요. 이중 for문을 이용해 첫 줄에 1개, 두 번째 줄에 2개를 찍습니다.",
          "code": "for j in range(___):\n        print('*', end='')",
          "hint": "내부 루프는 현재 줄 번호(i)만큼만 반복하여 별을 가로로 찍습니다.",
          "options": [
            {
              "text": "i",
              "correct": true
            },
            {
              "text": "n",
              "correct": false
            },
            {
              "text": "j",
              "correct": false
            },
            {
              "text": "1",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 직사각형 별 출력",
          "prompt": "행 r과 열 c를 입력받아 r×c 직사각형 별을 출력하세요.",
          "code": "for i in range(___):\n    print('*' * c)",
          "hint": "행 수만큼 반복하면서 각 행에 열 수만큼 별을 출력합니다.",
          "options": [
            {
              "text": "r",
              "correct": true
            },
            {
              "text": "c",
              "correct": false
            },
            {
              "text": "r*c",
              "correct": false
            },
            {
              "text": "r+c",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 다이아몬드 상단 출력",
          "prompt": "n을 입력받아 다이아몬드의 상단부(1행~n행)를 출력하세요. 각 행은 홀수 개 별(1, 3, 5, ...)입니다.",
          "code": "print(' '*(n-i) + '*'*(2*i-___))",
          "hint": "i행의 별 개수는 2*i-1입니다. (1, 3, 5, ...)",
          "options": [
            {
              "text": "1",
              "correct": true
            },
            {
              "text": "2",
              "correct": false
            },
            {
              "text": "0",
              "correct": false
            },
            {
              "text": "i",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "이중 for문 심화 (2) - 역삼각형 별 찍기",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 이중 for문 심화 (2) - 역삼각형 별 찍기",
          "prompt": "별자리를 뒤집어서 그립니다. n을 입력받아 첫 줄에는 n개, 그 다음 줄에는 n-1개의 별을 찍어 역삼각형을 만드는 코드를 완성하세요.",
          "code": "for i in range(n, 0, ___):",
          "hint": "외부 루프를 역순으로 순회(range(n, 0, -1))하면 내부 루프가 찍는 별의 개수가 줄어듭니다.",
          "options": [
            {
              "text": "-1",
              "correct": true
            },
            {
              "text": "1",
              "correct": false
            },
            {
              "text": "0",
              "correct": false
            },
            {
              "text": "-n",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 역순 숫자 계단",
          "prompt": "n을 입력받아 n행에서 1행까지 숫자 계단을 역방향으로 출력하세요. 예: 3→'123', 2→'12', 1→'1'",
          "code": "for i in range(n, 0, ___):\n    print(''.join(str(j) for j in range(1, i+1)))",
          "hint": "역방향 range: range(n, 0, -1)은 n, n-1, ..., 1 순입니다.",
          "options": [
            {
              "text": "-1",
              "correct": true
            },
            {
              "text": "1",
              "correct": false
            },
            {
              "text": "-2",
              "correct": false
            },
            {
              "text": "0",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 공백 포함 역삼각형",
          "prompt": "n을 입력받아 역삼각형 별을 출력하되 각 행 앞에 공백을 채워 정렬하세요. 1행: n개 별, 마지막 행: 1개 별.",
          "code": "print(' '*(n-i) + '*'*___)",
          "hint": "i행의 별 개수는 i개입니다. 역순으로 줄어듭니다.",
          "options": [
            {
              "text": "i",
              "correct": true
            },
            {
              "text": "n",
              "correct": false
            },
            {
              "text": "n-i",
              "correct": false
            },
            {
              "text": "i-1",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "이중 for문 심화 (3) - 두 주사위의 합",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 이중 for문 심화 (3) - 두 주사위의 합",
          "prompt": "두 개의 주사위를 던졌을 때, 눈의 합이 k가 되는 모든 경우의 수 (i, j)를 출력하는 코드를 완성하세요.",
          "code": "if i + j ___ k:",
          "hint": "모든 경우의 수(6 x 6)를 탐색하며 조건에 맞는 것만 골라내는 가장 기초적인 완전 탐색(Brute Force)입니다.",
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
              "text": "is",
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
          "question": "드릴 2 — 두 주사위 합이 k인 경우의 수",
          "prompt": "두 주사위(1~6)의 합이 k가 되는 경우의 수를 출력하세요.",
          "code": "for i in range(1, 7):\n    for j in range(1, 7):\n        if i + j == k:\n            ___ += 1",
          "hint": "count 변수를 조건을 만족할 때마다 1씩 증가시킵니다.",
          "options": [
            {
              "text": "count",
              "correct": true
            },
            {
              "text": "i",
              "correct": false
            },
            {
              "text": "j",
              "correct": false
            },
            {
              "text": "k",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 두 주사위 곱이 짝수인 경우 출력",
          "prompt": "두 주사위(1~6)의 곱이 짝수인 (i, j) 쌍을 모두 출력하세요.",
          "code": "if (i * j) ___ 2 == 0:",
          "hint": "% 2 == 0이면 짝수입니다.",
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
              "text": "+",
              "correct": false
            },
            {
              "text": "**",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "이중 for문 심화 (4) - 2차원 리스트 탐색",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 이중 for문 심화 (4) - 2차원 리스트 탐색",
          "prompt": "3×3 2차원 리스트 matrix = [[1,2,3],[4,5,6],[7,8,9]]의 모든 요소를 순회하며, 짝수만 출력하는 코드를 이중 for문으로 완성하세요.",
          "code": "for val ___ row:",
          "hint": "2차원 리스트는 먼저 행(row)을 꺼내고, 그 행 안에서 값(val)을 꺼내는 이중 구조입니다.",
          "options": [
            {
              "text": "in",
              "correct": true
            },
            {
              "text": "of",
              "correct": false
            },
            {
              "text": "from",
              "correct": false
            },
            {
              "text": "each",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 2차원 리스트 짝수만 출력",
          "prompt": "행렬 [[1,2,3],[4,5,6],[7,8,9]]에서 짝수만 출력하세요.",
          "code": "for val in ___:\n        if val % 2 == 0:",
          "hint": "이중 for문: 외부 루프로 행을 얻고, 내부 루프로 각 행의 요소를 순회합니다.",
          "options": [
            {
              "text": "row",
              "correct": true
            },
            {
              "text": "matrix",
              "correct": false
            },
            {
              "text": "range(row)",
              "correct": false
            },
            {
              "text": "enumerate(row)",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 2차원 리스트 열 합계",
          "prompt": "행렬 [[1,2,3],[4,5,6],[7,8,9]]의 각 열의 합계를 출력하세요.",
          "code": "for j in range(len(matrix[___])):\n    col_sum = 0",
          "hint": "matrix[0]의 길이가 열의 수입니다. 각 행에서 j번째 원소를 더합니다.",
          "options": [
            {
              "text": "0",
              "correct": true
            },
            {
              "text": "1",
              "correct": false
            },
            {
              "text": "-1",
              "correct": false
            },
            {
              "text": "j",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "이중 for문 심화 (5) - 약수의 개수 구하기",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 이중 for문 심화 (5) - 약수의 개수 구하기",
          "prompt": "1부터 n까지 각 숫자의 약수의 개수를 구해서 출력하는 코드를 이중 for문으로 완성하세요.",
          "code": "if i % j ___ 0:\n            count += 1",
          "hint": "각 숫자 i에 대해 1부터 i까지 나누어 떨어지는지(나머지가 0인지) 확인합니다.",
          "options": [
            {
              "text": "==",
              "correct": true
            },
            {
              "text": "!=",
              "correct": false
            },
            {
              "text": "=",
              "correct": false
            },
            {
              "text": "<",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 특정 수의 약수 출력",
          "prompt": "정수 n을 입력받아 n의 약수를 모두 출력하세요.",
          "code": "if n ___ i == 0:\n        print(i)",
          "hint": "n % i == 0이면 i는 n의 약수입니다.",
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
          "question": "드릴 3 — 약수 개수가 가장 많은 수 찾기",
          "prompt": "1부터 30까지에서 약수 개수가 가장 많은 수를 출력하세요.",
          "code": "if count ___ max_count:\n        max_count = count\n        max_num = n",
          "hint": "외부 루프로 각 수를 확인하고, 내부 루프로 약수 개수를 셉니다.",
          "options": [
            {
              "text": ">",
              "correct": true
            },
            {
              "text": "<",
              "correct": false
            },
            {
              "text": "==",
              "correct": false
            },
            {
              "text": ">=",
              "correct": false
            }
          ]
        }
      ]
    }
  ]
};
