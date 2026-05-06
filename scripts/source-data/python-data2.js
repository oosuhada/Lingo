// ═══════════════════════════════════════════════════════
// data.js — CATEGORIES & QUESTIONS
// ═══════════════════════════════════════════════════════

const CATEGORIES = [
  {
    id: 0, icon: "📥", title: "입출력 & 자료형", desc: "input(), print(), int/float/str 변환, f-string",
    color: "c0", freq: "must", freqLabel: "★★★ 필수기초", diff: "난이도 ●○○",
    importance: "모든 문제의 입력 처리에 사용. 가장 먼저 마스터해야 합니다.",
    concept: {
      title: "입출력과 자료형 변환",
      desc: `코딩테스트에서 모든 입력은 문자열(str)로 들어옵니다. "3"과 3은 다릅니다! 숫자 계산을 하려면 반드시 int()나 float()로 변환해야 합니다. input()은 키보드 입력을 받아 문자열로 반환합니다.`,
      syntax: `# ── 기본 입력 ──
name = input()           # 문자열 그대로 받음 → "홍길동"
n = int(input())         # int()로 감싸서 정수로 변환 → 42
x = float(input())       # float()로 감싸서 실수로 변환 → 3.14

# ── 한 줄에 여러 값 입력 (공백 구분) ──
a, b = map(int, input().split())
# input()   → "3 5" (문자열)
# .split()  → ["3", "5"] (리스트)
# map(int,) → [3, 5] (정수로 변환)

# ── 출력 ──
print("안녕하세요")          # 일반 출력
print(n)                     # 변수 출력
print(f"값: {n}")            # f-string: f 붙이고 {변수명}
print(f"{n:.2f}")            # :.2f = 소수점 2자리 고정
print(f"{n} + {x} = {n+x}") # 표현식도 {} 안에 가능

# ── 자료형 확인 ──
type("3")   # <class 'str'>   문자열
type(3)     # <class 'int'>   정수
type(3.14)  # <class 'float'> 실수

# ── 산술 연산자 ──
# +  더하기     5 + 3 = 8
# -  빼기       5 - 3 = 2
# *  곱하기     5 * 3 = 15
# /  나누기     5 / 2 = 2.5  (항상 실수!)
# // 정수나누기 5 // 2 = 2   (소수점 버림)
# %  나머지     7 % 3 = 1    (홀짝 판별에 사용!)
# ** 거듭제곱   2 ** 3 = 8   (Java의 Math.pow와 동일)`,
      note: `💡 input()은 항상 str 반환! "3" + "5" = "35" (문자열 연결), 3 + 5 = 8 (덧셈). int() 변환 필수!`,
      dart: `stdin.readLineSync()  →  input()\nint.parse(s)          →  int(s)\ndouble.parse(s)       →  float(s)\n'\$var'                →  f'{var}'\n'\${n.toStringAsFixed(2)}' →  f'{n:.2f}'`
    }
  },
  {
    id: 1, icon: "🔀", title: "조건문", desc: "if / elif / else, 비교·논리 연산자",
    color: "c1", freq: "must", freqLabel: "★★★ 최빈출", diff: "난이도 ●○○",
    importance: "카카오·네이버·라인 등 모든 코딩테스트에서 필수. 조건 분기 없는 문제는 없습니다.",
    concept: {
      title: "조건문 (if / elif / else)",
      desc: `파이썬 조건문은 들여쓰기(indent, 보통 스페이스 4칸)로 블록을 구분합니다. Java/Dart처럼 중괄호 {}가 없습니다! 콜론(:) 뒤에 들여쓰기된 코드가 한 블록입니다. 조건이 여러 개일 때는 elif를 씁니다 (else if가 아님!).`,
      syntax: `# ── 기본 구조 ──
if 조건1:          # 콜론(:) 필수!
    실행코드1      # 스페이스 4칸 들여쓰기
elif 조건2:        # Python은 elif (else if 아님!)
    실행코드2
else:
    실행코드3

# ── 비교 연산자 ──
# ==  같다       a == b  (= 은 대입, == 은 비교!)
# !=  같지 않다  a != b
# >   크다       a > b
# >=  크거나 같다 a >= b  (=> 아니고 >=!)
# <   작다       a < b
# <=  작거나 같다 a <= b

# ── 논리 연산자 (Java와 다름!) ──
if a > 0 and b > 0:  # Java의 &&  (Python은 and)
    print("둘 다 양수")
if a > 0 or b > 0:   # Java의 ||  (Python은 or)
    print("하나라도 양수")
if not flag:          # Java의 !   (Python은 not)
    print("flag가 False")

# ── 삼항 연산자 (순서 주의!) ──
# Python: 참값  if  조건  else  거짓값
result = "성인" if age >= 18 else "미성년자"
# Dart/Java: 조건 ? 참값 : 거짓값 (순서 다름!)

# ── 자주 쓰는 패턴 ──
if n % 2 == 0:    # n을 2로 나눈 나머지가 0 → 짝수
    print("짝수")
else:
    print("홀수")`,
      note: `💡 Python은 들여쓰기가 틀리면 에러! Tab과 Space를 섞지 마세요. 항상 Space 4칸 사용.`,
      dart: `&&  →  and\n||  →  or\n!   →  not\n삼항: cond ? a : b  →  a if cond else b\n중괄호 {}  →  콜론(:) + 들여쓰기`
    }
  },
  {
    id: 2, icon: "🔁", title: "반복문", desc: "for, while, range(), break, continue",
    color: "c2", freq: "must", freqLabel: "★★★ 최빈출", diff: "난이도 ●●○",
    importance: "조건문과 함께 코딩테스트의 핵심. 순회·탐색·누적 계산 모두 반복문 기반입니다.",
    concept: {
      title: "반복문 (for / while)",
      desc: `파이썬의 for 문은 '컬렉션을 순회하는' 방식입니다. Java처럼 for(int i=0; i<n; i++) 형태가 아닙니다! range()로 숫자 범위를 만들어 순회하거나, 리스트/문자열을 직접 순회합니다. while은 조건이 참인 동안 반복합니다.`,
      syntax: `# ── range() 기본 ──
for i in range(5):        # 0, 1, 2, 3, 4  (5 미포함!)
for i in range(1, 6):     # 1, 2, 3, 4, 5  (끝값 미포함!)
for i in range(0, 10, 2): # 0, 2, 4, 6, 8  (2씩 증가)
for i in range(5, 0, -1): # 5, 4, 3, 2, 1  (-1씩, 역순)

# ── 컬렉션 순회 ──
arr = [10, 20, 30]
for x in arr:          # x = 10, 20, 30 차례로
    print(x)

for ch in "hello":     # ch = 'h','e','l','l','o'
    print(ch)

# ── 인덱스+값 동시에 ──
for i, v in enumerate(arr):
    # i=0,v=10 / i=1,v=20 / i=2,v=30
    print(f"{i}번째: {v}")

# ── while 반복 ──
count = 0
while count < 3:       # 조건이 True인 동안 반복
    print(count)       # 0, 1, 2 출력
    count += 1         # count = count + 1 (+=은 복합 대입!)

# ── break / continue ──
for i in range(10):
    if i == 5:
        break          # 반복 완전 종료 (5에서 멈춤)
    if i % 2 == 0:
        continue       # 이번 회차만 건너뜀 (짝수 스킵)
    print(i)           # 1, 3 출력

# ── 누적 합산 패턴 (초빈출!) ──
total = 0              # 누적 변수 초기화
for x in arr:
    total += x         # total = total + x`,
      note: `💡 range(1, 11)은 1~10입니다. 끝값은 포함되지 않아요! range(n)은 0부터 n-1까지.`,
      dart: `for (var i=0; i<n; i++)  →  for i in range(n):\nfor (var x in list)    →  for x in list:\nbreak/continue 동일\n+=, -= 동일`
    }
  },
  {
    id: 3, icon: "📋", title: "리스트 조작", desc: "append, pop, sort, slice, list comprehension",
    color: "c3", freq: "high", freqLabel: "★★☆ 고빈출", diff: "난이도 ●●○",
    importance: "배열 조작은 모든 알고리즘의 기반. 슬라이싱과 컴프리헨션은 파이썬만의 강력한 무기입니다.",
    concept: {
      title: "리스트(List) 조작",
      desc: `파이썬의 리스트는 Dart의 List, Java의 ArrayList와 유사하지만 더 강력한 슬라이싱과 리스트 컴프리헨션을 제공합니다. 인덱스는 0부터 시작하고, -1은 마지막 요소입니다!`,
      syntax: `# ── 리스트 생성 ──
arr = [1, 2, 3, 4, 5]      # 직접 만들기
arr = []                    # 빈 리스트
arr = [0] * 5               # [0, 0, 0, 0, 0] (n개 초기화)

# ── 요소 추가/제거 ──
arr.append(6)        # 끝에 6 추가 → [1,2,3,4,5,6]
arr.pop()            # 끝 요소 제거하고 반환 → 6
arr.pop(0)           # 0번 인덱스(첫 번째) 제거
arr.insert(2, 99)    # 2번 위치에 99 삽입
arr.remove(3)        # 값 3을 찾아서 제거 (첫 번째만)

# ── 인덱스 접근 ──
arr[0]   # 첫 번째 요소
arr[-1]  # 마지막 요소 (Python만의 기능!)
arr[-2]  # 끝에서 두 번째

# ── 슬라이싱 (Python만의 강력한 기능!) ──
arr[1:4]    # 인덱스 1,2,3 (4 미포함)
arr[:3]     # 처음부터 인덱스 0,1,2
arr[2:]     # 인덱스 2부터 끝까지
arr[::-1]   # 전체를 뒤집기

# ── 정렬 ──
sorted(arr)              # 새 리스트 반환 (원본 유지!)
arr.sort()               # 제자리 정렬 (원본 변경!)
arr.sort(reverse=True)   # 내림차순 정렬
arr.sort(key=lambda x: -x)  # 사용자 정의 기준

# ── 리스트 컴프리헨션 (Python 핵심!) ──
[x*2 for x in arr]              # 모든 요소를 2배로
[x for x in arr if x > 0]       # 양수만 추려내기
[x**2 for x in range(1, 6)]     # [1,4,9,16,25]

# ── 유용한 함수들 ──
len(arr)     # 리스트 길이
sum(arr)     # 모든 요소 합계
max(arr)     # 최댓값
min(arr)     # 최솟값
arr.count(x) # x가 몇 개 있는지`,
      note: `💡 arr[-1]은 마지막 요소. sorted()는 원본 유지, arr.sort()는 원본 변경! 차이 주의.`,
      dart: `list.add(x)            →  arr.append(x)\nlist.removeAt(0)       →  arr.pop(0)\nlist.reversed.toList() →  arr[::-1]\nlist.length            →  len(arr)`
    }
  },
  {
    id: 4, icon: "🧩", title: "함수 정의", desc: "def, return, lambda, 매개변수",
    color: "c4", freq: "high", freqLabel: "★★☆ 고빈출", diff: "난이도 ●●○",
    importance: "프로그래머스는 solution() 함수 형태로 제출합니다. 함수 정의는 필수 기본기입니다.",
    concept: {
      title: "함수 정의 (def / lambda)",
      desc: `코딩테스트에서 solution() 함수를 정의하는 것이 기본입니다. def 키워드로 시작하며 return으로 값을 반환합니다. Java처럼 반환 타입을 앞에 쓰지 않습니다! 짧은 함수는 lambda로 한 줄에 정의할 수 있습니다.`,
      syntax: `# ── 기본 함수 정의 ──
def 함수명(매개변수):    # def 키워드, 타입 선언 없음!
    실행코드
    return 결과값         # return 없으면 None 반환!

# ── 코딩테스트 기본 형태 ──
def solution(n):
    return n * 2

# ── 여러 매개변수 ──
def add(a, b):
    return a + b          # return a + b

# ── 기본값 매개변수 ──
def greet(name, msg="안녕"):   # msg 없으면 기본값 사용
    return f"{msg}, {name}"

greet("홍길동")           # "안녕, 홍길동"
greet("홍길동", "반가워") # "반가워, 홍길동"

# ── 여러 값 반환 ──
def min_max(arr):
    return min(arr), max(arr)  # 튜플로 반환

lo, hi = min_max([3, 1, 4])   # 언패킹으로 받기

# ── lambda (익명 함수) ──
# lambda 매개변수: 반환값
square = lambda x: x ** 2    # def square(x): return x**2 와 동일
add = lambda a, b: a + b      # def add(a,b): return a+b 와 동일

# ── sort key로 lambda (초빈출!) ──
pairs = [(1, 'b'), (3, 'a'), (2, 'c')]
pairs.sort(key=lambda x: x[0])  # 첫 번째 값 기준 정렬
pairs.sort(key=lambda x: x[1])  # 두 번째 값 기준 정렬`,
      note: `💡 return이 없으면 None을 반환합니다. 빠뜨리지 마세요! lambda는 한 줄짜리 간단한 함수에 사용.`,
      dart: `int fn(int n) { return n; }  →  def fn(n): return n\n(x) => x * 2               →  lambda x: x * 2\n반환타입 앞에 없음!          →  def fn(x): (타입 생략 가능)\n여러 값 반환 없음            →  return a, b (튜플)`
    }
  },
  {
    id: 5, icon: "🗺️", title: "딕셔너리 & 집합", desc: "dict, set, Counter, 활용 패턴",
    color: "c5", freq: "mid", freqLabel: "★☆☆ 심화필수", diff: "난이도 ●●●",
    importance: "빈도 세기, 그룹핑, 중복 제거 문제에 필수. 카카오 코딩테스트 단골 소재입니다.",
    concept: {
      title: "딕셔너리(dict) & 집합(set)",
      desc: `딕셔너리는 키-값 쌍으로 데이터를 저장합니다. 코딩테스트에서 '빈도 세기', '그룹핑', '중복 제거'에 자주 사용됩니다. set은 중복 없는 집합으로 교집합·합집합 연산이 가능합니다.`,
      syntax: `d = {}
d["key"] = "value"
d.get("key", 기본값)

counter = {}
for x in arr:
    counter[x] = counter.get(x, 0) + 1

from collections import Counter
cnt = Counter(arr)

s = set(arr)     # 중복 제거
s1 & s2          # 교집합
s1 | s2          # 합집합`,
      note: `💡 .get(key, default)는 KeyError를 방지합니다. 필수 패턴!`,
      dart: `Map<String, int>  →  dict\nmap[key] ?? 0    →  d.get(key, 0)\nSet<int>         →  set()`
    }
  },
];

// ═══════════════════════════════════════════════════════
// QUESTIONS — 카테고리별 개념 문제 + drills 배열
// ═══════════════════════════════════════════════════════
const QUESTIONS = [

  // ─── CATEGORY 0: 입출력 & 자료형 ─────────────────────────────
  { cat:0, id:0, title:"종합 기본개념 — 입출력 & 자료형",
    prompt:"이 카테고리의 핵심 개념을 한눈에 정리합니다. input(), print(), 자료형 변환, f-string, 산술 연산자를 이해하고 드릴로 익혀보세요.",
    full:`# 입출력의 모든 것
name = input()            # 문자열 그대로
n = int(input())          # 정수로 변환
x = float(input())        # 실수로 변환
a, b = map(int, input().split())  # 두 정수 한 줄 입력

print("안녕")             # 일반 출력
print(f"값: {n}")         # f-string
print(f"{n:.2f}")         # 소수점 2자리
print(n, x, sep=", ")    # 구분자 지정
print("A", end=" ")       # 줄바꿈 없이

# 산술 연산자
# +  -  *  /  //  %  **
5 / 2   # 2.5  (항상 실수!)
5 // 2  # 2    (정수 나눗셈)
7 % 3   # 1    (나머지)
2 ** 3  # 8    (거듭제곱)`,
    hint:"input()은 항상 str 반환 — 계산하려면 int() / float()로 변환 필수!",
    concept: {
      title: "입출력 & 자료형 — 전체 개요",
      desc: `Python에서 모든 입력은 문자열(str)로 들어옵니다. 숫자 계산을 하려면 반드시 int() 또는 float()로 변환해야 합니다. 출력은 print()를 사용하며, f-string으로 변수를 깔끔하게 포맷할 수 있습니다.`,
      syntax: `# 입력
name = input()                    # → str
n    = int(input())               # → int
x    = float(input())             # → float
a, b = map(int, input().split())  # 두 값 한 줄

# 출력
print("hello")           # 기본
print(f"n = {n}")        # f-string
print(f"{n:.2f}")        # 소수 2자리
print(a, b, sep="-")     # 구분자 변경
print("A", end=" ")      # 줄바꿈 제거

# 산술 연산자
5 / 2   → 2.5  (항상 실수!)
5 // 2  → 2    (정수 나눗셈)
7 % 3   → 1    (나머지)
2 ** 3  → 8    (거듭제곱, ^ 아님!)`,
      note: `💡 "3" + "5" = "35" (문자열 연결), 3 + 5 = 8 (덧셈). int() 변환 필수!`,
      dart: `stdin.readLineSync()  →  input()\nint.parse(s)          →  int(s)\n'\$var'                →  f'{var}'\n'\${n.toStringAsFixed(2)}' →  f'{n:.2f}'`
    },
    drills: [
      { title:"드릴 1 — input() 기본", prompt:"이름을 입력받아 그대로 출력하세요.", full:"name = input()\nprint(name)", blank:"name = ___()", answer:"input", options:["input","read","get","scan"], blocks:["name = input()","print(name)"], hint:"input()은 키보드 입력을 문자열로 받습니다." },
      { title:"드릴 2 — int() 변환", prompt:"정수 n을 입력받아 n + 10을 출력하세요.", full:"n = int(input())\nprint(n + 10)", blank:"n = ___(input())", answer:"int", options:["int","str","float","input"], blocks:["n = int(input())","print(n + 10)"], hint:"input()의 결과를 int()로 감싸면 정수가 됩니다." },
      { title:"드릴 3 — f-string 기본", prompt:"이름을 입력받아 '안녕하세요, [이름]님!'을 출력하세요.", full:"name = input()\nprint(f'안녕하세요, {name}님!')", blank:"print(f'안녕하세요, {name}___')", answer:"님!", options:["님!", "이름!", "{name}!", "님?"], blocks:["name = input()","print(f'안녕하세요, {name}님!')"], hint:"f-string: f'...' 안에 {변수}를 넣으면 변수 값이 들어갑니다." },
      { title:"드릴 4 — map으로 두 값 입력", prompt:"두 정수를 한 줄에 입력받아 합계를 출력하세요.", full:"a, b = map(int, input().split())\nprint(a + b)", blank:"a, b = map(int, input().___())", answer:"split", options:["split","join","strip","parse"], blocks:["a, b = map(int, input().split())","print(a + b)"], hint:"split()으로 나누고 map(int, ...)으로 정수 변환합니다." }
    ]
  },
  { cat:0, id:1, title:"이름 받아 인사 출력",
    prompt:"사용자로부터 이름을 입력받아 <code>'안녕하세요, [이름]님!'</code> 형식으로 출력하는 코드를 완성하세요. f-string을 사용해야 합니다.",
    full:"name = input()\nprint(f'안녕하세요, {name}님!')",
    hint:"f-string: 따옴표 앞에 f를 붙이고 변수는 { }로 감싸세요.",
    concept: {
      title: "f-string으로 문자열 포맷",
      desc: `f-string은 Python 3.6+에서 사용하는 문자열 포맷 방식입니다. 따옴표 앞에 f를 붙이고 {} 안에 변수나 표현식을 넣으면 값이 자동으로 삽입됩니다.`,
      syntax: `name = "수"
# 기본 f-string
print(f"안녕하세요, {name}님!")   # → 안녕하세요, 수님!

# 여러 변수
age = 25
print(f"{name}님은 {age}세입니다.")

# 표현식도 가능
n = 10
print(f"n의 제곱: {n**2}")       # → n의 제곱: 100

# 소수점 포맷
avg = 87.5
print(f"평균: {avg:.2f}")        # → 평균: 87.50`,
      note: `💡 f-string 이전에는 .format()을 사용했습니다. 현대 Python에서는 f-string이 가장 가독성이 좋습니다.`,
      dart: `'\$name님!'    →  f'{name}님!'\n'\${n * 2}'   →  f'{n * 2}'\n'\${n.toStringAsFixed(2)}' → f'{n:.2f}'`
    },
    drills: [
      { title:"드릴 1 — 기본 인사", prompt:"이름을 입력받아 <code>'안녕하세요, [이름]님!'</code>을 출력하세요. f-string을 사용합니다.", full:"name = input()\nprint(f'안녕하세요, {name}님!')", blank:"name = input()\nprint(___)", answer:"f'안녕하세요, {name}님!'", options:["f'안녕하세요, {name}님!'","'안녕하세요' + name","print(name)","f'안녕하세요, name님!'"], blocks:["name = input()","print(f'안녕하세요, {name}님!')"], hint:"f-string: 따옴표 앞에 f를 붙이고 변수는 { }로 감싸세요." },
      { title:"드릴 2 — 나이와 함께 출력", prompt:"이름과 나이를 입력받아 <code>'[이름]님은 [나이]세입니다.'</code>를 출력하세요. 나이는 정수형으로 입력받습니다.", full:"name = input()\nage = int(input())\nprint(f'{name}님은 {age}세입니다.')", blank:"age = int(input())\nprint(f'{name}님은 ___세입니다.')", answer:"{age}", options:["{age}","age","{name}","age님"], blocks:["name = input()","age = int(input())","print(f'{name}님은 {age}세입니다.')"], hint:"여러 변수를 f-string에 포함할 수 있습니다. { } 안에 각 변수를 넣으세요." },
      { title:"드릴 3 — 점수 포맷팅", prompt:"이름과 평균 점수(실수)를 입력받아 <code>'[이름]님의 평균: 87.50점'</code>처럼 소수 둘째 자리까지 출력하세요.", full:"name = input()\navg = float(input())\nprint(f'{name}님의 평균: {avg:.2f}점')", blank:"print(f'{name}님의 평균: {avg:___}점')", answer:".2f", options:[".2f","2f",":.2","2.f"], blocks:["name = input()","avg = float(input())","print(f'{name}님의 평균: {avg:.2f}점')"], hint:"실수를 소수 둘째자리까지 출력: <code>{변수:.2f}</code> 패턴을 기억하세요." },
      { title:"드릴 4 — 여러 줄 인사", prompt:"이름을 입력받아 <code>'Hello, [이름]!'</code>와 <code>'반갑습니다, [이름]님.'</code>을 두 줄에 나눠 출력하세요.", full:"name = input()\nprint(f'Hello, {name}!')\nprint(f'반갑습니다, {name}님.')", blank:"print(f'___')\nprint(f'반갑습니다, {name}님.')", answer:"Hello, {name}!", options:["Hello, {name}!","Hello, name!","Hello {name}","Hello, '+name+'!"], blocks:["name = input()","print(f'Hello, {name}!')","print(f'반갑습니다, {name}님.')"], hint:"같은 변수 name을 두 번 다 f-string에서 사용합니다." }
    ]
  },
  { cat:0, id:2, title:"정수 입력받기",
    prompt:"한 줄에 정수 하나를 입력받아 변수 <code>n</code>에 저장하는 코드를 완성하세요. 연산에 사용할 수 있도록 정수 타입으로 변환해야 합니다.",
    full:"n = int(input())",
    hint:"input()은 항상 문자열을 반환합니다. 정수로 바꾸려면 int()로 변환하세요.",
    concept: {
      title: "int()로 정수 변환",
      desc: `input()은 항상 문자열(str)을 반환합니다. 숫자 계산을 하려면 반드시 int()나 float()으로 감싸야 합니다. 이는 코딩테스트에서 가장 흔한 실수 원인입니다.`,
      syntax: `n = int(input())       # 문자열 → 정수
x = float(input())     # 문자열 → 실수

# 주의: 변환 없이 연산하면?
s = input()  # 입력: "10"
print(s + "5")  # → "105" (문자열 연결!)
print(int(s) + 5)  # → 15  (올바른 연산)

# 타입 확인
type("3")   # str
type(3)     # int
type(3.14)  # float`,
      note: `💡 input()은 "3" (문자열)을 반환. 3 (정수)이 아님. int()로 반드시 변환하세요!`,
      dart: `int.parse(stdin.readLineSync()!)  →  int(input())
double.parse(...)  →  float(input())`
    },
    drills: [
      { title:"드릴 1 — 기본 정수 입력", prompt:"정수 하나를 입력받아 변수 <code>n</code>에 저장하고 출력하세요.", full:"n = int(input())\nprint(n)", blank:"n = ___(input())", answer:"int", options:["int","str","float","input"], blocks:["n = int(input())","print(n)"], hint:"input()은 문자열을 반환하므로 정수로 변환할 때는 int()를 사용합니다." },
      { title:"드릴 2 — 정수 입력 후 2배 출력", prompt:"정수 <code>n</code>을 입력받아 <code>n * 2</code>를 출력하세요.", full:"n = int(input())\nprint(n * 2)", blank:"n = ___(input())\nprint(n * 2)", answer:"int", options:["int","float","str","input"], blocks:["n = int(input())","print(n * 2)"], hint:"int()로 정수 타입으로 변환해야 산술 연산이 가능합니다." },
      { title:"드릴 3 — 두 정수 개별 입력 후 합산", prompt:"정수를 두 줄에 걸쳐 각각 입력받아 <code>a</code>, <code>b</code>에 저장하고 합계를 출력하세요.", full:"a = int(input())\nb = int(input())\nprint(a + b)", blank:"a = ___(input())\nb = ___(input())\nprint(a + b)", answer:"int", options:["int","float","str","map"], blocks:["a = int(input())","b = int(input())","print(a + b)"], hint:"여러 번 입력받을 때는 각 변수마다 int(input())을 반복합니다." },
      { title:"드릴 4 — 세 정수 입력 후 평균", prompt:"정수를 세 줄에 걸쳐 각각 입력받아 평균값(소수 포함)을 출력하세요.", full:"a = int(input())\nb = int(input())\nc = int(input())\nprint((a + b + c) / 3)", blank:"a = ___(input())\nb = ___(input())\nc = ___(input())", answer:"int", options:["int","float","str","input"], blocks:["a = int(input())","b = int(input())","c = int(input())","print((a + b + c) / 3)"], hint:"/ 연산자는 항상 실수로 나눕니다. 정수 나눗셈은 //를 씁니다." },
      { title:"드릴 5 — 정수 입력 후 홀짝 판별", prompt:"정수 <code>n</code>을 입력받아 짝수면 <code>'짝수'</code>, 홀수면 <code>'홀수'</code>를 출력하세요.", full:"n = int(input())\nprint('짝수' if n % 2 == 0 else '홀수')", blank:"n = ___(input())", answer:"int", options:["int","str","float","bool"], blocks:["n = int(input())","print('짝수' if n % 2 == 0 else '홀수')"], hint:"int()로 변환해야 % 나머지 연산이 가능합니다." }
    ]
  },
  { cat:0, id:3, title:"두 정수 한 줄 입력",
    prompt:"한 줄에 공백으로 구분된 두 정수를 입력받아 변수 <code>a</code>, <code>b</code>에 각각 저장하는 코드를 완성하세요. <code>map()</code>과 <code>split()</code>을 활용합니다.",
    full:"a, b = map(int, input().split())",
    hint:"map(함수, 이터러블)은 각 요소에 함수를 적용합니다. split()은 공백 기준으로 분리해요.",
    concept: {
      title: "두 값 한 줄 입력 — map + split",
      desc: `코딩테스트에서 '두 수를 공백으로 구분해 입력받으시오'가 가장 흔한 입력 형식입니다. split()으로 분리하고 map(int, ...)으로 한번에 정수 변환합니다.`,
      syntax: `# 가장 빈출 패턴
a, b = map(int, input().split())

# 단계별 이해
s = input()           # "3 5"
parts = s.split()     # ["3", "5"]
nums = map(int, parts) # <map object>
a, b = nums           # a=3, b=5

# 3개 입력
a, b, c = map(int, input().split())

# 리스트로 받기
arr = list(map(int, input().split()))`,
      note: `💡 split()은 기본적으로 모든 공백(스페이스, 탭)을 구분자로 사용합니다.`,
      dart: `var parts = stdin.readLineSync()!.split(' ');
int a = int.parse(parts[0]), b = int.parse(parts[1]);`
    },
    drills: [
      { title:"드릴 1 — 두 정수 합산", prompt:"한 줄에 공백으로 구분된 두 정수를 입력받아 합계를 출력하세요.", full:"a, b = map(int, input().split())\nprint(a + b)", blank:"a, b = map(___, input().split())", answer:"int", options:["int","str","float","map"], blocks:["a, b = map(int, input().split())","print(a + b)"], hint:"map(int, ...)는 분리된 각 요소를 정수로 변환합니다." },
      { title:"드릴 2 — 세 정수 입력 후 곱셈", prompt:"한 줄에 공백으로 구분된 세 정수를 입력받아 세 수의 곱을 출력하세요.", full:"x, y, z = map(int, input().split())\nprint(x * y * z)", blank:"x, y, z = map(___, input().split())", answer:"int", options:["int","float","str","tuple"], blocks:["x, y, z = map(int, input().split())","print(x * y * z)"], hint:"세 개 이상도 같은 패턴: a, b, c = map(int, input().split())" },
      { title:"드릴 3 — 두 실수 입력 후 평균", prompt:"한 줄에 공백으로 구분된 두 실수를 입력받아 평균을 출력하세요.", full:"a, b = map(float, input().split())\nprint((a + b) / 2)", blank:"a, b = map(___, input().split())", answer:"float", options:["float","int","str","Decimal"], blocks:["a, b = map(float, input().split())","print((a + b) / 2)"], hint:"실수는 map(float, ...)로 변환합니다. int 대신 float을 사용하세요." },
      { title:"드릴 4 — 두 정수로 최솟값·최댓값", prompt:"한 줄에 두 정수를 입력받아 더 작은 수와 더 큰 수를 차례로 출력하세요.", full:"a, b = map(int, input().split())\nprint(min(a, b), max(a, b))", blank:"a, b = map(___, input().split())\nprint(min(a, b), max(a, b))", answer:"int", options:["int","float","str","list"], blocks:["a, b = map(int, input().split())","print(min(a, b), max(a, b))"], hint:"min(), max()에 변수 여러 개를 직접 넣을 수 있습니다." }
    ]
  },
  { cat:0, id:4, title:"실수 소수점 2자리 출력",
    prompt:"실수를 입력받아 소수점 아래 2자리까지 출력하는 코드를 완성하세요. f-string의 형식 지정자를 사용합니다. 예: 입력 3.14159 → 출력 3.14",
    full:"n = float(input())\nprint(f'{n:.2f}')",
    hint:"f-string 형식: {변수:.소수자리수f} → {n:.2f}는 소수점 2자리",
    concept: {
      title: "float()와 소수점 포맷팅 :.2f",
      desc: `float()은 실수를 받을 때 사용합니다. f-string에서 {변수:.2f} 패턴은 소수점 이하 자릿수를 고정합니다. 코딩테스트의 '소수점 2자리 출력' 문제에 필수입니다.`,
      syntax: `x = float(input())        # 실수 입력

# 소수점 포맷
print(f"{x:.1f}")          # 소수 1자리
print(f"{x:.2f}")          # 소수 2자리 (가장 흔함)
print(f"{x:.4f}")          # 소수 4자리

# 예시
x = 3.14159
f"{x:.2f}"   # "3.14"
f"{x:.0f}"   # "3"   (정수처럼)
f"{x:8.2f}"  # "    3.14" (8칸 우측 정렬)`,
      note: `💡 {avg:.2f} — 콜론(:) 뒤에 포맷 지정자. .2f = 소수점 2자리 고정, 반올림.`,
      dart: `double x = double.parse(stdin.readLineSync()!);
print(x.toStringAsFixed(2));  // Dart 방식`
    },
    drills: [
      { title:"드릴 1 — 소수점 2자리", prompt:"실수를 입력받아 소수점 아래 2자리까지 출력하세요.", full:"n = float(input())\nprint(f'{n:.2f}')", blank:"print(f'{n:___}')", answer:".2f", options:[".2f","2f",":.2","2"], blocks:["n = float(input())","print(f'{n:.2f}')"], hint:"포맷 지정자: {n:.2f}는 n을 소수점 2자리로 출력합니다." },
      { title:"드릴 2 — 소수점 3자리", prompt:"실수를 입력받아 소수점 아래 3자리까지 출력하세요.", full:"n = float(input())\nprint(f'{n:.3f}')", blank:"print(f'{n:___}')", answer:".3f", options:[".3f","3f",":3.",".3"], blocks:["n = float(input())","print(f'{n:.3f}')"], hint:"소수점 자리 수만 바꾸면 됩니다: {n:.3f}" },
      { title:"드릴 3 — 정수와 실수 혼합", prompt:"정수와 실수를 각각 입력받아 정수는 그대로, 실수는 소수점 2자리로 한 줄에 출력하세요.", full:"a = int(input())\nb = float(input())\nprint(f'{a} {b:.2f}')", blank:"print(f'{a} {b:___}')", answer:".2f", options:[".2f","d",".2","f"], blocks:["a = int(input())","b = float(input())","print(f'{a} {b:.2f}')"], hint:"한 f-string 안에 여러 포맷 지정자를 쓸 수 있습니다." },
      { title:"드릴 4 — 원주율 계산 출력", prompt:"반지름 <code>r</code>을 실수로 입력받아 원의 넓이(π×r²)를 소수점 4자리로 출력하세요. π=3.14159265 사용.", full:"r = float(input())\narea = 3.14159265 * r ** 2\nprint(f'{area:.4f}')", blank:"print(f'{area:___}')", answer:".4f", options:[".4f","4f",".4",".2f"], blocks:["r = float(input())","area = 3.14159265 * r ** 2","print(f'{area:.4f}')"], hint:"자릿수만 바꾸면 됩니다: {area:.4f}" }
    ]
  },
  { cat:0, id:5, title:"문자열 * 정수로 반복 출력",
    prompt:"<code>'Hi'</code> 문자열을 3번 반복해서 출력하는 코드를 완성하세요. 문자열과 정수 사이의 특정 연산자를 사용합니다. 출력 결과: <code>HiHiHi</code>",
    full:"print('Hi' * 3)",
    hint:"문자열에 * 연산자를 쓰면 그 문자열을 n번 반복합니다.",
    concept: {
      title: "문자열 × 정수 — 반복 출력",
      desc: `Python에서 문자열에 정수를 곱하면 그 문자열이 반복됩니다. Java/Dart에서는 불가능한 Python만의 직관적 표현입니다.`,
      syntax: `# 문자열 반복
print("*" * 5)       # → *****
print("-=" * 3)      # → -=-==-=
print("ha" * 4)      # → hahahaha

# 변수와 함께
n = 4
print("*" * n)

# f-string 안에서도 가능
name = "수"
print(f"♥{name}♥" * 3)  # → ♥수♥♥수♥♥수♥

# 리스트 반복도 동일
[0] * 5    # → [0, 0, 0, 0, 0]`,
      note: `💡 문자열 * 정수는 Python만의 기능! Java/Dart에는 없습니다. 별 찍기 문제에 유용.`,
      dart: `// Dart는 직접적 지원 없음
List.filled(5, '*').join()  // "****" 방식`
    },
    drills: [
      { title:"드릴 1 — 고정 횟수 반복", prompt:"문자열 <code>'Hello'</code>를 2번 반복해서 출력하세요.", full:"print('Hello' * 2)", blank:"print('Hello' ___ 2)", answer:"*", options:["*","+","x","-"], blocks:["print('Hello' * 2)"], hint:"문자열 * 정수 = 문자열 반복입니다." },
      { title:"드릴 2 — 입력값으로 반복 횟수 결정", prompt:"정수 n을 입력받아 <code>'*'</code>을 n번 반복해서 출력하세요.", full:"n = int(input())\nprint('*' * n)", blank:"print('*' ___ n)", answer:"*", options:["*","+","for","**"], blocks:["n = int(input())","print('*' * n)"], hint:"문자열은 정수 변수와도 * 연산이 가능합니다." },
      { title:"드릴 3 — 여러 글자 패턴 반복", prompt:"문자열 <code>'-='</code>을 4번 반복해서 출력하세요.", full:"print('-=' * 4)", blank:"print('-=' ___ 4)", answer:"*", options:["*","+","for","x"], blocks:["print('-=' * 4)"], hint:"한 문자뿐 아니라 여러 문자 패턴도 반복 가능합니다." },
      { title:"드릴 4 — 문자열·반복 조합 출력", prompt:"이름을 입력받고, 그 이름을 <code>'♥'</code>로 감싸 3번 반복 출력하세요. 예: name=수 → <code>♥수♥♥수♥♥수♥</code>", full:"name = input()\nprint(f'♥{name}♥' * 3)", blank:"print(f'♥{name}♥' ___ 3)", answer:"*", options:["*","+","x","**"], blocks:["name = input()","print(f'♥{name}♥' * 3)"], hint:"f-string으로 만든 문자열도 * 반복이 가능합니다." }
    ]
  },
  { cat:0, id:6, title:"정수의 제곱 출력",
    prompt:"정수 <code>n</code>을 입력받아 <code>n의 제곱</code>을 출력하는 코드를 완성하세요. 파이썬 거듭제곱 연산자를 사용합니다. 예: 입력 4 → 출력 16",
    full:"n = int(input())\nprint(n ** 2)",
    hint:"파이썬 거듭제곱은 **입니다. ^ 는 비트 XOR이에요!",
    concept: {
      title: "** 거듭제곱 연산자",
      desc: `Python의 거듭제곱 연산자는 **입니다. Java의 Math.pow(), Dart의 pow()와 달리 연산자로 직접 사용합니다. ^ 는 비트 XOR이므로 절대 혼동하지 마세요!`,
      syntax: `# 거듭제곱
2 ** 3   # → 8    (2의 3제곱)
n ** 2   # n의 제곱
n ** 0.5 # n의 제곱근 (√n)

# 내장함수 pow()도 동일
pow(2, 3)    # → 8

# 주의: ^ 는 XOR이다!
2 ^ 3   # → 1  (비트 XOR, 거듭제곱이 아님!)

# 활용
2 ** 10  # → 1024
9 ** 0.5 # → 3.0 (제곱근)`,
      note: `💡 Python만 ** 연산자 사용! Java: Math.pow(2,3), Dart: pow(2,3). ^ 는 XOR 주의!`,
      dart: `import 'dart:math';
pow(2, 3)  →  2 ** 3
Math.sqrt(9)  →  9 ** 0.5`
    },
    drills: [
      { title:"드릴 1 — n의 제곱", prompt:"정수 n을 입력받아 n²을 출력하세요.", full:"n = int(input())\nprint(n ** 2)", blank:"print(n ___ 2)", answer:"**", options:["**","^","*","pow"], blocks:["n = int(input())","print(n ** 2)"], hint:"거듭제곱은 ** 두 글자입니다. * 하나는 곱셈이에요!" },
      { title:"드릴 2 — n의 세제곱", prompt:"정수 n을 입력받아 n³을 출력하세요.", full:"n = int(input())\nprint(n ** 3)", blank:"print(n ___ 3)", answer:"**", options:["**","*3","pow","xxx"], blocks:["n = int(input())","print(n ** 3)"], hint:"지수만 바꾸면 됩니다: n ** 3" },
      { title:"드릴 3 — n의 제곱근", prompt:"정수 n을 입력받아 √n (제곱근)을 출력하세요.", full:"n = int(input())\nprint(n ** 0.5)", blank:"print(n ___ 0.5)", answer:"**", options:["**","^","/","sqrt"], blocks:["n = int(input())","print(n ** 0.5)"], hint:"0.5 지수(=1/2)를 사용하면 제곱근을 구할 수 있습니다." },
      { title:"드릴 4 — pow() 내장함수 활용", prompt:"정수 a, b를 한 줄에 입력받아 a의 b제곱을 출력하세요. <code>pow()</code> 내장함수를 사용합니다.", full:"a, b = map(int, input().split())\nprint(pow(a, b))", blank:"print(___(a, b))", answer:"pow", options:["pow","**","math.pow","int"], blocks:["a, b = map(int, input().split())","print(pow(a, b))"], hint:"pow(밑, 지수)는 ** 연산자와 동일한 결과를 냅니다." },
      { title:"드릴 5 — 지수 비교", prompt:"정수 n을 입력받아 n²과 2ⁿ 중 어느 쪽이 더 큰지 출력하세요. (같으면 '같음')", full:"n = int(input())\nif n**2 > 2**n:\n    print('n제곱')\nelif n**2 < 2**n:\n    print('2의n승')\nelse:\n    print('같음')", blank:"if n ___ 2 > 2 ___ n:", answer:"** / **", options:["** / **","^ / ^","* / *","** / ^"], blocks:["n = int(input())","if n**2 > 2**n:","    print('n제곱')","elif n**2 < 2**n:","    print('2의n승')","else:","    print('같음')"], hint:"두 거듭제곱 모두 ** 연산자를 씁니다." }
    ]
  },
  { cat:0, id:7, title:"몫과 나머지 동시 출력",
    prompt:"두 정수를 입력받아 첫 수를 둘째 수로 나눈 <code>몫</code>과 <code>나머지</code>를 공백으로 구분해 출력하는 코드를 완성하세요.",
    full:"a, b = map(int, input().split())\nprint(a // b, a % b)",
    hint:"// 는 정수 나눗셈(몫)이고 % 는 나머지입니다.",
    concept: {
      title: "// 정수나눗셈과 % 나머지",
      desc: `// 는 몫만 남기는 정수 나눗셈, % 는 나머지를 구합니다. 홀짝 판별(n%2), 단위 변환(분→시간), 자릿수 분리 등 코딩테스트 단골 패턴입니다.`,
      syntax: `# 나눗셈 비교
5 / 2    # → 2.5  (항상 실수!)
5 // 2   # → 2    (몫, 소수점 버림)
5 % 2    # → 1    (나머지)

# 동시에 사용
a, b = 17, 5
print(a // b)  # → 3  (몫)
print(a % b)   # → 2  (나머지)

# 실용 패턴
n % 2 == 0   # 짝수 판별
n % 3 == 0   # 3의 배수 판별
m // 60      # 분 → 시간
m % 60       # 분에서 남은 분`,
      note: `💡 7 % 3 = 1 계산: 7 = 3×2 + 1. 나머지 1. 홀짝 판별: n%2가 0이면 짝수, 1이면 홀수.`,
      dart: `7 ~/ 3  →  7 // 3  (Dart의 정수나눗셈)
7 % 3   →  7 % 3   (동일)`
    },
    drills: [
      { title:"드릴 1 — 몫과 나머지", prompt:"두 정수를 한 줄에 입력받아 첫 수를 둘째 수로 나눈 몫과 나머지를 출력하세요.", full:"a, b = map(int, input().split())\nprint(a // b, a % b)", blank:"print(a ___ b, a % b)", answer:"//", options:["//","/","//!","mod"], blocks:["a, b = map(int, input().split())","print(a // b, a % b)"], hint:"정수 나눗셈은 //를 사용합니다." },
      { title:"드릴 2 — 나머지만 출력", prompt:"두 정수 a, b를 입력받아 a를 b로 나눈 나머지만 출력하세요.", full:"a, b = map(int, input().split())\nprint(a % b)", blank:"print(a ___ b)", answer:"%", options:["%","//","abs","mod"], blocks:["a, b = map(int, input().split())","print(a % b)"], hint:"% 연산자는 나머지를 구합니다." },
      { title:"드릴 3 — 분 → 시간·분 변환", prompt:"총 분 <code>m</code>을 입력받아 몇 시간 몇 분인지 출력하세요. 예: 125 → 2 5", full:"m = int(input())\nprint(m // 60, m % 60)", blank:"print(m ___ 60, m % 60)", answer:"//", options:["//","/","divmod","%"], blocks:["m = int(input())","print(m // 60, m % 60)"], hint:"// 와 %를 함께 사용하면 시간 단위 변환에 유용합니다." },
      { title:"드릴 4 — 초 → 시·분·초 변환", prompt:"총 초 <code>s</code>를 입력받아 시간, 분, 초로 변환해 출력하세요. 예: 3661 → 1 1 1", full:"s = int(input())\nhours = s // 3600\nremain = s % 3600\nminutes = remain // 60\nseconds = remain % 60\nprint(hours, minutes, seconds)", blank:"hours = s ___ 3600\nremain = s % 3600", answer:"//", options:["//","/","%","*"], blocks:["s = int(input())","hours = s // 3600","remain = s % 3600","minutes = remain // 60","seconds = remain % 60","print(hours, minutes, seconds)"], hint:"3600초 = 1시간. 먼저 시간을 구하고 나머지로 분·초를 구합니다." }
    ]
  },
  { cat:0, id:8, title:"여러 줄 입력을 리스트로",
    prompt:"첫 줄에 정수 n을 입력받고, 이후 n줄에 걸쳐 정수를 하나씩 입력받아 리스트 <code>arr</code>에 저장하는 코드를 완성하세요.",
    full:"n = int(input())\narr = [int(input()) for _ in range(n)]",
    hint:"n번 반복해서 입력받으려면 range(n)을 사용합니다.",
    concept: {
      title: "range(n) + for로 n줄 입력 받기",
      desc: `n번 입력받아 리스트에 저장하는 패턴은 코딩테스트에서 매우 자주 등장합니다. 리스트 컴프리헨션으로 한 줄로 작성하는 것이 Pythonic합니다.`,
      syntax: `# n번 한 줄씩 정수 입력
n = int(input())
arr = [int(input()) for _ in range(n)]

# _ 는 '사용 안 할 변수' 관례 이름

# 풀어쓰면
arr = []
for _ in range(n):
    arr.append(int(input()))

# 응용: 문자열 리스트
words = [input() for _ in range(n)]

# 응용: 1~n 제곱
squares = [i**2 for i in range(1, n+1)]`,
      note: `💡 _ 는 사용하지 않는 변수를 나타내는 관례. range(n)은 0,1,...,n-1까지 n번 반복.`,
      dart: `List<int> arr = List.generate(n, (_) => int.parse(stdin.readLineSync()!));`
    },
    drills: [
      { title:"드릴 1 — 정수 리스트 생성", prompt:"n을 입력받고 n개의 정수를 한 줄씩 입력받아 리스트로 만드세요.", full:"n = int(input())\narr = [int(input()) for _ in range(n)]", blank:"arr = [int(input()) for _ in range(___)]", answer:"n", options:["n","n+1","range","_"], blocks:["n = int(input())","arr = [int(input()) for _ in range(n)]"], hint:"_ 는 사용하지 않는 변수를 나타냅니다. n번만 반복하면 됩니다." },
      { title:"드릴 2 — 문자열 리스트 생성", prompt:"m을 입력받고, m번 반복해서 문자열을 입력받아 리스트 <code>words</code>에 저장하세요.", full:"m = int(input())\nwords = [input() for _ in range(m)]", blank:"words = [input() for _ in range(___)]", answer:"m", options:["m","_","words","input"], blocks:["m = int(input())","words = [input() for _ in range(m)]"], hint:"문자열은 int() 없이 input()만 써도 됩니다." },
      { title:"드릴 3 — 1~n 제곱 리스트", prompt:"정수 k를 입력받고 1부터 k까지 각 수의 제곱을 담은 리스트를 만드세요.", full:"k = int(input())\nsquares = [i ** 2 for i in range(1, k + 1)]", blank:"squares = [i ** 2 for i in range(1, ___ + 1)]", answer:"k", options:["k","k-1","_","range"], blocks:["k = int(input())","squares = [i ** 2 for i in range(1, k + 1)]"], hint:"range(1, k+1)은 1~k를 의미합니다." },
      { title:"드릴 4 — 합계 계산", prompt:"n개의 정수를 각 줄에 입력받아 모두 더한 합계를 출력하세요.", full:"n = int(input())\narr = [int(input()) for _ in range(n)]\nprint(sum(arr))", blank:"arr = [___(input()) for _ in range(n)]", answer:"int", options:["int","str","float","list"], blocks:["n = int(input())","arr = [int(input()) for _ in range(n)]","print(sum(arr))"], hint:"각 요소를 정수로 변환해야 sum()으로 합산할 수 있습니다." }
    ]
  },
  { cat:0, id:9, title:"문자열 길이 출력",
    prompt:"문자열 <code>s</code>를 입력받아 그 길이를 출력하는 코드를 완성하세요. 예: 입력 'hello' → 출력 5",
    full:"s = input()\nprint(len(s))",
    hint:"len()은 파이썬 내장 함수로 문자열, 리스트 등의 길이를 반환합니다.",
    concept: {
      title: "len() — 길이 구하기",
      desc: `len()은 문자열, 리스트, 튜플 등 모든 순서형 자료의 길이(원소 개수)를 반환하는 내장 함수입니다. 조건문, 범위 설정, 빈 여부 확인에 두루 사용됩니다.`,
      syntax: `# 문자열 길이
len("hello")      # → 5
len("안녕")       # → 2 (글자 수)

# 리스트 길이
arr = [1, 2, 3, 4]
len(arr)           # → 4

# 활용 패턴
s = input()
if len(s) >= 5:
    print("길어요")

# 인덱스 범위
for i in range(len(arr)):
    print(arr[i])

# 마지막 인덱스
arr[len(arr) - 1]  # arr[-1]과 동일`,
      note: `💡 len()은 Java의 .length(), Dart의 .length와 동일. 단, Python은 함수 호출: len(s). s.len() 아님!`,
      dart: `str.length  →  len(s)
arr.length  →  len(arr)`
    },
    drills: [
      { title:"드릴 1 — 문자열 길이", prompt:"문자열을 입력받아 그 길이를 출력하세요.", full:"s = input()\nprint(len(s))", blank:"print(___(s))", answer:"len", options:["len","length","size","count"], blocks:["s = input()","print(len(s))"], hint:"len()은 문자열의 문자 개수를 반환합니다." },
      { title:"드릴 2 — 리스트 길이", prompt:"n개의 정수를 입력받은 후 그 리스트의 길이를 출력하세요.", full:"n = int(input())\narr = [int(input()) for _ in range(n)]\nprint(len(arr))", blank:"print(___(arr))", answer:"len", options:["len","size","max","sum"], blocks:["n = int(input())","arr = [int(input()) for _ in range(n)]","print(len(arr))"], hint:"len()은 리스트의 요소 개수도 반환합니다." },
      { title:"드릴 3 — 길이로 조건 판별", prompt:"문자열을 입력받아 길이가 5 이상이면 <code>'길어요'</code>, 아니면 <code>'짧아요'</code>를 출력하세요.", full:"s = input()\nif len(s) >= 5:\n    print('길어요')\nelse:\n    print('짧아요')", blank:"if ___(s) >= 5:", answer:"len", options:["len","length","size","s"], blocks:["s = input()","if len(s) >= 5:","    print('길어요')","else:","    print('짧아요')"], hint:"len()의 반환값을 if 조건에서 많이 사용합니다." },
      { title:"드릴 4 — 가장 긴 단어 찾기", prompt:"공백으로 구분된 단어들을 한 줄에 입력받아 가장 긴 단어의 길이를 출력하세요.", full:"words = input().split()\nprint(max(len(w) for w in words))", blank:"print(max(___(w) for w in words))", answer:"len", options:["len","max","size","count"], blocks:["words = input().split()","print(max(len(w) for w in words))"], hint:"len()을 제너레이터 표현식 안에서 사용할 수 있습니다." }
    ]
  },
  { cat:0, id:10, title:"숫자 → 문자열 변환",
    prompt:"정수 <code>n = 42</code>를 문자열로 변환해 변수 <code>s</code>에 저장하는 코드를 완성하세요.",
    full:"n = 42\ns = str(n)\nprint(type(s))",
    hint:"str()로 숫자를 문자열로 변환합니다. 문자열 결합 시 자주 필요해요.",
    concept: {
      title: "str() — 숫자를 문자열로 변환",
      desc: `str()은 정수, 실수, 불리언 등 모든 자료형을 문자열로 변환합니다. 문자열과 숫자를 + 로 연결할 때, 자릿수를 셀 때 사용합니다. f-string이 있으면 대부분 str() 불필요하지만 알아두세요.`,
      syntax: `str(42)      # → "42"
str(3.14)    # → "3.14"
str(True)    # → "True"

# 문자열 연결 시
n = 42
"숫자: " + str(n)    # → "숫자: 42"
# vs f-string
f"숫자: {n}"         # → "숫자: 42" (더 간편)

# 자릿수 세기
n = 12345
len(str(n))          # → 5 (자릿수!)`,
      note: `💡 숫자 → 문자: str(). 문자 → 숫자: int() / float(). 방향 헷갈리지 마세요.`,
      dart: `n.toString()  →  str(n)
\$n (in string)  →  str(n)`
    },
    drills: [
      { title:"드릴 1 — 정수를 문자열로", prompt:"정수 n을 입력받아 문자열로 변환해 출력하세요.", full:"n = int(input())\ns = str(n)\nprint(s)", blank:"s = ___(n)", answer:"str", options:["str","int","string","float"], blocks:["n = int(input())","s = str(n)","print(s)"], hint:"str()는 숫자를 문자열로 바꿉니다." },
      { title:"드릴 2 — 숫자와 문자열 연결", prompt:"정수 a를 입력받아 <code>'숫자는 [a]입니다'</code>라고 출력하세요. str()와 + 연산자를 사용합니다.", full:"a = int(input())\nprint('숫자는 ' + str(a) + '입니다')", blank:"print('숫자는 ' + ___(a) + '입니다')", answer:"str", options:["str","int","repr","format"], blocks:["a = int(input())","print('숫자는 ' + str(a) + '입니다')"], hint:"문자열끼리 + 연결하려면 str()로 먼저 변환해야 합니다." },
      { title:"드릴 3 — 실수를 문자열로", prompt:"실수 x를 입력받아 문자열로 변환한 후 그 길이를 출력하세요.", full:"x = float(input())\ns = str(x)\nprint(len(s))", blank:"s = ___(x)", answer:"str", options:["str","float","len","int"], blocks:["x = float(input())","s = str(x)","print(len(s))"], hint:"어떤 자료형이든 str()로 문자열로 변환할 수 있습니다." },
      { title:"드릴 4 — 자릿수 세기", prompt:"정수 n을 입력받아 몇 자리 수인지 출력하세요. 예: 12345 → 5", full:"n = int(input())\nprint(len(str(n)))", blank:"print(len(___(n)))", answer:"str", options:["str","abs","int","len"], blocks:["n = int(input())","print(len(str(n)))"], hint:"str()로 변환한 뒤 len()으로 길이를 세는 패턴입니다." }
    ]
  },
  { cat:0, id:11, title:"공백 기준 분리 후 정수 리스트",
    prompt:"한 줄에 공백으로 구분된 여러 정수를 입력받아 정수 리스트 <code>arr</code>에 저장하는 코드를 완성하세요.",
    full:"arr = list(map(int, input().split()))",
    hint:"split()은 공백을 기준으로 문자열을 나눕니다. split(',')는 콤마 기준이에요.",
    concept: {
      title: "split()과 list(map()) — 정수 리스트 입력",
      desc: `한 줄에 공백으로 여러 정수가 입력되는 패턴은 코딩테스트 최빈출입니다. list(map(int, input().split()))으로 정수 리스트를 만드는 패턴을 외우세요.`,
      syntax: `# 핵심 패턴 — 정수 리스트
arr = list(map(int, input().split()))
# 입력: "1 2 3 4 5"
# → [1, 2, 3, 4, 5]

# 문자열 리스트
words = input().split()
# 입력: "apple banana cherry"
# → ["apple", "banana", "cherry"]

# 콤마 구분자
arr = list(map(int, input().split(',')))
# 입력: "1,2,3"
# → [1, 2, 3]

# 바로 활용
arr = list(map(int, input().split()))
print(max(arr), min(arr), sum(arr))`,
      note: `💡 split()에 인자 없으면 공백 기준. split(',')은 콤마 기준. split(': ')는 ': ' 기준.`,
      dart: `stdin.readLineSync()!.split(' ').map(int.parse).toList()  →  list(map(int, input().split()))`
    },
    drills: [
      { title:"드릴 1 — 정수 리스트", prompt:"한 줄에 공백으로 구분된 정수들을 입력받아 정수 리스트로 만드세요.", full:"arr = list(map(int, input().split()))", blank:"arr = list(map(int, input().___()))", answer:"split", options:["split","join","strip","parse"], blocks:["arr = list(map(int, input().split()))"], hint:"split()은 문자열을 분리합니다. map(int, ...)는 각 요소를 정수로 변환합니다." },
      { title:"드릴 2 — 문자열 리스트", prompt:"한 줄에 공백으로 구분된 단어들을 입력받아 문자열 리스트로 만드세요.", full:"words = input().split()", blank:"words = input().___()  ", answer:"split", options:["split","join","strip","list"], blocks:["words = input().split()","print(words)"], hint:"split()만 써도 바로 리스트가 됩니다. 정수 변환 없이 문자열 그대로입니다." },
      { title:"드릴 3 — 콤마 구분 정수 리스트", prompt:"한 줄에 콤마로 구분된 정수들을 입력받아 정수 리스트로 만드세요. 예: <code>1,2,3,4,5</code>", full:"arr = list(map(int, input().split(',')))", blank:"arr = list(map(int, input().split(___)))", answer:"','", options:["','","''","' '","\" \""], blocks:["arr = list(map(int, input().split(',')))"], hint:"split()의 인자를 바꾸면 다른 구분자로도 분리할 수 있습니다." },
      { title:"드릴 4 — 최댓값·최솟값·합계", prompt:"공백으로 구분된 정수들을 입력받아 최댓값, 최솟값, 합계를 각각 출력하세요.", full:"arr = list(map(int, input().split()))\nprint(max(arr))\nprint(min(arr))\nprint(sum(arr))", blank:"arr = list(map(int, input().___()))", answer:"split", options:["split","join","strip","list"], blocks:["arr = list(map(int, input().split()))","print(max(arr))","print(min(arr))","print(sum(arr))"], hint:"리스트로 만든 뒤 max(), min(), sum()을 바로 사용합니다." }
    ]
  },
  { cat:0, id:12, title:"f-string 산술 연산 출력",
    prompt:"a=5, b=3이 주어질 때 <code>'5 + 3 = 8'</code> 형식으로 출력하는 코드를 완성하세요. f-string의 중괄호 안에서 직접 연산합니다.",
    full:"a, b = 5, 3\nprint(f'{a} + {b} = {a + b}')",
    hint:"f-string의 { } 안에는 변수뿐 아니라 연산식도 쓸 수 있습니다.",
    concept: {
      title: "f-string 안에서 연산식 사용",
      desc: `f-string의 {} 안에는 변수뿐 아니라 연산식, 함수 호출, 메서드도 사용할 수 있습니다. 중간 변수 없이 바로 계산 결과를 출력할 때 편리합니다.`,
      syntax: `a, b = 5, 3

# 기본 출력
print(f"{a} + {b} = {a + b}")   # 5 + 3 = 8
print(f"{a} * {b} = {a * b}")   # 5 * 3 = 15
print(f"{a} // {b} = {a // b}") # 5 // 3 = 1

# 조건식도 가능
print(f"{'짝' if a%2==0 else '홀'}")

# 함수 호출도 가능
words = ["hi", "hello"]
print(f"최장: {max(words, key=len)}")

# 중첩 포맷
pi = 3.14159
print(f"π ≈ {pi:.3f}")  # π ≈ 3.142`,
      note: `💡 {} 안의 표현식은 Python 표현식이면 무엇이든 가능합니다. 단, 큰따옴표/작은따옴표 혼용 주의.`,
      dart: `'\${a + b}'  →  f'{a + b}'
'\${a > 0 ? "양수" : "음수"}'  →  f'{"양수" if a>0 else "음수"}'`
    },
    drills: [
      { title:"드릴 1 — 덧셈 연산 출력", prompt:"두 정수 a, b를 입력받아 <code>'a + b = c'</code> 형식으로 출력하세요.", full:"a = int(input())\nb = int(input())\nprint(f'{a} + {b} = {a + b}')", blank:"print(f'{a} + {b} = {___}')", answer:"a + b", options:["a + b","a+b","sum","c"], blocks:["a = int(input())","b = int(input())","print(f'{a} + {b} = {a + b}')"], hint:"f-string의 { } 안에 a + b 같은 연산식을 직접 쓸 수 있습니다." },
      { title:"드릴 2 — 곱셈 연산 출력", prompt:"정수 x를 입력받아 <code>'x * x = y'</code> 형식으로 제곱을 출력하세요.", full:"x = int(input())\nprint(f'{x} * {x} = {x * x}')", blank:"print(f'{x} * {x} = {___}')", answer:"x * x", options:["x * x","x ** 2","x*x","pow"], blocks:["x = int(input())","print(f'{x} * {x} = {x * x}')"], hint:"f-string 내부에서 곱셈(*)도 바로 계산됩니다." },
      { title:"드릴 3 — 복합 연산 출력", prompt:"정수 p, q를 입력받아 <code>'(p + q) × 2 = r'</code> 형식으로 출력하세요.", full:"p = int(input())\nq = int(input())\nprint(f'({p} + {q}) × 2 = {(p + q) * 2}')", blank:"print(f'({p} + {q}) × 2 = {___}')", answer:"(p + q) * 2", options:["(p + q) * 2","(p+q)*2","p + q * 2","result"], blocks:["p = int(input())","q = int(input())","print(f'({p} + {q}) × 2 = {(p + q) * 2}')"], hint:"괄호와 함께 복잡한 연산식도 f-string 안에서 사용 가능합니다." },
      { title:"드릴 4 — 나눗셈 결과 포맷 출력", prompt:"두 정수를 입력받아 <code>'a ÷ b = 몫...나머지'</code> 형식으로 출력하세요.", full:"a, b = map(int, input().split())\nprint(f'{a} ÷ {b} = {a // b}...{a % b}')", blank:"print(f'{a} ÷ {b} = {a ___ b}...{a % b}')", answer:"//", options:["//","/","%","**"], blocks:["a, b = map(int, input().split())","print(f'{a} ÷ {b} = {a // b}...{a % b}')"], hint:"f-string 안에서 //와 % 연산도 바로 쓸 수 있습니다." }
    ]
  },

  // ─── CATEGORY 1: 조건문 ───────────────────────────────────────
  { cat:1, id:0, title:"종합 기본개념 — 조건문",
    prompt:"조건문 카테고리의 핵심 개념을 한눈에 정리합니다. if/elif/else 구조, 비교·논리 연산자, 삼항 연산자를 이해하고 드릴로 익혀보세요.",
    full:`# 조건문의 모든 것
if 조건1:           # 콜론(:) 필수!
    실행코드1       # 들여쓰기 4칸
elif 조건2:         # else if 아님, elif!
    실행코드2
else:
    실행코드3

# 비교 연산자
# == != > >= < <=

# 논리 연산자 (영어!)
a > 0 and b > 0    # && 아님!
a > 0 or b > 0     # || 아님!
not flag           # !  아님!

# 삼항 연산자 (순서 주의!)
# 참값 if 조건 else 거짓값
result = "성인" if age >= 18 else "미성년자"

# Python만 가능한 연속 비교
0 <= n <= 100`,
    hint:"Python은 {} 없이 들여쓰기로 블록 구분. elif는 한 단어!",
    concept: {
      title: "조건문 — 전체 개요",
      desc: `Python 조건문은 들여쓰기(보통 Space 4칸)로 블록을 구분합니다. Java/Dart의 {}가 없습니다. elif는 else if가 아닌 한 단어입니다. 논리 연산자도 && || ! 대신 and or not을 씁니다.`,
      syntax: `if n > 0:
    print("양수")
elif n < 0:      # else if 아님!
    print("음수")
else:
    print("영")

# 비교: ==  !=  >  >=  <  <=
# 논리: and  or  not  (&&, ||, ! 아님!)

# 삼항: 참값 if 조건 else 거짓값
result = "성인" if age >= 18 else "미성년자"

# 연속 비교 (Python only)
0 <= n <= 100     # ✓ 가능
0 <= n and n <= 100  # 동일 (긴 버전)`,
      note: `💡 들여쓰기가 틀리면 IndentationError! Tab과 Space 혼용 금지. 항상 Space 4칸.`,
      dart: `else if  →  elif
&&  →  and
||  →  or
!   →  not
조건 ? a : b  →  a if 조건 else b`
    },
    drills: [
      { title:"드릴 1 — if 기본 구조", prompt:"정수 n을 입력받아 0보다 크면 '양수'를 출력하세요.", full:"n = int(input())\nif n > 0:\n    print('양수')", blank:"if n ___ 0:", answer:"> ", options:["> ",">= ","== ","!= "], blocks:["n = int(input())","if n > 0:","    print('양수')"], hint:"비교 연산자 >는 왼쪽이 오른쪽보다 클 때 True입니다." },
      { title:"드릴 2 — elif 사용", prompt:"정수 n을 입력받아 양수면 '양수', 음수면 '음수', 0이면 '영'을 출력하세요.", full:"n = int(input())\nif n > 0:\n    print('양수')\nelif n < 0:\n    print('음수')\nelse:\n    print('영')", blank:"___ n < 0:", answer:"elif", options:["elif","else if","else","if"], blocks:["n = int(input())","if n > 0:","    print('양수')","elif n < 0:","    print('음수')","else:","    print('영')"], hint:"elif는 else if가 아닌 한 단어입니다!" },
      { title:"드릴 3 — and 논리 연산자", prompt:"두 정수 a, b를 입력받아 둘 다 양수면 '모두 양수'를 출력하세요.", full:"a, b = map(int, input().split())\nif a > 0 and b > 0:\n    print('모두 양수')", blank:"if a > 0 ___ b > 0:", answer:"and", options:["and","&&","or","&"], blocks:["a, b = map(int, input().split())","if a > 0 and b > 0:","    print('모두 양수')"], hint:"Python의 AND 연산자는 and (&&가 아님)." },
      { title:"드릴 4 — 삼항 연산자", prompt:"정수 n을 입력받아 짝수면 '짝수', 홀수면 '홀수'를 한 줄로 출력하세요.", full:"n = int(input())\nprint('짝수' if n % 2 == 0 else '홀수')", blank:"print('짝수' ___ n % 2 == 0 else '홀수')", answer:"if", options:["if","elif","when","?"], blocks:["n = int(input())","print('짝수' if n % 2 == 0 else '홀수')"], hint:"Python 삼항: 참값 if 조건 else 거짓값" }
    ]
  },

  { cat:1, id:1, title:"양수/음수/영 판별",
    prompt:"정수 <code>n</code>을 입력받아 양수면 '양수', 음수면 '음수', 0이면 '영'을 출력하는 코드를 완성하세요.",
    full:"n = int(input())\nif n > 0:\n    print('양수')\nelif n < 0:\n    print('음수')\nelse:\n    print('영')",
    hint:"elif는 이전 if가 False일 때 추가 조건을 검사합니다.",
    concept: {
      title: "if / elif / else 기본 구조",
      desc: `Python 조건문은 들여쓰기로 블록을 구분합니다. 중괄호 {}가 없고, 콜론(:) 뒤의 들여쓰기된 코드가 블록입니다. elif는 Java/Dart의 else if와 같지만 한 단어입니다.`,
      syntax: `n = int(input())

if n > 0:         # 콜론(:) 필수!
    print("양수") # 스페이스 4칸 들여쓰기
elif n < 0:       # else if 아니고 elif!
    print("음수")
else:
    print("영")

# 비교 연산자
# ==  같다  (= 는 대입!)
# !=  다르다
# >   크다
# >=  크거나 같다
# <   작다
# <=  작거나 같다`,
      note: `💡 Python은 들여쓰기가 문법! Tab과 Space 혼용 금지. 항상 Space 4칸 사용.`,
      dart: `else if (n < 0)  →  elif n < 0:  (elif는 한 단어!)
{ }  →  : + 들여쓰기`
    },
    drills: [
      { title:"드릴 1 — 양수·음수·영 판별", prompt:"정수 n을 입력받아 양수면 '양수', 음수면 '음수', 0이면 '영'을 출력하세요.", full:"n = int(input())\nif n > 0:\n    print('양수')\nelif n < 0:\n    print('음수')\nelse:\n    print('영')", blank:"if n > 0:\n    print('양수')\n___ n < 0:\n    print('음수')\nelse:\n    print('영')", answer:"elif", options:["elif","else if","else","if"], blocks:["n = int(input())","if n > 0:","    print('양수')","elif n < 0:","    print('음수')","else:","    print('영')"], hint:"elif는 앞선 if가 False일 때 추가 조건을 검사합니다." },
      { title:"드릴 2 — 짝수·홀수 판별", prompt:"정수 n을 입력받아 짝수면 '짝수', 홀수면 '홀수'를 출력하세요.", full:"n = int(input())\nif n % 2 == 0:\n    print('짝수')\nelse:\n    print('홀수')", blank:"if n % 2 ___ 0:", answer:"==", options:["==","=","!=","is"], blocks:["n = int(input())","if n % 2 == 0:","    print('짝수')","else:","    print('홀수')"], hint:"비교 연산자는 == 두 개입니다. = 하나는 대입이에요!" },
      { title:"드릴 3 — 성인·미성년자 판별", prompt:"나이 age를 입력받아 20세 이상이면 '성인', 미만이면 '미성년자'를 출력하세요. 삼항 연산자를 사용합니다.", full:"age = int(input())\nresult = '성인' if age >= 20 else '미성년자'\nprint(result)", blank:"result = '성인' ___ age >= 20 else '미성년자'", answer:"if", options:["if","when","then","?"], blocks:["age = int(input())","result = '성인' if age >= 20 else '미성년자'","print(result)"], hint:"파이썬 삼항: 참일때값 if 조건 else 거짓일때값" },
      { title:"드릴 4 — 두 수 중 최댓값", prompt:"두 정수 a, b를 입력받아 더 큰 수를 출력하세요. if-else를 사용합니다.", full:"a, b = map(int, input().split())\nif a >= b:\n    print(a)\nelse:\n    print(b)", blank:"if a ___ b:\n    print(a)\nelse:\n    print(b)", answer:">=", options:[">=",">","<=","=="], blocks:["a, b = map(int, input().split())","if a >= b:","    print(a)","else:","    print(b)"], hint:"같은 경우(==)도 포함하려면 >= 를 씁니다." },
      { title:"드릴 5 — 세 구간 분류", prompt:"점수 score를 입력받아 90 이상이면 'A', 70 이상이면 'B', 그 미만이면 'C'를 출력하세요.", full:"score = int(input())\nif score >= 90:\n    print('A')\nelif score >= 70:\n    print('B')\nelse:\n    print('C')", blank:"if score >= 90:\n    print('A')\n___ score >= 70:\n    print('B')\nelse:\n    print('C')", answer:"elif", options:["elif","else if","if","else"], blocks:["score = int(input())","if score >= 90:","    print('A')","elif score >= 70:","    print('B')","else:","    print('C')"], hint:"앞 조건(>=90)에서 이미 걸러지므로 elif에는 >=70만 써도 됩니다." }
    ]
  },
  { cat:1, id:2, title:"짝수/홀수 판별",
    prompt:"정수 <code>n</code>을 입력받아 짝수면 '짝수', 홀수면 '홀수'를 출력하는 코드를 완성하세요.",
    full:"n = int(input())\nif n % 2 == 0:\n    print('짝수')\nelse:\n    print('홀수')",
    hint:"비교 연산자는 == 두 개입니다. = 하나는 대입이에요!",
    concept: {
      title: "% 나머지로 짝수·홀수 판별",
      desc: `n % 2 == 0 이면 짝수, n % 2 == 1 이면 홀수. 나머지 연산 %와 비교 연산 ==을 함께 사용하는 가장 기본적인 조건 패턴입니다.`,
      syntax: `n = int(input())
if n % 2 == 0:
    print("짝수")   # 0, 2, 4, 6...
else:
    print("홀수")   # 1, 3, 5, 7...

# 주의: = 는 대입, == 는 비교!
n = 5     # 대입 (n에 5를 저장)
n == 5    # 비교 (True/False 반환)

# 응용 패턴
n % 3 == 0  # 3의 배수
n % 5 == 0  # 5의 배수
n % 10      # 끝자리 숫자`,
      note: `💡 ==는 두 글자! =는 대입이라 조건에서 쓰면 에러가 납니다. 코딩테스트 최다 실수 중 하나!`,
      dart: `n % 2 == 0  →  동일! (% 와 == 모두 같음)`
    },
    drills: [
      { title:"드릴 1 — 짝수·홀수 판별", prompt:"정수 n을 입력받아 짝수면 '짝수', 홀수면 '홀수'를 출력하세요.", full:"n = int(input())\nif n % 2 == 0:\n    print('짝수')\nelse:\n    print('홀수')", blank:"if n % 2 ___ 0:", answer:"==", options:["==","=","!=","is"], blocks:["n = int(input())","if n % 2 == 0:","    print('짝수')","else:","    print('홀수')"], hint:"% 2가 0이면 짝수, 1이면 홀수입니다." },
      { title:"드릴 2 — 3의 배수 판별", prompt:"정수 n을 입력받아 3의 배수이면 '3의 배수', 아니면 '아님'을 출력하세요.", full:"n = int(input())\nif n % 3 == 0:\n    print('3의 배수')\nelse:\n    print('아님')", blank:"if n ___ 3 == 0:", answer:"%", options:["%","//","**","*"], blocks:["n = int(input())","if n % 3 == 0:","    print('3의 배수')","else:","    print('아님')"], hint:"배수 판별은 % 연산으로 나머지가 0인지 확인합니다." },
      { title:"드릴 3 — 5와 3의 공배수", prompt:"정수 n을 입력받아 5와 3의 공배수이면 '공배수', 아니면 '해당없음'을 출력하세요.", full:"n = int(input())\nif n % 5 == 0 and n % 3 == 0:\n    print('공배수')\nelse:\n    print('해당없음')", blank:"if n % 5 == 0 ___ n % 3 == 0:", answer:"and", options:["and","or","&&","&"], blocks:["n = int(input())","if n % 5 == 0 and n % 3 == 0:","    print('공배수')","else:","    print('해당없음')"], hint:"두 조건을 동시에 만족할 때는 and를 씁니다." },
      { title:"드릴 4 — in으로 모음 판별", prompt:"문자 한 개를 입력받아 모음(aeiouAEIOU)이면 '모음', 아니면 '자음'을 출력하세요.", full:"ch = input()\nif ch in 'aeiouAEIOU':\n    print('모음')\nelse:\n    print('자음')", blank:"if ch ___ 'aeiouAEIOU':", answer:"in", options:["in","==","is","has"], blocks:["ch = input()","if ch in 'aeiouAEIOU':","    print('모음')","else:","    print('자음')"], hint:"in은 문자열 안에 특정 문자가 포함되어 있는지 확인합니다." }
    ]
  },
  { cat:1, id:3, title:"삼항 연산자 성인 판별",
    prompt:"나이 <code>age</code>를 입력받아, 20세 이상이면 '성인', 미만이면 '미성년자'를 <code>result</code>에 저장해 출력하는 코드를 완성하세요.",
    full:"age = int(input())\nresult = '성인' if age >= 20 else '미성년자'\nprint(result)",
    hint:"파이썬 삼항: 참일때값 if 조건 else 거짓일때값 — 순서에 주의하세요!",
    concept: {
      title: "삼항 연산자 — if-else 한 줄",
      desc: `Python 삼항 연산자는 Dart/Java와 순서가 다릅니다! Python: 참값 if 조건 else 거짓값. Dart/Java: 조건 ? 참값 : 거짓값. 간단한 조건 분기를 한 줄로 표현할 때 사용합니다.`,
      syntax: `# Python 삼항 (순서 주의!)
result = "성인" if age >= 20 else "미성년자"
# ↑ 참값    ↑ 조건          ↑ 거짓값

# Dart/Java 삼항 (비교)
# result = age >= 20 ? "성인" : "미성년자";
# ↑ 조건              ↑ 참    ↑ 거짓

# 활용 예
abs_n = n if n >= 0 else -n     # 절댓값
bigger = a if a > b else b      # 최댓값
print("짝" if n%2==0 else "홀") # print 안에서 직접`,
      note: `💡 Python 삼항 순서: 참값 if 조건 else 거짓값. Dart와 반대! 자주 헷갈리는 부분.`,
      dart: `age >= 20 ? "성인" : "미성년자"  →  "성인" if age >= 20 else "미성년자"`
    },
    drills: [
      { title:"드릴 1 — 성인 판별", prompt:"나이를 입력받아 20 이상이면 '성인', 미만이면 '미성년자'를 출력하세요.", full:"age = int(input())\nresult = '성인' if age >= 20 else '미성년자'\nprint(result)", blank:"result = '성인' ___ age >= 20 else '미성년자'", answer:"if", options:["if","when","then","?"], blocks:["age = int(input())","result = '성인' if age >= 20 else '미성년자'","print(result)"], hint:"파이썬 삼항: 참일때값 if 조건 else 거짓일때값" },
      { title:"드릴 2 — 절댓값 구하기", prompt:"정수 n을 입력받아 0 이상이면 그대로, 0 미만이면 부호를 바꾼 값을 출력하세요. (삼항 연산자 사용)", full:"n = int(input())\nresult = n if n >= 0 else -n\nprint(result)", blank:"result = n if n >= 0 ___ -n", answer:"else", options:["else","elif","or","and"], blocks:["n = int(input())","result = n if n >= 0 else -n","print(result)"], hint:"삼항 연산자는 반드시 else로 끝납니다." },
      { title:"드릴 3 — 최댓값 삼항", prompt:"두 정수 a, b를 입력받아 더 큰 수를 삼항 연산자 한 줄로 출력하세요.", full:"a, b = map(int, input().split())\nprint(a if a > b else b)", blank:"print(a ___ a > b else b)", answer:"if", options:["if","elif","else","when"], blocks:["a, b = map(int, input().split())","print(a if a > b else b)"], hint:"삼항 연산자를 print 안에서 바로 쓸 수 있습니다." },
      { title:"드릴 4 — 패스·불합격 판별", prompt:"시험 점수를 입력받아 60 이상이면 'PASS', 미만이면 'FAIL'을 출력하세요.", full:"score = int(input())\nprint('PASS' if score >= 60 else 'FAIL')", blank:"print('PASS' if score ___ 60 else 'FAIL')", answer:">=", options:[">=",">","==","<="], blocks:["score = int(input())","print('PASS' if score >= 60 else 'FAIL')"], hint:"60점 이상이므로 >= 60입니다." }
    ]
  },
  { cat:1, id:4, title:"and 논리 연산자 — 로그인 처리",
    prompt:"아이디와 비밀번호를 입력받아, 아이디가 'admin'이고 비밀번호가 '1234'일 때만 '로그인 성공'을 출력하는 코드를 완성하세요.",
    full:"uid = input()\npw = input()\nif uid == 'admin' and pw == '1234':\n    print('로그인 성공')",
    hint:"파이썬에서는 && 대신 and를 씁니다. || 대신 or, ! 대신 not이에요.",
    concept: {
      title: "and / or / not — 논리 연산자",
      desc: `Python의 논리 연산자는 영어 단어입니다. Java/Dart의 && → and, || → or, ! → not. 특히 and와 or을 && ||로 쓰는 실수가 많습니다.`,
      syntax: `# Python 논리 연산자 (영어!)
a > 0 and b > 0   # 둘 다 참  (Java: &&)
a > 0 or b > 0    # 하나라도 참 (Java: ||)
not flag          # 부정       (Java: !)

# 실용 예
if uid == 'admin' and pw == '1234':
    print("로그인 성공")

# 범위 조건 (Python만 가능!)
if 0 <= n <= 100:    # 0 이상 100 이하
    print("유효")

# Dart/Java는 반드시:
# if (n >= 0 && n <= 100)`,
      note: `💡 Python만 가능: 0 <= n <= 100 처럼 연속 비교! Dart/Java에서는 && 두 번 써야 합니다.`,
      dart: `&&  →  and
||  →  or
!   →  not
0 <= n && n <= 100  →  0 <= n <= 100`
    },
    drills: [
      { title:"드릴 1 — 로그인 처리", prompt:"아이디가 'admin'이고 비밀번호가 '1234'일 때만 '로그인 성공'을 출력하세요.", full:"uid = input()\npw = input()\nif uid == 'admin' and pw == '1234':\n    print('로그인 성공')", blank:"if uid == 'admin' ___ pw == '1234':", answer:"and", options:["and","or","&&","&"], blocks:["if uid == 'admin' and pw == '1234':","    print('로그인 성공')"], hint:"두 조건을 동시에 만족해야 할 때는 and를 씁니다." },
      { title:"드릴 2 — 범위 조건 검사", prompt:"정수 n을 입력받아 10 이상 20 이하이면 '범위 내', 아니면 '범위 밖'을 출력하세요.", full:"n = int(input())\nif 10 <= n <= 20:\n    print('범위 내')\nelse:\n    print('범위 밖')", blank:"if 10 ___ n ___ 20:", answer:"<= / <=", options:["<= / <=","< / <","and / and","in / in"], blocks:["n = int(input())","if 10 <= n <= 20:","    print('범위 내')","else:","    print('범위 밖')"], hint:"파이썬은 10 <= n <= 20처럼 연속 비교가 가능합니다!" },
      { title:"드릴 3 — or 조건 처리", prompt:"정수 n을 입력받아 0이거나 음수이면 '0 이하'를 출력하세요.", full:"n = int(input())\nif n == 0 or n < 0:\n    print('0 이하')", blank:"if n == 0 ___ n < 0:", answer:"or", options:["or","and","||","|"], blocks:["n = int(input())","if n == 0 or n < 0:","    print('0 이하')"], hint:"둘 중 하나만 참이어도 되는 조건에는 or를 씁니다." },
      { title:"드릴 4 — not 연산자", prompt:"리스트 arr이 비어있지 않으면 첫 번째 원소를 출력하세요. <code>not</code>을 사용합니다.", full:"arr = [3, 1, 4]\nif not arr:\n    print('비어있음')\nelse:\n    print(arr[0])", blank:"if ___ arr:", answer:"not", options:["not","!","no","empty"], blocks:["arr = [3, 1, 4]","if not arr:","    print('비어있음')","else:","    print(arr[0])"], hint:"not은 True/False를 뒤집습니다. 빈 리스트는 False이므로 not False → True." }
    ]
  },
  { cat:1, id:5, title:"in 연산자로 포함 확인",
    prompt:"리스트 <code>arr = [1, 2, 3]</code>에 숫자 2가 있는지 확인해 '존재'를 출력하는 코드를 완성하세요.",
    full:"arr = [1, 2, 3]\nif 2 in arr:\n    print('존재')",
    hint:"in 키워드로 리스트나 문자열에 특정 값이 있는지 확인합니다.",
    concept: {
      title: "in 연산자 — 포함 여부 확인",
      desc: `in 연산자는 문자열, 리스트, 딕셔너리 등에서 특정 값이 포함되어 있는지 확인합니다. 모음 판별, 리스트 검색, 딕셔너리 키 확인 등에 두루 사용됩니다.`,
      syntax: `# 문자열에서 문자 확인
ch = input()
if ch in 'aeiouAEIOU':  # 모음이면 True
    print("모음")

# 리스트 포함 확인
arr = [1, 2, 3, 4, 5]
if 3 in arr:    # True
    print("있음")
if 6 not in arr:  # True (not in)
    print("없음")

# 딕셔너리 키 확인
d = {'a': 1, 'b': 2}
if 'a' in d:    # 키 확인
    print(d['a'])`,
      note: `💡 in은 리스트에서 O(n), 딕셔너리/set에서 O(1). 빠른 검색이 필요하면 set이나 dict 사용.`,
      dart: `arr.contains(x)  →  x in arr
str.contains(c)  →  c in str
d.containsKey(k) →  k in d`
    },
    drills: [
      { title:"드릴 1 — 리스트 존재 확인", prompt:"리스트 arr에 2가 있으면 '존재', 없으면 '없음'을 출력하세요.", full:"arr = [1, 2, 3]\nif 2 in arr:\n    print('존재')\nelse:\n    print('없음')", blank:"if 2 ___ arr:", answer:"in", options:["in","has","contains","=="], blocks:["arr = [1, 2, 3]","if 2 in arr:","    print('존재')","else:","    print('없음')"], hint:"in 키워드로 리스트 안에 값이 있는지 바로 확인합니다." },
      { title:"드릴 2 — 문자열 포함 확인", prompt:"문자열 s와 단어 w를 입력받아 s 안에 w가 포함되면 '포함', 아니면 '없음'을 출력하세요.", full:"s = input()\nw = input()\nif w in s:\n    print('포함')\nelse:\n    print('없음')", blank:"if w ___ s:", answer:"in", options:["in","==","has","contains"], blocks:["s = input()","w = input()","if w in s:","    print('포함')","else:","    print('없음')"], hint:"in은 문자열 안에 부분 문자열이 포함됐는지도 확인합니다." },
      { title:"드릴 3 — not in 활용", prompt:"리스트 banned에 입력 단어가 없으면 '허용', 있으면 '차단'을 출력하세요.", full:"banned = ['욕설1', '욕설2']\nword = input()\nif word not in banned:\n    print('허용')\nelse:\n    print('차단')", blank:"if word ___ banned:", answer:"not in", options:["not in","in","!=","not =="], blocks:["banned = ['욕설1', '욕설2']","word = input()","if word not in banned:","    print('허용')","else:","    print('차단')"], hint:"not in은 '포함되어 있지 않으면'을 의미합니다." },
      { title:"드릴 4 — 딕셔너리 키 확인", prompt:"딕셔너리 d = {'a':1, 'b':2}에 키 'c'가 있으면 '있음', 없으면 '없음'을 출력하세요.", full:"d = {'a':1, 'b':2}\nif 'c' in d:\n    print('있음')\nelse:\n    print('없음')", blank:"if 'c' ___ d:", answer:"in", options:["in","==","has","d.contains"], blocks:["d = {'a':1, 'b':2}","if 'c' in d:","    print('있음')","else:","    print('없음')"], hint:"in은 딕셔너리의 키 존재 여부도 확인합니다." }
    ]
  },
  { cat:1, id:6, title:"not 연산자 — 0 판별",
    prompt:"정수 <code>n</code>을 입력받아 0일 때 '0입니다'를 출력하는 코드를 완성하세요. 파이썬에서 0은 거짓(Falsy)으로 평가된다는 점을 활용합니다.",
    full:"n = int(input())\nif not n:\n    print('0입니다')",
    hint:"파이썬에서 0, 빈 리스트 [], 빈 문자열 ''은 모두 False로 평가됩니다.",
    concept: {
      title: "조건문 심화 — 다중 분기와 중첩",
      desc: `if/elif/else를 중첩하거나 여러 elif를 연결해 복잡한 분기를 처리합니다. 조건 순서가 중요합니다. 위에서부터 확인하다가 첫 번째로 True인 블록만 실행됩니다.`,
      syntax: `score = int(input())

if score >= 90:
    grade = 'A'
elif score >= 80:
    grade = 'B'
elif score >= 70:
    grade = 'C'
elif score >= 60:
    grade = 'D'
else:
    grade = 'F'

# 중첩 if
if n > 0:
    if n % 2 == 0:
        print("양수 짝수")
    else:
        print("양수 홀수")
else:
    print("0 이하")`,
      note: `💡 elif 순서가 결과를 바꿉니다. >=90 먼저 검사해야 >=80에서 90 이상이 걸리지 않습니다.`,
      dart: `// 동일한 if/else if 구조
if (score >= 90) {
} else if (score >= 80) {
}`
    },
    drills: [
      { title:"드릴 1 — not 연산자 — 0 판별", prompt:"정수 <code>n</code>을 입력받아 0일 때 '0입니다'를 출력하는 코드를 완성하세요. 파이썬에서 0은 거짓(Falsy)으로 평가된다는 점을 활용합니다.", full:"n = int(input())\nif not n:\n    print('0입니다')", blank:"if ___ n:", answer:"not", options:["not","!","no","false"], blocks:["n = int(input())","if not n:","    print('0입니다')"], hint:"파이썬에서 0, 빈 리스트 [], 빈 문자열 ''은 모두 False로 평가됩니다." },
      { title:"드릴 2 — 빈 문자열 Falsy 확인", prompt:"문자열 <code>s</code>를 입력받아 빈 문자열이면 '비어있음'을 출력하세요. <code>not</code>을 사용합니다.", full:"s = input()\nif not s:\n    print('비어있음')", blank:"if ___ s:", answer:"not", options:["not", "s ==", "empty", "!"], blocks:["s = input()", "if not s:", "    print('비어있음')"], hint:"빈 문자열 ''도 Falsy입니다. not을 활용하면 간결하게 확인할 수 있어요." },
      { title:"드릴 3 — None 또는 0 체크", prompt:"변수 <code>val = 0</code>일 때 Falsy이면 '거짓값'을 출력하세요. <code>not</code>을 사용합니다.", full:"val = 0\nif not val:\n    print('거짓값')", blank:"if ___ val:", answer:"not", options:["not", "val ==", "False", "!"], blocks:["val = 0", "if not val:", "    print('거짓값')"], hint:"0, '', [], {}, None 모두 not으로 Falsy 여부를 확인할 수 있습니다." }
    ]
  },
  { cat:1, id:7, title:"범위 조건 — 연속 비교",
    prompt:"정수 <code>n = 15</code>가 10 이상 20 이하인지 확인해 '범위 내'를 출력하는 코드를 완성하세요. 파이썬의 연속 비교(chained comparison)를 사용합니다.",
    full:"n = 15\nif 10 <= n <= 20:\n    print('범위 내')",
    hint:"파이썬은 10 <= n <= 20처럼 비교를 연속으로 쓸 수 있습니다. 다른 언어와 달라요!",
    concept: {
      title: "논리 연산자 and / or / not 심화",
      desc: `Python의 논리 연산자(and, or, not)로 복합 조건을 만듭니다. and는 모두 참일 때, or는 하나라도 참일 때, not은 부정합니다. 단축 평가(short-circuit)도 이해하면 좋습니다.`,
      syntax: `# 복합 조건
if a > 0 and b > 0:     # 둘 다 양수
    print("모두 양수")

if score < 0 or score > 100:  # 범위 벗어남
    print("유효하지 않음")

# 파이썬만의 연속 비교
if 0 <= n <= 100:       # 0 이상 100 이하
    print("유효")

# not 활용
if not is_done:
    print("아직 미완료")

# 단축 평가 (short-circuit)
x = a or 0    # a가 Falsy면 0
y = b and b*2 # b가 Falsy면 False, 아니면 b*2`,
      note: `💡 Python: and/or/not. Java/Dart: &&/||/!. 연속 비교 0<=n<=100은 Python만 가능!`,
      dart: `&&  →  and
||  →  or
!   →  not
0 <= n && n <= 100  →  0 <= n <= 100`
    },
    drills: [
      { title:"드릴 1 — 범위 조건 — 연속 비교", prompt:"정수 <code>n = 15</code>가 10 이상 20 이하인지 확인해 '범위 내'를 출력하는 코드를 완성하세요. 파이썬의 연속 비교(chained comparison)를 사용합니다.", full:"n = 15\nif 10 <= n <= 20:\n    print('범위 내')", blank:"if 10 ___ n ___ 20:", answer:"<= / <=", options:["<= / <=","< / <","and / and","in / in"], blocks:["n = 15","if 10 <= n <= 20:","    print('범위 내')"], hint:"파이썬은 10 <= n <= 20처럼 비교를 연속으로 쓸 수 있습니다. 다른 언어와 달라요!" },
      { title:"드릴 2 — 0~100 범위 체크", prompt:"점수 <code>score</code>를 입력받아 0 이상 100 이하이면 '유효'를 출력하세요.", full:"score = int(input())\nif 0 <= score <= 100:\n    print('유효')", blank:"if 0 ___ score ___ 100:", answer:"<= / <=", options:["<= / <=", "< / <", "and / and", "== / =="], blocks:["score = int(input())", "if 0 <= score <= 100:", "    print('유효')"], hint:"파이썬 연속 비교: 0 <= score <= 100 한 줄로 범위를 표현합니다." },
      { title:"드릴 3 — 삼각형 조건 판별", prompt:"세 변 <code>a, b, c</code>를 입력받아 세 변이 모두 양수이고 가장 큰 변이 나머지 두 변의 합보다 작으면 '삼각형'을 출력하세요.", full:"a, b, c = map(int, input().split())\nif a > 0 and b > 0 and c > 0 and max(a,b,c) < a+b+c-max(a,b,c):\n    print('삼각형')", blank:"if a > 0 and b > 0 and c > 0 and max(a,b,c) ___ a+b+c-max(a,b,c):", answer:"<", options:["<", "<=", ">", "=="], blocks:["a, b, c = map(int, input().split())", "if a > 0 and b > 0 and c > 0 and max(a,b,c) < a+b+c-max(a,b,c):", "    print('삼각형')"], hint:"가장 큰 변 < 나머지 두 변의 합 조건이 삼각형 성립 요건입니다." }
    ]
  },
  { cat:1, id:8, title:"학점 변환 — 다중 elif",
    prompt:"점수 <code>score</code>를 입력받아 90점 이상 A, 80점 이상 B, 70점 이상 C, 나머지 F를 출력하는 코드를 완성하세요. 여러 단계의 조건을 순서대로 처리합니다.",
    full:"score = int(input())\nif score >= 90:\n    grade = 'A'\nelif score >= 80:\n    grade = 'B'\nelif score >= 70:\n    grade = 'C'\nelse:\n    grade = 'F'\nprint(grade)",
    hint:"문자열 리터럴은 따옴표로 감싸야 합니다. B는 변수, 'B'는 문자열이에요.",
    concept: {
      title: "조건문 심화 — 다중 분기와 중첩",
      desc: `if/elif/else를 중첩하거나 여러 elif를 연결해 복잡한 분기를 처리합니다. 조건 순서가 중요합니다. 위에서부터 확인하다가 첫 번째로 True인 블록만 실행됩니다.`,
      syntax: `score = int(input())

if score >= 90:
    grade = 'A'
elif score >= 80:
    grade = 'B'
elif score >= 70:
    grade = 'C'
elif score >= 60:
    grade = 'D'
else:
    grade = 'F'

# 중첩 if
if n > 0:
    if n % 2 == 0:
        print("양수 짝수")
    else:
        print("양수 홀수")
else:
    print("0 이하")`,
      note: `💡 elif 순서가 결과를 바꿉니다. >=90 먼저 검사해야 >=80에서 90 이상이 걸리지 않습니다.`,
      dart: `// 동일한 if/else if 구조
if (score >= 90) {
} else if (score >= 80) {
}`
    },
    drills: [
      { title:"드릴 1 — 학점 변환 — 다중 elif", prompt:"점수 <code>score</code>를 입력받아 90점 이상 A, 80점 이상 B, 70점 이상 C, 나머지 F를 출력하는 코드를 완성하세요. 여러 단계의 조건을 순서대로 처리합니다.", full:"score = int(input())\nif score >= 90:\n    grade = 'A'\nelif score >= 80:\n    grade = 'B'\nelif score >= 70:\n    grade = 'C'\nelse:\n    grade = 'F'\nprint(grade)", blank:"elif score >= 80:\n    grade = ___", answer:"'B'", options:["'B'","B","'b'","grade_b"], blocks:["if score >= 90:","    grade = 'A'","elif score >= 80:","    grade = 'B'","elif score >= 70:","    grade = 'C'","else:","    grade = 'F'"], hint:"문자열 리터럴은 따옴표로 감싸야 합니다. B는 변수, 'B'는 문자열이에요." },
      { title:"드릴 2 — 온도 단계 분류", prompt:"온도 <code>temp</code>를 입력받아 30 이상 '더움', 15 이상 '적당', 그 미만 '추움'을 출력하세요.", full:"temp = int(input())\nif temp >= 30:\n    print('더움')\nelif temp >= 15:\n    print('적당')\nelse:\n    print('추움')", blank:"if temp >= 30:\n    print('더움')\n___ temp >= 15:\n    print('적당')\nelse:\n    print('추움')", answer:"elif", options:["elif", "else if", "else", "if"], blocks:["temp = int(input())", "if temp >= 30:", "    print('더움')", "elif temp >= 15:", "    print('적당')", "else:", "    print('추움')"], hint:"elif는 앞 if가 False일 때만 실행됩니다. 순서가 중요합니다." },
      { title:"드릴 3 — BMI 체중 분류", prompt:"BMI 값을 입력받아 18.5 미만 '저체중', 25 미만 '정상', 30 미만 '과체중', 그 이상 '비만'을 출력하세요.", full:"bmi = float(input())\nif bmi < 18.5:\n    print('저체중')\nelif bmi < 25:\n    print('정상')\nelif bmi < 30:\n    print('과체중')\nelse:\n    print('비만')", blank:"if bmi < 18.5:\n    print('저체중')\nelif bmi < 25:\n    print('정상')\n___ bmi < 30:\n    print('과체중')\nelse:\n    print('비만')", answer:"elif", options:["elif", "else if", "if", "else"], blocks:["bmi = float(input())", "if bmi < 18.5:", "    print('저체중')", "elif bmi < 25:", "    print('정상')", "elif bmi < 30:", "    print('과체중')", "else:", "    print('비만')"], hint:"elif를 여러 번 써서 4단계 이상도 분류할 수 있습니다." }
    ]
  },
  { cat:1, id:9, title:"isupper() — 대문자 확인",
    prompt:"문자열 <code>s</code>를 입력받아 모두 대문자이면 '대문자', 아니면 '대문자 아닙'을 출력하는 코드를 완성하세요. 문자열의 내장 메서드를 사용합니다.",
    full:"s = input()\nif s.isupper():\n    print('대문자')\nelse:\n    print('대문자 아님')",
    hint:"isupper()는 문자열이 모두 대문자일 때 True를 반환합니다. islower(), isdigit()도 있어요.",
    concept: {
      title: "조건문 심화 — 다중 분기와 중첩",
      desc: `if/elif/else를 중첩하거나 여러 elif를 연결해 복잡한 분기를 처리합니다. 조건 순서가 중요합니다. 위에서부터 확인하다가 첫 번째로 True인 블록만 실행됩니다.`,
      syntax: `score = int(input())

if score >= 90:
    grade = 'A'
elif score >= 80:
    grade = 'B'
elif score >= 70:
    grade = 'C'
elif score >= 60:
    grade = 'D'
else:
    grade = 'F'

# 중첩 if
if n > 0:
    if n % 2 == 0:
        print("양수 짝수")
    else:
        print("양수 홀수")
else:
    print("0 이하")`,
      note: `💡 elif 순서가 결과를 바꿉니다. >=90 먼저 검사해야 >=80에서 90 이상이 걸리지 않습니다.`,
      dart: `// 동일한 if/else if 구조
if (score >= 90) {
} else if (score >= 80) {
}`
    },
    drills: [
      { title:"드릴 1 — isupper() — 대문자 확인", prompt:"문자열 <code>s</code>를 입력받아 모두 대문자이면 '대문자', 아니면 '대문자 아닙'을 출력하는 코드를 완성하세요. 문자열의 내장 메서드를 사용합니다.", full:"s = input()\nif s.isupper():\n    print('대문자')\nelse:\n    print('대문자 아님')", blank:"if s.___():", answer:"isupper", options:["isupper","upper","isUpper","is_upper"], blocks:["s = input()","if s.isupper():","    print('대문자')","else:","    print('대문자 아님')"], hint:"isupper()는 문자열이 모두 대문자일 때 True를 반환합니다. islower(), isdigit()도 있어요." },
      { title:"드릴 2 — islower() 소문자 확인", prompt:"문자열 <code>s</code>를 입력받아 모두 소문자이면 '소문자'를 출력하세요.", full:"s = input()\nif s.islower():\n    print('소문자')", blank:"if s.___():\n    print('소문자')", answer:"islower", options:["islower", "isupper", "lower", "isalpha"], blocks:["s = input()", "if s.islower():", "    print('소문자')"], hint:"islower()는 문자열의 모든 알파벳이 소문자일 때 True를 반환합니다." },
      { title:"드릴 3 — isdigit() 숫자 문자열 확인", prompt:"문자열 <code>s</code>를 입력받아 모두 숫자이면 '숫자만'을 출력하세요.", full:"s = input()\nif s.isdigit():\n    print('숫자만')", blank:"if s.___():", answer:"isdigit", options:["isdigit", "isnumeric", "isalpha", "isdecimal"], blocks:["s = input()", "if s.isdigit():", "    print('숫자만')"], hint:"isdigit()은 문자열이 모두 숫자 문자로 이루어졌을 때 True입니다." }
    ]
  },
  { cat:1, id:10, title:"5와 7의 공배수",
    prompt:"정수 <code>n</code>을 입력받아, 5와 7의 공배수이면 '공배수', 5만의 배수이면 '5의 배수', 7만의 배수이면 '7의 배수', 아무것도 아니면 '해당 없음'을 출력하는 코드를 완성하세요.",
    full:"n = int(input())\nif n % 5 == 0 and n % 7 == 0:\n    print('공배수')\nelif n % 5 == 0:\n    print('5의 배수')\nelif n % 7 == 0:\n    print('7의 배수')\nelse:\n    print('해당 없음')",
    hint:"배수 확인은 % 연산으로 나머지가 0인지 확인합니다.",
    concept: {
      title: "조건문 심화 — 다중 분기와 중첩",
      desc: `if/elif/else를 중첩하거나 여러 elif를 연결해 복잡한 분기를 처리합니다. 조건 순서가 중요합니다. 위에서부터 확인하다가 첫 번째로 True인 블록만 실행됩니다.`,
      syntax: `score = int(input())

if score >= 90:
    grade = 'A'
elif score >= 80:
    grade = 'B'
elif score >= 70:
    grade = 'C'
elif score >= 60:
    grade = 'D'
else:
    grade = 'F'

# 중첩 if
if n > 0:
    if n % 2 == 0:
        print("양수 짝수")
    else:
        print("양수 홀수")
else:
    print("0 이하")`,
      note: `💡 elif 순서가 결과를 바꿉니다. >=90 먼저 검사해야 >=80에서 90 이상이 걸리지 않습니다.`,
      dart: `// 동일한 if/else if 구조
if (score >= 90) {
} else if (score >= 80) {
}`
    },
    drills: [
      { title:"드릴 1 — 5와 7의 공배수", prompt:"정수 <code>n</code>을 입력받아, 5와 7의 공배수이면 '공배수', 5만의 배수이면 '5의 배수', 7만의 배수이면 '7의 배수', 아무것도 아니면 '해당 없음'을 출력하는 코드를 완성하세요.", full:"n = int(input())\nif n % 5 == 0 and n % 7 == 0:\n    print('공배수')\nelif n % 5 == 0:\n    print('5의 배수')\nelif n % 7 == 0:\n    print('7의 배수')\nelse:\n    print('해당 없음')", blank:"if n % 5 ___ 0 and n % 7 ___ 0:", answer:"== / ==", options:["== / ==","= / =","!= / !=","% / %"], blocks:["if n % 5 == 0 and n % 7 == 0:","    print('공배수')","elif n % 5 == 0:","    print('5의 배수')","elif n % 7 == 0:","    print('7의 배수')","else:","    print('해당 없음')"], hint:"배수 확인은 % 연산으로 나머지가 0인지 확인합니다." },
      { title:"드릴 2 — 3과 4의 공배수", prompt:"정수 <code>n</code>을 입력받아 3과 4의 공배수이면 '공배수', 아니면 '해당없음'을 출력하세요.", full:"n = int(input())\nif n % 3 == 0 and n % 4 == 0:\n    print('공배수')\nelse:\n    print('해당없음')", blank:"if n % 3 == 0 ___ n % 4 == 0:", answer:"and", options:["and", "or", "&&", "&"], blocks:["n = int(input())", "if n % 3 == 0 and n % 4 == 0:", "    print('공배수')", "else:", "    print('해당없음')"], hint:"두 조건을 동시에 만족하려면 and를 사용합니다." },
      { title:"드릴 3 — 5의 배수 또는 7의 배수", prompt:"정수 <code>n</code>을 입력받아 5의 배수이거나 7의 배수이면 '해당'을 출력하세요.", full:"n = int(input())\nif n % 5 == 0 or n % 7 == 0:\n    print('해당')", blank:"if n % 5 == 0 ___ n % 7 == 0:", answer:"or", options:["or", "and", "||", "|"], blocks:["n = int(input())", "if n % 5 == 0 or n % 7 == 0:", "    print('해당')"], hint:"둘 중 하나만 참이어도 되면 or를 사용합니다." }
    ]
  },
  { cat:1, id:11, title:"빈 리스트 확인 패턴",
    prompt:"리스트 <code>arr = []</code>가 비어 있으면 '비어있음', 요소가 있으면 '요소 있음'을 출력하는 코드를 완성하세요. Falsy 값 특성을 활용한 파이썬다운 방식을 사용합니다.",
    full:"arr = []\nif not arr:\n    print('비어있음')\nelse:\n    print('요소 있음')",
    hint:"빈 리스트는 False로 평가됩니다. if not arr: 는 if len(arr)==0: 과 같습니다.",
    concept: {
      title: "조건문 심화 — 다중 분기와 중첩",
      desc: `if/elif/else를 중첩하거나 여러 elif를 연결해 복잡한 분기를 처리합니다. 조건 순서가 중요합니다. 위에서부터 확인하다가 첫 번째로 True인 블록만 실행됩니다.`,
      syntax: `score = int(input())

if score >= 90:
    grade = 'A'
elif score >= 80:
    grade = 'B'
elif score >= 70:
    grade = 'C'
elif score >= 60:
    grade = 'D'
else:
    grade = 'F'

# 중첩 if
if n > 0:
    if n % 2 == 0:
        print("양수 짝수")
    else:
        print("양수 홀수")
else:
    print("0 이하")`,
      note: `💡 elif 순서가 결과를 바꿉니다. >=90 먼저 검사해야 >=80에서 90 이상이 걸리지 않습니다.`,
      dart: `// 동일한 if/else if 구조
if (score >= 90) {
} else if (score >= 80) {
}`
    },
    drills: [
      { title:"드릴 1 — 빈 리스트 확인 패턴", prompt:"리스트 <code>arr = []</code>가 비어 있으면 '비어있음', 요소가 있으면 '요소 있음'을 출력하는 코드를 완성하세요. Falsy 값 특성을 활용한 파이썬다운 방식을 사용합니다.", full:"arr = []\nif not arr:\n    print('비어있음')\nelse:\n    print('요소 있음')", blank:"if ___ arr:", answer:"not", options:["not","len(arr)==0 and","!","empty"], blocks:["arr = []","if not arr:","    print('비어있음')","else:","    print('요소 있음')"], hint:"빈 리스트는 False로 평가됩니다. if not arr: 는 if len(arr)==0: 과 같습니다." },
      { title:"드릴 2 — 빈 딕셔너리 확인", prompt:"딕셔너리 <code>d = {}</code>가 비어있으면 '비어있음'을 출력하세요. <code>not</code>을 사용합니다.", full:"d = {}\nif not d:\n    print('비어있음')", blank:"if ___ d:", answer:"not", options:["not", "d ==", "len(d) ==", "empty"], blocks:["d = {}", "if not d:", "    print('비어있음')"], hint:"빈 딕셔너리 {}도 Falsy입니다. not d로 확인할 수 있어요." },
      { title:"드릴 3 — 리스트가 비어있지 않으면 합계 출력", prompt:"리스트 <code>arr</code>이 비어있지 않으면 합계를 출력하고, 비어있으면 '빈 리스트'를 출력하세요.", full:"arr = [1, 2, 3]\nif arr:\n    print(sum(arr))\nelse:\n    print('빈 리스트')", blank:"if ___:\n    print(sum(arr))\nelse:\n    print('빈 리스트')", answer:"arr", options:["arr", "not arr", "arr != []", "len(arr)"], blocks:["arr = [1, 2, 3]", "if arr:", "    print(sum(arr))", "else:", "    print('빈 리스트')"], hint:"리스트가 비어있지 않으면 자체가 Truthy입니다. if arr: 처럼 사용합니다." }
    ]
  },
  { cat:1, id:12, title:"문자열 모음 포함 확인",
    prompt:"문자 하나 <code>ch</code>를 입력받아 모음(a, e, i, o, u, 대소문자 모두)이면 '모음', 아니면 '자음'을 출력하는 코드를 완성하세요. <code>in</code>을 문자열에 적용합니다.",
    full:"ch = input()\nif ch in 'aeiouAEIOU':\n    print('모음')\nelse:\n    print('자음')",
    hint:"in은 문자열 안에 특정 문자가 포함되어 있는지도 확인합니다.",
    concept: {
      title: "in / not in — 멤버십 검사",
      desc: `in 연산자는 값이 시퀀스 또는 컨테이너에 포함되어 있는지 확인합니다. 리스트는 O(n), set/dict는 O(1)로 더 빠릅니다.`,
      syntax: `# 문자열 포함
'py' in 'python'       # True
'a' in 'aeiou'         # True

# 리스트 포함
3 in [1, 2, 3, 4]      # True
6 not in [1,2,3]       # True

# 딕셔너리 키 확인
'name' in d            # True (키만 검사)

# 범위 검사에 활용
if ch in 'aeiouAEIOU':
    print("모음")

# not in
if x not in visited:
    visited.add(x)`,
      note: `💡 딕셔너리에서 in은 키 확인. 값 확인은 in d.values(). set이 있으면 in set()이 O(1).`,
      dart: `arr.contains(x)  →  x in arr
str.contains(c)  →  c in str`
    },
    drills: [
      { title:"드릴 1 — 문자열 모음 포함 확인", prompt:"문자 하나 <code>ch</code>를 입력받아 모음(a, e, i, o, u, 대소문자 모두)이면 '모음', 아니면 '자음'을 출력하는 코드를 완성하세요. <code>in</code>을 문자열에 적용합니다.", full:"ch = input()\nif ch in 'aeiouAEIOU':\n    print('모음')\nelse:\n    print('자음')", blank:"if ch ___ 'aeiouAEIOU':", answer:"in", options:["in","==","is","has"], blocks:["ch = input()","if ch in 'aeiouAEIOU':","    print('모음')","else:","    print('자음')"], hint:"in은 문자열 안에 특정 문자가 포함되어 있는지도 확인합니다." },
      { title:"드릴 2 — 알파벳인지 확인", prompt:"문자 <code>ch</code>를 입력받아 알파벳(a~z, A~Z)이면 '알파벳'을 출력하세요.", full:"ch = input()\nif ch in 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ':\n    print('알파벳')", blank:"if ch ___ 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ':", answer:"in", options:["in", "==", "is", "has"], blocks:["ch = input()", "if ch in 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ':", "    print('알파벳')"], hint:"in 연산자로 문자가 문자열 안에 포함됐는지 확인합니다." },
      { title:"드릴 3 — 금지 단어 포함 확인", prompt:"문자열 <code>s</code>를 입력받아 'spam'이 포함되어 있으면 '스팸 감지'를 출력하세요.", full:"s = input()\nif 'spam' in s:\n    print('스팸 감지')", blank:"if 'spam' ___ s:", answer:"in", options:["in", "==", "is", "contains"], blocks:["s = input()", "if 'spam' in s:", "    print('스팸 감지')"], hint:"in으로 부분 문자열 포함 여부도 확인할 수 있습니다." }
    ]
  },
  { cat:1, id:13, title:"다중 조건문 심화 (1) - 미세먼지 농도",
    prompt:"미세먼지 수치 <code>pm</code>을 입력받아 0~30이면 '좋음', 31~80이면 '보통', 81~150이면 '나쁨', 그 이상이면 '매우나쁨'을 출력하는 코드를 완성하세요.",
    full:"pm = int(input())\nif pm <= 30:\n    print('좋음')\nelif pm <= 80:\n    print('보통')\nelif pm <= 150:\n    print('나쁨')\nelse:\n    print('매우나쁨')",
    hint:"상위 조건(<=30)에서 이미 걸러지기 때문에 다음 조건에서는 <=80 만 써도 31~80을 의미하게 됩니다.",
    concept: {
      title: "조건문 심화 — 다중 분기와 중첩",
      desc: `if/elif/else를 중첩하거나 여러 elif를 연결해 복잡한 분기를 처리합니다. 조건 순서가 중요합니다. 위에서부터 확인하다가 첫 번째로 True인 블록만 실행됩니다.`,
      syntax: `score = int(input())

if score >= 90:
    grade = 'A'
elif score >= 80:
    grade = 'B'
elif score >= 70:
    grade = 'C'
elif score >= 60:
    grade = 'D'
else:
    grade = 'F'

# 중첩 if
if n > 0:
    if n % 2 == 0:
        print("양수 짝수")
    else:
        print("양수 홀수")
else:
    print("0 이하")`,
      note: `💡 elif 순서가 결과를 바꿉니다. >=90 먼저 검사해야 >=80에서 90 이상이 걸리지 않습니다.`,
      dart: `// 동일한 if/else if 구조
if (score >= 90) {
} else if (score >= 80) {
}`
    },
    drills: [
      { title:"드릴 1 — 다중 조건문 심화 (1) - 미세먼지 농도", prompt:"미세먼지 수치 <code>pm</code>을 입력받아 0~30이면 '좋음', 31~80이면 '보통', 81~150이면 '나쁨', 그 이상이면 '매우나쁨'을 출력하는 코드를 완성하세요.", full:"pm = int(input())\nif pm <= 30:\n    print('좋음')\nelif pm <= 80:\n    print('보통')\nelif pm <= 150:\n    print('나쁨')\nelse:\n    print('매우나쁨')", blank:"___ pm <= 80:\n    print('보통')", answer:"elif", options:["elif","else if","if","else"], blocks:["pm = int(input())","if pm <= 30:","    print('좋음')","elif pm <= 80:","    print('보통')","elif pm <= 150:","    print('나쁨')","else:","    print('매우나쁨')"], hint:"상위 조건(<=30)에서 이미 걸러지기 때문에 다음 조건에서는 <=80 만 써도 31~80을 의미하게 됩니다." },
      { title:"드릴 2 — 소음 단계 분류", prompt:"소음(dB) <code>db</code>를 입력받아 40 이하 '조용', 70 이하 '보통', 그 초과 '시끄러움'을 출력하세요.", full:"db = int(input())\nif db <= 40:\n    print('조용')\nelif db <= 70:\n    print('보통')\nelse:\n    print('시끄러움')", blank:"if db <= 40:\n    print('조용')\n___ db <= 70:\n    print('보통')\nelse:\n    print('시끄러움')", answer:"elif", options:["elif", "else if", "if", "else"], blocks:["db = int(input())", "if db <= 40:", "    print('조용')", "elif db <= 70:", "    print('보통')", "else:", "    print('시끄러움')"], hint:"elif는 앞 if가 False인 경우에만 실행됩니다. 순서대로 검사합니다." },
      { title:"드릴 3 — 바람 단계 분류", prompt:"풍속(m/s) <code>wind</code>를 입력받아 5 미만 '약풍', 15 미만 '보통', 25 미만 '강풍', 그 이상 '폭풍'을 출력하세요.", full:"wind = float(input())\nif wind < 5:\n    print('약풍')\nelif wind < 15:\n    print('보통')\nelif wind < 25:\n    print('강풍')\nelse:\n    print('폭풍')", blank:"if wind < 5:\n    print('약풍')\nelif wind < 15:\n    print('보통')\n___ wind < 25:\n    print('강풍')\nelse:\n    print('폭풍')", answer:"elif", options:["elif", "else if", "if", "else"], blocks:["wind = float(input())", "if wind < 5:", "    print('약풍')", "elif wind < 15:", "    print('보통')", "elif wind < 25:", "    print('강풍')", "else:", "    print('폭풍')"], hint:"4단계 분류: if → elif → elif → else 패턴입니다." }
    ]
  },
  { cat:1, id:14, title:"다중 조건문 심화 (2) - 윤년 판별",
    prompt:"연도 <code>year</code>가 4의 배수이면서 100의 배수가 아닐 때, 또는 400의 배수일 때 윤년(True)입니다. 윤년 여부를 판별해 출력하는 코드를 완성하세요.",
    full:"year = int(input())\nif (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):\n    print('윤년')\nelse:\n    print('평년')",
    hint:"논리 연산자 and와 or를 조합하여 괄호로 명확하게 묶어줍니다.",
    concept: {
      title: "조건문 심화 — 다중 분기와 중첩",
      desc: `if/elif/else를 중첩하거나 여러 elif를 연결해 복잡한 분기를 처리합니다. 조건 순서가 중요합니다. 위에서부터 확인하다가 첫 번째로 True인 블록만 실행됩니다.`,
      syntax: `score = int(input())

if score >= 90:
    grade = 'A'
elif score >= 80:
    grade = 'B'
elif score >= 70:
    grade = 'C'
elif score >= 60:
    grade = 'D'
else:
    grade = 'F'

# 중첩 if
if n > 0:
    if n % 2 == 0:
        print("양수 짝수")
    else:
        print("양수 홀수")
else:
    print("0 이하")`,
      note: `💡 elif 순서가 결과를 바꿉니다. >=90 먼저 검사해야 >=80에서 90 이상이 걸리지 않습니다.`,
      dart: `// 동일한 if/else if 구조
if (score >= 90) {
} else if (score >= 80) {
}`
    },
    drills: [
      { title:"드릴 1 — 다중 조건문 심화 (2) - 윤년 판별", prompt:"연도 <code>year</code>가 4의 배수이면서 100의 배수가 아닐 때, 또는 400의 배수일 때 윤년(True)입니다. 윤년 여부를 판별해 출력하는 코드를 완성하세요.", full:"year = int(input())\nif (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):\n    print('윤년')\nelse:\n    print('평년')", blank:"if (year % 4 == 0 ___ year % 100 != 0) ___ (year % 400 == 0):", answer:"and / or", options:["and / or","or / and","&& / ||","& / |"], blocks:["year = int(input())","if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):","    print('윤년')","else:","    print('평년')"], hint:"논리 연산자 and와 or를 조합하여 괄호로 명확하게 묶어줍니다." },
      { title:"드릴 2 — 400의 배수 단독 조건", prompt:"연도를 입력받아 400의 배수이면 '윤년'을 출력하세요.", full:"year = int(input())\nif year % 400 == 0:\n    print('윤년')", blank:"if year ___ 400 == 0:", answer:"% ", options:["% ", "// ", "** ", "* "], blocks:["year = int(input())", "if year % 400 == 0:", "    print('윤년')"], hint:"% (나머지) 연산자로 배수 여부를 확인합니다." },
      { title:"드릴 3 — 완전한 윤년 판별 (복합 조건)", prompt:"연도를 입력받아 완전한 윤년 조건을 구현하세요: 4의 배수이고 100의 배수가 아니거나, 400의 배수이면 '윤년'.", full:"year = int(input())\nif (year % 4 == 0 and year % 100 != 0) or year % 400 == 0:\n    print('윤년')\nelse:\n    print('평년')", blank:"if (year % 4 == 0 and year % 100 ___ 0) or year % 400 == 0:", answer:"!= ", options:["!= ", "== ", "<= ", "< "], blocks:["year = int(input())", "if (year % 4 == 0 and year % 100 != 0) or year % 400 == 0:", "    print('윤년')", "else:", "    print('평년')"], hint:"100의 배수이면 윤년이 아님 → != 0 조건이 필요합니다." }
    ]
  },
  { cat:1, id:15, title:"다중 조건문 심화 (3) - 사분면 고르기",
    prompt:"x 좌표와 y 좌표를 입력받아 어느 사분면에 속하는지 1, 2, 3, 4 중 하나를 출력하는 코드를 완성하세요. (x, y가 모두 양수면 1사분면 등)",
    full:"x = int(input())\ny = int(input())\nif x > 0 and y > 0:\n    print(1)\nelif x < 0 and y > 0:\n    print(2)\nelif x < 0 and y < 0:\n    print(3)\nelse:\n    print(4)",
    hint:"각 분기마다 x와 y의 부호를 둘 다(and) 확인해야 합니다.",
    concept: {
      title: "조건문 심화 — 다중 분기와 중첩",
      desc: `if/elif/else를 중첩하거나 여러 elif를 연결해 복잡한 분기를 처리합니다. 조건 순서가 중요합니다. 위에서부터 확인하다가 첫 번째로 True인 블록만 실행됩니다.`,
      syntax: `score = int(input())

if score >= 90:
    grade = 'A'
elif score >= 80:
    grade = 'B'
elif score >= 70:
    grade = 'C'
elif score >= 60:
    grade = 'D'
else:
    grade = 'F'

# 중첩 if
if n > 0:
    if n % 2 == 0:
        print("양수 짝수")
    else:
        print("양수 홀수")
else:
    print("0 이하")`,
      note: `💡 elif 순서가 결과를 바꿉니다. >=90 먼저 검사해야 >=80에서 90 이상이 걸리지 않습니다.`,
      dart: `// 동일한 if/else if 구조
if (score >= 90) {
} else if (score >= 80) {
}`
    },
    drills: [
      { title:"드릴 1 — 다중 조건문 심화 (3) - 사분면 고르기", prompt:"x 좌표와 y 좌표를 입력받아 어느 사분면에 속하는지 1, 2, 3, 4 중 하나를 출력하는 코드를 완성하세요. (x, y가 모두 양수면 1사분면 등)", full:"x = int(input())\ny = int(input())\nif x > 0 and y > 0:\n    print(1)\nelif x < 0 and y > 0:\n    print(2)\nelif x < 0 and y < 0:\n    print(3)\nelse:\n    print(4)", blank:"elif x < 0 ___ y > 0:\n    print(2)", answer:"and", options:["and","or","&&","with"], blocks:["if x > 0 and y > 0:","    print(1)","elif x < 0 and y > 0:","    print(2)","elif x < 0 and y < 0:","    print(3)","else:","    print(4)"], hint:"각 분기마다 x와 y의 부호를 둘 다(and) 확인해야 합니다." },
      { title:"드릴 2 — 3사분면 확인", prompt:"정수 <code>x, y</code>를 입력받아 둘 다 음수이면 '3사분면'을 출력하세요.", full:"x = int(input())\ny = int(input())\nif x < 0 and y < 0:\n    print('3사분면')", blank:"if x < 0 ___ y < 0:", answer:"and", options:["and", "or", "&&", "&"], blocks:["x = int(input())", "y = int(input())", "if x < 0 and y < 0:", "    print('3사분면')"], hint:"3사분면: x < 0이고(and) y < 0인 경우입니다." },
      { title:"드릴 3 — 전체 사분면 판별", prompt:"정수 <code>x, y</code>를 입력받아 사분면 번호(1~4)를 출력하세요. (x>0,y>0)→1, (x<0,y>0)→2, (x<0,y<0)→3, (x>0,y<0)→4", full:"x = int(input())\ny = int(input())\nif x > 0 and y > 0:\n    print(1)\nelif x < 0 and y > 0:\n    print(2)\nelif x < 0 and y < 0:\n    print(3)\nelse:\n    print(4)", blank:"if x > 0 and y > 0:\n    print(1)\nelif x < 0 and y > 0:\n    print(2)\nelif x < 0 ___ y < 0:\n    print(3)\nelse:\n    print(4)", answer:"and", options:["and", "or", "&&", "|"], blocks:["x = int(input())", "y = int(input())", "if x > 0 and y > 0:", "    print(1)", "elif x < 0 and y > 0:", "    print(2)", "elif x < 0 and y < 0:", "    print(3)", "else:", "    print(4)"], hint:"각 사분면 조건은 x, y 부호 조합으로 결정됩니다." }
    ]
  },
  { cat:1, id:16, title:"다중 조건문 심화 (4) - 로그인 처리 심화",
    prompt:"아이디와 비밀번호를 입력받습니다. 아이디가 'admin'이 아니면 '아이디 오류', 아이디는 맞으나 비밀번호가 '1234'가 아니면 '비밀번호 오류', 둘 다 맞으면 '로그인 성공'을 출력하세요.",
    full:"uid = input()\npw = input()\nif uid != 'admin':\n    print('아이디 오류')\nelif pw != '1234':\n    print('비밀번호 오류')\nelse:\n    print('로그인 성공')",
    hint:"순차적으로 거르는 방식입니다. 먼저 아이디를 검사하고, 그 다음 비밀번호를 검사합니다.",
    concept: {
      title: "조건문 심화 — 다중 분기와 중첩",
      desc: `if/elif/else를 중첩하거나 여러 elif를 연결해 복잡한 분기를 처리합니다. 조건 순서가 중요합니다. 위에서부터 확인하다가 첫 번째로 True인 블록만 실행됩니다.`,
      syntax: `score = int(input())

if score >= 90:
    grade = 'A'
elif score >= 80:
    grade = 'B'
elif score >= 70:
    grade = 'C'
elif score >= 60:
    grade = 'D'
else:
    grade = 'F'

# 중첩 if
if n > 0:
    if n % 2 == 0:
        print("양수 짝수")
    else:
        print("양수 홀수")
else:
    print("0 이하")`,
      note: `💡 elif 순서가 결과를 바꿉니다. >=90 먼저 검사해야 >=80에서 90 이상이 걸리지 않습니다.`,
      dart: `// 동일한 if/else if 구조
if (score >= 90) {
} else if (score >= 80) {
}`
    },
    drills: [
      { title:"드릴 1 — 다중 조건문 심화 (4) - 로그인 처리 심화", prompt:"아이디와 비밀번호를 입력받습니다. 아이디가 'admin'이 아니면 '아이디 오류', 아이디는 맞으나 비밀번호가 '1234'가 아니면 '비밀번호 오류', 둘 다 맞으면 '로그인 성공'을 출력하세요.", full:"uid = input()\npw = input()\nif uid != 'admin':\n    print('아이디 오류')\nelif pw != '1234':\n    print('비밀번호 오류')\nelse:\n    print('로그인 성공')", blank:"___ uid != 'admin':\n    print('아이디 오류')\n___ pw != '1234':\n    print('비밀번호 오류')", answer:"if / elif", options:["if / elif","if / if","elif / else","if / else"], blocks:["uid = input()","pw = input()","if uid != 'admin':","    print('아이디 오류')","elif pw != '1234':","    print('비밀번호 오류')","else:","    print('로그인 성공')"], hint:"순차적으로 거르는 방식입니다. 먼저 아이디를 검사하고, 그 다음 비밀번호를 검사합니다." },
      { title:"드릴 2 — 단계적 오류 처리", prompt:"점수를 입력받아 0~100 범위가 아니면 '범위 오류', 60 미만이면 '불합격', 그 외 '합격'을 출력하세요.", full:"score = int(input())\nif not (0 <= score <= 100):\n    print('범위 오류')\nelif score < 60:\n    print('불합격')\nelse:\n    print('합격')", blank:"if not (0 ___ score ___ 100):", answer:"<= / <=", options:["<= / <=", "< / <", "== / ==", "and / and"], blocks:["score = int(input())", "if not (0 <= score <= 100):", "    print('범위 오류')", "elif score < 60:", "    print('불합격')", "else:", "    print('합격')"], hint:"not으로 조건을 부정할 수 있습니다. not (범위 조건)은 범위를 벗어난 경우입니다." },
      { title:"드릴 3 — 회원 등급 확인", prompt:"포인트를 입력받아 1000 이상 '골드', 500 이상 '실버', 100 이상 '브론즈', 미만 '일반'을 출력하세요.", full:"point = int(input())\nif point >= 1000:\n    print('골드')\nelif point >= 500:\n    print('실버')\nelif point >= 100:\n    print('브론즈')\nelse:\n    print('일반')", blank:"if point >= 1000:\n    print('골드')\n___ point >= 500:\n    print('실버')\n___ point >= 100:\n    print('브론즈')\nelse:\n    print('일반')", answer:"elif / elif", options:["elif / elif", "else / else", "if / if", "elif / else"], blocks:["point = int(input())", "if point >= 1000:", "    print('골드')", "elif point >= 500:", "    print('실버')", "elif point >= 100:", "    print('브론즈')", "else:", "    print('일반')"], hint:"큰 값부터 순서대로 elif로 확인합니다." }
    ]
  },
  { cat:1, id:17, title:"다중 조건문 심화 (5) - 과속 단속 카메라",
    prompt:"속도 <code>speed</code>와 제한속도 <code>limit</code>을 입력받아, limit 초과시 '과속', 10% 이내 초과시 '경고', 그 이하면 '정상'을 출력하는 코드를 완성하세요.",
    full:"speed = int(input())\nlimit = int(input())\nif speed > limit * 1.1:\n    print('과속')\nelif speed > limit:\n    print('경고')\nelse:\n    print('정상')",
    hint:"10% 초과는 제한속도에 1.1을 곱한 값보다 큰 경우입니다.",
    concept: {
      title: "조건문 심화 — 다중 분기와 중첩",
      desc: `if/elif/else를 중첩하거나 여러 elif를 연결해 복잡한 분기를 처리합니다. 조건 순서가 중요합니다. 위에서부터 확인하다가 첫 번째로 True인 블록만 실행됩니다.`,
      syntax: `score = int(input())

if score >= 90:
    grade = 'A'
elif score >= 80:
    grade = 'B'
elif score >= 70:
    grade = 'C'
elif score >= 60:
    grade = 'D'
else:
    grade = 'F'

# 중첩 if
if n > 0:
    if n % 2 == 0:
        print("양수 짝수")
    else:
        print("양수 홀수")
else:
    print("0 이하")`,
      note: `💡 elif 순서가 결과를 바꿉니다. >=90 먼저 검사해야 >=80에서 90 이상이 걸리지 않습니다.`,
      dart: `// 동일한 if/else if 구조
if (score >= 90) {
} else if (score >= 80) {
}`
    },
    drills: [
      { title:"드릴 1 — 다중 조건문 심화 (5) - 과속 단속 카메라", prompt:"속도 <code>speed</code>와 제한속도 <code>limit</code>을 입력받아, limit 초과시 '과속', 10% 이내 초과시 '경고', 그 이하면 '정상'을 출력하는 코드를 완성하세요.", full:"speed = int(input())\nlimit = int(input())\nif speed > limit * 1.1:\n    print('과속')\nelif speed > limit:\n    print('경고')\nelse:\n    print('정상')", blank:"if speed > limit * ___:\n    print('과속')", answer:"1.1", options:["1.1","1.0","0.1","10"], blocks:["speed = int(input())","limit = int(input())","if speed > limit * 1.1:","    print('과속')","elif speed > limit:","    print('경고')","else:","    print('정상')"], hint:"10% 초과는 제한속도에 1.1을 곱한 값보다 큰 경우입니다." },
      { title:"드릴 2 — 속도 초과 비율 계산", prompt:"실제 속도와 제한 속도를 입력받아 초과율(%)을 계산해 출력하세요. 공식: <code>(speed - limit) / limit * 100</code>", full:"speed = int(input())\nlimit = int(input())\nover_rate = (speed - limit) / limit * 100\nprint(f'{over_rate:.1f}%')", blank:"over_rate = (speed - limit) ___ limit * 100", answer:"/ ", options:["/ ", "* ", "+ ", "- "], blocks:["speed = int(input())", "limit = int(input())", "over_rate = (speed - limit) / limit * 100", "print(f'{over_rate:.1f}%')"], hint:"초과율 = (초과분 / 제한속도) × 100 공식을 사용합니다." },
      { title:"드릴 3 — 벌점 계산 심화", prompt:"속도와 제한속도를 입력받아 초과 없으면 '정상', 20km/h 이하 초과 '경고', 40km/h 이하 초과 '과태료', 그 초과 '면허정지'를 출력하세요.", full:"speed = int(input())\nlimit = int(input())\nover = speed - limit\nif over <= 0:\n    print('정상')\nelif over <= 20:\n    print('경고')\nelif over <= 40:\n    print('과태료')\nelse:\n    print('면허정지')", blank:"over = speed - limit\nif over <= 0:\n    print('정상')\nelif over <= 20:\n    print('경고')\n___ over <= 40:\n    print('과태료')\nelse:\n    print('면허정지')", answer:"elif", options:["elif", "else if", "if", "else"], blocks:["speed = int(input())", "limit = int(input())", "over = speed - limit", "if over <= 0:", "    print('정상')", "elif over <= 20:", "    print('경고')", "elif over <= 40:", "    print('과태료')", "else:", "    print('면허정지')"], hint:"초과분을 먼저 변수에 저장하면 elif 조건이 명확해집니다." }
    ]
  },

  // ─── CATEGORY 2: 반복문 ───────────────────────────────────────
  { cat:2, id:0, title:"종합 기본개념 — 반복문",
    prompt:"반복문 카테고리의 핵심 개념을 한눈에 정리합니다. for/range/while/break/continue를 이해하고 드릴로 익혀보세요.",
    full:`# 반복문의 모든 것
for i in range(5):      # 0,1,2,3,4
for i in range(1, 6):   # 1,2,3,4,5
for x in arr:           # 리스트 순회
for i, v in enumerate(arr):  # 인덱스+값

while count < 5:
    count += 1

for i in range(10):
    if i == 5: break    # 탈출
    if i % 2: continue  # 건너뜀

# 누적 패턴
total = 0
for x in arr:
    total += x`,
    hint:"range(n)은 0~n-1. 끝값 미포함! break은 완전 탈출, continue는 현재 회차 스킵.",
    concept: {
      title: "반복문 — 전체 개요",
      desc: `Python의 for는 컬렉션을 순회합니다. range()로 숫자 반복, 리스트/문자열을 직접 순회합니다. while은 조건이 True인 동안 반복합니다.`,
      syntax: `for i in range(5):         # 0,1,2,3,4
for i in range(1, 6):      # 1,2,3,4,5
for i in range(0, 10, 2):  # 0,2,4,6,8
for i in range(5, 0, -1):  # 5,4,3,2,1

for x in arr:              # 요소 순회
for i, v in enumerate(arr):  # 인덱스+값

while 조건:               # 조건 기반 반복
    코드
    count += 1

break     # 반복 완전 탈출
continue  # 현재 회차 건너뜀

total = 0
for x in arr:
    total += x  # 누적 패턴`,
      note: `💡 range(1, 11)은 1~10. 끝값 포함 안 됨! while에서 증가 코드 빠트리면 무한 루프.`,
      dart: `for (int i=0; i<n; i++)  →  for i in range(n):
for (var x in list)    →  for x in list:
break/continue  →  동일`
    },
    drills: [
      { title:"드릴 1 — range() 기본", prompt:"0부터 4까지 출력하세요.", full:"for i in range(5):\n    print(i)", blank:"for i in range(___):", answer:"5", options:["5","4","6","10"], blocks:["for i in range(5):","    print(i)"], hint:"range(5)는 0,1,2,3,4 — 5 미포함!" },
      { title:"드릴 2 — range(시작, 끝)", prompt:"1부터 5까지 출력하세요.", full:"for i in range(1, 6):\n    print(i)", blank:"for i in range(1, ___):", answer:"6", options:["6","5","7","4"], blocks:["for i in range(1, 6):","    print(i)"], hint:"끝값은 포함되지 않으므로 range(1, 6)은 1~5입니다." },
      { title:"드릴 3 — 누적 합산", prompt:"1부터 10까지의 합을 출력하세요.", full:"total = 0\nfor i in range(1, 11):\n    total += i\nprint(total)", blank:"for i in range(1, ___):", answer:"11", options:["11","10","12","n"], blocks:["total = 0","for i in range(1, 11):","    total += i","print(total)"], hint:"range(1, 11)은 1~10. 합산 패턴: total += i" },
      { title:"드릴 4 — while 반복", prompt:"1, 2, 4, 8, 16처럼 2배씩 증가하다가 100 이하인 동안 출력하세요.", full:"n = 1\nwhile n <= 100:\n    print(n)\n    n *= 2", blank:"while n ___ 100:", answer:"<= ", options:["<= ","< ","== ","!= "], blocks:["n = 1","while n <= 100:","    print(n)","    n *= 2"], hint:"while 조건이 True인 동안 반복합니다." }
    ]
  },

  { cat:2, id:1, title:"range(n) 기본 순회",
    prompt:"0부터 9까지 정수를 한 줄에 하나씩 출력하는 코드를 완성하세요.",
    full:"for i in range(10):\n    print(i)",
    hint:"range(n)은 0부터 n-1까지 정수를 생성합니다.",
    concept: {
      title: "range()와 for 반복문 기본",
      desc: `Python의 for는 '컬렉션을 순회'합니다. range(n)은 0부터 n-1까지의 숫자 시퀀스를 만들어 n번 반복할 수 있게 합니다. range(시작, 끝, 간격) 세 가지 인자 형태를 외우세요.`,
      syntax: `# range() 3가지 형태
for i in range(5):         # 0,1,2,3,4
for i in range(1, 6):      # 1,2,3,4,5 (6 미포함!)
for i in range(0, 10, 2):  # 0,2,4,6,8 (2씩)
for i in range(5, 0, -1):  # 5,4,3,2,1 (역순)

# 리스트 순회
arr = [10, 20, 30]
for x in arr:       # x = 10, 20, 30
    print(x)

# 인덱스와 값 동시 (enumerate)
for i, v in enumerate(arr):
    print(f"{i}번: {v}")`,
      note: `💡 range(1, 11): 1~10. 끝값은 포함되지 않음! range(n): 0~n-1. 자주 틀리는 범위 실수.`,
      dart: `for (var i=0; i<n; i++)  →  for i in range(n):
for (var x in list)    →  for x in list:`
    },
    drills: [
      { title:"드릴 1 — 0~9 출력", prompt:"0부터 9까지 한 줄씩 출력하세요.", full:"for i in range(10):\n    print(i)", blank:"for i in ___(10):", answer:"range", options:["range","loop","iter","count"], blocks:["for i in range(10):","    print(i)"], hint:"range(10)은 0, 1, 2, ..., 9를 생성합니다." },
      { title:"드릴 2 — 1~n 합계", prompt:"정수 n을 입력받아 1부터 n까지의 합을 출력하세요.", full:"n = int(input())\ntotal = 0\nfor i in range(1, n + 1):\n    total += i\nprint(total)", blank:"for i in range(1, ___):", answer:"n + 1", options:["n + 1","n","n - 1","11"], blocks:["n = int(input())","total = 0","for i in range(1, n + 1):","    total += i","print(total)"], hint:"range(a, b)는 a부터 b-1까지입니다. n 포함: range(1, n+1)" },
      { title:"드릴 3 — 리스트 요소 순회", prompt:"리스트 arr = [10, 20, 30, 40]의 각 요소를 한 줄씩 출력하세요.", full:"arr = [10, 20, 30, 40]\nfor item in arr:\n    print(item)", blank:"for item ___ arr:", answer:"in", options:["in","of","from","each"], blocks:["arr = [10, 20, 30, 40]","for item in arr:","    print(item)"], hint:"for 변수 in 리스트: 형태로 각 요소를 순서대로 꺼냅니다." },
      { title:"드릴 4 — 홀수만 출력 (step)", prompt:"1, 3, 5, 7, 9를 range만으로 출력하세요. continue 없이.", full:"for i in range(1, 11, 2):\n    print(i)", blank:"for i in range(1, 11, ___):", answer:"2", options:["2","1","3","0"], blocks:["for i in range(1, 11, 2):","    print(i)"], hint:"range(시작, 끝, 간격)으로 2씩 건너뛸 수 있습니다." },
      { title:"드릴 5 — 역방향 순회", prompt:"10부터 1까지 역순으로 출력하세요.", full:"for i in range(10, 0, -1):\n    print(i)", blank:"for i in range(10, 0, ___):", answer:"-1", options:["-1","1","-10","0"], blocks:["for i in range(10, 0, -1):","    print(i)"], hint:"step을 음수로 하면 감소하며 순회합니다." }
    ]
  },
  { cat:2, id:2, title:"누적 합계 패턴",
    prompt:"정수 <code>n</code>을 입력받아 1부터 n까지의 합을 구해 출력하는 코드를 완성하세요.",
    full:"n = int(input())\ntotal = 0\nfor i in range(1, n + 1):\n    total += i\nprint(total)",
    hint:"range(a, b)는 a부터 b-1까지입니다. n을 포함하려면 range(1, n+1)이에요.",
    concept: {
      title: "while 반복과 break/continue",
      desc: `while은 조건이 True인 동안 계속 반복합니다. break은 반복을 완전히 종료, continue는 현재 회차만 건너뜁니다. 무한 루프 + break 패턴은 메뉴 처리나 입력 유효성 검사에 자주 쓰입니다.`,
      syntax: `# while 기본
count = 0
while count < 5:
    print(count)    # 0,1,2,3,4
    count += 1      # 반드시 증가!

# break — 완전 탈출
for i in range(10):
    if i == 5:
        break        # 5에서 종료
    print(i)         # 0,1,2,3,4 출력

# continue — 현재 회차 스킵
for i in range(5):
    if i == 2:
        continue     # 2는 건너뜀
    print(i)         # 0,1,3,4 출력

# 무한 루프 + break
while True:
    n = int(input())
    if n == 0: break
    print(n * 2)`,
      note: `💡 while에서 증가 코드(count += 1) 빠트리면 무한 루프! break 조건 꼭 확인.`,
      dart: `while (조건) {}  →  while 조건:
break/continue  →  동일`
    },
    drills: [
      { title:"드릴 1 — 1~n 합계", prompt:"1부터 n까지의 합을 출력하세요.", full:"n = int(input())\ntotal = 0\nfor i in range(1, n + 1):\n    total += i\nprint(total)", blank:"total ___ i", answer:"+=", options:["+=","=+","= total +","++"], blocks:["n = int(input())","total = 0","for i in range(1, n + 1):","    total += i","print(total)"], hint:"total += i는 total = total + i와 동일합니다." },
      { title:"드릴 2 — 짝수만의 합", prompt:"1부터 n까지 짝수만의 합을 출력하세요.", full:"n = int(input())\ntotal = 0\nfor i in range(2, n + 1, 2):\n    total += i\nprint(total)", blank:"for i in range(2, n + 1, ___):", answer:"2", options:["2","1","0","-1"], blocks:["n = int(input())","total = 0","for i in range(2, n + 1, 2):","    total += i","print(total)"], hint:"짝수만 순회: range(2, n+1, 2)" },
      { title:"드릴 3 — 누적 곱 (팩토리얼)", prompt:"정수 n을 입력받아 n! (1×2×...×n)을 출력하세요.", full:"n = int(input())\nresult = 1\nfor i in range(1, n + 1):\n    result *= i\nprint(result)", blank:"result ___ i", answer:"*=", options:["*=","+=","/=","**="], blocks:["n = int(input())","result = 1","for i in range(1, n + 1):","    result *= i","print(result)"], hint:"곱셈 누적은 *= 연산자를 사용합니다. 초기값은 1이어야 합니다!" },
      { title:"드릴 4 — while로 합계", prompt:"1부터 n까지의 합을 while문으로 구하세요.", full:"n = int(input())\ntotal = 0\ni = 1\nwhile i <= n:\n    total += i\n    i += 1\nprint(total)", blank:"___ i <= n:", answer:"while", options:["while","for","if","loop"], blocks:["n = int(input())","total = 0","i = 1","while i <= n:","    total += i","    i += 1","print(total)"], hint:"while 조건: 형태로 조건이 참인 동안 반복합니다." }
    ]
  },
  { cat:2, id:3, title:"enumerate로 인덱스와 값",
    prompt:"리스트 <code>arr = ['a', 'b', 'c']</code>를 순회하면서 인덱스와 값을 함께 출력하는 코드를 완성하세요.",
    full:"arr = ['a', 'b', 'c']\nfor i, v in enumerate(arr):\n    print(i, v)",
    hint:"enumerate()는 인덱스와 값을 함께 반환합니다.",
    concept: {
      title: "누적 합산 패턴 — total += x",
      desc: `반복문 안에서 변수를 누적하는 패턴은 합계, 곱, 카운팅 등 모든 집계 연산의 기본입니다. 초기값 설정과 += 복합 대입 연산자를 이해하세요.`,
      syntax: `# 누적 합산
total = 0
for x in arr:
    total += x    # total = total + x 와 동일

# 카운팅
count = 0
for x in arr:
    if x > 0:
        count += 1  # 양수 개수 세기

# 최댓값 추적
max_val = arr[0]
for x in arr:
    if x > max_val:
        max_val = x

# 복합 대입 연산자
x += 1   # x = x + 1
x -= 2   # x = x - 2
x *= 3   # x = x * 3
x //= 2  # x = x // 2`,
      note: `💡 total = 0으로 반드시 초기화! 초기화 없으면 NameError 발생. 초기값이 0인지 1인지도 중요.`,
      dart: `int total = 0;
for (var x in arr) total += x;
// += -= *= 모두 동일`
    },
    drills: [
      { title:"드릴 1 — enumerate 기본", prompt:"리스트 ['a','b','c']를 enumerate로 순회해 인덱스와 값을 출력하세요.", full:"arr = ['a', 'b', 'c']\nfor i, v in enumerate(arr):\n    print(i, v)", blank:"for i, v in ___(arr):", answer:"enumerate", options:["enumerate","zip","range","index"], blocks:["arr = ['a', 'b', 'c']","for i, v in enumerate(arr):","    print(i, v)"], hint:"enumerate()는 (인덱스, 값) 쌍을 반환합니다." },
      { title:"드릴 2 — 인덱스 1부터 시작", prompt:"리스트를 순회하며 1번부터 번호를 붙여 출력하세요. 예: 1. apple", full:"fruits = ['apple','banana','cherry']\nfor i, v in enumerate(fruits, 1):\n    print(f'{i}. {v}')", blank:"for i, v in enumerate(fruits, ___):", answer:"1", options:["1","0","2","-1"], blocks:["fruits = ['apple','banana','cherry']","for i, v in enumerate(fruits, 1):","    print(f'{i}. {v}')"], hint:"enumerate(리스트, 시작번호)로 시작 인덱스를 설정합니다." },
      { title:"드릴 3 — 최댓값 인덱스 찾기", prompt:"리스트 arr에서 최댓값의 인덱스를 enumerate로 찾아 출력하세요.", full:"arr = [3, 7, 2, 9, 1]\nmax_idx = 0\nfor i, v in enumerate(arr):\n    if v > arr[max_idx]:\n        max_idx = i\nprint(max_idx)", blank:"for i, v in ___(arr):", answer:"enumerate", options:["enumerate","range","zip","items"], blocks:["arr = [3, 7, 2, 9, 1]","max_idx = 0","for i, v in enumerate(arr):","    if v > arr[max_idx]:","        max_idx = i","print(max_idx)"], hint:"enumerate()로 인덱스와 값을 동시에 비교할 수 있습니다." },
      { title:"드릴 4 — zip으로 두 리스트 동시 순회", prompt:"이름 리스트와 점수 리스트를 zip으로 묶어 '이름: 점수' 형식으로 출력하세요.", full:"names = ['수','민','지']\nscores = [90, 85, 92]\nfor name, score in zip(names, scores):\n    print(f'{name}: {score}')", blank:"for name, score in ___(names, scores):", answer:"zip", options:["zip","enumerate","map","range"], blocks:["names = ['수','민','지']","scores = [90, 85, 92]","for name, score in zip(names, scores):","    print(f'{name}: {score}')"], hint:"zip()은 두 이터러블을 쌍으로 묶어 동시에 순회합니다." }
    ]
  },
  { cat:2, id:4, title:"break와 continue",
    prompt:"무한 루프에서 특정 조건에 루프를 종료하거나 건너뛰는 방법을 연습합니다.",
    full:"while True:\n    n = int(input())\n    if n == 0:\n        break\n    print(n * 2)",
    hint:"break는 루프를 즉시 종료. continue는 이번 반복만 건너뜁니다.",
    concept: {
      title: "enumerate() — 인덱스와 값 동시 순회",
      desc: `enumerate()는 반복할 때 인덱스(번호)와 값을 동시에 가져옵니다. Java의 인덱스 for(int i=0; ...) 처럼 i와 arr[i]를 따로 쓸 필요가 없어 더 Pythonic합니다.`,
      syntax: `arr = ['a', 'b', 'c', 'd']

# 기본 enumerate
for i, v in enumerate(arr):
    print(f"{i}: {v}")  # 0:a 1:b 2:c 3:d

# 시작 인덱스 변경
for i, v in enumerate(arr, 1):  # 1부터 시작
    print(f"{i}: {v}")  # 1:a 2:b 3:c 4:d

# 인덱스만 필요할 때
for i in range(len(arr)):
    print(arr[i])       # enumerate가 더 Pythonic

# 최솟값과 그 인덱스 찾기
min_val, min_idx = arr[0], 0
for i, v in enumerate(arr):
    if v < min_val:
        min_val, min_idx = v, i`,
      note: `💡 enumerate() 없이 i와 arr[i] 따로 쓰는 건 비파이썬적. 인덱스가 필요하면 enumerate 사용.`,
      dart: `for (int i=0; i<arr.length; i++)  →  for i, v in enumerate(arr):`
    },
    drills: [
      { title:"드릴 1 — break로 루프 탈출", prompt:"정수를 계속 입력받아 2배를 출력하다가 입력이 0이면 종료하세요.", full:"while True:\n    n = int(input())\n    if n == 0:\n        break\n    print(n * 2)", blank:"if n == 0:\n        ___", answer:"break", options:["break","exit","stop","return"], blocks:["while True:","    n = int(input())","    if n == 0:","        break","    print(n * 2)"], hint:"break는 현재 반복문을 즉시 종료합니다." },
      { title:"드릴 2 — continue로 건너뛰기", prompt:"1~10 중 짝수는 건너뛰고 홀수만 출력하세요.", full:"for i in range(1, 11):\n    if i % 2 == 0:\n        continue\n    print(i)", blank:"if i % 2 == 0:\n        ___", answer:"continue", options:["continue","break","pass","skip"], blocks:["for i in range(1, 11):","    if i % 2 == 0:","        continue","    print(i)"], hint:"continue는 이번 반복만 건너뛰고 다음 반복으로 넘어갑니다." },
      { title:"드릴 3 — 특정 값에서 탈출", prompt:"리스트를 순회하다가 음수를 만나면 즉시 멈추고 그 전까지의 합을 출력하세요.", full:"arr = [3, 5, 2, -1, 7, 4]\ntotal = 0\nfor x in arr:\n    if x < 0:\n        break\n    total += x\nprint(total)", blank:"if x < 0:\n        ___", answer:"break", options:["break","continue","return","pass"], blocks:["arr = [3, 5, 2, -1, 7, 4]","total = 0","for x in arr:","    if x < 0:","        break","    total += x","print(total)"], hint:"break는 for문에서도 사용합니다." },
      { title:"드릴 4 — pass로 빈 블록 처리", prompt:"리스트를 순회하며 0이면 무시하고, 나머지는 2배로 출력하세요.", full:"arr = [1, 0, 3, 0, 5]\nfor x in arr:\n    if x == 0:\n        pass\n    else:\n        print(x * 2)", blank:"if x == 0:\n        ___", answer:"pass", options:["pass","continue","break","None"], blocks:["arr = [1, 0, 3, 0, 5]","for x in arr:","    if x == 0:","        pass","    else:","        print(x * 2)"], hint:"pass는 아무것도 하지 않는 자리 채우기입니다." }
    ]
  },
  { cat:2, id:5, title:"while로 카운트다운",
    prompt:"정수 <code>n</code>을 입력받아 n부터 1까지 하나씩 줄여가며 출력하는 카운트다운 코드를 완성하세요. while 문을 사용합니다.",
    full:"n = int(input())\nwhile n > 0:\n    print(n)\n    n -= 1",
    hint:"while 조건: 형태로 조건이 참인 동안 반복합니다. n -= 1로 감소시키는 것 잊지 마세요!",
    concept: {
      title: "while 반복 — 조건 기반 반복",
      desc: `while은 조건이 True인 동안 계속 반복합니다. 반복 횟수가 정해지지 않았을 때 사용합니다. 반드시 종료 조건을 만족시켜야 합니다.`,
      syntax: `# 기본 while
count = 0
while count < 5:
    print(count)
    count += 1    # 증가 코드 필수!

# break로 탈출
while True:
    n = int(input())
    if n == 0:
        break
    print(n * 2)

# continue로 스킵
for i in range(10):
    if i % 2 == 0:
        continue  # 짝수 건너뜀
    print(i)      # 홀수만 출력`,
      note: `💡 while 증가 코드 빠트리면 무한 루프! 항상 루프가 언젠가 끝나는지 확인하세요.`,
      dart: `while (조건) {}  →  while 조건:
break/continue  →  동일`
    },
    drills: [
      { title:"드릴 1 — while로 카운트다운", prompt:"정수 <code>n</code>을 입력받아 n부터 1까지 하나씩 줄여가며 출력하는 카운트다운 코드를 완성하세요. while 문을 사용합니다.", full:"n = int(input())\nwhile n > 0:\n    print(n)\n    n -= 1", blank:"___ n > 0:", answer:"while", options:["while","for","if","loop"], blocks:["n = int(input())","while n > 0:","    print(n)","    n -= 1"], hint:"while 조건: 형태로 조건이 참인 동안 반복합니다. n -= 1로 감소시키는 것 잊지 마세요!" },
      { title:"드릴 2 — while 짝수 카운트다운", prompt:"정수 <code>n</code>을 입력받아 n부터 1까지 짝수만 출력하세요. while문을 사용합니다.", full:"n = int(input())\nwhile n > 0:\n    if n % 2 == 0:\n        print(n)\n    n -= 1", blank:"while n ___ 0:", answer:"> ", options:["> ", "< ", "== ", "!= "], blocks:["n = int(input())", "while n > 0:", "    if n % 2 == 0:", "        print(n)", "    n -= 1"], hint:"while 조건을 만족하는 동안 반복합니다. 매번 n을 1씩 줄여야 무한루프를 막습니다." },
      { title:"드릴 3 — while로 합이 100 넘는 시점 찾기", prompt:"1부터 시작해서 누적합이 처음으로 100을 초과하는 순간의 수를 출력하세요.", full:"total = 0\ni = 1\nwhile total <= 100:\n    total += i\n    i += 1\nprint(i - 1)", blank:"while total ___ 100:", answer:"<= ", options:["<= ", "< ", "== ", "!= "], blocks:["total = 0", "i = 1", "while total <= 100:", "    total += i", "    i += 1", "print(i - 1)"], hint:"while 조건이 True인 동안 반복합니다. 100 이하인 동안 계속 더합니다." }
    ]
  },
  { cat:2, id:6, title:"break로 루프 탈출",
    prompt:"정수를 계속 입력받아 2배 값을 출력하다가, 입력값이 0이면 반복을 종료하는 코드를 완성하세요. 무한 루프와 break를 함께 사용합니다.",
    full:"while True:\n    n = int(input())\n    if n == 0:\n        break\n    print(n * 2)",
    hint:"break는 현재 반복문을 즉시 종료합니다. while True:와 자주 함께 사용됩니다.",
    concept: {
      title: "while 반복 — 조건 기반 반복",
      desc: `while은 조건이 True인 동안 계속 반복합니다. 반복 횟수가 정해지지 않았을 때 사용합니다. 반드시 종료 조건을 만족시켜야 합니다.`,
      syntax: `# 기본 while
count = 0
while count < 5:
    print(count)
    count += 1    # 증가 코드 필수!

# break로 탈출
while True:
    n = int(input())
    if n == 0:
        break
    print(n * 2)

# continue로 스킵
for i in range(10):
    if i % 2 == 0:
        continue  # 짝수 건너뜀
    print(i)      # 홀수만 출력`,
      note: `💡 while 증가 코드 빠트리면 무한 루프! 항상 루프가 언젠가 끝나는지 확인하세요.`,
      dart: `while (조건) {}  →  while 조건:
break/continue  →  동일`
    },
    drills: [
      { title:"드릴 1 — break로 루프 탈출", prompt:"정수를 계속 입력받아 2배 값을 출력하다가, 입력값이 0이면 반복을 종료하는 코드를 완성하세요. 무한 루프와 break를 함께 사용합니다.", full:"while True:\n    n = int(input())\n    if n == 0:\n        break\n    print(n * 2)", blank:"if n == 0:\n        ___", answer:"break", options:["break","exit","stop","return"], blocks:["while True:","    n = int(input())","    if n == 0:","        break","    print(n * 2)"], hint:"break는 현재 반복문을 즉시 종료합니다. while True:와 자주 함께 사용됩니다." },
      { title:"드릴 2 — for + break 첫 음수 탐색", prompt:"리스트 <code>[3, 7, -1, 5, -2]</code>에서 처음 음수를 만나면 그 값을 출력하고 탈출하세요.", full:"arr = [3, 7, -1, 5, -2]\nfor x in arr:\n    if x < 0:\n        print(x)\n        break", blank:"if x < 0:\n        print(x)\n        ___", answer:"break", options:["break", "continue", "return", "pass"], blocks:["arr = [3, 7, -1, 5, -2]", "for x in arr:", "    if x < 0:", "        print(x)", "        break"], hint:"break는 반복문을 즉시 종료합니다. 원하는 값을 찾은 뒤 더 볼 필요가 없을 때 사용합니다." },
      { title:"드릴 3 — while True + 사용자 입력 종료", prompt:"문자열을 계속 입력받아 그대로 출력하다가 'quit'을 입력하면 종료하세요.", full:"while True:\n    s = input()\n    if s == 'quit':\n        break\n    print(s)", blank:"if s == 'quit':\n        ___", answer:"break", options:["break", "continue", "exit", "return"], blocks:["while True:", "    s = input()", "    if s == 'quit':", "        break", "    print(s)"], hint:"while True는 무한루프입니다. 종료 조건에서 break로 탈출합니다." }
    ]
  },
  { cat:2, id:7, title:"continue로 홀수만 출력",
    prompt:"1부터 10까지 순회하면서 짝수는 건너뛰고 홀수만 출력하는 코드를 완성하세요. continue를 사용합니다. 출력: 1, 3, 5, 7, 9",
    full:"for i in range(1, 11):\n    if i % 2 == 0:\n        continue\n    print(i)",
    hint:"continue는 이번 반복만 건너뛰고 다음 반복으로 넘어갑니다.",
    concept: {
      title: "while 반복 — 조건 기반 반복",
      desc: `while은 조건이 True인 동안 계속 반복합니다. 반복 횟수가 정해지지 않았을 때 사용합니다. 반드시 종료 조건을 만족시켜야 합니다.`,
      syntax: `# 기본 while
count = 0
while count < 5:
    print(count)
    count += 1    # 증가 코드 필수!

# break로 탈출
while True:
    n = int(input())
    if n == 0:
        break
    print(n * 2)

# continue로 스킵
for i in range(10):
    if i % 2 == 0:
        continue  # 짝수 건너뜀
    print(i)      # 홀수만 출력`,
      note: `💡 while 증가 코드 빠트리면 무한 루프! 항상 루프가 언젠가 끝나는지 확인하세요.`,
      dart: `while (조건) {}  →  while 조건:
break/continue  →  동일`
    },
    drills: [
      { title:"드릴 1 — continue로 홀수만 출력", prompt:"1부터 10까지 순회하면서 짝수는 건너뛰고 홀수만 출력하는 코드를 완성하세요. continue를 사용합니다. 출력: 1, 3, 5, 7, 9", full:"for i in range(1, 11):\n    if i % 2 == 0:\n        continue\n    print(i)", blank:"if i % 2 == 0:\n        ___", answer:"continue", options:["continue","break","pass","skip"], blocks:["for i in range(1, 11):","    if i % 2 == 0:","        continue","    print(i)"], hint:"continue는 이번 반복만 건너뛰고 다음 반복으로 넘어갑니다." },
      { title:"드릴 2 — 3의 배수 건너뛰기", prompt:"1부터 15까지 순회하면서 3의 배수는 건너뛰고 나머지를 출력하세요.", full:"for i in range(1, 16):\n    if i % 3 == 0:\n        continue\n    print(i)", blank:"if i % 3 == 0:\n        ___", answer:"continue", options:["continue", "break", "pass", "return"], blocks:["for i in range(1, 16):", "    if i % 3 == 0:", "        continue", "    print(i)"], hint:"continue는 이번 반복만 건너뛰고 다음 반복으로 넘어갑니다." },
      { title:"드릴 3 — 짝수만 누적 합산", prompt:"1부터 20까지 홀수는 건너뛰고 짝수만 더해서 합계를 출력하세요. continue를 사용합니다.", full:"total = 0\nfor i in range(1, 21):\n    if i % 2 != 0:\n        continue\n    total += i\nprint(total)", blank:"if i % 2 != 0:\n        ___", answer:"continue", options:["continue", "break", "pass", "skip"], blocks:["total = 0", "for i in range(1, 21):", "    if i % 2 != 0:", "        continue", "    total += i", "print(total)"], hint:"홀수일 때 continue로 건너뛰면 total += i는 짝수만 실행됩니다." }
    ]
  },
  { cat:2, id:8, title:"step으로 홀수만 순회",
    prompt:"range의 세 번째 인자(step)를 이용해 1, 3, 5, 7, 9를 순서대로 출력하는 코드를 완성하세요. continue 없이 range만으로 해결합니다.",
    full:"for i in range(1, 11, 2):\n    print(i)",
    hint:"range(시작, 끝, 간격): 간격을 2로 하면 1,3,5,7,9가 순서대로 나옵니다.",
    concept: {
      title: "range() 반복 — 숫자 범위 순회",
      desc: `range(시작, 끝, 간격)으로 숫자 시퀀스를 만들어 반복합니다. 끝값은 항상 포함되지 않습니다. 코딩테스트에서 가장 많이 쓰이는 반복 패턴입니다.`,
      syntax: `for i in range(5):         # 0,1,2,3,4
for i in range(1, 6):      # 1,2,3,4,5
for i in range(0, 10, 2):  # 0,2,4,6,8
for i in range(5, 0, -1):  # 5,4,3,2,1 (역순)

# 합산 패턴
total = 0
for i in range(1, n+1):
    total += i

# 조건 조합
for i in range(1, 101):
    if i % 3 == 0:
        print(i)`,
      note: `💡 range(1, n+1)이 1~n. range(n)은 0~n-1. 끝값 포함 안 됨 항상 기억!`,
      dart: `for (int i=0; i<n; i++)  →  for i in range(n):`
    },
    drills: [
      { title:"드릴 1 — step으로 홀수만 순회", prompt:"range의 세 번째 인자(step)를 이용해 1, 3, 5, 7, 9를 순서대로 출력하는 코드를 완성하세요. continue 없이 range만으로 해결합니다.", full:"for i in range(1, 11, 2):\n    print(i)", blank:"for i in range(1, 11, ___):", answer:"2", options:["2","1","3","0"], blocks:["for i in range(1, 11, 2):","    print(i)"], hint:"range(시작, 끝, 간격): 간격을 2로 하면 1,3,5,7,9가 순서대로 나옵니다." },
      { title:"드릴 2 — 3의 배수만 range step", prompt:"3, 6, 9, 12, 15를 range의 step만으로 출력하세요.", full:"for i in range(3, 16, 3):\n    print(i)", blank:"for i in range(3, 16, ___):\n    print(i)", answer:"3", options:["3", "2", "1", "6"], blocks:["for i in range(3, 16, 3):", "    print(i)"], hint:"range(시작, 끝, 간격): 시작 3, 끝 16(미포함), 간격 3입니다." },
      { title:"드릴 3 — 짝수 역방향 출력", prompt:"10부터 2까지 짝수를 내림차순으로 출력하세요. range step을 활용합니다.", full:"for i in range(10, 1, -2):\n    print(i)", blank:"for i in range(10, 1, ___):\n    print(i)", answer:"-2", options:["-2", "-1", "2", "-3"], blocks:["for i in range(10, 1, -2):", "    print(i)"], hint:"step을 -2로 하면 10, 8, 6, 4, 2 순서로 감소합니다." }
    ]
  },
  { cat:2, id:9, title:"역방향 순회",
    prompt:"10부터 1까지 역순으로 출력하는 코드를 완성하세요. range의 step을 음수로 지정합니다. 출력: 10, 9, 8, ..., 1",
    full:"for i in range(10, 0, -1):\n    print(i)",
    hint:"step을 음수로 하면 감소하며 순회합니다. range(10, 0, -1)은 10~1을 출력해요.",
    concept: {
      title: "range() 반복 — 숫자 범위 순회",
      desc: `range(시작, 끝, 간격)으로 숫자 시퀀스를 만들어 반복합니다. 끝값은 항상 포함되지 않습니다. 코딩테스트에서 가장 많이 쓰이는 반복 패턴입니다.`,
      syntax: `for i in range(5):         # 0,1,2,3,4
for i in range(1, 6):      # 1,2,3,4,5
for i in range(0, 10, 2):  # 0,2,4,6,8
for i in range(5, 0, -1):  # 5,4,3,2,1 (역순)

# 합산 패턴
total = 0
for i in range(1, n+1):
    total += i

# 조건 조합
for i in range(1, 101):
    if i % 3 == 0:
        print(i)`,
      note: `💡 range(1, n+1)이 1~n. range(n)은 0~n-1. 끝값 포함 안 됨 항상 기억!`,
      dart: `for (int i=0; i<n; i++)  →  for i in range(n):`
    },
    drills: [
      { title:"드릴 1 — 역방향 순회", prompt:"10부터 1까지 역순으로 출력하는 코드를 완성하세요. range의 step을 음수로 지정합니다. 출력: 10, 9, 8, ..., 1", full:"for i in range(10, 0, -1):\n    print(i)", blank:"for i in range(10, 0, ___):", answer:"-1", options:["-1","1","-10","0"], blocks:["for i in range(10, 0, -1):","    print(i)"], hint:"step을 음수로 하면 감소하며 순회합니다. range(10, 0, -1)은 10~1을 출력해요." },
      { title:"드릴 2 — 문자열 역방향 순회", prompt:"문자열 <code>'Python'</code>을 역방향으로 순회하며 각 문자를 출력하세요.", full:"s = 'Python'\nfor ch in s[::-1]:\n    print(ch)", blank:"for ch in s[___]:\n    print(ch)", answer:"::-1", options:["::-1", ":-1", "::1", "-1:"], blocks:["s = 'Python'", "for ch in s[::-1]:", "    print(ch)"], hint:"s[::-1]은 문자열을 뒤집습니다. 역방향 순회에 활용합니다." },
      { title:"드릴 3 — range 역방향으로 인덱스 접근", prompt:"리스트 <code>arr = [1, 2, 3, 4, 5]</code>를 인덱스를 역방향으로 순회하며 출력하세요.", full:"arr = [1, 2, 3, 4, 5]\nfor i in range(len(arr)-1, -1, -1):\n    print(arr[i])", blank:"for i in range(len(arr)-1, -1, ___):\n    print(arr[i])", answer:"-1", options:["-1", "1", "-2", "0"], blocks:["arr = [1, 2, 3, 4, 5]", "for i in range(len(arr)-1, -1, -1):", "    print(arr[i])"], hint:"range(len-1, -1, -1): 마지막 인덱스부터 0까지 역방향입니다." }
    ]
  },
  { cat:2, id:10, title:"이중 for문 — 구구단",
    prompt:"2단부터 9단까지 구구단 전체를 출력하는 코드를 완성하세요. 이중 for문을 사용하며 <code>f'{i} × {j} = {i*j}'</code> 형식으로 출력합니다.",
    full:"for i in range(2, 10):\n    for j in range(1, 10):\n        print(f'{i} × {j} = {i*j}')",
    hint:"이중 for문: 외부 루프 1번마다 내부 루프 전체가 실행됩니다.",
    concept: {
      title: "누적 변수 패턴 — total / count / max_val",
      desc: `반복문에서 누적 변수를 사용하는 패턴은 합산, 카운팅, 최댓값/최솟값 추적에 모두 사용됩니다. 반드시 루프 전에 초기화하고, 루프 안에서 업데이트합니다.`,
      syntax: `# 합산
total = 0
for x in arr:
    total += x

# 카운팅
count = 0
for x in arr:
    if x > 0:
        count += 1

# 최댓값 추적
max_val = arr[0]   # 첫 번째로 초기화
for x in arr[1:]:
    if x > max_val:
        max_val = x

# 또는 내장 함수
sum(arr)   # 합산
max(arr)   # 최댓값
min(arr)   # 최솟값
len(arr)   # 개수`,
      note: `💡 초기값을 잘 설정해야 합니다. 합산은 0, 카운팅은 0, 최댓값은 첫 번째 요소 or float('-inf').`,
      dart: `int total = 0;
for (var x in arr) total += x;
// sum, max, min 내장 없음, reduce 사용`
    },
    drills: [
      { title:"드릴 1 — 이중 for문 — 구구단", prompt:"2단부터 9단까지 구구단 전체를 출력하는 코드를 완성하세요. 이중 for문을 사용하며 <code>f'{i} × {j} = {i*j}'</code> 형식으로 출력합니다.", full:"for i in range(2, 10):\n    for j in range(1, 10):\n        print(f'{i} × {j} = {i*j}')", blank:"for j in range(1, ___):", answer:"10", options:["10","9","11","j"], blocks:["for i in range(2, 10):","    for j in range(1, 10):","        print(f'{i} × {j} = {i*j}')"], hint:"이중 for문: 외부 루프 1번마다 내부 루프 전체가 실행됩니다." },
      { title:"드릴 2 — 이중 for문으로 좌표 출력", prompt:"x를 1~3, y를 1~3으로 순회하며 (x, y) 좌표를 출력하세요.", full:"for x in range(1, 4):\n    for y in range(1, 4):\n        print(f'({x}, {y})')", blank:"for x in range(1, 4):\n    for y in range(1, ___):\n        print(f'({x}, {y})')", answer:"4", options:["4", "3", "5", "10"], blocks:["for x in range(1, 4):", "    for y in range(1, 4):", "        print(f'({x}, {y})')"], hint:"range(1, 4)는 1, 2, 3을 생성합니다." },
      { title:"드릴 3 — 이중 for문으로 삼각형 곱셈표", prompt:"i를 1~5, j를 1~i로 순회하며 i×j를 출력하세요. (삼각형 모양)", full:"for i in range(1, 6):\n    for j in range(1, i+1):\n        print(f'{i}x{j}={i*j}', end=' ')\n    print()", blank:"for j in range(1, ___):\n        print(f'{i}x{j}={i*j}', end=' ')", answer:"i+1", options:["i+1", "i", "i-1", "6"], blocks:["for i in range(1, 6):", "    for j in range(1, i+1):", "        print(f'{i}x{j}={i*j}', end=' ')", "    print()"], hint:"j의 범위가 i+1이어야 j가 1부터 i까지 반복됩니다." }
    ]
  },
  { cat:2, id:11, title:"별 계단 패턴",
    prompt:"정수 <code>n</code>을 입력받아 별(*) 계단을 출력하는 코드를 완성하세요. n=4이면 *, **, ***, ****를 각각 한 줄씩 출력합니다. 문자열 반복 연산자를 활용합니다.",
    full:"n = int(input())\nfor i in range(1, n + 1):\n    print('*' * i)",
    hint:"'*' * i 는 '*'를 i번 반복합니다. '*' * 3 = '***'",
    concept: {
      title: "이중 for문 — 중첩 반복",
      desc: `이중 for문은 2차원 문제(행렬, 패턴 출력, 완전 탐색)에 사용합니다. 외부 루프가 한 번 돌 때 내부 루프는 전체를 돕니다.`,
      syntax: `# 기본 이중 for
for i in range(3):      # 외부: 0,1,2
    for j in range(4):  # 내부: 0,1,2,3
        print(i, j)     # 3×4=12번 실행

# 별 패턴 출력
n = 5
for i in range(1, n+1):
    for j in range(i):
        print('*', end='')
    print()  # 줄바꿈

# 2차원 리스트 순회
matrix = [[1,2],[3,4],[5,6]]
for row in matrix:
    for val in row:
        print(val)`,
      note: `💡 이중 for문은 O(n²). 완전탐색(Brute Force)의 기본. n이 크면 시간초과 주의.`,
      dart: `for (int i=0; i<n; i++)
  for (int j=0; j<m; j++)  →  이중 for i/j in range()`
    },
    drills: [
      { title:"드릴 1 — 별 계단 패턴", prompt:"정수 <code>n</code>을 입력받아 별(*) 계단을 출력하는 코드를 완성하세요. n=4이면 *, **, ***, ****를 각각 한 줄씩 출력합니다. 문자열 반복 연산자를 활용합니다.", full:"n = int(input())\nfor i in range(1, n + 1):\n    print('*' * i)", blank:"print('*' ___ i)", answer:"*", options:["*","+","**","×"], blocks:["n = int(input())","for i in range(1, n + 1):","    print('*' * i)"], hint:"'*' * i 는 '*'를 i번 반복합니다. '*' * 3 = '***'" },
      { title:"드릴 2 — 숫자 계단 패턴", prompt:"정수 <code>n</code>을 입력받아 1행에 1, 2행에 12, 3행에 123 형식의 계단을 출력하세요.", full:"n = int(input())\nfor i in range(1, n+1):\n    print(''.join(str(j) for j in range(1, i+1)))", blank:"for i in range(1, ___):\n    print(''.join(str(j) for j in range(1, i+1)))", answer:"n+1", options:["n+1", "n", "n-1", "n+2"], blocks:["n = int(input())", "for i in range(1, n+1):", "    print(''.join(str(j) for j in range(1, i+1)))"], hint:"range(1, n+1)은 1부터 n까지입니다." },
      { title:"드릴 3 — 역방향 별 계단", prompt:"정수 <code>n</code>을 입력받아 n행부터 1행까지 역방향 별 계단을 출력하세요.", full:"n = int(input())\nfor i in range(n, 0, -1):\n    print('*' * i)", blank:"for i in range(n, 0, ___):\n    print('*' * i)", answer:"-1", options:["-1", "1", "-2", "0"], blocks:["n = int(input())", "for i in range(n, 0, -1):", "    print('*' * i)"], hint:"역방향 range: range(n, 0, -1)은 n, n-1, ..., 1입니다." }
    ]
  },
  { cat:2, id:12, title:"문자열 각 문자 순회",
    prompt:"문자열 <code>s</code>를 입력받아 각 문자를 한 줄씩 출력하는 코드를 완성하세요. 문자열도 for로 직접 순회할 수 있습니다.",
    full:"s = input()\nfor ch in s:\n    print(ch)",
    hint:"문자열도 for로 순회하면 각 문자를 하나씩 꺼낼 수 있습니다.",
    concept: {
      title: "range() 반복 — 숫자 범위 순회",
      desc: `range(시작, 끝, 간격)으로 숫자 시퀀스를 만들어 반복합니다. 끝값은 항상 포함되지 않습니다. 코딩테스트에서 가장 많이 쓰이는 반복 패턴입니다.`,
      syntax: `for i in range(5):         # 0,1,2,3,4
for i in range(1, 6):      # 1,2,3,4,5
for i in range(0, 10, 2):  # 0,2,4,6,8
for i in range(5, 0, -1):  # 5,4,3,2,1 (역순)

# 합산 패턴
total = 0
for i in range(1, n+1):
    total += i

# 조건 조합
for i in range(1, 101):
    if i % 3 == 0:
        print(i)`,
      note: `💡 range(1, n+1)이 1~n. range(n)은 0~n-1. 끝값 포함 안 됨 항상 기억!`,
      dart: `for (int i=0; i<n; i++)  →  for i in range(n):`
    },
    drills: [
      { title:"드릴 1 — 문자열 각 문자 순회", prompt:"문자열 <code>s</code>를 입력받아 각 문자를 한 줄씩 출력하는 코드를 완성하세요. 문자열도 for로 직접 순회할 수 있습니다.", full:"s = input()\nfor ch in s:\n    print(ch)", blank:"for ch ___ s:", answer:"in", options:["in","of","from","each"], blocks:["s = input()","for ch in s:","    print(ch)"], hint:"문자열도 for로 순회하면 각 문자를 하나씩 꺼낼 수 있습니다." },
      { title:"드릴 2 — 문자열 대문자 문자 세기", prompt:"문자열 <code>s</code>를 입력받아 대문자 개수를 세서 출력하세요.", full:"s = input()\ncount = 0\nfor ch in s:\n    if ch.isupper():\n        count += 1\nprint(count)", blank:"for ch in ___:\n    if ch.isupper():\n        count += 1", answer:"s", options:["s", "s[:]", "range(s)", "enumerate(s)"], blocks:["s = input()", "count = 0", "for ch in s:", "    if ch.isupper():", "        count += 1", "print(count)"], hint:"for ch in s: 로 문자열의 각 문자를 순회합니다." },
      { title:"드릴 3 — 단어 역순 출력", prompt:"단어를 입력받아 각 문자를 역순으로 출력하세요.", full:"s = input()\nfor ch in reversed(s):\n    print(ch, end='')", blank:"for ch in ___(s):\n    print(ch, end='')", answer:"reversed", options:["reversed", "reverse", "s[::-1]", "sorted"], blocks:["s = input()", "for ch in reversed(s):", "    print(ch, end='')"], hint:"reversed()는 시퀀스를 역방향으로 순회하는 이터레이터를 반환합니다." }
    ]
  },
  { cat:2, id:13, title:"합산 누적 패턴",
    prompt:"리스트 <code>arr = [3, 1, 4, 1, 5]</code>의 모든 요소의 합을 누적 변수 <code>total</code>로 구하는 코드를 완성하세요. 복합 대입 연산자를 사용합니다. (sum() 함수 사용 금지)",
    full:"arr = [3, 1, 4, 1, 5]\ntotal = 0\nfor x in arr:\n    total += x\nprint(total)",
    hint:"total += x 는 total = total + x 와 동일합니다. 파이썬에는 ++ 가 없어요!",
    concept: {
      title: "누적 변수 패턴 — total / count / max_val",
      desc: `반복문에서 누적 변수를 사용하는 패턴은 합산, 카운팅, 최댓값/최솟값 추적에 모두 사용됩니다. 반드시 루프 전에 초기화하고, 루프 안에서 업데이트합니다.`,
      syntax: `# 합산
total = 0
for x in arr:
    total += x

# 카운팅
count = 0
for x in arr:
    if x > 0:
        count += 1

# 최댓값 추적
max_val = arr[0]   # 첫 번째로 초기화
for x in arr[1:]:
    if x > max_val:
        max_val = x

# 또는 내장 함수
sum(arr)   # 합산
max(arr)   # 최댓값
min(arr)   # 최솟값
len(arr)   # 개수`,
      note: `💡 초기값을 잘 설정해야 합니다. 합산은 0, 카운팅은 0, 최댓값은 첫 번째 요소 or float('-inf').`,
      dart: `int total = 0;
for (var x in arr) total += x;
// sum, max, min 내장 없음, reduce 사용`
    },
    drills: [
      { title:"드릴 1 — 합산 누적 패턴", prompt:"리스트 <code>arr = [3, 1, 4, 1, 5]</code>의 모든 요소의 합을 누적 변수 <code>total</code>로 구하는 코드를 완성하세요. 복합 대입 연산자를 사용합니다. (sum() 함수 사용 금지)", full:"arr = [3, 1, 4, 1, 5]\ntotal = 0\nfor x in arr:\n    total += x\nprint(total)", blank:"total ___ x", answer:"+=", options:["+=","=+","= total +","++"], blocks:["total = 0","for x in arr:","    total += x","print(total)"], hint:"total += x 는 total = total + x 와 동일합니다. 파이썬에는 ++ 가 없어요!" },
      { title:"드릴 2 — 곱셈 누적", prompt:"리스트 <code>[1, 2, 3, 4, 5]</code>의 모든 요소를 곱한 값을 출력하세요.", full:"arr = [1, 2, 3, 4, 5]\nresult = 1\nfor x in arr:\n    result *= x\nprint(result)", blank:"result ___ x", answer:"*= ", options:["*= ", "+= ", "/= ", "**= "], blocks:["arr = [1, 2, 3, 4, 5]", "result = 1", "for x in arr:", "    result *= x", "print(result)"], hint:"곱셈 누적은 *= 연산자를 사용합니다. 초기값은 반드시 1입니다." },
      { title:"드릴 3 — 조건부 누적 합산", prompt:"리스트 <code>[1, -2, 3, -4, 5]</code>에서 양수만 더한 합계를 출력하세요.", full:"arr = [1, -2, 3, -4, 5]\ntotal = 0\nfor x in arr:\n    if x > 0:\n        total += x\nprint(total)", blank:"for x in arr:\n    if x ___ 0:\n        total += x", answer:"> ", options:["> ", "< ", "== ", ">= "], blocks:["arr = [1, -2, 3, -4, 5]", "total = 0", "for x in arr:", "    if x > 0:", "        total += x", "print(total)"], hint:"if x > 0: 조건으로 양수만 필터링해서 누적합니다." }
    ]
  },
  { cat:2, id:14, title:"최대값 직접 찾기",
    prompt:"리스트 <code>arr = [3, 1, 4, 1, 5, 9, 2]</code>에서 max() 함수 없이 반복문만으로 최대값을 찾는 코드를 완성하세요. 초기값을 arr[0]으로 설정하고 순회하며 갱신합니다.",
    full:"arr = [3, 1, 4, 1, 5, 9, 2]\nmax_val = arr[0]\nfor x in arr:\n    if x > max_val:\n        max_val = x\nprint(max_val)",
    hint:"현재 최대값보다 크면 갱신합니다. 이 패턴을 손에 익혀두세요!",
    concept: {
      title: "range() 반복 — 숫자 범위 순회",
      desc: `range(시작, 끝, 간격)으로 숫자 시퀀스를 만들어 반복합니다. 끝값은 항상 포함되지 않습니다. 코딩테스트에서 가장 많이 쓰이는 반복 패턴입니다.`,
      syntax: `for i in range(5):         # 0,1,2,3,4
for i in range(1, 6):      # 1,2,3,4,5
for i in range(0, 10, 2):  # 0,2,4,6,8
for i in range(5, 0, -1):  # 5,4,3,2,1 (역순)

# 합산 패턴
total = 0
for i in range(1, n+1):
    total += i

# 조건 조합
for i in range(1, 101):
    if i % 3 == 0:
        print(i)`,
      note: `💡 range(1, n+1)이 1~n. range(n)은 0~n-1. 끝값 포함 안 됨 항상 기억!`,
      dart: `for (int i=0; i<n; i++)  →  for i in range(n):`
    },
    drills: [
      { title:"드릴 1 — 최대값 직접 찾기", prompt:"리스트 <code>arr = [3, 1, 4, 1, 5, 9, 2]</code>에서 max() 함수 없이 반복문만으로 최대값을 찾는 코드를 완성하세요. 초기값을 arr[0]으로 설정하고 순회하며 갱신합니다.", full:"arr = [3, 1, 4, 1, 5, 9, 2]\nmax_val = arr[0]\nfor x in arr:\n    if x > max_val:\n        max_val = x\nprint(max_val)", blank:"if x > max_val:\n        max_val = ___", answer:"x", options:["x","max_val","arr[0]","max"], blocks:["max_val = arr[0]","for x in arr:","    if x > max_val:","        max_val = x","print(max_val)"], hint:"현재 최대값보다 크면 갱신합니다. 이 패턴을 손에 익혀두세요!" },
      { title:"드릴 2 — 최솟값 직접 찾기", prompt:"리스트 <code>[3, 1, 4, 1, 5, 9, 2]</code>에서 내장 함수 없이 최솟값을 찾아 출력하세요.", full:"arr = [3, 1, 4, 1, 5, 9, 2]\nmin_val = arr[0]\nfor x in arr:\n    if x < min_val:\n        min_val = x\nprint(min_val)", blank:"if x ___ min_val:\n        min_val = x", answer:"< ", options:["< ", "> ", "<= ", ">= "], blocks:["arr = [3, 1, 4, 1, 5, 9, 2]", "min_val = arr[0]", "for x in arr:", "    if x < min_val:", "        min_val = x", "print(min_val)"], hint:"현재 요소가 최솟값보다 작으면 갱신합니다." },
      { title:"드릴 3 — 최댓값의 인덱스 찾기", prompt:"리스트 <code>[3, 1, 4, 1, 5, 9, 2]</code>에서 최댓값의 인덱스를 출력하세요.", full:"arr = [3, 1, 4, 1, 5, 9, 2]\nmax_val = arr[0]\nmax_idx = 0\nfor i, x in enumerate(arr):\n    if x > max_val:\n        max_val = x\n        max_idx = i\nprint(max_idx)", blank:"for i, x in ___(arr):\n    if x > max_val:", answer:"enumerate", options:["enumerate", "range", "zip", "items"], blocks:["arr = [3, 1, 4, 1, 5, 9, 2]", "max_val = arr[0]", "max_idx = 0", "for i, x in enumerate(arr):", "    if x > max_val:", "        max_val = x", "        max_idx = i", "print(max_idx)"], hint:"enumerate()로 인덱스와 값을 동시에 받아 인덱스도 갱신합니다." }
    ]
  },
  { cat:2, id:15, title:"2차원 리스트 순회",
    prompt:"3×3 행렬 <code>matrix = [[1,2,3],[4,5,6],[7,8,9]]</code>의 모든 요소를 한 줄씩 출력하는 코드를 완성하세요. 이중 for문으로 행과 열을 각각 순회합니다.",
    full:"matrix = [[1,2,3],[4,5,6],[7,8,9]]\nfor row in matrix:\n    for val in row:\n        print(val)",
    hint:"2차원 리스트는 이중 for문으로 순회합니다. 외부: 행, 내부: 열",
    concept: {
      title: "이중 for문 — 중첩 반복",
      desc: `이중 for문은 2차원 문제(행렬, 패턴 출력, 완전 탐색)에 사용합니다. 외부 루프가 한 번 돌 때 내부 루프는 전체를 돕니다.`,
      syntax: `# 기본 이중 for
for i in range(3):      # 외부: 0,1,2
    for j in range(4):  # 내부: 0,1,2,3
        print(i, j)     # 3×4=12번 실행

# 별 패턴 출력
n = 5
for i in range(1, n+1):
    for j in range(i):
        print('*', end='')
    print()  # 줄바꿈

# 2차원 리스트 순회
matrix = [[1,2],[3,4],[5,6]]
for row in matrix:
    for val in row:
        print(val)`,
      note: `💡 이중 for문은 O(n²). 완전탐색(Brute Force)의 기본. n이 크면 시간초과 주의.`,
      dart: `for (int i=0; i<n; i++)
  for (int j=0; j<m; j++)  →  이중 for i/j in range()`
    },
    drills: [
      { title:"드릴 1 — 2차원 리스트 순회", prompt:"3×3 행렬 <code>matrix = [[1,2,3],[4,5,6],[7,8,9]]</code>의 모든 요소를 한 줄씩 출력하는 코드를 완성하세요. 이중 for문으로 행과 열을 각각 순회합니다.", full:"matrix = [[1,2,3],[4,5,6],[7,8,9]]\nfor row in matrix:\n    for val in row:\n        print(val)", blank:"for val ___ row:", answer:"in", options:["in","of","from","each"], blocks:["for row in matrix:","    for val in row:","        print(val)"], hint:"2차원 리스트는 이중 for문으로 순회합니다. 외부: 행, 내부: 열" },
      { title:"드릴 2 — 2차원 리스트 행 합계", prompt:"행렬 <code>[[1,2,3],[4,5,6],[7,8,9]]</code>에서 각 행의 합을 출력하세요.", full:"matrix = [[1,2,3],[4,5,6],[7,8,9]]\nfor row in matrix:\n    print(sum(row))", blank:"for row in ___:\n    print(sum(row))", answer:"matrix", options:["matrix", "matrix[:]", "range(matrix)", "enumerate(matrix)"], blocks:["matrix = [[1,2,3],[4,5,6],[7,8,9]]", "for row in matrix:", "    print(sum(row))"], hint:"for row in matrix:로 각 행을 순회하면 row가 [1,2,3] 형태의 리스트가 됩니다." },
      { title:"드릴 3 — 2차원 리스트에서 특정 값 찾기", prompt:"행렬에서 값 5의 위치(행, 열)를 찾아 출력하세요.", full:"matrix = [[1,2,3],[4,5,6],[7,8,9]]\nfor i, row in enumerate(matrix):\n    for j, val in enumerate(row):\n        if val == 5:\n            print(i, j)", blank:"for i, row in ___(matrix):\n    for j, val in ___(row):", answer:"enumerate / enumerate", options:["enumerate / enumerate", "range / range", "zip / zip", "items / items"], blocks:["matrix = [[1,2,3],[4,5,6],[7,8,9]]", "for i, row in enumerate(matrix):", "    for j, val in enumerate(row):", "        if val == 5:", "            print(i, j)"], hint:"이중 enumerate로 행 인덱스(i)와 열 인덱스(j)를 동시에 얻습니다." }
    ]
  },
  { cat:2, id:16, title:"피보나치 수열 출력",
    prompt:"정수 <code>n</code>을 입력받아 피보나치 수열의 n번째 항까지 출력하는 코드를 완성하세요. a=0, b=1로 시작하며 while 반복으로 생성합니다. 예: n=6 → 0 1 1 2 3 5",
    full:"n = int(input())\na, b = 0, 1\nfor _ in range(n):\n    print(a, end=' ')\n    a, b = b, a + b",
    hint:"a, b = b, a+b 로 한 번에 두 변수를 업데이트합니다. 파이썬의 다중 대입!",
    concept: {
      title: "range() 반복 — 숫자 범위 순회",
      desc: `range(시작, 끝, 간격)으로 숫자 시퀀스를 만들어 반복합니다. 끝값은 항상 포함되지 않습니다. 코딩테스트에서 가장 많이 쓰이는 반복 패턴입니다.`,
      syntax: `for i in range(5):         # 0,1,2,3,4
for i in range(1, 6):      # 1,2,3,4,5
for i in range(0, 10, 2):  # 0,2,4,6,8
for i in range(5, 0, -1):  # 5,4,3,2,1 (역순)

# 합산 패턴
total = 0
for i in range(1, n+1):
    total += i

# 조건 조합
for i in range(1, 101):
    if i % 3 == 0:
        print(i)`,
      note: `💡 range(1, n+1)이 1~n. range(n)은 0~n-1. 끝값 포함 안 됨 항상 기억!`,
      dart: `for (int i=0; i<n; i++)  →  for i in range(n):`
    },
    drills: [
      { title:"드릴 1 — 피보나치 수열 출력", prompt:"정수 <code>n</code>을 입력받아 피보나치 수열의 n번째 항까지 출력하는 코드를 완성하세요. a=0, b=1로 시작하며 while 반복으로 생성합니다. 예: n=6 → 0 1 1 2 3 5", full:"n = int(input())\na, b = 0, 1\nfor _ in range(n):\n    print(a, end=' ')\n    a, b = b, a + b", blank:"    a, b = b, ___ + ___", answer:"a / b", options:["a / b","b / a","a+b / a","b+a / b"], blocks:["n = int(input())","a, b = 0, 1","for _ in range(n):","    print(a, end=' ')","    a, b = b, a + b"], hint:"a, b = b, a+b 로 한 번에 두 변수를 업데이트합니다. 파이썬의 다중 대입!" },
      { title:"드릴 2 — 피보나치 n번째 값", prompt:"n을 입력받아 피보나치 수열의 n번째 값(0-indexed)을 출력하세요.", full:"n = int(input())\na, b = 0, 1\nfor _ in range(n):\n    a, b = b, a + b\nprint(a)", blank:"a, b = b, ___ + b", answer:"a", options:["a", "b", "0", "1"], blocks:["n = int(input())", "a, b = 0, 1", "for _ in range(n):", "    a, b = b, a + b", "print(a)"], hint:"파이썬 다중 대입: a, b = b, a+b는 동시에 값을 바꿉니다." },
      { title:"드릴 3 — 피보나치 특정 값 초과 시점", prompt:"피보나치 수열에서 처음으로 1000을 초과하는 값을 출력하세요.", full:"a, b = 0, 1\nwhile a <= 1000:\n    a, b = b, a + b\nprint(a)", blank:"while a ___ 1000:\n    a, b = b, a + b", answer:"<= ", options:["<= ", "< ", "== ", ">= "], blocks:["a, b = 0, 1", "while a <= 1000:", "    a, b = b, a + b", "print(a)"], hint:"1000 이하인 동안 계속 다음 피보나치 값으로 이동합니다." }
    ]
  },
  { cat:2, id:17, title:"구간 내 소수 개수 세기",
    prompt:"2부터 30까지 정수 중 소수가 몇 개인지 세어 출력하는 코드를 완성하세요. 소수 판별: 2부터 해당 수 미만의 수로 나누어 떨어지지 않으면 소수입니다.",
    full:"count = 0\nfor n in range(2, 31):\n    is_prime = True\n    for d in range(2, n):\n        if n % d == 0:\n            is_prime = False\n            break\n    if is_prime:\n        count += 1\nprint(count)",
    hint:"2부터 n-1까지 나누어보면 됩니다. range(2, n)이 정확해요.",
    concept: {
      title: "range() 반복 — 숫자 범위 순회",
      desc: `range(시작, 끝, 간격)으로 숫자 시퀀스를 만들어 반복합니다. 끝값은 항상 포함되지 않습니다. 코딩테스트에서 가장 많이 쓰이는 반복 패턴입니다.`,
      syntax: `for i in range(5):         # 0,1,2,3,4
for i in range(1, 6):      # 1,2,3,4,5
for i in range(0, 10, 2):  # 0,2,4,6,8
for i in range(5, 0, -1):  # 5,4,3,2,1 (역순)

# 합산 패턴
total = 0
for i in range(1, n+1):
    total += i

# 조건 조합
for i in range(1, 101):
    if i % 3 == 0:
        print(i)`,
      note: `💡 range(1, n+1)이 1~n. range(n)은 0~n-1. 끝값 포함 안 됨 항상 기억!`,
      dart: `for (int i=0; i<n; i++)  →  for i in range(n):`
    },
    drills: [
      { title:"드릴 1 — 구간 내 소수 개수 세기", prompt:"2부터 30까지 정수 중 소수가 몇 개인지 세어 출력하는 코드를 완성하세요. 소수 판별: 2부터 해당 수 미만의 수로 나누어 떨어지지 않으면 소수입니다.", full:"count = 0\nfor n in range(2, 31):\n    is_prime = True\n    for d in range(2, n):\n        if n % d == 0:\n            is_prime = False\n            break\n    if is_prime:\n        count += 1\nprint(count)", blank:"    for d in range(2, ___):\n        if n % d == 0:", answer:"n", options:["n","n+1","n-1","31"], blocks:["count = 0","for n in range(2, 31):","    is_prime = True","    for d in range(2, n):","        if n % d == 0:","            is_prime = False","            break","    if is_prime:","        count += 1","print(count)"], hint:"2부터 n-1까지 나누어보면 됩니다. range(2, n)이 정확해요." },
      { title:"드릴 2 — 소수 판별 함수", prompt:"정수 <code>n</code>을 입력받아 소수이면 'prime', 아니면 'not prime'을 출력하세요.", full:"n = int(input())\nis_prime = True\nif n < 2:\n    is_prime = False\nfor i in range(2, int(n**0.5)+1):\n    if n % i == 0:\n        is_prime = False\n        break\nprint('prime' if is_prime else 'not prime')", blank:"for i in range(2, int(n**0.5)+___):\n    if n % i == 0:", answer:"1", options:["1", "2", "0", "-1"], blocks:["n = int(input())", "is_prime = True", "if n < 2:", "    is_prime = False", "for i in range(2, int(n**0.5)+1):", "    if n % i == 0:", "        is_prime = False", "        break", "print('prime' if is_prime else 'not prime')"], hint:"n의 제곱근까지만 나누어 보면 됩니다. int(n**0.5)+1로 범위 설정." },
      { title:"드릴 3 — 에라토스테네스의 체", prompt:"n을 입력받아 2부터 n까지 소수만 출력하세요. 에라토스테네스의 체를 사용합니다.", full:"n = int(input())\nsieve = [True] * (n + 1)\nsieve[0] = sieve[1] = False\nfor i in range(2, int(n**0.5)+1):\n    if sieve[i]:\n        for j in range(i*i, n+1, i):\n            sieve[j] = False\nfor i in range(2, n+1):\n    if sieve[i]:\n        print(i)", blank:"for j in range(i*i, n+1, ___):\n    sieve[j] = False", answer:"i", options:["i", "1", "2", "i*i"], blocks:["n = int(input())", "sieve = [True] * (n + 1)", "sieve[0] = sieve[1] = False", "for i in range(2, int(n**0.5)+1):", "    if sieve[i]:", "        for j in range(i*i, n+1, i):", "            sieve[j] = False", "for i in range(2, n+1):", "    if sieve[i]:", "        print(i)"], hint:"i의 배수들을 i 간격으로 제거합니다. range(i*i, n+1, i)가 핵심입니다." }
    ]
  },
  { cat:2, id:18, title:"이중 for문 심화 (1) - 별 계단 패턴",
    prompt:"정수 <code>n</code>을 입력받아 별(*) 계단을 직각삼각형 모양으로 출력하는 코드를 완성하세요. 이중 for문을 이용해 첫 줄에 1개, 두 번째 줄에 2개를 찍습니다.",
    full:"n = int(input())\nfor i in range(1, n + 1):\n    for j in range(i):\n        print('*', end='')\n    print()",
    hint:"내부 루프는 현재 줄 번호(i)만큼만 반복하여 별을 가로로 찍습니다.",
    concept: {
      title: "이중 for문 — 중첩 반복",
      desc: `이중 for문은 2차원 문제(행렬, 패턴 출력, 완전 탐색)에 사용합니다. 외부 루프가 한 번 돌 때 내부 루프는 전체를 돕니다.`,
      syntax: `# 기본 이중 for
for i in range(3):      # 외부: 0,1,2
    for j in range(4):  # 내부: 0,1,2,3
        print(i, j)     # 3×4=12번 실행

# 별 패턴 출력
n = 5
for i in range(1, n+1):
    for j in range(i):
        print('*', end='')
    print()  # 줄바꿈

# 2차원 리스트 순회
matrix = [[1,2],[3,4],[5,6]]
for row in matrix:
    for val in row:
        print(val)`,
      note: `💡 이중 for문은 O(n²). 완전탐색(Brute Force)의 기본. n이 크면 시간초과 주의.`,
      dart: `for (int i=0; i<n; i++)
  for (int j=0; j<m; j++)  →  이중 for i/j in range()`
    },
    drills: [
      { title:"드릴 1 — 이중 for문 심화 (1) - 별 계단 패턴", prompt:"정수 <code>n</code>을 입력받아 별(*) 계단을 직각삼각형 모양으로 출력하는 코드를 완성하세요. 이중 for문을 이용해 첫 줄에 1개, 두 번째 줄에 2개를 찍습니다.", full:"n = int(input())\nfor i in range(1, n + 1):\n    for j in range(i):\n        print('*', end='')\n    print()", blank:"    for j in range(___):\n        print('*', end='')", answer:"i", options:["i","n","j","1"], blocks:["n = int(input())","for i in range(1, n + 1):","    for j in range(i):","        print('*', end='')","    print()"], hint:"내부 루프는 현재 줄 번호(i)만큼만 반복하여 별을 가로로 찍습니다." },
      { title:"드릴 2 — 직사각형 별 출력", prompt:"행 <code>r</code>과 열 <code>c</code>를 입력받아 r×c 직사각형 별을 출력하세요.", full:"r, c = map(int, input().split())\nfor i in range(r):\n    print('*' * c)", blank:"for i in range(___):\n    print('*' * c)", answer:"r", options:["r", "c", "r*c", "r+c"], blocks:["r, c = map(int, input().split())", "for i in range(r):", "    print('*' * c)"], hint:"행 수만큼 반복하면서 각 행에 열 수만큼 별을 출력합니다." },
      { title:"드릴 3 — 다이아몬드 상단 출력", prompt:"n을 입력받아 다이아몬드의 상단부(1행~n행)를 출력하세요. 각 행은 홀수 개 별(1, 3, 5, ...)입니다.", full:"n = int(input())\nfor i in range(1, n+1):\n    print(' '*(n-i) + '*'*(2*i-1))", blank:"print(' '*(n-i) + '*'*(2*i-___))", answer:"1", options:["1", "2", "0", "i"], blocks:["n = int(input())", "for i in range(1, n+1):", "    print(' '*(n-i) + '*'*(2*i-1))"], hint:"i행의 별 개수는 2*i-1입니다. (1, 3, 5, ...)" }
    ]
  },
  { cat:2, id:19, title:"이중 for문 심화 (2) - 역삼각형 별 찍기",
    prompt:"별자리를 뒤집어서 그립니다. <code>n</code>을 입력받아 첫 줄에는 n개, 그 다음 줄에는 n-1개의 별을 찍어 역삼각형을 만드는 코드를 완성하세요.",
    full:"n = int(input())\nfor i in range(n, 0, -1):\n    for j in range(i):\n        print('*', end='')\n    print()",
    hint:"외부 루프를 역순으로 순회(range(n, 0, -1))하면 내부 루프가 찍는 별의 개수가 줄어듭니다.",
    concept: {
      title: "이중 for문 — 중첩 반복",
      desc: `이중 for문은 2차원 문제(행렬, 패턴 출력, 완전 탐색)에 사용합니다. 외부 루프가 한 번 돌 때 내부 루프는 전체를 돕니다.`,
      syntax: `# 기본 이중 for
for i in range(3):      # 외부: 0,1,2
    for j in range(4):  # 내부: 0,1,2,3
        print(i, j)     # 3×4=12번 실행

# 별 패턴 출력
n = 5
for i in range(1, n+1):
    for j in range(i):
        print('*', end='')
    print()  # 줄바꿈

# 2차원 리스트 순회
matrix = [[1,2],[3,4],[5,6]]
for row in matrix:
    for val in row:
        print(val)`,
      note: `💡 이중 for문은 O(n²). 완전탐색(Brute Force)의 기본. n이 크면 시간초과 주의.`,
      dart: `for (int i=0; i<n; i++)
  for (int j=0; j<m; j++)  →  이중 for i/j in range()`
    },
    drills: [
      { title:"드릴 1 — 이중 for문 심화 (2) - 역삼각형 별 찍기", prompt:"별자리를 뒤집어서 그립니다. <code>n</code>을 입력받아 첫 줄에는 n개, 그 다음 줄에는 n-1개의 별을 찍어 역삼각형을 만드는 코드를 완성하세요.", full:"n = int(input())\nfor i in range(n, 0, -1):\n    for j in range(i):\n        print('*', end='')\n    print()", blank:"for i in range(n, 0, ___):", answer:"-1", options:["-1","1","0","-n"], blocks:["n = int(input())","for i in range(n, 0, -1):","    for j in range(i):","        print('*', end='')","    print()"], hint:"외부 루프를 역순으로 순회(range(n, 0, -1))하면 내부 루프가 찍는 별의 개수가 줄어듭니다." },
      { title:"드릴 2 — 역순 숫자 계단", prompt:"n을 입력받아 n행에서 1행까지 숫자 계단을 역방향으로 출력하세요. 예: 3→'123', 2→'12', 1→'1'", full:"n = int(input())\nfor i in range(n, 0, -1):\n    print(''.join(str(j) for j in range(1, i+1)))", blank:"for i in range(n, 0, ___):\n    print(''.join(str(j) for j in range(1, i+1)))", answer:"-1", options:["-1", "1", "-2", "0"], blocks:["n = int(input())", "for i in range(n, 0, -1):", "    print(''.join(str(j) for j in range(1, i+1)))"], hint:"역방향 range: range(n, 0, -1)은 n, n-1, ..., 1 순입니다." },
      { title:"드릴 3 — 공백 포함 역삼각형", prompt:"n을 입력받아 역삼각형 별을 출력하되 각 행 앞에 공백을 채워 정렬하세요. 1행: n개 별, 마지막 행: 1개 별.", full:"n = int(input())\nfor i in range(n, 0, -1):\n    print(' '*(n-i) + '*'*i)", blank:"print(' '*(n-i) + '*'*___)", answer:"i", options:["i", "n", "n-i", "i-1"], blocks:["n = int(input())", "for i in range(n, 0, -1):", "    print(' '*(n-i) + '*'*i)"], hint:"i행의 별 개수는 i개입니다. 역순으로 줄어듭니다." }
    ]
  },
  { cat:2, id:20, title:"이중 for문 심화 (3) - 두 주사위의 합",
    prompt:"두 개의 주사위를 던졌을 때, 눈의 합이 <code>k</code>가 되는 모든 경우의 수 (i, j)를 출력하는 코드를 완성하세요.",
    full:"k = int(input())\nfor i in range(1, 7):\n    for j in range(1, 7):\n        if i + j == k:\n            print(i, j)",
    hint:"모든 경우의 수(6 x 6)를 탐색하며 조건에 맞는 것만 골라내는 가장 기초적인 완전 탐색(Brute Force)입니다.",
    concept: {
      title: "이중 for문 — 중첩 반복",
      desc: `이중 for문은 2차원 문제(행렬, 패턴 출력, 완전 탐색)에 사용합니다. 외부 루프가 한 번 돌 때 내부 루프는 전체를 돕니다.`,
      syntax: `# 기본 이중 for
for i in range(3):      # 외부: 0,1,2
    for j in range(4):  # 내부: 0,1,2,3
        print(i, j)     # 3×4=12번 실행

# 별 패턴 출력
n = 5
for i in range(1, n+1):
    for j in range(i):
        print('*', end='')
    print()  # 줄바꿈

# 2차원 리스트 순회
matrix = [[1,2],[3,4],[5,6]]
for row in matrix:
    for val in row:
        print(val)`,
      note: `💡 이중 for문은 O(n²). 완전탐색(Brute Force)의 기본. n이 크면 시간초과 주의.`,
      dart: `for (int i=0; i<n; i++)
  for (int j=0; j<m; j++)  →  이중 for i/j in range()`
    },
    drills: [
      { title:"드릴 1 — 이중 for문 심화 (3) - 두 주사위의 합", prompt:"두 개의 주사위를 던졌을 때, 눈의 합이 <code>k</code>가 되는 모든 경우의 수 (i, j)를 출력하는 코드를 완성하세요.", full:"k = int(input())\nfor i in range(1, 7):\n    for j in range(1, 7):\n        if i + j == k:\n            print(i, j)", blank:"        if i + j ___ k:", answer:"==", options:["==","=","is","!="], blocks:["k = int(input())","for i in range(1, 7):","    for j in range(1, 7):","        if i + j == k:","            print(i, j)"], hint:"모든 경우의 수(6 x 6)를 탐색하며 조건에 맞는 것만 골라내는 가장 기초적인 완전 탐색(Brute Force)입니다." },
      { title:"드릴 2 — 두 주사위 합이 k인 경우의 수", prompt:"두 주사위(1~6)의 합이 k가 되는 경우의 수를 출력하세요.", full:"k = int(input())\ncount = 0\nfor i in range(1, 7):\n    for j in range(1, 7):\n        if i + j == k:\n            count += 1\nprint(count)", blank:"for i in range(1, 7):\n    for j in range(1, 7):\n        if i + j == k:\n            ___ += 1", answer:"count", options:["count", "i", "j", "k"], blocks:["k = int(input())", "count = 0", "for i in range(1, 7):", "    for j in range(1, 7):", "        if i + j == k:", "            count += 1", "print(count)"], hint:"count 변수를 조건을 만족할 때마다 1씩 증가시킵니다." },
      { title:"드릴 3 — 두 주사위 곱이 짝수인 경우 출력", prompt:"두 주사위(1~6)의 곱이 짝수인 (i, j) 쌍을 모두 출력하세요.", full:"for i in range(1, 7):\n    for j in range(1, 7):\n        if (i * j) % 2 == 0:\n            print(i, j)", blank:"if (i * j) ___ 2 == 0:", answer:"% ", options:["% ", "// ", "+ ", "** "], blocks:["for i in range(1, 7):", "    for j in range(1, 7):", "        if (i * j) % 2 == 0:", "            print(i, j)"], hint:"% 2 == 0이면 짝수입니다." }
    ]
  },
  { cat:2, id:21, title:"이중 for문 심화 (4) - 2차원 리스트 탐색",
    prompt:"3×3 2차원 리스트 <code>matrix = [[1,2,3],[4,5,6],[7,8,9]]</code>의 모든 요소를 순회하며, 짝수만 출력하는 코드를 이중 for문으로 완성하세요.",
    full:"matrix = [[1,2,3],[4,5,6],[7,8,9]]\nfor row in matrix:\n    for val in row:\n        if val % 2 == 0:\n            print(val)",
    hint:"2차원 리스트는 먼저 행(row)을 꺼내고, 그 행 안에서 값(val)을 꺼내는 이중 구조입니다.",
    concept: {
      title: "이중 for문 — 중첩 반복",
      desc: `이중 for문은 2차원 문제(행렬, 패턴 출력, 완전 탐색)에 사용합니다. 외부 루프가 한 번 돌 때 내부 루프는 전체를 돕니다.`,
      syntax: `# 기본 이중 for
for i in range(3):      # 외부: 0,1,2
    for j in range(4):  # 내부: 0,1,2,3
        print(i, j)     # 3×4=12번 실행

# 별 패턴 출력
n = 5
for i in range(1, n+1):
    for j in range(i):
        print('*', end='')
    print()  # 줄바꿈

# 2차원 리스트 순회
matrix = [[1,2],[3,4],[5,6]]
for row in matrix:
    for val in row:
        print(val)`,
      note: `💡 이중 for문은 O(n²). 완전탐색(Brute Force)의 기본. n이 크면 시간초과 주의.`,
      dart: `for (int i=0; i<n; i++)
  for (int j=0; j<m; j++)  →  이중 for i/j in range()`
    },
    drills: [
      { title:"드릴 1 — 이중 for문 심화 (4) - 2차원 리스트 탐색", prompt:"3×3 2차원 리스트 <code>matrix = [[1,2,3],[4,5,6],[7,8,9]]</code>의 모든 요소를 순회하며, 짝수만 출력하는 코드를 이중 for문으로 완성하세요.", full:"matrix = [[1,2,3],[4,5,6],[7,8,9]]\nfor row in matrix:\n    for val in row:\n        if val % 2 == 0:\n            print(val)", blank:"for val ___ row:", answer:"in", options:["in","of","from","each"], blocks:["for row in matrix:","    for val in row:","        if val % 2 == 0:","            print(val)"], hint:"2차원 리스트는 먼저 행(row)을 꺼내고, 그 행 안에서 값(val)을 꺼내는 이중 구조입니다." },
      { title:"드릴 2 — 2차원 리스트 짝수만 출력", prompt:"행렬 <code>[[1,2,3],[4,5,6],[7,8,9]]</code>에서 짝수만 출력하세요.", full:"matrix = [[1,2,3],[4,5,6],[7,8,9]]\nfor row in matrix:\n    for val in row:\n        if val % 2 == 0:\n            print(val)", blank:"for val in ___:\n        if val % 2 == 0:", answer:"row", options:["row", "matrix", "range(row)", "enumerate(row)"], blocks:["matrix = [[1,2,3],[4,5,6],[7,8,9]]", "for row in matrix:", "    for val in row:", "        if val % 2 == 0:", "            print(val)"], hint:"이중 for문: 외부 루프로 행을 얻고, 내부 루프로 각 행의 요소를 순회합니다." },
      { title:"드릴 3 — 2차원 리스트 열 합계", prompt:"행렬 <code>[[1,2,3],[4,5,6],[7,8,9]]</code>의 각 열의 합계를 출력하세요.", full:"matrix = [[1,2,3],[4,5,6],[7,8,9]]\nfor j in range(len(matrix[0])):\n    col_sum = 0\n    for row in matrix:\n        col_sum += row[j]\n    print(col_sum)", blank:"for j in range(len(matrix[___])):\n    col_sum = 0", answer:"0", options:["0", "1", "-1", "j"], blocks:["matrix = [[1,2,3],[4,5,6],[7,8,9]]", "for j in range(len(matrix[0])):", "    col_sum = 0", "    for row in matrix:", "        col_sum += row[j]", "    print(col_sum)"], hint:"matrix[0]의 길이가 열의 수입니다. 각 행에서 j번째 원소를 더합니다." }
    ]
  },
  { cat:2, id:22, title:"이중 for문 심화 (5) - 약수의 개수 구하기",
    prompt:"1부터 <code>n</code>까지 각 숫자의 약수의 개수를 구해서 출력하는 코드를 이중 for문으로 완성하세요.",
    full:"n = int(input())\nfor i in range(1, n + 1):\n    count = 0\n    for j in range(1, i + 1):\n        if i % j == 0:\n            count += 1\n    print(f'{i}의 약수 개수: {count}')",
    hint:"각 숫자 i에 대해 1부터 i까지 나누어 떨어지는지(나머지가 0인지) 확인합니다.",
    concept: {
      title: "이중 for문 — 중첩 반복",
      desc: `이중 for문은 2차원 문제(행렬, 패턴 출력, 완전 탐색)에 사용합니다. 외부 루프가 한 번 돌 때 내부 루프는 전체를 돕니다.`,
      syntax: `# 기본 이중 for
for i in range(3):      # 외부: 0,1,2
    for j in range(4):  # 내부: 0,1,2,3
        print(i, j)     # 3×4=12번 실행

# 별 패턴 출력
n = 5
for i in range(1, n+1):
    for j in range(i):
        print('*', end='')
    print()  # 줄바꿈

# 2차원 리스트 순회
matrix = [[1,2],[3,4],[5,6]]
for row in matrix:
    for val in row:
        print(val)`,
      note: `💡 이중 for문은 O(n²). 완전탐색(Brute Force)의 기본. n이 크면 시간초과 주의.`,
      dart: `for (int i=0; i<n; i++)
  for (int j=0; j<m; j++)  →  이중 for i/j in range()`
    },
    drills: [
      { title:"드릴 1 — 이중 for문 심화 (5) - 약수의 개수 구하기", prompt:"1부터 <code>n</code>까지 각 숫자의 약수의 개수를 구해서 출력하는 코드를 이중 for문으로 완성하세요.", full:"n = int(input())\nfor i in range(1, n + 1):\n    count = 0\n    for j in range(1, i + 1):\n        if i % j == 0:\n            count += 1\n    print(f'{i}의 약수 개수: {count}')", blank:"        if i % j ___ 0:\n            count += 1", answer:"==", options:["==","!=","=","<"], blocks:["n = int(input())","for i in range(1, n + 1):","    count = 0","    for j in range(1, i + 1):","        if i % j == 0:","            count += 1","    print(f'{i}의 약수 개수: {count}')"], hint:"각 숫자 i에 대해 1부터 i까지 나누어 떨어지는지(나머지가 0인지) 확인합니다." },
      { title:"드릴 2 — 특정 수의 약수 출력", prompt:"정수 <code>n</code>을 입력받아 n의 약수를 모두 출력하세요.", full:"n = int(input())\nfor i in range(1, n+1):\n    if n % i == 0:\n        print(i)", blank:"if n ___ i == 0:\n        print(i)", answer:"% ", options:["% ", "// ", "** ", "* "], blocks:["n = int(input())", "for i in range(1, n+1):", "    if n % i == 0:", "        print(i)"], hint:"n % i == 0이면 i는 n의 약수입니다." },
      { title:"드릴 3 — 약수 개수가 가장 많은 수 찾기", prompt:"1부터 30까지에서 약수 개수가 가장 많은 수를 출력하세요.", full:"max_count = 0\nmax_num = 1\nfor n in range(1, 31):\n    count = 0\n    for i in range(1, n+1):\n        if n % i == 0:\n            count += 1\n    if count > max_count:\n        max_count = count\n        max_num = n\nprint(max_num)", blank:"if count ___ max_count:\n        max_count = count\n        max_num = n", answer:"> ", options:["> ", "< ", "== ", ">= "], blocks:["max_count = 0", "max_num = 1", "for n in range(1, 31):", "    count = 0", "    for i in range(1, n+1):", "        if n % i == 0:", "            count += 1", "    if count > max_count:", "        max_count = count", "        max_num = n", "print(max_num)"], hint:"외부 루프로 각 수를 확인하고, 내부 루프로 약수 개수를 셉니다." }
    ]
  },

  // ─── CATEGORY 3: 리스트 조작 ──────────────────────────────────
  { cat:3, id:0, title:"종합 기본개념 — 리스트 조작",
    prompt:"리스트 조작 카테고리의 핵심 개념을 정리합니다. append/pop, sort/sorted, 슬라이싱, 리스트 컴프리헨션을 익혀보세요.",
    full:`# 리스트 조작의 모든 것
arr = [3, 1, 4, 1, 5]

# 추가/제거
arr.append(9)       # 끝에 추가
arr.pop()           # 끝 제거+반환
arr.pop(0)          # 0번 제거
arr.insert(2, 99)   # 2번에 삽입

# 정렬
sorted(arr)         # 새 리스트 반환
arr.sort()          # 원본 수정

# 슬라이싱
arr[1:4]   # 인덱스 1,2,3
arr[::-1]  # 역순

# 컴프리헨션
[x*2 for x in arr]
[x for x in arr if x > 0]`,
    hint:"sorted()는 원본 유지, sort()는 원본 변경. arr[-1]은 마지막 요소.",
    concept: {
      title: "리스트 조작 — 전체 개요",
      desc: `Python 리스트는 동적 배열로 Dart의 List, Java의 ArrayList와 유사합니다. 하지만 슬라이싱과 컴프리헨션이라는 Python만의 강력한 기능이 있습니다.`,
      syntax: `arr = [3, 1, 4, 1, 5]

# 추가/제거
arr.append(9)        # 끝에 추가
arr.pop()            # 끝 제거 + 반환
arr.insert(1, 99)    # 특정 위치 삽입
arr.remove(1)        # 값 기준 제거 (첫 번째)

# 정렬
sorted(arr)          # 새 리스트, 원본 유지
arr.sort()           # 제자리 정렬
arr.sort(reverse=True)  # 내림차순

# 슬라이싱
arr[1:4]    # 인덱스 1~3
arr[::-1]   # 역순 복사
arr[-1]     # 마지막 요소

# 컴프리헨션
[x*2 for x in arr]
[x for x in arr if x > 2]`,
      note: `💡 sorted() ≠ sort(). sorted는 반환값 있고 원본 유지. sort는 None 반환, 원본 수정.`,
      dart: `list.add(x)            →  arr.append(x)
list.sort()            →  arr.sort()
list.reversed.toList() →  arr[::-1]`
    },
    drills: [
      { title:"드릴 1 — append 기본", prompt:"빈 리스트에 1, 2, 3을 순서대로 추가하세요.", full:"arr = []\narr.append(1)\narr.append(2)\narr.append(3)\nprint(arr)", blank:"arr.___(1)", answer:"append", options:["append","add","push","insert"], blocks:["arr = []","arr.append(1)","arr.append(2)","arr.append(3)","print(arr)"], hint:"append()는 리스트 맨 끝에 요소를 추가합니다." },
      { title:"드릴 2 — sorted 정렬", prompt:"리스트 [3,1,4,1,5]를 정렬해 새 리스트로 만드세요.", full:"arr = [3,1,4,1,5]\nnew = sorted(arr)\nprint(new)", blank:"new = ___(arr)", answer:"sorted", options:["sorted","sort","arrange","order"], blocks:["arr = [3,1,4,1,5]","new = sorted(arr)","print(new)"], hint:"sorted()는 새 정렬 리스트를 반환합니다. 원본은 변경되지 않습니다." },
      { title:"드릴 3 — 슬라이싱", prompt:"리스트 [0,1,2,3,4,5]에서 [1,2,3]을 슬라이싱으로 추출하세요.", full:"arr = [0,1,2,3,4,5]\nprint(arr[1:4])", blank:"print(arr[1:___])", answer:"4", options:["4","3","5","2"], blocks:["arr = [0,1,2,3,4,5]","print(arr[1:4])"], hint:"arr[a:b]는 인덱스 a~b-1. 끝값 4는 포함 안 됨." },
      { title:"드릴 4 — 컴프리헨션", prompt:"리스트 [1,2,3,4,5]의 각 요소를 2배로 한 새 리스트를 만드세요.", full:"arr = [1,2,3,4,5]\nnew = [x*2 for x in arr]\nprint(new)", blank:"new = [x*2 ___ x in arr]", answer:"for", options:["for","in","if","while"], blocks:["arr = [1,2,3,4,5]","new = [x*2 for x in arr]","print(new)"], hint:"[표현식 for 변수 in 이터러블]" }
    ]
  },

  { cat:3, id:1, title:"append와 pop",
    prompt:"리스트에 요소를 추가하고 제거하는 기본 메서드를 연습합니다.",
    full:"arr = []\narr.append(10)\narr.append(20)\nprint(arr)",
    hint:"append()는 맨 끝에 추가, pop()은 맨 끝에서 제거 후 반환합니다.",
    concept: {
      title: "append / pop / insert / remove",
      desc: `Python 리스트는 동적 배열입니다. append()로 끝에 추가, pop()으로 끝에서 제거, insert()로 특정 위치에 삽입, remove()로 값 기준 제거. 스택은 append+pop, 큐는 append+pop(0)으로 구현합니다.`,
      syntax: `arr = [1, 2, 3]

# 추가
arr.append(4)       # 끝에 추가 → [1,2,3,4]
arr.insert(1, 99)   # 1번에 삽입 → [1,99,2,3,4]

# 제거
arr.pop()           # 끝 제거 + 반환 → 4 반환
arr.pop(0)          # 0번 제거 + 반환
arr.remove(99)      # 값 기준 제거 (첫 번째 99)

# 스택 패턴 (LIFO)
stack = []
stack.append(1)     # push
stack.pop()         # pop (마지막에서)

# 큐 패턴 (FIFO) — 느림, 실제론 deque 사용
queue = []
queue.append(1)     # enqueue
queue.pop(0)        # dequeue (처음에서)`,
      note: `💡 pop(0)은 O(n)으로 느림. 큐가 필요하면 collections.deque 사용. pop()은 O(1).`,
      dart: `list.add(x)         →  arr.append(x)
list.removeAt(i)    →  arr.pop(i)
list.insert(i, x)   →  arr.insert(i, x)`
    },
    drills: [
      { title:"드릴 1 — append로 요소 추가", prompt:"빈 리스트에 10, 20을 순서대로 추가해 [10, 20]을 만드세요.", full:"arr = []\narr.append(10)\narr.append(20)\nprint(arr)", blank:"arr.___(10)", answer:"append", options:["append","add","push","insert"], blocks:["arr = []","arr.append(10)","arr.append(20)","print(arr)"], hint:"append()는 리스트 맨 끝에 요소를 추가합니다." },
      { title:"드릴 2 — pop으로 마지막 요소 제거", prompt:"리스트 [1,2,3]에서 마지막 요소를 꺼내 변수 x에 저장하세요.", full:"arr = [1, 2, 3]\nx = arr.pop()\nprint(x)\nprint(arr)", blank:"x = arr.___()", answer:"pop", options:["pop","remove","delete","last"], blocks:["arr = [1, 2, 3]","x = arr.pop()","print(x)","print(arr)"], hint:"pop()은 마지막 요소를 제거하고 반환합니다." },
      { title:"드릴 3 — insert로 특정 위치 삽입", prompt:"리스트 [1, 3]의 1번 인덱스에 값 2를 끼워넣어 [1, 2, 3]을 만드세요.", full:"arr = [1, 3]\narr.insert(1, 2)\nprint(arr)", blank:"arr.___(1, 2)", answer:"insert", options:["insert","add","append","put"], blocks:["arr = [1, 3]","arr.insert(1, 2)","print(arr)"], hint:"insert(인덱스, 값)은 특정 위치에 값을 밀어넣습니다." },
      { title:"드릴 4 — remove로 값 삭제", prompt:"리스트 [10, 20, 30, 20]에서 처음 등장하는 20을 삭제하세요.", full:"arr = [10, 20, 30, 20]\narr.remove(20)\nprint(arr)", blank:"arr.___(20)", answer:"remove", options:["remove","delete","pop","drop"], blocks:["arr = [10, 20, 30, 20]","arr.remove(20)","print(arr)"], hint:"remove(값)은 해당 값을 찾아 지웁니다. 인덱스가 아닌 값으로 삭제합니다." },
      { title:"드릴 5 — while로 스택처럼 비우기", prompt:"리스트 [1,2,3,4,5]를 while문으로 뒤에서부터 모두 꺼내 출력하세요.", full:"arr = [1, 2, 3, 4, 5]\nwhile arr:\n    print(arr.pop())", blank:"while ___:", answer:"arr", options:["arr","True","len(arr)>0","not arr"], blocks:["arr = [1, 2, 3, 4, 5]","while arr:","    print(arr.pop())"], hint:"빈 리스트는 False이므로 while arr:는 리스트가 빌 때까지 반복합니다." }
    ]
  },
  { cat:3, id:2, title:"정렬과 슬라이싱",
    prompt:"sort, sorted, 슬라이싱으로 리스트를 조작하는 방법을 연습합니다.",
    full:"arr = [3, 1, 4, 1, 5]\nsorted_arr = sorted(arr)\nprint(sorted_arr)",
    hint:"sorted()는 원본 유지 새 리스트 반환. sort()는 원본 수정.",
    concept: {
      title: "sorted() vs sort() — 정렬과 슬라이싱",
      desc: `sorted()는 원본을 유지하고 새 리스트를 반환합니다. sort()는 원본을 직접 수정합니다. 슬라이싱 arr[a:b]는 인덱스 a부터 b-1까지 추출합니다.`,
      syntax: `arr = [3, 1, 4, 1, 5]

# sorted — 원본 유지
new_arr = sorted(arr)          # 오름차순 새 리스트
new_arr = sorted(arr, reverse=True)  # 내림차순

# sort — 원본 변경
arr.sort()                     # 오름차순 정렬
arr.sort(reverse=True)         # 내림차순 정렬
arr.sort(key=lambda x: -x)     # 키 기준

# 슬라이싱 [시작:끝:간격]
arr[1:4]    # 인덱스 1,2,3 (4 미포함)
arr[:3]     # 처음 ~ 인덱스 2
arr[2:]     # 인덱스 2 ~ 끝
arr[::-1]   # 전체 역순 복사 (뒤집기)
arr[-1]     # 마지막 요소
arr[-2]     # 끝에서 두 번째`,
      note: `💡 sorted() vs sort() 혼동 주의! sorted는 원본 유지 + 반환. sort는 제자리 수정 + None 반환.`,
      dart: `list.sort()          →  arr.sort()
List.from(list)..sort() →  sorted(arr)
list.reversed.toList()   →  arr[::-1]`
    },
    drills: [
      { title:"드릴 1 — sorted 오름차순", prompt:"리스트 [3,1,4,1,5]를 원본 유지하며 정렬된 새 리스트를 만드세요.", full:"arr = [3, 1, 4, 1, 5]\nsorted_arr = sorted(arr)\nprint(sorted_arr)", blank:"sorted_arr = ___(arr)", answer:"sorted", options:["sorted","sort","arrange","order"], blocks:["arr = [3, 1, 4, 1, 5]","sorted_arr = sorted(arr)","print(sorted_arr)"], hint:"sorted()는 원본을 유지하고 새 리스트를 반환합니다." },
      { title:"드릴 2 — sort 내림차순", prompt:"리스트 [3,1,4,1,5]를 내림차순으로 정렬하세요. 원본을 직접 수정합니다.", full:"arr = [3, 1, 4, 1, 5]\narr.sort(reverse=True)\nprint(arr)", blank:"arr.sort(___=True)", answer:"reverse", options:["reverse","desc","backward","down"], blocks:["arr = [3, 1, 4, 1, 5]","arr.sort(reverse=True)","print(arr)"], hint:"reverse=True 옵션을 사용하면 내림차순 정렬이 됩니다." },
      { title:"드릴 3 — 슬라이싱으로 부분 추출", prompt:"리스트 [0,1,2,3,4,5]에서 인덱스 1,2,3번 요소([1,2,3])를 슬라이싱으로 추출하세요.", full:"arr = [0, 1, 2, 3, 4, 5]\nprint(arr[1:4])", blank:"print(arr[1:___])", answer:"4", options:["4","3","5","1:3"], blocks:["arr = [0, 1, 2, 3, 4, 5]","print(arr[1:4])"], hint:"arr[a:b]는 인덱스 a부터 b-1까지입니다." },
      { title:"드릴 4 — 슬라이싱으로 뒤집기", prompt:"리스트 [1,2,3,4,5]를 슬라이싱으로 역순 복사하세요.", full:"arr = [1, 2, 3, 4, 5]\nrev = arr[::-1]\nprint(rev)", blank:"rev = arr[___]", answer:"::-1", options:["::-1",":-1","-1:","reverse"], blocks:["arr = [1, 2, 3, 4, 5]","rev = arr[::-1]","print(rev)"], hint:"[::-1]은 전체를 역순으로 슬라이싱합니다." },
      { title:"드릴 5 — 음수 인덱싱", prompt:"리스트 [10,20,30,40,50]의 마지막 요소와 뒤에서 두 번째 요소를 출력하세요.", full:"arr = [10, 20, 30, 40, 50]\nprint(arr[-1])\nprint(arr[-2])", blank:"print(arr[___])  # 마지막", answer:"-1", options:["-1","last","len-1","4"], blocks:["arr = [10, 20, 30, 40, 50]","print(arr[-1])","print(arr[-2])"], hint:"-1은 마지막, -2는 뒤에서 두 번째입니다." }
    ]
  },
  { cat:3, id:3, title:"리스트 컴프리헨션",
    prompt:"리스트 컴프리헨션으로 간결하게 새 리스트를 만드는 방법을 연습합니다.",
    full:"arr = [1, 2, 3, 4, 5]\nsquares = [x ** 2 for x in arr]\nprint(squares)",
    hint:"[표현식 for 변수 in 이터러블] — 한 줄로 새 리스트를 만들어요.",
    concept: {
      title: "리스트 컴프리헨션 [expr for var in iter if cond]",
      desc: `리스트 컴프리헨션은 Python의 강력한 기능입니다. for문 + append를 한 줄로 줄여주며, if 조건 필터링과 조건부 변환도 가능합니다.`,
      syntax: `arr = [1, 2, 3, 4, 5]

# 기본: 모든 요소 변환
[x * 2 for x in arr]    # [2,4,6,8,10]
[x ** 2 for x in arr]   # [1,4,9,16,25]

# 필터링: 조건에 맞는 요소만
[x for x in arr if x % 2 == 0]  # [2,4]

# 조건부 변환: 삼항 연산자
[x*2 if x%2!=0 else x for x in arr]

# range와 함께
[i**2 for i in range(1, 6)]  # [1,4,9,16,25]

# 문자열 처리
words = ['apple', 'hi', 'python']
[len(w) for w in words]  # [5,2,6]`,
      note: `💡 컴프리헨션은 읽기 쉬울 때만! 복잡하면 일반 for문이 더 나을 수 있습니다.`,
      dart: `arr.map((x) => x*2).toList()  →  [x*2 for x in arr]
arr.where((x) => x>0).toList() →  [x for x in arr if x>0]`
    },
    drills: [
      { title:"드릴 1 — 제곱 리스트", prompt:"리스트 [1,2,3,4,5]의 각 요소를 제곱한 새 리스트를 만드세요.", full:"arr = [1, 2, 3, 4, 5]\nsquares = [x ** 2 for x in arr]\nprint(squares)", blank:"squares = [x ** 2 ___ x in arr]", answer:"for", options:["for","in","if","while"], blocks:["arr = [1, 2, 3, 4, 5]","squares = [x ** 2 for x in arr]","print(squares)"], hint:"[표현식 for 변수 in 이터러블]" },
      { title:"드릴 2 — 짝수 필터링", prompt:"리스트 [1,2,3,4,5,6]에서 짝수만 걸러낸 리스트를 만드세요.", full:"arr = [1, 2, 3, 4, 5, 6]\nevens = [x for x in arr if x % 2 == 0]\nprint(evens)", blank:"evens = [x for x in arr ___ x % 2 == 0]", answer:"if", options:["if","when","and","where"], blocks:["arr = [1, 2, 3, 4, 5, 6]","evens = [x for x in arr if x % 2 == 0]","print(evens)"], hint:"[값 for 변수 in 리스트 if 조건]: 조건에 맞는 요소만 포함합니다." },
      { title:"드릴 3 — 조건부 변환", prompt:"리스트 [1,2,3,4,5]에서 홀수는 2배, 짝수는 그대로인 새 리스트를 만드세요.", full:"arr = [1, 2, 3, 4, 5]\nres = [x*2 if x%2!=0 else x for x in arr]\nprint(res)", blank:"res = [x*2 if x%2!=0 ___ x for x in arr]", answer:"else", options:["else","or","and","elif"], blocks:["arr = [1, 2, 3, 4, 5]","res = [x*2 if x%2!=0 else x for x in arr]","print(res)"], hint:"[참일때 if 조건 else 거짓일때 for 변수 in 리스트]" },
      { title:"드릴 4 — 문자열 길이 리스트", prompt:"단어 리스트 ['apple','hi','python']에서 각 단어의 길이를 담은 리스트를 만드세요.", full:"words = ['apple', 'hi', 'python']\nlengths = [len(w) for w in words]\nprint(lengths)", blank:"lengths = [___(w) for w in words]", answer:"len", options:["len","size","count","length"], blocks:["words = ['apple', 'hi', 'python']","lengths = [len(w) for w in words]","print(lengths)"], hint:"컴프리헨션 표현식에 len() 같은 함수를 쓸 수 있습니다." }
    ]
  },
  { cat:3, id:4, title:"내림차순 정렬",
    prompt:"리스트 <code>arr = [3, 1, 4, 1, 5]</code>를 내림차순으로 정렬해 출력하는 코드를 완성하세요. sort() 메서드의 옵션을 활용합니다. 결과: <code>[5, 4, 3, 1, 1]</code>",
    full:"arr = [3, 1, 4, 1, 5]\narr.sort(reverse=True)\nprint(arr)",
    hint:"reverse=True 옵션을 사용하면 내림차순 정렬이 됩니다.",
    concept: {
      title: "리스트 정렬 — sort / sorted / key",
      desc: `sort()는 원본을 수정, sorted()는 새 리스트 반환. key 인자로 정렬 기준을 지정할 수 있습니다. 코딩테스트에서 key=lambda 패턴이 자주 등장합니다.`,
      syntax: `arr = [3, 1, 4, 1, 5]

arr.sort()                    # 원본 수정 (오름차순)
arr.sort(reverse=True)        # 내림차순
new = sorted(arr)             # 새 리스트 반환
new = sorted(arr, reverse=True)

# key 정렬
words = ['banana', 'fig', 'apple']
words.sort(key=len)           # 길이 기준
words.sort(key=lambda x: x[-1])  # 마지막 글자 기준

# 튜플 기준
pairs = [(1,3),(2,1),(3,2)]
pairs.sort(key=lambda x: x[1])  # 두 번째 요소 기준`,
      note: `💡 sorted()는 원본 유지 + 반환. sort()는 제자리 + None 반환. 헷갈리는 최빈 실수!`,
      dart: `list.sort()  →  arr.sort()
list.sort((a,b)=>a[1]-b[1])  →  arr.sort(key=lambda x: x[1])`
    },
    drills: [
      { title:"드릴 1 — 내림차순 정렬", prompt:"리스트 <code>arr = [3, 1, 4, 1, 5]</code>를 내림차순으로 정렬해 출력하는 코드를 완성하세요. sort() 메서드의 옵션을 활용합니다. 결과: <code>[5, 4, 3, 1, 1]</code>", full:"arr = [3, 1, 4, 1, 5]\narr.sort(reverse=True)\nprint(arr)", blank:"arr.sort(___=True)", answer:"reverse", options:["reverse","desc","backward","down"], blocks:["arr = [3, 1, 4, 1, 5]","arr.sort(reverse=True)","print(arr)"], hint:"reverse=True 옵션을 사용하면 내림차순 정렬이 됩니다." },
      { title:"드릴 2 — key로 정렬", prompt:"문자열 리스트 <code>['banana','apple','cherry']</code>를 길이 순으로 정렬해 출력하세요.", full:"words = ['banana','apple','cherry']\nwords.sort(key=len)\nprint(words)", blank:"words.sort(key=___)", answer:"len", options:["len", "str", "sort", "reverse"], blocks:["words = ['banana','apple','cherry']", "words.sort(key=len)", "print(words)"], hint:"sort(key=함수)로 정렬 기준을 지정합니다. key=len은 길이 기준입니다." },
      { title:"드릴 3 — 내림차순 + key 조합", prompt:"숫자 리스트 <code>[3,1,4,1,5,9]</code>를 내림차순으로 정렬해 출력하세요.", full:"arr = [3,1,4,1,5,9]\narr.sort(reverse=True)\nprint(arr)", blank:"arr.sort(reverse=___)", answer:"True", options:["True", "False", "1", "0"], blocks:["arr = [3,1,4,1,5,9]", "arr.sort(reverse=True)", "print(arr)"], hint:"sort(reverse=True)는 내림차순 정렬입니다." }
    ]
  },
  { cat:3, id:5, title:"슬라이싱 기본",
    prompt:"리스트 <code>arr = [0, 1, 2, 3, 4, 5]</code>에서 인덱스 1, 2, 3번 요소(<code>[1, 2, 3]</code>)를 추출하는 슬라이싱 코드를 완성하세요.",
    full:"arr = [0, 1, 2, 3, 4, 5]\nprint(arr[1:4])   # [1, 2, 3]\nprint(arr[:3])    # [0, 1, 2]\nprint(arr[3:])    # [3, 4, 5]",
    hint:"슬라이싱 arr[a:b]는 a번 인덱스부터 b-1번 인덱스까지입니다.",
    concept: {
      title: "슬라이싱 — arr[start:end:step]",
      desc: `슬라이싱은 Python만의 강력한 기능입니다. 리스트의 일부를 새로 복사하거나 역순으로 뒤집을 때 사용합니다. 끝 인덱스는 포함되지 않습니다.`,
      syntax: `arr = [0, 1, 2, 3, 4, 5]

arr[1:4]    # [1,2,3]  인덱스 1~3
arr[:3]     # [0,1,2]  처음 3개
arr[3:]     # [3,4,5]  3번부터 끝
arr[:]      # 전체 복사
arr[::-1]   # [5,4,3,2,1,0]  역순

# 음수 인덱스
arr[-1]     # 5  (마지막)
arr[-3:]    # [3,4,5]  뒤에서 3개
arr[:-2]    # [0,1,2,3]  마지막 2개 제외

# 문자열도 동일
s = "hello"
s[1:4]   # "ell"
s[::-1]  # "olleh" (문자열 뒤집기)`,
      note: `💡 arr[::-1]로 역순 복사. 원본 변경은 arr.reverse(). arr[-1]은 마지막 요소.`,
      dart: `list.sublist(1, 4)        →  arr[1:4]
list.reversed.toList()    →  arr[::-1]`
    },
    drills: [
      { title:"드릴 1 — 슬라이싱 기본", prompt:"리스트 <code>arr = [0, 1, 2, 3, 4, 5]</code>에서 인덱스 1, 2, 3번 요소(<code>[1, 2, 3]</code>)를 추출하는 슬라이싱 코드를 완성하세요.", full:"arr = [0, 1, 2, 3, 4, 5]\nprint(arr[1:4])   # [1, 2, 3]\nprint(arr[:3])    # [0, 1, 2]\nprint(arr[3:])    # [3, 4, 5]", blank:"print(arr[1:___])  # [1, 2, 3]", answer:"4", options:["4","3","5","1:3"], blocks:["arr = [0, 1, 2, 3, 4, 5]","print(arr[1:4])","print(arr[:3])","print(arr[3:])"], hint:"슬라이싱 arr[a:b]는 a번 인덱스부터 b-1번 인덱스까지입니다." },
      { title:"드릴 2 — 슬라이싱으로 홀수 인덱스만", prompt:"리스트 <code>[0,1,2,3,4,5,6,7]</code>에서 홀수 인덱스 요소만 슬라이싱으로 추출하세요.", full:"arr = [0,1,2,3,4,5,6,7]\nprint(arr[1::2])", blank:"print(arr[1::___])", answer:"2", options:["2", "1", "3", "-1"], blocks:["arr = [0,1,2,3,4,5,6,7]", "print(arr[1::2])"], hint:"arr[1::2]: 인덱스 1부터 시작해서 2 간격으로 추출합니다." },
      { title:"드릴 3 — 슬라이싱으로 리스트 중간 부분 교체", prompt:"리스트 <code>[1,2,3,4,5]</code>의 2~4번째 요소(인덱스 1~3)를 <code>[10,20,30]</code>으로 교체해 출력하세요.", full:"arr = [1,2,3,4,5]\narr[1:4] = [10,20,30]\nprint(arr)", blank:"arr[___] = [10,20,30]", answer:"1:4", options:["1:4", "1:3", "2:5", "0:3"], blocks:["arr = [1,2,3,4,5]", "arr[1:4] = [10,20,30]", "print(arr)"], hint:"슬라이싱은 값 할당에도 사용됩니다. arr[1:4]는 인덱스 1,2,3 세 자리입니다." }
    ]
  },
  { cat:3, id:6, title:"리스트 뒤집기 — 슬라이싱",
    prompt:"리스트 <code>arr = [1, 2, 3, 4, 5]</code>를 역순으로 뒤집은 새 리스트 <code>rev</code>를 슬라이싱으로 만드는 코드를 완성하세요. 결과: <code>[5, 4, 3, 2, 1]</code>",
    full:"arr = [1, 2, 3, 4, 5]\nrev = arr[::-1]\nprint(rev)  # [5, 4, 3, 2, 1]",
    hint:"[::-1]은 전체를 1씩 감소하며 슬라이싱 → 역순. 코딩테스트 단골 패턴!",
    concept: {
      title: "슬라이싱 — arr[start:end:step]",
      desc: `슬라이싱은 Python만의 강력한 기능입니다. 리스트의 일부를 새로 복사하거나 역순으로 뒤집을 때 사용합니다. 끝 인덱스는 포함되지 않습니다.`,
      syntax: `arr = [0, 1, 2, 3, 4, 5]

arr[1:4]    # [1,2,3]  인덱스 1~3
arr[:3]     # [0,1,2]  처음 3개
arr[3:]     # [3,4,5]  3번부터 끝
arr[:]      # 전체 복사
arr[::-1]   # [5,4,3,2,1,0]  역순

# 음수 인덱스
arr[-1]     # 5  (마지막)
arr[-3:]    # [3,4,5]  뒤에서 3개
arr[:-2]    # [0,1,2,3]  마지막 2개 제외

# 문자열도 동일
s = "hello"
s[1:4]   # "ell"
s[::-1]  # "olleh" (문자열 뒤집기)`,
      note: `💡 arr[::-1]로 역순 복사. 원본 변경은 arr.reverse(). arr[-1]은 마지막 요소.`,
      dart: `list.sublist(1, 4)        →  arr[1:4]
list.reversed.toList()    →  arr[::-1]`
    },
    drills: [
      { title:"드릴 1 — 리스트 뒤집기 — 슬라이싱", prompt:"리스트 <code>arr = [1, 2, 3, 4, 5]</code>를 역순으로 뒤집은 새 리스트 <code>rev</code>를 슬라이싱으로 만드는 코드를 완성하세요. 결과: <code>[5, 4, 3, 2, 1]</code>", full:"arr = [1, 2, 3, 4, 5]\nrev = arr[::-1]\nprint(rev)  # [5, 4, 3, 2, 1]", blank:"rev = arr[___]", answer:"::-1", options:["::-1",":-1","-1:","reverse"], blocks:["arr = [1, 2, 3, 4, 5]","rev = arr[::-1]","print(rev)"], hint:"[::-1]은 전체를 1씩 감소하며 슬라이싱 → 역순. 코딩테스트 단골 패턴!" },
      { title:"드릴 2 — reversed() 사용", prompt:"리스트 <code>[1,2,3,4,5]</code>를 <code>reversed()</code>로 역순 순회해 출력하세요.", full:"arr = [1,2,3,4,5]\nfor x in reversed(arr):\n    print(x, end=' ')", blank:"for x in ___(arr):\n    print(x, end=' ')", answer:"reversed", options:["reversed", "reverse", "arr[::-1]", "sorted"], blocks:["arr = [1,2,3,4,5]", "for x in reversed(arr):", "    print(x, end=' ')"], hint:"reversed()는 원본을 바꾸지 않고 역방향 이터레이터를 반환합니다." },
      { title:"드릴 3 — 팰린드롬 확인", prompt:"문자열 <code>s</code>를 입력받아 앞뒤가 같으면(팰린드롬) 'Yes', 아니면 'No'를 출력하세요. 슬라이싱을 사용합니다.", full:"s = input()\nprint('Yes' if s == s[::-1] else 'No')", blank:"print('Yes' if s == s[___] else 'No')", answer:"::-1", options:["::-1", ":-1", "::1", "-1:"], blocks:["s = input()", "print('Yes' if s == s[::-1] else 'No')"], hint:"s[::-1]은 문자열을 뒤집습니다. 원본과 비교해 팰린드롬을 확인합니다." }
    ]
  },
  { cat:3, id:7, title:"리스트 컴프리헨션 기본",
    prompt:"리스트 <code>arr = [1, 2, 3, 4, 5]</code>의 각 요소를 제곱한 새 리스트 <code>squares</code>를 리스트 컴프리헨션으로 만드는 코드를 완성하세요. 결과: <code>[1, 4, 9, 16, 25]</code>",
    full:"arr = [1, 2, 3, 4, 5]\nsquares = [x ** 2 for x in arr]\nprint(squares)",
    hint:"리스트 컴프리헨션: [표현식 for 변수 in 이터러블] — 한 줄로 새 리스트를 만들어요.",
    concept: {
      title: "리스트 컴프리헨션 심화 응용",
      desc: `리스트 컴프리헨션은 중첩도 가능하고, 복잡한 조건도 처리할 수 있습니다. 코딩테스트에서 데이터 변환/필터링을 한 줄로 표현할 때 강력합니다.`,
      syntax: `# 조건부 변환
[x*2 if x > 0 else 0 for x in arr]

# 이중 컴프리헨션 (평탄화)
matrix = [[1,2],[3,4],[5,6]]
[v for row in matrix for v in row]  # [1,2,3,4,5,6]

# 딕셔너리 컴프리헨션
{x: x**2 for x in range(1,6)}       # {1:1, 2:4, ...}
{k: v for k,v in d.items() if v>0}  # 필터링

# 집합 컴프리헨션
{x%3 for x in range(10)}  # 나머지 집합

# 제너레이터 (메모리 절약)
sum(x**2 for x in range(1000))`,
      note: `💡 [expr for var in iter]  기본. [expr for v1 in it1 for v2 in it2]  중첩. 읽기 어려우면 분리.`,
      dart: `arr.expand((row) => row).toList()  →  [v for row in m for v in row]`
    },
    drills: [
      { title:"드릴 1 — 리스트 컴프리헨션 기본", prompt:"리스트 <code>arr = [1, 2, 3, 4, 5]</code>의 각 요소를 제곱한 새 리스트 <code>squares</code>를 리스트 컴프리헨션으로 만드는 코드를 완성하세요. 결과: <code>[1, 4, 9, 16, 25]</code>", full:"arr = [1, 2, 3, 4, 5]\nsquares = [x ** 2 for x in arr]\nprint(squares)", blank:"squares = [x ** 2 ___ x in arr]", answer:"for", options:["for","in","if","while"], blocks:["arr = [1, 2, 3, 4, 5]","squares = [x ** 2 for x in arr]","print(squares)"], hint:"리스트 컴프리헨션: [표현식 for 변수 in 이터러블] — 한 줄로 새 리스트를 만들어요." },
      { title:"드릴 2 — 문자열 리스트 컴프리헨션", prompt:"단어 리스트 <code>['hello','world','python']</code>을 각 단어를 대문자로 바꾼 새 리스트로 만드세요.", full:"words = ['hello','world','python']\nupper_words = [w.upper() for w in words]\nprint(upper_words)", blank:"upper_words = [w.___ for w in words]", answer:"upper()", options:["upper()", "upper", "UPPER()", "toUpper()"], blocks:["words = ['hello','world','python']", "upper_words = [w.upper() for w in words]", "print(upper_words)"], hint:"리스트 컴프리헨션: [표현식 for 변수 in 이터러블]" },
      { title:"드릴 3 — 중첩 리스트 컴프리헨션 평탄화", prompt:"2차원 리스트 <code>[[1,2],[3,4],[5,6]]</code>을 1차원으로 평탄화(flatten)하세요.", full:"matrix = [[1,2],[3,4],[5,6]]\nflat = [x for row in matrix for x in row]\nprint(flat)", blank:"flat = [x for row in matrix for x in ___]", answer:"row", options:["row", "matrix", "x", "range(row)"], blocks:["matrix = [[1,2],[3,4],[5,6]]", "flat = [x for row in matrix for x in row]", "print(flat)"], hint:"이중 for문을 컴프리헨션 안에 쓸 수 있습니다: for row in matrix for x in row." }
    ]
  },
  { cat:3, id:8, title:"리스트 컴프리헨션 — 필터",
    prompt:"리스트 <code>arr = [1, 2, 3, 4, 5, 6]</code>에서 짝수만 걸러낸 리스트 <code>evens</code>를 리스트 컴프리헨션으로 만드는 코드를 완성하세요. 결과: <code>[2, 4, 6]</code>",
    full:"arr = [1, 2, 3, 4, 5, 6]\nevens = [x for x in arr if x % 2 == 0]\nprint(evens)",
    hint:"[값 for 변수 in 리스트 if 조건]: 조건에 맞는 요소만 포함합니다.",
    concept: {
      title: "리스트 컴프리헨션 심화 응용",
      desc: `리스트 컴프리헨션은 중첩도 가능하고, 복잡한 조건도 처리할 수 있습니다. 코딩테스트에서 데이터 변환/필터링을 한 줄로 표현할 때 강력합니다.`,
      syntax: `# 조건부 변환
[x*2 if x > 0 else 0 for x in arr]

# 이중 컴프리헨션 (평탄화)
matrix = [[1,2],[3,4],[5,6]]
[v for row in matrix for v in row]  # [1,2,3,4,5,6]

# 딕셔너리 컴프리헨션
{x: x**2 for x in range(1,6)}       # {1:1, 2:4, ...}
{k: v for k,v in d.items() if v>0}  # 필터링

# 집합 컴프리헨션
{x%3 for x in range(10)}  # 나머지 집합

# 제너레이터 (메모리 절약)
sum(x**2 for x in range(1000))`,
      note: `💡 [expr for var in iter]  기본. [expr for v1 in it1 for v2 in it2]  중첩. 읽기 어려우면 분리.`,
      dart: `arr.expand((row) => row).toList()  →  [v for row in m for v in row]`
    },
    drills: [
      { title:"드릴 1 — 리스트 컴프리헨션 — 필터", prompt:"리스트 <code>arr = [1, 2, 3, 4, 5, 6]</code>에서 짝수만 걸러낸 리스트 <code>evens</code>를 리스트 컴프리헨션으로 만드는 코드를 완성하세요. 결과: <code>[2, 4, 6]</code>", full:"arr = [1, 2, 3, 4, 5, 6]\nevens = [x for x in arr if x % 2 == 0]\nprint(evens)", blank:"evens = [x for x in arr ___ x % 2 == 0]", answer:"if", options:["if","when","and","where"], blocks:["arr = [1, 2, 3, 4, 5, 6]","evens = [x for x in arr if x % 2 == 0]","print(evens)"], hint:"[값 for 변수 in 리스트 if 조건]: 조건에 맞는 요소만 포함합니다." },
      { title:"드릴 2 — 3의 배수 필터링", prompt:"1~20 중 3의 배수를 리스트 컴프리헨션으로 만드세요.", full:"result = [x for x in range(1, 21) if x % 3 == 0]\nprint(result)", blank:"result = [x for x in range(1, 21) if x ___ 3 == 0]", answer:"% ", options:["% ", "// ", "* ", "** "], blocks:["result = [x for x in range(1, 21) if x % 3 == 0]", "print(result)"], hint:"if 조건을 컴프리헨션 끝에 붙여 필터링합니다." },
      { title:"드릴 3 — 조건부 변환 컴프리헨션", prompt:"리스트 <code>[1,2,3,4,5,6]</code>에서 짝수는 제곱, 홀수는 그대로인 리스트를 만드세요.", full:"arr = [1,2,3,4,5,6]\nresult = [x**2 if x%2==0 else x for x in arr]\nprint(result)", blank:"result = [x**2 if x%2==0 else ___ for x in arr]", answer:"x", options:["x", "x**2", "0", "x*2"], blocks:["arr = [1,2,3,4,5,6]", "result = [x**2 if x%2==0 else x for x in arr]", "print(result)"], hint:"[참일때 if 조건 else 거짓일때 for ...]로 조건부 변환합니다." }
    ]
  },
  { cat:3, id:9, title:"max / min 내장 함수",
    prompt:"리스트 <code>arr = [3, 1, 4, 1, 5, 9, 2]</code>의 최대값과 최소값을 한 줄씩 출력하는 코드를 완성하세요. 파이썬 내장 함수를 사용합니다.",
    full:"arr = [3, 1, 4, 1, 5, 9, 2]\nprint(max(arr))  # 9\nprint(min(arr))  # 1",
    hint:"max()와 min()은 리스트에서 최대값/최소값을 바로 구합니다.",
    concept: {
      title: "리스트 기본 — 인덱스, 순회, 내장 함수",
      desc: `리스트는 Python의 핵심 자료구조입니다. 0-기반 인덱스, 음수 인덱스(-1은 마지막), 내장 함수(len/sum/max/min)를 함께 활용합니다.`,
      syntax: `arr = [3, 1, 4, 1, 5, 9, 2, 6]

# 인덱스 접근
arr[0]      # 3 (첫 번째)
arr[-1]     # 6 (마지막)
arr[-2]     # 2 (끝에서 두 번째)

# 내장 함수
len(arr)    # 8 (길이)
sum(arr)    # 31 (합계)
max(arr)    # 9 (최댓값)
min(arr)    # 1 (최솟값)

# 순회
for x in arr:       # 값 순회
    print(x)
for i, v in enumerate(arr):  # 인덱스+값
    print(i, v)

# 리스트 생성
[0] * 5             # [0,0,0,0,0]
list(range(1,6))    # [1,2,3,4,5]`,
      note: `💡 arr[-1]은 마지막 요소 — Python만의 편리한 음수 인덱스! 인덱스 에러 주의.`,
      dart: `list[list.length-1]  →  arr[-1]
list.length          →  len(arr)`
    },
    drills: [
      { title:"드릴 1 — max / min 내장 함수", prompt:"리스트 <code>arr = [3, 1, 4, 1, 5, 9, 2]</code>의 최대값과 최소값을 한 줄씩 출력하는 코드를 완성하세요. 파이썬 내장 함수를 사용합니다.", full:"arr = [3, 1, 4, 1, 5, 9, 2]\nprint(max(arr))  # 9\nprint(min(arr))  # 1", blank:"print(___(arr))  # 9", answer:"max", options:["max","largest","top","biggest"], blocks:["arr = [3, 1, 4, 1, 5, 9, 2]","print(max(arr))","print(min(arr))"], hint:"max()와 min()은 리스트에서 최대값/최소값을 바로 구합니다." },
      { title:"드릴 2 — min으로 최솟값", prompt:"리스트 <code>[3,1,4,1,5,9,2,6]</code>의 최솟값과 그 인덱스를 출력하세요.", full:"arr = [3,1,4,1,5,9,2,6]\nprint(min(arr))\nprint(arr.index(min(arr)))", blank:"print(arr.index(___(arr)))", answer:"min", options:["min", "max", "sum", "len"], blocks:["arr = [3,1,4,1,5,9,2,6]", "print(min(arr))", "print(arr.index(min(arr)))"], hint:"arr.index(값)은 해당 값의 첫 번째 인덱스를 반환합니다." },
      { title:"드릴 3 — max with key", prompt:"단어 리스트 <code>['cat','elephant','dog','bee']</code>에서 가장 긴 단어를 출력하세요.", full:"words = ['cat','elephant','dog','bee']\nprint(max(words, key=len))", blank:"print(max(words, key=___))", answer:"len", options:["len", "str", "max", "sort"], blocks:["words = ['cat','elephant','dog','bee']", "print(max(words, key=len))"], hint:"max(iterable, key=함수)로 기준을 지정할 수 있습니다." }
    ]
  },
  { cat:3, id:10, title:"sum으로 합계 구하기",
    prompt:"리스트 <code>arr = [1, 2, 3, 4, 5]</code>의 합계를 내장 함수 하나로 출력하는 코드를 완성하세요. for 루프 없이 한 줄로 해결합니다.",
    full:"arr = [1, 2, 3, 4, 5]\nprint(sum(arr))  # 15",
    hint:"sum()은 리스트의 모든 숫자를 더합니다. for 루프 없이 한 줄로!",
    concept: {
      title: "리스트 기본 — 인덱스, 순회, 내장 함수",
      desc: `리스트는 Python의 핵심 자료구조입니다. 0-기반 인덱스, 음수 인덱스(-1은 마지막), 내장 함수(len/sum/max/min)를 함께 활용합니다.`,
      syntax: `arr = [3, 1, 4, 1, 5, 9, 2, 6]

# 인덱스 접근
arr[0]      # 3 (첫 번째)
arr[-1]     # 6 (마지막)
arr[-2]     # 2 (끝에서 두 번째)

# 내장 함수
len(arr)    # 8 (길이)
sum(arr)    # 31 (합계)
max(arr)    # 9 (최댓값)
min(arr)    # 1 (최솟값)

# 순회
for x in arr:       # 값 순회
    print(x)
for i, v in enumerate(arr):  # 인덱스+값
    print(i, v)

# 리스트 생성
[0] * 5             # [0,0,0,0,0]
list(range(1,6))    # [1,2,3,4,5]`,
      note: `💡 arr[-1]은 마지막 요소 — Python만의 편리한 음수 인덱스! 인덱스 에러 주의.`,
      dart: `list[list.length-1]  →  arr[-1]
list.length          →  len(arr)`
    },
    drills: [
      { title:"드릴 1 — sum으로 합계 구하기", prompt:"리스트 <code>arr = [1, 2, 3, 4, 5]</code>의 합계를 내장 함수 하나로 출력하는 코드를 완성하세요. for 루프 없이 한 줄로 해결합니다.", full:"arr = [1, 2, 3, 4, 5]\nprint(sum(arr))  # 15", blank:"print(___(arr))", answer:"sum", options:["sum","total","add","plus"], blocks:["arr = [1, 2, 3, 4, 5]","print(sum(arr))"], hint:"sum()은 리스트의 모든 숫자를 더합니다. for 루프 없이 한 줄로!" },
      { title:"드릴 2 — 조건 있는 sum", prompt:"리스트 <code>[1,2,3,4,5,6]</code>에서 짝수만 골라 합계를 구하세요.", full:"arr = [1,2,3,4,5,6]\nprint(sum(x for x in arr if x % 2 == 0))", blank:"print(sum(x for x in arr if x ___ 2 == 0))", answer:"% ", options:["% ", "// ", "* ", "== "], blocks:["arr = [1,2,3,4,5,6]", "print(sum(x for x in arr if x % 2 == 0))"], hint:"sum() 안에 제너레이터 표현식으로 조건을 걸 수 있습니다." },
      { title:"드릴 3 — 2차원 리스트 전체 합계", prompt:"행렬 <code>[[1,2,3],[4,5,6]]</code>의 모든 원소 합계를 구하세요.", full:"matrix = [[1,2,3],[4,5,6]]\ntotal = sum(sum(row) for row in matrix)\nprint(total)", blank:"total = sum(___(row) for row in matrix)", answer:"sum", options:["sum", "max", "min", "len"], blocks:["matrix = [[1,2,3],[4,5,6]]", "total = sum(sum(row) for row in matrix)", "print(total)"], hint:"sum(sum(row) for row in matrix): 각 행의 합계를 다시 sum()으로 더합니다." }
    ]
  },
  { cat:3, id:11, title:"음수 인덱싱",
    prompt:"리스트 <code>arr = [10, 20, 30, 40, 50]</code>에서 마지막 요소와 뒤에서 두 번째 요소를 출력하는 코드를 완성하세요. 음수 인덱스를 사용합니다.",
    full:"arr = [10, 20, 30, 40, 50]\nprint(arr[-1])   # 50 (마지막)\nprint(arr[-2])   # 40 (뒤에서 2번째)",
    hint:"파이썬 음수 인덱스: -1은 마지막, -2는 뒤에서 2번째. 코딩테스트 필수 지식!",
    concept: {
      title: "슬라이싱 — arr[start:end:step]",
      desc: `슬라이싱은 Python만의 강력한 기능입니다. 리스트의 일부를 새로 복사하거나 역순으로 뒤집을 때 사용합니다. 끝 인덱스는 포함되지 않습니다.`,
      syntax: `arr = [0, 1, 2, 3, 4, 5]

arr[1:4]    # [1,2,3]  인덱스 1~3
arr[:3]     # [0,1,2]  처음 3개
arr[3:]     # [3,4,5]  3번부터 끝
arr[:]      # 전체 복사
arr[::-1]   # [5,4,3,2,1,0]  역순

# 음수 인덱스
arr[-1]     # 5  (마지막)
arr[-3:]    # [3,4,5]  뒤에서 3개
arr[:-2]    # [0,1,2,3]  마지막 2개 제외

# 문자열도 동일
s = "hello"
s[1:4]   # "ell"
s[::-1]  # "olleh" (문자열 뒤집기)`,
      note: `💡 arr[::-1]로 역순 복사. 원본 변경은 arr.reverse(). arr[-1]은 마지막 요소.`,
      dart: `list.sublist(1, 4)        →  arr[1:4]
list.reversed.toList()    →  arr[::-1]`
    },
    drills: [
      { title:"드릴 1 — 음수 인덱싱", prompt:"리스트 <code>arr = [10, 20, 30, 40, 50]</code>에서 마지막 요소와 뒤에서 두 번째 요소를 출력하는 코드를 완성하세요. 음수 인덱스를 사용합니다.", full:"arr = [10, 20, 30, 40, 50]\nprint(arr[-1])   # 50 (마지막)\nprint(arr[-2])   # 40 (뒤에서 2번째)", blank:"print(arr[___])   # 50 (마지막)", answer:"-1", options:["-1","last","len-1","4"], blocks:["arr = [10, 20, 30, 40, 50]","print(arr[-1])","print(arr[-2])"], hint:"파이썬 음수 인덱스: -1은 마지막, -2는 뒤에서 2번째. 코딩테스트 필수 지식!" },
      { title:"드릴 2 — 뒤에서 두 번째 요소", prompt:"리스트 <code>[10,20,30,40,50]</code>의 뒤에서 두 번째 요소를 음수 인덱싱으로 출력하세요.", full:"arr = [10,20,30,40,50]\nprint(arr[-2])", blank:"print(arr[___])", answer:"-2", options:["-2", "-1", "3", "-3"], blocks:["arr = [10,20,30,40,50]", "print(arr[-2])"], hint:"arr[-1]이 마지막, arr[-2]가 뒤에서 두 번째입니다." },
      { title:"드릴 3 — 음수 인덱싱으로 슬라이싱", prompt:"리스트 <code>[1,2,3,4,5,6,7]</code>의 뒤에서 3번째부터 끝까지 출력하세요.", full:"arr = [1,2,3,4,5,6,7]\nprint(arr[-3:])", blank:"print(arr[___:])", answer:"-3", options:["-3", "-2", "4", "3"], blocks:["arr = [1,2,3,4,5,6,7]", "print(arr[-3:])"], hint:"arr[-3:]은 뒤에서 3번째 요소부터 끝까지 슬라이싱합니다." }
    ]
  },
  { cat:3, id:12, title:"count 메서드로 빈도",
    prompt:"리스트 <code>arr = [1, 2, 1, 3, 1, 4]</code>에서 숫자 1이 몇 번 등장하는지 출력하는 코드를 완성하세요. 리스트 메서드를 사용합니다.",
    full:"arr = [1, 2, 1, 3, 1, 4]\nprint(arr.count(1))  # 3",
    hint:"리스트.count(값)은 특정 값이 몇 번 등장하는지 반환합니다.",
    concept: {
      title: "리스트 기본 — 인덱스, 순회, 내장 함수",
      desc: `리스트는 Python의 핵심 자료구조입니다. 0-기반 인덱스, 음수 인덱스(-1은 마지막), 내장 함수(len/sum/max/min)를 함께 활용합니다.`,
      syntax: `arr = [3, 1, 4, 1, 5, 9, 2, 6]

# 인덱스 접근
arr[0]      # 3 (첫 번째)
arr[-1]     # 6 (마지막)
arr[-2]     # 2 (끝에서 두 번째)

# 내장 함수
len(arr)    # 8 (길이)
sum(arr)    # 31 (합계)
max(arr)    # 9 (최댓값)
min(arr)    # 1 (최솟값)

# 순회
for x in arr:       # 값 순회
    print(x)
for i, v in enumerate(arr):  # 인덱스+값
    print(i, v)

# 리스트 생성
[0] * 5             # [0,0,0,0,0]
list(range(1,6))    # [1,2,3,4,5]`,
      note: `💡 arr[-1]은 마지막 요소 — Python만의 편리한 음수 인덱스! 인덱스 에러 주의.`,
      dart: `list[list.length-1]  →  arr[-1]
list.length          →  len(arr)`
    },
    drills: [
      { title:"드릴 1 — count 메서드로 빈도", prompt:"리스트 <code>arr = [1, 2, 1, 3, 1, 4]</code>에서 숫자 1이 몇 번 등장하는지 출력하는 코드를 완성하세요. 리스트 메서드를 사용합니다.", full:"arr = [1, 2, 1, 3, 1, 4]\nprint(arr.count(1))  # 3", blank:"print(arr.___(1))", answer:"count", options:["count","find","frequency","num"], blocks:["arr = [1, 2, 1, 3, 1, 4]","print(arr.count(1))"], hint:"리스트.count(값)은 특정 값이 몇 번 등장하는지 반환합니다." },
      { title:"드릴 2 — 특정 문자 개수", prompt:"문자열 <code>'hello world'</code>에서 'l' 문자의 개수를 출력하세요.", full:"s = 'hello world'\nprint(s.count('l'))", blank:"print(s.___('l'))", answer:"count", options:["count", "find", "index", "len"], blocks:["s = 'hello world'", "print(s.count('l'))"], hint:"count()는 리스트뿐 아니라 문자열에서도 사용할 수 있습니다." },
      { title:"드릴 3 — 최빈 요소 찾기", prompt:"리스트 <code>[1,2,2,3,3,3,4]</code>에서 가장 많이 등장한 요소를 출력하세요. count()와 max()를 활용합니다.", full:"arr = [1,2,2,3,3,3,4]\nmode = max(arr, key=arr.count)\nprint(mode)", blank:"mode = max(arr, key=arr.___)", answer:"count", options:["count", "index", "sort", "reverse"], blocks:["arr = [1,2,2,3,3,3,4]", "mode = max(arr, key=arr.count)", "print(mode)"], hint:"max(arr, key=arr.count)는 count가 가장 큰 요소를 반환합니다." }
    ]
  },
  { cat:3, id:13, title:"두 리스트 합치기",
    prompt:"리스트 <code>a = [1, 2, 3]</code>과 <code>b = [4, 5, 6]</code>을 이어붙여 <code>c = [1, 2, 3, 4, 5, 6]</code>을 만드는 코드를 완성하세요.",
    full:"a = [1, 2, 3]\nb = [4, 5, 6]\nc = a + b\nprint(c)  # [1, 2, 3, 4, 5, 6]",
    hint:"리스트도 + 연산자로 이어붙일 수 있습니다. a.extend(b)도 같은 결과지만 원본을 변경해요.",
    concept: {
      title: "리스트 기본 — 인덱스, 순회, 내장 함수",
      desc: `리스트는 Python의 핵심 자료구조입니다. 0-기반 인덱스, 음수 인덱스(-1은 마지막), 내장 함수(len/sum/max/min)를 함께 활용합니다.`,
      syntax: `arr = [3, 1, 4, 1, 5, 9, 2, 6]

# 인덱스 접근
arr[0]      # 3 (첫 번째)
arr[-1]     # 6 (마지막)
arr[-2]     # 2 (끝에서 두 번째)

# 내장 함수
len(arr)    # 8 (길이)
sum(arr)    # 31 (합계)
max(arr)    # 9 (최댓값)
min(arr)    # 1 (최솟값)

# 순회
for x in arr:       # 값 순회
    print(x)
for i, v in enumerate(arr):  # 인덱스+값
    print(i, v)

# 리스트 생성
[0] * 5             # [0,0,0,0,0]
list(range(1,6))    # [1,2,3,4,5]`,
      note: `💡 arr[-1]은 마지막 요소 — Python만의 편리한 음수 인덱스! 인덱스 에러 주의.`,
      dart: `list[list.length-1]  →  arr[-1]
list.length          →  len(arr)`
    },
    drills: [
      { title:"드릴 1 — 두 리스트 합치기", prompt:"리스트 <code>a = [1, 2, 3]</code>과 <code>b = [4, 5, 6]</code>을 이어붙여 <code>c = [1, 2, 3, 4, 5, 6]</code>을 만드는 코드를 완성하세요.", full:"a = [1, 2, 3]\nb = [4, 5, 6]\nc = a + b\nprint(c)  # [1, 2, 3, 4, 5, 6]", blank:"c = a ___ b", answer:"+", options:["+","extend","join","merge"], blocks:["a = [1, 2, 3]","b = [4, 5, 6]","c = a + b","print(c)"], hint:"리스트도 + 연산자로 이어붙일 수 있습니다. a.extend(b)도 같은 결과지만 원본을 변경해요." },
      { title:"드릴 2 — 리스트 * 반복", prompt:"리스트 <code>[0]</code>을 5번 반복해 길이 5의 리스트를 만드세요.", full:"arr = [0] * 5\nprint(arr)", blank:"arr = [0] ___ 5", answer:"* ", options:["* ", "+ ", "** ", "/ "], blocks:["arr = [0] * 5", "print(arr)"], hint:"[값] * n으로 같은 값으로 채워진 길이 n의 리스트를 만듭니다." },
      { title:"드릴 3 — 리스트 중복 없이 합치기", prompt:"두 리스트 <code>a = [1,2,3]</code>, <code>b = [2,3,4,5]</code>를 중복 없이 합친 리스트를 만드세요.", full:"a = [1,2,3]\nb = [2,3,4,5]\nresult = list(set(a + b))\nresult.sort()\nprint(result)", blank:"result = list(set(a ___ b))\nresult.sort()", answer:"+ ", options:["+ ", "* ", "| ", "& "], blocks:["a = [1,2,3]", "b = [2,3,4,5]", "result = list(set(a + b))", "result.sort()", "print(result)"], hint:"두 리스트를 + 로 합친 뒤 set()으로 중복을 제거합니다." }
    ]
  },
  { cat:3, id:14, title:"join으로 리스트를 문자열로",
    prompt:"리스트 <code>words = ['Hello', 'World', 'Python']</code>을 공백으로 이어붙여 하나의 문자열 <code>'Hello World Python'</code>을 만드는 코드를 완성하세요.",
    full:"words = ['Hello', 'World', 'Python']\nresult = ' '.join(words)\nprint(result)",
    hint:"구분자.join(리스트): 리스트 요소를 구분자로 이어붙입니다. '-'.join(['a','b']) → 'a-b'",
    concept: {
      title: "리스트 기본 — 인덱스, 순회, 내장 함수",
      desc: `리스트는 Python의 핵심 자료구조입니다. 0-기반 인덱스, 음수 인덱스(-1은 마지막), 내장 함수(len/sum/max/min)를 함께 활용합니다.`,
      syntax: `arr = [3, 1, 4, 1, 5, 9, 2, 6]

# 인덱스 접근
arr[0]      # 3 (첫 번째)
arr[-1]     # 6 (마지막)
arr[-2]     # 2 (끝에서 두 번째)

# 내장 함수
len(arr)    # 8 (길이)
sum(arr)    # 31 (합계)
max(arr)    # 9 (최댓값)
min(arr)    # 1 (최솟값)

# 순회
for x in arr:       # 값 순회
    print(x)
for i, v in enumerate(arr):  # 인덱스+값
    print(i, v)

# 리스트 생성
[0] * 5             # [0,0,0,0,0]
list(range(1,6))    # [1,2,3,4,5]`,
      note: `💡 arr[-1]은 마지막 요소 — Python만의 편리한 음수 인덱스! 인덱스 에러 주의.`,
      dart: `list[list.length-1]  →  arr[-1]
list.length          →  len(arr)`
    },
    drills: [
      { title:"드릴 1 — join으로 리스트를 문자열로", prompt:"리스트 <code>words = ['Hello', 'World', 'Python']</code>을 공백으로 이어붙여 하나의 문자열 <code>'Hello World Python'</code>을 만드는 코드를 완성하세요.", full:"words = ['Hello', 'World', 'Python']\nresult = ' '.join(words)\nprint(result)", blank:"result = ' '.___(words)", answer:"join", options:["join","connect","add","merge"], blocks:["words = ['Hello', 'World', 'Python']","result = ' '.join(words)","print(result)"], hint:"구분자.join(리스트): 리스트 요소를 구분자로 이어붙입니다. '-'.join(['a','b']) → 'a-b'" },
      { title:"드릴 2 — 구분자 지정 join", prompt:"리스트 <code>['2024','01','15']</code>를 '-'로 연결해 날짜 문자열을 만드세요.", full:"date = ['2024','01','15']\nprint('-'.join(date))", blank:"print('___'.join(date))", answer:"-", options:["-", "/", ".", ","], blocks:["date = ['2024','01','15']", "print('-'.join(date))"], hint:"구분자.join(리스트)로 리스트 요소를 구분자로 연결합니다." },
      { title:"드릴 3 — split 후 join 변환", prompt:"문자열 <code>'hello world python'</code>을 단어 분리 후 각 단어를 대문자로 바꿔 다시 연결하세요.", full:"s = 'hello world python'\nresult = ' '.join(w.upper() for w in s.split())\nprint(result)", blank:"result = ' '.join(w.___ for w in s.split())", answer:"upper()", options:["upper()", "lower()", "title()", "capitalize()"], blocks:["s = 'hello world python'", "result = ' '.join(w.upper() for w in s.split())", "print(result)"], hint:"split()으로 단어를 나누고, 각 단어에 upper()를 적용한 뒤 join()으로 합칩니다." }
    ]
  },
  { cat:3, id:15, title:"index로 위치 찾기",
    prompt:"리스트 <code>arr = [10, 20, 30, 40]</code>에서 값 30이 처음 등장하는 인덱스를 찾아 출력하는 코드를 완성하세요. 결과: <code>2</code>",
    full:"arr = [10, 20, 30, 40]\npos = arr.index(30)\nprint(pos)  # 2",
    hint:"리스트.index(값)은 첫 번째로 등장하는 인덱스를 반환합니다. 없으면 ValueError!",
    concept: {
      title: "리스트 기본 — 인덱스, 순회, 내장 함수",
      desc: `리스트는 Python의 핵심 자료구조입니다. 0-기반 인덱스, 음수 인덱스(-1은 마지막), 내장 함수(len/sum/max/min)를 함께 활용합니다.`,
      syntax: `arr = [3, 1, 4, 1, 5, 9, 2, 6]

# 인덱스 접근
arr[0]      # 3 (첫 번째)
arr[-1]     # 6 (마지막)
arr[-2]     # 2 (끝에서 두 번째)

# 내장 함수
len(arr)    # 8 (길이)
sum(arr)    # 31 (합계)
max(arr)    # 9 (최댓값)
min(arr)    # 1 (최솟값)

# 순회
for x in arr:       # 값 순회
    print(x)
for i, v in enumerate(arr):  # 인덱스+값
    print(i, v)

# 리스트 생성
[0] * 5             # [0,0,0,0,0]
list(range(1,6))    # [1,2,3,4,5]`,
      note: `💡 arr[-1]은 마지막 요소 — Python만의 편리한 음수 인덱스! 인덱스 에러 주의.`,
      dart: `list[list.length-1]  →  arr[-1]
list.length          →  len(arr)`
    },
    drills: [
      { title:"드릴 1 — index로 위치 찾기", prompt:"리스트 <code>arr = [10, 20, 30, 40]</code>에서 값 30이 처음 등장하는 인덱스를 찾아 출력하는 코드를 완성하세요. 결과: <code>2</code>", full:"arr = [10, 20, 30, 40]\npos = arr.index(30)\nprint(pos)  # 2", blank:"pos = arr.___(30)", answer:"index", options:["index","find","search","locate"], blocks:["arr = [10, 20, 30, 40]","pos = arr.index(30)","print(pos)"], hint:"리스트.index(값)은 첫 번째로 등장하는 인덱스를 반환합니다. 없으면 ValueError!" },
      { title:"드릴 2 — index 오류 방지", prompt:"리스트 <code>[10,20,30]</code>에서 값 25의 인덱스를 찾되, 없으면 -1을 출력하세요.", full:"arr = [10,20,30]\ntarget = 25\nif target in arr:\n    print(arr.index(target))\nelse:\n    print(-1)", blank:"if target ___ arr:\n    print(arr.index(target))\nelse:\n    print(-1)", answer:"in ", options:["in ", "== ", "is ", "has "], blocks:["arr = [10,20,30]", "target = 25", "if target in arr:", "    print(arr.index(target))", "else:", "    print(-1)"], hint:"index()는 값이 없으면 ValueError를 발생시킵니다. in으로 먼저 확인하세요." },
      { title:"드릴 3 — 모든 등장 위치 찾기", prompt:"리스트 <code>[1,2,1,3,1,4]</code>에서 값 1이 등장하는 모든 인덱스를 리스트로 만드세요.", full:"arr = [1,2,1,3,1,4]\npositions = [i for i, x in enumerate(arr) if x == 1]\nprint(positions)", blank:"positions = [i for i, x in ___(arr) if x == 1]", answer:"enumerate", options:["enumerate", "range", "zip", "index"], blocks:["arr = [1,2,1,3,1,4]", "positions = [i for i, x in enumerate(arr) if x == 1]", "print(positions)"], hint:"enumerate()로 인덱스와 값을 동시에 순회하며 조건에 맞는 인덱스를 수집합니다." }
    ]
  },
  { cat:3, id:16, title:"2차원 리스트 — 행 합계",
    prompt:"2차원 리스트 <code>matrix = [[1,2,3],[4,5,6],[7,8,9]]</code>의 각 행(row)의 합계를 줄마다 출력하는 코드를 완성하세요. 출력: 6, 15, 24",
    full:"matrix = [[1,2,3],[4,5,6],[7,8,9]]\nfor row in matrix:\n    print(sum(row))",
    hint:"sum()은 리스트에 바로 적용할 수 있습니다. row가 각 행 리스트예요.",
    concept: {
      title: "리스트 기본 — 인덱스, 순회, 내장 함수",
      desc: `리스트는 Python의 핵심 자료구조입니다. 0-기반 인덱스, 음수 인덱스(-1은 마지막), 내장 함수(len/sum/max/min)를 함께 활용합니다.`,
      syntax: `arr = [3, 1, 4, 1, 5, 9, 2, 6]

# 인덱스 접근
arr[0]      # 3 (첫 번째)
arr[-1]     # 6 (마지막)
arr[-2]     # 2 (끝에서 두 번째)

# 내장 함수
len(arr)    # 8 (길이)
sum(arr)    # 31 (합계)
max(arr)    # 9 (최댓값)
min(arr)    # 1 (최솟값)

# 순회
for x in arr:       # 값 순회
    print(x)
for i, v in enumerate(arr):  # 인덱스+값
    print(i, v)

# 리스트 생성
[0] * 5             # [0,0,0,0,0]
list(range(1,6))    # [1,2,3,4,5]`,
      note: `💡 arr[-1]은 마지막 요소 — Python만의 편리한 음수 인덱스! 인덱스 에러 주의.`,
      dart: `list[list.length-1]  →  arr[-1]
list.length          →  len(arr)`
    },
    drills: [
      { title:"드릴 1 — 2차원 리스트 — 행 합계", prompt:"2차원 리스트 <code>matrix = [[1,2,3],[4,5,6],[7,8,9]]</code>의 각 행(row)의 합계를 줄마다 출력하는 코드를 완성하세요. 출력: 6, 15, 24", full:"matrix = [[1,2,3],[4,5,6],[7,8,9]]\nfor row in matrix:\n    print(sum(row))", blank:"    print(___(row))", answer:"sum", options:["sum","total","max","len"], blocks:[], hint:"sum()은 리스트에 바로 적용할 수 있습니다. row가 각 행 리스트예요." },
      { title:"드릴 2 — 행렬 열 합계", prompt:"행렬 <code>[[1,2,3],[4,5,6],[7,8,9]]</code>의 각 열의 합계를 출력하세요.", full:"matrix = [[1,2,3],[4,5,6],[7,8,9]]\nfor j in range(len(matrix[0])):\n    print(sum(row[j] for row in matrix))", blank:"print(sum(row[j] for row in ___))", answer:"matrix", options:["matrix", "row", "matrix[0]", "range(3)"], blocks:["matrix = [[1,2,3],[4,5,6],[7,8,9]]", "for j in range(len(matrix[0])):", "    print(sum(row[j] for row in matrix))"], hint:"j는 열 인덱스, row[j]는 각 행의 j번째 원소입니다." },
      { title:"드릴 3 — 행렬 전치(transpose)", prompt:"행렬 <code>[[1,2,3],[4,5,6]]</code>을 전치(행↔열 교환)해서 출력하세요. zip을 사용합니다.", full:"matrix = [[1,2,3],[4,5,6]]\ntransposed = [list(row) for row in zip(*matrix)]\nprint(transposed)", blank:"transposed = [list(row) for row in zip(*___)]", answer:"matrix", options:["matrix", "matrix[0]", "row", "zip"], blocks:["matrix = [[1,2,3],[4,5,6]]", "transposed = [list(row) for row in zip(*matrix)]", "print(transposed)"], hint:"zip(*matrix)는 행렬을 언패킹해 전치합니다. * 연산자가 핵심입니다." }
    ]
  },
  { cat:3, id:17, title:"리스트 조작 심화 (1) - 특정 위치에 insert",
    prompt:"리스트 <code>arr = [1, 3]</code>의 1번 인덱스에 값 2를 끼워넣어 <code>[1, 2, 3]</code>을 만드는 코드를 완성하세요.",
    full:"arr = [1, 3]\narr.insert(1, 2)\nprint(arr)",
    hint:"insert(인덱스, 값)은 특정 위치에 값을 밀어넣습니다. 기존 값들은 뒤로 밀려납니다.",
    concept: {
      title: "리스트 메서드 심화 — append/pop/insert/remove",
      desc: `리스트는 다양한 메서드로 요소를 추가하거나 제거할 수 있습니다. 어떤 메서드가 원본을 변경하고, 어떤 메서드가 값을 반환하는지 구분하세요.`,
      syntax: `arr = [1, 2, 3]

# 추가
arr.append(4)        # 끝에 추가
arr.insert(1, 99)    # 인덱스에 삽입
arr.extend([5,6])    # 여러 요소 추가

# 제거
arr.pop()            # 마지막 제거 + 반환
arr.pop(0)           # 0번 제거 + 반환
arr.remove(99)       # 값으로 제거 (첫 번째)
del arr[0]           # 인덱스로 삭제

# 검색
arr.index(3)         # 값의 인덱스
arr.count(2)         # 등장 횟수

# 스택 패턴
stack.append(x)      # push
stack.pop()          # pop (LIFO)`,
      note: `💡 pop(i)는 i번 인덱스 제거 + 반환. remove(v)는 값 기준 삭제 (반환 없음). 차이 기억!`,
      dart: `list.add(x)       →  arr.append(x)
list.removeAt(i)  →  arr.pop(i)
list.remove(v)    →  arr.remove(v)`
    },
    drills: [
      { title:"드릴 1 — 리스트 조작 심화 (1) - 특정 위치에 insert", prompt:"리스트 <code>arr = [1, 3]</code>의 1번 인덱스에 값 2를 끼워넣어 <code>[1, 2, 3]</code>을 만드는 코드를 완성하세요.", full:"arr = [1, 3]\narr.insert(1, 2)\nprint(arr)", blank:"arr.___(1, 2)", answer:"insert", options:["insert","add","append","put"], blocks:["arr = [1, 3]","arr.insert(1, 2)","print(arr)"], hint:"insert(인덱스, 값)은 특정 위치에 값을 밀어넣습니다. 기존 값들은 뒤로 밀려납니다." },
      { title:"드릴 2 — 맨 앞에 insert", prompt:"리스트 <code>[2,3,4]</code>의 맨 앞(인덱스 0)에 1을 삽입하세요.", full:"arr = [2,3,4]\narr.insert(0, 1)\nprint(arr)", blank:"arr.insert(___, 1)", answer:"0", options:["0", "1", "-1", "len(arr)"], blocks:["arr = [2,3,4]", "arr.insert(0, 1)", "print(arr)"], hint:"insert(0, 값)은 맨 앞에 삽입합니다." },
      { title:"드릴 3 — insert로 정렬된 위치에 삽입", prompt:"정렬된 리스트 <code>[1,3,5,7]</code>에 4를 올바른 위치(인덱스 2)에 삽입하세요.", full:"arr = [1,3,5,7]\narr.insert(2, 4)\nprint(arr)", blank:"arr.insert(___, 4)", answer:"2", options:["2", "3", "1", "0"], blocks:["arr = [1,3,5,7]", "arr.insert(2, 4)", "print(arr)"], hint:"insert(인덱스, 값): 해당 인덱스 위치에 값을 삽입합니다." }
    ]
  },
  { cat:3, id:18, title:"리스트 조작 심화 (2) - 두 리스트 합치기 extend",
    prompt:"리스트 <code>a = [1, 2]</code>에 리스트 <code>b = [3, 4]</code>의 모든 요소를 추가해 a를 <code>[1, 2, 3, 4]</code>로 만드는 코드를 완성하세요.",
    full:"a = [1, 2]\nb = [3, 4]\na.extend(b)\nprint(a)",
    hint:"extend()는 다른 리스트의 요소들을 풀어헤쳐서 원본 리스트 끝에 추가합니다.",
    concept: {
      title: "리스트 기본 — 인덱스, 순회, 내장 함수",
      desc: `리스트는 Python의 핵심 자료구조입니다. 0-기반 인덱스, 음수 인덱스(-1은 마지막), 내장 함수(len/sum/max/min)를 함께 활용합니다.`,
      syntax: `arr = [3, 1, 4, 1, 5, 9, 2, 6]

# 인덱스 접근
arr[0]      # 3 (첫 번째)
arr[-1]     # 6 (마지막)
arr[-2]     # 2 (끝에서 두 번째)

# 내장 함수
len(arr)    # 8 (길이)
sum(arr)    # 31 (합계)
max(arr)    # 9 (최댓값)
min(arr)    # 1 (최솟값)

# 순회
for x in arr:       # 값 순회
    print(x)
for i, v in enumerate(arr):  # 인덱스+값
    print(i, v)

# 리스트 생성
[0] * 5             # [0,0,0,0,0]
list(range(1,6))    # [1,2,3,4,5]`,
      note: `💡 arr[-1]은 마지막 요소 — Python만의 편리한 음수 인덱스! 인덱스 에러 주의.`,
      dart: `list[list.length-1]  →  arr[-1]
list.length          →  len(arr)`
    },
    drills: [
      { title:"드릴 1 — 리스트 조작 심화 (2) - 두 리스트 합치기 extend", prompt:"리스트 <code>a = [1, 2]</code>에 리스트 <code>b = [3, 4]</code>의 모든 요소를 추가해 a를 <code>[1, 2, 3, 4]</code>로 만드는 코드를 완성하세요.", full:"a = [1, 2]\nb = [3, 4]\na.extend(b)\nprint(a)", blank:"a.___(b)", answer:"extend", options:["extend","append","+=", "merge"], blocks:["a = [1, 2]","b = [3, 4]","a.extend(b)","print(a)"], hint:"extend()는 다른 리스트의 요소들을 풀어헤쳐서 원본 리스트 끝에 추가합니다." },
      { title:"드릴 2 — extend vs +", prompt:"리스트 <code>a = [1,2]</code>에 <code>[3,4]</code>를 extend로 이어붙이세요.", full:"a = [1,2]\na.extend([3,4])\nprint(a)", blank:"a.___([ 3,4])", answer:"extend", options:["extend", "append", "insert", "add"], blocks:["a = [1,2]", "a.extend([3,4])", "print(a)"], hint:"extend()는 리스트의 모든 요소를 추가합니다. append([3,4])는 리스트 자체를 하나의 원소로 추가합니다." },
      { title:"드릴 3 — 여러 리스트 합치기", prompt:"세 리스트 <code>[1,2]</code>, <code>[3,4]</code>, <code>[5,6]</code>을 하나로 합치세요. extend를 두 번 사용합니다.", full:"a = [1,2]\na.extend([3,4])\na.extend([5,6])\nprint(a)", blank:"a.extend([3,4])\na.___([5,6])", answer:"extend", options:["extend", "append", "insert", "add"], blocks:["a = [1,2]", "a.extend([3,4])", "a.extend([5,6])", "print(a)"], hint:"extend()를 여러 번 사용하면 연속으로 리스트를 이어붙일 수 있습니다." }
    ]
  },
  { cat:3, id:19, title:"리스트 조작 심화 (3) - 특정 값 remove",
    prompt:"리스트 <code>arr = [10, 20, 30, 20]</code>에서 처음 등장하는 20이라는 '값'을 찾아 삭제하는 코드를 완성하세요.",
    full:"arr = [10, 20, 30, 20]\narr.remove(20)\nprint(arr)",
    hint:"remove(값)은 인덱스가 아니라 해당 값을 찾아 지웁니다. 값이 없으면 에러가 납니다.",
    concept: {
      title: "리스트 기본 — 인덱스, 순회, 내장 함수",
      desc: `리스트는 Python의 핵심 자료구조입니다. 0-기반 인덱스, 음수 인덱스(-1은 마지막), 내장 함수(len/sum/max/min)를 함께 활용합니다.`,
      syntax: `arr = [3, 1, 4, 1, 5, 9, 2, 6]

# 인덱스 접근
arr[0]      # 3 (첫 번째)
arr[-1]     # 6 (마지막)
arr[-2]     # 2 (끝에서 두 번째)

# 내장 함수
len(arr)    # 8 (길이)
sum(arr)    # 31 (합계)
max(arr)    # 9 (최댓값)
min(arr)    # 1 (최솟값)

# 순회
for x in arr:       # 값 순회
    print(x)
for i, v in enumerate(arr):  # 인덱스+값
    print(i, v)

# 리스트 생성
[0] * 5             # [0,0,0,0,0]
list(range(1,6))    # [1,2,3,4,5]`,
      note: `💡 arr[-1]은 마지막 요소 — Python만의 편리한 음수 인덱스! 인덱스 에러 주의.`,
      dart: `list[list.length-1]  →  arr[-1]
list.length          →  len(arr)`
    },
    drills: [
      { title:"드릴 1 — 리스트 조작 심화 (3) - 특정 값 remove", prompt:"리스트 <code>arr = [10, 20, 30, 20]</code>에서 처음 등장하는 20이라는 '값'을 찾아 삭제하는 코드를 완성하세요.", full:"arr = [10, 20, 30, 20]\narr.remove(20)\nprint(arr)", blank:"arr.___(20)", answer:"remove", options:["remove","delete","pop","drop"], blocks:["arr = [10, 20, 30, 20]","arr.remove(20)","print(arr)"], hint:"remove(값)은 인덱스가 아니라 해당 값을 찾아 지웁니다. 값이 없으면 에러가 납니다." },
      { title:"드릴 2 — 여러 값 remove", prompt:"리스트 <code>[1,2,3,2,1]</code>에서 값 2를 모두 제거하세요.", full:"arr = [1,2,3,2,1]\nwhile 2 in arr:\n    arr.remove(2)\nprint(arr)", blank:"while 2 ___ arr:\n    arr.remove(2)", answer:"in ", options:["in ", "== ", "is ", "has "], blocks:["arr = [1,2,3,2,1]", "while 2 in arr:", "    arr.remove(2)", "print(arr)"], hint:"remove()는 첫 번째 등장만 제거합니다. 모두 제거하려면 while + in 조합을 씁니다." },
      { title:"드릴 3 — remove vs pop 비교", prompt:"리스트 <code>[10,20,30,40]</code>에서 인덱스 1의 요소를 제거하고 그 값을 출력하세요. pop을 사용합니다.", full:"arr = [10,20,30,40]\nval = arr.pop(1)\nprint(val)\nprint(arr)", blank:"val = arr.pop(___)", answer:"1", options:["1", "0", "-1", "2"], blocks:["arr = [10,20,30,40]", "val = arr.pop(1)", "print(val)", "print(arr)"], hint:"pop(인덱스)는 해당 인덱스의 요소를 제거하고 그 값을 반환합니다." }
    ]
  },
  { cat:3, id:20, title:"리스트 조작 심화 (4) - 다중 요소 pop",
    prompt:"리스트 <code>arr = [1, 2, 3, 4, 5]</code>에서 while문을 사용해 리스트가 빌 때까지 모든 요소를 뒤에서부터 꺼내어 출력하는 코드를 완성하세요.",
    full:"arr = [1, 2, 3, 4, 5]\nwhile arr:\n    print(arr.pop())",
    hint:"빈 리스트는 False로 평가되므로 while arr: 라고 쓰면 리스트가 빌 때까지 반복됩니다.",
    concept: {
      title: "리스트 메서드 심화 — append/pop/insert/remove",
      desc: `리스트는 다양한 메서드로 요소를 추가하거나 제거할 수 있습니다. 어떤 메서드가 원본을 변경하고, 어떤 메서드가 값을 반환하는지 구분하세요.`,
      syntax: `arr = [1, 2, 3]

# 추가
arr.append(4)        # 끝에 추가
arr.insert(1, 99)    # 인덱스에 삽입
arr.extend([5,6])    # 여러 요소 추가

# 제거
arr.pop()            # 마지막 제거 + 반환
arr.pop(0)           # 0번 제거 + 반환
arr.remove(99)       # 값으로 제거 (첫 번째)
del arr[0]           # 인덱스로 삭제

# 검색
arr.index(3)         # 값의 인덱스
arr.count(2)         # 등장 횟수

# 스택 패턴
stack.append(x)      # push
stack.pop()          # pop (LIFO)`,
      note: `💡 pop(i)는 i번 인덱스 제거 + 반환. remove(v)는 값 기준 삭제 (반환 없음). 차이 기억!`,
      dart: `list.add(x)       →  arr.append(x)
list.removeAt(i)  →  arr.pop(i)
list.remove(v)    →  arr.remove(v)`
    },
    drills: [
      { title:"드릴 1 — 리스트 조작 심화 (4) - 다중 요소 pop", prompt:"리스트 <code>arr = [1, 2, 3, 4, 5]</code>에서 while문을 사용해 리스트가 빌 때까지 모든 요소를 뒤에서부터 꺼내어 출력하는 코드를 완성하세요.", full:"arr = [1, 2, 3, 4, 5]\nwhile arr:\n    print(arr.pop())", blank:"while ___:\n    print(arr.pop())", answer:"arr", options:["arr","True","len(arr)>0","not arr"], blocks:["arr = [1, 2, 3, 4, 5]","while arr:","    print(arr.pop())"], hint:"빈 리스트는 False로 평가되므로 while arr: 라고 쓰면 리스트가 빌 때까지 반복됩니다." },
      { title:"드릴 2 — pop으로 스택 구현", prompt:"리스트를 스택으로 사용해 1,2,3을 push한 뒤 두 번 pop해서 출력하세요.", full:"stack = []\nstack.append(1)\nstack.append(2)\nstack.append(3)\nprint(stack.pop())\nprint(stack.pop())", blank:"stack.___(1)\nstack.append(2)\nstack.append(3)", answer:"append", options:["append", "push", "add", "insert"], blocks:["stack = []", "stack.append(1)", "stack.append(2)", "stack.append(3)", "print(stack.pop())", "print(stack.pop())"], hint:"append()는 스택의 push, pop()은 스택의 pop에 해당합니다." },
      { title:"드릴 3 — 조건부 pop", prompt:"리스트 <code>[1,2,3,4,5]</code>에서 마지막 요소가 홀수인 동안 계속 pop해서 출력하세요.", full:"arr = [1,2,3,4,5]\nwhile arr and arr[-1] % 2 != 0:\n    print(arr.pop())", blank:"while arr and arr[-1] ___ 2 != 0:\n    print(arr.pop())", answer:"% ", options:["% ", "// ", "* ", "** "], blocks:["arr = [1,2,3,4,5]", "while arr and arr[-1] % 2 != 0:", "    print(arr.pop())"], hint:"arr[-1]은 마지막 요소를 확인합니다. % 2 != 0이면 홀수입니다." }
    ]
  },
  { cat:3, id:21, title:"리스트 조작 심화 (5) - 조건부 리스트 컴프리헨션",
    prompt:"리스트 <code>arr = [1, 2, 3, 4, 5]</code>에서 홀수는 2배, 짝수는 그대로 둔 새 리스트를 만드는 코드를 삼항 연산자를 포함한 리스트 컴프리헨션으로 완성하세요.",
    full:"arr = [1, 2, 3, 4, 5]\nres = [x*2 if x%2!=0 else x for x in arr]\nprint(res)",
    hint:"컴프리헨션 안에 [참일때 if 조건 else 거짓일때 for 변수 in 리스트] 형태를 씁니다.",
    concept: {
      title: "리스트 컴프리헨션 심화 응용",
      desc: `리스트 컴프리헨션은 중첩도 가능하고, 복잡한 조건도 처리할 수 있습니다. 코딩테스트에서 데이터 변환/필터링을 한 줄로 표현할 때 강력합니다.`,
      syntax: `# 조건부 변환
[x*2 if x > 0 else 0 for x in arr]

# 이중 컴프리헨션 (평탄화)
matrix = [[1,2],[3,4],[5,6]]
[v for row in matrix for v in row]  # [1,2,3,4,5,6]

# 딕셔너리 컴프리헨션
{x: x**2 for x in range(1,6)}       # {1:1, 2:4, ...}
{k: v for k,v in d.items() if v>0}  # 필터링

# 집합 컴프리헨션
{x%3 for x in range(10)}  # 나머지 집합

# 제너레이터 (메모리 절약)
sum(x**2 for x in range(1000))`,
      note: `💡 [expr for var in iter]  기본. [expr for v1 in it1 for v2 in it2]  중첩. 읽기 어려우면 분리.`,
      dart: `arr.expand((row) => row).toList()  →  [v for row in m for v in row]`
    },
    drills: [
      { title:"드릴 1 — 리스트 조작 심화 (5) - 조건부 리스트 컴프리헨션", prompt:"리스트 <code>arr = [1, 2, 3, 4, 5]</code>에서 홀수는 2배, 짝수는 그대로 둔 새 리스트를 만드는 코드를 삼항 연산자를 포함한 리스트 컴프리헨션으로 완성하세요.", full:"arr = [1, 2, 3, 4, 5]\nres = [x*2 if x%2!=0 else x for x in arr]\nprint(res)", blank:"res = [x*2 if x%2!=0 ___ x for x in arr]", answer:"else", options:["else","or","and","elif"], blocks:["arr = [1, 2, 3, 4, 5]","res = [x*2 if x%2!=0 else x for x in arr]","print(res)"], hint:"컴프리헨션 안에 [참일때 if 조건 else 거짓일때 for 변수 in 리스트] 형태를 씁니다." },
      { title:"드릴 2 — 양수는 2배, 음수는 0으로", prompt:"리스트 <code>[-1,2,-3,4,-5]</code>에서 양수는 2배, 음수는 0으로 바꾼 리스트를 만드세요.", full:"arr = [-1,2,-3,4,-5]\nresult = [x*2 if x > 0 else 0 for x in arr]\nprint(result)", blank:"result = [x*2 if x > 0 else ___ for x in arr]", answer:"0", options:["0", "x", "x*2", "-x"], blocks:["arr = [-1,2,-3,4,-5]", "result = [x*2 if x > 0 else 0 for x in arr]", "print(result)"], hint:"[참값 if 조건 else 거짓값 for ...]로 조건부 변환합니다." },
      { title:"드릴 3 — 짝수는 제곱, 홀수는 세제곱", prompt:"리스트 <code>[1,2,3,4,5]</code>에서 짝수는 제곱, 홀수는 세제곱으로 변환한 리스트를 만드세요.", full:"arr = [1,2,3,4,5]\nresult = [x**2 if x%2==0 else x**3 for x in arr]\nprint(result)", blank:"result = [x**2 if x%2==0 else x___3 for x in arr]", answer:"**", options:["**", "*", "^", "//"], blocks:["arr = [1,2,3,4,5]", "result = [x**2 if x%2==0 else x**3 for x in arr]", "print(result)"], hint:"파이썬 지수 연산자는 **입니다. x**3은 세제곱입니다." }
    ]
  },

  // ─── CATEGORY 4: 함수 정의 ────────────────────────────────────
  { cat:4, id:0, title:"종합 기본개념 — 함수 정의",
    prompt:"함수 카테고리의 핵심 개념을 정리합니다. def/return, lambda, 기본값 매개변수, 재귀를 익혀보세요.",
    full:`# 함수의 모든 것
def add(a, b):          # def 키워드, 타입 없음!
    return a + b        # return 없으면 None 반환

def greet(name, msg="안녕"):  # 기본값 매개변수
    return f"{msg}, {name}!"

# lambda
square = lambda x: x**2
pairs.sort(key=lambda x: x[1])  # 초빈출!

# 여러 값 반환
def min_max(arr):
    return min(arr), max(arr)
lo, hi = min_max([3,1,4])

# 재귀
def factorial(n):
    if n <= 1: return 1
    return n * factorial(n-1)`,
    hint:"return 빠트리면 None 반환. lambda는 한 줄 표현식만. sort의 key=lambda 외우기!",
    concept: {
      title: "함수 정의 — 전체 개요",
      desc: `def 키워드로 함수를 정의합니다. Python은 타입 선언이 없습니다. lambda는 간단한 익명 함수, sort의 key 인자로 자주 사용됩니다.`,
      syntax: `# 기본 함수
def add(a, b):
    return a + b    # return 없으면 None!

# 기본값 매개변수
def greet(name, msg="안녕"):
    return f"{msg}, {name}!"

# 여러 값 반환
def min_max(arr):
    return min(arr), max(arr)
lo, hi = min_max([3,1,4])

# lambda
square = lambda x: x**2
pairs.sort(key=lambda x: x[1])  # 초빈출!

# 재귀
def factorial(n):
    if n <= 1: return 1
    return n * factorial(n-1)`,
      note: `💡 프로그래머스: solution() 함수로 제출. return으로 결과 반환. print가 아님!`,
      dart: `int add(int a, int b) => a + b;  →  def add(a, b): return a+b
(x) => x**2  →  lambda x: x**2`
    },
    drills: [
      { title:"드릴 1 — 기본 함수", prompt:"두 수를 더해 반환하는 함수 add를 정의하고 add(3,5)를 출력하세요.", full:"def add(a, b):\n    return a + b\nprint(add(3, 5))", blank:"___ add(a, b):", answer:"def", options:["def","func","function","fn"], blocks:["def add(a, b):","    return a + b","print(add(3, 5))"], hint:"def 키워드로 함수를 정의합니다. 콜론(:) 필수!" },
      { title:"드릴 2 — return 값", prompt:"정수 n을 받아 n의 제곱을 반환하는 square 함수를 완성하세요.", full:"def square(n):\n    return n ** 2\nprint(square(4))", blank:"    ___ n ** 2", answer:"return", options:["return","print","yield","pass"], blocks:["def square(n):","    return n ** 2","print(square(4))"], hint:"return으로 값을 반환합니다." },
      { title:"드릴 3 — lambda", prompt:"x의 제곱을 반환하는 lambda를 square에 저장하고 square(5)를 출력하세요.", full:"square = lambda x: x**2\nprint(square(5))", blank:"square = ___ x: x**2", answer:"lambda", options:["lambda","def","func","=>"], blocks:["square = lambda x: x**2","print(square(5))"], hint:"lambda 매개변수: 반환식" },
      { title:"드릴 4 — sort key lambda", prompt:"튜플 리스트 [(1,3),(2,1),(3,2)]를 두 번째 요소 기준으로 정렬하세요.", full:"pairs = [(1,3),(2,1),(3,2)]\npairs.sort(key=lambda x: x[1])\nprint(pairs)", blank:"pairs.sort(key=lambda x: x[___])", answer:"1", options:["1","0","-1","x"], blocks:["pairs = [(1,3),(2,1),(3,2)]","pairs.sort(key=lambda x: x[1])","print(pairs)"], hint:"x[1]은 튜플의 두 번째 요소(인덱스 1)입니다." }
    ]
  },

  { cat:4, id:1, title:"기본 함수 정의와 return",
    prompt:"def 키워드로 함수를 정의하고 return으로 값을 반환하는 기본 구조를 연습합니다.",
    full:"def add(a, b):\n    return a + b\n\nprint(add(3, 5))",
    hint:"def 함수명(매개변수): 형태로 정의. return 없으면 None이 반환됩니다.",
    concept: {
      title: "def 함수 정의와 return",
      desc: `def 키워드로 함수를 정의합니다. Java/Dart처럼 반환 타입을 앞에 쓰지 않습니다. return이 없으면 None을 반환합니다. 코딩테스트는 주로 solution() 함수로 제출합니다.`,
      syntax: `# 기본 구조
def 함수명(매개변수):   # def 키워드, 타입 없음!
    코드
    return 결과값      # 없으면 None 반환!

# 코딩테스트 패턴
def solution(n):
    return n * 2

# 여러 매개변수
def add(a, b):
    return a + b

# 여러 값 반환 (튜플)
def min_max(arr):
    return min(arr), max(arr)

lo, hi = min_max([3, 1, 4])  # 언패킹`,
      note: `💡 return 빠뜨리면 None 반환! print()와 return 혼동 주의. print는 출력만, return은 값 전달.`,
      dart: `int fn(int n) { return n; }  →  def fn(n): return n
반환타입 없음                →  def fn(...):`
    },
    drills: [
      { title:"드릴 1 — 기본 함수 정의", prompt:"두 정수 a, b를 받아 합계를 반환하는 함수 add를 정의하고 add(3, 5)를 출력하세요.", full:"def add(a, b):\n    return a + b\n\nprint(add(3, 5))", blank:"___ add(a, b):", answer:"def", options:["def","func","function","fn"], blocks:["def add(a, b):","    return a + b","","print(add(3, 5))"], hint:"def 함수명(매개변수): 형태로 정의합니다. 콜론(:)을 잊지 마세요!" },
      { title:"드릴 2 — return으로 값 반환", prompt:"정수 n을 받아 n의 제곱을 반환하는 함수 square를 완성하세요.", full:"def square(n):\n    return n ** 2\n\nresult = square(4)\nprint(result)", blank:"    ___ n ** 2", answer:"return", options:["return","print","yield","pass"], blocks:["def square(n):","    return n ** 2","","result = square(4)","print(result)"], hint:"return은 함수 실행을 종료하고 값을 반환합니다." },
      { title:"드릴 3 — 기본값 매개변수", prompt:"이름 name과 인삿말 msg(기본값 '안녕하세요')를 받아 인사를 반환하는 함수를 정의하세요.", full:"def greet(name, msg='안녕하세요'):\n    return f'{msg}, {name}!'\n\nprint(greet('수'))\nprint(greet('수', 'Hi'))", blank:"def greet(name, msg=___)", answer:"'안녕하세요'", options:["'안녕하세요'","안녕하세요","default","None"], blocks:["def greet(name, msg='안녕하세요'):","    return f'{msg}, {name}!'"], hint:"기본값은 따옴표로 감싼 문자열로 지정합니다." },
      { title:"드릴 4 — 여러 값 반환", prompt:"리스트를 받아 최솟값과 최댓값을 동시에 반환하는 함수 min_max를 완성하세요.", full:"def min_max(arr):\n    return min(arr), max(arr)\n\nlo, hi = min_max([3, 1, 4, 1, 5])\nprint(lo, hi)", blank:"    return ___(arr), max(arr)", answer:"min", options:["min","max","arr[0]","sorted"], blocks:["def min_max(arr):","    return min(arr), max(arr)","","lo, hi = min_max([3, 1, 4, 1, 5])","print(lo, hi)"], hint:"파이썬 함수는 콤마로 구분해 여러 값을 반환할 수 있습니다." },
      { title:"드릴 5 — solution() 코딩테스트 패턴", prompt:"프로그래머스 형식으로, 1부터 n까지의 합을 반환하는 solution 함수를 완성하세요.", full:"def solution(n):\n    answer = 0\n    for i in range(1, n + 1):\n        answer += i\n    return answer", blank:"def ___(n):", answer:"solution", options:["solution","main","solve","answer"], blocks:["def solution(n):","    answer = 0","    for i in range(1, n + 1):","        answer += i","    return answer"], hint:"프로그래머스 코딩테스트는 solution() 함수 형태로 제출합니다." }
    ]
  },
  { cat:4, id:2, title:"lambda와 고차 함수",
    prompt:"lambda 익명 함수와 sort의 key 인자를 사용하는 방법을 연습합니다.",
    full:"square = lambda x: x ** 2\nprint(square(5))",
    hint:"lambda 매개변수: 반환값 형태의 간결한 함수입니다.",
    concept: {
      title: "lambda — 익명 함수와 sort key",
      desc: `lambda는 이름 없는 일회용 함수입니다. sort의 key 인자에 자주 사용합니다. 복잡한 로직은 def로, 단순한 한 줄 변환은 lambda로 작성합니다.`,
      syntax: `# lambda 기본
square = lambda x: x ** 2
add = lambda a, b: a + b

# sort key로 lambda (코딩테스트 초빈출!)
pairs = [(1,'b'), (3,'a'), (2,'c')]
pairs.sort(key=lambda x: x[0])   # 첫 번째 요소 기준
pairs.sort(key=lambda x: x[1])   # 두 번째 요소 기준

arr = [-3, 1, -2, 4]
arr.sort(key=lambda x: abs(x))   # 절댓값 기준

# map과 함께
result = list(map(lambda x: x*2, arr))

# def 와 동일
square = lambda x: x**2
# def square(x): return x**2  와 같음`,
      note: `💡 lambda x: x[1] — 콜론(:) 뒤가 반환값. return 키워드 없음! sort의 key에 자주 씀.`,
      dart: `(x) => x * 2      →  lambda x: x * 2
arr.sort((a,b)=>a[1]-b[1])  →  arr.sort(key=lambda x: x[1])`
    },
    drills: [
      { title:"드릴 1 — lambda 기본", prompt:"정수 x를 받아 제곱을 반환하는 lambda 함수를 square에 저장하고 square(5)를 출력하세요.", full:"square = lambda x: x ** 2\nprint(square(5))", blank:"square = ___ x: x ** 2", answer:"lambda", options:["lambda","def","func","=>"], blocks:["square = lambda x: x ** 2","print(square(5))"], hint:"lambda 매개변수: 반환값 형태입니다." },
      { title:"드릴 2 — lambda로 정렬 key", prompt:"튜플 리스트 [(1,3),(2,1),(3,2)]를 두 번째 요소 기준으로 정렬하세요.", full:"pairs = [(1, 3), (2, 1), (3, 2)]\npairs.sort(key=lambda x: x[1])\nprint(pairs)", blank:"pairs.sort(key=lambda x: x[___])", answer:"1", options:["1","0","-1","x"], blocks:["pairs = [(1, 3), (2, 1), (3, 2)]","pairs.sort(key=lambda x: x[1])","print(pairs)"], hint:"key=lambda x: x[1]은 튜플의 두 번째 요소(인덱스 1)로 정렬합니다." },
      { title:"드릴 3 — lambda로 절댓값 정렬", prompt:"리스트 [-3, 1, -2, 4]를 절댓값 기준으로 오름차순 정렬하세요.", full:"arr = [-3, 1, -2, 4]\narr.sort(key=lambda x: abs(x))\nprint(arr)", blank:"arr.sort(key=lambda x: ___(x))", answer:"abs", options:["abs","len","int","str"], blocks:["arr = [-3, 1, -2, 4]","arr.sort(key=lambda x: abs(x))","print(arr)"], hint:"key에는 어떤 함수든 사용할 수 있습니다. abs()는 절댓값입니다." },
      { title:"드릴 4 — 재귀 함수 팩토리얼", prompt:"n!을 재귀적으로 계산하는 factorial 함수를 완성하세요.", full:"def factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)", blank:"    return n * ___(n - 1)", answer:"factorial", options:["factorial","fact","n","self"], blocks:["def factorial(n):","    if n <= 1:","        return 1","    return n * factorial(n - 1)"], hint:"재귀 함수는 자기 자신을 호출합니다. 반드시 종료 조건이 있어야 해요!" }
    ]
  },
  { cat:4, id:3, title:"solution() 패턴 — 코딩테스트",
    prompt:"프로그래머스 형식으로, 정수 <code>n</code>을 받아 1부터 n까지의 합을 반환하는 함수 <code>solution</code>을 완성하세요. 코딩테스트 제출 형태 그대로입니다.",
    full:"def solution(n):\n    answer = 0\n    for i in range(1, n + 1):\n        answer += i\n    return answer",
    hint:"프로그래머스/백준 등 코딩테스트에서는 solution() 함수 형태로 제출합니다.",
    concept: {
      title: "solution() — 코딩테스트 함수 패턴",
      desc: `프로그래머스는 solution() 함수를 정의해 return으로 반환합니다. 백준은 직접 입출력. 함수 안에서 모든 로직을 처리하고 최종 결과만 return하는 구조를 익힙니다.`,
      syntax: `# 프로그래머스 기본 패턴
def solution(n):
    answer = 0
    for i in range(1, n + 1):
        answer += i
    return answer

# 리스트 입력
def solution(arr):
    return max(arr)

# 여러 매개변수
def solution(a, b):
    return a + b

# 복잡한 로직
def solution(numbers):
    result = []
    for n in numbers:
        if n % 2 == 0:
            result.append(n * 2)
    return result`,
      note: `💡 프로그래머스: solution()을 return으로 반환. 백준: input()/print() 직접 사용. 문제마다 패턴 다름.`,
      dart: `// Dart는 main() 함수에서 직접 처리
void main() { ... }`
    },
    drills: [
      { title:"드릴 1 — solution() 패턴 — 코딩테스트", prompt:"프로그래머스 형식으로, 정수 <code>n</code>을 받아 1부터 n까지의 합을 반환하는 함수 <code>solution</code>을 완성하세요. 코딩테스트 제출 형태 그대로입니다.", full:"def solution(n):\n    answer = 0\n    for i in range(1, n + 1):\n        answer += i\n    return answer", blank:"def ___(n):", answer:"solution", options:["solution","main","solve","answer"], blocks:["def solution(n):","    answer = 0","    for i in range(1, n + 1):","        answer += i","    return answer"], hint:"프로그래머스/백준 등 코딩테스트에서는 solution() 함수 형태로 제출합니다." },
      { title:"드릴 2 — solution 패턴 (두 수의 합)", prompt:"코딩테스트 형식으로 두 수의 합을 반환하는 함수 <code>solution(a, b)</code>를 완성하세요.", full:"def solution(a, b):\n    return a + b\n\nprint(solution(3, 7))", blank:"def solution(a, b):\n    ___ a + b", answer:"return", options:["return", "print", "yield", "pass"], blocks:["def solution(a, b):", "    return a + b", "", "print(solution(3, 7))"], hint:"코딩테스트 solution 함수는 반드시 return으로 값을 반환합니다." },
      { title:"드릴 3 — solution 패턴 (최솟값)", prompt:"정수 리스트를 받아 최솟값을 반환하는 <code>solution(arr)</code> 함수를 작성하세요.", full:"def solution(arr):\n    return min(arr)\n\nprint(solution([3,1,4,1,5]))", blank:"def solution(arr):\n    return ___(arr)", answer:"min", options:["min", "max", "sum", "len"], blocks:["def solution(arr):", "    return min(arr)", "", "print(solution([3,1,4,1,5]))"], hint:"min() 내장 함수를 활용하면 간결하게 최솟값을 반환할 수 있습니다." }
    ]
  },
  { cat:4, id:4, title:"기본값 매개변수",
    prompt:"이름 <code>name</code>과 인삿말 <code>msg</code>를 받아 <code>'{msg}, {name}!'</code>을 반환하는 함수를 정의하세요. msg의 기본값은 <code>'안녕하세요'</code>로 설정합니다.",
    full:"def greet(name, msg='안녕하세요'):\n    return f'{msg}, {name}!'\n\nprint(greet('수'))      # 안녕하세요, 수!\nprint(greet('수', 'Hi'))  # Hi, 수!",
    hint:"기본값 매개변수는 인자를 넘기지 않으면 기본값을 사용합니다.",
    concept: {
      title: "기본값 매개변수 def f(x, y='기본값')",
      desc: `함수 정의 시 매개변수에 기본값을 지정하면 호출 시 인자를 생략할 수 있습니다. 기본값이 있는 매개변수는 반드시 기본값 없는 매개변수 뒤에 위치합니다.`,
      syntax: `# 기본값 매개변수
def greet(name, msg='안녕하세요'):
    return f"{msg}, {name}!"

greet("수")             # "안녕하세요, 수!"
greet("수", "Hello")    # "Hello, 수!"
greet("수", msg="Hi")   # "Hi, 수!" (키워드 인자)

# 순서 규칙: 기본값 있는 것은 뒤에!
def fn(a, b, c=3):    # OK
# def fn(a=1, b):     # ERROR!

# 실용 예
def power(base, exp=2):
    return base ** exp

power(3)    # 9 (3의 제곱)
power(3, 3) # 27 (3의 세제곱)`,
      note: `💡 기본값 매개변수는 뒤에! def f(a, b=1) OK. def f(a=1, b) 불가. 키워드 인자로 순서 무관 호출 가능.`,
      dart: `void greet(String name, {String msg = "안녕"})  →  def greet(name, msg="안녕"):`
    },
    drills: [
      { title:"드릴 1 — 기본값 매개변수", prompt:"이름 <code>name</code>과 인삿말 <code>msg</code>를 받아 <code>'{msg}, {name}!'</code>을 반환하는 함수를 정의하세요. msg의 기본값은 <code>'안녕하세요'</code>로 설정합니다.", full:"def greet(name, msg='안녕하세요'):\n    return f'{msg}, {name}!'\n\nprint(greet('수'))      # 안녕하세요, 수!\nprint(greet('수', 'Hi'))  # Hi, 수!", blank:"def greet(name, msg=___)", answer:"'안녕하세요'", options:["'안녕하세요'","안녕하세요","default","None"], blocks:["def greet(name, msg='안녕하세요'):","    return f'{msg}, {name}!'"], hint:"기본값 매개변수는 인자를 넘기지 않으면 기본값을 사용합니다." },
      { title:"드릴 2 — 기본값으로 인사말 변경", prompt:"<code>greet(name, msg='Hi')</code> 함수를 정의하고 msg 없이, 그리고 msg='Hello'로 각각 호출하세요.", full:"def greet(name, msg='Hi'):\n    print(f'{msg}, {name}!')\n\ngreet('수')\ngreet('민', msg='Hello')", blank:"def greet(name, msg=___):\n    print(f'{msg}, {name}!')", answer:"'Hi'", options:["'Hi'", "Hi", "'hello'", "None"], blocks:["def greet(name, msg='Hi'):", "    print(f'{msg}, {name}!')", "", "greet('수')", "greet('민', msg='Hello')"], hint:"기본값 매개변수: def func(param=기본값):" },
      { title:"드릴 3 — 기본값이 있는 거듭제곱 함수", prompt:"<code>power(base, exp=2)</code> 함수를 완성하세요. exp 기본값은 2(제곱)입니다.", full:"def power(base, exp=2):\n    return base ** exp\n\nprint(power(3))\nprint(power(3, 3))", blank:"def power(base, exp=___):\n    return base ** exp", answer:"2", options:["2", "1", "0", "3"], blocks:["def power(base, exp=2):", "    return base ** exp", "", "print(power(3))", "print(power(3, 3))"], hint:"기본값 exp=2면 power(3)은 3²=9, power(3,3)은 3³=27입니다." }
    ]
  },
  { cat:4, id:5, title:"lambda 익명 함수",
    prompt:"정수 <code>x</code>를 받아 제곱을 반환하는 람다 함수를 <code>square</code>에 저장하고 <code>square(5)</code>를 출력하는 코드를 완성하세요.",
    full:"square = lambda x: x ** 2\nprint(square(5))  # 25",
    hint:"lambda 매개변수: 반환값 형태의 간결한 함수입니다. sort의 key 인자에 자주 사용해요.",
    concept: {
      title: "lambda 익명 함수 심화",
      desc: `lambda는 식 하나만 가능한 함수입니다. map(), filter(), sorted()의 함수 인자로 자주 사용합니다. 간단한 변환 함수를 인라인으로 작성할 때 코드가 간결해집니다.`,
      syntax: `# lambda: 매개변수: 반환식
square = lambda x: x**2       # 제곱
triple = lambda x: x*3        # 3배
add    = lambda x, y: x + y   # 합

# map — 각 요소에 함수 적용
list(map(lambda x: x*2, [1,2,3]))  # [2,4,6]
list(map(lambda x: x**2, range(5))) # [0,1,4,9,16]

# filter — 조건에 맞는 요소 필터
list(filter(lambda x: x>0, [-1,2,-3,4])) # [2,4]

# sorted key
sorted(['apple','hi','banana'], key=lambda s: len(s))
# ['hi','apple','banana']`,
      note: `💡 lambda는 한 줄 표현식만 가능. if-else(삼항)은 가능, 여러 줄 불가. 복잡하면 def 사용.`,
      dart: `(x) => x * 2   →  lambda x: x * 2
arr.map((x) => x*2).toList()  →  list(map(lambda x: x*2, arr))`
    },
    drills: [
      { title:"드릴 1 — lambda 익명 함수", prompt:"정수 <code>x</code>를 받아 제곱을 반환하는 람다 함수를 <code>square</code>에 저장하고 <code>square(5)</code>를 출력하는 코드를 완성하세요.", full:"square = lambda x: x ** 2\nprint(square(5))  # 25", blank:"square = ___ x: x ** 2", answer:"lambda", options:["lambda","def","func","=>"], blocks:["square = lambda x: x ** 2","print(square(5))"], hint:"lambda 매개변수: 반환값 형태의 간결한 함수입니다. sort의 key 인자에 자주 사용해요." },
      { title:"드릴 2 — lambda 두 수의 합", prompt:"두 수를 받아 합을 반환하는 lambda를 <code>add</code> 변수에 저장하세요.", full:"add = lambda x, y: x + y\nprint(add(3, 5))", blank:"add = lambda x, y: x ___ y", answer:"+ ", options:["+ ", "- ", "* ", "/ "], blocks:["add = lambda x, y: x + y", "print(add(3, 5))"], hint:"lambda 매개변수1, 매개변수2: 표현식 형태입니다." },
      { title:"드릴 3 — lambda와 map", prompt:"리스트 <code>[1,2,3,4,5]</code>의 각 요소를 3배로 만드세요. lambda와 map을 사용합니다.", full:"arr = [1,2,3,4,5]\nresult = list(map(lambda x: x*3, arr))\nprint(result)", blank:"result = list(map(lambda x: x*___, arr))", answer:"3", options:["3", "2", "x", "**3"], blocks:["arr = [1,2,3,4,5]", "result = list(map(lambda x: x*3, arr))", "print(result)"], hint:"map(함수, 이터러블)은 각 요소에 함수를 적용합니다." }
    ]
  },
  { cat:4, id:6, title:"lambda로 정렬 key 지정",
    prompt:"튜플 리스트 <code>pairs = [(1, 3), (2, 1), (3, 2)]</code>를 각 튜플의 두 번째 요소 기준으로 오름차순 정렬하는 코드를 완성하세요. key에 lambda를 사용합니다.",
    full:"pairs = [(1, 3), (2, 1), (3, 2)]\npairs.sort(key=lambda x: x[1])\nprint(pairs)  # [(2,1),(3,2),(1,3)]",
    hint:"key=lambda x: x[1]은 튜플의 두 번째 요소(인덱스 1)를 기준으로 정렬합니다.",
    concept: {
      title: "lambda로 sort key 지정 심화",
      desc: `sort(key=lambda)는 코딩테스트 초빈출 패턴입니다. 튜플/리스트의 특정 인덱스 기준, 절댓값 기준, 문자열 길이 기준 등 다양한 정렬 기준을 lambda로 지정합니다.`,
      syntax: `# 튜플 리스트 정렬
pairs = [(1,3),(2,1),(3,2)]
pairs.sort(key=lambda x: x[0])    # 첫 번째 기준
pairs.sort(key=lambda x: x[1])    # 두 번째 기준
pairs.sort(key=lambda x: -x[1])   # 두 번째 역순

# 다중 기준 정렬 (튜플 반환)
pairs.sort(key=lambda x: (x[1], x[0]))
# 두 번째 오름차순, 같으면 첫 번째 오름차순

# 절댓값, 길이 기준
arr.sort(key=lambda x: abs(x))
words.sort(key=lambda w: len(w))

# sorted — 원본 유지
sorted(pairs, key=lambda x: x[1])`,
      note: `💡 다중 기준: key=lambda x: (기준1, 기준2). 튜플은 앞에서부터 순서대로 비교합니다.`,
      dart: `arr.sort((a,b) => a[1].compareTo(b[1]))  →  arr.sort(key=lambda x: x[1])`
    },
    drills: [
      { title:"드릴 1 — lambda로 정렬 key 지정", prompt:"튜플 리스트 <code>pairs = [(1, 3), (2, 1), (3, 2)]</code>를 각 튜플의 두 번째 요소 기준으로 오름차순 정렬하는 코드를 완성하세요. key에 lambda를 사용합니다.", full:"pairs = [(1, 3), (2, 1), (3, 2)]\npairs.sort(key=lambda x: x[1])\nprint(pairs)  # [(2,1),(3,2),(1,3)]", blank:"pairs.sort(key=lambda x: x[___])", answer:"1", options:["1","0","-1","x"], blocks:["pairs = [(1, 3), (2, 1), (3, 2)]","pairs.sort(key=lambda x: x[1])","print(pairs)"], hint:"key=lambda x: x[1]은 튜플의 두 번째 요소(인덱스 1)를 기준으로 정렬합니다." },
      { title:"드릴 2 — lambda로 두 번째 요소 기준 정렬", prompt:"튜플 리스트 <code>[(1,3),(2,1),(3,2)]</code>를 두 번째 요소 기준으로 정렬하세요.", full:"pairs = [(1,3),(2,1),(3,2)]\npairs.sort(key=lambda x: x[1])\nprint(pairs)", blank:"pairs.sort(key=lambda x: x[___])", answer:"1", options:["1", "0", "2", "-1"], blocks:["pairs = [(1,3),(2,1),(3,2)]", "pairs.sort(key=lambda x: x[1])", "print(pairs)"], hint:"x[1]은 튜플의 두 번째 요소입니다. 0-indexed이므로 인덱스 1입니다." },
      { title:"드릴 3 — lambda로 절댓값 기준 정렬", prompt:"리스트 <code>[-3,1,-2,4,-5]</code>를 절댓값 기준으로 오름차순 정렬하세요.", full:"arr = [-3,1,-2,4,-5]\narr.sort(key=lambda x: abs(x))\nprint(arr)", blank:"arr.sort(key=lambda x: ___(x))", answer:"abs", options:["abs", "int", "str", "float"], blocks:["arr = [-3,1,-2,4,-5]", "arr.sort(key=lambda x: abs(x))", "print(arr)"], hint:"abs()는 절댓값을 반환합니다. key=lambda x: abs(x)로 절댓값 기준 정렬합니다." }
    ]
  },
  { cat:4, id:7, title:"재귀 함수 — 팩토리얼",
    prompt:"정수 <code>n</code>을 받아 n!을 재귀적으로 계산해 반환하는 함수 <code>factorial</code>을 완성하세요. 종료 조건: n이 1 이하이면 1을 반환합니다.",
    full:"def factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)",
    hint:"재귀 함수는 자기 자신을 호출합니다. 반드시 종료 조건(base case)이 있어야 해요!",
    concept: {
      title: "재귀 함수 — 자기 자신 호출",
      desc: `재귀 함수는 자기 자신을 호출하는 함수입니다. 반드시 종료 조건(base case)이 있어야 무한 루프를 막을 수 있습니다. 팩토리얼, 피보나치, 트리 탐색에 자주 사용됩니다.`,
      syntax: `# 팩토리얼 (n!)
def factorial(n):
    if n <= 1:        # 종료 조건!
        return 1
    return n * factorial(n - 1)

# factorial(4) 동작:
# 4 * factorial(3)
# 4 * 3 * factorial(2)
# 4 * 3 * 2 * factorial(1)
# 4 * 3 * 2 * 1 = 24

# 피보나치
def fib(n):
    if n <= 1: return n
    return fib(n-1) + fib(n-2)

# 주의: 깊은 재귀는 스택 오버플로!
# Python 기본 제한: 1000회`,
      note: `💡 재귀 3요소: ① 종료 조건 ② 재귀 호출 ③ 점점 종료 조건에 가까워짐. 하나라도 없으면 무한 루프!`,
      dart: `// 재귀 구조는 동일
int factorial(int n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}`
    },
    drills: [
      { title:"드릴 1 — 재귀 함수 — 팩토리얼", prompt:"정수 <code>n</code>을 받아 n!을 재귀적으로 계산해 반환하는 함수 <code>factorial</code>을 완성하세요. 종료 조건: n이 1 이하이면 1을 반환합니다.", full:"def factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)", blank:"    return n * ___(n - 1)", answer:"factorial", options:["factorial","fact","n","self"], blocks:["def factorial(n):","    if n <= 1:","        return 1","    return n * factorial(n - 1)"], hint:"재귀 함수는 자기 자신을 호출합니다. 반드시 종료 조건(base case)이 있어야 해요!" },
      { title:"드릴 2 — 재귀로 피보나치", prompt:"재귀 함수로 피보나치 n번째 수를 반환하세요. fib(0)=0, fib(1)=1.", full:"def fib(n):\n    if n <= 1:\n        return n\n    return fib(n-1) + fib(n-2)\n\nprint(fib(7))", blank:"def fib(n):\n    if n <= 1:\n        return n\n    return fib(n-1) + ___(n-2)", answer:"fib", options:["fib", "fib()", "n", "n-1"], blocks:["def fib(n):", "    if n <= 1:", "        return n", "    return fib(n-1) + fib(n-2)", "", "print(fib(7))"], hint:"재귀는 자기 자신을 다시 호출합니다. fib(n) = fib(n-1) + fib(n-2)" },
      { title:"드릴 3 — 재귀로 거듭제곱", prompt:"재귀 함수 <code>power(base, exp)</code>를 완성하세요. 기저: exp==0이면 1 반환.", full:"def power(base, exp):\n    if exp == 0:\n        return 1\n    return base * power(base, exp-1)\n\nprint(power(2, 10))", blank:"def power(base, exp):\n    if exp == 0:\n        return 1\n    return base * power(base, ___)", answer:"exp-1", options:["exp-1", "exp", "exp+1", "exp//2"], blocks:["def power(base, exp):", "    if exp == 0:", "        return 1", "    return base * power(base, exp-1)", "", "print(power(2, 10))"], hint:"base^exp = base × base^(exp-1)로 재귀 정의합니다." }
    ]
  },
  { cat:4, id:8, title:"여러 값 반환 — 최솟값·최댓값",
    prompt:"리스트를 받아 최솟값과 최댓값을 동시에 반환하는 함수 <code>min_max</code>를 완성하세요. 호출: <code>lo, hi = min_max([3, 1, 4, 1, 5])</code> → lo=1, hi=5",
    full:"def min_max(arr):\n    return min(arr), max(arr)\n\nlo, hi = min_max([3, 1, 4, 1, 5])\nprint(lo, hi)  # 1 5",
    hint:"파이썬 함수는 콤마로 구분해 여러 값을 반환할 수 있습니다. 튜플로 묶여 반환돼요.",
    concept: {
      title: "여러 값 반환 — return a, b",
      desc: `Python 함수는 콤마로 구분해 여러 값을 반환할 수 있습니다. 내부적으로는 튜플로 묶여 반환됩니다. 받는 쪽에서 언패킹(a, b = fn())으로 각 값을 분리합니다.`,
      syntax: `# 여러 값 반환
def min_max(arr):
    return min(arr), max(arr)  # 튜플로 반환

# 언패킹으로 받기
lo, hi = min_max([3, 1, 4])   # lo=1, hi=4

# 튜플로 받을 수도 있음
result = min_max([3, 1, 4])   # (1, 4)
result[0]                     # 1 (min)

# 실용 패턴
def div_mod(a, b):
    return a // b, a % b

q, r = div_mod(17, 5)   # q=3, r=2

# 내장함수 divmod()
q, r = divmod(17, 5)    # 동일!`,
      note: `💡 Java/Dart는 여러 값 반환 불가 (객체/배열로 래핑해야). Python은 기본 지원. 언패킹으로 바로 사용 가능.`,
      dart: `// Dart: 여러 반환값은 리스트나 객체 사용
List<int> minMax(List<int> arr) => [arr.reduce(min), arr.reduce(max)];
// Python: return min(arr), max(arr)  훨씬 간단!`
    },
    drills: [
      { title:"드릴 1 — 여러 값 반환 — 최솟값·최댓값", prompt:"리스트를 받아 최솟값과 최댓값을 동시에 반환하는 함수 <code>min_max</code>를 완성하세요. 호출: <code>lo, hi = min_max([3, 1, 4, 1, 5])</code> → lo=1, hi=5", full:"def min_max(arr):\n    return min(arr), max(arr)\n\nlo, hi = min_max([3, 1, 4, 1, 5])\nprint(lo, hi)  # 1 5", blank:"    return ___(arr), max(arr)", answer:"min", options:["min","max","arr[0]","sorted"], blocks:["def min_max(arr):","    return min(arr), max(arr)","","lo, hi = min_max([3, 1, 4, 1, 5])","print(lo, hi)"], hint:"파이썬 함수는 콤마로 구분해 여러 값을 반환할 수 있습니다. 튜플로 묶여 반환돼요." },
      { title:"드릴 2 — 여러 값 반환 (몫과 나머지)", prompt:"두 수를 받아 몫과 나머지를 동시에 반환하는 함수 <code>div_mod(a, b)</code>를 완성하세요.", full:"def div_mod(a, b):\n    return a // b, a % b\n\nq, r = div_mod(17, 5)\nprint(q, r)", blank:"def div_mod(a, b):\n    return a ___ b, a % b", answer:"// ", options:["// ", "/ ", "% ", "* "], blocks:["def div_mod(a, b):", "    return a // b, a % b", "", "q, r = div_mod(17, 5)", "print(q, r)"], hint:"// 는 정수 나눗셈(몫), % 는 나머지 연산입니다." },
      { title:"드릴 3 — 통계 함수 (평균, 최댓값, 최솟값)", prompt:"리스트를 받아 평균, 최댓값, 최솟값을 한 번에 반환하는 함수 <code>stats(arr)</code>를 완성하세요.", full:"def stats(arr):\n    return sum(arr)/len(arr), max(arr), min(arr)\n\navg, hi, lo = stats([3,1,4,1,5,9])\nprint(avg, hi, lo)", blank:"def stats(arr):\n    return sum(arr)/len(arr), ___(arr), min(arr)", answer:"max", options:["max", "min", "sum", "avg"], blocks:["def stats(arr):", "    return sum(arr)/len(arr), max(arr), min(arr)", "", "avg, hi, lo = stats([3,1,4,1,5,9])", "print(avg, hi, lo)"], hint:"return에서 콤마로 여러 값을 묶어 튜플로 반환합니다." }
    ]
  },
  { cat:4, id:9, title:"리스트 컴프리헨션 활용 함수",
    prompt:"리스트를 받아 짝수 요소만 걸러낸 리스트를 반환하는 함수 <code>get_evens</code>를 완성하세요. 리스트 컴프리헨션을 return에서 직접 사용합니다.",
    full:"def get_evens(arr):\n    return [x for x in arr if x % 2 == 0]\n\nprint(get_evens([1,2,3,4,5,6]))",
    hint:"리스트 컴프리헨션을 return에서 바로 사용할 수 있습니다.",
    concept: {
      title: "함수 안에서 리스트 컴프리헨션 return",
      desc: `리스트 컴프리헨션을 return문에서 직접 사용하면 중간 변수 없이 결과를 바로 반환할 수 있어 코드가 간결해집니다.`,
      syntax: `# 컴프리헨션을 return에서 직접 사용
def get_evens(arr):
    return [x for x in arr if x % 2 == 0]

def square_all(arr):
    return [x**2 for x in arr]

def long_words(words, n):
    return [w for w in words if len(w) >= n]

# 풀어 쓴 버전과 동일
def get_evens_verbose(arr):
    result = []
    for x in arr:
        if x % 2 == 0:
            result.append(x)
    return result`,
      note: `💡 간결하지만 읽기 어려우면 풀어 쓰는 게 나을 수도 있습니다. 가독성 vs 간결성 균형.`,
      dart: `return arr.where((x) => x%2==0).toList();  →  return [x for x in arr if x%2==0]`
    },
    drills: [
      { title:"드릴 1 — 리스트 컴프리헨션 활용 함수", prompt:"리스트를 받아 짝수 요소만 걸러낸 리스트를 반환하는 함수 <code>get_evens</code>를 완성하세요. 리스트 컴프리헨션을 return에서 직접 사용합니다.", full:"def get_evens(arr):\n    return [x for x in arr if x % 2 == 0]\n\nprint(get_evens([1,2,3,4,5,6]))", blank:"    return [x for x in arr ___ x % 2 == 0]", answer:"if", options:["if","when","where","and"], blocks:["def get_evens(arr):","    return [x for x in arr if x % 2 == 0]","","print(get_evens([1,2,3,4,5,6]))"], hint:"리스트 컴프리헨션을 return에서 바로 사용할 수 있습니다." },
      { title:"드릴 2 — 문자열 필터 함수", prompt:"문자열 리스트를 받아 길이가 3 이상인 것만 반환하는 <code>long_words(words)</code> 함수를 완성하세요.", full:"def long_words(words):\n    return [w for w in words if len(w) >= 3]\n\nprint(long_words(['hi','hello','ok','bye']))", blank:"return [w for w in words if len(w) ___ 3]", answer:">= ", options:[">= ", "<= ", "> ", "== "], blocks:["def long_words(words):", "    return [w for w in words if len(w) >= 3]", "", "print(long_words(['hi','hello','ok','bye']))"], hint:"len(w) >= 3 조건으로 길이 3 이상인 단어만 필터링합니다." },
      { title:"드릴 3 — 조건부 변환 함수", prompt:"정수 리스트를 받아 양수는 그대로, 음수는 절댓값으로 바꾼 리스트를 반환하는 함수를 완성하세요.", full:"def abs_list(arr):\n    return [x if x >= 0 else -x for x in arr]\n\nprint(abs_list([-1,2,-3,4]))", blank:"return [x if x >= 0 else ___ for x in arr]", answer:"-x", options:["-x", "x", "0", "abs(x)"], blocks:["def abs_list(arr):", "    return [x if x >= 0 else -x for x in arr]", "", "print(abs_list([-1,2,-3,4]))"], hint:"x가 음수면 -x로 부호를 바꾸면 절댓값이 됩니다." }
    ]
  },
  { cat:4, id:10, title:"*args 가변 인수",
    prompt:"개수에 상관없이 여러 정수를 받아 합계를 반환하는 함수 <code>my_sum</code>을 완성하세요. 가변 인수를 사용합니다. 예: <code>my_sum(1, 2, 3, 4, 5)</code> → 15",
    full:"def my_sum(*args):\n    return sum(args)\n\nprint(my_sum(1, 2, 3, 4, 5))  # 15",
    hint:"*args는 몇 개의 인수든 받을 수 있습니다. args는 tuple이 됩니다.",
    concept: {
      title: "*args — 가변 인수",
      desc: `*args는 인수 개수가 정해지지 않은 가변 인수입니다. 함수 안에서 args는 튜플로 취급됩니다. 내장 함수 max(), min(), print()가 이 방식으로 여러 인수를 받습니다.`,
      syntax: `def my_sum(*args):      # args는 튜플
    return sum(args)

my_sum(1, 2, 3)     # → 6
my_sum(1, 2, 3, 4, 5) # → 15

def average(*args):
    return sum(args) / len(args)

# *args와 일반 인수 혼합
def log(prefix, *messages):
    for msg in messages:
        print(f"{prefix}: {msg}")

log("INFO", "시작", "처리중", "완료")
# INFO: 시작 / INFO: 처리중 / INFO: 완료`,
      note: `💡 *args는 관례적 이름, *numbers나 *items 등 다른 이름도 가능. *만 있으면 가변 인수.`,
      dart: `// Dart는 가변 인수 없음
// List<int>로 받아야 함
int mySum(List<int> args) => args.reduce((a,b)=>a+b);`
    },
    drills: [
      { title:"드릴 1 — *args 가변 인수", prompt:"개수에 상관없이 여러 정수를 받아 합계를 반환하는 함수 <code>my_sum</code>을 완성하세요. 가변 인수를 사용합니다. 예: <code>my_sum(1, 2, 3, 4, 5)</code> → 15", full:"def my_sum(*args):\n    return sum(args)\n\nprint(my_sum(1, 2, 3, 4, 5))  # 15", blank:"def my_sum(___args):", answer:"*", options:["*","**","&","@"], blocks:["def my_sum(*args):","    return sum(args)","","print(my_sum(1, 2, 3, 4, 5))"], hint:"*args는 몇 개의 인수든 받을 수 있습니다. args는 tuple이 됩니다." },
      { title:"드릴 2 — *args로 평균 계산", prompt:"가변 인수를 받아 평균을 반환하는 <code>average(*args)</code> 함수를 완성하세요.", full:"def average(*args):\n    return sum(args) / len(args)\n\nprint(average(1, 2, 3, 4, 5))", blank:"def average(*___):\n    return sum(args) / len(args)", answer:"args", options:["args", "arg", "nums", "values"], blocks:["def average(*args):", "    return sum(args) / len(args)", "", "print(average(1, 2, 3, 4, 5))"], hint:"*args는 가변 인수를 튜플로 받습니다. 이름은 관례적으로 args를 씁니다." },
      { title:"드릴 3 — *args로 최댓값 찾기", prompt:"가변 인수를 받아 최댓값을 반환하는 <code>my_max(*args)</code> 함수를 완성하세요.", full:"def my_max(*args):\n    return max(args)\n\nprint(my_max(3, 1, 4, 1, 5, 9))", blank:"def my_max(*args):\n    return ___(args)", answer:"max", options:["max", "min", "sum", "sorted"], blocks:["def my_max(*args):", "    return max(args)", "", "print(my_max(3, 1, 4, 1, 5, 9))"], hint:"*args는 튜플이므로 max(args)처럼 내장 함수에 바로 전달할 수 있습니다." }
    ]
  },
  { cat:4, id:11, title:"양수 개수 세는 함수",
    prompt:"리스트를 받아 0보다 큰 양수의 개수를 반환하는 함수 <code>count_positive</code>를 완성하세요. 반복문과 조건문을 함수 안에서 함께 사용합니다.",
    full:"def count_positive(arr):\n    count = 0\n    for x in arr:\n        if x > 0:\n            count += 1\n    return count",
    hint:"함수의 결과는 반드시 return으로 돌려줘야 합니다.",
    concept: {
      title: "함수 안에서 반복문 + 조건문 조합",
      desc: `함수 안에 반복문과 조건문을 함께 사용하는 패턴은 코딩테스트의 핵심입니다. 카운팅, 필터링, 누적 계산을 함수로 캡슐화하면 재사용하기 좋습니다.`,
      syntax: `# 카운팅 함수
def count_positive(arr):
    count = 0
    for x in arr:
        if x > 0:
            count += 1
    return count   # 반드시 return!

# 같은 결과를 컴프리헨션으로
def count_positive(arr):
    return len([x for x in arr if x > 0])

# 또는 sum + 조건 (가장 간결)
def count_positive(arr):
    return sum(1 for x in arr if x > 0)`,
      note: `💡 함수에서 return 빠트리면 None 반환! 결과값을 쓰려면 반드시 return. print != return.`,
      dart: `int countPositive(List<int> arr) => arr.where((x) => x > 0).length;`
    },
    drills: [
      { title:"드릴 1 — 양수 개수 세는 함수", prompt:"리스트를 받아 0보다 큰 양수의 개수를 반환하는 함수 <code>count_positive</code>를 완성하세요. 반복문과 조건문을 함수 안에서 함께 사용합니다.", full:"def count_positive(arr):\n    count = 0\n    for x in arr:\n        if x > 0:\n            count += 1\n    return count", blank:"    ___ count", answer:"return", options:["return","print","yield","pass"], blocks:["def count_positive(arr):","    count = 0","    for x in arr:","        if x > 0:","            count += 1","    return count"], hint:"함수의 결과는 반드시 return으로 돌려줘야 합니다." },
      { title:"드릴 2 — 음수 개수 세는 함수", prompt:"리스트를 받아 음수 개수를 반환하는 <code>count_negative(arr)</code> 함수를 완성하세요.", full:"def count_negative(arr):\n    return sum(1 for x in arr if x < 0)\n\nprint(count_negative([1,-2,3,-4,-5]))", blank:"return sum(1 for x in arr if x ___ 0)", answer:"< ", options:["< ", "> ", "<= ", "!= "], blocks:["def count_negative(arr):", "    return sum(1 for x in arr if x < 0)", "", "print(count_negative([1,-2,3,-4,-5]))"], hint:"sum(1 for x in arr if 조건)은 조건을 만족하는 요소 개수를 셉니다." },
      { title:"드릴 3 — 짝수 개수 세는 함수", prompt:"리스트를 받아 짝수의 개수를 반환하는 <code>count_even(arr)</code>을 완성하고 <code>[1,2,3,4,5,6]</code>으로 테스트하세요.", full:"def count_even(arr):\n    count = 0\n    for x in arr:\n        if x % 2 == 0:\n            count += 1\n    return count\n\nprint(count_even([1,2,3,4,5,6]))", blank:"def count_even(arr):\n    count = 0\n    for x in arr:\n        if x % 2 == 0:\n            count ___ 1\n    return count", answer:"+= ", options:["+= ", "-= ", "*= ", "= "], blocks:["def count_even(arr):", "    count = 0", "    for x in arr:", "        if x % 2 == 0:", "            count += 1", "    return count", "", "print(count_even([1,2,3,4,5,6]))"], hint:"count += 1로 조건을 만족할 때마다 카운터를 증가시킵니다." }
    ]
  },
  { cat:4, id:12, title:"소수 판별 함수",
    prompt:"정수 <code>n</code>을 받아 소수이면 True, 아니면 False를 반환하는 함수 <code>is_prime</code>을 완성하세요. √n까지만 나누어보는 효율적인 방식을 사용합니다.",
    full:"def is_prime(n):\n    if n < 2:\n        return False\n    for i in range(2, int(n**0.5) + 1):\n        if n % i == 0:\n            return False\n    return True",
    hint:"√n까지만 나누어보면 됩니다. int(n**0.5)는 n의 제곱근입니다. +1은 range 끝 포함을 위해!",
    concept: {
      title: "함수 심화 — 스코프와 고급 패턴",
      desc: `함수 안에서 정의된 변수는 지역 스코프를 가집니다. 외부 변수를 수정하려면 global 키워드가 필요합니다. 클로저와 고차 함수 패턴도 Python에서 자주 사용됩니다.`,
      syntax: `# 지역 vs 전역
x = 10  # 전역 변수
def fn():
    x = 20        # 지역 변수 (전역 x 변경 안 됨)
    return x

def fn_global():
    global x
    x = 20        # 전역 x 변경!

# 고차 함수: 함수를 인자로
def apply(func, lst):
    return [func(x) for x in lst]

apply(lambda x: x*2, [1,2,3])  # [2,4,6]
apply(str, [1,2,3])             # ['1','2','3']

# sorted + key 함수
sorted(words, key=len)          # 길이 기준`,
      note: `💡 global 선언 없이 함수 안에서 전역 변수 재할당 불가. 읽기는 가능, 쓰기는 global 필요.`,
      dart: `// Dart: 변수는 항상 선언 범위에 속함
// 클로저와 고차 함수는 유사하게 동작`
    },
    drills: [
      { title:"드릴 1 — 소수 판별 함수", prompt:"정수 <code>n</code>을 받아 소수이면 True, 아니면 False를 반환하는 함수 <code>is_prime</code>을 완성하세요. √n까지만 나누어보는 효율적인 방식을 사용합니다.", full:"def is_prime(n):\n    if n < 2:\n        return False\n    for i in range(2, int(n**0.5) + 1):\n        if n % i == 0:\n            return False\n    return True", blank:"    for i in range(2, int(n**0.5) + ___):", answer:"1", options:["1","0","2","n"], blocks:["def is_prime(n):","    if n < 2: return False","    for i in range(2, int(n**0.5) + 1):","        if n % i == 0: return False","    return True"], hint:"√n까지만 나누어보면 됩니다. int(n**0.5)는 n의 제곱근입니다. +1은 range 끝 포함을 위해!" },
      { title:"드릴 2 — 소수인지 아닌지 분류", prompt:"1부터 20까지 순회하며 소수는 'prime', 아니면 'not prime'으로 출력하세요. is_prime 함수를 활용합니다.", full:"def is_prime(n):\n    if n < 2:\n        return False\n    for i in range(2, int(n**0.5)+1):\n        if n % i == 0:\n            return False\n    return True\n\nfor n in range(1, 21):\n    print(n, 'prime' if is_prime(n) else 'not prime')", blank:"    return ___\n\nfor n in range(1, 21):", answer:"True", options:["True", "False", "1", "n"], blocks:["def is_prime(n):", "    if n < 2:", "        return False", "    for i in range(2, int(n**0.5)+1):", "        if n % i == 0:", "            return False", "    return True", "", "for n in range(1, 21):", "    print(n, 'prime' if is_prime(n) else 'not prime')"], hint:"루프를 모두 통과하면 약수가 없다는 뜻이므로 True를 반환합니다." },
      { title:"드릴 3 — n 이하 소수 리스트 반환", prompt:"n 이하의 소수를 모두 담은 리스트를 반환하는 <code>primes_up_to(n)</code> 함수를 완성하세요.", full:"def is_prime(n):\n    if n < 2: return False\n    for i in range(2, int(n**0.5)+1):\n        if n % i == 0: return False\n    return True\n\ndef primes_up_to(n):\n    return [x for x in range(2, n+1) if is_prime(x)]\n\nprint(primes_up_to(30))", blank:"def primes_up_to(n):\n    return [x for x in range(2, n+1) if ___(x)]", answer:"is_prime", options:["is_prime", "is_prime()", "prime", "check_prime"], blocks:["def primes_up_to(n):", "    return [x for x in range(2, n+1) if is_prime(x)]", "", "print(primes_up_to(30))"], hint:"리스트 컴프리헨션의 if 조건에 is_prime 함수를 바로 사용합니다." }
    ]
  },

  // ─── CATEGORY 5: 딕셔너리 & 집합 ─────────────────────────────
  { cat:5, id:0, title:"종합 기본개념 — 딕셔너리 & 집합",
    prompt:"딕셔너리 & 집합 카테고리의 핵심 개념을 정리합니다. dict 기본 조작, 빈도 세기, set 연산, Counter를 익혀보세요.",
    full:`# 딕셔너리와 집합의 모든 것
d = {}
d['key'] = 'value'
d.get('key', 기본값)  # 없으면 기본값

# 빈도 세기 핵심 패턴
cnt = {}
for x in arr:
    cnt[x] = cnt.get(x, 0) + 1

# Counter로 간단하게
from collections import Counter
cnt = Counter(arr)
cnt.most_common(2)

# 순회
for k, v in d.items():
    print(f"{k}: {v}")

# 집합 연산
s = set(arr)    # 중복 제거
s1 & s2  # 교집합
s1 | s2  # 합집합
s1 - s2  # 차집합`,
    hint:"d.get(key, 기본값)으로 KeyError 방지. set()으로 빈 집합 ({} 는 빈 dict!).",
    concept: {
      title: "딕셔너리 & 집합 — 전체 개요",
      desc: `딕셔너리는 키-값 저장, 집합(set)은 중복 없는 데이터 저장입니다. 빈도 세기, 그룹핑, 중복 제거는 코딩테스트 최빈출 패턴입니다.`,
      syntax: `# 딕셔너리
d = {'a': 1, 'b': 2}
d['a']              # 1
d.get('c', 0)       # 0 (없으면 기본값)
for k, v in d.items():  # 키-값 순회

# 빈도 패턴
cnt = {}
for x in arr:
    cnt[x] = cnt.get(x, 0) + 1

# Counter
from collections import Counter
cnt = Counter(arr)
cnt.most_common(2)

# 집합 (set)
s = set(arr)        # 중복 제거
s1 & s2  # 교집합
s1 | s2  # 합집합
s1 - s2  # 차집합`,
      note: `💡 d['key'] KeyError 주의! d.get('key', 기본값)이 안전. {} 는 빈 dict, set()이 빈 집합.`,
      dart: `Map<String,int> d = {};
d['a'] ?? 0  →  d.get('a', 0)
d.containsKey('k')  →  'k' in d
Set<int> s = {}  →  s = set()`
    },
    drills: [
      { title:"드릴 1 — 딕셔너리 기본", prompt:"딕셔너리 {'name':'수','age':25}에서 이름을 출력하세요.", full:"d = {'name':'수','age':25}\nprint(d['name'])", blank:"print(d[___])", answer:"'name'", options:["'name'","name","0","d.name"], blocks:["d = {'name':'수','age':25}","print(d['name'])"], hint:"딕셔너리는 d['키'] 형태로 접근합니다." },
      { title:"드릴 2 — get으로 안전 조회", prompt:"딕셔너리에 없는 키 'score'를 조회할 때 기본값 0을 반환하세요.", full:"d = {'name':'수'}\nprint(d.get('score', 0))", blank:"print(d.___('score', 0))", answer:"get", options:["get","find","fetch","search"], blocks:["d = {'name':'수'}","print(d.get('score', 0))"], hint:"get(키, 기본값)으로 KeyError 없이 안전하게 조회합니다." },
      { title:"드릴 3 — 빈도 세기 패턴", prompt:"리스트 ['a','b','a','c']의 빈도를 딕셔너리로 세세요.", full:"arr = ['a','b','a','c']\ncnt = {}\nfor x in arr:\n    cnt[x] = cnt.get(x, 0) + 1\nprint(cnt)", blank:"cnt[x] = cnt.get(x, 0) ___ 1", answer:"+ 1", options:["+ 1","- 1","* 1","+="], blocks:["arr = ['a','b','a','c']","cnt = {}","for x in arr:","    cnt[x] = cnt.get(x, 0) + 1","print(cnt)"], hint:"없으면 0 + 1 = 1로 시작, 있으면 기존값 + 1." },
      { title:"드릴 4 — set 중복 제거", prompt:"리스트 [1,2,2,3,3,3]의 중복을 제거하세요.", full:"arr = [1,2,2,3,3,3]\nunique = list(set(arr))\nprint(unique)", blank:"unique = list(___(arr))", answer:"set", options:["set","unique","list","dedup"], blocks:["arr = [1,2,2,3,3,3]","unique = list(set(arr))","print(unique)"], hint:"set()은 중복을 자동으로 제거합니다." }
    ]
  },

  { cat:5, id:1, title:"딕셔너리 기본 조작",
    prompt:"딕셔너리의 접근, 추가, 수정, 안전 조회 방법을 연습합니다.",
    full:"person = {'name': '수', 'age': 25}\nprint(person['name'])",
    hint:"딕셔너리는 person['키'] 형태로 접근합니다.",
    concept: {
      title: "딕셔너리 기본 — 키-값 접근과 get()",
      desc: `딕셔너리(dict)는 키-값 쌍으로 데이터를 저장합니다. d['key']로 접근하면 없을 때 KeyError가 납니다. d.get('key', 기본값)으로 안전하게 조회하세요. 코딩테스트 필수 패턴입니다.`,
      syntax: `d = {'name': '수', 'age': 25}

# 접근
d['name']              # '수'
d.get('name', '없음')  # '수'
d.get('email', 'N/A')  # 'N/A' (없어도 에러 없음)

# 추가/수정
d['score'] = 90       # 추가
d['age'] = 26         # 수정

# 키 확인
'name' in d    # True
'email' in d   # False

# 순회
for k in d:           # 키만
for k, v in d.items():  # 키-값 동시

# 빈도 세기 핵심 패턴
cnt = {}
for x in arr:
    cnt[x] = cnt.get(x, 0) + 1`,
      note: `💡 d['key'] 키 없으면 KeyError! d.get('key', 기본값)으로 안전하게. 코딩테스트에선 get() 쓰세요.`,
      dart: `Map<String,int> d = {};
d['a'] = 1;         →  d['a'] = 1
d['a'] ?? 0         →  d.get('a', 0)
d.containsKey('a')  →  'a' in d`
    },
    drills: [
      { title:"드릴 1 — 키로 값 접근", prompt:"딕셔너리 {'name':'수','age':25}에서 이름을 꺼내 출력하세요.", full:"person = {'name': '수', 'age': 25}\nprint(person['name'])", blank:"print(person[___])", answer:"'name'", options:["'name'","name","0","person.name"], blocks:["person = {'name': '수', 'age': 25}","print(person['name'])"], hint:"딕셔너리는 person['키'] 형태로 접근합니다." },
      { title:"드릴 2 — get()으로 안전 조회", prompt:"딕셔너리에 없는 키 'science'를 조회할 때 기본값 0을 반환하도록 하세요.", full:"scores = {'math': 90, 'english': 85}\nprint(scores.get('science', 0))", blank:"print(scores.___('science', 0))", answer:"get", options:["get","find","fetch","search"], blocks:["scores = {'math': 90, 'english': 85}","print(scores.get('science', 0))"], hint:"get(키, 기본값): 키가 없어도 KeyError 없이 기본값을 반환합니다." },
      { title:"드릴 3 — 빈도 세기 패턴", prompt:"리스트 ['a','b','a','c','b','a']에서 각 요소의 빈도를 딕셔너리로 세세요.", full:"arr = ['a', 'b', 'a', 'c', 'b', 'a']\ncnt = {}\nfor x in arr:\n    cnt[x] = cnt.get(x, 0) + 1\nprint(cnt)", blank:"cnt[x] = cnt.get(x, 0) ___ 1", answer:"+ 1", options:["+ 1","- 1","* 1","+="], blocks:["arr = ['a', 'b', 'a', 'c', 'b', 'a']","cnt = {}","for x in arr:","    cnt[x] = cnt.get(x, 0) + 1","print(cnt)"], hint:"없으면 0, 있으면 기존값 + 1. 핵심 빈도 세기 패턴입니다!" },
      { title:"드릴 4 — items()로 순회", prompt:"딕셔너리 {'a':1,'b':2,'c':3}의 키와 값을 'a: 1' 형식으로 출력하세요.", full:"d = {'a': 1, 'b': 2, 'c': 3}\nfor key, val in d.items():\n    print(f'{key}: {val}')", blank:"for key, val in d.___():", answer:"items", options:["items","pairs","each","entries"], blocks:["d = {'a': 1, 'b': 2, 'c': 3}","for key, val in d.items():","    print(f'{key}: {val}')"], hint:"d.items()는 (키, 값) 쌍을 반환합니다." },
      { title:"드릴 5 — Counter로 최빈값", prompt:"Counter를 사용해 리스트에서 가장 많이 등장하는 값 상위 2개를 출력하세요.", full:"from collections import Counter\narr = ['a', 'b', 'a', 'c', 'b', 'a']\ncnt = Counter(arr)\nprint(cnt.most_common(2))", blank:"from collections import ___", answer:"Counter", options:["Counter","count","frequency","dict"], blocks:["from collections import Counter","arr = ['a', 'b', 'a', 'c', 'b', 'a']","cnt = Counter(arr)","print(cnt.most_common(2))"], hint:"Counter는 빈도 세기 전용 딕셔너리. most_common(n)으로 상위 n개를 바로 구합니다." }
    ]
  },
  { cat:5, id:2, title:"집합(set) 연산",
    prompt:"set으로 중복 제거, 교집합, 합집합, 차집합을 처리하는 방법을 연습합니다.",
    full:"arr = [1, 2, 2, 3, 3, 3]\nunique = list(set(arr))\nprint(unique)",
    hint:"set()은 중복을 자동 제거합니다. &, |, - 로 집합 연산을 합니다.",
    concept: {
      title: "set — 집합 연산 (중복 제거, &, |, -)",
      desc: `set은 중복 없는 집합 자료형입니다. 중복 제거, 교집합, 합집합, 차집합 연산을 지원합니다. 빈 set는 {} 아닌 set()으로 만들어야 합니다! {}는 빈 dict입니다.`,
      syntax: `# 생성
s = {1, 2, 3}         # 리터럴
s = set([1,2,2,3,3])  # 중복 제거 → {1,2,3}
s = set()             # 빈 set ({}는 dict!)

# 집합 연산 (연산자)
a = {1,2,3,4}; b = {3,4,5,6}
a & b    # 교집합 → {3,4}
a | b    # 합집합 → {1,2,3,4,5,6}
a - b    # 차집합 → {1,2}

# 같은 결과 (메서드)
a.intersection(b)
a.union(b)
a.difference(b)

# 포함 확인 (O(1) — list보다 빠름!)
3 in a    # True`,
      note: `💡 set에 {} 사용 금지! set()로 빈 집합 생성. 딕셔너리 키와 동일한 해시 기반 → 포함 확인 O(1).`,
      dart: `Set<int> s = {1,2,3};
s.intersection(other)  →  s & other
s.union(other)         →  s | other`
    },
    drills: [
      { title:"드릴 1 — set으로 중복 제거", prompt:"리스트 [1,2,2,3,3,3]의 중복을 제거해 고유한 요소만 남긴 리스트를 만드세요.", full:"arr = [1, 2, 2, 3, 3, 3]\nunique = list(set(arr))\nprint(unique)", blank:"unique = list(___(arr))", answer:"set", options:["set","unique","dedup","distinct"], blocks:["arr = [1, 2, 2, 3, 3, 3]","unique = list(set(arr))","print(unique)"], hint:"set()은 중복을 자동으로 제거합니다. list()로 다시 변환하세요." },
      { title:"드릴 2 — 교집합", prompt:"두 집합 {1,2,3,4}와 {3,4,5,6}의 공통 요소를 구하세요.", full:"a = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\ncommon = a & b\nprint(common)", blank:"common = a ___ b", answer:"&", options:["&","and","|","intersection"], blocks:["a = {1, 2, 3, 4}","b = {3, 4, 5, 6}","common = a & b","print(common)"], hint:"& 는 교집합, | 는 합집합, - 는 차집합입니다." },
      { title:"드릴 3 — 합집합과 차집합", prompt:"집합 a={1,2,3}, b={2,3,4}의 합집합과 차집합을 각각 출력하세요.", full:"a = {1, 2, 3}\nb = {2, 3, 4}\nprint(a | b)  # 합집합\nprint(a - b)  # 차집합", blank:"print(a ___ b)  # 합집합", answer:"|", options:["|","&","+","or"], blocks:["a = {1, 2, 3}","b = {2, 3, 4}","print(a | b)","print(a - b)"], hint:"| 는 합집합(둘 다 포함), - 는 차집합(a에만 있는 것)입니다." },
      { title:"드릴 4 — 딕셔너리 컴프리헨션", prompt:"리스트 [1,2,3,4,5]를 이용해 각 숫자를 키로, 제곱을 값으로 하는 딕셔너리를 만드세요.", full:"arr = [1, 2, 3, 4, 5]\nsq_dict = {x: x**2 for x in arr}\nprint(sq_dict)", blank:"sq_dict = {x: x**2 ___ x in arr}", answer:"for", options:["for","in","if","while"], blocks:["arr = [1, 2, 3, 4, 5]","sq_dict = {x: x**2 for x in arr}","print(sq_dict)"], hint:"딕셔너리 컴프리헨션: {키: 값 for 변수 in 이터러블}" }
    ]
  },
  { cat:5, id:3, title:"get()으로 안전하게 조회",
    prompt:"딕셔너리에 없는 키를 조회할 때 KeyError 없이 기본값을 반환하는 코드를 완성하세요. 'science' 키가 없으면 0을 반환합니다.",
    full:"scores = {'math': 90, 'english': 85}\nprint(scores.get('math', 0))     # 90\nprint(scores.get('science', 0))  # 0 (없으면 기본값)",
    hint:"get(키, 기본값): 키가 없어도 KeyError 없이 기본값을 반환합니다. 코딩테스트 필수!",
    concept: {
      title: "get(key, default) — KeyError 방지",
      desc: `딕셔너리에 없는 키를 []로 조회하면 KeyError가 발생합니다. get(key, 기본값)을 사용하면 키가 없어도 기본값을 반환해 에러를 방지합니다. 코딩테스트에서 빈도 세기 패턴의 핵심입니다.`,
      syntax: `d = {'math': 90, 'english': 85}

# [] 접근 — 없으면 에러!
d['science']         # KeyError!

# get() — 없으면 기본값
d.get('science', 0)  # → 0 (기본값)
d.get('math', 0)     # → 90 (있으면 값)

# 빈도 세기 황금 패턴
cnt = {}
for x in arr:
    cnt[x] = cnt.get(x, 0) + 1
# 없으면 0 + 1 = 1로 시작
# 있으면 기존값 + 1

# setdefault도 가능
cnt.setdefault(x, 0)
cnt[x] += 1`,
      note: `💡 cnt.get(x, 0) + 1 — 이 패턴을 통째로 외우세요. 코딩테스트 빈도 세기 문제 핵심!`,
      dart: `d['key'] ?? 0          →  d.get('key', 0)
d.putIfAbsent('k', ()=>0);  →  d.setdefault('k', 0)`
    },
    drills: [
      { title:"드릴 1 — get()으로 안전하게 조회", prompt:"딕셔너리에 없는 키를 조회할 때 KeyError 없이 기본값을 반환하는 코드를 완성하세요. 'science' 키가 없으면 0을 반환합니다.", full:"scores = {'math': 90, 'english': 85}\nprint(scores.get('math', 0))     # 90\nprint(scores.get('science', 0))  # 0 (없으면 기본값)", blank:"print(scores.___(  'science', 0))", answer:"get", options:["get","find","fetch","search"], blocks:["scores = {'math': 90, 'english': 85}","print(scores.get('math', 0))","print(scores.get('science', 0))"], hint:"get(키, 기본값): 키가 없어도 KeyError 없이 기본값을 반환합니다. 코딩테스트 필수!" },
      { title:"드릴 2 — get으로 기본값 설정", prompt:"딕셔너리 <code>d = {'a':1}</code>에서 없는 키 'b'를 get으로 조회하되 기본값 -1을 반환하세요.", full:"d = {'a':1}\nprint(d.get('b', -1))", blank:"print(d.get('b', ___))", answer:"-1", options:["-1", "0", "None", "''"], blocks:["d = {'a':1}", "print(d.get('b', -1))"], hint:"get(키, 기본값): 키가 없을 때 기본값을 반환합니다." },
      { title:"드릴 3 — get으로 빈도 카운팅", prompt:"리스트 <code>['a','b','a','c']</code>의 각 요소 빈도를 get을 이용해 딕셔너리로 만드세요.", full:"arr = ['a','b','a','c']\ncnt = {}\nfor x in arr:\n    cnt[x] = cnt.get(x, 0) + 1\nprint(cnt)", blank:"cnt[x] = cnt.get(x, ___ ) + 1", answer:"0", options:["0", "1", "-1", "None"], blocks:["arr = ['a','b','a','c']", "cnt = {}", "for x in arr:", "    cnt[x] = cnt.get(x, 0) + 1", "print(cnt)"], hint:"처음 등장하면 get이 0을 반환하고 +1로 1이 됩니다." }
    ]
  },
  { cat:5, id:4, title:"딕셔너리 빈도 세기 패턴",
    prompt:"리스트 <code>arr = ['a', 'b', 'a', 'c', 'b', 'a']</code>에서 각 요소가 몇 번 등장하는지 딕셔너리로 세는 코드를 완성하세요. 결과: <code>{'a': 3, 'b': 2, 'c': 1}</code>",
    full:"arr = ['a', 'b', 'a', 'c', 'b', 'a']\ncounter = {}\nfor x in arr:\n    counter[x] = counter.get(x, 0) + 1\nprint(counter)",
    hint:"빈도 세기 핵심 패턴: counter.get(x, 0) + 1 → 없으면 0, 있으면 기존값 + 1",
    concept: {
      title: "딕셔너리 빈도 세기 패턴 심화",
      desc: `빈도 세기는 코딩테스트에서 최빈출 패턴입니다. get() 패턴, Counter, defaultdict(int) 세 가지 방법을 모두 알아두세요. Counter는 가장 간결하지만, get() 패턴의 동작 원리를 이해하는 게 중요합니다.`,
      syntax: `arr = ['a', 'b', 'a', 'c', 'b', 'a']

# 방법 1: get() 패턴 (직접 구현)
cnt = {}
for x in arr:
    cnt[x] = cnt.get(x, 0) + 1

# 방법 2: Counter (가장 간결)
from collections import Counter
cnt = Counter(arr)  # Counter({'a':3,'b':2,'c':1})
cnt.most_common(2)  # 상위 2개: [('a',3),('b',2)]

# 방법 3: defaultdict(int)
from collections import defaultdict
cnt = defaultdict(int)
for x in arr:
    cnt[x] += 1  # 없어도 0으로 자동 시작

# 최빈값 찾기
mode = max(cnt, key=cnt.get)`,
      note: `💡 코딩테스트: Counter 임포트 가능한지 확인. 불가하면 get() 패턴. max(cnt, key=cnt.get)으로 최빈값.`,
      dart: `// Dart에는 Counter 없음. 직접 구현 필요
Map<String,int> cnt = {};
for (var x in arr) cnt[x] = (cnt[x] ?? 0) + 1;`
    },
    drills: [
      { title:"드릴 1 — 딕셔너리 빈도 세기 패턴", prompt:"리스트 <code>arr = ['a', 'b', 'a', 'c', 'b', 'a']</code>에서 각 요소가 몇 번 등장하는지 딕셔너리로 세는 코드를 완성하세요. 결과: <code>{'a': 3, 'b': 2, 'c': 1}</code>", full:"arr = ['a', 'b', 'a', 'c', 'b', 'a']\ncounter = {}\nfor x in arr:\n    counter[x] = counter.get(x, 0) + 1\nprint(counter)", blank:"counter[x] = counter.get(x, 0) ___ 1", answer:"+ 1", options:["+ 1","- 1","* 1","+="], blocks:["arr = ['a', 'b', 'a', 'c', 'b', 'a']","counter = {}","for x in arr:","    counter[x] = counter.get(x, 0) + 1","print(counter)"], hint:"빈도 세기 핵심 패턴: counter.get(x, 0) + 1 → 없으면 0, 있으면 기존값 + 1" },
      { title:"드릴 2 — 단어 빈도 세기", prompt:"문자열 <code>'apple banana apple cherry banana apple'</code>에서 각 단어의 빈도를 딕셔너리로 출력하세요.", full:"s = 'apple banana apple cherry banana apple'\ncounter = {}\nfor word in s.split():\n    counter[word] = counter.get(word, 0) + 1\nprint(counter)", blank:"for word in s.___():\n    counter[word] = counter.get(word, 0) + 1", answer:"split", options:["split", "strip", "join", "replace"], blocks:["s = 'apple banana apple cherry banana apple'", "counter = {}", "for word in s.split():", "    counter[word] = counter.get(word, 0) + 1", "print(counter)"], hint:"split()으로 문자열을 단어로 분리한 뒤 각 단어를 키로 사용합니다." },
      { title:"드릴 3 — 빈도 딕셔너리에서 최빈값 찾기", prompt:"리스트 <code>[1,2,2,3,3,3,4]</code>의 빈도를 딕셔너리로 만든 뒤 가장 많이 등장한 값을 출력하세요.", full:"arr = [1,2,2,3,3,3,4]\ncnt = {}\nfor x in arr:\n    cnt[x] = cnt.get(x, 0) + 1\nmode = max(cnt, key=cnt.get)\nprint(mode)", blank:"mode = max(cnt, key=cnt.___)", answer:"get", options:["get", "values", "keys", "items"], blocks:["arr = [1,2,2,3,3,3,4]", "cnt = {}", "for x in arr:", "    cnt[x] = cnt.get(x, 0) + 1", "mode = max(cnt, key=cnt.get)", "print(mode)"], hint:"max(cnt, key=cnt.get)은 value가 가장 큰 key를 반환합니다." }
    ]
  },
  { cat:5, id:5, title:"딕셔너리 순회 — items()",
    prompt:"딕셔너리 <code>d = {'a': 1, 'b': 2, 'c': 3}</code>의 키와 값을 <code>'a: 1'</code> 형식으로 출력하는 코드를 완성하세요. 키-값 쌍을 동시에 꺼내는 메서드를 사용합니다.",
    full:"d = {'a': 1, 'b': 2, 'c': 3}\nfor key, val in d.items():\n    print(f'{key}: {val}')",
    hint:"d.items()는 (키, 값) 쌍을 반환합니다. d.keys(), d.values()도 있어요.",
    concept: {
      title: "items() / keys() / values() — 딕셔너리 순회",
      desc: `딕셔너리를 순회하는 세 가지 방법입니다. for k in d는 키만, d.items()는 키-값 쌍, d.values()는 값만 순회합니다. items()가 가장 자주 사용됩니다.`,
      syntax: `d = {'a': 1, 'b': 2, 'c': 3}

# 키만 순회 (기본)
for k in d:
    print(k)     # a, b, c

# 키-값 동시 순회 (most common)
for k, v in d.items():
    print(f"{k}: {v}")  # a: 1, b: 2, c: 3

# 값만 순회
for v in d.values():
    print(v)     # 1, 2, 3

# 키 리스트 / 값 리스트
list(d.keys())    # ['a','b','c']
list(d.values())  # [1, 2, 3]

# 합계
sum(d.values())   # 6`,
      note: `💡 d.items()가 코딩테스트에서 가장 많이 쓰임. 키-값을 동시에 쓸 때는 for k, v in d.items():`,
      dart: `for (var k in d.keys)     →  for k in d:
for (var e in d.entries)  →  for k, v in d.items():
d.values                  →  d.values()`
    },
    drills: [
      { title:"드릴 1 — 딕셔너리 순회 — items()", prompt:"딕셔너리 <code>d = {'a': 1, 'b': 2, 'c': 3}</code>의 키와 값을 <code>'a: 1'</code> 형식으로 출력하는 코드를 완성하세요. 키-값 쌍을 동시에 꺼내는 메서드를 사용합니다.", full:"d = {'a': 1, 'b': 2, 'c': 3}\nfor key, val in d.items():\n    print(f'{key}: {val}')", blank:"for key, val in d.___():", answer:"items", options:["items","pairs","each","entries"], blocks:["d = {'a': 1, 'b': 2, 'c': 3}","for key, val in d.items():","    print(f'{key}: {val}')"], hint:"d.items()는 (키, 값) 쌍을 반환합니다. d.keys(), d.values()도 있어요." },
      { title:"드릴 2 — keys()와 values() 순회", prompt:"딕셔너리 <code>{'a':1,'b':2,'c':3}</code>의 키만, 값만 각각 출력하세요.", full:"d = {'a':1,'b':2,'c':3}\nfor k in d.keys():\n    print(k)\nfor v in d.values():\n    print(v)", blank:"for k in d.___():\n    print(k)", answer:"keys", options:["keys", "values", "items", "get"], blocks:["d = {'a':1,'b':2,'c':3}", "for k in d.keys():", "    print(k)", "for v in d.values():", "    print(v)"], hint:"keys()는 키 뷰, values()는 값 뷰를 반환합니다." },
      { title:"드릴 3 — items()로 조건부 필터링", prompt:"딕셔너리 <code>{'a':10,'b':3,'c':7,'d':1}</code>에서 값이 5 이상인 키-값 쌍을 출력하세요.", full:"d = {'a':10,'b':3,'c':7,'d':1}\nfor k, v in d.items():\n    if v >= 5:\n        print(k, v)", blank:"for k, v in d.___():\n    if v >= 5:", answer:"items", options:["items", "keys", "values", "get"], blocks:["d = {'a':10,'b':3,'c':7,'d':1}", "for k, v in d.items():", "    if v >= 5:", "        print(k, v)"], hint:"items()는 (키, 값) 튜플 쌍을 반환합니다. 조건 필터링에 유용합니다." }
    ]
  },
  { cat:5, id:6, title:"in으로 키 존재 확인",
    prompt:"딕셔너리 <code>d = {'a': 1, 'b': 2}</code>에 키 'a'가 존재하면 '키 존재'를 출력하는 코드를 완성하세요.",
    full:"d = {'a': 1, 'b': 2}\nif 'a' in d:\n    print('키 존재')",
    hint:"in 키워드는 딕셔너리의 키 존재 여부를 확인합니다.",
    concept: {
      title: "딕셔너리 & 집합 심화 응용",
      desc: `딕셔너리와 set의 고급 활용 패턴입니다. 코딩테스트에서 중복 제거, 그룹핑, 키 매핑 등에 활용됩니다.`,
      syntax: `# 딕셔너리 병합 (Python 3.9+)
d1 = {'a':1}; d2 = {'b':2}
merged = {**d1, **d2}    # {'a':1,'b':2}
d1.update(d2)            # d1에 d2 병합

# 딕셔너리로 그룹핑
from collections import defaultdict
groups = defaultdict(list)
for k, v in data:
    groups[k].append(v)

# set으로 중복 제거 + 정렬
unique = sorted(set(arr))

# 딕셔너리 값 정렬
sorted_d = sorted(d.items(), key=lambda x: x[1])
# [(키, 값), ...] 값 기준 정렬`,
      note: `💡 {**d1, **d2}로 딕셔너리 병합. 겹치는 키는 오른쪽(d2) 값이 우선합니다.`,
      dart: `d1.addAll(d2)  →  d1.update(d2)
{...d1, ...d2}  →  {**d1, **d2}  (spread)`
    },
    drills: [
      { title:"드릴 1 — in으로 키 존재 확인", prompt:"딕셔너리 <code>d = {'a': 1, 'b': 2}</code>에 키 'a'가 존재하면 '키 존재'를 출력하는 코드를 완성하세요.", full:"d = {'a': 1, 'b': 2}\nif 'a' in d:\n    print('키 존재')", blank:"if 'a' ___ d:", answer:"in", options:["in","==","has","contains"], blocks:["d = {'a': 1, 'b': 2}","if 'a' in d:","    print('키 존재')"], hint:"in 키워드는 딕셔너리의 키 존재 여부를 확인합니다." },
      { title:"드릴 2 — not in으로 키 없음 확인", prompt:"딕셔너리 <code>d = {'x':1,'y':2}</code>에서 키 'z'가 없으면 '없음'을 출력하세요.", full:"d = {'x':1,'y':2}\nif 'z' not in d:\n    print('없음')", blank:"if 'z' ___ d:\n    print('없음')", answer:"not in ", options:["not in ", "in ", "!= ", "is not "], blocks:["d = {'x':1,'y':2}", "if 'z' not in d:", "    print('없음')"], hint:"not in은 키가 딕셔너리에 없을 때 True입니다." },
      { title:"드릴 3 — 키 존재 여부에 따라 값 업데이트", prompt:"딕셔너리 <code>d = {'a':1}</code>에서 키 'b'가 없으면 추가, 있으면 값을 2배로 업데이트하는 코드를 완성하세요.", full:"d = {'a':1}\nkey = 'b'\nif key not in d:\n    d[key] = 0\nd[key] *= 2\nprint(d)", blank:"if key ___ d:\n    d[key] = 0", answer:"not in ", options:["not in ", "in ", "== ", "!= "], blocks:["d = {'a':1}", "key = 'b'", "if key not in d:", "    d[key] = 0", "d[key] *= 2", "print(d)"], hint:"not in으로 키 미존재를 확인 후 초기화하면 항상 안전하게 값을 업데이트할 수 있습니다." }
    ]
  },
  { cat:5, id:7, title:"set으로 중복 제거",
    prompt:"리스트 <code>arr = [1, 2, 2, 3, 3, 3]</code>의 중복을 제거해 고유한 요소만 남긴 리스트 <code>unique</code>를 만드는 코드를 완성하세요.",
    full:"arr = [1, 2, 2, 3, 3, 3]\nunique = list(set(arr))\nprint(unique)",
    hint:"set()은 중복을 자동으로 제거합니다. 다시 리스트가 필요하면 list()로 변환하세요.",
    concept: {
      title: "딕셔너리 & 집합 심화 응용",
      desc: `딕셔너리와 set의 고급 활용 패턴입니다. 코딩테스트에서 중복 제거, 그룹핑, 키 매핑 등에 활용됩니다.`,
      syntax: `# 딕셔너리 병합 (Python 3.9+)
d1 = {'a':1}; d2 = {'b':2}
merged = {**d1, **d2}    # {'a':1,'b':2}
d1.update(d2)            # d1에 d2 병합

# 딕셔너리로 그룹핑
from collections import defaultdict
groups = defaultdict(list)
for k, v in data:
    groups[k].append(v)

# set으로 중복 제거 + 정렬
unique = sorted(set(arr))

# 딕셔너리 값 정렬
sorted_d = sorted(d.items(), key=lambda x: x[1])
# [(키, 값), ...] 값 기준 정렬`,
      note: `💡 {**d1, **d2}로 딕셔너리 병합. 겹치는 키는 오른쪽(d2) 값이 우선합니다.`,
      dart: `d1.addAll(d2)  →  d1.update(d2)
{...d1, ...d2}  →  {**d1, **d2}  (spread)`
    },
    drills: [
      { title:"드릴 1 — set으로 중복 제거", prompt:"리스트 <code>arr = [1, 2, 2, 3, 3, 3]</code>의 중복을 제거해 고유한 요소만 남긴 리스트 <code>unique</code>를 만드는 코드를 완성하세요.", full:"arr = [1, 2, 2, 3, 3, 3]\nunique = list(set(arr))\nprint(unique)", blank:"unique = list(___(arr))", answer:"set", options:["set","unique","dedup","distinct"], blocks:["arr = [1, 2, 2, 3, 3, 3]","unique = list(set(arr))","print(unique)"], hint:"set()은 중복을 자동으로 제거합니다. 다시 리스트가 필요하면 list()로 변환하세요." },
      { title:"드릴 2 — set으로 교집합 구하기", prompt:"두 리스트 <code>[1,2,3,4]</code>와 <code>[3,4,5,6]</code>의 공통 요소를 집합으로 찾아 출력하세요.", full:"a = [1,2,3,4]\nb = [3,4,5,6]\ncommon = set(a) & set(b)\nprint(common)", blank:"common = set(a) ___ set(b)", answer:"& ", options:["& ", "| ", "- ", "^ "], blocks:["a = [1,2,3,4]", "b = [3,4,5,6]", "common = set(a) & set(b)", "print(common)"], hint:"& 연산자는 두 집합의 교집합을 반환합니다." },
      { title:"드릴 3 — 중복 제거 후 정렬", prompt:"리스트 <code>[3,1,4,1,5,9,2,6,5,3]</code>에서 중복을 제거하고 오름차순으로 정렬하세요.", full:"arr = [3,1,4,1,5,9,2,6,5,3]\nresult = sorted(set(arr))\nprint(result)", blank:"result = sorted(___(arr))", answer:"set", options:["set", "list", "dict", "tuple"], blocks:["arr = [3,1,4,1,5,9,2,6,5,3]", "result = sorted(set(arr))", "print(result)"], hint:"set()으로 중복 제거 후 sorted()로 정렬합니다." }
    ]
  },
  { cat:5, id:8, title:"집합 교집합 연산",
    prompt:"두 집합 <code>a = {1, 2, 3, 4}</code>와 <code>b = {3, 4, 5, 6}</code>의 공통 요소를 구해 <code>common</code>에 저장하는 코드를 완성하세요. 결과: <code>{3, 4}</code>",
    full:"a = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\ncommon = a & b\nprint(common)  # {3, 4}",
    hint:"집합 연산: & 교집합, | 합집합, - 차집합. 코딩테스트에서 자주 나와요!",
    concept: {
      title: "딕셔너리 & 집합 심화 응용",
      desc: `딕셔너리와 set의 고급 활용 패턴입니다. 코딩테스트에서 중복 제거, 그룹핑, 키 매핑 등에 활용됩니다.`,
      syntax: `# 딕셔너리 병합 (Python 3.9+)
d1 = {'a':1}; d2 = {'b':2}
merged = {**d1, **d2}    # {'a':1,'b':2}
d1.update(d2)            # d1에 d2 병합

# 딕셔너리로 그룹핑
from collections import defaultdict
groups = defaultdict(list)
for k, v in data:
    groups[k].append(v)

# set으로 중복 제거 + 정렬
unique = sorted(set(arr))

# 딕셔너리 값 정렬
sorted_d = sorted(d.items(), key=lambda x: x[1])
# [(키, 값), ...] 값 기준 정렬`,
      note: `💡 {**d1, **d2}로 딕셔너리 병합. 겹치는 키는 오른쪽(d2) 값이 우선합니다.`,
      dart: `d1.addAll(d2)  →  d1.update(d2)
{...d1, ...d2}  →  {**d1, **d2}  (spread)`
    },
    drills: [
      { title:"드릴 1 — 집합 교집합 연산", prompt:"두 집합 <code>a = {1, 2, 3, 4}</code>와 <code>b = {3, 4, 5, 6}</code>의 공통 요소를 구해 <code>common</code>에 저장하는 코드를 완성하세요. 결과: <code>{3, 4}</code>", full:"a = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\ncommon = a & b\nprint(common)  # {3, 4}", blank:"common = a ___ b", answer:"&", options:["&","and","|","intersection"], blocks:["a = {1, 2, 3, 4}","b = {3, 4, 5, 6}","common = a & b","print(common)"], hint:"집합 연산: & 교집합, | 합집합, - 차집합. 코딩테스트에서 자주 나와요!" },
      { title:"드릴 2 — 합집합과 차집합", prompt:"집합 <code>a={1,2,3,4}</code>와 <code>b={3,4,5,6}</code>의 합집합과 차집합(a-b)을 출력하세요.", full:"a = {1,2,3,4}\nb = {3,4,5,6}\nprint(a | b)\nprint(a - b)", blank:"print(a ___ b)  # 합집합\nprint(a - b)", answer:"| ", options:["| ", "& ", "+ ", "^ "], blocks:["a = {1,2,3,4}", "b = {3,4,5,6}", "print(a | b)", "print(a - b)"], hint:"| 는 합집합(두 집합의 모든 요소), - 는 차집합(a에만 있는 요소)입니다." },
      { title:"드릴 3 — 대칭 차집합", prompt:"집합 <code>a={1,2,3,4}</code>와 <code>b={3,4,5,6}</code>의 대칭 차집합(한쪽에만 있는 요소)을 출력하세요.", full:"a = {1,2,3,4}\nb = {3,4,5,6}\nprint(a ^ b)", blank:"print(a ___ b)", answer:"^ ", options:["^ ", "| ", "& ", "- "], blocks:["a = {1,2,3,4}", "b = {3,4,5,6}", "print(a ^ b)"], hint:"^ 는 대칭 차집합: 두 집합 중 한쪽에만 있는 요소들입니다." }
    ]
  },
  { cat:5, id:9, title:"Counter로 빈도 쉽게",
    prompt:"<code>collections</code> 모듈에서 빈도 계산 전용 클래스를 import해 리스트의 각 요소 빈도와 상위 2개를 구하는 코드를 완성하세요.",
    full:"from collections import Counter\narr = ['a', 'b', 'a', 'c', 'b', 'a']\ncnt = Counter(arr)\nprint(cnt.most_common(2))",
    hint:"Counter는 빈도 세기 전용 딕셔너리입니다. most_common(n)으로 상위 n개를 바로 구해요.",
    concept: {
      title: "Counter — 빈도 세기 전용 딕셔너리",
      desc: `collections.Counter는 요소의 빈도를 자동으로 세는 딕셔너리 서브클래스입니다. most_common()으로 빈도 높은 순 정렬, 산술 연산, 집합 연산도 지원합니다.`,
      syntax: `from collections import Counter

arr = ['a','b','a','c','b','a']
cnt = Counter(arr)
# Counter({'a':3, 'b':2, 'c':1})

cnt['a']              # 3
cnt.most_common(2)    # [('a',3),('b',2)]
cnt.most_common()[-1] # 최소 빈도

# 문자열도 가능
Counter("banana")  # {'a':3,'n':2,'b':1}

# 두 Counter 덧셈
c1 = Counter('aab')
c2 = Counter('bbc')
c1 + c2  # Counter({'b':3,'a':2,'c':1})`,
      note: `💡 Counter는 없는 키 접근 시 0 반환 (KeyError 없음). 빈도 문제에 Counter 먼저 고려!`,
      dart: `// Dart에는 Counter 없음. 직접 구현:
Map<String,int> cnt = {};
for (var x in arr) cnt[x] = (cnt[x] ?? 0) + 1;`
    },
    drills: [
      { title:"드릴 1 — Counter로 빈도 쉽게", prompt:"<code>collections</code> 모듈에서 빈도 계산 전용 클래스를 import해 리스트의 각 요소 빈도와 상위 2개를 구하는 코드를 완성하세요.", full:"from collections import Counter\narr = ['a', 'b', 'a', 'c', 'b', 'a']\ncnt = Counter(arr)\nprint(cnt.most_common(2))", blank:"from collections import ___", answer:"Counter", options:["Counter","count","frequency","dict"], blocks:["from collections import Counter","arr = ['a', 'b', 'a', 'c', 'b', 'a']","cnt = Counter(arr)","print(cnt.most_common(2))"], hint:"Counter는 빈도 세기 전용 딕셔너리입니다. most_common(n)으로 상위 n개를 바로 구해요." },
      { title:"드릴 2 — Counter로 최빈 2개", prompt:"리스트 <code>['a','b','a','c','b','a','d']</code>에서 Counter를 사용해 가장 많이 등장한 상위 2개를 출력하세요.", full:"from collections import Counter\narr = ['a','b','a','c','b','a','d']\ncnt = Counter(arr)\nprint(cnt.most_common(2))", blank:"print(cnt.most_common(___))", answer:"2", options:["2", "1", "3", "-1"], blocks:["from collections import Counter", "arr = ['a','b','a','c','b','a','d']", "cnt = Counter(arr)", "print(cnt.most_common(2))"], hint:"most_common(n)은 가장 많이 등장한 상위 n개를 (요소, 개수) 형태로 반환합니다." },
      { title:"드릴 3 — Counter로 문자 빈도 분석", prompt:"문자열 <code>'programming'</code>의 각 문자 빈도를 Counter로 구하고 가장 많은 문자를 출력하세요.", full:"from collections import Counter\ns = 'programming'\ncnt = Counter(s)\nprint(cnt.most_common(1)[0][0])", blank:"print(cnt.most_common(1)[0][___])", answer:"0", options:["0", "1", "-1", "2"], blocks:["from collections import Counter", "s = 'programming'", "cnt = Counter(s)", "print(cnt.most_common(1)[0][0])"], hint:"most_common(1)[0]은 (문자, 개수) 튜플, [0]은 그 중 문자(키)를 뜻합니다." }
    ]
  },
  { cat:5, id:10, title:"defaultdict 활용",
    prompt:"<code>defaultdict(list)</code>를 사용해 키 'a'에 1과 2를 리스트로 추가하는 코드를 완성하세요. 없는 키에 접근해도 KeyError가 발생하지 않습니다.",
    full:"from collections import defaultdict\ndd = defaultdict(list)\ndd['a'].append(1)\ndd['a'].append(2)\nprint(dd['a'])  # [1, 2]",
    hint:"defaultdict(list)는 없는 키에 접근할 때 자동으로 빈 리스트를 만들어줍니다.",
    concept: {
      title: "defaultdict — 기본값 자동 설정 딕셔너리",
      desc: `collections.defaultdict는 없는 키에 접근할 때 자동으로 기본값을 생성합니다. defaultdict(int)는 0, defaultdict(list)는 [] 로 초기화됩니다. setdefault()와 유사하지만 더 깔끔합니다.`,
      syntax: `from collections import defaultdict

# 빈도 세기 (defaultdict(int))
cnt = defaultdict(int)
for x in arr:
    cnt[x] += 1  # 없어도 0에서 시작

# 그룹핑 (defaultdict(list))
groups = defaultdict(list)
for k, v in pairs:
    groups[k].append(v)

# dict()로 일반 딕셔너리로 변환
dict(cnt)

# setdefault와 비교
d.setdefault('key', []).append(v)  # 동일 효과
# defaultdict(list)가 더 깔끔`,
      note: `💡 defaultdict(int) → 0, defaultdict(list) → [], defaultdict(set) → set(). 타입 함수를 인자로.`,
      dart: `// Dart: putIfAbsent 사용
d.putIfAbsent('k', () => []).add(v);`
    },
    drills: [
      { title:"드릴 1 — defaultdict 활용", prompt:"<code>defaultdict(list)</code>를 사용해 키 'a'에 1과 2를 리스트로 추가하는 코드를 완성하세요. 없는 키에 접근해도 KeyError가 발생하지 않습니다.", full:"from collections import defaultdict\ndd = defaultdict(list)\ndd['a'].append(1)\ndd['a'].append(2)\nprint(dd['a'])  # [1, 2]", blank:"dd = defaultdict(___)", answer:"list", options:["list","int","0","dict"], blocks:["from collections import defaultdict","dd = defaultdict(list)","dd['a'].append(1)","dd['a'].append(2)","print(dd['a'])"], hint:"defaultdict(list)는 없는 키에 접근할 때 자동으로 빈 리스트를 만들어줍니다." },
      { title:"드릴 2 — defaultdict(int)로 카운팅", prompt:"<code>defaultdict(int)</code>를 사용해 리스트 <code>[1,2,1,3,2,1]</code>의 빈도를 출력하세요.", full:"from collections import defaultdict\narr = [1,2,1,3,2,1]\ndd = defaultdict(int)\nfor x in arr:\n    dd[x] += 1\nprint(dict(dd))", blank:"dd = defaultdict(___)", answer:"int", options:["int", "list", "str", "set"], blocks:["from collections import defaultdict", "arr = [1,2,1,3,2,1]", "dd = defaultdict(int)", "for x in arr:", "    dd[x] += 1", "print(dict(dd))"], hint:"defaultdict(int)는 존재하지 않는 키에 접근하면 자동으로 0을 초기값으로 설정합니다." },
      { title:"드릴 3 — defaultdict(list)로 그룹핑", prompt:"리스트 <code>[('a',1),('b',2),('a',3),('b',4)]</code>를 첫 번째 요소 기준으로 그룹핑하세요.", full:"from collections import defaultdict\npairs = [('a',1),('b',2),('a',3),('b',4)]\ndd = defaultdict(list)\nfor k, v in pairs:\n    dd[k].append(v)\nprint(dict(dd))", blank:"dd = defaultdict(___)", answer:"list", options:["list", "int", "str", "set"], blocks:["from collections import defaultdict", "pairs = [('a',1),('b',2),('a',3),('b',4)]", "dd = defaultdict(list)", "for k, v in pairs:", "    dd[k].append(v)", "print(dict(dd))"], hint:"defaultdict(list)는 키가 없을 때 자동으로 빈 리스트를 생성합니다." }
    ]
  },
  { cat:5, id:11, title:"딕셔너리 컴프리헨션",
    prompt:"리스트 <code>arr = [1, 2, 3, 4, 5]</code>를 이용해 각 숫자를 키로, 제곱을 값으로 하는 딕셔너리를 한 줄로 만드는 코드를 완성하세요. 결과: <code>{1:1, 2:4, 3:9, 4:16, 5:25}</code>",
    full:"arr = [1, 2, 3, 4, 5]\nsq_dict = {x: x**2 for x in arr}\nprint(sq_dict)",
    hint:"딕셔너리 컴프리헨션: {키: 값 for 변수 in 이터러블}",
    concept: {
      title: "딕셔너리 컴프리헨션 {k: v for ...}",
      desc: `딕셔너리도 리스트처럼 컴프리헨션으로 한 줄에 만들 수 있습니다. {키: 값 for 변수 in 이터러블 if 조건} 형태입니다.`,
      syntax: `# 기본
{x: x**2 for x in range(1,6)}
# {1:1, 2:4, 3:9, 4:16, 5:25}

# 필터링
d = {'a':1, 'b':5, 'c':3}
{k: v for k, v in d.items() if v >= 3}
# {'b':5, 'c':3}

# 키-값 반전
{v: k for k, v in d.items()}

# zip으로 두 리스트 → 딕셔너리
keys = ['a','b','c']
vals = [1, 2, 3]
dict(zip(keys, vals))  # {'a':1,'b':2,'c':3}
{k: v for k, v in zip(keys, vals)}  # 동일`,
      note: `💡 dict(zip(keys, vals))가 가장 간결. 조건 필터링이 필요하면 컴프리헨션 사용.`,
      dart: `Map.fromIterables(keys, vals)  →  dict(zip(keys, vals))`
    },
    drills: [
      { title:"드릴 1 — 딕셔너리 컴프리헨션", prompt:"리스트 <code>arr = [1, 2, 3, 4, 5]</code>를 이용해 각 숫자를 키로, 제곱을 값으로 하는 딕셔너리를 한 줄로 만드는 코드를 완성하세요. 결과: <code>{1:1, 2:4, 3:9, 4:16, 5:25}</code>", full:"arr = [1, 2, 3, 4, 5]\nsq_dict = {x: x**2 for x in arr}\nprint(sq_dict)", blank:"sq_dict = {x: x**2 ___ x in arr}", answer:"for", options:["for","in","if","while"], blocks:["arr = [1, 2, 3, 4, 5]","sq_dict = {x: x**2 for x in arr}","print(sq_dict)"], hint:"딕셔너리 컴프리헨션: {키: 값 for 변수 in 이터러블}" },
      { title:"드릴 2 — 값 필터링 딕셔너리 컴프리헨션", prompt:"딕셔너리 <code>{'a':1,'b':5,'c':3,'d':7}</code>에서 값이 4 이상인 것만 새 딕셔너리로 만드세요.", full:"d = {'a':1,'b':5,'c':3,'d':7}\nresult = {k:v for k,v in d.items() if v >= 4}\nprint(result)", blank:"result = {k:v for k,v in d.items() if v ___ 4}", answer:">= ", options:[">= ", "<= ", "> ", "< "], blocks:["d = {'a':1,'b':5,'c':3,'d':7}", "result = {k:v for k,v in d.items() if v >= 4}", "print(result)"], hint:"딕셔너리 컴프리헨션에도 if 조건을 붙일 수 있습니다." },
      { title:"드릴 3 — 키-값 반전 딕셔너리", prompt:"딕셔너리 <code>{'a':1,'b':2,'c':3}</code>의 키와 값을 서로 바꾼 딕셔너리를 만드세요.", full:"d = {'a':1,'b':2,'c':3}\nreversed_d = {v:k for k,v in d.items()}\nprint(reversed_d)", blank:"reversed_d = {v:k for k,v in d.___()}", answer:"items", options:["items", "keys", "values", "get"], blocks:["d = {'a':1,'b':2,'c':3}", "reversed_d = {v:k for k,v in d.items()}", "print(reversed_d)"], hint:"items()로 키-값 쌍을 순회하면서 v:k로 반전시킵니다." }
    ]
  },
  { cat:5, id:12, title:"최빈값 찾기 패턴",
    prompt:"리스트 <code>arr = [1, 2, 2, 3, 3, 3]</code>에서 가장 많이 등장하는 값(최빈값)을 딕셔너리를 이용해 구하는 코드를 완성하세요. 결과: 3",
    full:"arr = [1, 2, 2, 3, 3, 3]\ncnt = {}\nfor x in arr:\n    cnt[x] = cnt.get(x, 0) + 1\nmode = max(cnt, key=cnt.get)\nprint(mode)  # 3",
    hint:"max(딕셔너리, key=딕셔너리.get)은 값(value)이 최대인 키(key)를 반환합니다.",
    concept: {
      title: "Counter — 빈도 세기 전용 딕셔너리",
      desc: `collections.Counter는 요소의 빈도를 자동으로 세는 딕셔너리 서브클래스입니다. most_common()으로 빈도 높은 순 정렬, 산술 연산, 집합 연산도 지원합니다.`,
      syntax: `from collections import Counter

arr = ['a','b','a','c','b','a']
cnt = Counter(arr)
# Counter({'a':3, 'b':2, 'c':1})

cnt['a']              # 3
cnt.most_common(2)    # [('a',3),('b',2)]
cnt.most_common()[-1] # 최소 빈도

# 문자열도 가능
Counter("banana")  # {'a':3,'n':2,'b':1}

# 두 Counter 덧셈
c1 = Counter('aab')
c2 = Counter('bbc')
c1 + c2  # Counter({'b':3,'a':2,'c':1})`,
      note: `💡 Counter는 없는 키 접근 시 0 반환 (KeyError 없음). 빈도 문제에 Counter 먼저 고려!`,
      dart: `// Dart에는 Counter 없음. 직접 구현:
Map<String,int> cnt = {};
for (var x in arr) cnt[x] = (cnt[x] ?? 0) + 1;`
    },
    drills: [
      { title:"드릴 1 — 최빈값 찾기 패턴", prompt:"리스트 <code>arr = [1, 2, 2, 3, 3, 3]</code>에서 가장 많이 등장하는 값(최빈값)을 딕셔너리를 이용해 구하는 코드를 완성하세요. 결과: 3", full:"arr = [1, 2, 2, 3, 3, 3]\ncnt = {}\nfor x in arr:\n    cnt[x] = cnt.get(x, 0) + 1\nmode = max(cnt, key=cnt.get)\nprint(mode)  # 3", blank:"mode = max(cnt, key=cnt.___)", answer:"get", options:["get","values","items","keys"], blocks:["cnt = {}","for x in arr:","    cnt[x] = cnt.get(x, 0) + 1","mode = max(cnt, key=cnt.get)","print(mode)"], hint:"max(딕셔너리, key=딕셔너리.get)은 값(value)이 최대인 키(key)를 반환합니다." },
      { title:"드릴 2 — sorted로 값 기준 정렬", prompt:"딕셔너리 <code>{'c':3,'a':1,'b':2}</code>를 값 기준 오름차순으로 정렬해 출력하세요.", full:"d = {'c':3,'a':1,'b':2}\nsorted_d = sorted(d.items(), key=lambda x: x[1])\nprint(sorted_d)", blank:"sorted_d = sorted(d.items(), key=lambda x: x[___])", answer:"1", options:["1", "0", "-1", "2"], blocks:["d = {'c':3,'a':1,'b':2}", "sorted_d = sorted(d.items(), key=lambda x: x[1])", "print(sorted_d)"], hint:"x[0]은 키, x[1]은 값입니다. 값 기준 정렬이면 x[1]을 key로 씁니다." },
      { title:"드릴 3 — 최빈값이 여러 개일 때 모두 출력", prompt:"리스트 <code>[1,2,2,3,3,4]</code>에서 빈도가 최대인 모든 값을 출력하세요.", full:"arr = [1,2,2,3,3,4]\ncnt = {}\nfor x in arr:\n    cnt[x] = cnt.get(x, 0) + 1\nmax_freq = max(cnt.values())\nresult = [k for k,v in cnt.items() if v == max_freq]\nprint(result)", blank:"max_freq = max(cnt.___())", answer:"values", options:["values", "keys", "items", "get"], blocks:["arr = [1,2,2,3,3,4]", "cnt = {}", "for x in arr:", "    cnt[x] = cnt.get(x, 0) + 1", "max_freq = max(cnt.values())", "result = [k for k,v in cnt.items() if v == max_freq]", "print(result)"], hint:"max(cnt.values())로 최대 빈도를 구한 뒤, 그 빈도와 같은 키들을 모읍니다." }
    ]
  },
  { cat:5, id:13, title:"두 리스트를 딕셔너리로",
    prompt:"키 리스트 <code>keys = ['a','b','c']</code>와 값 리스트 <code>vals = [1, 2, 3]</code>을 합쳐 딕셔너리를 만드는 코드를 완성하세요. zip()과 dict()를 활용합니다.",
    full:"keys = ['a', 'b', 'c']\nvals = [1, 2, 3]\nd = dict(zip(keys, vals))\nprint(d)  # {'a':1, 'b':2, 'c':3}",
    hint:"zip(a, b)은 두 이터러블을 쌍으로 묶습니다. dict()로 감싸면 바로 딕셔너리가 됩니다.",
    concept: {
      title: "zip() — 두 이터러블 병렬 순회",
      desc: `zip()은 두 개 이상의 이터러블을 묶어 쌍으로 만듭니다. 두 리스트를 딕셔너리로 변환하거나, 두 리스트를 동시에 순회할 때 사용합니다.`,
      syntax: `keys = ['a', 'b', 'c']
vals = [1, 2, 3]

# 딕셔너리로 변환
d = dict(zip(keys, vals))  # {'a':1,'b':2,'c':3}

# 동시 순회
for k, v in zip(keys, vals):
    print(f"{k}: {v}")  # a:1, b:2, c:3

# 두 리스트 병렬 계산
scores_a = [70, 80, 90]
scores_b = [60, 85, 95]
diffs = [b-a for a, b in zip(scores_a, scores_b)]

# 언패킹으로 전치
matrix = [[1,2,3],[4,5,6]]
transposed = list(zip(*matrix))  # [(1,4),(2,5),(3,6)]`,
      note: `💡 zip()은 짧은 쪽에 맞춰 끊깁니다. 긴 쪽 기준이면 itertools.zip_longest 사용.`,
      dart: `// Dart: 직접 인덱스 접근
for (int i=0; i<keys.length; i++) ...
// Python zip()이 훨씬 간결`
    },
    drills: [
      { title:"드릴 1 — 두 리스트를 딕셔너리로", prompt:"키 리스트 <code>keys = ['a','b','c']</code>와 값 리스트 <code>vals = [1, 2, 3]</code>을 합쳐 딕셔너리를 만드는 코드를 완성하세요. zip()과 dict()를 활용합니다.", full:"keys = ['a', 'b', 'c']\nvals = [1, 2, 3]\nd = dict(zip(keys, vals))\nprint(d)  # {'a':1, 'b':2, 'c':3}", blank:"d = dict(___(keys, vals))", answer:"zip", options:["zip","map","pair","combine"], blocks:["keys = ['a', 'b', 'c']","vals = [1, 2, 3]","d = dict(zip(keys, vals))","print(d)"], hint:"zip(a, b)은 두 이터러블을 쌍으로 묶습니다. dict()로 감싸면 바로 딕셔너리가 됩니다." },
      { title:"드릴 2 — zip으로 딕셔너리 업데이트", prompt:"키 리스트 <code>['x','y','z']</code>와 값 리스트 <code>[10,20,30]</code>으로 기존 딕셔너리 <code>d = {}</code>를 업데이트하세요.", full:"keys = ['x','y','z']\nvals = [10,20,30]\nd = {}\nd.update(zip(keys, vals))\nprint(d)", blank:"d.update(___(keys, vals))", answer:"zip", options:["zip", "map", "dict", "list"], blocks:["keys = ['x','y','z']", "vals = [10,20,30]", "d = {}", "d.update(zip(keys, vals))", "print(d)"], hint:"update()에 zip(keys, vals)를 전달하면 (키, 값) 쌍으로 딕셔너리를 업데이트합니다." },
      { title:"드릴 3 — 두 딕셔너리 병합", prompt:"딕셔너리 <code>d1 = {'a':1,'b':2}</code>와 <code>d2 = {'b':3,'c':4}</code>를 병합하세요. 겹치는 키는 d2 값을 사용합니다.", full:"d1 = {'a':1,'b':2}\nd2 = {'b':3,'c':4}\nmerged = {**d1, **d2}\nprint(merged)", blank:"merged = {**d1, **___}", answer:"d2", options:["d2", "d1", "merged", "{}"], blocks:["d1 = {'a':1,'b':2}", "d2 = {'b':3,'c':4}", "merged = {**d1, **d2}", "print(merged)"], hint:"** 언패킹으로 두 딕셔너리를 합칩니다. 나중에 나온 d2의 값이 덮어씁니다." }
    ]
  },
];