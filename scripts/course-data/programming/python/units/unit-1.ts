import type { UnitSeed } from "../../../types";

export const unit1: UnitSeed = {
  "title": "Unit 1. 입출력 & 자료형",
  "description": "input(), print(), int/float/str 변환, f-string",
  "lessons": [
    {
      "title": "종합 기본개념 — 입출력 & 자료형",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — input() 기본",
          "prompt": "이름을 입력받아 그대로 출력하세요.",
          "code": "name = ___()",
          "hint": "input()은 키보드 입력을 문자열로 받습니다.",
          "options": [
            {
              "text": "input",
              "correct": true
            },
            {
              "text": "read",
              "correct": false
            },
            {
              "text": "get",
              "correct": false
            },
            {
              "text": "scan",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — int() 변환",
          "prompt": "정수 n을 입력받아 n + 10을 출력하세요.",
          "code": "n = ___(input())",
          "hint": "input()의 결과를 int()로 감싸면 정수가 됩니다.",
          "options": [
            {
              "text": "int",
              "correct": true
            },
            {
              "text": "str",
              "correct": false
            },
            {
              "text": "float",
              "correct": false
            },
            {
              "text": "input",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — f-string 기본",
          "prompt": "이름을 입력받아 '안녕하세요, [이름]님!'을 출력하세요.",
          "code": "print(f'안녕하세요, {name}___')",
          "hint": "f-string: f'...' 안에 {변수}를 넣으면 변수 값이 들어갑니다.",
          "options": [
            {
              "text": "님!",
              "correct": true
            },
            {
              "text": "이름!",
              "correct": false
            },
            {
              "text": "{name}!",
              "correct": false
            },
            {
              "text": "님?",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — map으로 두 값 입력",
          "prompt": "두 정수를 한 줄에 입력받아 합계를 출력하세요.",
          "code": "a, b = map(int, input().___())",
          "hint": "split()으로 나누고 map(int, ...)으로 정수 변환합니다.",
          "options": [
            {
              "text": "split",
              "correct": true
            },
            {
              "text": "join",
              "correct": false
            },
            {
              "text": "strip",
              "correct": false
            },
            {
              "text": "parse",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "이름 받아 인사 출력",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 기본 인사",
          "prompt": "이름을 입력받아 '안녕하세요, [이름]님!'을 출력하세요. f-string을 사용합니다.",
          "code": "name = input()\nprint(___)",
          "hint": "f-string: 따옴표 앞에 f를 붙이고 변수는 { }로 감싸세요.",
          "options": [
            {
              "text": "f'안녕하세요, {name}님!'",
              "correct": true
            },
            {
              "text": "'안녕하세요' + name",
              "correct": false
            },
            {
              "text": "print(name)",
              "correct": false
            },
            {
              "text": "f'안녕하세요, name님!'",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 나이와 함께 출력",
          "prompt": "이름과 나이를 입력받아 '[이름]님은 [나이]세입니다.'를 출력하세요. 나이는 정수형으로 입력받습니다.",
          "code": "age = int(input())\nprint(f'{name}님은 ___세입니다.')",
          "hint": "여러 변수를 f-string에 포함할 수 있습니다. { } 안에 각 변수를 넣으세요.",
          "options": [
            {
              "text": "{age}",
              "correct": true
            },
            {
              "text": "age",
              "correct": false
            },
            {
              "text": "{name}",
              "correct": false
            },
            {
              "text": "age님",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 점수 포맷팅",
          "prompt": "이름과 평균 점수(실수)를 입력받아 '[이름]님의 평균: 87.50점'처럼 소수 둘째 자리까지 출력하세요.",
          "code": "print(f'{name}님의 평균: {avg:___}점')",
          "hint": "실수를 소수 둘째자리까지 출력: {변수:.2f} 패턴을 기억하세요.",
          "options": [
            {
              "text": ".2f",
              "correct": true
            },
            {
              "text": "2f",
              "correct": false
            },
            {
              "text": ":.2",
              "correct": false
            },
            {
              "text": "2.f",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — 여러 줄 인사",
          "prompt": "이름을 입력받아 'Hello, [이름]!'와 '반갑습니다, [이름]님.'을 두 줄에 나눠 출력하세요.",
          "code": "print(f'___')\nprint(f'반갑습니다, {name}님.')",
          "hint": "같은 변수 name을 두 번 다 f-string에서 사용합니다.",
          "options": [
            {
              "text": "Hello, {name}!",
              "correct": true
            },
            {
              "text": "Hello, name!",
              "correct": false
            },
            {
              "text": "Hello {name}",
              "correct": false
            },
            {
              "text": "Hello, '+name+'!",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "정수 입력받기",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 기본 정수 입력",
          "prompt": "정수 하나를 입력받아 변수 n에 저장하고 출력하세요.",
          "code": "n = ___(input())",
          "hint": "input()은 문자열을 반환하므로 정수로 변환할 때는 int()를 사용합니다.",
          "options": [
            {
              "text": "int",
              "correct": true
            },
            {
              "text": "str",
              "correct": false
            },
            {
              "text": "float",
              "correct": false
            },
            {
              "text": "input",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 정수 입력 후 2배 출력",
          "prompt": "정수 n을 입력받아 n * 2를 출력하세요.",
          "code": "n = ___(input())\nprint(n * 2)",
          "hint": "int()로 정수 타입으로 변환해야 산술 연산이 가능합니다.",
          "options": [
            {
              "text": "int",
              "correct": true
            },
            {
              "text": "float",
              "correct": false
            },
            {
              "text": "str",
              "correct": false
            },
            {
              "text": "input",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 두 정수 개별 입력 후 합산",
          "prompt": "정수를 두 줄에 걸쳐 각각 입력받아 a, b에 저장하고 합계를 출력하세요.",
          "code": "a = ___(input())\nb = ___(input())\nprint(a + b)",
          "hint": "여러 번 입력받을 때는 각 변수마다 int(input())을 반복합니다.",
          "options": [
            {
              "text": "int",
              "correct": true
            },
            {
              "text": "float",
              "correct": false
            },
            {
              "text": "str",
              "correct": false
            },
            {
              "text": "map",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — 세 정수 입력 후 평균",
          "prompt": "정수를 세 줄에 걸쳐 각각 입력받아 평균값(소수 포함)을 출력하세요.",
          "code": "a = ___(input())\nb = ___(input())\nc = ___(input())",
          "hint": "/ 연산자는 항상 실수로 나눕니다. 정수 나눗셈은 //를 씁니다.",
          "options": [
            {
              "text": "int",
              "correct": true
            },
            {
              "text": "float",
              "correct": false
            },
            {
              "text": "str",
              "correct": false
            },
            {
              "text": "input",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 5 — 정수 입력 후 홀짝 판별",
          "prompt": "정수 n을 입력받아 짝수면 '짝수', 홀수면 '홀수'를 출력하세요.",
          "code": "n = ___(input())",
          "hint": "int()로 변환해야 % 나머지 연산이 가능합니다.",
          "options": [
            {
              "text": "int",
              "correct": true
            },
            {
              "text": "str",
              "correct": false
            },
            {
              "text": "float",
              "correct": false
            },
            {
              "text": "bool",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "두 정수 한 줄 입력",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 두 정수 합산",
          "prompt": "한 줄에 공백으로 구분된 두 정수를 입력받아 합계를 출력하세요.",
          "code": "a, b = map(___, input().split())",
          "hint": "map(int, ...)는 분리된 각 요소를 정수로 변환합니다.",
          "options": [
            {
              "text": "int",
              "correct": true
            },
            {
              "text": "str",
              "correct": false
            },
            {
              "text": "float",
              "correct": false
            },
            {
              "text": "map",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 세 정수 입력 후 곱셈",
          "prompt": "한 줄에 공백으로 구분된 세 정수를 입력받아 세 수의 곱을 출력하세요.",
          "code": "x, y, z = map(___, input().split())",
          "hint": "세 개 이상도 같은 패턴: a, b, c = map(int, input().split())",
          "options": [
            {
              "text": "int",
              "correct": true
            },
            {
              "text": "float",
              "correct": false
            },
            {
              "text": "str",
              "correct": false
            },
            {
              "text": "tuple",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 두 실수 입력 후 평균",
          "prompt": "한 줄에 공백으로 구분된 두 실수를 입력받아 평균을 출력하세요.",
          "code": "a, b = map(___, input().split())",
          "hint": "실수는 map(float, ...)로 변환합니다. int 대신 float을 사용하세요.",
          "options": [
            {
              "text": "float",
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
              "text": "Decimal",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — 두 정수로 최솟값·최댓값",
          "prompt": "한 줄에 두 정수를 입력받아 더 작은 수와 더 큰 수를 차례로 출력하세요.",
          "code": "a, b = map(___, input().split())\nprint(min(a, b), max(a, b))",
          "hint": "min(), max()에 변수 여러 개를 직접 넣을 수 있습니다.",
          "options": [
            {
              "text": "int",
              "correct": true
            },
            {
              "text": "float",
              "correct": false
            },
            {
              "text": "str",
              "correct": false
            },
            {
              "text": "list",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "실수 소수점 2자리 출력",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 소수점 2자리",
          "prompt": "실수를 입력받아 소수점 아래 2자리까지 출력하세요.",
          "code": "print(f'{n:___}')",
          "hint": "포맷 지정자: {n:.2f}는 n을 소수점 2자리로 출력합니다.",
          "options": [
            {
              "text": ".2f",
              "correct": true
            },
            {
              "text": "2f",
              "correct": false
            },
            {
              "text": ":.2",
              "correct": false
            },
            {
              "text": "2",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 소수점 3자리",
          "prompt": "실수를 입력받아 소수점 아래 3자리까지 출력하세요.",
          "code": "print(f'{n:___}')",
          "hint": "소수점 자리 수만 바꾸면 됩니다: {n:.3f}",
          "options": [
            {
              "text": ".3f",
              "correct": true
            },
            {
              "text": "3f",
              "correct": false
            },
            {
              "text": ":3.",
              "correct": false
            },
            {
              "text": ".3",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 정수와 실수 혼합",
          "prompt": "정수와 실수를 각각 입력받아 정수는 그대로, 실수는 소수점 2자리로 한 줄에 출력하세요.",
          "code": "print(f'{a} {b:___}')",
          "hint": "한 f-string 안에 여러 포맷 지정자를 쓸 수 있습니다.",
          "options": [
            {
              "text": ".2f",
              "correct": true
            },
            {
              "text": "d",
              "correct": false
            },
            {
              "text": ".2",
              "correct": false
            },
            {
              "text": "f",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — 원주율 계산 출력",
          "prompt": "반지름 r을 실수로 입력받아 원의 넓이(π×r²)를 소수점 4자리로 출력하세요. π=3.14159265 사용.",
          "code": "print(f'{area:___}')",
          "hint": "자릿수만 바꾸면 됩니다: {area:.4f}",
          "options": [
            {
              "text": ".4f",
              "correct": true
            },
            {
              "text": "4f",
              "correct": false
            },
            {
              "text": ".4",
              "correct": false
            },
            {
              "text": ".2f",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "문자열 * 정수로 반복 출력",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 고정 횟수 반복",
          "prompt": "문자열 'Hello'를 2번 반복해서 출력하세요.",
          "code": "print('Hello' ___ 2)",
          "hint": "문자열 * 정수 = 문자열 반복입니다.",
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
              "text": "x",
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
          "question": "드릴 2 — 입력값으로 반복 횟수 결정",
          "prompt": "정수 n을 입력받아 '*'을 n번 반복해서 출력하세요.",
          "code": "print('*' ___ n)",
          "hint": "문자열은 정수 변수와도 * 연산이 가능합니다.",
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
              "text": "for",
              "correct": false
            },
            {
              "text": "**",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 여러 글자 패턴 반복",
          "prompt": "문자열 '-='을 4번 반복해서 출력하세요.",
          "code": "print('-=' ___ 4)",
          "hint": "한 문자뿐 아니라 여러 문자 패턴도 반복 가능합니다.",
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
              "text": "for",
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
          "question": "드릴 4 — 문자열·반복 조합 출력",
          "prompt": "이름을 입력받고, 그 이름을 '♥'로 감싸 3번 반복 출력하세요. 예: name=수 → ♥수♥♥수♥♥수♥",
          "code": "print(f'♥{name}♥' ___ 3)",
          "hint": "f-string으로 만든 문자열도 * 반복이 가능합니다.",
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
              "text": "x",
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
      "title": "정수의 제곱 출력",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — n의 제곱",
          "prompt": "정수 n을 입력받아 n²을 출력하세요.",
          "code": "print(n ___ 2)",
          "hint": "거듭제곱은 ** 두 글자입니다. * 하나는 곱셈이에요!",
          "options": [
            {
              "text": "**",
              "correct": true
            },
            {
              "text": "^",
              "correct": false
            },
            {
              "text": "*",
              "correct": false
            },
            {
              "text": "pow",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — n의 세제곱",
          "prompt": "정수 n을 입력받아 n³을 출력하세요.",
          "code": "print(n ___ 3)",
          "hint": "지수만 바꾸면 됩니다: n ** 3",
          "options": [
            {
              "text": "**",
              "correct": true
            },
            {
              "text": "*3",
              "correct": false
            },
            {
              "text": "pow",
              "correct": false
            },
            {
              "text": "xxx",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — n의 제곱근",
          "prompt": "정수 n을 입력받아 √n (제곱근)을 출력하세요.",
          "code": "print(n ___ 0.5)",
          "hint": "0.5 지수(=1/2)를 사용하면 제곱근을 구할 수 있습니다.",
          "options": [
            {
              "text": "**",
              "correct": true
            },
            {
              "text": "^",
              "correct": false
            },
            {
              "text": "/",
              "correct": false
            },
            {
              "text": "sqrt",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — pow() 내장함수 활용",
          "prompt": "정수 a, b를 한 줄에 입력받아 a의 b제곱을 출력하세요. pow() 내장함수를 사용합니다.",
          "code": "print(___(a, b))",
          "hint": "pow(밑, 지수)는 ** 연산자와 동일한 결과를 냅니다.",
          "options": [
            {
              "text": "pow",
              "correct": true
            },
            {
              "text": "**",
              "correct": false
            },
            {
              "text": "math.pow",
              "correct": false
            },
            {
              "text": "int",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 5 — 지수 비교",
          "prompt": "정수 n을 입력받아 n²과 2ⁿ 중 어느 쪽이 더 큰지 출력하세요. (같으면 '같음')",
          "code": "if n ___ 2 > 2 ___ n:",
          "hint": "두 거듭제곱 모두 ** 연산자를 씁니다.",
          "options": [
            {
              "text": "** / **",
              "correct": true
            },
            {
              "text": "^ / ^",
              "correct": false
            },
            {
              "text": "* / *",
              "correct": false
            },
            {
              "text": "** / ^",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "몫과 나머지 동시 출력",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 몫과 나머지",
          "prompt": "두 정수를 한 줄에 입력받아 첫 수를 둘째 수로 나눈 몫과 나머지를 출력하세요.",
          "code": "print(a ___ b, a % b)",
          "hint": "정수 나눗셈은 //를 사용합니다.",
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
              "text": "//!",
              "correct": false
            },
            {
              "text": "mod",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 나머지만 출력",
          "prompt": "두 정수 a, b를 입력받아 a를 b로 나눈 나머지만 출력하세요.",
          "code": "print(a ___ b)",
          "hint": "% 연산자는 나머지를 구합니다.",
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
              "text": "abs",
              "correct": false
            },
            {
              "text": "mod",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 분 → 시간·분 변환",
          "prompt": "총 분 m을 입력받아 몇 시간 몇 분인지 출력하세요. 예: 125 → 2 5",
          "code": "print(m ___ 60, m % 60)",
          "hint": "// 와 %를 함께 사용하면 시간 단위 변환에 유용합니다.",
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
              "text": "divmod",
              "correct": false
            },
            {
              "text": "%",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — 초 → 시·분·초 변환",
          "prompt": "총 초 s를 입력받아 시간, 분, 초로 변환해 출력하세요. 예: 3661 → 1 1 1",
          "code": "hours = s ___ 3600\nremain = s % 3600",
          "hint": "3600초 = 1시간. 먼저 시간을 구하고 나머지로 분·초를 구합니다.",
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
        }
      ]
    },
    {
      "title": "여러 줄 입력을 리스트로",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 정수 리스트 생성",
          "prompt": "n을 입력받고 n개의 정수를 한 줄씩 입력받아 리스트로 만드세요.",
          "code": "arr = [int(input()) for _ in range(___)]",
          "hint": "_ 는 사용하지 않는 변수를 나타냅니다. n번만 반복하면 됩니다.",
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
              "text": "range",
              "correct": false
            },
            {
              "text": "_",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 문자열 리스트 생성",
          "prompt": "m을 입력받고, m번 반복해서 문자열을 입력받아 리스트 words에 저장하세요.",
          "code": "words = [input() for _ in range(___)]",
          "hint": "문자열은 int() 없이 input()만 써도 됩니다.",
          "options": [
            {
              "text": "m",
              "correct": true
            },
            {
              "text": "_",
              "correct": false
            },
            {
              "text": "words",
              "correct": false
            },
            {
              "text": "input",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 1~n 제곱 리스트",
          "prompt": "정수 k를 입력받고 1부터 k까지 각 수의 제곱을 담은 리스트를 만드세요.",
          "code": "squares = [i ** 2 for i in range(1, ___ + 1)]",
          "hint": "range(1, k+1)은 1~k를 의미합니다.",
          "options": [
            {
              "text": "k",
              "correct": true
            },
            {
              "text": "k-1",
              "correct": false
            },
            {
              "text": "_",
              "correct": false
            },
            {
              "text": "range",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — 합계 계산",
          "prompt": "n개의 정수를 각 줄에 입력받아 모두 더한 합계를 출력하세요.",
          "code": "arr = [___(input()) for _ in range(n)]",
          "hint": "각 요소를 정수로 변환해야 sum()으로 합산할 수 있습니다.",
          "options": [
            {
              "text": "int",
              "correct": true
            },
            {
              "text": "str",
              "correct": false
            },
            {
              "text": "float",
              "correct": false
            },
            {
              "text": "list",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "문자열 길이 출력",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 문자열 길이",
          "prompt": "문자열을 입력받아 그 길이를 출력하세요.",
          "code": "print(___(s))",
          "hint": "len()은 문자열의 문자 개수를 반환합니다.",
          "options": [
            {
              "text": "len",
              "correct": true
            },
            {
              "text": "length",
              "correct": false
            },
            {
              "text": "size",
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
          "question": "드릴 2 — 리스트 길이",
          "prompt": "n개의 정수를 입력받은 후 그 리스트의 길이를 출력하세요.",
          "code": "print(___(arr))",
          "hint": "len()은 리스트의 요소 개수도 반환합니다.",
          "options": [
            {
              "text": "len",
              "correct": true
            },
            {
              "text": "size",
              "correct": false
            },
            {
              "text": "max",
              "correct": false
            },
            {
              "text": "sum",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 길이로 조건 판별",
          "prompt": "문자열을 입력받아 길이가 5 이상이면 '길어요', 아니면 '짧아요'를 출력하세요.",
          "code": "if ___(s) >= 5:",
          "hint": "len()의 반환값을 if 조건에서 많이 사용합니다.",
          "options": [
            {
              "text": "len",
              "correct": true
            },
            {
              "text": "length",
              "correct": false
            },
            {
              "text": "size",
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
          "question": "드릴 4 — 가장 긴 단어 찾기",
          "prompt": "공백으로 구분된 단어들을 한 줄에 입력받아 가장 긴 단어의 길이를 출력하세요.",
          "code": "print(max(___(w) for w in words))",
          "hint": "len()을 제너레이터 표현식 안에서 사용할 수 있습니다.",
          "options": [
            {
              "text": "len",
              "correct": true
            },
            {
              "text": "max",
              "correct": false
            },
            {
              "text": "size",
              "correct": false
            },
            {
              "text": "count",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "숫자 → 문자열 변환",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 정수를 문자열로",
          "prompt": "정수 n을 입력받아 문자열로 변환해 출력하세요.",
          "code": "s = ___(n)",
          "hint": "str()는 숫자를 문자열로 바꿉니다.",
          "options": [
            {
              "text": "str",
              "correct": true
            },
            {
              "text": "int",
              "correct": false
            },
            {
              "text": "string",
              "correct": false
            },
            {
              "text": "float",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 숫자와 문자열 연결",
          "prompt": "정수 a를 입력받아 '숫자는 [a]입니다'라고 출력하세요. str()와 + 연산자를 사용합니다.",
          "code": "print('숫자는 ' + ___(a) + '입니다')",
          "hint": "문자열끼리 + 연결하려면 str()로 먼저 변환해야 합니다.",
          "options": [
            {
              "text": "str",
              "correct": true
            },
            {
              "text": "int",
              "correct": false
            },
            {
              "text": "repr",
              "correct": false
            },
            {
              "text": "format",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 실수를 문자열로",
          "prompt": "실수 x를 입력받아 문자열로 변환한 후 그 길이를 출력하세요.",
          "code": "s = ___(x)",
          "hint": "어떤 자료형이든 str()로 문자열로 변환할 수 있습니다.",
          "options": [
            {
              "text": "str",
              "correct": true
            },
            {
              "text": "float",
              "correct": false
            },
            {
              "text": "len",
              "correct": false
            },
            {
              "text": "int",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — 자릿수 세기",
          "prompt": "정수 n을 입력받아 몇 자리 수인지 출력하세요. 예: 12345 → 5",
          "code": "print(len(___(n)))",
          "hint": "str()로 변환한 뒤 len()으로 길이를 세는 패턴입니다.",
          "options": [
            {
              "text": "str",
              "correct": true
            },
            {
              "text": "abs",
              "correct": false
            },
            {
              "text": "int",
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
      "title": "공백 기준 분리 후 정수 리스트",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 정수 리스트",
          "prompt": "한 줄에 공백으로 구분된 정수들을 입력받아 정수 리스트로 만드세요.",
          "code": "arr = list(map(int, input().___()))",
          "hint": "split()은 문자열을 분리합니다. map(int, ...)는 각 요소를 정수로 변환합니다.",
          "options": [
            {
              "text": "split",
              "correct": true
            },
            {
              "text": "join",
              "correct": false
            },
            {
              "text": "strip",
              "correct": false
            },
            {
              "text": "parse",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 문자열 리스트",
          "prompt": "한 줄에 공백으로 구분된 단어들을 입력받아 문자열 리스트로 만드세요.",
          "code": "words = input().___()",
          "hint": "split()만 써도 바로 리스트가 됩니다. 정수 변환 없이 문자열 그대로입니다.",
          "options": [
            {
              "text": "split",
              "correct": true
            },
            {
              "text": "join",
              "correct": false
            },
            {
              "text": "strip",
              "correct": false
            },
            {
              "text": "list",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 콤마 구분 정수 리스트",
          "prompt": "한 줄에 콤마로 구분된 정수들을 입력받아 정수 리스트로 만드세요. 예: 1,2,3,4,5",
          "code": "arr = list(map(int, input().split(___)))",
          "hint": "split()의 인자를 바꾸면 다른 구분자로도 분리할 수 있습니다.",
          "options": [
            {
              "text": "','",
              "correct": true
            },
            {
              "text": "''",
              "correct": false
            },
            {
              "text": "\" \"",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — 최댓값·최솟값·합계",
          "prompt": "공백으로 구분된 정수들을 입력받아 최댓값, 최솟값, 합계를 각각 출력하세요.",
          "code": "arr = list(map(int, input().___()))",
          "hint": "리스트로 만든 뒤 max(), min(), sum()을 바로 사용합니다.",
          "options": [
            {
              "text": "split",
              "correct": true
            },
            {
              "text": "join",
              "correct": false
            },
            {
              "text": "strip",
              "correct": false
            },
            {
              "text": "list",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "f-string 산술 연산 출력",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 덧셈 연산 출력",
          "prompt": "두 정수 a, b를 입력받아 'a + b = c' 형식으로 출력하세요.",
          "code": "print(f'{a} + {b} = {___}')",
          "hint": "f-string의 { } 안에 a + b 같은 연산식을 직접 쓸 수 있습니다.",
          "options": [
            {
              "text": "a + b",
              "correct": true
            },
            {
              "text": "sum",
              "correct": false
            },
            {
              "text": "c",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 곱셈 연산 출력",
          "prompt": "정수 x를 입력받아 'x * x = y' 형식으로 제곱을 출력하세요.",
          "code": "print(f'{x} * {x} = {___}')",
          "hint": "f-string 내부에서 곱셈(*)도 바로 계산됩니다.",
          "options": [
            {
              "text": "x * x",
              "correct": true
            },
            {
              "text": "x ** 2",
              "correct": false
            },
            {
              "text": "pow",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 복합 연산 출력",
          "prompt": "정수 p, q를 입력받아 '(p + q) × 2 = r' 형식으로 출력하세요.",
          "code": "print(f'({p} + {q}) × 2 = {___}')",
          "hint": "괄호와 함께 복잡한 연산식도 f-string 안에서 사용 가능합니다.",
          "options": [
            {
              "text": "(p + q) * 2",
              "correct": true
            },
            {
              "text": "p + q * 2",
              "correct": false
            },
            {
              "text": "result",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — 나눗셈 결과 포맷 출력",
          "prompt": "두 정수를 입력받아 'a ÷ b = 몫...나머지' 형식으로 출력하세요.",
          "code": "print(f'{a} ÷ {b} = {a ___ b}...{a % b}')",
          "hint": "f-string 안에서 //와 % 연산도 바로 쓸 수 있습니다.",
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
              "text": "**",
              "correct": false
            }
          ]
        }
      ]
    }
  ]
};
