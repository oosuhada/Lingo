import type { UnitSeed } from "../../../types";

export const unit8: UnitSeed = {
  "title": "Unit 8. 정렬 & 탐색",
  "description": "Arrays.sort, Comparator, Collections.sort, 이진탐색, 람다식",
  "lessons": [
    {
      "title": "Arrays.sort와 기본 정렬",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — Arrays.sort 기본",
          "prompt": "배열을 오름차순으로 정렬하는 코드를 완성하세요.",
          "code": "___.sort(arr);",
          "hint": "기본형 배열(int[])의 정렬은 Arrays.sort()를 사용합니다.",
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
          "question": "드릴 2 — Comparator 람다 정렬",
          "prompt": "문자열 배열을 길이 기준 오름차순으로 정렬하는 람다를 완성하세요.",
          "code": "Arrays.sort(words, (a, b) -> a.___() - b.___());",
          "hint": "람다 Comparator: (a, b) -> 양수면 b가 앞, 음수면 a가 앞. a.length() - b.length()는 오름차순.",
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
              "text": "charAt",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 2D 배열 정렬",
          "prompt": "2차원 배열을 첫 번째 열 기준 오름차순으로 정렬하는 코드를 완성하세요.",
          "code": "Arrays.sort(arr, (a, b) -> a[0] - b[___]);",
          "hint": "a[0]은 각 행의 첫 번째 원소. a[0] - b[0] 이면 첫 번째 열 기준 오름차순 정렬.",
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
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — Collections.sort 내림차순",
          "prompt": "ArrayList를 내림차순으로 정렬하는 코드를 완성하세요.",
          "code": "Collections.sort(list, Collections.___());",
          "hint": "Collections.reverseOrder()는 내림차순 Comparator를 반환합니다.",
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
              "text": "sortDesc",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "이진 탐색과 최솟값/최댓값",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — binarySearch 기본",
          "prompt": "정렬된 배열에서 이진 탐색으로 값 5의 인덱스를 찾는 코드를 완성하세요.",
          "code": "int idx = Arrays.___(arr, 5);",
          "hint": "Arrays.binarySearch(배열, 찾을값)은 정렬된 배열에서 해당 값의 인덱스를 반환합니다.",
          "options": [
            {
              "text": "binarySearch",
              "correct": true
            },
            {
              "text": "search",
              "correct": false
            },
            {
              "text": "find",
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
          "question": "드릴 2 — 스트림 최댓값",
          "prompt": "배열의 최댓값을 스트림으로 구하는 코드를 완성하세요.",
          "code": "int max = Arrays.stream(arr).___().getAsInt();",
          "hint": "Arrays.stream(arr).max()는 OptionalInt를 반환합니다. getAsInt()로 값을 꺼냅니다.",
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
              "text": "largest",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 직접 최솟값 탐색",
          "prompt": "반복문으로 배열의 최솟값을 찾는 코드를 완성하세요.",
          "code": "if (x ___ min) min = x;",
          "hint": "현재 원소가 min보다 작으면 min을 갱신합니다.",
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
          "question": "드릴 4 — 정렬 후 이진탐색",
          "prompt": "배열을 정렬한 후 이진 탐색하는 코드의 순서를 올바르게 배치하세요.",
          "code": "___.sort(arr);  // 먼저 정렬!",
          "hint": "binarySearch는 반드시 정렬된 배열에서 사용해야 합니다. sort() → binarySearch() 순서!",
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
              "text": "List",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "완전탐색 — 브루트포스 패턴",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 이중 for 완전탐색",
          "prompt": "배열에서 두 수의 합이 target인 인덱스를 찾는 코드를 완성하세요.",
          "code": "for (int j = i + 1; j < nums.___; j++)",
          "hint": "j는 i+1부터 시작해 중복 쌍을 방지합니다. nums.length는 배열 길이입니다.",
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
          "question": "드릴 2 — HashMap으로 O(n) Two Sum",
          "prompt": "HashMap을 이용해 O(n)으로 Two Sum을 해결하는 코드를 완성하세요.",
          "code": "int need = ___ - nums[i];",
          "hint": "현재 원소의 보완값(need = target - nums[i])이 이미 본 값인지 HashMap에서 O(1)으로 확인합니다.",
          "options": [
            {
              "text": "target",
              "correct": true
            },
            {
              "text": "sum",
              "correct": false
            },
            {
              "text": "total",
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
          "question": "드릴 3 — 부분합 최댓값",
          "prompt": "배열의 연속된 부분합 중 최댓값을 구하는 코드(카데인 알고리즘)를 완성하세요.",
          "code": "curSum = Math.max(arr[i], ___ + arr[i]);",
          "hint": "카데인: 현재 원소 단독 vs 이전 구간에 현재 원소를 더한 것 중 큰 쪽을 선택합니다.",
          "options": [
            {
              "text": "curSum",
              "correct": true
            },
            {
              "text": "maxSum",
              "correct": false
            },
            {
              "text": "arr[0]",
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
          "question": "드릴 4 — 비트마스크 완전탐색",
          "prompt": "배열에서 가능한 모든 부분집합의 합을 출력하는 비트마스크 코드를 완성하세요.",
          "code": "for (int mask = 1; mask < (1 << ___); mask++)",
          "hint": "n개의 원소가 있으면 2^n개의 부분집합이 존재합니다. 1 << n은 2^n을 의미합니다.",
          "options": [
            {
              "text": "n",
              "correct": true
            },
            {
              "text": "n-1",
              "correct": false
            },
            {
              "text": "n+1",
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
      "title": "재귀 — 메서드 호출과 DFS",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 재귀 기저 조건",
          "prompt": "피보나치 수열의 재귀 기저 조건을 완성하세요.",
          "code": "if (n <= 1) ___ n;",
          "hint": "기저 조건에서 return으로 재귀를 멈춥니다. n이 0 또는 1이면 그 값 자체를 반환합니다.",
          "options": [
            {
              "text": "return",
              "correct": true
            },
            {
              "text": "yield",
              "correct": false
            },
            {
              "text": "output",
              "correct": false
            },
            {
              "text": "print",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — DFS visited 체크",
          "prompt": "DFS에서 방문 여부를 체크하는 코드를 완성하세요.",
          "code": "if (!visited[i]) ___(i);",
          "hint": "방문하지 않은 노드만 dfs()를 호출합니다. visited 배열로 재방문을 방지합니다.",
          "options": [
            {
              "text": "dfs",
              "correct": true
            },
            {
              "text": "bfs",
              "correct": false
            },
            {
              "text": "visit",
              "correct": false
            },
            {
              "text": "check",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 팩토리얼 재귀",
          "prompt": "n 팩토리얼을 재귀로 구하는 코드를 완성하세요.",
          "code": "return n * factorial(___ - 1);",
          "hint": "factorial(n) = n * factorial(n-1)입니다. n이 1 이하면 1을 반환합니다.",
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
              "text": "1",
              "correct": false
            },
            {
              "text": "i",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — 백트래킹 복원",
          "prompt": "백트래킹에서 선택을 취소(복원)하는 코드를 완성하세요.",
          "code": "cur.remove(cur.___ - 1);  // 복원",
          "hint": "cur.size() - 1은 마지막 인덱스입니다. remove()로 마지막 원소를 삭제해 이전 상태로 복원합니다.",
          "options": [
            {
              "text": "size()",
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
              "text": "last",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "BFS — 너비우선탐색",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — Queue를 이용한 BFS",
          "prompt": "BFS에서 큐에서 원소를 꺼내는 메서드를 완성하세요.",
          "code": "int cur = q.___();",
          "hint": "Queue의 poll()은 맨 앞 원소를 제거하고 반환합니다. BFS의 핵심 연산입니다.",
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
          "question": "드릴 2 — 방향벡터 활용",
          "prompt": "2D 격자에서 상하좌우 이웃을 탐색하는 방향벡터를 완성하세요.",
          "code": "int[] dx = {0, 0, ___, -1};",
          "hint": "dx[]: 행 변화 (하, 상, 우, 좌). dy[]: 열 변화. {0,0,1,-1}과 {1,-1,0,0} 조합으로 4방향.",
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
          "question": "드릴 3 — 범위 체크",
          "prompt": "BFS에서 격자 범위를 벗어나지 않는지 확인하는 조건을 완성하세요.",
          "code": "if (nx >= 0 && nx = 0 && ny < ___)",
          "hint": "행과 열 모두 [0, n) 범위 내에 있어야 유효한 좌표입니다.",
          "options": [
            {
              "text": "n",
              "correct": true
            },
            {
              "text": "n-1",
              "correct": false
            },
            {
              "text": "n+1",
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
          "question": "드릴 4 — 방문 체크 시점",
          "prompt": "BFS에서 중복 방문 방지를 위해 방문 체크를 하는 올바른 시점을 선택하세요.",
          "code": "visited[next] = ___; // 큐에 넣을 때 체크!",
          "hint": "큐에 넣는 시점에 visited를 true로 설정해야 같은 노드가 여러 번 큐에 들어가는 것을 막습니다.",
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
              "text": "null",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Dynamic Programming 기초",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 메모이제이션",
          "prompt": "피보나치를 메모이제이션으로 구현할 때 캐시를 확인하는 코드를 완성하세요.",
          "code": "if (memo[n] != 0) return memo[___];",
          "hint": "memo[n]에 값이 있으면 이미 계산된 것이므로 바로 반환합니다.",
          "options": [
            {
              "text": "n",
              "correct": true
            },
            {
              "text": "n-1",
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
          "question": "드릴 2 — 바텀업 DP 점화식",
          "prompt": "계단 오르기 DP에서 점화식을 완성하세요. 한 번에 1칸 또는 2칸 오를 수 있습니다.",
          "code": "dp[i] = dp[i-1] + dp[___];",
          "hint": "i번째 계단에 도달하는 방법 = (i-1)에서 1칸 + (i-2)에서 2칸.",
          "options": [
            {
              "text": "i-2",
              "correct": true
            },
            {
              "text": "i-1",
              "correct": false
            },
            {
              "text": "i",
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
          "question": "드릴 3 — 배열 초기화 (DP 초기값)",
          "prompt": "DP 배열을 특정 값으로 초기화하는 Arrays.fill 코드를 완성하세요.",
          "code": "Arrays.fill(dp, Integer.___);",
          "hint": "Integer.MAX_VALUE는 int의 최댓값(약 21억)입니다. 최단거리 DP에서 초기 INF 값으로 씁니다.",
          "options": [
            {
              "text": "MAX_VALUE",
              "correct": true
            },
            {
              "text": "MIN_VALUE",
              "correct": false
            },
            {
              "text": "INFINITY",
              "correct": false
            },
            {
              "text": "MAX_INT",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — LCS (2D DP)",
          "prompt": "두 문자열의 최장 공통 부분수열(LCS) 길이를 구하는 2D DP를 완성하세요.",
          "code": "dp[i][j] = dp[i-1][j-1] + ___;",
          "hint": "두 문자가 같으면 대각선+1, 다르면 위쪽/왼쪽 중 큰 값을 사용합니다.",
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
              "text": "dp[i][j]",
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
      "title": "그래프 표현 — 인접 리스트 (BFS/DFS 필수)",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 인접 리스트 초기화",
          "prompt": "각 노드에 ArrayList를 초기화하는 코드를 완성하세요.",
          "code": "graph[i] = new ___<>();",
          "hint": "각 노드에 빈 ArrayList를 할당해 인접 노드 목록을 저장합니다.",
          "options": [
            {
              "text": "ArrayList",
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
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 양방향 간선 추가",
          "prompt": "무방향 그래프에서 u-v 간선을 양방향으로 추가하는 코드를 완성하세요.",
          "code": "graph[v].add(___);",
          "hint": "무방향 그래프에서 u→v와 v→u 모두 추가해야 양방향 연결이 됩니다.",
          "options": [
            {
              "text": "u",
              "correct": true
            },
            {
              "text": "v",
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
          "question": "드릴 3 — 이웃 노드 for-each 순회",
          "prompt": "인접 리스트에서 이웃 노드를 순회하는 for-each를 완성하세요.",
          "code": "for (int next : graph[___])",
          "hint": "graph[node]는 node의 이웃 노드 리스트입니다. for-each로 이웃을 순회합니다.",
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
              "text": "cur",
              "correct": false
            },
            {
              "text": "node",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — BFS 최단 거리 계산",
          "prompt": "BFS에서 이웃 노드의 거리를 계산하는 코드를 완성하세요.",
          "code": "dist[next] = dist[cur] + ___;",
          "hint": "BFS에서 이웃 노드의 거리 = 현재 노드의 거리 + 1입니다.",
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
              "text": "dist[cur]",
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
      "title": "Comparator 심화 — 복합 기준 정렬",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 문자열 길이 오름차순 정렬",
          "prompt": "문자열 배열을 길이 기준 오름차순으로 정렬하는 람다를 완성하세요.",
          "code": "Arrays.sort(words, (a, b) -> a.___() - b.___());",
          "hint": "a.length() - b.length()는 길이 오름차순 Comparator입니다.",
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
              "text": "charAt",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 복합 기준 (길이 → 사전순)",
          "prompt": "길이 오름차순, 같으면 사전순으로 정렬하는 람다를 완성하세요.",
          "code": "return a.___(b);",
          "hint": "String.compareTo()는 사전순 비교 결과를 정수로 반환합니다.",
          "options": [
            {
              "text": "compareTo",
              "correct": true
            },
            {
              "text": "equals",
              "correct": false
            },
            {
              "text": "compare",
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
          "question": "드릴 3 — 2D 배열 복합 기준 정렬",
          "prompt": "첫 열 오름차순, 같으면 둘째 열 내림차순으로 정렬하는 코드를 완성하세요.",
          "code": "return b[1] - a[___];",
          "hint": "b[1] - a[1]은 두 번째 열 내림차순입니다.",
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
          "question": "드릴 4 — Integer.compare 오버플로우 방지",
          "prompt": "오버플로우 없이 안전하게 Integer를 비교하는 방법을 완성하세요.",
          "code": "Arrays.sort(arr, (a, b) -> Integer.___(a, b));",
          "hint": "Integer.compare(a,b)는 오버플로우 없이 안전한 비교를 제공합니다.",
          "options": [
            {
              "text": "compare",
              "correct": true
            },
            {
              "text": "compareTo",
              "correct": false
            },
            {
              "text": "equals",
              "correct": false
            },
            {
              "text": "subtract",
              "correct": false
            }
          ]
        }
      ]
    }
  ]
};
