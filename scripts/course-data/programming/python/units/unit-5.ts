import type { UnitSeed } from "../../../types";

export const unit5: UnitSeed = {
  "title": "Unit 5. 함수 정의",
  "description": "def, return, lambda, 매개변수",
  "lessons": [
    {
      "title": "종합 기본개념 — 함수 정의",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 기본 함수",
          "prompt": "두 수를 더해 반환하는 함수 add를 정의하고 add(3,5)를 출력하세요.",
          "code": "___ add(a, b):",
          "hint": "def 키워드로 함수를 정의합니다. 콜론(:) 필수!",
          "options": [
            {
              "text": "def",
              "correct": true
            },
            {
              "text": "func",
              "correct": false
            },
            {
              "text": "function",
              "correct": false
            },
            {
              "text": "fn",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — return 값",
          "prompt": "정수 n을 받아 n의 제곱을 반환하는 square 함수를 완성하세요.",
          "code": "___ n ** 2",
          "hint": "return으로 값을 반환합니다.",
          "options": [
            {
              "text": "return",
              "correct": true
            },
            {
              "text": "print",
              "correct": false
            },
            {
              "text": "yield",
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
          "question": "드릴 3 — lambda",
          "prompt": "x의 제곱을 반환하는 lambda를 square에 저장하고 square(5)를 출력하세요.",
          "code": "square = ___ x: x**2",
          "hint": "lambda 매개변수: 반환식",
          "options": [
            {
              "text": "lambda",
              "correct": true
            },
            {
              "text": "def",
              "correct": false
            },
            {
              "text": "func",
              "correct": false
            },
            {
              "text": "=>",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — sort key lambda",
          "prompt": "튜플 리스트 [(1,3),(2,1),(3,2)]를 두 번째 요소 기준으로 정렬하세요.",
          "code": "pairs.sort(key=lambda x: x[___])",
          "hint": "x[1]은 튜플의 두 번째 요소(인덱스 1)입니다.",
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
              "text": "-1",
              "correct": false
            },
            {
              "text": "x",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "기본 함수 정의와 return",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 기본 함수 정의",
          "prompt": "두 정수 a, b를 받아 합계를 반환하는 함수 add를 정의하고 add(3, 5)를 출력하세요.",
          "code": "___ add(a, b):",
          "hint": "def 함수명(매개변수): 형태로 정의합니다. 콜론(:)을 잊지 마세요!",
          "options": [
            {
              "text": "def",
              "correct": true
            },
            {
              "text": "func",
              "correct": false
            },
            {
              "text": "function",
              "correct": false
            },
            {
              "text": "fn",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — return으로 값 반환",
          "prompt": "정수 n을 받아 n의 제곱을 반환하는 함수 square를 완성하세요.",
          "code": "___ n ** 2",
          "hint": "return은 함수 실행을 종료하고 값을 반환합니다.",
          "options": [
            {
              "text": "return",
              "correct": true
            },
            {
              "text": "print",
              "correct": false
            },
            {
              "text": "yield",
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
          "question": "드릴 3 — 기본값 매개변수",
          "prompt": "이름 name과 인삿말 msg(기본값 '안녕하세요')를 받아 인사를 반환하는 함수를 정의하세요.",
          "code": "def greet(name, msg=___)",
          "hint": "기본값은 따옴표로 감싼 문자열로 지정합니다.",
          "options": [
            {
              "text": "'안녕하세요'",
              "correct": true
            },
            {
              "text": "안녕하세요",
              "correct": false
            },
            {
              "text": "default",
              "correct": false
            },
            {
              "text": "None",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — 여러 값 반환",
          "prompt": "리스트를 받아 최솟값과 최댓값을 동시에 반환하는 함수 min_max를 완성하세요.",
          "code": "return ___(arr), max(arr)",
          "hint": "파이썬 함수는 콤마로 구분해 여러 값을 반환할 수 있습니다.",
          "options": [
            {
              "text": "min",
              "correct": true
            },
            {
              "text": "max",
              "correct": false
            },
            {
              "text": "arr[0]",
              "correct": false
            },
            {
              "text": "sorted",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 5 — solution() 코딩테스트 패턴",
          "prompt": "프로그래머스 형식으로, 1부터 n까지의 합을 반환하는 solution 함수를 완성하세요.",
          "code": "def ___(n):",
          "hint": "프로그래머스 코딩테스트는 solution() 함수 형태로 제출합니다.",
          "options": [
            {
              "text": "solution",
              "correct": true
            },
            {
              "text": "main",
              "correct": false
            },
            {
              "text": "solve",
              "correct": false
            },
            {
              "text": "answer",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "lambda와 고차 함수",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — lambda 기본",
          "prompt": "정수 x를 받아 제곱을 반환하는 lambda 함수를 square에 저장하고 square(5)를 출력하세요.",
          "code": "square = ___ x: x ** 2",
          "hint": "lambda 매개변수: 반환값 형태입니다.",
          "options": [
            {
              "text": "lambda",
              "correct": true
            },
            {
              "text": "def",
              "correct": false
            },
            {
              "text": "func",
              "correct": false
            },
            {
              "text": "=>",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — lambda로 정렬 key",
          "prompt": "튜플 리스트 [(1,3),(2,1),(3,2)]를 두 번째 요소 기준으로 정렬하세요.",
          "code": "pairs.sort(key=lambda x: x[___])",
          "hint": "key=lambda x: x[1]은 튜플의 두 번째 요소(인덱스 1)로 정렬합니다.",
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
              "text": "-1",
              "correct": false
            },
            {
              "text": "x",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — lambda로 절댓값 정렬",
          "prompt": "리스트 [-3, 1, -2, 4]를 절댓값 기준으로 오름차순 정렬하세요.",
          "code": "arr.sort(key=lambda x: ___(x))",
          "hint": "key에는 어떤 함수든 사용할 수 있습니다. abs()는 절댓값입니다.",
          "options": [
            {
              "text": "abs",
              "correct": true
            },
            {
              "text": "len",
              "correct": false
            },
            {
              "text": "int",
              "correct": false
            },
            {
              "text": "str",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — 재귀 함수 팩토리얼",
          "prompt": "n!을 재귀적으로 계산하는 factorial 함수를 완성하세요.",
          "code": "return n * ___(n - 1)",
          "hint": "재귀 함수는 자기 자신을 호출합니다. 반드시 종료 조건이 있어야 해요!",
          "options": [
            {
              "text": "factorial",
              "correct": true
            },
            {
              "text": "fact",
              "correct": false
            },
            {
              "text": "n",
              "correct": false
            },
            {
              "text": "self",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "solution() 패턴 — 코딩테스트",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — solution() 패턴 — 코딩테스트",
          "prompt": "프로그래머스 형식으로, 정수 n을 받아 1부터 n까지의 합을 반환하는 함수 solution을 완성하세요. 코딩테스트 제출 형태 그대로입니다.",
          "code": "def ___(n):",
          "hint": "프로그래머스/백준 등 코딩테스트에서는 solution() 함수 형태로 제출합니다.",
          "options": [
            {
              "text": "solution",
              "correct": true
            },
            {
              "text": "main",
              "correct": false
            },
            {
              "text": "solve",
              "correct": false
            },
            {
              "text": "answer",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — solution 패턴 (두 수의 합)",
          "prompt": "코딩테스트 형식으로 두 수의 합을 반환하는 함수 solution(a, b)를 완성하세요.",
          "code": "def solution(a, b):\n    ___ a + b",
          "hint": "코딩테스트 solution 함수는 반드시 return으로 값을 반환합니다.",
          "options": [
            {
              "text": "return",
              "correct": true
            },
            {
              "text": "print",
              "correct": false
            },
            {
              "text": "yield",
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
          "question": "드릴 3 — solution 패턴 (최솟값)",
          "prompt": "정수 리스트를 받아 최솟값을 반환하는 solution(arr) 함수를 작성하세요.",
          "code": "def solution(arr):\n    return ___(arr)",
          "hint": "min() 내장 함수를 활용하면 간결하게 최솟값을 반환할 수 있습니다.",
          "options": [
            {
              "text": "min",
              "correct": true
            },
            {
              "text": "max",
              "correct": false
            },
            {
              "text": "sum",
              "correct": false
            },
            {
              "text": "len",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "기본값 매개변수",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 기본값 매개변수",
          "prompt": "이름 name과 인삿말 msg를 받아 '{msg}, {name}!'을 반환하는 함수를 정의하세요. msg의 기본값은 '안녕하세요'로 설정합니다.",
          "code": "def greet(name, msg=___)",
          "hint": "기본값 매개변수는 인자를 넘기지 않으면 기본값을 사용합니다.",
          "options": [
            {
              "text": "'안녕하세요'",
              "correct": true
            },
            {
              "text": "안녕하세요",
              "correct": false
            },
            {
              "text": "default",
              "correct": false
            },
            {
              "text": "None",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 기본값으로 인사말 변경",
          "prompt": "greet(name, msg='Hi') 함수를 정의하고 msg 없이, 그리고 msg='Hello'로 각각 호출하세요.",
          "code": "def greet(name, msg=___):\n    print(f'{msg}, {name}!')",
          "hint": "기본값 매개변수: def func(param=기본값):",
          "options": [
            {
              "text": "'Hi'",
              "correct": true
            },
            {
              "text": "Hi",
              "correct": false
            },
            {
              "text": "'hello'",
              "correct": false
            },
            {
              "text": "None",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 기본값이 있는 거듭제곱 함수",
          "prompt": "power(base, exp=2) 함수를 완성하세요. exp 기본값은 2(제곱)입니다.",
          "code": "def power(base, exp=___):\n    return base ** exp",
          "hint": "기본값 exp=2면 power(3)은 3²=9, power(3,3)은 3³=27입니다.",
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
              "text": "3",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "lambda 익명 함수",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — lambda 익명 함수",
          "prompt": "정수 x를 받아 제곱을 반환하는 람다 함수를 square에 저장하고 square(5)를 출력하는 코드를 완성하세요.",
          "code": "square = ___ x: x ** 2",
          "hint": "lambda 매개변수: 반환값 형태의 간결한 함수입니다. sort의 key 인자에 자주 사용해요.",
          "options": [
            {
              "text": "lambda",
              "correct": true
            },
            {
              "text": "def",
              "correct": false
            },
            {
              "text": "func",
              "correct": false
            },
            {
              "text": "=>",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — lambda 두 수의 합",
          "prompt": "두 수를 받아 합을 반환하는 lambda를 add 변수에 저장하세요.",
          "code": "add = lambda x, y: x ___ y",
          "hint": "lambda 매개변수1, 매개변수2: 표현식 형태입니다.",
          "options": [
            {
              "text": "+",
              "correct": true
            },
            {
              "text": "-",
              "correct": false
            },
            {
              "text": "*",
              "correct": false
            },
            {
              "text": "/",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — lambda와 map",
          "prompt": "리스트 [1,2,3,4,5]의 각 요소를 3배로 만드세요. lambda와 map을 사용합니다.",
          "code": "result = list(map(lambda x: x*___, arr))",
          "hint": "map(함수, 이터러블)은 각 요소에 함수를 적용합니다.",
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
              "text": "x",
              "correct": false
            },
            {
              "text": "**3",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "lambda로 정렬 key 지정",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — lambda로 정렬 key 지정",
          "prompt": "튜플 리스트 pairs = [(1, 3), (2, 1), (3, 2)]를 각 튜플의 두 번째 요소 기준으로 오름차순 정렬하는 코드를 완성하세요. key에 lambda를 사용합니다.",
          "code": "pairs.sort(key=lambda x: x[___])",
          "hint": "key=lambda x: x[1]은 튜플의 두 번째 요소(인덱스 1)를 기준으로 정렬합니다.",
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
              "text": "-1",
              "correct": false
            },
            {
              "text": "x",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — lambda로 두 번째 요소 기준 정렬",
          "prompt": "튜플 리스트 [(1,3),(2,1),(3,2)]를 두 번째 요소 기준으로 정렬하세요.",
          "code": "pairs.sort(key=lambda x: x[___])",
          "hint": "x[1]은 튜플의 두 번째 요소입니다. 0-indexed이므로 인덱스 1입니다.",
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
          "question": "드릴 3 — lambda로 절댓값 기준 정렬",
          "prompt": "리스트 [-3,1,-2,4,-5]를 절댓값 기준으로 오름차순 정렬하세요.",
          "code": "arr.sort(key=lambda x: ___(x))",
          "hint": "abs()는 절댓값을 반환합니다. key=lambda x: abs(x)로 절댓값 기준 정렬합니다.",
          "options": [
            {
              "text": "abs",
              "correct": true
            },
            {
              "text": "int",
              "correct": false
            },
            {
              "text": "str",
              "correct": false
            },
            {
              "text": "float",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "재귀 함수 — 팩토리얼",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 재귀 함수 — 팩토리얼",
          "prompt": "정수 n을 받아 n!을 재귀적으로 계산해 반환하는 함수 factorial을 완성하세요. 종료 조건: n이 1 이하이면 1을 반환합니다.",
          "code": "return n * ___(n - 1)",
          "hint": "재귀 함수는 자기 자신을 호출합니다. 반드시 종료 조건(base case)이 있어야 해요!",
          "options": [
            {
              "text": "factorial",
              "correct": true
            },
            {
              "text": "fact",
              "correct": false
            },
            {
              "text": "n",
              "correct": false
            },
            {
              "text": "self",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 재귀로 피보나치",
          "prompt": "재귀 함수로 피보나치 n번째 수를 반환하세요. fib(0)=0, fib(1)=1.",
          "code": "def fib(n):\n    if n <= 1:\n        return n\n    return fib(n-1) + ___(n-2)",
          "hint": "재귀는 자기 자신을 다시 호출합니다. fib(n) = fib(n-1) + fib(n-2)",
          "options": [
            {
              "text": "fib",
              "correct": true
            },
            {
              "text": "fib()",
              "correct": false
            },
            {
              "text": "n",
              "correct": false
            },
            {
              "text": "n-1",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 재귀로 거듭제곱",
          "prompt": "재귀 함수 power(base, exp)를 완성하세요. 기저: exp==0이면 1 반환.",
          "code": "def power(base, exp):\n    if exp == 0:\n        return 1\n    return base * power(base, ___)",
          "hint": "base^exp = base × base^(exp-1)로 재귀 정의합니다.",
          "options": [
            {
              "text": "exp-1",
              "correct": true
            },
            {
              "text": "exp",
              "correct": false
            },
            {
              "text": "exp+1",
              "correct": false
            },
            {
              "text": "exp//2",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "여러 값 반환 — 최솟값·최댓값",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 여러 값 반환 — 최솟값·최댓값",
          "prompt": "리스트를 받아 최솟값과 최댓값을 동시에 반환하는 함수 min_max를 완성하세요. 호출: lo, hi = min_max([3, 1, 4, 1, 5]) → lo=1, hi=5",
          "code": "return ___(arr), max(arr)",
          "hint": "파이썬 함수는 콤마로 구분해 여러 값을 반환할 수 있습니다. 튜플로 묶여 반환돼요.",
          "options": [
            {
              "text": "min",
              "correct": true
            },
            {
              "text": "max",
              "correct": false
            },
            {
              "text": "arr[0]",
              "correct": false
            },
            {
              "text": "sorted",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 여러 값 반환 (몫과 나머지)",
          "prompt": "두 수를 받아 몫과 나머지를 동시에 반환하는 함수 div_mod(a, b)를 완성하세요.",
          "code": "def div_mod(a, b):\n    return a ___ b, a % b",
          "hint": "// 는 정수 나눗셈(몫), % 는 나머지 연산입니다.",
          "options": [
            {
              "text": "//",
              "correct": true
            },
            {
              "text": "/",
              "correct": false
            },
            {
              "text": "%",
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
          "question": "드릴 3 — 통계 함수 (평균, 최댓값, 최솟값)",
          "prompt": "리스트를 받아 평균, 최댓값, 최솟값을 한 번에 반환하는 함수 stats(arr)를 완성하세요.",
          "code": "def stats(arr):\n    return sum(arr)/len(arr), ___(arr), min(arr)",
          "hint": "return에서 콤마로 여러 값을 묶어 튜플로 반환합니다.",
          "options": [
            {
              "text": "max",
              "correct": true
            },
            {
              "text": "min",
              "correct": false
            },
            {
              "text": "sum",
              "correct": false
            },
            {
              "text": "avg",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "리스트 컴프리헨션 활용 함수",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 리스트 컴프리헨션 활용 함수",
          "prompt": "리스트를 받아 짝수 요소만 걸러낸 리스트를 반환하는 함수 get_evens를 완성하세요. 리스트 컴프리헨션을 return에서 직접 사용합니다.",
          "code": "return [x for x in arr ___ x % 2 == 0]",
          "hint": "리스트 컴프리헨션을 return에서 바로 사용할 수 있습니다.",
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
              "text": "where",
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
          "question": "드릴 2 — 문자열 필터 함수",
          "prompt": "문자열 리스트를 받아 길이가 3 이상인 것만 반환하는 long_words(words) 함수를 완성하세요.",
          "code": "return [w for w in words if len(w) ___ 3]",
          "hint": "len(w) >= 3 조건으로 길이 3 이상인 단어만 필터링합니다.",
          "options": [
            {
              "text": ">=",
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
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 조건부 변환 함수",
          "prompt": "정수 리스트를 받아 양수는 그대로, 음수는 절댓값으로 바꾼 리스트를 반환하는 함수를 완성하세요.",
          "code": "return [x if x >= 0 else ___ for x in arr]",
          "hint": "x가 음수면 -x로 부호를 바꾸면 절댓값이 됩니다.",
          "options": [
            {
              "text": "-x",
              "correct": true
            },
            {
              "text": "x",
              "correct": false
            },
            {
              "text": "0",
              "correct": false
            },
            {
              "text": "abs(x)",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "*args 가변 인수",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — *args 가변 인수",
          "prompt": "개수에 상관없이 여러 정수를 받아 합계를 반환하는 함수 my_sum을 완성하세요. 가변 인수를 사용합니다. 예: my_sum(1, 2, 3, 4, 5) → 15",
          "code": "def my_sum(___args):",
          "hint": "*args는 몇 개의 인수든 받을 수 있습니다. args는 tuple이 됩니다.",
          "options": [
            {
              "text": "*",
              "correct": true
            },
            {
              "text": "**",
              "correct": false
            },
            {
              "text": "&",
              "correct": false
            },
            {
              "text": "@",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — *args로 평균 계산",
          "prompt": "가변 인수를 받아 평균을 반환하는 average(*args) 함수를 완성하세요.",
          "code": "def average(*___):\n    return sum(args) / len(args)",
          "hint": "*args는 가변 인수를 튜플로 받습니다. 이름은 관례적으로 args를 씁니다.",
          "options": [
            {
              "text": "args",
              "correct": true
            },
            {
              "text": "arg",
              "correct": false
            },
            {
              "text": "nums",
              "correct": false
            },
            {
              "text": "values",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — *args로 최댓값 찾기",
          "prompt": "가변 인수를 받아 최댓값을 반환하는 my_max(*args) 함수를 완성하세요.",
          "code": "def my_max(*args):\n    return ___(args)",
          "hint": "*args는 튜플이므로 max(args)처럼 내장 함수에 바로 전달할 수 있습니다.",
          "options": [
            {
              "text": "max",
              "correct": true
            },
            {
              "text": "min",
              "correct": false
            },
            {
              "text": "sum",
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
      "title": "양수 개수 세는 함수",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 양수 개수 세는 함수",
          "prompt": "리스트를 받아 0보다 큰 양수의 개수를 반환하는 함수 count_positive를 완성하세요. 반복문과 조건문을 함수 안에서 함께 사용합니다.",
          "code": "___ count",
          "hint": "함수의 결과는 반드시 return으로 돌려줘야 합니다.",
          "options": [
            {
              "text": "return",
              "correct": true
            },
            {
              "text": "print",
              "correct": false
            },
            {
              "text": "yield",
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
          "question": "드릴 2 — 음수 개수 세는 함수",
          "prompt": "리스트를 받아 음수 개수를 반환하는 count_negative(arr) 함수를 완성하세요.",
          "code": "return sum(1 for x in arr if x ___ 0)",
          "hint": "sum(1 for x in arr if 조건)은 조건을 만족하는 요소 개수를 셉니다.",
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
              "text": "!=",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 짝수 개수 세는 함수",
          "prompt": "리스트를 받아 짝수의 개수를 반환하는 count_even(arr)을 완성하고 [1,2,3,4,5,6]으로 테스트하세요.",
          "code": "def count_even(arr):\n    count = 0\n    for x in arr:\n        if x % 2 == 0:\n            count ___ 1\n    return count",
          "hint": "count += 1로 조건을 만족할 때마다 카운터를 증가시킵니다.",
          "options": [
            {
              "text": "+=",
              "correct": true
            },
            {
              "text": "-=",
              "correct": false
            },
            {
              "text": "*=",
              "correct": false
            },
            {
              "text": "=",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "소수 판별 함수",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 소수 판별 함수",
          "prompt": "정수 n을 받아 소수이면 True, 아니면 False를 반환하는 함수 is_prime을 완성하세요. √n까지만 나누어보는 효율적인 방식을 사용합니다.",
          "code": "for i in range(2, int(n**0.5) + ___):",
          "hint": "√n까지만 나누어보면 됩니다. int(n**0.5)는 n의 제곱근입니다. +1은 range 끝 포함을 위해!",
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
              "text": "n",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 소수인지 아닌지 분류",
          "prompt": "1부터 20까지 순회하며 소수는 'prime', 아니면 'not prime'으로 출력하세요. is_prime 함수를 활용합니다.",
          "code": "return ___\n\nfor n in range(1, 21):",
          "hint": "루프를 모두 통과하면 약수가 없다는 뜻이므로 True를 반환합니다.",
          "options": [
            {
              "text": "True",
              "correct": true
            },
            {
              "text": "False",
              "correct": false
            },
            {
              "text": "1",
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
          "question": "드릴 3 — n 이하 소수 리스트 반환",
          "prompt": "n 이하의 소수를 모두 담은 리스트를 반환하는 primes_up_to(n) 함수를 완성하세요.",
          "code": "def primes_up_to(n):\n    return [x for x in range(2, n+1) if ___(x)]",
          "hint": "리스트 컴프리헨션의 if 조건에 is_prime 함수를 바로 사용합니다.",
          "options": [
            {
              "text": "is_prime",
              "correct": true
            },
            {
              "text": "is_prime()",
              "correct": false
            },
            {
              "text": "prime",
              "correct": false
            },
            {
              "text": "check_prime",
              "correct": false
            }
          ]
        }
      ]
    }
  ]
};
