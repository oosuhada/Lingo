import type { UnitSeed } from "../../../types";

export const unit3: UnitSeed = {
  "title": "Unit 3. 반복문",
  "description": "for, while, break, continue, 향상된 for문, 중첩 반복",
  "lessons": [
    {
      "title": "종합 기본개념 — 반복문",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — for문 구조",
          "prompt": "1부터 5까지 출력하는 for문의 증감식 빈칸을 채우세요.\nfor (int i = 1; i",
          "code": "for (int i = 1; i <= 5; ___)",
          "hint": "i++ 는 i = i + 1 과 같습니다. 반복할 때마다 i를 1씩 증가시킵니다.",
          "options": [
            {
              "text": "i++",
              "correct": true
            },
            {
              "text": "i--",
              "correct": false
            },
            {
              "text": "i+=2",
              "correct": false
            },
            {
              "text": "i+1",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 누적 합산",
          "prompt": "1부터 n까지의 합을 구하는 코드에서 누적 변수 초기화 위치를 올바르게 배치하세요.",
          "code": "int ___ = 0;",
          "hint": "누적 합산 패턴: 반복 전에 0으로 초기화한 변수에 += 로 더합니다.",
          "options": [
            {
              "text": "total",
              "correct": true
            },
            {
              "text": "sum",
              "correct": false
            },
            {
              "text": "count",
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
          "question": "드릴 3 — 이중 for문",
          "prompt": "구구단 2단을 출력하는 코드의 빈칸을 채우세요.",
          "code": "System.out.println(\"2 x \" + j + \" = \" + ___ );",
          "hint": "Java에서 문자열과 숫자를 + 로 이으면 자동으로 문자열 변환됩니다.",
          "options": [
            {
              "text": "(2 * j)",
              "correct": true
            },
            {
              "text": "2 * j",
              "correct": false
            },
            {
              "text": "j * 2",
              "correct": false
            },
            {
              "text": "2j",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — while과 break",
          "prompt": "while 반복문에서 합이 100을 넘는 순간 종료하는 코드를 완성하세요.",
          "code": "if (sum > 100) ___;",
          "hint": "break는 반복문을 즉시 종료합니다. while(true)와 break를 함께 쓰는 패턴이 자주 쓰입니다.",
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
        }
      ]
    },
    {
      "title": "향상된 for문 (for-each)",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — for-each 문법",
          "prompt": "배열의 모든 원소를 출력하는 for-each 문의 빈칸을 채우세요.\nfor (int x ___ arr)",
          "code": "for (int x ___ arr)",
          "hint": "Java for-each 문법: for(타입 변수 : 배열) {} 콜론(:)을 사용합니다.",
          "options": [
            {
              "text": ":",
              "correct": true
            },
            {
              "text": "in",
              "correct": false
            },
            {
              "text": "=",
              "correct": false
            },
            {
              "text": "->",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 최댓값 찾기",
          "prompt": "배열에서 최댓값을 찾는 코드를 완성하세요.",
          "code": "int max = ___[0];",
          "hint": "최댓값 초기값은 배열의 첫 번째 원소로 설정합니다.",
          "options": [
            {
              "text": "arr",
              "correct": true
            },
            {
              "text": "max",
              "correct": false
            },
            {
              "text": "list",
              "correct": false
            },
            {
              "text": "nums",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — ArrayList for-each",
          "prompt": "ArrayList를 for-each로 순회하는 코드의 빈칸을 채우세요.",
          "code": "for (___ s : list)",
          "hint": "ArrayList의 원소 타입이 String이므로 for(String s : list)를 씁니다.",
          "options": [
            {
              "text": "String",
              "correct": true
            },
            {
              "text": "str",
              "correct": false
            },
            {
              "text": "Object",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — continue로 건너뛰기",
          "prompt": "짝수만 출력하고 홀수는 건너뛰는 코드를 완성하세요.",
          "code": "if (x % 2 != 0) ___;",
          "hint": "continue는 현재 반복 회차만 건너뛰고 다음 반복을 계속합니다.",
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
              "text": "skip",
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
      "title": "이중 for문과 2D 배열 순회",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 이중 for문 순회",
          "prompt": "3×3 행렬을 행 우선으로 출력하는 이중 for문의 조건을 완성하세요.",
          "code": "for (int j = 0; j < mat[i].___; j++)",
          "hint": "mat[i].length는 i번째 행의 열 개수입니다.",
          "options": [
            {
              "text": "length",
              "correct": true
            },
            {
              "text": "size()",
              "correct": false
            },
            {
              "text": "count",
              "correct": false
            },
            {
              "text": "len",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 행렬 합산",
          "prompt": "2차원 배열의 모든 원소를 합산하는 코드를 완성하세요.",
          "code": "for (int[] row : ___)",
          "hint": "2차원 배열을 for-each로 순회하면 각 row가 int[] 타입입니다.",
          "options": [
            {
              "text": "mat",
              "correct": true
            },
            {
              "text": "matrix",
              "correct": false
            },
            {
              "text": "array",
              "correct": false
            },
            {
              "text": "m",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 구구단 출력",
          "prompt": "2단부터 9단까지 구구단을 이중 for문으로 출력하는 코드를 완성하세요.",
          "code": "for (int i = 2; i <= ___; i++)",
          "hint": "구구단은 단(i)이 2~9, 곱수(j)가 1~9 범위입니다.",
          "options": [
            {
              "text": "9",
              "correct": true
            },
            {
              "text": "10",
              "correct": false
            },
            {
              "text": "8",
              "correct": false
            },
            {
              "text": "5",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — 소수 판별 반복문",
          "prompt": "정수 n이 소수인지 판별하는 반복문을 완성하세요.",
          "code": "for (int i = 2; i <= Math.sqrt(___); i++)",
          "hint": "소수 판별: 2부터 √n까지 나눠봅니다. Math.sqrt(n)까지만 확인하면 됩니다.",
          "options": [
            {
              "text": "n",
              "correct": true
            },
            {
              "text": "i",
              "correct": false
            },
            {
              "text": "2",
              "correct": false
            },
            {
              "text": "10",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "do-while과 무한루프 패턴",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — do-while 구조",
          "prompt": "최소 한 번 실행되는 do-while 문의 끝 부분을 완성하세요.",
          "code": "} ___ (i < 3);",
          "hint": "do-while: do { } while (조건); 형태입니다. while 뒤 세미콜론이 필수입니다.",
          "options": [
            {
              "text": "while",
              "correct": true
            },
            {
              "text": "if",
              "correct": false
            },
            {
              "text": "for",
              "correct": false
            },
            {
              "text": "until",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — while(true) + break",
          "prompt": "합이 100을 넘는 순간 반복을 멈추는 코드를 완성하세요.",
          "code": "while (___)",
          "hint": "while(true)는 무한 루프입니다. 내부에서 break로 탈출합니다.",
          "options": [
            {
              "text": "true",
              "correct": true
            },
            {
              "text": "false",
              "correct": false
            },
            {
              "text": "1",
              "correct": false
            },
            {
              "text": "sum > 0",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 레이블 break",
          "prompt": "이중 루프에서 바깥 루프까지 한 번에 탈출하는 레이블 break를 완성하세요.",
          "code": "if (i + j == 6) break ___;",
          "hint": "레이블을 사용하면 이중 루프 전체를 한 번에 탈출할 수 있습니다.",
          "options": [
            {
              "text": "outer",
              "correct": true
            },
            {
              "text": "inner",
              "correct": false
            },
            {
              "text": "loop",
              "correct": false
            },
            {
              "text": "all",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — 반복 continue",
          "prompt": "1~10에서 3의 배수를 건너뛰고 나머지를 합산하는 코드를 완성하세요.",
          "code": "if (i % 3 == 0) ___;",
          "hint": "continue는 현재 회차를 건너뛰고 다음 반복으로 이동합니다.",
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
              "text": "skip",
              "correct": false
            },
            {
              "text": "return",
              "correct": false
            }
          ]
        }
      ]
    }
  ]
};
