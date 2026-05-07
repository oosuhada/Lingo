import type { LessonSeed, UnitSeed } from "../types";

type CodeChallengeSeed = {
  question: string;
  prompt: string;
  code: string;
  hint: string;
  answer: string;
  alt: string[];
};

type CodeLessonSeed = {
  title: string;
  challenges: CodeChallengeSeed[];
};

type CodeUnitSeed = {
  title: string;
  description: string;
  lessons: CodeLessonSeed[];
};

const makeLesson = (lesson: CodeLessonSeed): LessonSeed => ({
  title: lesson.title,
  challenges: lesson.challenges.map((challenge) => ({
    type: "SELECT",
    question: challenge.question,
    prompt: challenge.prompt,
    code: challenge.code,
    hint: challenge.hint,
    options: [
      { text: challenge.answer, correct: true },
      ...challenge.alt.map((text) => ({ text, correct: false })),
    ],
  })),
});

const makeUnits = (units: CodeUnitSeed[]): UnitSeed[] =>
  units.map((unit) => ({
    title: unit.title,
    description: unit.description,
    lessons: unit.lessons.map(makeLesson),
  }));

export const pythonSupplementUnits = makeUnits([
  {
    title: "Unit 7. 문자열 심화",
    description: "slicing, split/join, count/find, format patterns",
    lessons: [
      {
        title: "문자열 자르기와 탐색",
        challenges: [
          {
            question: "드릴 1 — 슬라이싱",
            prompt: "문자열 s의 앞 세 글자만 출력하세요.",
            code: "print(s[___])",
            hint: "시작을 생략하고 끝 인덱스 3을 쓰면 0,1,2 위치가 선택됩니다.",
            answer: ":3",
            alt: ["3:", ":2", "0:4"],
          },
          {
            question: "드릴 2 — 뒤에서 자르기",
            prompt: "문자열 s의 마지막 두 글자를 출력하세요.",
            code: "print(s[___])",
            hint: "음수 인덱스는 뒤에서부터 세며, -2: 는 마지막 두 글자를 뜻합니다.",
            answer: "-2:",
            alt: [":-2", "-1:", "2:"],
          },
          {
            question: "드릴 3 — find",
            prompt: "문자열 s에서 'py'가 처음 나오는 위치를 찾으세요.",
            code: "idx = s.___('py')",
            hint: "find()는 찾는 문자열의 시작 위치를 반환하고, 없으면 -1을 반환합니다.",
            answer: "find",
            alt: ["count", "split", "indexOf"],
          },
          {
            question: "드릴 4 — count",
            prompt: "문자열 s에 문자 'a'가 몇 번 나오는지 세세요.",
            code: "total = s.___('a')",
            hint: "count()는 부분 문자열 등장 횟수를 셉니다.",
            answer: "count",
            alt: ["find", "len", "sum"],
          },
        ],
      },
      {
        title: "split과 join",
        challenges: [
          {
            question: "드릴 1 — 공백 분리",
            prompt: "한 줄의 단어들을 공백 기준으로 리스트에 담으세요.",
            code: "words = input().___()",
            hint: "인자 없이 split()을 쓰면 연속 공백도 자연스럽게 처리합니다.",
            answer: "split",
            alt: ["join", "strip", "map"],
          },
          {
            question: "드릴 2 — 쉼표 분리",
            prompt: "'a,b,c' 형태의 문자열을 쉼표 기준으로 나누세요.",
            code: "items = s.split(___)",
            hint: "구분자는 문자열로 전달합니다.",
            answer: "','",
            alt: ["' '", "''", "'|'"],
          },
          {
            question: "드릴 3 — 문자열 합치기",
            prompt: "리스트 words를 공백 하나로 이어 붙이세요.",
            code: "sentence = ___.join(words)",
            hint: "join은 구분자 문자열에서 호출합니다.",
            answer: "' '",
            alt: ["','", "words", "split"],
          },
          {
            question: "드릴 4 — 양끝 공백 제거",
            prompt: "입력 문자열의 양끝 공백과 줄바꿈을 제거하세요.",
            code: "s = input().___()",
            hint: "strip()은 왼쪽과 오른쪽의 공백 문자를 제거합니다.",
            answer: "strip",
            alt: ["split", "join", "trim"],
          },
        ],
      },
    ],
  },
  {
    title: "Unit 8. 딕셔너리 & 집합",
    description: "dict access, frequency maps, set membership, duplicates",
    lessons: [
      {
        title: "딕셔너리 빈도 세기",
        challenges: [
          {
            question: "드릴 1 — 빈 딕셔너리",
            prompt: "빈 딕셔너리를 만들고 counts에 저장하세요.",
            code: "counts = ___",
            hint: "{}는 빈 딕셔너리 리터럴입니다.",
            answer: "{}",
            alt: ["[]", "()", "set()"],
          },
          {
            question: "드릴 2 — get 기본값",
            prompt: "단어 word의 등장 횟수를 1 증가시키세요.",
            code: "counts[word] = counts.___(word, 0) + 1",
            hint: "dict.get(key, default)는 키가 없을 때 기본값을 돌려줍니다.",
            answer: "get",
            alt: ["find", "count", "append"],
          },
          {
            question: "드릴 3 — 키 순회",
            prompt: "딕셔너리 counts의 키와 값을 함께 순회하세요.",
            code: "for key, value in counts.___():",
            hint: "items()는 (key, value) 쌍을 반환합니다.",
            answer: "items",
            alt: ["keys", "values", "pairs"],
          },
          {
            question: "드릴 4 — 키 존재 확인",
            prompt: "word가 딕셔너리에 있는지 확인하세요.",
            code: "if word ___ counts:",
            hint: "딕셔너리에서 in은 키 존재 여부를 확인합니다.",
            answer: "in",
            alt: ["of", "inside", "contains"],
          },
        ],
      },
      {
        title: "집합과 중복 제거",
        challenges: [
          {
            question: "드릴 1 — 리스트 중복 제거",
            prompt: "리스트 nums의 중복을 제거한 집합을 만드세요.",
            code: "unique = ___(nums)",
            hint: "set()은 중복 없는 원소 모음을 만듭니다.",
            answer: "set",
            alt: ["dict", "list", "tuple"],
          },
          {
            question: "드릴 2 — 원소 추가",
            prompt: "집합 seen에 x를 추가하세요.",
            code: "seen.___(x)",
            hint: "set.add(value)는 집합에 원소를 넣습니다.",
            answer: "add",
            alt: ["append", "push", "insert"],
          },
          {
            question: "드릴 3 — 교집합",
            prompt: "두 집합 a와 b의 공통 원소를 구하세요.",
            code: "common = a ___ b",
            hint: "& 연산자는 집합의 교집합입니다.",
            answer: "&",
            alt: ["|", "-", "^"],
          },
          {
            question: "드릴 4 — 합집합",
            prompt: "두 집합 a와 b의 모든 원소를 합치세요.",
            code: "merged = a ___ b",
            hint: "| 연산자는 집합의 합집합입니다.",
            answer: "|",
            alt: ["&", "-", "//"],
          },
        ],
      },
    ],
  },
  {
    title: "Unit 9. 재귀 & 탐색",
    description: "recursive base cases, DFS shape, visited checks",
    lessons: [
      {
        title: "재귀 함수 기본",
        challenges: [
          {
            question: "드릴 1 — 종료 조건",
            prompt: "n이 0이면 1을 반환하는 팩토리얼 종료 조건을 완성하세요.",
            code: "if n == 0:\n    return ___",
            hint: "0!은 1입니다.",
            answer: "1",
            alt: ["0", "n", "None"],
          },
          {
            question: "드릴 2 — 재귀 호출",
            prompt: "팩토리얼 재귀식을 완성하세요.",
            code: "return n * factorial(___)",
            hint: "문제를 n-1 크기로 줄입니다.",
            answer: "n - 1",
            alt: ["n + 1", "n", "1"],
          },
          {
            question: "드릴 3 — 피보나치 종료",
            prompt: "n이 1 이하일 때 n을 반환하세요.",
            code: "if n <= 1:\n    return ___",
            hint: "fib(0)=0, fib(1)=1 이므로 n 그대로 반환합니다.",
            answer: "n",
            alt: ["1", "0", "n - 1"],
          },
          {
            question: "드릴 4 — 재귀 깊이 설정",
            prompt: "재귀 제한을 충분히 늘리는 코드를 완성하세요.",
            code: "sys.setrecursionlimit(___)",
            hint: "큰 입력 DFS에서는 기본 재귀 제한이 부족할 수 있습니다.",
            answer: "10**6",
            alt: ["10", "100", "len(sys)"],
          },
        ],
      },
      {
        title: "DFS 방문 처리",
        challenges: [
          {
            question: "드릴 1 — 방문 표시",
            prompt: "현재 노드 v를 방문 처리하세요.",
            code: "visited[v] = ___",
            hint: "방문한 노드는 True로 표시합니다.",
            answer: "True",
            alt: ["False", "None", "0"],
          },
          {
            question: "드릴 2 — 미방문 확인",
            prompt: "다음 노드 nxt를 아직 방문하지 않았다면 DFS를 호출하세요.",
            code: "if not ___[nxt]:\n    dfs(nxt)",
            hint: "visited 리스트를 확인합니다.",
            answer: "visited",
            alt: ["graph", "queue", "stack"],
          },
          {
            question: "드릴 3 — 인접 리스트 순회",
            prompt: "현재 노드 v의 이웃을 순회하세요.",
            code: "for nxt in ___[v]:",
            hint: "graph[v]에는 v와 연결된 노드들이 들어 있습니다.",
            answer: "graph",
            alt: ["visited", "range", "input"],
          },
          {
            question: "드릴 4 — 컴포넌트 수",
            prompt: "새 DFS를 시작할 때 연결 요소 개수를 1 늘리세요.",
            code: "count ___ 1",
            hint: "복합 대입 연산자 += 를 사용합니다.",
            answer: "+=",
            alt: ["=", "-=", "=="],
          },
        ],
      },
    ],
  },
  {
    title: "Unit 10. 알고리즘 리뷰",
    description: "sorting, greedy checks, BFS queues, final mixed drills",
    lessons: [
      {
        title: "정렬과 그리디",
        challenges: [
          {
            question: "드릴 1 — 오름차순 정렬",
            prompt: "리스트 nums를 오름차순으로 정렬하세요.",
            code: "nums.___()",
            hint: "list.sort()는 원본 리스트를 정렬합니다.",
            answer: "sort",
            alt: ["sorted", "reverse", "append"],
          },
          {
            question: "드릴 2 — 내림차순 정렬",
            prompt: "리스트 nums를 내림차순으로 정렬하세요.",
            code: "nums.sort(___=True)",
            hint: "reverse=True 옵션을 사용합니다.",
            answer: "reverse",
            alt: ["desc", "key", "order"],
          },
          {
            question: "드릴 3 — key 정렬",
            prompt: "문자열 리스트 words를 길이 기준으로 정렬하세요.",
            code: "words.sort(key=___)",
            hint: "len 함수를 key로 넘기면 길이 기준이 됩니다.",
            answer: "len",
            alt: ["str", "int", "count"],
          },
          {
            question: "드릴 4 — 가장 작은 값",
            prompt: "정렬 후 가장 작은 값을 꺼내세요.",
            code: "smallest = nums[___]",
            hint: "오름차순 정렬에서는 첫 번째 원소가 가장 작습니다.",
            answer: "0",
            alt: ["-1", "1", "len(nums)"],
          },
        ],
      },
      {
        title: "BFS와 큐",
        challenges: [
          {
            question: "드릴 1 — deque import",
            prompt: "빠른 큐를 쓰기 위해 deque를 가져오세요.",
            code: "from collections import ___",
            hint: "BFS에서는 collections.deque를 자주 사용합니다.",
            answer: "deque",
            alt: ["queue", "list", "heapq"],
          },
          {
            question: "드릴 2 — 큐 시작점",
            prompt: "시작 노드 start를 큐에 넣고 시작하세요.",
            code: "q = deque([___])",
            hint: "deque에는 시작 노드를 담은 리스트를 넘깁니다.",
            answer: "start",
            alt: ["end", "graph", "visited"],
          },
          {
            question: "드릴 3 — 왼쪽에서 꺼내기",
            prompt: "큐의 앞에서 현재 노드를 꺼내세요.",
            code: "v = q.___()",
            hint: "popleft()가 큐의 FIFO 동작입니다.",
            answer: "popleft",
            alt: ["pop", "remove", "dequeue"],
          },
          {
            question: "드릴 4 — 다음 노드 넣기",
            prompt: "방문할 다음 노드를 큐 뒤에 넣으세요.",
            code: "q.___(nxt)",
            hint: "append()는 오른쪽 끝에 원소를 추가합니다.",
            answer: "append",
            alt: ["popleft", "push", "insertLeft"],
          },
        ],
      },
    ],
  },
]);

export const javaSupplementUnits = makeUnits([
  {
    title: "Unit 9. 재귀 & 그래프",
    description: "recursive base cases, adjacency lists, DFS and BFS",
    lessons: [
      {
        title: "재귀 메서드",
        challenges: [
          {
            question: "드릴 1 — 종료 조건",
            prompt: "n이 0이면 1을 반환하는 factorial 메서드를 완성하세요.",
            code: "if (n == 0) return ___;",
            hint: "0!은 1입니다.",
            answer: "1",
            alt: ["0", "n", "null"],
          },
          {
            question: "드릴 2 — 재귀 호출",
            prompt: "factorial 재귀식을 완성하세요.",
            code: "return n * factorial(___);",
            hint: "문제를 n-1 크기로 줄입니다.",
            answer: "n - 1",
            alt: ["n + 1", "n", "1"],
          },
          {
            question: "드릴 3 — static 메서드",
            prompt: "main에서 바로 호출할 수 있는 정적 메서드 선언을 완성하세요.",
            code: "static int factorial(int n) { ___ }",
            hint: "static 메서드는 객체 생성 없이 호출할 수 있습니다.",
            answer: "return 1;",
            alt: ["new int;", "void;", "break;"],
          },
          {
            question: "드릴 4 — long 반환",
            prompt: "큰 팩토리얼 값을 담을 반환 타입을 고르세요.",
            code: "static ___ factorial(int n)",
            hint: "int보다 큰 정수 범위는 long을 사용합니다.",
            answer: "long",
            alt: ["String", "boolean", "char"],
          },
        ],
      },
      {
        title: "그래프 탐색",
        challenges: [
          {
            question: "드릴 1 — 인접 리스트",
            prompt: "정점별 이웃을 담을 ArrayList 배열 타입을 고르세요.",
            code: "ArrayList<Integer>[] graph = new ArrayList[n + 1];",
            hint: "각 정점마다 Integer 이웃 목록을 둡니다.",
            answer: "ArrayList<Integer>[]",
            alt: ["int", "String[]", "boolean"],
          },
          {
            question: "드릴 2 — 방문 배열",
            prompt: "정점 방문 여부를 저장할 배열을 만드세요.",
            code: "boolean[] visited = new ___[n + 1];",
            hint: "방문 여부는 true/false 값입니다.",
            answer: "boolean",
            alt: ["int", "String", "char"],
          },
          {
            question: "드릴 3 — 이웃 순회",
            prompt: "현재 정점 v의 이웃을 순회하세요.",
            code: "for (int next : ___[v]) { }",
            hint: "graph[v]에 이웃 정점들이 들어 있습니다.",
            answer: "graph",
            alt: ["visited", "queue", "stack"],
          },
          {
            question: "드릴 4 — 큐 poll",
            prompt: "BFS 큐에서 앞 원소를 꺼내세요.",
            code: "int v = queue.___();",
            hint: "Queue.poll()은 앞 원소를 꺼냅니다.",
            answer: "poll",
            alt: ["pop", "removeLast", "peekLast"],
          },
        ],
      },
    ],
  },
  {
    title: "Unit 10. 종합 문제 풀이",
    description: "fast input, StringBuilder output, mixed algorithm patterns",
    lessons: [
      {
        title: "빠른 입출력",
        challenges: [
          {
            question: "드릴 1 — BufferedReader",
            prompt: "빠른 입력을 위한 BufferedReader 생성을 완성하세요.",
            code: "BufferedReader br = new BufferedReader(new ___(System.in));",
            hint: "System.in 바이트 스트림을 문자 스트림으로 바꿉니다.",
            answer: "InputStreamReader",
            alt: ["Scanner", "StringTokenizer", "StringBuilder"],
          },
          {
            question: "드릴 2 — StringTokenizer",
            prompt: "한 줄의 공백 분리 값을 읽기 위한 토크나이저를 만드세요.",
            code: "StringTokenizer st = new StringTokenizer(___);",
            hint: "br.readLine()으로 읽은 한 줄을 넘깁니다.",
            answer: "br.readLine()",
            alt: ["System.in", "nextInt()", "args"],
          },
          {
            question: "드릴 3 — 다음 토큰",
            prompt: "토크나이저에서 다음 값을 문자열로 꺼내세요.",
            code: "String s = st.___();",
            hint: "nextToken()은 다음 토큰을 반환합니다.",
            answer: "nextToken",
            alt: ["next", "readLine", "poll"],
          },
          {
            question: "드릴 4 — 출력 누적",
            prompt: "여러 줄 출력을 StringBuilder에 누적하세요.",
            code: "sb.___(answer).append('\\n');",
            hint: "StringBuilder.append()는 값을 뒤에 이어 붙입니다.",
            answer: "append",
            alt: ["add", "print", "push"],
          },
        ],
      },
      {
        title: "최종 패턴 리뷰",
        challenges: [
          {
            question: "드릴 1 — 우선순위 큐",
            prompt: "가장 작은 값부터 꺼내는 자료구조를 고르세요.",
            code: "PriorityQueue<Integer> pq = new ___<>();",
            hint: "PriorityQueue는 기본적으로 최소 힙처럼 동작합니다.",
            answer: "PriorityQueue",
            alt: ["ArrayList", "HashSet", "Stack"],
          },
          {
            question: "드릴 2 — HashMap 카운트",
            prompt: "map에서 key의 기존 개수에 1을 더해 저장하세요.",
            code: "map.put(key, map.getOrDefault(key, 0) + ___);",
            hint: "카운트는 1씩 증가합니다.",
            answer: "1",
            alt: ["0", "-1", "key"],
          },
          {
            question: "드릴 3 — 이진 탐색 중간값",
            prompt: "left와 right 사이의 중간 인덱스를 계산하세요.",
            code: "int mid = (left + right) / ___;",
            hint: "중간값은 두 값의 합을 2로 나눕니다.",
            answer: "2",
            alt: ["1", "0", "right"],
          },
          {
            question: "드릴 4 — 배열 복사 정렬",
            prompt: "좌표 압축 전 원본 배열을 복사하세요.",
            code: "int[] sorted = arr.___();",
            hint: "clone()은 배열의 얕은 복사본을 만듭니다.",
            answer: "clone",
            alt: ["copy", "sort", "new"],
          },
        ],
      },
    ],
  },
]);
