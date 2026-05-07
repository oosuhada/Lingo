import type { UnitSeed } from "../../../types";

export const unit4: UnitSeed = {
  "title": "Unit 4. 배열 & ArrayList",
  "description": "배열 선언/초기화, Arrays 유틸, ArrayList, 제네릭, 2차원 배열",
  "lessons": [
    {
      "title": "종합 기본개념 — 배열 & ArrayList",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 배열 선언",
          "prompt": "크기 5인 int 배열을 선언하는 코드를 완성하세요.\nint[] arr = new int[___];",
          "code": "int[] arr = new int[___];",
          "hint": "배열 크기를 대괄호 안에 숫자로 지정합니다.",
          "options": [
            {
              "text": "5",
              "correct": true
            },
            {
              "text": "[5]",
              "correct": false
            },
            {
              "text": "(5)",
              "correct": false
            },
            {
              "text": "'5'",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 배열 길이 속성",
          "prompt": "배열의 길이를 반환하는 속성을 완성하세요.\nint len = arr.___;",
          "code": "int len = arr.___;",
          "hint": "배열의 길이는 .length (괄호 없음)입니다. ArrayList의 .size()와 다릅니다.",
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
              "text": "len()",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — Arrays.sort 정렬",
          "prompt": "배열을 오름차순으로 정렬하는 코드를 완성하세요.",
          "code": "___.sort(arr);",
          "hint": "배열 정렬은 Arrays.sort(), 출력은 Arrays.toString()을 사용합니다.",
          "options": [
            {
              "text": "Arrays",
              "correct": true
            },
            {
              "text": "Collections",
              "correct": false
            },
            {
              "text": "Array",
              "correct": false
            },
            {
              "text": "Sort",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — 2차원 배열 접근",
          "prompt": "2차원 배열의 1행 2열 원소를 읽는 코드를 완성하세요.\nint v = matrix[___][___];",
          "code": "int v = matrix[___][___];  // 2행 3열",
          "hint": "2차원 배열: matrix[행인덱스][열인덱스]. 인덱스는 0부터 시작합니다.",
          "options": [
            {
              "text": "1][2",
              "correct": true
            },
            {
              "text": "2][3",
              "correct": false
            },
            {
              "text": "0][1",
              "correct": false
            },
            {
              "text": "1][1",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "ArrayList 기본 조작",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — ArrayList 선언",
          "prompt": "Integer 타입 ArrayList를 선언하는 코드를 완성하세요.",
          "code": "ArrayList list = new ArrayList<>();",
          "hint": "제네릭에서 int 대신 래퍼 클래스 Integer를 사용합니다.",
          "options": [
            {
              "text": "Integer",
              "correct": true
            },
            {
              "text": "int",
              "correct": false
            },
            {
              "text": "number",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — add와 get",
          "prompt": "ArrayList에서 요소를 추가하고 조회하는 메서드를 완성하세요.",
          "code": "String s = list.___(0);",
          "hint": "ArrayList에서 인덱스로 원소를 읽을 때는 .get(인덱스)를 씁니다.",
          "options": [
            {
              "text": "get",
              "correct": true
            },
            {
              "text": "read",
              "correct": false
            },
            {
              "text": "fetch",
              "correct": false
            },
            {
              "text": "access",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — size() 메서드",
          "prompt": "ArrayList의 크기를 반환하는 메서드를 완성하세요.\nint n = list.___();",
          "code": "int n = list.___();",
          "hint": "ArrayList 크기는 .size() (메서드). 배열의 .length와 구분하세요!",
          "options": [
            {
              "text": "size",
              "correct": true
            },
            {
              "text": "length",
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
          "question": "드릴 4 — Collections.sort 정렬",
          "prompt": "ArrayList를 오름차순으로 정렬하는 코드를 완성하세요.",
          "code": "___.sort(list);",
          "hint": "ArrayList 정렬은 Collections.sort(list). 배열의 Arrays.sort(arr)와 구분하세요.",
          "options": [
            {
              "text": "Collections",
              "correct": true
            },
            {
              "text": "Arrays",
              "correct": false
            },
            {
              "text": "List",
              "correct": false
            },
            {
              "text": "Sort",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Arrays 유틸 — 정렬·복사·채우기",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — Arrays.fill",
          "prompt": "배열을 모두 -1로 초기화하는 코드를 완성하세요.",
          "code": "Arrays.___(arr, -1);",
          "hint": "Arrays.fill(배열, 값)은 배열 전체를 지정한 값으로 채웁니다.",
          "options": [
            {
              "text": "fill",
              "correct": true
            },
            {
              "text": "set",
              "correct": false
            },
            {
              "text": "init",
              "correct": false
            },
            {
              "text": "assign",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — Arrays.copyOf",
          "prompt": "배열의 앞 3개 원소만 복사하는 코드를 완성하세요.",
          "code": "int[] copy = Arrays.___(arr, 3);",
          "hint": "Arrays.copyOf(원본, 길이)는 원본의 앞 n개 원소를 새 배열로 복사합니다.",
          "options": [
            {
              "text": "copyOf",
              "correct": true
            },
            {
              "text": "copy",
              "correct": false
            },
            {
              "text": "slice",
              "correct": false
            },
            {
              "text": "subArray",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — Arrays.copyOfRange",
          "prompt": "배열에서 인덱스 2~4 범위를 복사하는 코드를 완성하세요.",
          "code": "int[] sub = Arrays.copyOfRange(arr, 2, ___);",
          "hint": "copyOfRange(arr, from, to)는 [from, to) 범위를 복사합니다. to는 포함되지 않습니다.",
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
              "text": "3",
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
          "question": "드릴 4 — 배열 내림차순 정렬",
          "prompt": "Integer 배열을 내림차순으로 정렬하는 코드를 완성하세요.",
          "code": "Arrays.sort(arr, Collections.___());",
          "hint": "Collections.reverseOrder()는 내림차순 Comparator를 반환합니다. int[]가 아닌 Integer[]에만 사용 가능합니다.",
          "options": [
            {
              "text": "reverseOrder",
              "correct": true
            },
            {
              "text": "reverse",
              "correct": false
            },
            {
              "text": "descOrder",
              "correct": false
            },
            {
              "text": "sortDesc",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "ArrayList 고급 — 변환, 정렬, 스트림",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — Collections.max",
          "prompt": "리스트에서 최댓값을 구하는 코드를 완성하세요.",
          "code": "int max = Collections.___(list);",
          "hint": "Collections.max()는 리스트에서 최댓값을 반환합니다.",
          "options": [
            {
              "text": "max",
              "correct": true
            },
            {
              "text": "maximum",
              "correct": false
            },
            {
              "text": "biggest",
              "correct": false
            },
            {
              "text": "sort",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — Collections.reverse",
          "prompt": "리스트를 역순으로 뒤집는 코드를 완성하세요.",
          "code": "Collections.___(list);",
          "hint": "Collections.reverse()는 리스트를 제자리에서 뒤집습니다. 원본이 수정됩니다.",
          "options": [
            {
              "text": "reverse",
              "correct": true
            },
            {
              "text": "reversed",
              "correct": false
            },
            {
              "text": "flip",
              "correct": false
            },
            {
              "text": "sort",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — Arrays.asList로 초기화",
          "prompt": "배열 리터럴로 ArrayList를 초기화하는 코드를 완성하세요.",
          "code": "new ArrayList<>(___.asList(\"a\", \"b\", \"c\"))",
          "hint": "Arrays.asList(...)로 초기 값을 지정하고, new ArrayList<>()로 감싸면 가변 리스트가 됩니다.",
          "options": [
            {
              "text": "Arrays",
              "correct": true
            },
            {
              "text": "Collections",
              "correct": false
            },
            {
              "text": "List",
              "correct": false
            },
            {
              "text": "Array",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — Comparator 람다 정렬",
          "prompt": "문자열 리스트를 길이 오름차순으로 정렬하는 람다를 완성하세요.",
          "code": "list.sort((a, b) -> a.___() - b.___());",
          "hint": "Comparator 람다: (a, b) -> 양수면 b가 앞으로, 음수면 a가 앞으로. a.length() - b.length()는 길이 오름차순.",
          "options": [
            {
              "text": "length",
              "correct": true
            },
            {
              "text": "size",
              "correct": false
            },
            {
              "text": "compareTo",
              "correct": false
            },
            {
              "text": "hashCode",
              "correct": false
            }
          ]
        }
      ]
    }
  ]
};
