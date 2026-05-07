import type { UnitSeed } from "../../../types";

export const unit5: UnitSeed = {
  "title": "Unit 5. HashMap & 자료구조",
  "description": "HashMap, HashSet, Stack, Queue, Collections, 빈도 카운팅",
  "lessons": [
    {
      "title": "HashMap 기본 — put/get/getOrDefault",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — put과 get",
          "prompt": "HashMap에서 값을 추가하는 메서드 이름을 완성하세요.\nmap.___(\"apple\", 3);",
          "code": "map.___(\"apple\", 3);",
          "hint": "HashMap에 키-값을 저장하는 메서드는 put()입니다. Python의 map['key'] = value에 해당합니다.",
          "options": [
            {
              "text": "put",
              "correct": true
            },
            {
              "text": "add",
              "correct": false
            },
            {
              "text": "set",
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
          "question": "드릴 2 — getOrDefault 빈도 카운팅",
          "prompt": "배열 원소의 빈도를 세는 코드를 완성하세요.",
          "code": "map.put(x, map.___(x, 0) + 1);",
          "hint": "getOrDefault(key, 0)은 key가 없으면 0을 반환합니다. 빈도 카운팅의 핵심 패턴입니다.",
          "options": [
            {
              "text": "getOrDefault",
              "correct": true
            },
            {
              "text": "get",
              "correct": false
            },
            {
              "text": "containsKey",
              "correct": false
            },
            {
              "text": "putIfAbsent",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — entrySet 순회",
          "prompt": "HashMap을 순회하는 코드를 완성하세요.",
          "code": "for (Map.Entry e : map.___())",
          "hint": "entrySet()은 Map.Entry 객체의 집합을 반환합니다. getKey()와 getValue()로 키/값에 접근합니다.",
          "options": [
            {
              "text": "entrySet",
              "correct": true
            },
            {
              "text": "items",
              "correct": false
            },
            {
              "text": "pairs",
              "correct": false
            },
            {
              "text": "keyValueSet",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — containsKey 확인",
          "prompt": "HashMap에 특정 키가 존재하는지 확인하는 코드를 완성하세요.",
          "code": "if (map.___Key(\"hello\"))",
          "hint": "containsKey()는 HashMap에 해당 키가 있으면 true를 반환합니다.",
          "options": [
            {
              "text": "contains",
              "correct": true
            },
            {
              "text": "has",
              "correct": false
            },
            {
              "text": "exists",
              "correct": false
            },
            {
              "text": "check",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "HashSet — 중복 제거",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — HashSet으로 중복 제거",
          "prompt": "배열에서 중복을 제거하는 HashSet 코드를 완성하세요.",
          "code": "HashSet set = new HashSet<>();",
          "hint": "제네릭에서 기본형 int 대신 래퍼 클래스 Integer를 씁니다.",
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
          "question": "드릴 2 — contains O(1) 탐색",
          "prompt": "HashSet에서 원소 포함 여부를 확인하는 메서드를 완성하세요.",
          "code": "System.out.println(set.___(2));",
          "hint": "contains()는 HashSet에 해당 원소가 있으면 true를 반환합니다. O(1) 탐색이 가능합니다.",
          "options": [
            {
              "text": "contains",
              "correct": true
            },
            {
              "text": "has",
              "correct": false
            },
            {
              "text": "includes",
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
          "question": "드릴 3 — Stack push/pop",
          "prompt": "Stack을 사용해 원소를 넣고 꺼내는 코드를 완성하세요.",
          "code": "stack.___(3);  // 넣기",
          "hint": "Stack은 LIFO(후입선출) 구조입니다. push()로 넣고 pop()으로 꺼냅니다.",
          "options": [
            {
              "text": "push",
              "correct": true
            },
            {
              "text": "add",
              "correct": false
            },
            {
              "text": "insert",
              "correct": false
            },
            {
              "text": "offer",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — Queue offer/poll",
          "prompt": "Queue를 사용해 원소를 넣고 꺼내는 코드를 완성하세요.",
          "code": "Queue queue = new ___<>();",
          "hint": "Queue는 인터페이스이므로 LinkedList나 ArrayDeque로 구현합니다. offer()로 추가, poll()로 제거합니다.",
          "options": [
            {
              "text": "LinkedList",
              "correct": true
            },
            {
              "text": "Queue",
              "correct": false
            },
            {
              "text": "ArrayList",
              "correct": false
            },
            {
              "text": "ArrayDeque",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "TreeMap & PriorityQueue",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — PriorityQueue 최솟값 poll",
          "prompt": "PriorityQueue에서 최솟값을 꺼내는 메서드를 완성하세요.",
          "code": "System.out.println(pq.___());",
          "hint": "poll()은 최솟값을 제거하고 반환합니다. peek()는 제거 없이 조회합니다.",
          "options": [
            {
              "text": "poll",
              "correct": true
            },
            {
              "text": "pop",
              "correct": false
            },
            {
              "text": "remove",
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
          "question": "드릴 2 — 최대 힙 선언",
          "prompt": "최댓값이 먼저 나오는 최대 힙을 선언하는 코드를 완성하세요.",
          "code": "new PriorityQueue<>(Collections.___());",
          "hint": "Collections.reverseOrder()를 생성자에 전달하면 최대 힙이 됩니다.",
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
              "text": "descending",
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
          "question": "드릴 3 — TreeMap 자동 정렬",
          "prompt": "TreeMap에 키를 넣으면 자동 정렬됩니다. 가장 작은 키를 반환하는 메서드를 완성하세요.",
          "code": "System.out.println(map.___Key());",
          "hint": "firstKey()는 TreeMap의 가장 작은(첫 번째) 키를 반환합니다.",
          "options": [
            {
              "text": "first",
              "correct": true
            },
            {
              "text": "min",
              "correct": false
            },
            {
              "text": "smallest",
              "correct": false
            },
            {
              "text": "low",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — Deque (양방향 큐)",
          "prompt": "Deque를 스택처럼 쓰는 코드를 완성하세요. 앞에서 추가하고 앞에서 꺼냅니다.",
          "code": "Deque deque = new ___<>();",
          "hint": "ArrayDeque는 Stack보다 빠른 Deque 구현체입니다. push/pop으로 스택처럼 사용합니다.",
          "options": [
            {
              "text": "ArrayDeque",
              "correct": true
            },
            {
              "text": "LinkedList",
              "correct": false
            },
            {
              "text": "Stack",
              "correct": false
            },
            {
              "text": "Queue",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "LinkedList와 Iterator",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — Queue offer/poll 순서",
          "prompt": "Queue는 FIFO입니다. offer로 세 원소를 넣고 poll한 결과를 완성하세요.",
          "code": "Queue q = new ___<>();",
          "hint": "Queue 인터페이스는 LinkedList나 ArrayDeque로 구현합니다. FIFO 순서로 poll됩니다.",
          "options": [
            {
              "text": "LinkedList",
              "correct": true
            },
            {
              "text": "ArrayList",
              "correct": false
            },
            {
              "text": "Stack",
              "correct": false
            },
            {
              "text": "ArrayDeque",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — Iterator hasNext/next",
          "prompt": "Iterator로 리스트를 순회하는 코드를 완성하세요.",
          "code": "while (it.___())",
          "hint": "hasNext()는 다음 원소가 있는지 확인합니다. next()는 다음 원소를 반환하고 이동합니다.",
          "options": [
            {
              "text": "hasNext",
              "correct": true
            },
            {
              "text": "hasMore",
              "correct": false
            },
            {
              "text": "hasElement",
              "correct": false
            },
            {
              "text": "next",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — Iterator로 안전한 삭제",
          "prompt": "반복 중 짝수를 안전하게 삭제하는 코드를 완성하세요.",
          "code": "if (v % 2 == 0) it.___;",
          "hint": "it.remove()는 Iterator가 마지막으로 반환한 원소를 안전하게 삭제합니다.",
          "options": [
            {
              "text": "remove()",
              "correct": true
            },
            {
              "text": "delete()",
              "correct": false
            },
            {
              "text": "pop()",
              "correct": false
            },
            {
              "text": "clear()",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — isEmpty로 종료 확인",
          "prompt": "Queue가 빌 때까지 처리하는 패턴을 완성하세요.",
          "code": "while (!q.___())",
          "hint": "isEmpty()는 컬렉션이 비어 있으면 true를 반환합니다. !isEmpty()가 참인 동안 poll합니다.",
          "options": [
            {
              "text": "isEmpty",
              "correct": true
            },
            {
              "text": "empty",
              "correct": false
            },
            {
              "text": "isNull",
              "correct": false
            },
            {
              "text": "hasNext",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Stack / Queue / Deque — DFS/BFS 필수 자료구조",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — ArrayDeque 스택 push",
          "prompt": "ArrayDeque를 스택으로 사용할 때 요소를 넣는 메서드를 완성하세요.",
          "code": "deque.___(1);",
          "hint": "ArrayDeque를 스택으로 쓸 때 push()로 넣고 pop()으로 꺼냅니다. LIFO 순서입니다.",
          "options": [
            {
              "text": "push",
              "correct": true
            },
            {
              "text": "offer",
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
          "question": "드릴 2 — Queue poll()",
          "prompt": "Queue의 맨 앞 원소를 제거하고 반환하는 메서드를 완성하세요.",
          "code": "int cur = q.___();",
          "hint": "poll()은 FIFO 순서로 앞에서 꺼냅니다. BFS의 핵심 연산입니다.",
          "options": [
            {
              "text": "poll",
              "correct": true
            },
            {
              "text": "pop",
              "correct": false
            },
            {
              "text": "remove",
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
          "question": "드릴 3 — BFS용 int[] Queue 선언",
          "prompt": "좌표와 거리를 함께 저장하는 BFS용 Queue를 선언하는 코드를 완성하세요.",
          "code": "Queue q = new ___<>();",
          "hint": "BFS에서 int[] 배열을 Queue에 넣어 좌표와 거리를 함께 관리합니다.",
          "options": [
            {
              "text": "LinkedList",
              "correct": true
            },
            {
              "text": "ArrayList",
              "correct": false
            },
            {
              "text": "ArrayDeque",
              "correct": false
            },
            {
              "text": "Stack",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — isEmpty 종료 조건",
          "prompt": "큐가 빌 때까지 BFS를 수행하는 루프 조건을 완성하세요.",
          "code": "while (!q.___())",
          "hint": "isEmpty()가 true이면 큐가 비어있습니다. BFS 루프 종료 조건입니다.",
          "options": [
            {
              "text": "isEmpty",
              "correct": true
            },
            {
              "text": "empty",
              "correct": false
            },
            {
              "text": "isNull",
              "correct": false
            },
            {
              "text": "size==0",
              "correct": false
            }
          ]
        }
      ]
    }
  ]
};
