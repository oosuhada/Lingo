import type { UnitSeed } from "../../../types";

export const unit6: UnitSeed = {
  "title": "Unit 6. 딕셔너리 & 집합",
  "description": "dict, set, Counter, 활용 패턴",
  "lessons": [
    {
      "title": "종합 기본개념 — 딕셔너리 & 집합",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 딕셔너리 기본",
          "prompt": "딕셔너리 {'name':'수','age':25}에서 이름을 출력하세요.",
          "code": "print(d[___])",
          "hint": "딕셔너리는 d['키'] 형태로 접근합니다.",
          "options": [
            {
              "text": "'name'",
              "correct": true
            },
            {
              "text": "name",
              "correct": false
            },
            {
              "text": "0",
              "correct": false
            },
            {
              "text": "d.name",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — get으로 안전 조회",
          "prompt": "딕셔너리에 없는 키 'score'를 조회할 때 기본값 0을 반환하세요.",
          "code": "print(d.___('score', 0))",
          "hint": "get(키, 기본값)으로 KeyError 없이 안전하게 조회합니다.",
          "options": [
            {
              "text": "get",
              "correct": true
            },
            {
              "text": "find",
              "correct": false
            },
            {
              "text": "fetch",
              "correct": false
            },
            {
              "text": "search",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 빈도 세기 패턴",
          "prompt": "리스트 ['a','b','a','c']의 빈도를 딕셔너리로 세세요.",
          "code": "cnt[x] = cnt.get(x, 0) ___ 1",
          "hint": "없으면 0 + 1 = 1로 시작, 있으면 기존값 + 1.",
          "options": [
            {
              "text": "+ 1",
              "correct": true
            },
            {
              "text": "- 1",
              "correct": false
            },
            {
              "text": "* 1",
              "correct": false
            },
            {
              "text": "+=",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — set 중복 제거",
          "prompt": "리스트 [1,2,2,3,3,3]의 중복을 제거하세요.",
          "code": "unique = list(___(arr))",
          "hint": "set()은 중복을 자동으로 제거합니다.",
          "options": [
            {
              "text": "set",
              "correct": true
            },
            {
              "text": "unique",
              "correct": false
            },
            {
              "text": "list",
              "correct": false
            },
            {
              "text": "dedup",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "딕셔너리 기본 조작",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 키로 값 접근",
          "prompt": "딕셔너리 {'name':'수','age':25}에서 이름을 꺼내 출력하세요.",
          "code": "print(person[___])",
          "hint": "딕셔너리는 person['키'] 형태로 접근합니다.",
          "options": [
            {
              "text": "'name'",
              "correct": true
            },
            {
              "text": "name",
              "correct": false
            },
            {
              "text": "0",
              "correct": false
            },
            {
              "text": "person.name",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — get()으로 안전 조회",
          "prompt": "딕셔너리에 없는 키 'science'를 조회할 때 기본값 0을 반환하도록 하세요.",
          "code": "print(scores.___('science', 0))",
          "hint": "get(키, 기본값): 키가 없어도 KeyError 없이 기본값을 반환합니다.",
          "options": [
            {
              "text": "get",
              "correct": true
            },
            {
              "text": "find",
              "correct": false
            },
            {
              "text": "fetch",
              "correct": false
            },
            {
              "text": "search",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 빈도 세기 패턴",
          "prompt": "리스트 ['a','b','a','c','b','a']에서 각 요소의 빈도를 딕셔너리로 세세요.",
          "code": "cnt[x] = cnt.get(x, 0) ___ 1",
          "hint": "없으면 0, 있으면 기존값 + 1. 핵심 빈도 세기 패턴입니다!",
          "options": [
            {
              "text": "+ 1",
              "correct": true
            },
            {
              "text": "- 1",
              "correct": false
            },
            {
              "text": "* 1",
              "correct": false
            },
            {
              "text": "+=",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — items()로 순회",
          "prompt": "딕셔너리 {'a':1,'b':2,'c':3}의 키와 값을 'a: 1' 형식으로 출력하세요.",
          "code": "for key, val in d.___():",
          "hint": "d.items()는 (키, 값) 쌍을 반환합니다.",
          "options": [
            {
              "text": "items",
              "correct": true
            },
            {
              "text": "pairs",
              "correct": false
            },
            {
              "text": "each",
              "correct": false
            },
            {
              "text": "entries",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 5 — Counter로 최빈값",
          "prompt": "Counter를 사용해 리스트에서 가장 많이 등장하는 값 상위 2개를 출력하세요.",
          "code": "from collections import ___",
          "hint": "Counter는 빈도 세기 전용 딕셔너리. most_common(n)으로 상위 n개를 바로 구합니다.",
          "options": [
            {
              "text": "Counter",
              "correct": true
            },
            {
              "text": "count",
              "correct": false
            },
            {
              "text": "frequency",
              "correct": false
            },
            {
              "text": "dict",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "집합(set) 연산",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — set으로 중복 제거",
          "prompt": "리스트 [1,2,2,3,3,3]의 중복을 제거해 고유한 요소만 남긴 리스트를 만드세요.",
          "code": "unique = list(___(arr))",
          "hint": "set()은 중복을 자동으로 제거합니다. list()로 다시 변환하세요.",
          "options": [
            {
              "text": "set",
              "correct": true
            },
            {
              "text": "unique",
              "correct": false
            },
            {
              "text": "dedup",
              "correct": false
            },
            {
              "text": "distinct",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 교집합",
          "prompt": "두 집합 {1,2,3,4}와 {3,4,5,6}의 공통 요소를 구하세요.",
          "code": "common = a ___ b",
          "hint": "& 는 교집합, | 는 합집합, - 는 차집합입니다.",
          "options": [
            {
              "text": "&",
              "correct": true
            },
            {
              "text": "and",
              "correct": false
            },
            {
              "text": "|",
              "correct": false
            },
            {
              "text": "intersection",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 합집합과 차집합",
          "prompt": "집합 a={1,2,3}, b={2,3,4}의 합집합과 차집합을 각각 출력하세요.",
          "code": "print(a ___ b)  # 합집합",
          "hint": "| 는 합집합(둘 다 포함), - 는 차집합(a에만 있는 것)입니다.",
          "options": [
            {
              "text": "|",
              "correct": true
            },
            {
              "text": "&",
              "correct": false
            },
            {
              "text": "+",
              "correct": false
            },
            {
              "text": "or",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — 딕셔너리 컴프리헨션",
          "prompt": "리스트 [1,2,3,4,5]를 이용해 각 숫자를 키로, 제곱을 값으로 하는 딕셔너리를 만드세요.",
          "code": "sq_dict = {x: x**2 ___ x in arr}",
          "hint": "딕셔너리 컴프리헨션: {키: 값 for 변수 in 이터러블}",
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
      "title": "get()으로 안전하게 조회",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — get()으로 안전하게 조회",
          "prompt": "딕셔너리에 없는 키를 조회할 때 KeyError 없이 기본값을 반환하는 코드를 완성하세요. 'science' 키가 없으면 0을 반환합니다.",
          "code": "print(scores.___(  'science', 0))",
          "hint": "get(키, 기본값): 키가 없어도 KeyError 없이 기본값을 반환합니다. 코딩테스트 필수!",
          "options": [
            {
              "text": "get",
              "correct": true
            },
            {
              "text": "find",
              "correct": false
            },
            {
              "text": "fetch",
              "correct": false
            },
            {
              "text": "search",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — get으로 기본값 설정",
          "prompt": "딕셔너리 d = {'a':1}에서 없는 키 'b'를 get으로 조회하되 기본값 -1을 반환하세요.",
          "code": "print(d.get('b', ___))",
          "hint": "get(키, 기본값): 키가 없을 때 기본값을 반환합니다.",
          "options": [
            {
              "text": "-1",
              "correct": true
            },
            {
              "text": "0",
              "correct": false
            },
            {
              "text": "None",
              "correct": false
            },
            {
              "text": "''",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — get으로 빈도 카운팅",
          "prompt": "리스트 ['a','b','a','c']의 각 요소 빈도를 get을 이용해 딕셔너리로 만드세요.",
          "code": "cnt[x] = cnt.get(x, ___ ) + 1",
          "hint": "처음 등장하면 get이 0을 반환하고 +1로 1이 됩니다.",
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
              "text": "None",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "딕셔너리 빈도 세기 패턴",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 딕셔너리 빈도 세기 패턴",
          "prompt": "리스트 arr = ['a', 'b', 'a', 'c', 'b', 'a']에서 각 요소가 몇 번 등장하는지 딕셔너리로 세는 코드를 완성하세요. 결과: {'a': 3, 'b': 2, 'c': 1}",
          "code": "counter[x] = counter.get(x, 0) ___ 1",
          "hint": "빈도 세기 핵심 패턴: counter.get(x, 0) + 1 → 없으면 0, 있으면 기존값 + 1",
          "options": [
            {
              "text": "+ 1",
              "correct": true
            },
            {
              "text": "- 1",
              "correct": false
            },
            {
              "text": "* 1",
              "correct": false
            },
            {
              "text": "+=",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 단어 빈도 세기",
          "prompt": "문자열 'apple banana apple cherry banana apple'에서 각 단어의 빈도를 딕셔너리로 출력하세요.",
          "code": "for word in s.___():\n    counter[word] = counter.get(word, 0) + 1",
          "hint": "split()으로 문자열을 단어로 분리한 뒤 각 단어를 키로 사용합니다.",
          "options": [
            {
              "text": "split",
              "correct": true
            },
            {
              "text": "strip",
              "correct": false
            },
            {
              "text": "join",
              "correct": false
            },
            {
              "text": "replace",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 빈도 딕셔너리에서 최빈값 찾기",
          "prompt": "리스트 [1,2,2,3,3,3,4]의 빈도를 딕셔너리로 만든 뒤 가장 많이 등장한 값을 출력하세요.",
          "code": "mode = max(cnt, key=cnt.___)",
          "hint": "max(cnt, key=cnt.get)은 value가 가장 큰 key를 반환합니다.",
          "options": [
            {
              "text": "get",
              "correct": true
            },
            {
              "text": "values",
              "correct": false
            },
            {
              "text": "keys",
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
      "title": "딕셔너리 순회 — items()",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 딕셔너리 순회 — items()",
          "prompt": "딕셔너리 d = {'a': 1, 'b': 2, 'c': 3}의 키와 값을 'a: 1' 형식으로 출력하는 코드를 완성하세요. 키-값 쌍을 동시에 꺼내는 메서드를 사용합니다.",
          "code": "for key, val in d.___():",
          "hint": "d.items()는 (키, 값) 쌍을 반환합니다. d.keys(), d.values()도 있어요.",
          "options": [
            {
              "text": "items",
              "correct": true
            },
            {
              "text": "pairs",
              "correct": false
            },
            {
              "text": "each",
              "correct": false
            },
            {
              "text": "entries",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — keys()와 values() 순회",
          "prompt": "딕셔너리 {'a':1,'b':2,'c':3}의 키만, 값만 각각 출력하세요.",
          "code": "for k in d.___():\n    print(k)",
          "hint": "keys()는 키 뷰, values()는 값 뷰를 반환합니다.",
          "options": [
            {
              "text": "keys",
              "correct": true
            },
            {
              "text": "values",
              "correct": false
            },
            {
              "text": "items",
              "correct": false
            },
            {
              "text": "get",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — items()로 조건부 필터링",
          "prompt": "딕셔너리 {'a':10,'b':3,'c':7,'d':1}에서 값이 5 이상인 키-값 쌍을 출력하세요.",
          "code": "for k, v in d.___():\n    if v >= 5:",
          "hint": "items()는 (키, 값) 튜플 쌍을 반환합니다. 조건 필터링에 유용합니다.",
          "options": [
            {
              "text": "items",
              "correct": true
            },
            {
              "text": "keys",
              "correct": false
            },
            {
              "text": "values",
              "correct": false
            },
            {
              "text": "get",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "in으로 키 존재 확인",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — in으로 키 존재 확인",
          "prompt": "딕셔너리 d = {'a': 1, 'b': 2}에 키 'a'가 존재하면 '키 존재'를 출력하는 코드를 완성하세요.",
          "code": "if 'a' ___ d:",
          "hint": "in 키워드는 딕셔너리의 키 존재 여부를 확인합니다.",
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
          "question": "드릴 2 — not in으로 키 없음 확인",
          "prompt": "딕셔너리 d = {'x':1,'y':2}에서 키 'z'가 없으면 '없음'을 출력하세요.",
          "code": "if 'z' ___ d:\n    print('없음')",
          "hint": "not in은 키가 딕셔너리에 없을 때 True입니다.",
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
              "text": "is not",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 키 존재 여부에 따라 값 업데이트",
          "prompt": "딕셔너리 d = {'a':1}에서 키 'b'가 없으면 추가, 있으면 값을 2배로 업데이트하는 코드를 완성하세요.",
          "code": "if key ___ d:\n    d[key] = 0",
          "hint": "not in으로 키 미존재를 확인 후 초기화하면 항상 안전하게 값을 업데이트할 수 있습니다.",
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
      "title": "set으로 중복 제거",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — set으로 중복 제거",
          "prompt": "리스트 arr = [1, 2, 2, 3, 3, 3]의 중복을 제거해 고유한 요소만 남긴 리스트 unique를 만드는 코드를 완성하세요.",
          "code": "unique = list(___(arr))",
          "hint": "set()은 중복을 자동으로 제거합니다. 다시 리스트가 필요하면 list()로 변환하세요.",
          "options": [
            {
              "text": "set",
              "correct": true
            },
            {
              "text": "unique",
              "correct": false
            },
            {
              "text": "dedup",
              "correct": false
            },
            {
              "text": "distinct",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — set으로 교집합 구하기",
          "prompt": "두 리스트 [1,2,3,4]와 [3,4,5,6]의 공통 요소를 집합으로 찾아 출력하세요.",
          "code": "common = set(a) ___ set(b)",
          "hint": "& 연산자는 두 집합의 교집합을 반환합니다.",
          "options": [
            {
              "text": "&",
              "correct": true
            },
            {
              "text": "|",
              "correct": false
            },
            {
              "text": "-",
              "correct": false
            },
            {
              "text": "^",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 중복 제거 후 정렬",
          "prompt": "리스트 [3,1,4,1,5,9,2,6,5,3]에서 중복을 제거하고 오름차순으로 정렬하세요.",
          "code": "result = sorted(___(arr))",
          "hint": "set()으로 중복 제거 후 sorted()로 정렬합니다.",
          "options": [
            {
              "text": "set",
              "correct": true
            },
            {
              "text": "list",
              "correct": false
            },
            {
              "text": "dict",
              "correct": false
            },
            {
              "text": "tuple",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "집합 교집합 연산",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 집합 교집합 연산",
          "prompt": "두 집합 a = {1, 2, 3, 4}와 b = {3, 4, 5, 6}의 공통 요소를 구해 common에 저장하는 코드를 완성하세요. 결과: {3, 4}",
          "code": "common = a ___ b",
          "hint": "집합 연산: & 교집합, | 합집합, - 차집합. 코딩테스트에서 자주 나와요!",
          "options": [
            {
              "text": "&",
              "correct": true
            },
            {
              "text": "and",
              "correct": false
            },
            {
              "text": "|",
              "correct": false
            },
            {
              "text": "intersection",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 합집합과 차집합",
          "prompt": "집합 a={1,2,3,4}와 b={3,4,5,6}의 합집합과 차집합(a-b)을 출력하세요.",
          "code": "print(a ___ b)  # 합집합\nprint(a - b)",
          "hint": "| 는 합집합(두 집합의 모든 요소), - 는 차집합(a에만 있는 요소)입니다.",
          "options": [
            {
              "text": "|",
              "correct": true
            },
            {
              "text": "&",
              "correct": false
            },
            {
              "text": "+",
              "correct": false
            },
            {
              "text": "^",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 대칭 차집합",
          "prompt": "집합 a={1,2,3,4}와 b={3,4,5,6}의 대칭 차집합(한쪽에만 있는 요소)을 출력하세요.",
          "code": "print(a ___ b)",
          "hint": "^ 는 대칭 차집합: 두 집합 중 한쪽에만 있는 요소들입니다.",
          "options": [
            {
              "text": "^",
              "correct": true
            },
            {
              "text": "|",
              "correct": false
            },
            {
              "text": "&",
              "correct": false
            },
            {
              "text": "-",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Counter로 빈도 쉽게",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — Counter로 빈도 쉽게",
          "prompt": "collections 모듈에서 빈도 계산 전용 클래스를 import해 리스트의 각 요소 빈도와 상위 2개를 구하는 코드를 완성하세요.",
          "code": "from collections import ___",
          "hint": "Counter는 빈도 세기 전용 딕셔너리입니다. most_common(n)으로 상위 n개를 바로 구해요.",
          "options": [
            {
              "text": "Counter",
              "correct": true
            },
            {
              "text": "count",
              "correct": false
            },
            {
              "text": "frequency",
              "correct": false
            },
            {
              "text": "dict",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — Counter로 최빈 2개",
          "prompt": "리스트 ['a','b','a','c','b','a','d']에서 Counter를 사용해 가장 많이 등장한 상위 2개를 출력하세요.",
          "code": "print(cnt.most_common(___))",
          "hint": "most_common(n)은 가장 많이 등장한 상위 n개를 (요소, 개수) 형태로 반환합니다.",
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
          "question": "드릴 3 — Counter로 문자 빈도 분석",
          "prompt": "문자열 'programming'의 각 문자 빈도를 Counter로 구하고 가장 많은 문자를 출력하세요.",
          "code": "print(cnt.most_common(1)[0][___])",
          "hint": "most_common(1)[0]은 (문자, 개수) 튜플, [0]은 그 중 문자(키)를 뜻합니다.",
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
              "text": "2",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "defaultdict 활용",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — defaultdict 활용",
          "prompt": "defaultdict(list)를 사용해 키 'a'에 1과 2를 리스트로 추가하는 코드를 완성하세요. 없는 키에 접근해도 KeyError가 발생하지 않습니다.",
          "code": "dd = defaultdict(___)",
          "hint": "defaultdict(list)는 없는 키에 접근할 때 자동으로 빈 리스트를 만들어줍니다.",
          "options": [
            {
              "text": "list",
              "correct": true
            },
            {
              "text": "int",
              "correct": false
            },
            {
              "text": "0",
              "correct": false
            },
            {
              "text": "dict",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — defaultdict(int)로 카운팅",
          "prompt": "defaultdict(int)를 사용해 리스트 [1,2,1,3,2,1]의 빈도를 출력하세요.",
          "code": "dd = defaultdict(___)",
          "hint": "defaultdict(int)는 존재하지 않는 키에 접근하면 자동으로 0을 초기값으로 설정합니다.",
          "options": [
            {
              "text": "int",
              "correct": true
            },
            {
              "text": "list",
              "correct": false
            },
            {
              "text": "str",
              "correct": false
            },
            {
              "text": "set",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — defaultdict(list)로 그룹핑",
          "prompt": "리스트 [('a',1),('b',2),('a',3),('b',4)]를 첫 번째 요소 기준으로 그룹핑하세요.",
          "code": "dd = defaultdict(___)",
          "hint": "defaultdict(list)는 키가 없을 때 자동으로 빈 리스트를 생성합니다.",
          "options": [
            {
              "text": "list",
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
              "text": "set",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "딕셔너리 컴프리헨션",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 딕셔너리 컴프리헨션",
          "prompt": "리스트 arr = [1, 2, 3, 4, 5]를 이용해 각 숫자를 키로, 제곱을 값으로 하는 딕셔너리를 한 줄로 만드는 코드를 완성하세요. 결과: {1:1, 2:4, 3:9, 4:16, 5:25}",
          "code": "sq_dict = {x: x**2 ___ x in arr}",
          "hint": "딕셔너리 컴프리헨션: {키: 값 for 변수 in 이터러블}",
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
          "question": "드릴 2 — 값 필터링 딕셔너리 컴프리헨션",
          "prompt": "딕셔너리 {'a':1,'b':5,'c':3,'d':7}에서 값이 4 이상인 것만 새 딕셔너리로 만드세요.",
          "code": "result = {k:v for k,v in d.items() if v ___ 4}",
          "hint": "딕셔너리 컴프리헨션에도 if 조건을 붙일 수 있습니다.",
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
              "text": "<",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 키-값 반전 딕셔너리",
          "prompt": "딕셔너리 {'a':1,'b':2,'c':3}의 키와 값을 서로 바꾼 딕셔너리를 만드세요.",
          "code": "reversed_d = {v:k for k,v in d.___()}",
          "hint": "items()로 키-값 쌍을 순회하면서 v:k로 반전시킵니다.",
          "options": [
            {
              "text": "items",
              "correct": true
            },
            {
              "text": "keys",
              "correct": false
            },
            {
              "text": "values",
              "correct": false
            },
            {
              "text": "get",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "최빈값 찾기 패턴",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 최빈값 찾기 패턴",
          "prompt": "리스트 arr = [1, 2, 2, 3, 3, 3]에서 가장 많이 등장하는 값(최빈값)을 딕셔너리를 이용해 구하는 코드를 완성하세요. 결과: 3",
          "code": "mode = max(cnt, key=cnt.___)",
          "hint": "max(딕셔너리, key=딕셔너리.get)은 값(value)이 최대인 키(key)를 반환합니다.",
          "options": [
            {
              "text": "get",
              "correct": true
            },
            {
              "text": "values",
              "correct": false
            },
            {
              "text": "items",
              "correct": false
            },
            {
              "text": "keys",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — sorted로 값 기준 정렬",
          "prompt": "딕셔너리 {'c':3,'a':1,'b':2}를 값 기준 오름차순으로 정렬해 출력하세요.",
          "code": "sorted_d = sorted(d.items(), key=lambda x: x[___])",
          "hint": "x[0]은 키, x[1]은 값입니다. 값 기준 정렬이면 x[1]을 key로 씁니다.",
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
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 최빈값이 여러 개일 때 모두 출력",
          "prompt": "리스트 [1,2,2,3,3,4]에서 빈도가 최대인 모든 값을 출력하세요.",
          "code": "max_freq = max(cnt.___())",
          "hint": "max(cnt.values())로 최대 빈도를 구한 뒤, 그 빈도와 같은 키들을 모읍니다.",
          "options": [
            {
              "text": "values",
              "correct": true
            },
            {
              "text": "keys",
              "correct": false
            },
            {
              "text": "items",
              "correct": false
            },
            {
              "text": "get",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "두 리스트를 딕셔너리로",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 두 리스트를 딕셔너리로",
          "prompt": "키 리스트 keys = ['a','b','c']와 값 리스트 vals = [1, 2, 3]을 합쳐 딕셔너리를 만드는 코드를 완성하세요. zip()과 dict()를 활용합니다.",
          "code": "d = dict(___(keys, vals))",
          "hint": "zip(a, b)은 두 이터러블을 쌍으로 묶습니다. dict()로 감싸면 바로 딕셔너리가 됩니다.",
          "options": [
            {
              "text": "zip",
              "correct": true
            },
            {
              "text": "map",
              "correct": false
            },
            {
              "text": "pair",
              "correct": false
            },
            {
              "text": "combine",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — zip으로 딕셔너리 업데이트",
          "prompt": "키 리스트 ['x','y','z']와 값 리스트 [10,20,30]으로 기존 딕셔너리 d = {}를 업데이트하세요.",
          "code": "d.update(___(keys, vals))",
          "hint": "update()에 zip(keys, vals)를 전달하면 (키, 값) 쌍으로 딕셔너리를 업데이트합니다.",
          "options": [
            {
              "text": "zip",
              "correct": true
            },
            {
              "text": "map",
              "correct": false
            },
            {
              "text": "dict",
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
          "question": "드릴 3 — 두 딕셔너리 병합",
          "prompt": "딕셔너리 d1 = {'a':1,'b':2}와 d2 = {'b':3,'c':4}를 병합하세요. 겹치는 키는 d2 값을 사용합니다.",
          "code": "merged = {**d1, **___}",
          "hint": "** 언패킹으로 두 딕셔너리를 합칩니다. 나중에 나온 d2의 값이 덮어씁니다.",
          "options": [
            {
              "text": "d2",
              "correct": true
            },
            {
              "text": "d1",
              "correct": false
            },
            {
              "text": "merged",
              "correct": false
            },
            {
              "text": "{}",
              "correct": false
            }
          ]
        }
      ]
    }
  ]
};
