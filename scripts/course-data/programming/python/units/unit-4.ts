import type { UnitSeed } from "../../../types";

export const unit4: UnitSeed = {
  "title": "Unit 4. 리스트 조작",
  "description": "append, pop, sort, slice, list comprehension",
  "lessons": [
    {
      "title": "종합 기본개념 — 리스트 조작",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — append 기본",
          "prompt": "빈 리스트에 1, 2, 3을 순서대로 추가하세요.",
          "code": "arr.___(1)",
          "hint": "append()는 리스트 맨 끝에 요소를 추가합니다.",
          "options": [
            {
              "text": "append",
              "correct": true
            },
            {
              "text": "add",
              "correct": false
            },
            {
              "text": "push",
              "correct": false
            },
            {
              "text": "insert",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — sorted 정렬",
          "prompt": "리스트 [3,1,4,1,5]를 정렬해 새 리스트로 만드세요.",
          "code": "new = ___(arr)",
          "hint": "sorted()는 새 정렬 리스트를 반환합니다. 원본은 변경되지 않습니다.",
          "options": [
            {
              "text": "sorted",
              "correct": true
            },
            {
              "text": "sort",
              "correct": false
            },
            {
              "text": "arrange",
              "correct": false
            },
            {
              "text": "order",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 슬라이싱",
          "prompt": "리스트 [0,1,2,3,4,5]에서 [1,2,3]을 슬라이싱으로 추출하세요.",
          "code": "print(arr[1:___])",
          "hint": "arr[a:b]는 인덱스 a~b-1. 끝값 4는 포함 안 됨.",
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
              "text": "2",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — 컴프리헨션",
          "prompt": "리스트 [1,2,3,4,5]의 각 요소를 2배로 한 새 리스트를 만드세요.",
          "code": "new = [x*2 ___ x in arr]",
          "hint": "[표현식 for 변수 in 이터러블]",
          "options": [
            {
              "text": "for",
              "correct": true
            },
            {
              "text": "in",
              "correct": false
            },
            {
              "text": "if",
              "correct": false
            },
            {
              "text": "while",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "append와 pop",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — append로 요소 추가",
          "prompt": "빈 리스트에 10, 20을 순서대로 추가해 [10, 20]을 만드세요.",
          "code": "arr.___(10)",
          "hint": "append()는 리스트 맨 끝에 요소를 추가합니다.",
          "options": [
            {
              "text": "append",
              "correct": true
            },
            {
              "text": "add",
              "correct": false
            },
            {
              "text": "push",
              "correct": false
            },
            {
              "text": "insert",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — pop으로 마지막 요소 제거",
          "prompt": "리스트 [1,2,3]에서 마지막 요소를 꺼내 변수 x에 저장하세요.",
          "code": "x = arr.___()",
          "hint": "pop()은 마지막 요소를 제거하고 반환합니다.",
          "options": [
            {
              "text": "pop",
              "correct": true
            },
            {
              "text": "remove",
              "correct": false
            },
            {
              "text": "delete",
              "correct": false
            },
            {
              "text": "last",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — insert로 특정 위치 삽입",
          "prompt": "리스트 [1, 3]의 1번 인덱스에 값 2를 끼워넣어 [1, 2, 3]을 만드세요.",
          "code": "arr.___(1, 2)",
          "hint": "insert(인덱스, 값)은 특정 위치에 값을 밀어넣습니다.",
          "options": [
            {
              "text": "insert",
              "correct": true
            },
            {
              "text": "add",
              "correct": false
            },
            {
              "text": "append",
              "correct": false
            },
            {
              "text": "put",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — remove로 값 삭제",
          "prompt": "리스트 [10, 20, 30, 20]에서 처음 등장하는 20을 삭제하세요.",
          "code": "arr.___(20)",
          "hint": "remove(값)은 해당 값을 찾아 지웁니다. 인덱스가 아닌 값으로 삭제합니다.",
          "options": [
            {
              "text": "remove",
              "correct": true
            },
            {
              "text": "delete",
              "correct": false
            },
            {
              "text": "pop",
              "correct": false
            },
            {
              "text": "drop",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 5 — while로 스택처럼 비우기",
          "prompt": "리스트 [1,2,3,4,5]를 while문으로 뒤에서부터 모두 꺼내 출력하세요.",
          "code": "while ___:",
          "hint": "빈 리스트는 False이므로 while arr:는 리스트가 빌 때까지 반복합니다.",
          "options": [
            {
              "text": "arr",
              "correct": true
            },
            {
              "text": "True",
              "correct": false
            },
            {
              "text": "len(arr)>0",
              "correct": false
            },
            {
              "text": "not arr",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "정렬과 슬라이싱",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — sorted 오름차순",
          "prompt": "리스트 [3,1,4,1,5]를 원본 유지하며 정렬된 새 리스트를 만드세요.",
          "code": "sorted_arr = ___(arr)",
          "hint": "sorted()는 원본을 유지하고 새 리스트를 반환합니다.",
          "options": [
            {
              "text": "sorted",
              "correct": true
            },
            {
              "text": "sort",
              "correct": false
            },
            {
              "text": "arrange",
              "correct": false
            },
            {
              "text": "order",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — sort 내림차순",
          "prompt": "리스트 [3,1,4,1,5]를 내림차순으로 정렬하세요. 원본을 직접 수정합니다.",
          "code": "arr.sort(___=True)",
          "hint": "reverse=True 옵션을 사용하면 내림차순 정렬이 됩니다.",
          "options": [
            {
              "text": "reverse",
              "correct": true
            },
            {
              "text": "desc",
              "correct": false
            },
            {
              "text": "backward",
              "correct": false
            },
            {
              "text": "down",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 슬라이싱으로 부분 추출",
          "prompt": "리스트 [0,1,2,3,4,5]에서 인덱스 1,2,3번 요소([1,2,3])를 슬라이싱으로 추출하세요.",
          "code": "print(arr[1:___])",
          "hint": "arr[a:b]는 인덱스 a부터 b-1까지입니다.",
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
              "text": "1:3",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — 슬라이싱으로 뒤집기",
          "prompt": "리스트 [1,2,3,4,5]를 슬라이싱으로 역순 복사하세요.",
          "code": "rev = arr[___]",
          "hint": "[::-1]은 전체를 역순으로 슬라이싱합니다.",
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
              "text": "-1:",
              "correct": false
            },
            {
              "text": "reverse",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 5 — 음수 인덱싱",
          "prompt": "리스트 [10,20,30,40,50]의 마지막 요소와 뒤에서 두 번째 요소를 출력하세요.",
          "code": "print(arr[___])  # 마지막",
          "hint": "-1은 마지막, -2는 뒤에서 두 번째입니다.",
          "options": [
            {
              "text": "-1",
              "correct": true
            },
            {
              "text": "last",
              "correct": false
            },
            {
              "text": "len-1",
              "correct": false
            },
            {
              "text": "4",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "리스트 컴프리헨션",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 제곱 리스트",
          "prompt": "리스트 [1,2,3,4,5]의 각 요소를 제곱한 새 리스트를 만드세요.",
          "code": "squares = [x ** 2 ___ x in arr]",
          "hint": "[표현식 for 변수 in 이터러블]",
          "options": [
            {
              "text": "for",
              "correct": true
            },
            {
              "text": "in",
              "correct": false
            },
            {
              "text": "if",
              "correct": false
            },
            {
              "text": "while",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 짝수 필터링",
          "prompt": "리스트 [1,2,3,4,5,6]에서 짝수만 걸러낸 리스트를 만드세요.",
          "code": "evens = [x for x in arr ___ x % 2 == 0]",
          "hint": "[값 for 변수 in 리스트 if 조건]: 조건에 맞는 요소만 포함합니다.",
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
              "text": "and",
              "correct": false
            },
            {
              "text": "where",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 조건부 변환",
          "prompt": "리스트 [1,2,3,4,5]에서 홀수는 2배, 짝수는 그대로인 새 리스트를 만드세요.",
          "code": "res = [x*2 if x%2!=0 ___ x for x in arr]",
          "hint": "[참일때 if 조건 else 거짓일때 for 변수 in 리스트]",
          "options": [
            {
              "text": "else",
              "correct": true
            },
            {
              "text": "or",
              "correct": false
            },
            {
              "text": "and",
              "correct": false
            },
            {
              "text": "elif",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — 문자열 길이 리스트",
          "prompt": "단어 리스트 ['apple','hi','python']에서 각 단어의 길이를 담은 리스트를 만드세요.",
          "code": "lengths = [___(w) for w in words]",
          "hint": "컴프리헨션 표현식에 len() 같은 함수를 쓸 수 있습니다.",
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
              "text": "count",
              "correct": false
            },
            {
              "text": "length",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "내림차순 정렬",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 내림차순 정렬",
          "prompt": "리스트 arr = [3, 1, 4, 1, 5]를 내림차순으로 정렬해 출력하는 코드를 완성하세요. sort() 메서드의 옵션을 활용합니다. 결과: [5, 4, 3, 1, 1]",
          "code": "arr.sort(___=True)",
          "hint": "reverse=True 옵션을 사용하면 내림차순 정렬이 됩니다.",
          "options": [
            {
              "text": "reverse",
              "correct": true
            },
            {
              "text": "desc",
              "correct": false
            },
            {
              "text": "backward",
              "correct": false
            },
            {
              "text": "down",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — key로 정렬",
          "prompt": "문자열 리스트 ['banana','apple','cherry']를 길이 순으로 정렬해 출력하세요.",
          "code": "words.sort(key=___)",
          "hint": "sort(key=함수)로 정렬 기준을 지정합니다. key=len은 길이 기준입니다.",
          "options": [
            {
              "text": "len",
              "correct": true
            },
            {
              "text": "str",
              "correct": false
            },
            {
              "text": "sort",
              "correct": false
            },
            {
              "text": "reverse",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 내림차순 + key 조합",
          "prompt": "숫자 리스트 [3,1,4,1,5,9]를 내림차순으로 정렬해 출력하세요.",
          "code": "arr.sort(reverse=___)",
          "hint": "sort(reverse=True)는 내림차순 정렬입니다.",
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
              "text": "0",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "슬라이싱 기본",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 슬라이싱 기본",
          "prompt": "리스트 arr = [0, 1, 2, 3, 4, 5]에서 인덱스 1, 2, 3번 요소([1, 2, 3])를 추출하는 슬라이싱 코드를 완성하세요.",
          "code": "print(arr[1:___])  # [1, 2, 3]",
          "hint": "슬라이싱 arr[a:b]는 a번 인덱스부터 b-1번 인덱스까지입니다.",
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
              "text": "1:3",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 슬라이싱으로 홀수 인덱스만",
          "prompt": "리스트 [0,1,2,3,4,5,6,7]에서 홀수 인덱스 요소만 슬라이싱으로 추출하세요.",
          "code": "print(arr[1::___])",
          "hint": "arr[1::2]: 인덱스 1부터 시작해서 2 간격으로 추출합니다.",
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
              "text": "-1",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 슬라이싱으로 리스트 중간 부분 교체",
          "prompt": "리스트 [1,2,3,4,5]의 2~4번째 요소(인덱스 1~3)를 [10,20,30]으로 교체해 출력하세요.",
          "code": "arr[___] = [10,20,30]",
          "hint": "슬라이싱은 값 할당에도 사용됩니다. arr[1:4]는 인덱스 1,2,3 세 자리입니다.",
          "options": [
            {
              "text": "1:4",
              "correct": true
            },
            {
              "text": "1:3",
              "correct": false
            },
            {
              "text": "2:5",
              "correct": false
            },
            {
              "text": "0:3",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "리스트 뒤집기 — 슬라이싱",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 리스트 뒤집기 — 슬라이싱",
          "prompt": "리스트 arr = [1, 2, 3, 4, 5]를 역순으로 뒤집은 새 리스트 rev를 슬라이싱으로 만드는 코드를 완성하세요. 결과: [5, 4, 3, 2, 1]",
          "code": "rev = arr[___]",
          "hint": "[::-1]은 전체를 1씩 감소하며 슬라이싱 → 역순. 코딩테스트 단골 패턴!",
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
              "text": "-1:",
              "correct": false
            },
            {
              "text": "reverse",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — reversed() 사용",
          "prompt": "리스트 [1,2,3,4,5]를 reversed()로 역순 순회해 출력하세요.",
          "code": "for x in ___(arr):\n    print(x, end=' ')",
          "hint": "reversed()는 원본을 바꾸지 않고 역방향 이터레이터를 반환합니다.",
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
              "text": "arr[::-1]",
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
          "question": "드릴 3 — 팰린드롬 확인",
          "prompt": "문자열 s를 입력받아 앞뒤가 같으면(팰린드롬) 'Yes', 아니면 'No'를 출력하세요. 슬라이싱을 사용합니다.",
          "code": "print('Yes' if s == s[___] else 'No')",
          "hint": "s[::-1]은 문자열을 뒤집습니다. 원본과 비교해 팰린드롬을 확인합니다.",
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
        }
      ]
    },
    {
      "title": "리스트 컴프리헨션 기본",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 리스트 컴프리헨션 기본",
          "prompt": "리스트 arr = [1, 2, 3, 4, 5]의 각 요소를 제곱한 새 리스트 squares를 리스트 컴프리헨션으로 만드는 코드를 완성하세요. 결과: [1, 4, 9, 16, 25]",
          "code": "squares = [x ** 2 ___ x in arr]",
          "hint": "리스트 컴프리헨션: [표현식 for 변수 in 이터러블] — 한 줄로 새 리스트를 만들어요.",
          "options": [
            {
              "text": "for",
              "correct": true
            },
            {
              "text": "in",
              "correct": false
            },
            {
              "text": "if",
              "correct": false
            },
            {
              "text": "while",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 문자열 리스트 컴프리헨션",
          "prompt": "단어 리스트 ['hello','world','python']을 각 단어를 대문자로 바꾼 새 리스트로 만드세요.",
          "code": "upper_words = [w.___ for w in words]",
          "hint": "리스트 컴프리헨션: [표현식 for 변수 in 이터러블]",
          "options": [
            {
              "text": "upper()",
              "correct": true
            },
            {
              "text": "upper",
              "correct": false
            },
            {
              "text": "toUpper()",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 중첩 리스트 컴프리헨션 평탄화",
          "prompt": "2차원 리스트 [[1,2],[3,4],[5,6]]을 1차원으로 평탄화(flatten)하세요.",
          "code": "flat = [x for row in matrix for x in ___]",
          "hint": "이중 for문을 컴프리헨션 안에 쓸 수 있습니다: for row in matrix for x in row.",
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
              "text": "x",
              "correct": false
            },
            {
              "text": "range(row)",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "리스트 컴프리헨션 — 필터",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 리스트 컴프리헨션 — 필터",
          "prompt": "리스트 arr = [1, 2, 3, 4, 5, 6]에서 짝수만 걸러낸 리스트 evens를 리스트 컴프리헨션으로 만드는 코드를 완성하세요. 결과: [2, 4, 6]",
          "code": "evens = [x for x in arr ___ x % 2 == 0]",
          "hint": "[값 for 변수 in 리스트 if 조건]: 조건에 맞는 요소만 포함합니다.",
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
              "text": "and",
              "correct": false
            },
            {
              "text": "where",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 3의 배수 필터링",
          "prompt": "1~20 중 3의 배수를 리스트 컴프리헨션으로 만드세요.",
          "code": "result = [x for x in range(1, 21) if x ___ 3 == 0]",
          "hint": "if 조건을 컴프리헨션 끝에 붙여 필터링합니다.",
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
              "text": "*",
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
          "question": "드릴 3 — 조건부 변환 컴프리헨션",
          "prompt": "리스트 [1,2,3,4,5,6]에서 짝수는 제곱, 홀수는 그대로인 리스트를 만드세요.",
          "code": "result = [x**2 if x%2==0 else ___ for x in arr]",
          "hint": "[참일때 if 조건 else 거짓일때 for ...]로 조건부 변환합니다.",
          "options": [
            {
              "text": "x",
              "correct": true
            },
            {
              "text": "x**2",
              "correct": false
            },
            {
              "text": "0",
              "correct": false
            },
            {
              "text": "x*2",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "max / min 내장 함수",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — max / min 내장 함수",
          "prompt": "리스트 arr = [3, 1, 4, 1, 5, 9, 2]의 최대값과 최소값을 한 줄씩 출력하는 코드를 완성하세요. 파이썬 내장 함수를 사용합니다.",
          "code": "print(___(arr))  # 9",
          "hint": "max()와 min()은 리스트에서 최대값/최소값을 바로 구합니다.",
          "options": [
            {
              "text": "max",
              "correct": true
            },
            {
              "text": "largest",
              "correct": false
            },
            {
              "text": "top",
              "correct": false
            },
            {
              "text": "biggest",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — min으로 최솟값",
          "prompt": "리스트 [3,1,4,1,5,9,2,6]의 최솟값과 그 인덱스를 출력하세요.",
          "code": "print(arr.index(___(arr)))",
          "hint": "arr.index(값)은 해당 값의 첫 번째 인덱스를 반환합니다.",
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
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — max with key",
          "prompt": "단어 리스트 ['cat','elephant','dog','bee']에서 가장 긴 단어를 출력하세요.",
          "code": "print(max(words, key=___))",
          "hint": "max(iterable, key=함수)로 기준을 지정할 수 있습니다.",
          "options": [
            {
              "text": "len",
              "correct": true
            },
            {
              "text": "str",
              "correct": false
            },
            {
              "text": "max",
              "correct": false
            },
            {
              "text": "sort",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "sum으로 합계 구하기",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — sum으로 합계 구하기",
          "prompt": "리스트 arr = [1, 2, 3, 4, 5]의 합계를 내장 함수 하나로 출력하는 코드를 완성하세요. for 루프 없이 한 줄로 해결합니다.",
          "code": "print(___(arr))",
          "hint": "sum()은 리스트의 모든 숫자를 더합니다. for 루프 없이 한 줄로!",
          "options": [
            {
              "text": "sum",
              "correct": true
            },
            {
              "text": "total",
              "correct": false
            },
            {
              "text": "add",
              "correct": false
            },
            {
              "text": "plus",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 조건 있는 sum",
          "prompt": "리스트 [1,2,3,4,5,6]에서 짝수만 골라 합계를 구하세요.",
          "code": "print(sum(x for x in arr if x ___ 2 == 0))",
          "hint": "sum() 안에 제너레이터 표현식으로 조건을 걸 수 있습니다.",
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
              "text": "*",
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
          "question": "드릴 3 — 2차원 리스트 전체 합계",
          "prompt": "행렬 [[1,2,3],[4,5,6]]의 모든 원소 합계를 구하세요.",
          "code": "total = sum(___(row) for row in matrix)",
          "hint": "sum(sum(row) for row in matrix): 각 행의 합계를 다시 sum()으로 더합니다.",
          "options": [
            {
              "text": "sum",
              "correct": true
            },
            {
              "text": "max",
              "correct": false
            },
            {
              "text": "min",
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
      "title": "음수 인덱싱",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 음수 인덱싱",
          "prompt": "리스트 arr = [10, 20, 30, 40, 50]에서 마지막 요소와 뒤에서 두 번째 요소를 출력하는 코드를 완성하세요. 음수 인덱스를 사용합니다.",
          "code": "print(arr[___])   # 50 (마지막)",
          "hint": "파이썬 음수 인덱스: -1은 마지막, -2는 뒤에서 2번째. 코딩테스트 필수 지식!",
          "options": [
            {
              "text": "-1",
              "correct": true
            },
            {
              "text": "last",
              "correct": false
            },
            {
              "text": "len-1",
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
          "question": "드릴 2 — 뒤에서 두 번째 요소",
          "prompt": "리스트 [10,20,30,40,50]의 뒤에서 두 번째 요소를 음수 인덱싱으로 출력하세요.",
          "code": "print(arr[___])",
          "hint": "arr[-1]이 마지막, arr[-2]가 뒤에서 두 번째입니다.",
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
              "text": "3",
              "correct": false
            },
            {
              "text": "-3",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 음수 인덱싱으로 슬라이싱",
          "prompt": "리스트 [1,2,3,4,5,6,7]의 뒤에서 3번째부터 끝까지 출력하세요.",
          "code": "print(arr[___:])",
          "hint": "arr[-3:]은 뒤에서 3번째 요소부터 끝까지 슬라이싱합니다.",
          "options": [
            {
              "text": "-3",
              "correct": true
            },
            {
              "text": "-2",
              "correct": false
            },
            {
              "text": "4",
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
      "title": "count 메서드로 빈도",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — count 메서드로 빈도",
          "prompt": "리스트 arr = [1, 2, 1, 3, 1, 4]에서 숫자 1이 몇 번 등장하는지 출력하는 코드를 완성하세요. 리스트 메서드를 사용합니다.",
          "code": "print(arr.___(1))",
          "hint": "리스트.count(값)은 특정 값이 몇 번 등장하는지 반환합니다.",
          "options": [
            {
              "text": "count",
              "correct": true
            },
            {
              "text": "find",
              "correct": false
            },
            {
              "text": "frequency",
              "correct": false
            },
            {
              "text": "num",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 특정 문자 개수",
          "prompt": "문자열 'hello world'에서 'l' 문자의 개수를 출력하세요.",
          "code": "print(s.___('l'))",
          "hint": "count()는 리스트뿐 아니라 문자열에서도 사용할 수 있습니다.",
          "options": [
            {
              "text": "count",
              "correct": true
            },
            {
              "text": "find",
              "correct": false
            },
            {
              "text": "index",
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
          "question": "드릴 3 — 최빈 요소 찾기",
          "prompt": "리스트 [1,2,2,3,3,3,4]에서 가장 많이 등장한 요소를 출력하세요. count()와 max()를 활용합니다.",
          "code": "mode = max(arr, key=arr.___)",
          "hint": "max(arr, key=arr.count)는 count가 가장 큰 요소를 반환합니다.",
          "options": [
            {
              "text": "count",
              "correct": true
            },
            {
              "text": "index",
              "correct": false
            },
            {
              "text": "sort",
              "correct": false
            },
            {
              "text": "reverse",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "두 리스트 합치기",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 두 리스트 합치기",
          "prompt": "리스트 a = [1, 2, 3]과 b = [4, 5, 6]을 이어붙여 c = [1, 2, 3, 4, 5, 6]을 만드는 코드를 완성하세요.",
          "code": "c = a ___ b",
          "hint": "리스트도 + 연산자로 이어붙일 수 있습니다. a.extend(b)도 같은 결과지만 원본을 변경해요.",
          "options": [
            {
              "text": "+",
              "correct": true
            },
            {
              "text": "extend",
              "correct": false
            },
            {
              "text": "join",
              "correct": false
            },
            {
              "text": "merge",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 리스트 * 반복",
          "prompt": "리스트 [0]을 5번 반복해 길이 5의 리스트를 만드세요.",
          "code": "arr = [0] ___ 5",
          "hint": "[값] * n으로 같은 값으로 채워진 길이 n의 리스트를 만듭니다.",
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
              "text": "/",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 리스트 중복 없이 합치기",
          "prompt": "두 리스트 a = [1,2,3], b = [2,3,4,5]를 중복 없이 합친 리스트를 만드세요.",
          "code": "result = list(set(a ___ b))\nresult.sort()",
          "hint": "두 리스트를 + 로 합친 뒤 set()으로 중복을 제거합니다.",
          "options": [
            {
              "text": "+",
              "correct": true
            },
            {
              "text": "*",
              "correct": false
            },
            {
              "text": "|",
              "correct": false
            },
            {
              "text": "&",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "join으로 리스트를 문자열로",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — join으로 리스트를 문자열로",
          "prompt": "리스트 words = ['Hello', 'World', 'Python']을 공백으로 이어붙여 하나의 문자열 'Hello World Python'을 만드는 코드를 완성하세요.",
          "code": "result = ' '.___(words)",
          "hint": "구분자.join(리스트): 리스트 요소를 구분자로 이어붙입니다. '-'.join(['a','b']) → 'a-b'",
          "options": [
            {
              "text": "join",
              "correct": true
            },
            {
              "text": "connect",
              "correct": false
            },
            {
              "text": "add",
              "correct": false
            },
            {
              "text": "merge",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 구분자 지정 join",
          "prompt": "리스트 ['2024','01','15']를 '-'로 연결해 날짜 문자열을 만드세요.",
          "code": "print('___'.join(date))",
          "hint": "구분자.join(리스트)로 리스트 요소를 구분자로 연결합니다.",
          "options": [
            {
              "text": "-",
              "correct": true
            },
            {
              "text": "/",
              "correct": false
            },
            {
              "text": ".",
              "correct": false
            },
            {
              "text": ",",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — split 후 join 변환",
          "prompt": "문자열 'hello world python'을 단어 분리 후 각 단어를 대문자로 바꿔 다시 연결하세요.",
          "code": "result = ' '.join(w.___ for w in s.split())",
          "hint": "split()으로 단어를 나누고, 각 단어에 upper()를 적용한 뒤 join()으로 합칩니다.",
          "options": [
            {
              "text": "upper()",
              "correct": true
            },
            {
              "text": "lower()",
              "correct": false
            },
            {
              "text": "title()",
              "correct": false
            },
            {
              "text": "capitalize()",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "index로 위치 찾기",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — index로 위치 찾기",
          "prompt": "리스트 arr = [10, 20, 30, 40]에서 값 30이 처음 등장하는 인덱스를 찾아 출력하는 코드를 완성하세요. 결과: 2",
          "code": "pos = arr.___(30)",
          "hint": "리스트.index(값)은 첫 번째로 등장하는 인덱스를 반환합니다. 없으면 ValueError!",
          "options": [
            {
              "text": "index",
              "correct": true
            },
            {
              "text": "find",
              "correct": false
            },
            {
              "text": "search",
              "correct": false
            },
            {
              "text": "locate",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — index 오류 방지",
          "prompt": "리스트 [10,20,30]에서 값 25의 인덱스를 찾되, 없으면 -1을 출력하세요.",
          "code": "if target ___ arr:\n    print(arr.index(target))\nelse:\n    print(-1)",
          "hint": "index()는 값이 없으면 ValueError를 발생시킵니다. in으로 먼저 확인하세요.",
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
          "question": "드릴 3 — 모든 등장 위치 찾기",
          "prompt": "리스트 [1,2,1,3,1,4]에서 값 1이 등장하는 모든 인덱스를 리스트로 만드세요.",
          "code": "positions = [i for i, x in ___(arr) if x == 1]",
          "hint": "enumerate()로 인덱스와 값을 동시에 순회하며 조건에 맞는 인덱스를 수집합니다.",
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
              "text": "index",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "2차원 리스트 — 행 합계",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 2차원 리스트 — 행 합계",
          "prompt": "2차원 리스트 matrix = [[1,2,3],[4,5,6],[7,8,9]]의 각 행(row)의 합계를 줄마다 출력하는 코드를 완성하세요. 출력: 6, 15, 24",
          "code": "print(___(row))",
          "hint": "sum()은 리스트에 바로 적용할 수 있습니다. row가 각 행 리스트예요.",
          "options": [
            {
              "text": "sum",
              "correct": true
            },
            {
              "text": "total",
              "correct": false
            },
            {
              "text": "max",
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
          "question": "드릴 2 — 행렬 열 합계",
          "prompt": "행렬 [[1,2,3],[4,5,6],[7,8,9]]의 각 열의 합계를 출력하세요.",
          "code": "print(sum(row[j] for row in ___))",
          "hint": "j는 열 인덱스, row[j]는 각 행의 j번째 원소입니다.",
          "options": [
            {
              "text": "matrix",
              "correct": true
            },
            {
              "text": "row",
              "correct": false
            },
            {
              "text": "matrix[0]",
              "correct": false
            },
            {
              "text": "range(3)",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 행렬 전치(transpose)",
          "prompt": "행렬 [[1,2,3],[4,5,6]]을 전치(행↔열 교환)해서 출력하세요. zip을 사용합니다.",
          "code": "transposed = [list(row) for row in zip(*___)]",
          "hint": "zip(*matrix)는 행렬을 언패킹해 전치합니다. * 연산자가 핵심입니다.",
          "options": [
            {
              "text": "matrix",
              "correct": true
            },
            {
              "text": "matrix[0]",
              "correct": false
            },
            {
              "text": "row",
              "correct": false
            },
            {
              "text": "zip",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "리스트 조작 심화 (1) - 특정 위치에 insert",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 리스트 조작 심화 (1) - 특정 위치에 insert",
          "prompt": "리스트 arr = [1, 3]의 1번 인덱스에 값 2를 끼워넣어 [1, 2, 3]을 만드는 코드를 완성하세요.",
          "code": "arr.___(1, 2)",
          "hint": "insert(인덱스, 값)은 특정 위치에 값을 밀어넣습니다. 기존 값들은 뒤로 밀려납니다.",
          "options": [
            {
              "text": "insert",
              "correct": true
            },
            {
              "text": "add",
              "correct": false
            },
            {
              "text": "append",
              "correct": false
            },
            {
              "text": "put",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 맨 앞에 insert",
          "prompt": "리스트 [2,3,4]의 맨 앞(인덱스 0)에 1을 삽입하세요.",
          "code": "arr.insert(___, 1)",
          "hint": "insert(0, 값)은 맨 앞에 삽입합니다.",
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
              "text": "len(arr)",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — insert로 정렬된 위치에 삽입",
          "prompt": "정렬된 리스트 [1,3,5,7]에 4를 올바른 위치(인덱스 2)에 삽입하세요.",
          "code": "arr.insert(___, 4)",
          "hint": "insert(인덱스, 값): 해당 인덱스 위치에 값을 삽입합니다.",
          "options": [
            {
              "text": "2",
              "correct": true
            },
            {
              "text": "3",
              "correct": false
            },
            {
              "text": "1",
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
      "title": "리스트 조작 심화 (2) - 두 리스트 합치기 extend",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 리스트 조작 심화 (2) - 두 리스트 합치기 extend",
          "prompt": "리스트 a = [1, 2]에 리스트 b = [3, 4]의 모든 요소를 추가해 a를 [1, 2, 3, 4]로 만드는 코드를 완성하세요.",
          "code": "a.___(b)",
          "hint": "extend()는 다른 리스트의 요소들을 풀어헤쳐서 원본 리스트 끝에 추가합니다.",
          "options": [
            {
              "text": "extend",
              "correct": true
            },
            {
              "text": "append",
              "correct": false
            },
            {
              "text": "+=",
              "correct": false
            },
            {
              "text": "merge",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — extend vs +",
          "prompt": "리스트 a = [1,2]에 [3,4]를 extend로 이어붙이세요.",
          "code": "a.___([ 3,4])",
          "hint": "extend()는 리스트의 모든 요소를 추가합니다. append([3,4])는 리스트 자체를 하나의 원소로 추가합니다.",
          "options": [
            {
              "text": "extend",
              "correct": true
            },
            {
              "text": "append",
              "correct": false
            },
            {
              "text": "insert",
              "correct": false
            },
            {
              "text": "add",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 여러 리스트 합치기",
          "prompt": "세 리스트 [1,2], [3,4], [5,6]을 하나로 합치세요. extend를 두 번 사용합니다.",
          "code": "a.extend([3,4])\na.___([5,6])",
          "hint": "extend()를 여러 번 사용하면 연속으로 리스트를 이어붙일 수 있습니다.",
          "options": [
            {
              "text": "extend",
              "correct": true
            },
            {
              "text": "append",
              "correct": false
            },
            {
              "text": "insert",
              "correct": false
            },
            {
              "text": "add",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "리스트 조작 심화 (3) - 특정 값 remove",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 리스트 조작 심화 (3) - 특정 값 remove",
          "prompt": "리스트 arr = [10, 20, 30, 20]에서 처음 등장하는 20이라는 '값'을 찾아 삭제하는 코드를 완성하세요.",
          "code": "arr.___(20)",
          "hint": "remove(값)은 인덱스가 아니라 해당 값을 찾아 지웁니다. 값이 없으면 에러가 납니다.",
          "options": [
            {
              "text": "remove",
              "correct": true
            },
            {
              "text": "delete",
              "correct": false
            },
            {
              "text": "pop",
              "correct": false
            },
            {
              "text": "drop",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 여러 값 remove",
          "prompt": "리스트 [1,2,3,2,1]에서 값 2를 모두 제거하세요.",
          "code": "while 2 ___ arr:\n    arr.remove(2)",
          "hint": "remove()는 첫 번째 등장만 제거합니다. 모두 제거하려면 while + in 조합을 씁니다.",
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
          "question": "드릴 3 — remove vs pop 비교",
          "prompt": "리스트 [10,20,30,40]에서 인덱스 1의 요소를 제거하고 그 값을 출력하세요. pop을 사용합니다.",
          "code": "val = arr.pop(___)",
          "hint": "pop(인덱스)는 해당 인덱스의 요소를 제거하고 그 값을 반환합니다.",
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
              "text": "2",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "리스트 조작 심화 (4) - 다중 요소 pop",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 리스트 조작 심화 (4) - 다중 요소 pop",
          "prompt": "리스트 arr = [1, 2, 3, 4, 5]에서 while문을 사용해 리스트가 빌 때까지 모든 요소를 뒤에서부터 꺼내어 출력하는 코드를 완성하세요.",
          "code": "while ___:\n    print(arr.pop())",
          "hint": "빈 리스트는 False로 평가되므로 while arr: 라고 쓰면 리스트가 빌 때까지 반복됩니다.",
          "options": [
            {
              "text": "arr",
              "correct": true
            },
            {
              "text": "True",
              "correct": false
            },
            {
              "text": "len(arr)>0",
              "correct": false
            },
            {
              "text": "not arr",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — pop으로 스택 구현",
          "prompt": "리스트를 스택으로 사용해 1,2,3을 push한 뒤 두 번 pop해서 출력하세요.",
          "code": "stack.___(1)\nstack.append(2)\nstack.append(3)",
          "hint": "append()는 스택의 push, pop()은 스택의 pop에 해당합니다.",
          "options": [
            {
              "text": "append",
              "correct": true
            },
            {
              "text": "push",
              "correct": false
            },
            {
              "text": "add",
              "correct": false
            },
            {
              "text": "insert",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 조건부 pop",
          "prompt": "리스트 [1,2,3,4,5]에서 마지막 요소가 홀수인 동안 계속 pop해서 출력하세요.",
          "code": "while arr and arr[-1] ___ 2 != 0:\n    print(arr.pop())",
          "hint": "arr[-1]은 마지막 요소를 확인합니다. % 2 != 0이면 홀수입니다.",
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
              "text": "*",
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
      "title": "리스트 조작 심화 (5) - 조건부 리스트 컴프리헨션",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 리스트 조작 심화 (5) - 조건부 리스트 컴프리헨션",
          "prompt": "리스트 arr = [1, 2, 3, 4, 5]에서 홀수는 2배, 짝수는 그대로 둔 새 리스트를 만드는 코드를 삼항 연산자를 포함한 리스트 컴프리헨션으로 완성하세요.",
          "code": "res = [x*2 if x%2!=0 ___ x for x in arr]",
          "hint": "컴프리헨션 안에 [참일때 if 조건 else 거짓일때 for 변수 in 리스트] 형태를 씁니다.",
          "options": [
            {
              "text": "else",
              "correct": true
            },
            {
              "text": "or",
              "correct": false
            },
            {
              "text": "and",
              "correct": false
            },
            {
              "text": "elif",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 양수는 2배, 음수는 0으로",
          "prompt": "리스트 [-1,2,-3,4,-5]에서 양수는 2배, 음수는 0으로 바꾼 리스트를 만드세요.",
          "code": "result = [x*2 if x > 0 else ___ for x in arr]",
          "hint": "[참값 if 조건 else 거짓값 for ...]로 조건부 변환합니다.",
          "options": [
            {
              "text": "0",
              "correct": true
            },
            {
              "text": "x",
              "correct": false
            },
            {
              "text": "x*2",
              "correct": false
            },
            {
              "text": "-x",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 짝수는 제곱, 홀수는 세제곱",
          "prompt": "리스트 [1,2,3,4,5]에서 짝수는 제곱, 홀수는 세제곱으로 변환한 리스트를 만드세요.",
          "code": "result = [x**2 if x%2==0 else x___3 for x in arr]",
          "hint": "파이썬 지수 연산자는 **입니다. x**3은 세제곱입니다.",
          "options": [
            {
              "text": "**",
              "correct": true
            },
            {
              "text": "*",
              "correct": false
            },
            {
              "text": "^",
              "correct": false
            },
            {
              "text": "//",
              "correct": false
            }
          ]
        }
      ]
    }
  ]
};
