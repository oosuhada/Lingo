// ═══════════════════════════════════════════════════════
// javadata.js — CATEGORIES & QUESTIONS (Java 버전)
// ═══════════════════════════════════════════════════════

const CATEGORIES = [
  {
    id: 0, icon: "📥", title: "입출력 & 자료형", desc: "Scanner, BufferedReader, int/double/String 변환, printf/format, 메모리 구조",
    color: "c0", freq: "must", freqLabel: "★★★ 필수기초", diff: "난이도 ●○○",
    importance: "모든 문제의 입력 처리에 사용. Java 특유의 Scanner/BufferedReader를 먼저 마스터해야 합니다. Java의 메모리 구조(Stack/Heap)와 타입 시스템을 이해하면 코드 동작 원리를 정확히 파악할 수 있습니다.",
    concept: {
      title: "입출력, 자료형, 메모리 구조",
      desc: `Java는 강타입(Strongly Typed) 언어로, 모든 변수는 선언 시 타입을 명시해야 합니다. 기본형(Primitive Type)은 Stack 메모리에, 참조형(Reference Type)은 Heap 메모리에 저장됩니다. 이 차이를 이해하면 == vs .equals(), 배열 복사, null 처리 등의 개념이 명확해집니다. 코딩테스트에서 모든 입력은 문자열(String)로 들어오므로 Integer.parseInt() 등으로 변환이 필수입니다.`,
      syntax: `// ═══════════════════════════════════════════════════
// 1. Java 메모리 구조 (Stack vs Heap)
// ═══════════════════════════════════════════════════
// Java는 메모리를 Stack과 Heap 두 영역으로 나눠 관리합니다.
//
// ┌─ Stack 메모리 ─────────────────────────────────┐
// │ • 기본형(Primitive) 변수의 실제 값 저장        │
// │ • 참조형 변수의 주소(참조) 저장                │
// │ • 메서드 호출 시 지역변수 저장                 │
// │ • 빠르지만 크기 제한 있음                      │
// └────────────────────────────────────────────────┘
//
// ┌─ Heap 메모리 ──────────────────────────────────┐
// │ • 객체(Object)의 실제 데이터 저장              │
// │ • 배열, String, ArrayList 등 모두 여기 저장    │
// │ • Garbage Collector가 자동으로 메모리 관리     │
// │ • 크지만 Stack보다 느림                        │
// └────────────────────────────────────────────────┘

// ── 예시: 메모리 할당 ──
int x = 10;              // Stack: x = 10 (값 직접 저장)
String s = "Hello";      // Stack: s = 주소값 (예: 0x1A2B)
                         // Heap:  0x1A2B 위치에 "Hello" 저장
int[] arr = {1, 2, 3};   // Stack: arr = 주소값 (예: 0x3C4D)
                         // Heap:  0x3C4D 위치에 [1,2,3] 저장

// ═══════════════════════════════════════════════════
// 2. Java 타입 시스템 (기본형 vs 참조형)
// ═══════════════════════════════════════════════════
// ┌─ 기본형 (Primitive Type) ─ Stack 저장 ─────────┐
// │ byte    (1바이트)  -128 ~ 127                   │
// │ short   (2바이트)  -32,768 ~ 32,767             │
// │ int     (4바이트)  -2,147,483,648 ~ 2,147,483,647 │
// │ long    (8바이트)  -9경 ~ 9경 (L 접미사 필수)   │
// │ float   (4바이트)  소수점 7자리 (f 접미사 필수) │
// │ double  (8바이트)  소수점 15자리 (기본 실수형)  │
// │ char    (2바이트)  유니코드 문자 하나 ('A')     │
// │ boolean (1비트)    true / false                 │
// └────────────────────────────────────────────────┘

// ┌─ 참조형 (Reference Type) ─ Heap 저장 ──────────┐
// │ String, 배열, ArrayList, HashMap 등 모든 객체   │
// │ null 값 가능 (기본형은 null 불가!)              │
// │ .equals()로 내용 비교, == 는 주소 비교          │
// └────────────────────────────────────────────────┘

// ── 타입 선언 예시 ──
int age = 25;                    // 정수 (가장 많이 사용)
long bigNum = 1234567890123L;    // 큰 정수 (L 필수!)
double pi = 3.14159;             // 실수 (기본)
float f = 3.14f;                 // 실수 (f 필수!)
char grade = 'A';                // 문자 하나 (작은따옴표!)
boolean isValid = true;          // 참/거짓
String name = "홍길동";          // 문자열 (큰따옴표!)

// ── 배열 선언 방식 (3가지) ──
int[] arr1 = new int[5];         // 크기 5, 0으로 초기화
int[] arr2 = {1, 2, 3, 4, 5};   // 값 직접 초기화
int[] arr3 = new int[]{1,2,3};  // new 키워드 사용

// ── 2차원 배열 ──
int[][] matrix = new int[3][4];  // 3행 4열
int[][] grid = {
    {1, 2, 3},
    {4, 5, 6}
};

// ═══════════════════════════════════════════════════
// 3. 입출력 (Scanner vs BufferedReader)
// ═══════════════════════════════════════════════════
// ── Scanner (간편하지만 느림) ──
import java.util.Scanner;
Scanner sc = new Scanner(System.in);

String name = sc.next();          // 단어 하나 (공백 전까지)
String line = sc.nextLine();      // 한 줄 전체
int n = sc.nextInt();             // 정수 바로 읽기
double x = sc.nextDouble();       // 실수 바로 읽기

// ── 한 줄에 여러 값 입력 (공백 구분) ──
// 입력: "3 5"
String[] parts = sc.nextLine().split(" ");
int a = Integer.parseInt(parts[0]);  // 3
int b = Integer.parseInt(parts[1]);  // 5

// ── BufferedReader (빠른 입력, 대량 데이터용) ──
import java.io.*;
import java.util.StringTokenizer;
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
StringTokenizer st = new StringTokenizer(br.readLine());
int a = Integer.parseInt(st.nextToken());
int b = Integer.parseInt(st.nextToken());

// ── 출력 ──
System.out.println("안녕하세요");    // 줄바꿈 포함 출력
System.out.print(n);               // 줄바꿈 없이 출력
System.out.printf("값: %d%n", n);  // 포맷 출력 (printf)
System.out.printf("%.2f%n", x);   // 소수점 2자리 고정

// ── printf 포맷 지정자 ──
// %d  정수 (decimal)
// %f  실수 (float)
// %s  문자열 (string)
// %c  문자 (character)
// %n  줄바꿈 (플랫폼 독립적)

// ═══════════════════════════════════════════════════
// 4. 형변환 (Type Casting)
// ═══════════════════════════════════════════════════
// ── 자동 형변환 (작은 타입 → 큰 타입) ──
int i = 100;
long l = i;              // int → long (자동)
double d = i;            // int → double (자동)

// ── 명시적 형변환 (큰 타입 → 작은 타입) ──
double d2 = 3.14;
int i2 = (int)d2;        // 3 (소수점 버림!)

// ── String ↔ 기본형 변환 ──
int i = Integer.parseInt("42");        // String → int
double d = Double.parseDouble("3.14"); // String → double
long l = Long.parseLong("123456");     // String → long

String s1 = String.valueOf(42);        // int → String
String s2 = Integer.toString(42);      // int → String
String s3 = "" + 42;                   // int → String (간편)

// ═══════════════════════════════════════════════════
// 5. 산술 연산자
// ═══════════════════════════════════════════════════
// +  더하기      5 + 3 = 8
// -  빼기        5 - 3 = 2
// *  곱하기      5 * 3 = 15
// /  나누기      5 / 2 = 2   (정수끼리 → 정수! 주의!)
//                5.0 / 2 = 2.5 (실수 포함 → 실수)
// %  나머지      7 % 3 = 1   (홀짝 판별에 사용!)
// Math.pow(2,3) = 8.0  (거듭제곱, double 반환)

// ── 복합 대입 연산자 ──
int x = 10;
x += 5;  // x = x + 5  → 15
x -= 3;  // x = x - 3  → 12
x *= 2;  // x = x * 2  → 24
x /= 4;  // x = x / 4  → 6
x %= 4;  // x = x % 4  → 2

// ── 증감 연산자 ──
int a = 5;
a++;     // a = a + 1  → 6 (후위 증가)
++a;     // a = a + 1  → 7 (전위 증가)
a--;     // a = a - 1  → 6 (후위 감소)
--a;     // a = a - 1  → 5 (전위 감소)`,
      note: `💡 핵심 포인트
• Java는 강타입 언어: 모든 변수는 타입 선언 필수 (Python은 동적 타입)
• 기본형(int, double 등)은 Stack에 값 저장, 참조형(String, 배열 등)은 Heap에 객체 저장
• int/int는 정수 나눗셈! 5/2 = 2 (소수점 버림). 실수 결과가 필요하면 (double)5/2 또는 5.0/2
• String 비교는 .equals() 사용! == 는 주소 비교 (기본형만 == 사용 가능)
• 배열 선언: int[] arr (크기 고정), ArrayList<Integer> list (크기 가변)
• BufferedReader가 Scanner보다 빠름 (대량 입력 시 필수)`,
      dart: `Python과의 주요 차이점:
• 타입 선언: Python은 x = 10 (동적), Java는 int x = 10; (정적)
• 메모리: Python은 모두 객체(Heap), Java는 기본형(Stack) + 참조형(Heap)
• 배열: Python list는 가변, Java 배열은 고정 크기
• 입력: input() → Scanner/BufferedReader
• 형변환: int("42") → Integer.parseInt("42")
• 출력: print(f"{x:.2f}") → System.out.printf("%.2f", x)
• 나눗셈: 5/2 = 2.5 (Python) vs 5/2 = 2 (Java, 정수끼리)
• 문자열 분리: str.split() → String.split() 또는 StringTokenizer`
    }
  },
  {
    id: 1, icon: "🔀", title: "조건문", desc: "if / else if / else, 비교·논리 연산자, 삼항 연산자, switch",
    color: "c1", freq: "must", freqLabel: "★★★ 최빈출", diff: "난이도 ●○○",
    importance: "카카오·네이버·라인 등 모든 코딩테스트에서 필수. 조건 분기 없는 문제는 없습니다. Java의 조건문은 타입 안정성이 강하며, switch 문은 다중 분기에 유용합니다.",
    concept: {
      title: "조건문 (if / else if / else / switch)",
      desc: `Java 조건문은 중괄호 {}로 블록을 구분하고, 조건식은 반드시 boolean 타입이어야 합니다. Python의 elif는 Java에서 else if로 표현됩니다. 비교 연산자(==, !=, >, <)와 논리 연산자(&&, ||, !)를 조합해 복잡한 조건을 만들 수 있습니다. switch 문은 여러 값을 비교할 때 if-else보다 간결합니다.`,
      syntax: `// ═══════════════════════════════════════════════════
// 1. if / else if / else 기본 구조
// ═══════════════════════════════════════════════════
if (조건1) {           // 소괄호() 필수!
    실행코드1;         // 세미콜론(;) 필수!
} else if (조건2) {    // Python의 elif → Java의 else if
    실행코드2;
} else {
    실행코드3;
}

// ── 실전 예시: 점수에 따른 등급 ──
int score = 85;
if (score >= 90) {
    System.out.println("A");
} else if (score >= 80) {
    System.out.println("B");
} else if (score >= 70) {
    System.out.println("C");
} else {
    System.out.println("F");
}

// ═══════════════════════════════════════════════════
// 2. 비교 연산자
// ═══════════════════════════════════════════════════
// ==  같다        a == b  (기본형에만! 객체는 .equals() 사용)
// !=  같지 않다   a != b
// >   크다        a > b
// >=  크거나 같다 a >= b
// <   작다        a < b
// <=  작거나 같다 a <= b

// ── 예시 ──
int a = 10, b = 20;
if (a == b) { ... }    // false
if (a != b) { ... }    // true
if (a < b) { ... }     // true

// ═══════════════════════════════════════════════════
// 3. 논리 연산자 (조건 조합)
// ═══════════════════════════════════════════════════
// &&  AND (그리고) - 둘 다 참이어야 참
// ||  OR (또는)    - 하나라도 참이면 참
// !   NOT (부정)   - 참↔거짓 반전

if (a > 0 && b > 0) {              // 둘 다 양수
    System.out.println("둘 다 양수");
}

if (a > 0 || b > 0) {              // 하나라도 양수
    System.out.println("하나라도 양수");
}

if (!flag) {                        // flag가 false일 때
    System.out.println("flag는 false");
}

// ── 복합 조건 예시 ──
if (age >= 18 && hasLicense) {     // 성인이면서 면허 있음
    System.out.println("운전 가능");
}

if (score < 0 || score > 100) {    // 점수가 범위 밖
    System.out.println("잘못된 점수");
}

// ═══════════════════════════════════════════════════
// 4. 삼항 연산자 (간단한 if-else 대체)
// ═══════════════════════════════════════════════════
// 조건 ? 참일 때 값 : 거짓일 때 값
String result = (age >= 18) ? "성인" : "미성년자";
int max = (a > b) ? a : b;         // 둘 중 큰 값
String parity = (n % 2 == 0) ? "짝수" : "홀수";

// ═══════════════════════════════════════════════════
// 5. 문자열 비교 (중요!)
// ═══════════════════════════════════════════════════
String s1 = "hello";
String s2 = "hello";

// ✅ 올바른 방법: .equals() 사용
if (s1.equals(s2)) {
    System.out.println("같은 문자열");
}

// ❌ 잘못된 방법: == 사용 (주소 비교!)
if (s1 == s2) {  // 때때로 작동하지만 위험!
    System.out.println("주소가 같음");
}

// ── 대소문자 무시 비교 ──
if (s1.equalsIgnoreCase("HELLO")) {  // true
    System.out.println("대소문자 무시하고 같음");
}

// ═══════════════════════════════════════════════════
// 6. switch 문 (다중 분기)
// ═══════════════════════════════════════════════════
int day = 3;
switch (day) {
    case 1:
        System.out.println("월요일");
        break;  // break 필수! 없으면 다음 case도 실행됨
    case 2:
        System.out.println("화요일");
        break;
    case 3:
        System.out.println("수요일");
        break;
    default:  // else와 같은 역할
        System.out.println("기타");
}

// ── switch로 여러 case 묶기 ──
switch (month) {
    case 3: case 4: case 5:
        System.out.println("봄");
        break;
    case 6: case 7: case 8:
        System.out.println("여름");
        break;
    case 9: case 10: case 11:
        System.out.println("가을");
        break;
    case 12: case 1: case 2:
        System.out.println("겨울");
        break;
}

// ═══════════════════════════════════════════════════
// 7. 자주 쓰는 패턴
// ═══════════════════════════════════════════════════
// ── 홀짝 판별 ──
if (n % 2 == 0) {
    System.out.println("짝수");
} else {
    System.out.println("홀수");
}

// ── 범위 체크 ──
if (x >= 0 && x <= 100) {
    System.out.println("0~100 범위 내");
}

// ── 배수 판별 ──
if (n % 3 == 0) {
    System.out.println("3의 배수");
}`,
      note: `💡 핵심 포인트
• String 비교는 반드시 .equals() 사용! == 는 주소 비교 (기본형만 == 사용)
• 논리 연산자: && (AND), || (OR), ! (NOT) - Python의 and/or/not과 다름
• switch 문에서 break 빠뜨리면 다음 case도 실행됨 (fall-through)
• 조건식은 반드시 boolean 타입 (숫자를 조건으로 쓸 수 없음)
• 삼항 연산자는 간단한 if-else 대체용 (복잡한 로직은 if 사용)`,
      dart: `Python과의 주요 차이점:
• 논리 연산자: and/or/not (Python) → &&/||/! (Java)
• 조건 블록: 콜론(:) + 들여쓰기 (Python) → 중괄호 {} (Java)
• 다중 분기: elif (Python) → else if (Java)
• 문자열 비교: == (Python) → .equals() (Java)
• switch 문: Java에만 있음 (Python은 if-elif 사용)
• 삼항 연산자: a if cond else b (Python) → cond ? a : b (Java)`
    }
  },
  {
    id: 2, icon: "🔁", title: "반복문", desc: "for, while, break, continue, 향상된 for문, 중첩 반복",
    color: "c2", freq: "must", freqLabel: "★★★ 최빈출", diff: "난이도 ●●○",
    importance: "조건문과 함께 코딩테스트의 핵심. 순회·탐색·누적 계산 모두 반복문 기반입니다. Java의 for 문은 초기화/조건/증감을 명시하는 방식으로 Python의 range()와 다릅니다.",
    concept: {
      title: "반복문 (for / while / 향상된 for)",
      desc: `Java의 for 문은 for(초기화; 조건; 증감) 형태로 세 부분을 세미콜론으로 구분합니다. Python의 range()에 해당하는 것이 for(int i=0; i<n; i++) 형태입니다. 배열이나 컬렉션을 순회할 때는 향상된 for문(for-each)을 사용하면 간결합니다. while은 조건이 참인 동안 반복하며, break로 반복을 종료하고 continue로 현재 회차를 건너뛸 수 있습니다.`,
      syntax: `// ═══════════════════════════════════════════════════
// 1. 기본 for 반복문
// ═══════════════════════════════════════════════════
// for (초기화; 조건; 증감) { 실행코드 }
for (int i = 0; i < 5; i++) {    // 0, 1, 2, 3, 4
    System.out.println(i);
}

for (int i = 1; i <= 5; i++) {   // 1, 2, 3, 4, 5
    System.out.println(i);
}

for (int i = 5; i >= 1; i--) {   // 5, 4, 3, 2, 1 (역순)
    System.out.println(i);
}

for (int i = 0; i < 10; i += 2) { // 0, 2, 4, 6, 8 (2씩 증가)
    System.out.println(i);
}

// ═══════════════════════════════════════════════════
// 2. 향상된 for문 (for-each)
// ═══════════════════════════════════════════════════
int[] arr = {10, 20, 30};
for (int x : arr) {               // x = 10, 20, 30 차례로
    System.out.println(x);
}

String[] names = {"Alice", "Bob", "Charlie"};
for (String name : names) {
    System.out.println(name);
}

// ═══════════════════════════════════════════════════
// 3. while 반복문
// ═══════════════════════════════════════════════════
int count = 0;
while (count < 3) {
    System.out.println(count);    // 0, 1, 2
    count++;                      // count = count + 1
}

// ── do-while (최소 1번은 실행) ──
int n = 0;
do {
    System.out.println(n);
    n++;
} while (n < 3);                  // 조건이 뒤에 옴

// ═══════════════════════════════════════════════════
// 4. break / continue
// ═══════════════════════════════════════════════════
for (int i = 0; i < 10; i++) {
    if (i == 5) break;            // 반복 완전 종료 (5에서 멈춤)
    if (i % 2 == 0) continue;     // 이번 회차 건너뜀 (짝수 스킵)
    System.out.println(i);        // 1, 3 출력
}

// ═══════════════════════════════════════════════════
// 5. 중첩 반복문 (2차원 배열, 구구단 등)
// ═══════════════════════════════════════════════════
// ── 구구단 출력 ──
for (int i = 2; i <= 9; i++) {
    for (int j = 1; j <= 9; j++) {
        System.out.println(i + " x " + j + " = " + (i*j));
    }
}

// ── 2차원 배열 순회 ──
int[][] matrix = {{1,2,3}, {4,5,6}};
for (int i = 0; i < matrix.length; i++) {
    for (int j = 0; j < matrix[i].length; j++) {
        System.out.print(matrix[i][j] + " ");
    }
    System.out.println();
}

// ═══════════════════════════════════════════════════
// 6. 자주 쓰는 패턴
// ═══════════════════════════════════════════════════
// ── 누적 합산 ──
int total = 0;
for (int x : arr) {
    total += x;                   // total = total + x
}

// ── 최댓값 찾기 ──
int max = arr[0];
for (int x : arr) {
    if (x > max) max = x;
}

// ── 배열 역순 출력 ──
for (int i = arr.length - 1; i >= 0; i--) {
    System.out.println(arr[i]);
}`,
      note: `💡 핵심 포인트
• for문: for(초기화; 조건; 증감) 세 부분을 세미콜론(;)으로 구분
• Python의 range(1,6)은 Java의 for(int i=1; i<=5; i++)에 해당
• 향상된 for문(for-each)은 인덱스 없이 값만 순회 (수정 불가)
• break는 반복 종료, continue는 현재 회차만 건너뜀
• 중첩 반복문에서 break는 가장 안쪽 반복만 종료`,
      dart: `Python과의 주요 차이점:
• for 구조: for i in range(n) (Python) → for(int i=0; i<n; i++) (Java)
• 컬렉션 순회: for x in list (Python) → for(int x : arr) (Java)
• 증감: i += 1 (Python) → i++ 또는 i += 1 (Java)
• while: 동일한 구조
• break/continue: 동일한 기능
• enumerate: for i, v in enumerate(list) (Python) → 인덱스 직접 관리 (Java)`
    }
  },
  {
    id: 3, icon: "📋", title: "배열 & ArrayList", desc: "배열 선언/초기화, Arrays 유틸, ArrayList, 제네릭, 2차원 배열",
    color: "c3", freq: "high", freqLabel: "★★☆ 고빈출", diff: "난이도 ●●○",
    importance: "코딩테스트의 90%가 배열/리스트 조작. Java 배열은 크기 고정, ArrayList는 가변 크기입니다. 배열은 .length (괄호 없음), ArrayList는 .size() (괄호 있음) - 헷갈리기 쉬운 포인트!",
    concept: {
      title: "배열(Array)과 ArrayList",
      desc: `Java 배열은 크기가 고정되어 생성 후 변경 불가능합니다. 동적으로 크기가 변하는 리스트가 필요하면 ArrayList를 사용합니다. 배열은 기본형(int, double 등)을 직접 저장할 수 있지만, ArrayList는 제네릭을 사용해 참조형(Integer, Double 등)만 저장 가능합니다. 코딩테스트에서는 입력을 배열로 받고, 중간 처리는 ArrayList로 하는 경우가 많습니다.`,
      syntax: `// ── 배열 선언과 초기화 ──
int[] arr = new int[5];           // 크기 5, 0으로 초기화
int[] arr2 = {1, 2, 3, 4, 5};    // 값 직접 초기화
int[][] matrix = new int[3][4];   // 2차원 배열 (3행 4열)

// ── 배열 기본 조작 ──
arr[0] = 10;                      // 인덱스로 값 설정
int val = arr[0];                 // 인덱스로 값 읽기
int len = arr.length;             // 길이 (.length는 () 없음!)

// ── Arrays 유틸 (import java.util.Arrays) ──
Arrays.sort(arr);                 // 오름차순 정렬 (원본 수정!)
Arrays.sort(arr, Collections.reverseOrder()); // 내림차순 (Integer[]만!)
int[] copy = Arrays.copyOf(arr, arr.length);  // 복사
System.out.println(Arrays.toString(arr));     // 배열 출력

// ── ArrayList (동적 크기 리스트) ──
import java.util.ArrayList;
ArrayList<Integer> list = new ArrayList<>();
list.add(10);                     // 끝에 추가 (Python의 append)
list.add(0, 5);                   // 인덱스 0에 삽입
list.remove(0);                   // 인덱스 0 삭제
list.remove(Integer.valueOf(10)); // 값 10 삭제 (주의!)
int v = list.get(0);              // 인덱스로 읽기 (배열은 arr[0])
list.set(0, 99);                  // 인덱스 0 값 변경
int size = list.size();           // 크기 (배열은 .length)
Collections.sort(list);           // 정렬
list.contains(10);                // 포함 여부
list.clear();                     // 모든 요소 삭제

// ── 배열 ↔ ArrayList 변환 ──
Integer[] arr = {1, 2, 3};
List<Integer> fromArr = new ArrayList<>(Arrays.asList(arr));
Integer[] toArr = list.toArray(new Integer[0]);`,
      note: `💡 핵심 포인트
• 배열: .length (괄호 없음), ArrayList: .size() (괄호 있음)
• 배열: arr[i] 접근, ArrayList: list.get(i) 접근
• 배열은 크기 고정, ArrayList는 크기 가변
• ArrayList는 기본형(int) 불가, 참조형(Integer) 사용
• Arrays.sort()는 원본 수정, Collections.sort()도 원본 수정`,
      dart: `Python과의 주요 차이점:
• 배열 크기: Python list는 가변, Java 배열은 고정
• 접근: list[i] (Python) → arr[i] (배열), list.get(i) (ArrayList)
• 추가: list.append(x) (Python) → list.add(x) (ArrayList)
• 삭제: list.pop() (Python) → list.remove(index) (ArrayList)
• 길이: len(list) (Python) → arr.length (배열), list.size() (ArrayList)
• 정렬: sorted(list) (Python) → Arrays.sort(arr), Collections.sort(list) (Java)`
    }
  },
  {
    id: 4, icon: "🗂️", title: "HashMap & 자료구조", desc: "HashMap, HashSet, Stack, Queue, Collections, 빈도 카운팅",
    color: "c4", freq: "high", freqLabel: "★★☆ 고빈출", diff: "난이도 ●●●",
    importance: "카카오·삼성 등 상위 코딩테스트 필수. HashMap으로 빈도 카운팅, HashSet으로 중복 제거, Stack/Queue로 자료구조 문제 해결이 핵심입니다.",
    concept: {
      title: "HashMap과 컬렉션 자료구조",
      desc: `Java의 HashMap은 Python의 dict에 해당하며 키-값 쌍으로 데이터를 저장합니다. HashSet은 Python의 set으로 중복 없는 집합을 표현합니다. Stack은 LIFO(후입선출), Queue는 FIFO(선입선출) 구조입니다. getOrDefault()를 이용한 빈도 카운팅 패턴이 코딩테스트의 단골 문제입니다.`,
      syntax: `// ── HashMap (Python dict와 동일 개념) ──
import java.util.HashMap;
HashMap<String, Integer> map = new HashMap<>();
map.put("apple", 3);              // 키-값 추가/수정
int v = map.get("apple");         // 값 조회 (없으면 null!)
map.getOrDefault("key", 0);       // 없으면 기본값 반환
map.containsKey("apple");         // 키 존재 여부
map.containsValue(3);             // 값 존재 여부
map.remove("apple");              // 삭제
map.size();                       // 개수

for (Map.Entry<String,Integer> e : map.entrySet()) {
    System.out.println(e.getKey() + ": " + e.getValue());
}

// ── 빈도 카운팅 패턴 (핵심!) ──
for (int x : arr) {
    map.put(x, map.getOrDefault(x, 0) + 1);
}

// ── HashSet (Python set과 동일) ──
HashSet<Integer> set = new HashSet<>();
set.add(1);
set.contains(1);                  // 포함 여부 O(1)
set.remove(1);

// ── Stack ──
Stack<Integer> stack = new Stack<>();
stack.push(1);
int top = stack.pop();
int peek = stack.peek();
stack.isEmpty();

// ── Queue (LinkedList로 구현) ──
Queue<Integer> queue = new LinkedList<>();
queue.offer(1);                   // 삽입
int front = queue.poll();         // 삭제+반환
int front2 = queue.peek();        // 삭제 없이 조회`,
      note: `💡 핵심 포인트
• map.get("없는키")는 null 반환 → getOrDefault() 사용 권장
• HashMap은 순서 보장 안 함, LinkedHashMap은 삽입 순서 유지
• HashSet.contains()는 O(1) 시간복잡도 (매우 빠름)
• Stack은 push/pop, Queue는 offer/poll 사용
• 빈도 카운팅: map.put(x, map.getOrDefault(x, 0) + 1)`,
      dart: `Python과의 주요 차이점:
• dict (Python) → HashMap<K,V> (Java)
• dict[k] (Python) → map.get(k) (Java)
• dict[k] = v (Python) → map.put(k, v) (Java)
• set (Python) → HashSet<T> (Java)
• dict.get(k, default) (Python) → map.getOrDefault(k, default) (Java)
• len(dict) (Python) → map.size() (Java)`
    }
  },
  {
    id: 5, icon: "🏗️", title: "클래스 & 구조", desc: "클래스 구조, main 메서드, 접근제어자, static, 생성자, 메서드",
    color: "c5", freq: "must", freqLabel: "★★★ 필수기초", diff: "난이도 ●●○",
    importance: "Java의 모든 코드는 클래스 안에 있습니다. main 메서드 구조를 완전히 외워야 하며, static의 개념을 이해해야 합니다.",
    concept: {
      title: "Java 클래스 구조와 main 메서드",
      desc: `Java는 객체지향 언어로 모든 코드가 클래스 안에 존재합니다. 프로그램 진입점은 public static void main(String[] args)이며, 이 시그니처를 정확히 작성해야 합니다. static 키워드는 객체 생성 없이 클래스 이름으로 직접 호출할 수 있게 합니다. 코딩테스트에서는 대부분 단일 클래스에서 작성합니다.`,
      syntax: `// ── 코딩테스트 기본 템플릿 ──
import java.util.*;
import java.io.*;

public class Main {               // 클래스 이름 (보통 Main)
    public static void main(String[] args) throws IOException {
        // 여기에 코드 작성
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine().trim());
        System.out.println(n);
    }
}

// ── 접근 제어자 ──
public    // 어디서나 접근 가능
private   // 같은 클래스 내에서만
protected // 같은 패키지 + 자식 클래스
(없음)    // 같은 패키지 내에서만 (package-private)

// ── static 메서드 (클래스 메서드) ──
public class Main {
    static int add(int a, int b) {  // static: 객체 생성 없이 호출 가능
        return a + b;
    }
    public static void main(String[] args) {
        int result = add(3, 5);     // 객체 없이 바로 호출
        System.out.println(result); // 8
    }
}

// ── 생성자 ──
public class Point {
    int x, y;                       // 필드(멤버 변수)
    Point(int x, int y) {           // 생성자 (클래스명과 동일)
        this.x = x;                 // this: 현재 객체의 필드
        this.y = y;
    }
}
Point p = new Point(3, 4);          // 객체 생성
System.out.println(p.x);            // 3`,
      note: `💡 핵심 포인트
• main 시그니처: public static void main(String[] args) — 순서대로 외우기
• static 메서드는 객체 생성 없이 클래스명.메서드명()으로 호출
• 코딩테스트에서는 모든 메서드를 static으로 작성하는 것이 편함
• 생성자는 클래스명과 동일하며 반환 타입 없음
• this는 현재 객체를 가리킴`,
      dart: `Python과의 주요 차이점:
• Python은 클래스 없이 코드 작성 가능, Java는 모든 코드가 클래스 안에
• 진입점: if __name__ == "__main__" (Python) → main(String[] args) (Java)
• static: @staticmethod (Python) → static (Java)
• 생성자: __init__(self) (Python) → ClassName() (Java)
• this (Java) ↔ self (Python)`
    }
  },
  {
    id: 6, icon: "🔤", title: "String 조작", desc: "String 메서드, StringBuilder, char 배열, 문자열 파싱, 불변성",
    color: "c6", freq: "high", freqLabel: "★★☆ 고빈출", diff: "난이도 ●●○",
    importance: "문자열 처리는 코딩테스트 절반 이상에서 등장. Java String의 불변성과 StringBuilder를 이해해야 합니다. 문자열 반복 수정 시 StringBuilder 필수!",
    concept: {
      title: "String 메서드와 StringBuilder",
      desc: `Java의 String은 불변(immutable)입니다. 문자열을 자주 수정해야 할 때는 StringBuilder를 사용해야 성능이 좋습니다. String + 연산은 매번 새 객체를 생성하므로 반복문 안에서 사용하면 느립니다. Python의 문자열 메서드와 이름이 다른 것들에 주의하세요.`,
      syntax: `// ── 주요 String 메서드 ──
String s = "Hello, World!";
s.length()              // 13 (파이썬의 len(s))
s.charAt(0)             // 'H' (인덱스로 문자 접근)
s.substring(7)          // "World!" (7번 인덱스부터 끝)
s.substring(7, 12)      // "World" (7~11, 끝 미포함)
s.indexOf("World")      // 7 (찾은 위치, 없으면 -1)
s.contains("World")     // true
s.replace("World", "Java") // "Hello, Java!"
s.toLowerCase()         // "hello, world!"
s.toUpperCase()         // "HELLO, WORLD!"
s.trim()                // 앞뒤 공백 제거
s.split(", ")           // ["Hello", "World!"] (배열 반환)
s.equals("hello")       // false (대소문자 구분)
s.equalsIgnoreCase("hello, world!") // true

// ── char 배열로 변환 ──
char[] chars = s.toCharArray();
for (char c : chars) {
    System.out.print(c);
}
// 다시 String으로: new String(chars)

// ── StringBuilder (반복 문자열 연결 시!) ──
StringBuilder sb = new StringBuilder();
sb.append("Hello");     // 끝에 추가
sb.append(", ");
sb.append("World");
sb.insert(0, "Hi ");    // 인덱스에 삽입
sb.reverse();           // 뒤집기 (문자열 reverse에 유용!)
sb.deleteCharAt(0);     // 특정 인덱스 문자 삭제
String result = sb.toString();  // String으로 변환

// ── 문자 ↔ 숫자 변환 ──
char c = '5';
int n = c - '0';        // 문자 '5' → 정수 5 (아스키 차이)
char back = (char)(n + '0'); // 정수 5 → 문자 '5'`,
      note: `💡 핵심 포인트
• String은 불변! 반복 연결 시 StringBuilder 필수 (성능 차이 큼)
• 문자 접근: s.charAt(i) (Python의 s[i])
• 길이: s.length() (괄호 있음, 배열은 .length 괄호 없음)
• 문자 '5' → 숫자 5: c - '0' (아스키 코드 차이 이용)
• StringBuilder.reverse()로 문자열 뒤집기`,
      dart: `Python과의 주요 차이점:
• 길이: len(s) (Python) → s.length() (Java)
• 문자 접근: s[i] (Python) → s.charAt(i) (Java)
• 부분 문자열: s[a:b] (Python) → s.substring(a, b) (Java)
• 분리: s.split(',') 동일하지만 Java는 배열 반환
• 불변성: 둘 다 불변이지만 Java는 StringBuilder 필수
• 뒤집기: s[::-1] (Python) → new StringBuilder(s).reverse().toString() (Java)`
    }
  },
  {
    id: 7, icon: "🔢", title: "정렬 & 탐색", desc: "Arrays.sort, Comparator, Collections.sort, 이진탐색, 람다식",
    color: "c7", freq: "high", freqLabel: "★★☆ 고빈출", diff: "난이도 ●●●",
    importance: "정렬은 코딩테스트의 기본. 사용자 정의 Comparator와 이진탐색(Arrays.binarySearch)을 익혀야 합니다. 람다식으로 간결하게 작성 가능합니다.",
    concept: {
      title: "정렬과 탐색",
      desc: `Java의 기본 정렬은 Arrays.sort()와 Collections.sort()입니다. 커스텀 정렬은 Comparator를 사용하며, Java 8 이후 람다식으로 간결하게 작성할 수 있습니다. 이진탐색은 정렬된 배열에서 O(log n) 시간에 값을 찾습니다.`,
      syntax: `// ── 기본 배열 정렬 ──
int[] arr = {3, 1, 4, 1, 5};
Arrays.sort(arr);                  // 오름차순: [1,1,3,4,5]

// ── 내림차순 정렬 (Integer 배열만 가능) ──
Integer[] arr2 = {3, 1, 4, 1, 5};
Arrays.sort(arr2, Collections.reverseOrder()); // [5,4,3,1,1]

// ── ArrayList 정렬 ──
ArrayList<Integer> list = new ArrayList<>();
Collections.sort(list);            // 오름차순
Collections.sort(list, Collections.reverseOrder()); // 내림차순

// ── Comparator 커스텀 정렬 ──
// 문자열 길이 기준 정렬
String[] words = {"banana", "apple", "cherry"};
Arrays.sort(words, (a, b) -> a.length() - b.length());

// 2차원 배열 첫 번째 열 기준 정렬
int[][] pairs = {{3,1},{1,2},{2,0}};
Arrays.sort(pairs, (a, b) -> a[0] - b[0]);  // [[1,2],[2,0],[3,1]]

// 두 번째 열 기준, 같으면 첫 번째 열 기준
Arrays.sort(pairs, (a, b) -> a[1] != b[1] ? a[1] - b[1] : a[0] - b[0]);

// ── 이진탐색 ──
int[] sorted = {1, 2, 3, 4, 5};
int idx = Arrays.binarySearch(sorted, 3);  // 2 (인덱스 반환)
// 없으면 음수 반환

// ── 최댓값/최솟값 ──
int max = Arrays.stream(arr).max().getAsInt();
int min = Arrays.stream(arr).min().getAsInt();
// 또는
int max2 = Collections.max(list);`,
      note: `💡 핵심 포인트
• Comparator 람다: (a, b) -> a - b (오름차순), (a, b) -> b - a (내림차순)
• 기본형 배열(int[])은 내림차순 불가, Integer[]로 변환 필요
• 이진탐색은 정렬된 배열에서만 사용 가능
• Arrays.binarySearch()는 없으면 음수 반환
• 2차원 배열 정렬: Arrays.sort(arr, (a, b) -> a[0] - b[0])`,
      dart: `Python과의 주요 차이점:
• 정렬: list.sort() (Python) → Arrays.sort(arr), Collections.sort(list) (Java)
• 커스텀 정렬: list.sort(key=lambda x: x[0]) (Python) → Arrays.sort(arr, (a,b) -> a[0]-b[0]) (Java)
• 내림차순: list.sort(reverse=True) (Python) → Arrays.sort(arr, Collections.reverseOrder()) (Java)
• 이진탐색: bisect (Python) → Arrays.binarySearch() (Java)
• 최댓값: max(list) (Python) → Collections.max(list) (Java)`
    }
  },
];

// ═══════════════════════════════════════════════════════
// QUESTIONS
// ═══════════════════════════════════════════════════════
const QUESTIONS = [

  // ───────────────────────────────────────────────────
  // CAT 0 — 입출력 & 자료형
  // ───────────────────────────────────────────────────
  { cat:0, id:0, title:"종합 기본개념 — 입출력 & 자료형",
    prompt:`<div style="line-height:1.7">
<b>📥 입출력 & 자료형 — 카테고리 핵심 미리보기</b><br><br>
Java는 <b>강타입(Strongly Typed)</b> 언어입니다. 모든 변수는 선언 시 타입을 명시해야 합니다.<br><br>
<b>🧠 메모리 구조</b><br>
• <code>Stack</code> — 기본형(int, double 등) 값 직접 저장<br>
• <code>Heap</code> — 참조형(String, 배열, 객체) 데이터 저장<br><br>
<b>⚠️ 핵심 주의사항</b><br>
• <code>int / int</code> = 정수 나눗셈! <code>5/2 = 2</code> (소수점 버림)<br>
• String 비교는 반드시 <code>.equals()</code> — <code>==</code>는 주소 비교<br>
• <code>Scanner</code>는 간편, <code>BufferedReader</code>는 빠름 (대량 입력 필수)<br><br>
드릴로 <code>main</code> 구조 · <code>Scanner</code> · <code>System.out.println</code> · <code>Integer.parseInt()</code>를 익혀보세요.
</div>`,
    full:`// ═══════════════════════════════════════════════════
// Java 입출력 전체 패턴 요약
// ═══════════════════════════════════════════════════

// ── 1. 메모리 구조 ──
int x = 10;              // Stack: x = 10 (값 직접)
String s = "Hello";      // Stack: 주소값 → Heap: "Hello"
int[] arr = {1,2,3};     // Stack: 주소값 → Heap: [1,2,3]

// ── 2. 타입 시스템 ──
int    age  = 25;                  // 4바이트, -21억~21억
long   big  = 1234567890123L;      // 8바이트, L 접미사 필수!
double pi   = 3.14159;             // 8바이트, 기본 실수형
float  f    = 3.14f;               // 4바이트, f 접미사 필수!
char   grade = 'A';                // 2바이트, 작은따옴표
boolean ok  = true;                // 참/거짓
String name = "홍길동";             // 참조형, Heap 저장

// ── 3. Scanner (간편 입력) ──
import java.util.Scanner;
Scanner sc = new Scanner(System.in);
String word  = sc.next();          // 단어 하나 (공백 전까지)
String line  = sc.nextLine();      // 한 줄 전체
int    n     = sc.nextInt();       // 정수 바로 읽기
double d     = sc.nextDouble();    // 실수 바로 읽기

// ── 4. BufferedReader (빠른 입력, 대량 데이터 필수) ──
import java.io.*;
import java.util.StringTokenizer;
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
int num = Integer.parseInt(br.readLine().trim());
StringTokenizer st = new StringTokenizer(br.readLine());
int a = Integer.parseInt(st.nextToken());
int b = Integer.parseInt(st.nextToken());

// ── 5. 출력 ──
System.out.println("줄바꿈 포함");  // println
System.out.print("줄바꿈 없음");    // print
System.out.printf("정수:%d 실수:%.2f%n", n, pi);  // 포맷 출력
// 포맷: %d=정수, %f=실수, %s=문자열, %c=문자, %n=줄바꿈

// ── 6. 형변환 ──
// 자동 (작은→큰): int → long → double
int i = 100;
long l = i;              // int → long 자동
double dd = i;           // int → double 자동

// 명시적 (큰→작은): 소수점 버림!
double d2 = 3.99;
int i2 = (int)d2;        // 3 (소수점 버림)

// String ↔ 기본형
int    parsed = Integer.parseInt("42");         // String → int
double dParsed = Double.parseDouble("3.14");    // String → double
long   lParsed = Long.parseLong("999999999999"); // String → long
String str1 = String.valueOf(42);               // int → String
String str2 = Integer.toString(42);             // int → String

// ── 7. 산술·비트 연산 ──
// 5/2=2 (정수!), 5.0/2=2.5, 7%3=1
// long 오버플로우 주의: (long)a * b 형태로 캐스팅
long safe = (long)1_000_000 * 1_000_000;       // 10^12 안전
// Math 유틸 (import 불필요)
Math.max(a,b); Math.min(a,b); Math.abs(-5);
Math.sqrt(16.0); Math.pow(2,10); Math.round(3.5);`,
    hint:"Java의 모든 코드는 클래스 안에 있고, 프로그램은 main 메서드에서 시작합니다.",
    concept: {
      title: "Java 프로그램의 기본 구조",
      desc: `Java는 클래스 기반 언어입니다. 모든 코드는 반드시 class 안에 있어야 하고, 프로그램의 시작점은 public static void main(String[] args) 메서드입니다. Python처럼 파일에 바로 코드를 쓸 수 없습니다.`,
      syntax: `public class Main {
    public static void main(String[] args) {
        // 여기에 코드 작성
    }
}`,
      note: `💡 class 이름은 파일명과 일치해야 합니다. 코딩테스트에서는 보통 Main 클래스를 씁니다.`,
      dart: `void main() { } → public static void main(String[] args) { }`
    },
    drills: [
      { title:"드릴 1 — main 메서드 키워드", prompt:"Java 프로그램의 시작점인 main 메서드의 올바른 시그니처에서 빈칸을 채우세요.<br><code>public ___ void main(String[] args)</code>", full:`public class Main {
    public static void main(String[] args) {
        System.out.println("Hello!");
    }
}`, blank:"public ___ void main(String[] args)", answer:"static", options:["static","final","abstract","private"], blocks:["public class Main {","    public static void main(String[] args) {","        System.out.println(\"Hello!\");","    }","}"], hint:"main 메서드는 객체를 생성하지 않고 호출되므로 static 키워드가 필요합니다." },
      { title:"드릴 2 — Scanner nextInt() 메서드", prompt:"Scanner로 정수 하나를 입력받을 때 사용하는 메서드를 완성하세요.<br><code>int n = sc.___Int();</code>", full:`import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.println(n);
    }
}`, blank:"int n = sc.___Int();", answer:"next", options:["next","read","get","scan"], blocks:["import java.util.Scanner;","Scanner sc = new Scanner(System.in);","int n = sc.nextInt();","System.out.println(n);"], hint:"Scanner에서 정수를 읽는 메서드는 next + 타입 형태입니다. nextInt(), nextDouble(), next() 등이 있습니다." },
      { title:"드릴 3 — System.out.println 출력 구조", prompt:"Java에서 콘솔에 줄바꿈과 함께 출력하는 메서드의 전체 이름을 완성하세요.<br><code>System.out.___(\"Hello\");</code>", full:`public class Main {
    public static void main(String[] args) {
        System.out.println("Hello");  // 줄바꿈 포함
        System.out.print("World");    // 줄바꿈 없음
    }
}`, blank:"System.out.___(\"Hello\");", answer:"println", options:["println","print","printf","write"], blocks:["System.out.println(\"Hello\");","System.out.print(\"World\");"], hint:"println = print + line(줄). 출력 후 자동으로 줄바꿈을 합니다. print는 줄바꿈 없이 출력합니다." },
      { title:"드릴 4 — Integer.parseInt() 형변환", prompt:"문자열 <code>\"42\"</code>를 정수로 변환하는 메서드를 완성하세요.<br><code>int n = Integer.___(\"42\");</code>", full:`public class Main {
    public static void main(String[] args) {
        String s = "42";
        int n = Integer.parseInt(s);
        System.out.println(n + 1);  // 43
    }
}`, blank:"int n = Integer.___(\"42\");", answer:"parseInt", options:["parseInt","toInt","valueOf","convert"], blocks:["String s = \"42\";","int n = Integer.parseInt(s);","System.out.println(n + 1);  // 43"], hint:"Integer.parseInt()는 Python의 int()에 해당하는 String→int 변환 메서드입니다. 모든 입력 파싱의 핵심!" }
    ]
  },
  { cat:0, id:1, title:"Scanner로 정수 입력",
    prompt:"<code>Scanner</code>를 사용해 정수 하나를 입력받아 출력하는 코드를 완성하세요.",
    full:`import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.println(n);
    }
}`,
    hint:"Scanner의 nextInt()는 정수를 바로 읽습니다. Python의 int(input())과 같은 역할입니다.",
    concept: {
      title: "Scanner — 정수/실수/문자열 입력",
      desc: `Scanner는 Java의 기본 입력 클래스입니다. nextInt(), nextDouble(), next(), nextLine() 메서드로 각 타입을 읽습니다. Python의 input()과 달리 타입별로 다른 메서드를 씁니다.`,
      syntax: `import java.util.Scanner;
Scanner sc = new Scanner(System.in);

int n = sc.nextInt();        // 정수 읽기
double d = sc.nextDouble();  // 실수 읽기
String word = sc.next();     // 단어 (공백 전까지)
String line = sc.nextLine(); // 한 줄 전체`,
      note: `💡 nextInt() 후 nextLine()을 쓰면 개행문자가 남아 빈 줄이 읽힙니다. nextInt() 다음 nextLine()을 한 번 더 호출해 비워주세요.`,
      dart: `sc.nextInt() → int(input())\nsc.nextDouble() → float(input())\nsc.next() → input()\nsc.nextLine() → input() (한 줄)`
    },
    drills: [
      { title:"드릴 1 — Scanner 정수 읽기", prompt:"Scanner를 사용해 정수를 읽는 메서드 이름의 빈칸을 채우세요.<br><code>int n = sc.___Int();</code>", full:`import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.println(n);
    }
}`, blank:"int n = sc.___Int();", answer:"next", options:["next","read","get","scan"], blocks:["import java.util.Scanner;","public class Main {","    public static void main(String[] args) {","        Scanner sc = new Scanner(System.in);","        int n = sc.nextInt();","        System.out.println(n);","    }","}"], hint:"Scanner에서 정수를 읽는 메서드는 next + 타입 형태입니다." },
      { title:"드릴 2 — Integer.parseInt 활용", prompt:"문자열 <code>\"42\"</code>를 정수로 변환하는 코드의 빈칸을 채우세요.<br><code>int n = Integer.___(\"42\");</code>", full:`public class Main {
    public static void main(String[] args) {
        String s = "42";
        int n = Integer.parseInt(s);
        System.out.println(n);
    }
}`, blank:"int n = Integer.___( \"42\" );", answer:"parseInt", options:["parseInt","toInt","valueOf","convert"], blocks:["String s = \"42\";","int n = Integer.parseInt(s);","System.out.println(n);"], hint:"Integer.parseInt()는 Python의 int()에 해당하는 String → int 변환 메서드입니다." },
      { title:"드릴 3 — 한 줄 여러 정수 입력", prompt:"<code>StringTokenizer</code>로 '3 5'를 입력받아 두 정수 a, b에 저장하는 코드를 완성하세요.", full:`import java.io.*;
import java.util.StringTokenizer;
public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int a = Integer.parseInt(st.nextToken());
        int b = Integer.parseInt(st.nextToken());
        System.out.println(a + b);
    }
}`, blank:"int a = Integer.parseInt(st.___(  ));", answer:"nextToken", options:["nextToken","next","nextInt","readLine"], blocks:["BufferedReader br = new BufferedReader(new InputStreamReader(System.in));","StringTokenizer st = new StringTokenizer(br.readLine());","int a = Integer.parseInt(st.nextToken());","int b = Integer.parseInt(st.nextToken());","System.out.println(a + b);"], hint:"StringTokenizer의 nextToken()은 다음 토큰(공백으로 구분된 문자열)을 반환합니다." },
      { title:"드릴 4 — printf 포맷 출력", prompt:"실수 <code>3.14159</code>를 소수점 2자리로 출력하는 코드를 완성하세요.<br><code>System.out.printf(\"___.2f%n\", 3.14159);</code>", full:`public class Main {
    public static void main(String[] args) {
        double x = 3.14159;
        System.out.printf("%.2f%n", x);
    }
}`, blank:"System.out.printf(\"___.2f%n\", 3.14159);", answer:"%", options:["%","#","$","&"], blocks:["double x = 3.14159;","System.out.printf(\"%.2f%n\", x);"], hint:"printf의 포맷 지정자는 %로 시작합니다. %.2f는 소수점 2자리 실수를 의미합니다." }
    ]
  },
  { cat:0, id:2, title:"자료형과 형변환",
    prompt:"Java의 기본 자료형과 형변환 방법을 연습합니다. <code>int</code>, <code>double</code>, <code>String</code> 간의 변환을 확인하세요.",
    full:`public class Main {
    public static void main(String[] args) {
        int i = 42;
        double d = (double) i;       // int → double (명시적 캐스팅)
        String s = String.valueOf(i); // int → String
        int back = Integer.parseInt(s); // String → int
        System.out.println(d);       // 42.0
        System.out.println(back);    // 42
    }
}`,
    hint:"기본형 → 큰 타입은 자동 변환(암묵적), 큰 타입 → 작은 타입은 명시적 캐스팅 (double → int)이 필요합니다.",
    concept: {
      title: "기본 자료형과 형변환",
      desc: `Java는 정적 타이핑 언어로 모든 변수에 타입을 명시해야 합니다. 작은 타입에서 큰 타입으로는 자동 변환되지만, 반대는 명시적 캐스팅이 필요합니다.`,
      syntax: `// 기본 자료형
int i = 42;             // 정수 (32비트)
long l = 1234567890L;   // 큰 정수 (64비트)
double d = 3.14;        // 실수 (64비트)
boolean b = true;       // 참/거짓
char c = 'A';           // 문자 하나

// 형변환
double d2 = i;          // int → double 자동
int i2 = (int) d;       // double → int 명시적 (소수점 버림)
String s = String.valueOf(i);
int n = Integer.parseInt(s);`,
      note: `💡 int / int = int! 실수 결과를 원하면 (double)n / m 또는 n * 1.0 / m 으로 캐스팅.`,
      dart: `타입 명시: int, double 동일\n(int) 캐스팅 → .toInt()\ndouble → int: d.toInt()\nString → int: int.parse(s)`
    },
    drills: [
      { title:"드릴 1 — int를 String으로 변환", prompt:"정수 <code>42</code>를 String으로 변환하는 메서드의 빈칸을 채우세요.<br><code>String s = String.___(42);</code>", full:`public class Main {
    public static void main(String[] args) {
        int n = 42;
        String s = String.valueOf(n);
        System.out.println(s);
    }
}`, blank:"String s = String.___(42);", answer:"valueOf", options:["valueOf","toString","parse","convert"], blocks:["int n = 42;","String s = String.valueOf(n);","System.out.println(s);"], hint:"String.valueOf()는 기본형을 String으로 변환하는 메서드입니다." },
      { title:"드릴 2 — double을 int로 캐스팅", prompt:"실수를 정수로 변환할 때 사용하는 명시적 캐스팅 문법을 완성하세요.<br><code>int n = (___)3.9;</code>", full:`public class Main {
    public static void main(String[] args) {
        double d = 3.9;
        int n = (int) d;
        System.out.println(n);  // 3 (소수점 버림)
    }
}`, blank:"int n = (___)3.9;", answer:"int", options:["int","Integer","floor","round"], blocks:["double d = 3.9;","int n = (int) d;","System.out.println(n);"], hint:"소괄호 안에 변환하려는 타입명을 쓰는 것이 캐스팅 문법입니다." },
      { title:"드릴 3 — 정수 나눗셈 주의", prompt:"<code>5 / 2</code>의 결과를 실수로 얻으려면 다음과 같이 캐스팅합니다. 빈칸을 채우세요.<br><code>double result = (___)5 / 2;</code>", full:`public class Main {
    public static void main(String[] args) {
        double result = (double)5 / 2;
        System.out.println(result);  // 2.5
    }
}`, blank:"double result = (___)5 / 2;", answer:"double", options:["double","float","long","real"], blocks:["double result = (double)5 / 2;","System.out.println(result);  // 2.5"], hint:"정수/정수는 정수 결과입니다. 하나를 double로 캐스팅하면 실수 나눗셈이 됩니다." },
      { title:"드릴 4 — char와 int 변환", prompt:"문자 <code>'5'</code>를 숫자 <code>5</code>로 변환하는 방법의 빈칸을 채우세요.<br><code>int n = '5' - ___;</code>", full:`public class Main {
    public static void main(String[] args) {
        char c = '5';
        int n = c - '0';
        System.out.println(n);  // 5
    }
}`, blank:"int n = '5' - ___;", answer:"'0'", options:["'0'","'a'","48,"," 0"], blocks:["char c = '5';","int n = c - '0';","System.out.println(n);  // 5"], hint:"아스키코드에서 '0'은 48입니다. 문자 숫자에서 '0'을 빼면 정수 숫자가 됩니다." }
    ]
  },
  { cat:0, id:3, title:"BufferedReader 빠른 입력",
    prompt:"대량 입력에 유리한 <code>BufferedReader</code>와 <code>StringTokenizer</code>를 활용한 입력 패턴을 익힙니다.",
    full:`import java.io.*;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine().trim());
        int total = 0;
        for (int i = 0; i < n; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            int a = Integer.parseInt(st.nextToken());
            int b = Integer.parseInt(st.nextToken());
            total += a + b;
        }
        System.out.println(total);
    }
}`,
    hint:"BufferedReader는 Scanner보다 빠릅니다. throws IOException을 main에 선언하거나 try-catch로 감싸야 합니다.",
    concept: {
      title: "BufferedReader와 StringTokenizer",
      desc: `코딩테스트에서 입력이 많을 때 Scanner는 느립니다. BufferedReader + StringTokenizer 조합이 표준 빠른 입력 패턴입니다. readLine()은 한 줄을 문자열로 읽고, StringTokenizer로 공백 구분 토큰을 분리합니다.`,
      syntax: `import java.io.*;
import java.util.StringTokenizer;

BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
// throws IOException 또는 try-catch 필요

String line = br.readLine();  // 한 줄 읽기
int n = Integer.parseInt(br.readLine().trim());  // 정수 한 개

StringTokenizer st = new StringTokenizer(br.readLine());
int a = Integer.parseInt(st.nextToken());  // 첫 번째 토큰
int b = Integer.parseInt(st.nextToken());  // 두 번째 토큰`,
      note: `💡 시간제한이 엄격한 문제는 BufferedReader를 쓰세요. StringBuilder로 출력을 모아 한 번에 print하면 더 빠릅니다.`,
      dart: `stdin.readLineSync() → br.readLine()\n분리: split(' ') → StringTokenizer`
    },
    drills: [
      { title:"드릴 1 — BufferedReader 선언", prompt:"BufferedReader를 생성하는 코드의 빈칸을 채우세요.<br><code>BufferedReader br = new BufferedReader(new ___(System.in));</code>", full:`import java.io.*;
public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        System.out.println(br.readLine());
    }
}`, blank:"new BufferedReader(new ___(System.in));", answer:"InputStreamReader", options:["InputStreamReader","StreamReader","ConsoleReader","InputReader"], blocks:["import java.io.*;","BufferedReader br = new BufferedReader(new InputStreamReader(System.in));","System.out.println(br.readLine());"], hint:"System.in (바이트 스트림)을 문자 스트림으로 변환하는 클래스가 InputStreamReader입니다." },
      { title:"드릴 2 — throws IOException 선언", prompt:"BufferedReader 사용 시 main 메서드에 예외 선언이 필요합니다. 빈칸을 채우세요.<br><code>public static void main(String[] args) throws ___</code>", full:`import java.io.*;
public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        br.readLine();
    }
}`, blank:"public static void main(String[] args) throws ___", answer:"IOException", options:["IOException","Exception","RuntimeException","InputException"], blocks:["import java.io.*;","public class Main {","    public static void main(String[] args) throws IOException {","        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));","    }","}"], hint:"BufferedReader.readLine()은 체크드 예외(checked exception)인 IOException을 던질 수 있습니다." },
      { title:"드릴 3 — readLine으로 정수 파싱", prompt:"<code>br.readLine()</code>으로 읽은 줄을 정수로 변환하는 코드를 완성하세요.", full:`import java.io.*;
public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine().trim());
        System.out.println(n);
    }
}`, blank:"int n = Integer.___(br.readLine().trim());", answer:"parseInt", options:["parseInt","valueOf","intValue","toInt"], blocks:["BufferedReader br = new BufferedReader(new InputStreamReader(System.in));","int n = Integer.parseInt(br.readLine().trim());","System.out.println(n);"], hint:"br.readLine()은 문자열을 반환하므로 Integer.parseInt()로 변환해야 합니다." },
      { title:"드릴 4 — StringBuilder로 빠른 출력", prompt:"반복 출력 시 StringBuilder를 사용하면 빠릅니다. 빈칸을 채우세요.", full:`import java.io.*;
public class Main {
    public static void main(String[] args) throws IOException {
        StringBuilder sb = new StringBuilder();
        for (int i = 1; i <= 5; i++) {
            sb.append(i).append("\\n");
        }
        System.out.print(sb);
    }
}`, blank:"StringBuilder sb = new ___();", answer:"StringBuilder", options:["StringBuilder","StringBuffer","String","Writer"], blocks:["StringBuilder sb = new StringBuilder();","for (int i = 1; i <= 5; i++) {","    sb.append(i).append(\"\\n\");","}","System.out.print(sb);"], hint:"StringBuilder는 문자열을 효율적으로 누적하는 클래스입니다. append()로 추가하고 toString()으로 변환합니다." }
    ]
  },

  // ───────────────────────────────────────────────────
  // CAT 1 — 조건문
  // ───────────────────────────────────────────────────,
  { cat:0, id:4, title:"여러 줄 입력 처리",
    prompt:"N줄에 걸쳐 입력되는 데이터를 <code>BufferedReader</code>로 읽어 처리하는 패턴을 익힙니다.",
    full:`import java.io.*;
public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine().trim());
        int sum = 0;
        for (int i = 0; i < n; i++) {
            sum += Integer.parseInt(br.readLine().trim());
        }
        System.out.println(sum);
    }
}`,
    hint:"readLine()을 반복 호출하면 줄마다 입력을 읽습니다. trim()으로 개행/공백을 제거하세요.",
    concept: {
      title: "여러 줄 입력 패턴",
      desc: `코딩테스트에서 N줄에 걸쳐 값을 입력하는 경우가 많습니다. BufferedReader의 readLine()을 N번 호출하거나, for 반복문에서 줄마다 파싱합니다.`,
      syntax: `// 패턴 1: N개의 정수, 한 줄씩
int n = Integer.parseInt(br.readLine().trim());
for (int i = 0; i < n; i++) {
    int x = Integer.parseInt(br.readLine().trim());
}

// 패턴 2: N줄, 각 줄에 여러 값
for (int i = 0; i < n; i++) {
    StringTokenizer st = new StringTokenizer(br.readLine());
    int a = Integer.parseInt(st.nextToken());
    int b = Integer.parseInt(st.nextToken());
}`,
      note: `💡 trim()을 빠뜨리면 개행 문자가 남아 parseInt에서 NumberFormatException이 발생할 수 있습니다.`,
      dart: `for i in range(n): x = int(input()) → 동일 구조`
    },
    drills: [
      { title:"드릴 1 — N줄 정수 합산", prompt:"N개의 정수를 N줄로 입력받아 합산하는 코드의 빈칸을 채우세요.", full:`import java.io.*;
public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine().trim());
        int sum = 0;
        for (int i = 0; i < n; i++) {
            sum += Integer.parseInt(br.readLine().trim());
        }
        System.out.println(sum);
    }
}`, blank:"for (int i = 0; i < ___; i++)", answer:"n", options:["n","10","i","sum"], blocks:["int n = Integer.parseInt(br.readLine().trim());","int sum = 0;","for (int i = 0; i < n; i++) {","    sum += Integer.parseInt(br.readLine().trim());","}","System.out.println(sum);"], hint:"n번 반복해서 readLine()으로 한 줄씩 읽습니다." },
      { title:"드릴 2 — 공백 구분 두 정수 입력", prompt:"한 줄에 두 정수가 공백으로 구분될 때 split으로 파싱하는 코드를 완성하세요.", full:`import java.io.*;
public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] parts = br.readLine().split(" ");
        int a = Integer.parseInt(parts[0]);
        int b = Integer.parseInt(parts[1]);
        System.out.println(a + b);
    }
}`, blank:"String[] parts = br.readLine().split(\"___\");", answer:" ", options:["\" \"","\":\"","\",\"","\"\\n\""], blocks:["String[] parts = br.readLine().split(\" \");","int a = Integer.parseInt(parts[0]);","int b = Integer.parseInt(parts[1]);","System.out.println(a + b);"], hint:"공백으로 구분된 값은 split(\" \")로 분리합니다." },
      { title:"드릴 3 — System.out.println vs print", prompt:"줄바꿈 없이 출력하는 메서드를 완성하세요.<br><code>System.out.___(\"Hello \");</code>", full:`public class Main {
    public static void main(String[] args) {
        System.out.print("Hello ");
        System.out.print("World");
        System.out.println();  // 마지막에 줄바꿈
    }
}`, blank:"System.out.___( \"Hello \" );", answer:"print", options:["print","println","write","out"], blocks:["System.out.print(\"Hello \");","System.out.print(\"World\");","System.out.println();"], hint:"println은 줄바꿈 포함, print는 줄바꿈 없이 출력합니다." },
      { title:"드릴 4 — String.format 포맷", prompt:"String.format으로 소수점 2자리 포맷 문자열을 만드는 코드를 완성하세요.", full:`public class Main {
    public static void main(String[] args) {
        double x = 3.14159;
        String s = String.format("%.2f", x);
        System.out.println(s);  // 3.14
    }
}`, blank:"String s = String.format(\"___.2f\", x);", answer:"%", options:["%","#","$","&"], blocks:["double x = 3.14159;","String s = String.format(\"%.2f\", x);","System.out.println(s);"], hint:"String.format은 printf와 같은 형식 지정자를 씁니다. %.2f는 소수점 2자리." }
    ]
  },
  { cat:0, id:5, title:"Math 클래스 활용",
    prompt:"<code>Math.max()</code>, <code>Math.min()</code>, <code>Math.abs()</code>, <code>Math.sqrt()</code> 등 코딩테스트 필수 수학 메서드를 익힙니다.",
    full:`public class Main {
    public static void main(String[] args) {
        System.out.println(Math.max(3, 7));      // 7
        System.out.println(Math.min(3, 7));      // 3
        System.out.println(Math.abs(-5));        // 5
        System.out.println(Math.sqrt(16));       // 4.0
        System.out.println(Math.pow(2, 10));     // 1024.0
        System.out.println((int)Math.pow(2,10)); // 1024
    }
}`,
    hint:"Math 메서드는 static이므로 import 없이 사용 가능합니다. Math.pow()는 double을 반환합니다.",
    concept: {
      title: "Math 클래스 — 수학 유틸",
      desc: `Java의 Math 클래스는 java.lang에 포함되어 import 없이 사용합니다. 코딩테스트에서 자주 쓰이는 메서드들을 기억해두세요.`,
      syntax: `Math.max(a, b)    // 최댓값
Math.min(a, b)    // 최솟값
Math.abs(x)       // 절댓값
Math.sqrt(x)      // 제곱근 (double 반환)
Math.pow(a, b)    // a의 b제곱 (double 반환)
Math.floor(x)     // 내림 (double 반환)
Math.ceil(x)      // 올림 (double 반환)
Math.round(x)     // 반올림 (long 반환)
Math.log(x)       // 자연로그
Math.PI           // 원주율 3.14159...`,
      note: `💡 Math.pow(2, 10) = 1024.0 (double). 정수로 쓰려면 (int)Math.pow(2,10) 또는 (long)으로 캐스팅.`,
      dart: `pow(2,10) → Math.pow(2,10)\nmax(a,b) → Math.max(a,b)\nabs(x) → Math.abs(x)\nsqrt(x) → Math.sqrt(x)`
    },
    drills: [
      { title:"드릴 1 — Math.max / Math.min", prompt:"두 수 중 큰 값을 반환하는 메서드를 완성하세요.<br><code>int m = Math.___(a, b);</code>", full:`public class Main {
    public static void main(String[] args) {
        int a = 5, b = 9;
        int m = Math.max(a, b);
        System.out.println(m);  // 9
    }
}`, blank:"int m = Math.___(a, b);", answer:"max", options:["max","min","bigger","large"], blocks:["int a = 5, b = 9;","int m = Math.max(a, b);","System.out.println(m);"], hint:"Math.max(a, b)는 a, b 중 큰 값을 반환합니다." },
      { title:"드릴 2 — Math.abs 절댓값", prompt:"음수의 절댓값을 구하는 코드를 완성하세요.", full:`public class Main {
    public static void main(String[] args) {
        int x = -7;
        int result = Math.abs(x);
        System.out.println(result);  // 7
    }
}`, blank:"int result = Math.___(x);", answer:"abs", options:["abs","absolute","positive","fabs"], blocks:["int x = -7;","int result = Math.abs(x);","System.out.println(result);"], hint:"Math.abs()는 절댓값을 반환합니다. Python의 abs()와 동일합니다." },
      { title:"드릴 3 — Math.sqrt 제곱근", prompt:"정수의 제곱근을 구해 정수로 변환하는 코드를 완성하세요.", full:`public class Main {
    public static void main(String[] args) {
        int n = 25;
        int root = (int) Math.sqrt(n);
        System.out.println(root);  // 5
    }
}`, blank:"int root = (int) Math.___(n);", answer:"sqrt", options:["sqrt","pow","root","sq"], blocks:["int n = 25;","int root = (int) Math.sqrt(n);","System.out.println(root);"], hint:"Math.sqrt()는 double을 반환합니다. 정수로 쓰려면 (int)로 캐스팅하세요." },
      { title:"드릴 4 — Math.pow 거듭제곱", prompt:"2의 10제곱을 계산하는 코드를 완성하세요.", full:`public class Main {
    public static void main(String[] args) {
        long result = (long) Math.pow(2, 10);
        System.out.println(result);  // 1024
    }
}`, blank:"long result = (long) Math.___(2, 10);", answer:"pow", options:["pow","power","exp","mul"], blocks:["long result = (long) Math.pow(2, 10);","System.out.println(result);"], hint:"Math.pow(밑, 지수)는 double을 반환합니다. 큰 정수 결과면 (long)으로 캐스팅하세요." }
    ]
  },
  { cat:0, id:6, title:"int ↔ String 변환 총정리",
    prompt:"코딩테스트에서 자주 쓰는 타입 변환 패턴을 한 번에 정리합니다. <code>Integer.parseInt</code>, <code>String.valueOf</code>, <code>Integer.toBinaryString</code> 등을 확인하세요.",
    full:`public class Main {
    public static void main(String[] args) {
        // String → int
        int n = Integer.parseInt("42");

        // int → String
        String s1 = String.valueOf(42);
        String s2 = Integer.toString(42);
        String s3 = "" + 42;   // 간단하지만 비추

        // int → 이진/8진/16진 문자열
        System.out.println(Integer.toBinaryString(10)); // "1010"
        System.out.println(Integer.toOctalString(8));   // "10"
        System.out.println(Integer.toHexString(255));   // "ff"

        // 16진수 문자열 → int
        int hex = Integer.parseInt("ff", 16);           // 255
        System.out.println(hex);
    }
}`,
    hint:"Integer.parseInt(s, 진수)로 n진수 문자열을 10진수 정수로 변환할 수 있습니다.",
    concept: {
      title: "int ↔ String 변환 완전 정리",
      desc: `Java 코딩테스트에서 타입 변환은 필수입니다. String → int는 Integer.parseInt(), int → String은 String.valueOf() 또는 Integer.toString()을 씁니다.`,
      syntax: `// String → int
int n = Integer.parseInt("42");          // 10진수
int bin = Integer.parseInt("1010", 2);  // 2진수 → 10
int hex = Integer.parseInt("ff", 16);   // 16진수 → 10

// int → String
String s = String.valueOf(42);
String s2 = Integer.toString(42);

// int → 진수 문자열
Integer.toBinaryString(10)  // "1010"
Integer.toHexString(255)    // "ff"
Integer.toOctalString(8)    // "10"

// char → int (아스키)
char c = 'A';
int ascii = (int) c;       // 65
int digit = '5' - '0';    // 5`,
      note: `💡 "" + 42 로도 String 변환이 되지만 코드가 불명확해집니다. String.valueOf(n)이 명확합니다.`,
      dart: `int.parse(s) → Integer.parseInt(s)\nn.toString() → String.valueOf(n)\nn.toRadixString(2) → Integer.toBinaryString(n)`
    },
    drills: [
      { title:"드릴 1 — 2진수 문자열로 변환", prompt:"정수를 2진수 문자열로 변환하는 메서드를 완성하세요.", full:`public class Main {
    public static void main(String[] args) {
        int n = 10;
        System.out.println(Integer.toBinaryString(n)); // 1010
    }
}`, blank:"Integer.___(n)", answer:"toBinaryString", options:["toBinaryString","toHexString","toOctalString","toString"], blocks:["int n = 10;","System.out.println(Integer.toBinaryString(n));"], hint:"Integer.toBinaryString()은 정수를 2진수 문자열로 변환합니다." },
      { title:"드릴 2 — n진수 파싱", prompt:"16진수 문자열 \"ff\"를 10진수 정수로 변환하는 코드를 완성하세요.", full:`public class Main {
    public static void main(String[] args) {
        int n = Integer.parseInt("ff", 16);
        System.out.println(n);  // 255
    }
}`, blank:"int n = Integer.parseInt(\"ff\", ___);", answer:"16", options:["16","2","8","10"], blocks:["int n = Integer.parseInt(\"ff\", 16);","System.out.println(n);"], hint:"Integer.parseInt(문자열, 진수)로 해당 진수의 문자열을 10진수로 변환합니다." },
      { title:"드릴 3 — 숫자 ↔ 문자 변환", prompt:"문자 '7'을 정수 7로 변환하는 코드를 완성하세요.", full:`public class Main {
    public static void main(String[] args) {
        char c = '7';
        int n = c - '0';
        System.out.println(n);  // 7
    }
}`, blank:"int n = c - ___;", answer:"'0'", options:["'0'","0","'a'","48"], blocks:["char c = '7';","int n = c - '0';","System.out.println(n);"], hint:"숫자 문자에서 '0'을 빼면 해당 정수값이 됩니다. 아스키 코드 차이 활용입니다." },
      { title:"드릴 4 — 자리수 합 구하기", prompt:"정수를 String으로 변환한 뒤 각 자리 숫자를 합산하는 코드를 완성하세요.", full:`public class Main {
    public static void main(String[] args) {
        int n = 1234;
        String s = String.valueOf(n);
        int sum = 0;
        for (char c : s.toCharArray()) {
            sum += c - '0';
        }
        System.out.println(sum);  // 10
    }
}`, blank:"String s = String.___(n);", answer:"valueOf", options:["valueOf","toString","parse","format"], blocks:["int n = 1234;","String s = String.valueOf(n);","int sum = 0;","for (char c : s.toCharArray()) {","    sum += c - '0';","}","System.out.println(sum);"], hint:"String.valueOf(n)으로 정수를 문자열로 변환한 뒤 toCharArray()로 각 자리를 처리합니다." }
    ]
  },

// ─── CAT 1 추가 ─────────────────────────────────────────,

  // ───────────────────────────────────────────────────
  // CAT 1 — 조건문
  // ───────────────────────────────────────────────────
  { cat:1, id:0, title:"종합 기본개념 — 조건문",
    prompt:`<div style="line-height:1.7">
<b>🔀 조건문 — 카테고리 핵심 미리보기</b><br><br>
Java 조건문은 소괄호 <code>()</code>에 조건, 중괄호 <code>{}</code>에 실행코드를 씁니다.<br><br>
<b>⚠️ Python과의 핵심 차이</b><br>
• <code>elif</code> → <code>else if</code> (두 단어!)<br>
• 논리 연산자: <code>and/or/not</code> → <code>&amp;&amp; / || / !</code><br>
• String 비교: <code>==</code> ❌ → <code>.equals()</code> ✅<br>
• <code>switch</code>문에서 <code>break</code> 빠뜨리면 fall-through 주의!<br><br>
<b>📌 자주 쓰는 패턴</b><br>
• 홀짝: <code>n % 2 == 0</code> &nbsp;• 범위: <code>x &gt;= 0 &amp;&amp; x &lt;= 100</code><br>
• 삼항: <code>(조건) ? 참값 : 거짓값</code>
</div>`,
    full:`// Java 조건문의 모든 것
int score = 85;

// ── 1. if / else if / else ──
if (score >= 90) {
    System.out.println("A");
} else if (score >= 80) {      // Python의 elif → Java의 else if
    System.out.println("B");
} else if (score >= 70) {
    System.out.println("C");
} else {
    System.out.println("F");
}

// ── 2. 비교 연산자 ──
// ==  같다 (기본형), !=  다름, >  크다, >=  크거나같다, <  작다, <=  작거나같다

// ── 3. 논리 연산자 ──
// &&  AND (둘 다 참)  ||  OR (하나라도 참)  !  NOT (반전)
if (score >= 80 && score < 90) {
    System.out.println("B등급");
}
if (score < 0 || score > 100) {
    System.out.println("잘못된 점수");
}

// ── 4. 삼항 연산자 ──
String result = (score >= 60) ? "합격" : "불합격";
int max = (score > 80) ? score : 80;

// ── 5. String 비교 (중요!) ──
String s = "hello";
if (s.equals("hello"))           { /* ✅ 내용 비교 */ }
if ("hello".equals(s))           { /* ✅ NPE 방지용 */ }
if (s.equalsIgnoreCase("HELLO")) { /* ✅ 대소문자 무시 */ }
// if (s == "hello") → ❌ 주소 비교라 위험!

// ── 6. switch 문 ──
int day = 3;
switch (day) {
    case 1: System.out.println("월요일"); break;
    case 2: System.out.println("화요일"); break;
    case 3: System.out.println("수요일"); break;
    default: System.out.println("기타"); break;
    // break 없으면 다음 case도 실행됨 (fall-through 주의!)
}

// 여러 case 묶기
switch (score / 10) {
    case 10: case 9: System.out.println("A"); break;
    case 8:          System.out.println("B"); break;
    default:         System.out.println("C");
}

// ── 7. 자주 쓰는 패턴 ──
boolean isEven = (score % 2 == 0);           // 짝수 판별
boolean inRange = (score >= 0 && score <= 100); // 범위 체크
boolean isMultiple = (score % 3 == 0);       // 배수 판별`,
    hint:"Java는 중괄호 {}로 블록을 구분하고, else if (두 단어)를 씁니다. Python의 elif와 다릅니다.",
    concept: {
      title: "if / else if / else 조건문",
      desc: `Java 조건문은 소괄호()에 조건식, 중괄호{}에 실행 코드를 씁니다. Python의 elif는 Java에서 else if (두 단어)입니다. 세미콜론(;)은 문장 끝에 필수입니다.`,
      syntax: `if (조건1) {
    // 조건1이 참일 때
} else if (조건2) {   // Python: elif
    // 조건2가 참일 때
} else {
    // 모두 거짓일 때
}`,
      note: `💡 블록 안에 한 줄만 있으면 중괄호를 생략할 수 있지만, 코딩테스트에서는 항상 중괄호를 쓰는 것이 안전합니다.`,
      dart: `if/else 동일\nelif → else if\n중괄호 {} 동일\n세미콜론 ; 동일`
    },
    drills: [
      { title:"드릴 1 — else if 키워드", prompt:"Java 조건문에서 Python의 <code>elif</code>에 해당하는 키워드를 빈칸에 채우세요.<br><code>} ___ if (n < 0) {</code>", full:`public class Main {
    public static void main(String[] args) {
        int n = 5;
        if (n > 0) {
            System.out.println("양수");
        } else if (n < 0) {
            System.out.println("음수");
        } else {
            System.out.println("0");
        }
    }
}`, blank:"} ___ if (n < 0) {", answer:"else", options:["else","elif","or","other"], blocks:["if (n > 0) {","    System.out.println(\"양수\");","} else if (n < 0) {","    System.out.println(\"음수\");","} else {","    System.out.println(\"0\");","}"], hint:"Java에서 Python의 elif는 'else if' 두 단어로 씁니다." },
      { title:"드릴 2 — 홀짝 판별", prompt:"정수 n이 짝수인지 홀수인지 판별하는 조건을 완성하세요.<br><code>if (n % 2 ___ 0)</code>", full:`public class Main {
    public static void main(String[] args) {
        int n = 4;
        if (n % 2 == 0) {
            System.out.println("짝수");
        } else {
            System.out.println("홀수");
        }
    }
}`, blank:"if (n % 2 ___ 0)", answer:"==", options:["==","=","!=",">="], blocks:["if (n % 2 == 0) {","    System.out.println(\"짝수\");","} else {","    System.out.println(\"홀수\");","}"], hint:"나머지(%)가 0이면 짝수. 같음 비교는 == (대입 =이 아님)." },
      { title:"드릴 3 — 논리 연산자 &&", prompt:"두 조건이 모두 참일 때 실행되는 논리 연산자를 채우세요.<br><code>if (a > 0 ___ b > 0)</code>", full:`public class Main {
    public static void main(String[] args) {
        int a = 3, b = 5;
        if (a > 0 && b > 0) {
            System.out.println("둘 다 양수");
        }
    }
}`, blank:"if (a > 0 ___ b > 0)", answer:"&&", options:["&&","||","and","&"], blocks:["if (a > 0 && b > 0) {","    System.out.println(\"둘 다 양수\");","}"], hint:"Java에서 AND 논리 연산자는 && 입니다. Python의 'and'와 다릅니다." },
      { title:"드릴 4 — 삼항 연산자", prompt:"삼항 연산자로 나이에 따라 '성인'/'미성년자'를 결정하는 코드를 완성하세요.<br><code>String result = (age >= 18) ___ \"성인\" : \"미성년자\";</code>", full:`public class Main {
    public static void main(String[] args) {
        int age = 20;
        String result = (age >= 18) ? "성인" : "미성년자";
        System.out.println(result);
    }
}`, blank:"String result = (age >= 18) ___ \"성인\" : \"미성년자\";", answer:"?", options:["?","if","then",":"], blocks:["int age = 20;","String result = (age >= 18) ? \"성인\" : \"미성년자\";","System.out.println(result);"], hint:"삼항 연산자: 조건 ? 참일때값 : 거짓일때값. Python과 순서가 다릅니다!" }
    ]
  },
  { cat:1, id:1, title:"String 비교 — equals()",
    prompt:"Java에서 문자열 비교 시 <code>==</code> 대신 <code>.equals()</code>를 써야 하는 이유와 사용법을 익힙니다.",
    full:`import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        if (s.equals("YES")) {
            System.out.println("정답!");
        } else {
            System.out.println("오답");
        }
    }
}`,
    hint:"String은 객체이므로 == 는 주소를 비교합니다. 내용을 비교하려면 .equals()를 사용하세요.",
    concept: {
      title: "String 비교: .equals() vs ==",
      desc: `Java에서 String은 참조 타입(객체)입니다. == 는 두 변수가 같은 메모리 주소를 가리키는지 확인합니다. 문자열 내용을 비교하려면 반드시 .equals() 메서드를 사용해야 합니다.`,
      syntax: `String a = "hello";
String b = "hello";

a == b         // true일 수도 false일 수도 있음 (주소 비교)
a.equals(b)    // true (내용 비교, 안전!)

// NullPointerException 방지: 리터럴을 앞에
"hello".equals(s)          // s가 null이어도 안전
s.equalsIgnoreCase("HELLO") // 대소문자 무시 비교`,
      note: `💡 Scanner로 읽은 문자열은 항상 .equals()로 비교하세요. "YES".equals(s) 처럼 리터럴을 앞에 두면 NPE를 방지할 수 있습니다.`,
      dart: `s == "hello" → s.equals("hello")\n대소문자무시: equalsIgnoreCase → s.toLowerCase() == "hello"`
    },
    drills: [
      { title:"드릴 1 — equals() 사용", prompt:"문자열 s가 \"YES\"와 같은지 올바르게 비교하는 코드를 완성하세요.<br><code>if (s.___( \"YES\" ))</code>", full:`public class Main {
    public static void main(String[] args) {
        String s = "YES";
        if (s.equals("YES")) {
            System.out.println("일치");
        }
    }
}`, blank:"if (s.___( \"YES\" ))", answer:"equals", options:["equals","==","compare","match"], blocks:["String s = \"YES\";","if (s.equals(\"YES\")) {","    System.out.println(\"일치\");","}"], hint:"문자열 내용 비교는 .equals() 메서드를 사용합니다." },
      { title:"드릴 2 — 대소문자 무시 비교", prompt:"대소문자를 무시하고 문자열을 비교하는 메서드를 완성하세요.<br><code>if (s.___( \"yes\" ))</code>", full:`public class Main {
    public static void main(String[] args) {
        String s = "YES";
        if (s.equalsIgnoreCase("yes")) {
            System.out.println("일치 (대소문자 무시)");
        }
    }
}`, blank:"if (s.___( \"yes\" ))", answer:"equalsIgnoreCase", options:["equalsIgnoreCase","equals","compareIgnoreCase","matchCase"], blocks:["String s = \"YES\";","if (s.equalsIgnoreCase(\"yes\")) {","    System.out.println(\"일치 (대소문자 무시)\");","}"], hint:"equalsIgnoreCase()는 대소문자를 무시하고 문자열 내용을 비교합니다." },
      { title:"드릴 3 — 문자열이 포함하는지 확인", prompt:"문자열 s가 특정 부분 문자열을 포함하는지 확인하는 코드를 완성하세요.<br><code>if (s.___( \"Java\" ))</code>", full:`public class Main {
    public static void main(String[] args) {
        String s = "I love Java";
        if (s.contains("Java")) {
            System.out.println("Java 포함");
        }
    }
}`, blank:"if (s.___( \"Java\" ))", answer:"contains", options:["contains","includes","has","indexOf"], blocks:["String s = \"I love Java\";","if (s.contains(\"Java\")) {","    System.out.println(\"Java 포함\");","}"], hint:"contains() 메서드는 문자열이 특정 부분 문자열을 포함하면 true를 반환합니다." },
      { title:"드릴 4 — switch 문", prompt:"switch문으로 요일을 판별하는 코드를 완성하세요. 빈칸을 채우세요.", full:`public class Main {
    public static void main(String[] args) {
        int day = 1;
        switch (day) {
            case 1: System.out.println("월요일"); break;
            case 2: System.out.println("화요일"); break;
            default: System.out.println("기타"); break;
        }
    }
}`, blank:"___ (day) {", answer:"switch", options:["switch","if","case","select"], blocks:["int day = 1;","switch (day) {","    case 1: System.out.println(\"월요일\"); break;","    case 2: System.out.println(\"화요일\"); break;","    default: System.out.println(\"기타\"); break;","}"], hint:"switch(변수)로 시작하고 각 case에서 break를 빠뜨리면 다음 case로 fall-through됩니다." }
    ]
  },

  // ───────────────────────────────────────────────────
  // CAT 2 — 반복문
  // ───────────────────────────────────────────────────,
  { cat:1, id:2, title:"switch 문과 fall-through",
    prompt:"Java의 <code>switch</code> 문과 <code>break</code> 없을 때 일어나는 fall-through 현상을 익힙니다.",
    full:`public class Main {
    public static void main(String[] args) {
        int day = 3;
        switch (day) {
            case 1: System.out.println("월요일"); break;
            case 2: System.out.println("화요일"); break;
            case 3: System.out.println("수요일"); break;
            case 4: System.out.println("목요일"); break;
            case 5: System.out.println("금요일"); break;
            default: System.out.println("주말"); break;
        }
    }
}`,
    hint:"break를 빠뜨리면 다음 case까지 실행됩니다(fall-through). 의도하지 않은 동작이므로 주의하세요.",
    concept: {
      title: "switch 문",
      desc: `switch는 하나의 값에 따라 여러 분기 중 하나를 실행합니다. 각 case 끝에 break를 써야 합니다. break가 없으면 다음 case로 이어집니다(fall-through).`,
      syntax: `switch (변수) {
    case 값1:
        실행코드1;
        break;       // 반드시 break!
    case 값2:
    case 값3:        // 여러 case를 묶을 수 있음
        실행코드2;
        break;
    default:
        기본실행;
        break;
}

// Java 14+ 화살표 switch (더 안전)
String result = switch (day) {
    case 1 -> "월";
    case 2 -> "화";
    default -> "기타";
};`,
      note: `💡 break를 빠뜨리면 다음 case로 계속 실행됩니다. 이를 fall-through라 합니다. 의도하지 않으면 버그!`,
      dart: `switch/case 동일\nbreak 동일\ndefault 동일`
    },
    drills: [
      { title:"드릴 1 — switch 기본 구조", prompt:"switch 문에서 case 3이 선택될 때 출력하고 멈추는 코드를 완성하세요.", full:`public class Main {
    public static void main(String[] args) {
        int n = 3;
        switch (n) {
            case 1: System.out.println("하나"); break;
            case 2: System.out.println("둘"); break;
            case 3: System.out.println("셋"); break;
            default: System.out.println("기타"); break;
        }
    }
}`, blank:"case 3: System.out.println(\"셋\"); ___;", answer:"break", options:["break","continue","return","stop"], blocks:["switch (n) {","    case 1: System.out.println(\"하나\"); break;","    case 2: System.out.println(\"둘\"); break;","    case 3: System.out.println(\"셋\"); break;","    default: System.out.println(\"기타\"); break;","}"], hint:"break가 없으면 다음 case로 이어집니다. 각 case 끝에 break를 쓰세요." },
      { title:"드릴 2 — default 분기", prompt:"switch에서 일치하는 case가 없을 때 실행되는 키워드를 완성하세요.", full:`public class Main {
    public static void main(String[] args) {
        int n = 99;
        switch (n) {
            case 1: System.out.println("하나"); break;
            default: System.out.println("기타"); break;
        }
    }
}`, blank:"___: System.out.println(\"기타\"); break;", answer:"default", options:["default","else","other","any"], blocks:["switch (n) {","    case 1: System.out.println(\"하나\"); break;","    default: System.out.println(\"기타\"); break;","}"], hint:"default는 어떤 case에도 해당하지 않을 때 실행됩니다. if문의 else와 같습니다." },
      { title:"드릴 3 — 조건 범위 판별", prompt:"점수가 90 이상이면 A, 80 이상이면 B, 나머지는 C를 출력하는 조건문을 완성하세요.", full:`public class Main {
    public static void main(String[] args) {
        int score = 85;
        String grade;
        if (score >= 90) {
            grade = "A";
        } else if (score >= 80) {
            grade = "B";
        } else {
            grade = "C";
        }
        System.out.println(grade);  // B
    }
}`, blank:"} ___ if (score >= 80) {", answer:"else", options:["else","elif","or","and"], blocks:["if (score >= 90) {","    grade = \"A\";","} else if (score >= 80) {","    grade = \"B\";","} else {","    grade = \"C\";","}","System.out.println(grade);"], hint:"Java에서 elif는 else if (두 단어)입니다." },
      { title:"드릴 4 — 논리연산자 복합 조건", prompt:"연도가 윤년인지 판별하는 조건문을 완성하세요. (4의 배수이고 100의 배수가 아니거나, 400의 배수)", full:`public class Main {
    public static void main(String[] args) {
        int year = 2024;
        boolean isLeap = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
        System.out.println(isLeap);  // true
    }
}`, blank:"boolean isLeap = (year % 4 == 0 && year % 100 != 0) ___ (year % 400 == 0);", answer:"||", options:["||","&&","or","and"], blocks:["int year = 2024;","boolean isLeap = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);","System.out.println(isLeap);"], hint:"|| 는 OR 연산자입니다. 두 조건 중 하나라도 참이면 참입니다." }
    ]
  },
  { cat:1, id:3, title:"비교 연산자와 null 처리",
    prompt:"Java에서 <code>null</code> 비교, <code>instanceof</code>, 기본형과 참조형의 비교 차이를 익힙니다.",
    full:`public class Main {
    public static void main(String[] args) {
        String s = null;
        // null 체크
        if (s == null) {
            System.out.println("null 입니다");
        }

        // null-safe 문자열 비교
        String target = "hello";
        if (target.equals(s)) {          // s가 null이면 NPE!
            System.out.println("일치");
        }
        if ("hello".equals(s)) {         // 리터럴 앞에 두면 안전
            System.out.println("일치");
        }

        // Integer vs int 비교
        Integer a = 128;
        Integer b = 128;
        System.out.println(a == b);      // false (객체 주소 비교!)
        System.out.println(a.equals(b)); // true  (값 비교)
    }
}`,
    hint:"null은 == 로 비교합니다. 문자열/Integer 같은 참조형은 .equals()를 써야 값을 비교할 수 있습니다.",
    concept: {
      title: "null 처리와 참조형 비교",
      desc: `Java에서 참조형(String, Integer 등)을 == 로 비교하면 값이 아닌 메모리 주소를 비교합니다. 값을 비교하려면 .equals()를 사용해야 합니다. null 체크는 == null 로 합니다.`,
      syntax: `// null 체크 (== 사용)
if (obj == null) { ... }
if (obj != null) { ... }

// 안전한 문자열 비교
"literal".equals(variable)  // NPE 방지

// Integer 캐시 범위 주의 (-128 ~ 127)
Integer a = 100, b = 100;
a == b      // true (캐시)
Integer c = 200, d = 200;
c == d      // false! (캐시 범위 벗어남)
c.equals(d) // true (항상 안전)`,
      note: `💡 Integer는 -128~127 범위에서 객체를 캐시합니다. 이 범위 밖에선 == 가 false가 될 수 있습니다. 항상 .equals() 사용!`,
      dart: `null check: == null 동일\nobj?.method() → 옵셔널 체이닝 없음`
    },
    drills: [
      { title:"드릴 1 — null 체크", prompt:"변수가 null인지 확인하는 코드를 완성하세요.", full:`public class Main {
    public static void main(String[] args) {
        String s = null;
        if (s == null) {
            System.out.println("null입니다");
        }
    }
}`, blank:"if (s ___ null)", answer:"==", options:["==","=","equals","!="], blocks:["String s = null;","if (s == null) {","    System.out.println(\"null입니다\");","}"], hint:"null 비교는 == 를 사용합니다. .equals()로는 null 비교 시 NPE가 발생합니다." },
      { title:"드릴 2 — 안전한 문자열 비교", prompt:"변수 s가 null일 수 있을 때 NPE 없이 비교하는 방법을 선택하세요.", full:`public class Main {
    public static void main(String[] args) {
        String s = null;
        // 안전: 리터럴을 앞에 둠
        if ("hello".equals(s)) {
            System.out.println("일치");
        } else {
            System.out.println("불일치");  // 출력됨
        }
    }
}`, blank:"if (___.equals(s))", answer:"\"hello\"", options:["\"hello\"","s","null","new String()"], blocks:["String s = null;","if (\"hello\".equals(s)) {","    System.out.println(\"일치\");","} else {","    System.out.println(\"불일치\");","}"], hint:"리터럴.equals(변수) 형태로 쓰면 변수가 null이어도 NPE가 발생하지 않습니다." },
      { title:"드릴 3 — 삼항으로 null 기본값", prompt:"s가 null이면 \"기본값\"을 쓰는 삼항 연산자를 완성하세요.", full:`public class Main {
    public static void main(String[] args) {
        String s = null;
        String result = (s != null) ? s : "기본값";
        System.out.println(result);  // 기본값
    }
}`, blank:"String result = (s != null) ? s : ___;", answer:"\"기본값\"", options:["\"기본값\"","null","\"\"","s"], blocks:["String s = null;","String result = (s != null) ? s : \"기본값\";","System.out.println(result);"], hint:"삼항 연산자로 null 대신 기본값을 반환하는 패턴입니다." },
      { title:"드릴 4 — 복합 조건 단락 평가", prompt:"&&는 왼쪽이 false면 오른쪽을 평가하지 않습니다. 이를 활용한 null-safe 조건을 완성하세요.", full:`public class Main {
    public static void main(String[] args) {
        String s = null;
        if (s != null && s.equals("hello")) {
            System.out.println("일치");
        } else {
            System.out.println("null이거나 불일치");
        }
    }
}`, blank:"if (s != null ___ s.equals(\"hello\"))", answer:"&&", options:["&&","||","&","|"], blocks:["String s = null;","if (s != null && s.equals(\"hello\")) {","    System.out.println(\"일치\");","} else {","    System.out.println(\"null이거나 불일치\");","}"], hint:"&& 단락 평가: 왼쪽이 false면 오른쪽을 평가하지 않습니다. s != null이 false면 s.equals()를 호출하지 않아 안전합니다." }
    ]
  },

// ─── CAT 2 추가 ─────────────────────────────────────────,

  // ───────────────────────────────────────────────────
  // CAT 2 — 반복문
  // ───────────────────────────────────────────────────
  { cat:2, id:0, title:"종합 기본개념 — 반복문",
    prompt:`<div style="line-height:1.7">
<b>🔁 반복문 — 카테고리 핵심 미리보기</b><br><br>
Java <code>for</code>문은 <b>초기화 ; 조건 ; 증감</b> 세 부분을 세미콜론으로 구분합니다.<br><br>
<b>⚠️ Python range() 대응 Java for문 차이</b><br>
• <code>range(5)</code> → <code>for(int i=0; i&lt;5; i++)</code><br>
• <code>range(1,6)</code> → <code>for(int i=1; i&lt;=5; i++)</code><br>
• <code>range(0,10,2)</code> → <code>for(int i=0; i&lt;10; i+=2)</code><br>
• <code>for x in arr</code> → <code>for(int x : arr)</code> (for-each)<br><br>
<b>📌 핵심 패턴</b><br>
• <code>break</code> — 반복 완전 종료 &nbsp;• <code>continue</code> — 현재 회차 건너뜀<br>
• 중첩 반복문에서 <code>break</code>는 <b>가장 안쪽 루프</b>만 종료
</div>`,
    full:`// Java 반복문의 모든 것

// ── 1. 기본 for 반복 ──
for (int i = 0; i < 5; i++) {      // 0,1,2,3,4
    System.out.println(i);
}
for (int i = 1; i <= 5; i++) {     // 1,2,3,4,5 (Python: range(1,6))
    System.out.println(i);
}
for (int i = 5; i >= 1; i--) {     // 5,4,3,2,1 (역순)
    System.out.println(i);
}
for (int i = 0; i < 10; i += 2) {  // 0,2,4,6,8 (Python: range(0,10,2))
    System.out.println(i);
}

// ── 2. 향상된 for문 (for-each) ──
int[] arr = {10, 20, 30};
for (int x : arr) {                 // Python: for x in arr:
    System.out.println(x);
}

// ── 3. while / do-while ──
int count = 0;
while (count < 3) {
    System.out.println(count);
    count++;
}
do {                                // 최소 1번 실행 보장
    System.out.println(count);
    count++;
} while (count < 5);

// ── 4. break / continue ──
for (int i = 0; i < 10; i++) {
    if (i == 5) break;             // 반복 완전 종료
    if (i % 2 == 0) continue;     // 짝수 회차 건너뜀
    System.out.println(i);         // 1, 3 출력
}

// ── 5. 중첩 반복문 ──
for (int i = 2; i <= 9; i++) {
    for (int j = 1; j <= 9; j++) {
        System.out.println(i + " x " + j + " = " + (i*j));
    }
}

// ── 6. 누적 패턴 (코딩테스트 핵심) ──
int total = 0;
for (int x : arr) total += x;     // 합산

int max = arr[0];                  // 최댓값
for (int x : arr) if (x > max) max = x;

int min = arr[0];                  // 최솟값
for (int x : arr) if (x < min) min = x;`,
    hint:"Java for문: for(초기화; 조건; 증감) {} Python의 range(1,6)은 for(int i=1; i<=5; i++)에 해당합니다.",
    concept: {
      title: "Java for 반복문",
      desc: `Java의 for문은 초기화, 조건, 증감 세 부분을 세미콜론(;)으로 구분합니다. Python의 for i in range()와 달리 직접 카운터를 관리합니다.`,
      syntax: `// Python: for i in range(1, 6):
// Java:
for (int i = 1; i <= 5; i++) {
    System.out.println(i);  // 1, 2, 3, 4, 5
}

// Python: for i in range(0, 10, 2):
// Java:
for (int i = 0; i < 10; i += 2) {
    System.out.println(i);  // 0, 2, 4, 6, 8
}

// 역순
for (int i = 5; i >= 1; i--) {
    System.out.println(i);  // 5, 4, 3, 2, 1
}`,
      note: `💡 for (int i = 0; i < n; i++) 패턴이 가장 많이 쓰입니다. i < n 이면 0부터 n-1까지 (총 n번).`,
      dart: `for (int i=1; i<=5; i++) 동일\ni++ 동일\ni += 2 동일`
    },
    drills: [
      { title:"드릴 1 — for문 구조", prompt:"1부터 5까지 출력하는 for문의 증감식 빈칸을 채우세요.<br><code>for (int i = 1; i <= 5; ___)</code>", full:`public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            System.out.println(i);
        }
    }
}`, blank:"for (int i = 1; i <= 5; ___)", answer:"i++", options:["i++","i--","i+=2","i+1"], blocks:["for (int i = 1; i <= 5; i++) {","    System.out.println(i);","}"], hint:"i++ 는 i = i + 1 과 같습니다. 반복할 때마다 i를 1씩 증가시킵니다." },
      { title:"드릴 2 — 누적 합산", prompt:"1부터 n까지의 합을 구하는 코드에서 누적 변수 초기화 위치를 올바르게 배치하세요.", full:`public class Main {
    public static void main(String[] args) {
        int n = 10;
        int total = 0;
        for (int i = 1; i <= n; i++) {
            total += i;
        }
        System.out.println(total);  // 55
    }
}`, blank:"int ___ = 0;", answer:"total", options:["total","sum","count","result"], blocks:["int n = 10;","int total = 0;","for (int i = 1; i <= n; i++) {","    total += i;","}","System.out.println(total);"], hint:"누적 합산 패턴: 반복 전에 0으로 초기화한 변수에 += 로 더합니다." },
      { title:"드릴 3 — 이중 for문", prompt:"구구단 2단을 출력하는 코드의 빈칸을 채우세요.", full:`public class Main {
    public static void main(String[] args) {
        for (int j = 1; j <= 9; j++) {
            System.out.println("2 x " + j + " = " + (2 * j));
        }
    }
}`, blank:"System.out.println(\"2 x \" + j + \" = \" + ___ );", answer:"(2 * j)", options:["(2 * j)","2 * j","j * 2","2j"], blocks:["for (int j = 1; j <= 9; j++) {","    System.out.println(\"2 x \" + j + \" = \" + (2 * j));","}"], hint:"Java에서 문자열과 숫자를 + 로 이으면 자동으로 문자열 변환됩니다." },
      { title:"드릴 4 — while과 break", prompt:"while 반복문에서 합이 100을 넘는 순간 종료하는 코드를 완성하세요.", full:`public class Main {
    public static void main(String[] args) {
        int sum = 0, i = 1;
        while (true) {
            sum += i;
            if (sum > 100) break;
            i++;
        }
        System.out.println(i);
    }
}`, blank:"if (sum > 100) ___;", answer:"break", options:["break","continue","return","stop"], blocks:["int sum = 0, i = 1;","while (true) {","    sum += i;","    if (sum > 100) break;","    i++;","}","System.out.println(i);"], hint:"break는 반복문을 즉시 종료합니다. while(true)와 break를 함께 쓰는 패턴이 자주 쓰입니다." }
    ]
  },
  { cat:2, id:1, title:"향상된 for문 (for-each)",
    prompt:"배열이나 컬렉션을 순회하는 <code>for-each</code> 문법을 익힙니다. Python의 <code>for x in arr</code>에 해당합니다.",
    full:`public class Main {
    public static void main(String[] args) {
        int[] arr = {10, 20, 30, 40, 50};
        int total = 0;
        for (int x : arr) {
            total += x;
        }
        System.out.println(total);  // 150
    }
}`,
    hint:"향상된 for문: for (타입 변수 : 배열/컬렉션) {} Python의 'for x in arr:'과 동일한 역할입니다.",
    concept: {
      title: "향상된 for문 (Enhanced for / for-each)",
      desc: `향상된 for문은 배열이나 컬렉션의 모든 원소를 순서대로 방문합니다. 인덱스가 필요 없을 때 사용하면 코드가 간결해집니다.`,
      syntax: `int[] arr = {10, 20, 30};

// 향상된 for문 (Python: for x in arr:)
for (int x : arr) {
    System.out.println(x);  // 10, 20, 30
}

// ArrayList도 동일하게 사용
ArrayList<String> list = new ArrayList<>();
list.add("apple"); list.add("banana");
for (String s : list) {
    System.out.println(s);
}`,
      note: `💡 향상된 for문에서는 인덱스를 알 수 없습니다. 인덱스가 필요하면 일반 for(int i=0; i<arr.length; i++) 를 사용하세요.`,
      dart: `for (var x in list) → for (int x : arr)\n동일한 개념`
    },
    drills: [
      { title:"드릴 1 — for-each 문법", prompt:"배열의 모든 원소를 출력하는 for-each 문의 빈칸을 채우세요.<br><code>for (int x ___ arr)</code>", full:`public class Main {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        for (int x : arr) {
            System.out.println(x);
        }
    }
}`, blank:"for (int x ___ arr)", answer:":", options:[":","in","=","->"], blocks:["int[] arr = {1, 2, 3, 4, 5};","for (int x : arr) {","    System.out.println(x);","}"], hint:"Java for-each 문법: for(타입 변수 : 배열) {} 콜론(:)을 사용합니다." },
      { title:"드릴 2 — 최댓값 찾기", prompt:"배열에서 최댓값을 찾는 코드를 완성하세요.", full:`public class Main {
    public static void main(String[] args) {
        int[] arr = {3, 1, 4, 1, 5, 9, 2, 6};
        int max = arr[0];
        for (int x : arr) {
            if (x > max) max = x;
        }
        System.out.println(max);  // 9
    }
}`, blank:"int max = ___[0];", answer:"arr", options:["arr","max","list","nums"], blocks:["int[] arr = {3, 1, 4, 1, 5, 9, 2, 6};","int max = arr[0];","for (int x : arr) {","    if (x > max) max = x;","}","System.out.println(max);"], hint:"최댓값 초기값은 배열의 첫 번째 원소로 설정합니다." },
      { title:"드릴 3 — ArrayList for-each", prompt:"ArrayList를 for-each로 순회하는 코드의 빈칸을 채우세요.", full:`import java.util.ArrayList;
public class Main {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
        list.add("Java"); list.add("Python");
        for (String s : list) {
            System.out.println(s);
        }
    }
}`, blank:"for (___ s : list)", answer:"String", options:["String","string","str","Object"], blocks:["ArrayList<String> list = new ArrayList<>();","list.add(\"Java\"); list.add(\"Python\");","for (String s : list) {","    System.out.println(s);","}"], hint:"ArrayList<String>의 원소 타입이 String이므로 for(String s : list)를 씁니다." },
      { title:"드릴 4 — continue로 건너뛰기", prompt:"짝수만 출력하고 홀수는 건너뛰는 코드를 완성하세요.", full:`public class Main {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6};
        for (int x : arr) {
            if (x % 2 != 0) continue;
            System.out.println(x);  // 2, 4, 6
        }
    }
}`, blank:"if (x % 2 != 0) ___;", answer:"continue", options:["continue","break","skip","return"], blocks:["int[] arr = {1, 2, 3, 4, 5, 6};","for (int x : arr) {","    if (x % 2 != 0) continue;","    System.out.println(x);","}"], hint:"continue는 현재 반복 회차만 건너뛰고 다음 반복을 계속합니다." }
    ]
  },

  // ───────────────────────────────────────────────────
  // CAT 3 — 배열 & ArrayList
  // ───────────────────────────────────────────────────,
  { cat:2, id:2, title:"이중 for문과 2D 배열 순회",
    prompt:"이중 반복문으로 2차원 배열을 행/열 방향으로 순회하는 패턴을 익힙니다.",
    full:`public class Main {
    public static void main(String[] args) {
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        // 행 우선 순회
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }
    }
}`,
    hint:"이중 배열 순회: 바깥 for는 행(i), 안쪽 for는 열(j). matrix.length는 행 수, matrix[i].length는 열 수입니다.",
    concept: {
      title: "이중 for문 — 2D 배열/행렬 순회",
      desc: `2차원 배열은 이중 for문으로 순회합니다. 바깥 루프가 행(row), 안쪽 루프가 열(column)을 담당합니다. BFS/DFS, 행렬 문제에서 핵심 패턴입니다.`,
      syntax: `int[][] mat = {{1,2,3},{4,5,6}};

// 행 우선
for (int i = 0; i < mat.length; i++) {
    for (int j = 0; j < mat[i].length; j++) {
        System.out.print(mat[i][j]);
    }
}

// for-each 이중
for (int[] row : mat) {
    for (int val : row) {
        System.out.print(val);
    }
}

// 대각선 합산
int diag = 0;
for (int i = 0; i < n; i++) diag += mat[i][i];`,
      note: `💡 mat.length = 행 수, mat[0].length = 열 수. 정방행렬이 아닐 수 있으므로 mat[i].length로 안전하게!`,
      dart: `for (var row in mat): for (var v in row) → 동일 구조`
    },
    drills: [
      { title:"드릴 1 — 이중 for문 순회", prompt:"3×3 행렬을 행 우선으로 출력하는 이중 for문의 조건을 완성하세요.", full:`public class Main {
    public static void main(String[] args) {
        int[][] mat = {{1,2,3},{4,5,6},{7,8,9}};
        for (int i = 0; i < mat.length; i++) {
            for (int j = 0; j < mat[i].length; j++) {
                System.out.print(mat[i][j] + " ");
            }
            System.out.println();
        }
    }
}`, blank:"for (int j = 0; j < mat[i].___; j++)", answer:"length", options:["length","size()","count","len"], blocks:["for (int i = 0; i < mat.length; i++) {","    for (int j = 0; j < mat[i].length; j++) {","        System.out.print(mat[i][j] + \" \");","    }","    System.out.println();","}"], hint:"mat[i].length는 i번째 행의 열 개수입니다." },
      { title:"드릴 2 — 행렬 합산", prompt:"2차원 배열의 모든 원소를 합산하는 코드를 완성하세요.", full:`public class Main {
    public static void main(String[] args) {
        int[][] mat = {{1,2},{3,4},{5,6}};
        int sum = 0;
        for (int[] row : mat) {
            for (int v : row) {
                sum += v;
            }
        }
        System.out.println(sum);  // 21
    }
}`, blank:"for (int[] row : ___)", answer:"mat", options:["mat","matrix","array","m"], blocks:["int sum = 0;","for (int[] row : mat) {","    for (int v : row) {","        sum += v;","    }","}","System.out.println(sum);"], hint:"2차원 배열을 for-each로 순회하면 각 row가 int[] 타입입니다." },
      { title:"드릴 3 — 구구단 출력", prompt:"2단부터 9단까지 구구단을 이중 for문으로 출력하는 코드를 완성하세요.", full:`public class Main {
    public static void main(String[] args) {
        for (int i = 2; i <= 9; i++) {
            for (int j = 1; j <= 9; j++) {
                System.out.println(i + " x " + j + " = " + (i * j));
            }
        }
    }
}`, blank:"for (int i = 2; i <= ___; i++)", answer:"9", options:["9","10","8","5"], blocks:["for (int i = 2; i <= 9; i++) {","    for (int j = 1; j <= 9; j++) {","        System.out.println(i + \" x \" + j + \" = \" + (i * j));","    }","}"], hint:"구구단은 단(i)이 2~9, 곱수(j)가 1~9 범위입니다." },
      { title:"드릴 4 — 소수 판별 반복문", prompt:"정수 n이 소수인지 판별하는 반복문을 완성하세요.", full:`public class Main {
    static boolean isPrime(int n) {
        if (n < 2) return false;
        for (int i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) return false;
        }
        return true;
    }
    public static void main(String[] args) {
        System.out.println(isPrime(17));  // true
        System.out.println(isPrime(15));  // false
    }
}`, blank:"for (int i = 2; i <= Math.sqrt(___); i++)", answer:"n", options:["n","i","2","10"], blocks:["if (n < 2) return false;","for (int i = 2; i <= Math.sqrt(n); i++) {","    if (n % i == 0) return false;","}","return true;"], hint:"소수 판별: 2부터 √n까지 나눠봅니다. Math.sqrt(n)까지만 확인하면 됩니다." }
    ]
  },
  { cat:2, id:3, title:"do-while과 무한루프 패턴",
    prompt:"<code>do-while</code> 문과 <code>while(true) + break</code> 패턴을 익힙니다. 최소 한 번은 실행해야 할 때 유용합니다.",
    full:`import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int sum = 0;
        int n;
        do {
            n = sc.nextInt();
            if (n > 0) sum += n;
        } while (n != 0);   // 0 입력 시 종료
        System.out.println(sum);
    }
}`,
    hint:"do-while은 조건 검사 전에 본문을 최소 한 번 실행합니다. 입력을 받은 후 조건 판단에 유용합니다.",
    concept: {
      title: "do-while과 루프 제어",
      desc: `do-while은 본문을 먼저 실행하고 나서 조건을 검사합니다. 최소 한 번 실행이 보장됩니다. while(true)와 break 조합은 종료 조건이 복잡할 때 자주 씁니다.`,
      syntax: `// do-while: 최소 한 번 실행
do {
    // 실행 코드
} while (조건);

// while(true) + break
while (true) {
    // 실행 코드
    if (종료조건) break;
}

// 레이블 break (이중 루프 탈출)
outer:
for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        if (조건) break outer;  // 바깥 루프까지 탈출
    }
}`,
      note: `💡 do-while 끝의 while (조건); 세미콜론(;)을 빠뜨리면 컴파일 에러! while 뒤 세미콜론 필수.`,
      dart: `do { } while (cond); 동일\nwhile(true) { break; } 동일`
    },
    drills: [
      { title:"드릴 1 — do-while 구조", prompt:"최소 한 번 실행되는 do-while 문의 끝 부분을 완성하세요.", full:`public class Main {
    public static void main(String[] args) {
        int i = 0;
        do {
            System.out.println(i);
            i++;
        } while (i < 3);
    }
}`, blank:"} ___ (i < 3);", answer:"while", options:["while","if","for","until"], blocks:["int i = 0;","do {","    System.out.println(i);","    i++;","} while (i < 3);"], hint:"do-while: do { } while (조건); 형태입니다. while 뒤 세미콜론이 필수입니다." },
      { title:"드릴 2 — while(true) + break", prompt:"합이 100을 넘는 순간 반복을 멈추는 코드를 완성하세요.", full:`public class Main {
    public static void main(String[] args) {
        int sum = 0, n = 1;
        while (true) {
            sum += n++;
            if (sum > 100) break;
        }
        System.out.println(n - 1);  // 14
    }
}`, blank:"while (___)", answer:"true", options:["true","false","1","sum > 0"], blocks:["int sum = 0, n = 1;","while (true) {","    sum += n++;","    if (sum > 100) break;","}","System.out.println(n - 1);"], hint:"while(true)는 무한 루프입니다. 내부에서 break로 탈출합니다." },
      { title:"드릴 3 — 레이블 break", prompt:"이중 루프에서 바깥 루프까지 한 번에 탈출하는 레이블 break를 완성하세요.", full:`public class Main {
    public static void main(String[] args) {
        outer:
        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 5; j++) {
                if (i + j == 6) break outer;
                System.out.print(i + "" + j + " ");
            }
        }
    }
}`, blank:"if (i + j == 6) break ___;", answer:"outer", options:["outer","inner","loop","all"], blocks:["outer:","for (int i = 0; i < 5; i++) {","    for (int j = 0; j < 5; j++) {","        if (i + j == 6) break outer;","    }","}"], hint:"레이블을 사용하면 이중 루프 전체를 한 번에 탈출할 수 있습니다." },
      { title:"드릴 4 — 반복 continue", prompt:"1~10에서 3의 배수를 건너뛰고 나머지를 합산하는 코드를 완성하세요.", full:`public class Main {
    public static void main(String[] args) {
        int sum = 0;
        for (int i = 1; i <= 10; i++) {
            if (i % 3 == 0) continue;
            sum += i;
        }
        System.out.println(sum);  // 37
    }
}`, blank:"if (i % 3 == 0) ___;", answer:"continue", options:["continue","break","skip","return"], blocks:["int sum = 0;","for (int i = 1; i <= 10; i++) {","    if (i % 3 == 0) continue;","    sum += i;","}","System.out.println(sum);"], hint:"continue는 현재 회차를 건너뛰고 다음 반복으로 이동합니다." }
    ]
  },

// ─── CAT 3 추가 ─────────────────────────────────────────,

  // ───────────────────────────────────────────────────
  // CAT 3 — 배열 & ArrayList
  // ───────────────────────────────────────────────────
  { cat:3, id:0, title:"종합 기본개념 — 배열 & ArrayList",
    prompt:`<div style="line-height:1.7">
<b>📋 배열 &amp; ArrayList — 카테고리 핵심 미리보기</b><br><br>
Java 배열은 <b>크기 고정</b>, ArrayList는 <b>크기 가변</b>입니다.<br><br>
<b>⚠️ Python list vs Java array/ArrayList 핵심 차이</b><br>
• 길이: <code>len(arr)</code> → 배열 <code>arr.length</code> (괄호 없음!), ArrayList <code>list.size()</code><br>
• 접근: <code>arr[i]</code> → 배열 동일, ArrayList <code>list.get(i)</code><br>
• 추가: <code>list.append(x)</code> → <code>list.add(x)</code><br>
• 정렬: <code>sorted(arr)</code> → <code>Arrays.sort(arr)</code> (원본 수정!)<br><br>
<b>📌 배열 선언 3가지</b><br>
• <code>int[] a = new int[5];</code> — 크기만, 0 초기화<br>
• <code>int[] a = {1,2,3};</code> — 값과 함께<br>
• <code>int[] a = new int[]{1,2,3};</code> — new 키워드 포함
</div>`,
    full:`// ── 1. 배열 선언 3가지 ──
int[] arr1 = new int[5];           // 크기 5, 0으로 초기화
int[] arr2 = {1, 2, 3, 4, 5};     // 값 직접 초기화
int[] arr3 = new int[]{1,2,3};    // new 키워드 포함

// ── 2. 배열 기본 조작 ──
arr1[0] = 10;                      // 인덱스로 값 설정
int val = arr2[2];                 // = 3
int len = arr2.length;             // 5 (괄호 없음!)

// ── 3. 2차원 배열 ──
int[][] matrix = new int[3][4];    // 3행 4열
int[][] grid = {{1,2,3},{4,5,6}};  // 값 초기화
int rows = grid.length;            // 행 수 = 2
int cols = grid[0].length;         // 열 수 = 3

// ── 4. Arrays 유틸 (import java.util.Arrays) ──
Arrays.sort(arr2);                 // 오름차순 정렬 (원본 수정!)
System.out.println(Arrays.toString(arr2));  // [1, 2, 3, 4, 5]
int[] copy = Arrays.copyOf(arr2, 3);        // [1,2,3] 앞 3개
int[] sub  = Arrays.copyOfRange(arr2,1,4);  // [2,3,4] 인덱스 1~3
Arrays.fill(arr1, -1);             // 전체 -1로 채우기

// ── 5. ArrayList (동적 크기) ──
import java.util.ArrayList;
ArrayList<Integer> list = new ArrayList<>();
list.add(10);                      // 끝에 추가 (Python: append)
list.add(0, 5);                    // 인덱스 0에 삽입
list.remove(0);                    // 인덱스 0 삭제
list.remove(Integer.valueOf(10));  // 값 10 삭제
int v = list.get(0);               // 배열은 arr[0], ArrayList는 get(0)
list.set(0, 99);                   // 값 수정
int size = list.size();            // 크기 (배열은 .length!)
Collections.sort(list);            // 정렬
boolean has = list.contains(10);   // 포함 여부
list.clear();                      // 전체 삭제

// ── 6. 배열 ↔ ArrayList 변환 ──
Integer[] arr4 = {1,2,3};
List<Integer> fromArr = new ArrayList<>(Arrays.asList(arr4));
Integer[] toArr = list.toArray(new Integer[0]);`,
    hint:"배열 길이는 .length (메서드가 아닌 속성이라 괄호 없음). ArrayList의 .size()와 헷갈리지 마세요.",
    concept: {
      title: "Java 배열 기초",
      desc: `Java 배열은 선언할 때 타입과 크기를 지정합니다. 크기는 한 번 정해지면 변경할 수 없습니다. 인덱스는 0부터 시작하며, 범위를 벗어나면 ArrayIndexOutOfBoundsException이 발생합니다.`,
      syntax: `// 선언 방법 1: 크기만 지정
int[] arr = new int[5];        // [0, 0, 0, 0, 0]

// 선언 방법 2: 값과 함께
int[] arr2 = {1, 2, 3, 4, 5}; // [1, 2, 3, 4, 5]

// 2차원 배열
int[][] matrix = new int[3][4]; // 3행 4열

// 접근
arr[0] = 10;                   // 쓰기
int v = arr[0];                // 읽기
int len = arr.length;          // 길이 (괄호 없음!)`,
      note: `💡 arr.length (괄호 X) vs list.size() (괄호 O). 배열은 속성, ArrayList는 메서드입니다.`,
      dart: `int[] arr → List<int> arr\nnew int[5] → List.filled(5, 0)\narr.length 동일\narr[i] 동일`
    },
    drills: [
      { title:"드릴 1 — 배열 선언", prompt:"크기 5인 int 배열을 선언하는 코드를 완성하세요.<br><code>int[] arr = new int[___];</code>", full:`public class Main {
    public static void main(String[] args) {
        int[] arr = new int[5];
        System.out.println(arr.length);  // 5
    }
}`, blank:"int[] arr = new int[___];", answer:"5", options:["5","[5]","(5)","'5'"], blocks:["int[] arr = new int[5];","System.out.println(arr.length);"], hint:"배열 크기를 대괄호 안에 숫자로 지정합니다." },
      { title:"드릴 2 — 배열 길이 속성", prompt:"배열의 길이를 반환하는 속성을 완성하세요.<br><code>int len = arr.___;</code>", full:`public class Main {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        int len = arr.length;
        System.out.println(len);  // 5
    }
}`, blank:"int len = arr.___;", answer:"length", options:["length","size()","count","len()"], blocks:["int[] arr = {1, 2, 3, 4, 5};","int len = arr.length;","System.out.println(len);"], hint:"배열의 길이는 .length (괄호 없음)입니다. ArrayList의 .size()와 다릅니다." },
      { title:"드릴 3 — Arrays.sort 정렬", prompt:"배열을 오름차순으로 정렬하는 코드를 완성하세요.", full:`import java.util.Arrays;
public class Main {
    public static void main(String[] args) {
        int[] arr = {3, 1, 4, 1, 5, 9};
        Arrays.sort(arr);
        System.out.println(Arrays.toString(arr));  // [1, 1, 3, 4, 5, 9]
    }
}`, blank:"___.sort(arr);", answer:"Arrays", options:["Arrays","Collections","Array","Sort"], blocks:["import java.util.Arrays;","int[] arr = {3, 1, 4, 1, 5, 9};","Arrays.sort(arr);","System.out.println(Arrays.toString(arr));"], hint:"배열 정렬은 Arrays.sort(), 출력은 Arrays.toString()을 사용합니다." },
      { title:"드릴 4 — 2차원 배열 접근", prompt:"2차원 배열의 1행 2열 원소를 읽는 코드를 완성하세요.<br><code>int v = matrix[___][___];</code>", full:`public class Main {
    public static void main(String[] args) {
        int[][] matrix = {{1,2,3},{4,5,6},{7,8,9}};
        int v = matrix[1][2];  // 6 (2행 3열, 0-indexed)
        System.out.println(v);
    }
}`, blank:"int v = matrix[___][___];  // 2행 3열", answer:"1][2", options:["1][2","2][3","0][1","1][1"], blocks:["int[][] matrix = {{1,2,3},{4,5,6},{7,8,9}};","int v = matrix[1][2];","System.out.println(v);"], hint:"2차원 배열: matrix[행인덱스][열인덱스]. 인덱스는 0부터 시작합니다." }
    ]
  },
  { cat:3, id:1, title:"ArrayList 기본 조작",
    prompt:"동적 크기 리스트인 <code>ArrayList</code>의 추가, 삭제, 조회 방법을 익힙니다.",
    full:`import java.util.ArrayList;
public class Main {
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<>();
        list.add(10);        // 끝에 추가
        list.add(20);
        list.add(30);
        list.remove(1);      // 인덱스 1 삭제 → [10, 30]
        int v = list.get(0); // 인덱스 0 조회 → 10
        System.out.println(list.size()); // 2
        System.out.println(v);           // 10
    }
}`,
    hint:"ArrayList는 배열과 달리 크기가 동적으로 변합니다. add(), remove(), get(), size()가 핵심 메서드입니다.",
    concept: {
      title: "ArrayList — 동적 크기 리스트",
      desc: `ArrayList는 Java의 가변 길이 리스트입니다. Python의 list와 유사하지만, 제네릭 타입을 지정해야 하고 기본형(int) 대신 래퍼 클래스(Integer)를 씁니다.`,
      syntax: `ArrayList<Integer> list = new ArrayList<>();

list.add(10);            // 끝에 추가 (Python: append)
list.add(0, 5);          // 인덱스 0에 삽입 (Python: insert)
list.remove(0);          // 인덱스 삭제
list.remove(Integer.valueOf(10)); // 값으로 삭제
int v = list.get(0);     // 조회 (Python: list[0])
list.set(0, 99);         // 수정 (Python: list[0] = 99)
int n = list.size();     // 크기 (Python: len(list))
list.contains(10);       // 포함 여부
Collections.sort(list);  // 정렬`,
      note: `💡 ArrayList<int>는 불가! 제네릭에는 래퍼 클래스 사용: ArrayList<Integer>, ArrayList<Double>, ArrayList<String>`,
      dart: `List<int> list = [] → ArrayList<Integer>\nlist.add(x) 동일\nlist.length → list.size()\nlist[i] → list.get(i)\nlist[i] = v → list.set(i, v)`
    },
    drills: [
      { title:"드릴 1 — ArrayList 선언", prompt:"Integer 타입 ArrayList를 선언하는 코드를 완성하세요.", full:`import java.util.ArrayList;
public class Main {
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<>();
        System.out.println(list.size());  // 0
    }
}`, blank:"ArrayList<___> list = new ArrayList<>();", answer:"Integer", options:["Integer","int","number","Int"], blocks:["ArrayList<Integer> list = new ArrayList<>();","System.out.println(list.size());"], hint:"제네릭에서 int 대신 래퍼 클래스 Integer를 사용합니다." },
      { title:"드릴 2 — add와 get", prompt:"ArrayList에서 요소를 추가하고 조회하는 메서드를 완성하세요.", full:`import java.util.ArrayList;
public class Main {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
        list.add("Java");
        String s = list.get(0);
        System.out.println(s);  // Java
    }
}`, blank:"String s = list.___(0);", answer:"get", options:["get","read","fetch","access"], blocks:["ArrayList<String> list = new ArrayList<>();","list.add(\"Java\");","String s = list.get(0);","System.out.println(s);"], hint:"ArrayList에서 인덱스로 원소를 읽을 때는 .get(인덱스)를 씁니다." },
      { title:"드릴 3 — size() 메서드", prompt:"ArrayList의 크기를 반환하는 메서드를 완성하세요.<br><code>int n = list.___();</code>", full:`import java.util.ArrayList;
public class Main {
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<>();
        list.add(1); list.add(2); list.add(3);
        int n = list.size();
        System.out.println(n);  // 3
    }
}`, blank:"int n = list.___();", answer:"size", options:["size","length","count","len"], blocks:["list.add(1); list.add(2); list.add(3);","int n = list.size();","System.out.println(n);"], hint:"ArrayList 크기는 .size() (메서드). 배열의 .length와 구분하세요!" },
      { title:"드릴 4 — Collections.sort 정렬", prompt:"ArrayList를 오름차순으로 정렬하는 코드를 완성하세요.", full:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<>();
        list.add(3); list.add(1); list.add(2);
        Collections.sort(list);
        System.out.println(list);  // [1, 2, 3]
    }
}`, blank:"___.sort(list);", answer:"Collections", options:["Collections","Arrays","List","Sort"], blocks:["list.add(3); list.add(1); list.add(2);","Collections.sort(list);","System.out.println(list);"], hint:"ArrayList 정렬은 Collections.sort(list). 배열의 Arrays.sort(arr)와 구분하세요." }
    ]
  },

  // ───────────────────────────────────────────────────
  // CAT 4 — HashMap & 자료구조
  // ───────────────────────────────────────────────────,
  { cat:3, id:2, title:"Arrays 유틸 — 정렬·복사·채우기",
    prompt:"<code>Arrays</code> 클래스의 유용한 메서드들을 익힙니다. sort, copyOf, fill, copyOfRange를 확인하세요.",
    full:`import java.util.Arrays;
public class Main {
    public static void main(String[] args) {
        int[] arr = {5, 3, 1, 4, 2};
        Arrays.sort(arr);
        System.out.println(Arrays.toString(arr));   // [1, 2, 3, 4, 5]

        int[] copy = Arrays.copyOf(arr, 3);
        System.out.println(Arrays.toString(copy));  // [1, 2, 3]

        int[] filled = new int[5];
        Arrays.fill(filled, 7);
        System.out.println(Arrays.toString(filled)); // [7, 7, 7, 7, 7]

        int[] sub = Arrays.copyOfRange(arr, 1, 4);
        System.out.println(Arrays.toString(sub));   // [2, 3, 4]
    }
}`,
    hint:"Arrays.copyOf(arr, n)은 앞 n개를 복사합니다. Arrays.fill()로 특정 값으로 초기화할 수 있습니다.",
    concept: {
      title: "Arrays 유틸리티 클래스",
      desc: `java.util.Arrays는 배열 조작에 필요한 여러 유틸 메서드를 제공합니다. sort, toString, copyOf, fill, copyOfRange, equals 등을 기억하세요.`,
      syntax: `import java.util.Arrays;

Arrays.sort(arr);                    // 오름차순 정렬
Arrays.toString(arr);                // "[1, 2, 3]" 문자열
Arrays.copyOf(arr, n);               // 앞 n개 복사
Arrays.copyOfRange(arr, from, to);   // [from, to) 복사
Arrays.fill(arr, val);               // 전체를 val로 채움
Arrays.fill(arr, from, to, val);     // 범위를 val로
Arrays.equals(arr1, arr2);           // 배열 내용 비교`,
      note: `💡 Arrays.sort()는 원본을 수정합니다. 원본 보존이 필요하면 Arrays.copyOf()로 복사 후 정렬하세요.`,
      dart: `arr.sort() → Arrays.sort(arr)\narr.sublist(a,b) → Arrays.copyOfRange(arr,a,b)\nList.filled(n,v) → Arrays.fill(arr,v)`
    },
    drills: [
      { title:"드릴 1 — Arrays.fill", prompt:"배열을 모두 -1로 초기화하는 코드를 완성하세요.", full:`import java.util.Arrays;
public class Main {
    public static void main(String[] args) {
        int[] arr = new int[5];
        Arrays.fill(arr, -1);
        System.out.println(Arrays.toString(arr));  // [-1, -1, -1, -1, -1]
    }
}`, blank:"Arrays.___(arr, -1);", answer:"fill", options:["fill","set","init","assign"], blocks:["int[] arr = new int[5];","Arrays.fill(arr, -1);","System.out.println(Arrays.toString(arr));"], hint:"Arrays.fill(배열, 값)은 배열 전체를 지정한 값으로 채웁니다." },
      { title:"드릴 2 — Arrays.copyOf", prompt:"배열의 앞 3개 원소만 복사하는 코드를 완성하세요.", full:`import java.util.Arrays;
public class Main {
    public static void main(String[] args) {
        int[] arr = {10, 20, 30, 40, 50};
        int[] copy = Arrays.copyOf(arr, 3);
        System.out.println(Arrays.toString(copy));  // [10, 20, 30]
    }
}`, blank:"int[] copy = Arrays.___(arr, 3);", answer:"copyOf", options:["copyOf","copy","slice","subArray"], blocks:["int[] arr = {10, 20, 30, 40, 50};","int[] copy = Arrays.copyOf(arr, 3);","System.out.println(Arrays.toString(copy));"], hint:"Arrays.copyOf(원본, 길이)는 원본의 앞 n개 원소를 새 배열로 복사합니다." },
      { title:"드릴 3 — Arrays.copyOfRange", prompt:"배열에서 인덱스 2~4 범위를 복사하는 코드를 완성하세요.", full:`import java.util.Arrays;
public class Main {
    public static void main(String[] args) {
        int[] arr = {10, 20, 30, 40, 50};
        int[] sub = Arrays.copyOfRange(arr, 2, 5);
        System.out.println(Arrays.toString(sub));  // [30, 40, 50]
    }
}`, blank:"int[] sub = Arrays.copyOfRange(arr, 2, ___);", answer:"5", options:["5","4","3","2"], blocks:["int[] arr = {10, 20, 30, 40, 50};","int[] sub = Arrays.copyOfRange(arr, 2, 5);","System.out.println(Arrays.toString(sub));"], hint:"copyOfRange(arr, from, to)는 [from, to) 범위를 복사합니다. to는 포함되지 않습니다." },
      { title:"드릴 4 — 배열 내림차순 정렬", prompt:"Integer 배열을 내림차순으로 정렬하는 코드를 완성하세요.", full:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Integer[] arr = {3, 1, 4, 1, 5, 9};
        Arrays.sort(arr, Collections.reverseOrder());
        System.out.println(Arrays.toString(arr));  // [9, 5, 4, 3, 1, 1]
    }
}`, blank:"Arrays.sort(arr, Collections.___());", answer:"reverseOrder", options:["reverseOrder","reverse","descOrder","sortDesc"], blocks:["Integer[] arr = {3, 1, 4, 1, 5, 9};","Arrays.sort(arr, Collections.reverseOrder());","System.out.println(Arrays.toString(arr));"], hint:"Collections.reverseOrder()는 내림차순 Comparator를 반환합니다. int[]가 아닌 Integer[]에만 사용 가능합니다." }
    ]
  },
  { cat:3, id:3, title:"ArrayList 고급 — 변환, 정렬, 스트림",
    prompt:"배열 ↔ ArrayList 변환, Collections 정렬, 스트림 활용 등 ArrayList 고급 패턴을 익힙니다.",
    full:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        // 배열 → ArrayList
        int[] arr = {3, 1, 4, 1, 5};
        List<Integer> list = new ArrayList<>();
        for (int x : arr) list.add(x);

        // Collections 정렬
        Collections.sort(list);
        System.out.println(list);  // [1, 1, 3, 4, 5]

        // 최댓값/최솟값
        System.out.println(Collections.max(list));  // 5
        System.out.println(Collections.min(list));  // 1

        // 뒤집기
        Collections.reverse(list);
        System.out.println(list);  // [5, 4, 3, 1, 1]
    }
}`,
    hint:"Collections 클래스는 sort, reverse, max, min, shuffle 등 리스트 조작 유틸을 제공합니다.",
    concept: {
      title: "Collections 유틸과 ArrayList 고급",
      desc: `java.util.Collections는 List를 조작하는 여러 유틸 메서드를 제공합니다. sort, reverse, max, min, shuffle, frequency 등을 기억하세요.`,
      syntax: `List<Integer> list = new ArrayList<>(Arrays.asList(3,1,4,1,5));

Collections.sort(list);           // 오름차순
Collections.reverse(list);        // 뒤집기
Collections.max(list);            // 최댓값
Collections.min(list);            // 최솟값
Collections.shuffle(list);        // 무작위
Collections.frequency(list, 1);  // 1의 개수 → 2
Collections.nCopies(3, "x");     // ["x","x","x"]

// 배열 → List (고정 크기)
List<Integer> fixed = Arrays.asList(1, 2, 3);
// 배열 → ArrayList (가변)
ArrayList<Integer> al = new ArrayList<>(Arrays.asList(1,2,3));`,
      note: `💡 Arrays.asList()는 고정 크기 List를 반환해 add/remove 불가. new ArrayList<>(Arrays.asList(...))로 가변 리스트를 만드세요.`,
      dart: `list.sort() → Collections.sort(list)\nlist.reversed → Collections.reverse(list)\nlist.reduce(max) → Collections.max(list)`
    },
    drills: [
      { title:"드릴 1 — Collections.max", prompt:"리스트에서 최댓값을 구하는 코드를 완성하세요.", full:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>(Arrays.asList(3, 1, 4, 1, 5, 9));
        int max = Collections.max(list);
        System.out.println(max);  // 9
    }
}`, blank:"int max = Collections.___(list);", answer:"max", options:["max","maximum","biggest","sort"], blocks:["List<Integer> list = new ArrayList<>(Arrays.asList(3, 1, 4, 1, 5, 9));","int max = Collections.max(list);","System.out.println(max);"], hint:"Collections.max()는 리스트에서 최댓값을 반환합니다." },
      { title:"드릴 2 — Collections.reverse", prompt:"리스트를 역순으로 뒤집는 코드를 완성하세요.", full:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));
        Collections.reverse(list);
        System.out.println(list);  // [5, 4, 3, 2, 1]
    }
}`, blank:"Collections.___(list);", answer:"reverse", options:["reverse","reversed","flip","sort"], blocks:["List<Integer> list = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));","Collections.reverse(list);","System.out.println(list);"], hint:"Collections.reverse()는 리스트를 제자리에서 뒤집습니다. 원본이 수정됩니다." },
      { title:"드릴 3 — Arrays.asList로 초기화", prompt:"배열 리터럴로 ArrayList를 초기화하는 코드를 완성하세요.", full:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>(Arrays.asList("a", "b", "c"));
        list.add("d");
        System.out.println(list);  // [a, b, c, d]
    }
}`, blank:"new ArrayList<>(___.asList(\"a\", \"b\", \"c\"))", answer:"Arrays", options:["Arrays","Collections","List","Array"], blocks:["ArrayList<String> list = new ArrayList<>(Arrays.asList(\"a\", \"b\", \"c\"));","list.add(\"d\");","System.out.println(list);"], hint:"Arrays.asList(...)로 초기 값을 지정하고, new ArrayList<>()로 감싸면 가변 리스트가 됩니다." },
      { title:"드릴 4 — Comparator 람다 정렬", prompt:"문자열 리스트를 길이 오름차순으로 정렬하는 람다를 완성하세요.", full:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>(Arrays.asList("banana","fig","apple","kiwi"));
        list.sort((a, b) -> a.length() - b.length());
        System.out.println(list);  // [fig, kiwi, apple, banana]
    }
}`, blank:"list.sort((a, b) -> a.___() - b.___());", answer:"length", options:["length","size","compareTo","hashCode"], blocks:["List<String> list = new ArrayList<>(Arrays.asList(\"banana\",\"fig\",\"apple\",\"kiwi\"));","list.sort((a, b) -> a.length() - b.length());","System.out.println(list);"], hint:"Comparator 람다: (a, b) -> 양수면 b가 앞으로, 음수면 a가 앞으로. a.length() - b.length()는 길이 오름차순." }
    ]
  },

// ─── CAT 4 추가 ─────────────────────────────────────────,

  // ───────────────────────────────────────────────────
  // CAT 4 — HashMap & 자료구조
  // ───────────────────────────────────────────────────
  { cat:4, id:0, title:"HashMap 기본 — put/get/getOrDefault",
    prompt:"Java의 <code>HashMap</code>을 사용해 키-값을 저장하고 조회하는 방법을 익힙니다.",
    full:`import java.util.HashMap;
public class Main {
    public static void main(String[] args) {
        HashMap<String, Integer> map = new HashMap<>();
        map.put("apple", 3);
        map.put("banana", 5);
        int v = map.get("apple");          // 3
        int def = map.getOrDefault("cherry", 0);  // 없으면 0
        System.out.println(v);     // 3
        System.out.println(def);   // 0
    }
}`,
    hint:"map.get()은 없는 키에서 null을 반환합니다. 기본값이 필요하면 getOrDefault(키, 기본값)을 쓰세요.",
    concept: {
      title: "HashMap — 키-값 저장소 (Python dict)",
      desc: `HashMap은 Python의 dict에 해당합니다. put()으로 저장, get()으로 조회합니다. 없는 키에 get()을 호출하면 null이 반환되므로, getOrDefault()를 사용해 기본값을 안전하게 처리하세요.`,
      syntax: `HashMap<String, Integer> map = new HashMap<>();

map.put("key", 1);              // 추가/수정 (Python: map["key"] = 1)
int v = map.get("key");         // 조회 (없으면 null!)
int v2 = map.getOrDefault("key", 0); // 없으면 0 반환
map.containsKey("key");         // 키 존재 여부
map.remove("key");              // 삭제

// 빈도 카운팅 핵심 패턴
for (int x : arr) {
    map.put(x, map.getOrDefault(x, 0) + 1);
}`,
      note: `💡 map.get(key)가 null일 때 int에 대입하면 NullPointerException! getOrDefault(key, 0)이 안전합니다.`,
      dart: `Map<k,v> → HashMap<K,V>\nmap[k] = v → map.put(k, v)\nmap[k] → map.get(k)\nmap[k] ?? 0 → map.getOrDefault(k, 0)`
    },
    drills: [
      { title:"드릴 1 — put과 get", prompt:"HashMap에서 값을 추가하는 메서드 이름을 완성하세요.<br><code>map.___(\"apple\", 3);</code>", full:`import java.util.HashMap;
public class Main {
    public static void main(String[] args) {
        HashMap<String, Integer> map = new HashMap<>();
        map.put("apple", 3);
        System.out.println(map.get("apple"));  // 3
    }
}`, blank:"map.___(\"apple\", 3);", answer:"put", options:["put","add","set","insert"], blocks:["HashMap<String, Integer> map = new HashMap<>();","map.put(\"apple\", 3);","System.out.println(map.get(\"apple\"));"], hint:"HashMap에 키-값을 저장하는 메서드는 put()입니다. Python의 map['key'] = value에 해당합니다." },
      { title:"드릴 2 — getOrDefault 빈도 카운팅", prompt:"배열 원소의 빈도를 세는 코드를 완성하세요.", full:`import java.util.HashMap;
public class Main {
    public static void main(String[] args) {
        int[] arr = {1, 2, 1, 3, 2, 1};
        HashMap<Integer, Integer> map = new HashMap<>();
        for (int x : arr) {
            map.put(x, map.getOrDefault(x, 0) + 1);
        }
        System.out.println(map);
    }
}`, blank:"map.put(x, map.___(x, 0) + 1);", answer:"getOrDefault", options:["getOrDefault","get","containsKey","putIfAbsent"], blocks:["int[] arr = {1, 2, 1, 3, 2, 1};","HashMap<Integer, Integer> map = new HashMap<>();","for (int x : arr) {","    map.put(x, map.getOrDefault(x, 0) + 1);","}","System.out.println(map);"], hint:"getOrDefault(key, 0)은 key가 없으면 0을 반환합니다. 빈도 카운팅의 핵심 패턴입니다." },
      { title:"드릴 3 — entrySet 순회", prompt:"HashMap을 순회하는 코드를 완성하세요.", full:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        HashMap<String, Integer> map = new HashMap<>();
        map.put("a", 1); map.put("b", 2);
        for (Map.Entry<String, Integer> e : map.entrySet()) {
            System.out.println(e.getKey() + ": " + e.getValue());
        }
    }
}`, blank:"for (Map.Entry<String, Integer> e : map.___())", answer:"entrySet", options:["entrySet","items","pairs","keyValueSet"], blocks:["for (Map.Entry<String, Integer> e : map.entrySet()) {","    System.out.println(e.getKey() + \": \" + e.getValue());","}"], hint:"entrySet()은 Map.Entry 객체의 집합을 반환합니다. getKey()와 getValue()로 키/값에 접근합니다." },
      { title:"드릴 4 — containsKey 확인", prompt:"HashMap에 특정 키가 존재하는지 확인하는 코드를 완성하세요.", full:`import java.util.HashMap;
public class Main {
    public static void main(String[] args) {
        HashMap<String, Integer> map = new HashMap<>();
        map.put("hello", 1);
        if (map.containsKey("hello")) {
            System.out.println("키 존재!");
        }
    }
}`, blank:"if (map.___Key(\"hello\"))", answer:"contains", options:["contains","has","exists","check"], blocks:["if (map.containsKey(\"hello\")) {","    System.out.println(\"키 존재!\");","}"], hint:"containsKey()는 HashMap에 해당 키가 있으면 true를 반환합니다." }
    ]
  },
  { cat:4, id:1, title:"HashSet — 중복 제거",
    prompt:"<code>HashSet</code>을 사용해 중복을 제거하거나 원소 포함 여부를 O(1)에 확인하는 방법을 익힙니다.",
    full:`import java.util.HashSet;
public class Main {
    public static void main(String[] args) {
        int[] arr = {1, 2, 2, 3, 3, 3};
        HashSet<Integer> set = new HashSet<>();
        for (int x : arr) {
            set.add(x);
        }
        System.out.println(set.size());     // 3 (중복 제거됨)
        System.out.println(set.contains(2)); // true
    }
}`,
    hint:"HashSet은 중복을 허용하지 않습니다. 중복 제거나 O(1) 포함 여부 확인에 유용합니다.",
    concept: {
      title: "HashSet — 중복 없는 집합 (Python set)",
      desc: `HashSet은 Python의 set과 동일한 개념입니다. 중복 원소를 허용하지 않으며, contains()로 O(1) 포함 여부 확인이 가능합니다.`,
      syntax: `HashSet<Integer> set = new HashSet<>();
set.add(1);
set.add(2);
set.add(2);          // 중복 → 무시됨
set.contains(1);     // true, O(1)
set.remove(1);
set.size();          // 크기

// 배열에서 중복 제거
for (int x : arr) set.add(x);
ArrayList<Integer> unique = new ArrayList<>(set);`,
      note: `💡 HashSet은 순서를 보장하지 않습니다. 순서가 필요하면 LinkedHashSet을 사용하세요.`,
      dart: `Set<int> set = {} → HashSet<Integer>\nset.add(x) 동일\nset.contains(x) 동일\nset.length → set.size()`
    },
    drills: [
      { title:"드릴 1 — HashSet으로 중복 제거", prompt:"배열에서 중복을 제거하는 HashSet 코드를 완성하세요.", full:`import java.util.HashSet;
public class Main {
    public static void main(String[] args) {
        int[] arr = {1, 2, 2, 3, 3, 3};
        HashSet<Integer> set = new HashSet<>();
        for (int x : arr) set.add(x);
        System.out.println(set.size());  // 3
    }
}`, blank:"HashSet<___> set = new HashSet<>();", answer:"Integer", options:["Integer","int","number","Int"], blocks:["int[] arr = {1, 2, 2, 3, 3, 3};","HashSet<Integer> set = new HashSet<>();","for (int x : arr) set.add(x);","System.out.println(set.size());"], hint:"제네릭에서 기본형 int 대신 래퍼 클래스 Integer를 씁니다." },
      { title:"드릴 2 — contains O(1) 탐색", prompt:"HashSet에서 원소 포함 여부를 확인하는 메서드를 완성하세요.", full:`import java.util.HashSet;
public class Main {
    public static void main(String[] args) {
        HashSet<Integer> set = new HashSet<>();
        set.add(1); set.add(2); set.add(3);
        System.out.println(set.contains(2));  // true
        System.out.println(set.contains(5));  // false
    }
}`, blank:"System.out.println(set.___(2));", answer:"contains", options:["contains","has","includes","get"], blocks:["HashSet<Integer> set = new HashSet<>();","set.add(1); set.add(2); set.add(3);","System.out.println(set.contains(2));","System.out.println(set.contains(5));"], hint:"contains()는 HashSet에 해당 원소가 있으면 true를 반환합니다. O(1) 탐색이 가능합니다." },
      { title:"드릴 3 — Stack push/pop", prompt:"Stack을 사용해 원소를 넣고 꺼내는 코드를 완성하세요.", full:`import java.util.Stack;
public class Main {
    public static void main(String[] args) {
        Stack<Integer> stack = new Stack<>();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        System.out.println(stack.pop());   // 3 (LIFO)
        System.out.println(stack.peek());  // 2 (삭제 없이 조회)
    }
}`, blank:"stack.___(3);  // 넣기", answer:"push", options:["push","add","insert","offer"], blocks:["Stack<Integer> stack = new Stack<>();","stack.push(1);","stack.push(2);","stack.push(3);","System.out.println(stack.pop());","System.out.println(stack.peek());"], hint:"Stack은 LIFO(후입선출) 구조입니다. push()로 넣고 pop()으로 꺼냅니다." },
      { title:"드릴 4 — Queue offer/poll", prompt:"Queue를 사용해 원소를 넣고 꺼내는 코드를 완성하세요.", full:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Queue<Integer> queue = new LinkedList<>();
        queue.offer(1);
        queue.offer(2);
        queue.offer(3);
        System.out.println(queue.poll());  // 1 (FIFO)
        System.out.println(queue.peek());  // 2 (삭제 없이 조회)
    }
}`, blank:"Queue<Integer> queue = new ___<>();", answer:"LinkedList", options:["LinkedList","Queue","ArrayList","ArrayDeque"], blocks:["Queue<Integer> queue = new LinkedList<>();","queue.offer(1); queue.offer(2); queue.offer(3);","System.out.println(queue.poll());","System.out.println(queue.peek());"], hint:"Queue는 인터페이스이므로 LinkedList나 ArrayDeque로 구현합니다. offer()로 추가, poll()로 제거합니다." }
    ]
  },

  // ───────────────────────────────────────────────────
  // CAT 5 — 클래스 & 구조
  // ───────────────────────────────────────────────────,
  { cat:4, id:2, title:"TreeMap & PriorityQueue",
    prompt:"정렬된 순서로 키를 관리하는 <code>TreeMap</code>과 우선순위 큐 <code>PriorityQueue</code>를 익힙니다.",
    full:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        // TreeMap: 키 자동 정렬
        TreeMap<Integer, String> map = new TreeMap<>();
        map.put(3, "셋"); map.put(1, "하나"); map.put(2, "둘");
        System.out.println(map);          // {1=하나, 2=둘, 3=셋}
        System.out.println(map.firstKey()); // 1
        System.out.println(map.lastKey());  // 3

        // PriorityQueue: 최솟값 우선
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        pq.offer(5); pq.offer(1); pq.offer(3);
        System.out.println(pq.poll());   // 1 (최솟값 먼저)
        System.out.println(pq.poll());   // 3
    }
}`,
    hint:"TreeMap은 키를 자동 정렬합니다. PriorityQueue는 기본적으로 최솟값이 먼저 나오는 최소 힙입니다.",
    concept: {
      title: "TreeMap과 PriorityQueue",
      desc: `TreeMap은 키가 자동으로 정렬되는 Map입니다. PriorityQueue는 항상 최솟값(기본)이 poll()로 나옵니다. 다익스트라, 그리디 알고리즘에서 자주 씁니다.`,
      syntax: `// TreeMap
TreeMap<K,V> map = new TreeMap<>();
map.firstKey()     // 가장 작은 키
map.lastKey()      // 가장 큰 키
map.headMap(k)     // k 미만 부분 Map
map.tailMap(k)     // k 이상 부분 Map

// PriorityQueue (최소 힙)
PriorityQueue<Integer> pq = new PriorityQueue<>();
pq.offer(x);      // 삽입 O(log n)
pq.poll();        // 최솟값 제거+반환 O(log n)
pq.peek();        // 최솟값 조회 (삭제 없음)

// 최대 힙
PriorityQueue<Integer> maxPq = new PriorityQueue<>(Collections.reverseOrder());`,
      note: `💡 최대 힙은 Collections.reverseOrder()를 생성자에 전달합니다. 다익스트라에서는 int[]{dist, node} 배열을 Comparator로 정렬합니다.`,
      dart: `SplayTreeMap → TreeMap\n직접 구현 or package → PriorityQueue`
    },
    drills: [
      { title:"드릴 1 — PriorityQueue 최솟값 poll", prompt:"PriorityQueue에서 최솟값을 꺼내는 메서드를 완성하세요.", full:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        pq.offer(5); pq.offer(1); pq.offer(3);
        System.out.println(pq.poll());  // 1
        System.out.println(pq.poll());  // 3
    }
}`, blank:"System.out.println(pq.___());", answer:"poll", options:["poll","pop","remove","get"], blocks:["PriorityQueue<Integer> pq = new PriorityQueue<>();","pq.offer(5); pq.offer(1); pq.offer(3);","System.out.println(pq.poll());","System.out.println(pq.poll());"], hint:"poll()은 최솟값을 제거하고 반환합니다. peek()는 제거 없이 조회합니다." },
      { title:"드릴 2 — 최대 힙 선언", prompt:"최댓값이 먼저 나오는 최대 힙을 선언하는 코드를 완성하세요.", full:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        PriorityQueue<Integer> maxPq = new PriorityQueue<>(Collections.reverseOrder());
        maxPq.offer(3); maxPq.offer(7); maxPq.offer(1);
        System.out.println(maxPq.poll());  // 7
    }
}`, blank:"new PriorityQueue<>(Collections.___());", answer:"reverseOrder", options:["reverseOrder","reverse","descending","max"], blocks:["PriorityQueue<Integer> maxPq = new PriorityQueue<>(Collections.reverseOrder());","maxPq.offer(3); maxPq.offer(7); maxPq.offer(1);","System.out.println(maxPq.poll());"], hint:"Collections.reverseOrder()를 생성자에 전달하면 최대 힙이 됩니다." },
      { title:"드릴 3 — TreeMap 자동 정렬", prompt:"TreeMap에 키를 넣으면 자동 정렬됩니다. 가장 작은 키를 반환하는 메서드를 완성하세요.", full:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        TreeMap<Integer, String> map = new TreeMap<>();
        map.put(5, "다섯"); map.put(1, "하나"); map.put(3, "셋");
        System.out.println(map.firstKey());  // 1
        System.out.println(map.lastKey());   // 5
    }
}`, blank:"System.out.println(map.___Key());", answer:"first", options:["first","min","smallest","low"], blocks:["map.put(5, \"다섯\"); map.put(1, \"하나\"); map.put(3, \"셋\");","System.out.println(map.firstKey());","System.out.println(map.lastKey());"], hint:"firstKey()는 TreeMap의 가장 작은(첫 번째) 키를 반환합니다." },
      { title:"드릴 4 — Deque (양방향 큐)", prompt:"Deque를 스택처럼 쓰는 코드를 완성하세요. 앞에서 추가하고 앞에서 꺼냅니다.", full:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Deque<Integer> deque = new ArrayDeque<>();
        deque.push(1);  // addFirst
        deque.push(2);
        deque.push(3);
        System.out.println(deque.pop());  // 3 (LIFO)
        System.out.println(deque.peek()); // 2
    }
}`, blank:"Deque<Integer> deque = new ___<>();", answer:"ArrayDeque", options:["ArrayDeque","LinkedList","Stack","Queue"], blocks:["Deque<Integer> deque = new ArrayDeque<>();","deque.push(1); deque.push(2); deque.push(3);","System.out.println(deque.pop());","System.out.println(deque.peek());"], hint:"ArrayDeque는 Stack보다 빠른 Deque 구현체입니다. push/pop으로 스택처럼 사용합니다." }
    ]
  },
  { cat:4, id:3, title:"LinkedList와 Iterator",
    prompt:"<code>LinkedList</code>를 활용한 큐/덱 패턴과 <code>Iterator</code>를 이용한 안전한 삭제 방법을 익힙니다.",
    full:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        // LinkedList를 Queue로 사용
        Queue<String> queue = new LinkedList<>();
        queue.offer("first");
        queue.offer("second");
        queue.offer("third");
        System.out.println(queue.poll()); // "first" (FIFO)

        // Iterator로 조건부 삭제
        List<Integer> list = new ArrayList<>(Arrays.asList(1,2,3,4,5,6));
        Iterator<Integer> it = list.iterator();
        while (it.hasNext()) {
            int val = it.next();
            if (val % 2 == 0) it.remove();  // 짝수 삭제
        }
        System.out.println(list);  // [1, 3, 5]
    }
}`,
    hint:"for-each 도중 리스트를 직접 수정하면 ConcurrentModificationException이 발생합니다. Iterator의 remove()를 사용하세요.",
    concept: {
      title: "LinkedList와 Iterator",
      desc: `LinkedList는 Queue와 Deque 인터페이스를 구현합니다. 반복 중에 원소를 안전하게 삭제하려면 Iterator를 사용해야 합니다. for-each 루프 중 list.remove()는 예외를 발생시킵니다.`,
      syntax: `// Queue로 사용
Queue<T> q = new LinkedList<>();
q.offer(x);   // 삽입
q.poll();      // 삭제+반환
q.peek();      // 조회

// Iterator
Iterator<T> it = list.iterator();
while (it.hasNext()) {
    T val = it.next();
    if (조건) it.remove();  // 안전한 삭제
}

// ListIterator (양방향)
ListIterator<T> lit = list.listIterator();
while (lit.hasNext()) { ... }
while (lit.hasPrevious()) { ... }`,
      note: `💡 for-each 중 list.remove(i)를 호출하면 ConcurrentModificationException! 반드시 Iterator를 사용하거나, 역순으로 인덱스 삭제를 하세요.`,
      dart: `list.removeWhere((x) => 조건) → Iterator remove 패턴과 유사`
    },
    drills: [
      { title:"드릴 1 — Queue offer/poll 순서", prompt:"Queue는 FIFO입니다. offer로 세 원소를 넣고 poll한 결과를 완성하세요.", full:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Queue<Integer> q = new LinkedList<>();
        q.offer(1); q.offer(2); q.offer(3);
        System.out.println(q.poll()); // 1
        System.out.println(q.poll()); // 2
    }
}`, blank:"Queue<Integer> q = new ___<>();", answer:"LinkedList", options:["LinkedList","ArrayList","Stack","ArrayDeque"], blocks:["Queue<Integer> q = new LinkedList<>();","q.offer(1); q.offer(2); q.offer(3);","System.out.println(q.poll());","System.out.println(q.poll());"], hint:"Queue 인터페이스는 LinkedList나 ArrayDeque로 구현합니다. FIFO 순서로 poll됩니다." },
      { title:"드릴 2 — Iterator hasNext/next", prompt:"Iterator로 리스트를 순회하는 코드를 완성하세요.", full:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>(Arrays.asList("a","b","c"));
        Iterator<String> it = list.iterator();
        while (it.hasNext()) {
            System.out.println(it.next());
        }
    }
}`, blank:"while (it.___())", answer:"hasNext", options:["hasNext","hasMore","hasElement","next"], blocks:["Iterator<String> it = list.iterator();","while (it.hasNext()) {","    System.out.println(it.next());","}"], hint:"hasNext()는 다음 원소가 있는지 확인합니다. next()는 다음 원소를 반환하고 이동합니다." },
      { title:"드릴 3 — Iterator로 안전한 삭제", prompt:"반복 중 짝수를 안전하게 삭제하는 코드를 완성하세요.", full:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>(Arrays.asList(1,2,3,4,5,6));
        Iterator<Integer> it = list.iterator();
        while (it.hasNext()) {
            int v = it.next();
            if (v % 2 == 0) it.remove();
        }
        System.out.println(list);  // [1, 3, 5]
    }
}`, blank:"if (v % 2 == 0) it.___;", answer:"remove()", options:["remove()","delete()","pop()","clear()"], blocks:["Iterator<Integer> it = list.iterator();","while (it.hasNext()) {","    int v = it.next();","    if (v % 2 == 0) it.remove();","}","System.out.println(list);"], hint:"it.remove()는 Iterator가 마지막으로 반환한 원소를 안전하게 삭제합니다." },
      { title:"드릴 4 — isEmpty로 종료 확인", prompt:"Queue가 빌 때까지 처리하는 패턴을 완성하세요.", full:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Queue<Integer> q = new LinkedList<>(Arrays.asList(1,2,3));
        while (!q.isEmpty()) {
            System.out.println(q.poll());
        }
    }
}`, blank:"while (!q.___())", answer:"isEmpty", options:["isEmpty","empty","isNull","hasNext"], blocks:["Queue<Integer> q = new LinkedList<>(Arrays.asList(1,2,3));","while (!q.isEmpty()) {","    System.out.println(q.poll());","}"], hint:"isEmpty()는 컬렉션이 비어 있으면 true를 반환합니다. !isEmpty()가 참인 동안 poll합니다." }
    ]
  },

// ─── CAT 5 추가 ─────────────────────────────────────────,

  // ───────────────────────────────────────────────────
  // CAT 5 — 클래스 & 구조
  // ───────────────────────────────────────────────────
  { cat:5, id:0, title:"클래스 구조와 static 메서드",
    prompt:"코딩테스트에서 가장 많이 쓰는 패턴인 <code>static</code> 메서드 정의와 호출 방법을 익힙니다.",
    full:`public class Main {
    // static 메서드: 객체 생성 없이 호출 가능
    static int add(int a, int b) {
        return a + b;
    }

    static boolean isEven(int n) {
        return n % 2 == 0;
    }

    public static void main(String[] args) {
        System.out.println(add(3, 5));      // 8
        System.out.println(isEven(4));      // true
        System.out.println(isEven(7));      // false
    }
}`,
    hint:"코딩테스트에서는 static 메서드로 기능을 분리합니다. main도 static이라 같은 클래스의 static 메서드를 바로 호출할 수 있습니다.",
    concept: {
      title: "static 메서드와 클래스 구조",
      desc: `Java 코딩테스트에서는 보통 Main 클래스 안에 static 메서드를 정의해 사용합니다. static 메서드는 객체(인스턴스)를 생성하지 않고도 클래스 이름이나 같은 클래스에서 바로 호출할 수 있습니다.`,
      syntax: `public class Main {
    // static 메서드 정의
    static int max(int a, int b) {
        return a > b ? a : b;
    }

    static void printArray(int[] arr) {
        for (int x : arr) System.out.print(x + " ");
        System.out.println();
    }

    public static void main(String[] args) {
        int m = max(3, 7);      // 7
        printArray(new int[]{1,2,3});
    }
}`,
      note: `💡 main이 static이므로, main에서 호출하는 메서드도 static이어야 합니다. 코딩테스트에서 모든 보조 메서드를 static으로 선언하세요.`,
      dart: `static int f(int a) → static 동일\nreturn 동일\nvoid 반환 없음 동일`
    },
    drills: [
      { title:"드릴 1 — static 메서드 선언", prompt:"두 정수의 합을 반환하는 static 메서드를 완성하세요.<br><code>___ int add(int a, int b) { return a + b; }</code>", full:`public class Main {
    static int add(int a, int b) {
        return a + b;
    }
    public static void main(String[] args) {
        System.out.println(add(3, 5));  // 8
    }
}`, blank:"___ int add(int a, int b)", answer:"static", options:["static","public","final","void"], blocks:["static int add(int a, int b) {","    return a + b;","}","System.out.println(add(3, 5));"], hint:"main에서 호출하는 보조 메서드는 static으로 선언해야 합니다." },
      { title:"드릴 2 — return 타입", prompt:"boolean을 반환하는 메서드의 반환 타입을 완성하세요.<br><code>static ___ isEven(int n) { return n % 2 == 0; }</code>", full:`public class Main {
    static boolean isEven(int n) {
        return n % 2 == 0;
    }
    public static void main(String[] args) {
        System.out.println(isEven(4));  // true
    }
}`, blank:"static ___ isEven(int n)", answer:"boolean", options:["boolean","bool","Boolean","int"], blocks:["static boolean isEven(int n) {","    return n % 2 == 0;","}","System.out.println(isEven(4));"], hint:"Java의 참/거짓 타입은 boolean (소문자). Python의 bool과 이름이 약간 다릅니다." },
      { title:"드릴 3 — 생성자와 객체 생성", prompt:"Point 클래스의 객체를 생성하는 코드를 완성하세요.", full:`public class Main {
    static class Point {
        int x, y;
        Point(int x, int y) {
            this.x = x;
            this.y = y;
        }
    }
    public static void main(String[] args) {
        Point p = new Point(3, 4);
        System.out.println(p.x + ", " + p.y);  // 3, 4
    }
}`, blank:"Point p = ___ Point(3, 4);", answer:"new", options:["new","create","make","build"], blocks:["Point p = new Point(3, 4);","System.out.println(p.x + \", \" + p.y);"], hint:"Java에서 객체를 생성할 때는 new 키워드를 사용합니다." },
      { title:"드릴 4 — this 키워드", prompt:"생성자에서 필드와 매개변수를 구분하는 코드를 완성하세요.", full:`public class Main {
    static class Point {
        int x, y;
        Point(int x, int y) {
            this.x = x;
            this.y = y;
        }
    }
    public static void main(String[] args) {
        Point p = new Point(5, 10);
        System.out.println(p.x);  // 5
    }
}`, blank:"___.x = x;", answer:"this", options:["this","self","me","current"], blocks:["Point(int x, int y) {","    this.x = x;","    this.y = y;","}"], hint:"this는 현재 객체를 가리킵니다. this.x는 필드, x는 매개변수입니다." }
    ]
  },

  // ───────────────────────────────────────────────────
  // CAT 6 — String 조작
  // ───────────────────────────────────────────────────,
  { cat:5, id:1, title:"접근제어자와 캡슐화",
    prompt:"Java의 <code>private</code>, <code>public</code> 접근제어자와 getter/setter 패턴을 익힙니다.",
    full:`public class Main {
    static class Person {
        private String name;  // 외부에서 직접 접근 불가
        private int age;

        Person(String name, int age) {
            this.name = name;
            this.age = age;
        }

        public String getName() { return name; }  // getter
        public int getAge()     { return age; }

        public void setAge(int age) {              // setter
            if (age >= 0) this.age = age;
        }

        @Override
        public String toString() {
            return name + " (" + age + ")";
        }
    }

    public static void main(String[] args) {
        Person p = new Person("홍길동", 25);
        p.setAge(26);
        System.out.println(p.getName());  // 홍길동
        System.out.println(p);            // 홍길동 (26)
    }
}`,
    hint:"private 필드는 외부에서 직접 접근 불가합니다. getter/setter로 접근을 제어하는 것이 캡슐화입니다.",
    concept: {
      title: "접근제어자와 getter/setter",
      desc: `Java에서 필드를 private으로 선언하면 클래스 외부에서 직접 접근할 수 없습니다. 대신 public getter/setter 메서드로 접근을 제공합니다. 이를 캡슐화(Encapsulation)라고 합니다.`,
      syntax: `// 접근제어자
public    // 어디서나 접근
private   // 같은 클래스 내에서만
protected // 같은 패키지 + 자식 클래스

// getter/setter 패턴
private int value;
public int getValue() { return value; }
public void setValue(int v) {
    if (v >= 0) value = v;  // 검증 가능
}

// toString 오버라이드
@Override
public String toString() {
    return "Value: " + value;
}`,
      note: `💡 코딩테스트에서는 단순 구조체처럼 public 필드를 쓰기도 합니다. 하지만 실무에서는 항상 private + getter/setter 패턴을 씁니다.`,
      dart: `// Dart: _ 접두사로 private\nString _name; // private\nString get name => _name; // getter`
    },
    drills: [
      { title:"드릴 1 — private 필드 선언", prompt:"외부에서 직접 접근 불가한 필드를 선언하는 키워드를 완성하세요.", full:`public class Main {
    static class Box {
        private int size;
        Box(int size) { this.size = size; }
        public int getSize() { return size; }
    }
    public static void main(String[] args) {
        Box b = new Box(5);
        System.out.println(b.getSize());  // 5
    }
}`, blank:"___ int size;", answer:"private", options:["private","public","protected","static"], blocks:["static class Box {","    private int size;","    Box(int size) { this.size = size; }","    public int getSize() { return size; }","}"], hint:"private은 같은 클래스 내에서만 접근 가능합니다." },
      { title:"드릴 2 — getter 메서드", prompt:"private 필드를 반환하는 getter를 완성하세요.", full:`public class Main {
    static class Item {
        private String name;
        Item(String name) { this.name = name; }
        public String getName() { return name; }
    }
    public static void main(String[] args) {
        Item item = new Item("사과");
        System.out.println(item.getName());  // 사과
    }
}`, blank:"public String ___() { return name; }", answer:"getName", options:["getName","name","get","readName"], blocks:["private String name;","Item(String name) { this.name = name; }","public String getName() { return name; }"], hint:"getter의 이름은 관례적으로 get + 필드명(첫 글자 대문자) 형태입니다." },
      { title:"드릴 3 — toString 오버라이드", prompt:"객체를 출력할 때 호출되는 메서드를 완성하세요.", full:`public class Main {
    static class Point {
        int x, y;
        Point(int x, int y) { this.x = x; this.y = y; }
        @Override
        public String toString() {
            return "(" + x + ", " + y + ")";
        }
    }
    public static void main(String[] args) {
        Point p = new Point(3, 4);
        System.out.println(p);  // (3, 4)
    }
}`, blank:"public String ___() {", answer:"toString", options:["toString","print","display","format"], blocks:["@Override","public String toString() {","    return \"(\" + x + \", \" + y + \")\";","}"], hint:"toString()은 객체를 문자열로 표현합니다. System.out.println(객체) 시 자동으로 호출됩니다." },
      { title:"드릴 4 — 정적 팩토리 패턴", prompt:"new 키워드 없이 객체를 생성하는 static 메서드 패턴을 완성하세요.", full:`public class Main {
    static class Counter {
        private int count = 0;
        private Counter() {}  // private 생성자
        public static Counter create() { return new Counter(); }
        public void increment() { count++; }
        public int getCount() { return count; }
    }
    public static void main(String[] args) {
        Counter c = Counter.create();
        c.increment(); c.increment();
        System.out.println(c.getCount());  // 2
    }
}`, blank:"Counter c = Counter.___();", answer:"create", options:["create","new","make","build"], blocks:["Counter c = Counter.create();","c.increment(); c.increment();","System.out.println(c.getCount());"], hint:"정적 팩토리 메서드: static으로 선언된 메서드가 객체를 생성해 반환합니다." }
    ]
  },
  { cat:5, id:2, title:"상속과 다형성",
    prompt:"Java의 <code>extends</code>로 클래스를 상속하고, <code>@Override</code>로 메서드를 재정의하는 방법을 익힙니다.",
    full:`public class Main {
    static class Animal {
        String name;
        Animal(String name) { this.name = name; }
        String sound() { return "..."; }
    }

    static class Dog extends Animal {
        Dog(String name) { super(name); }
        @Override
        String sound() { return "멍멍"; }
    }

    static class Cat extends Animal {
        Cat(String name) { super(name); }
        @Override
        String sound() { return "냐옹"; }
    }

    public static void main(String[] args) {
        Animal[] animals = {new Dog("뽀삐"), new Cat("나비")};
        for (Animal a : animals) {
            System.out.println(a.name + ": " + a.sound());
        }
    }
}`,
    hint:"extends로 부모 클래스를 상속하고 @Override로 메서드를 재정의합니다. 부모 생성자는 super()로 호출합니다.",
    concept: {
      title: "상속(extends)과 다형성",
      desc: `Java에서 클래스는 extends 키워드로 단일 상속합니다. 자식 클래스는 부모의 필드/메서드를 물려받고, @Override로 메서드를 재정의할 수 있습니다. 부모 타입으로 자식 객체를 참조하는 것이 다형성입니다.`,
      syntax: `class 부모 {
    int x;
    부모(int x) { this.x = x; }
    void method() { ... }
}

class 자식 extends 부모 {
    자식(int x) { super(x); }  // 부모 생성자 호출
    @Override
    void method() { ... }      // 재정의
}

// 다형성: 부모 타입으로 참조
부모 obj = new 자식(5);
obj.method();  // 자식의 method() 실행`,
      note: `💡 super()는 자식 생성자에서 반드시 첫 줄에 호출해야 합니다. @Override 어노테이션은 재정의임을 명시합니다.`,
      dart: `class Dog extends Animal → 동일\nsuper() 동일\n@override → @Override`
    },
    drills: [
      { title:"드릴 1 — extends 상속", prompt:"Animal을 상속하는 Dog 클래스 선언을 완성하세요.", full:`public class Main {
    static class Animal { String sound() { return "..."; } }
    static class Dog extends Animal {
        @Override
        String sound() { return "멍멍"; }
    }
    public static void main(String[] args) {
        Dog d = new Dog();
        System.out.println(d.sound());  // 멍멍
    }
}`, blank:"static class Dog ___ Animal {", answer:"extends", options:["extends","implements","inherits","is"], blocks:["static class Dog extends Animal {","    @Override","    String sound() { return \"멍멍\"; }","}"], hint:"extends 키워드로 부모 클래스를 상속합니다." },
      { title:"드릴 2 — super() 부모 생성자 호출", prompt:"부모 생성자를 호출하는 키워드를 완성하세요.", full:`public class Main {
    static class Shape {
        String color;
        Shape(String color) { this.color = color; }
    }
    static class Circle extends Shape {
        int radius;
        Circle(String color, int radius) {
            super(color);  // 부모 생성자
            this.radius = radius;
        }
    }
    public static void main(String[] args) {
        Circle c = new Circle("red", 5);
        System.out.println(c.color + " " + c.radius);  // red 5
    }
}`, blank:"___(color);  // 부모 생성자", answer:"super", options:["super","this","parent","base"], blocks:["Circle(String color, int radius) {","    super(color);","    this.radius = radius;","}"], hint:"super()는 부모 클래스의 생성자를 호출합니다. 자식 생성자의 첫 줄이어야 합니다." },
      { title:"드릴 3 — @Override 재정의", prompt:"부모 메서드를 재정의하는 어노테이션과 코드를 완성하세요.", full:`public class Main {
    static class Vehicle { String type() { return "이동수단"; } }
    static class Car extends Vehicle {
        @Override
        String type() { return "자동차"; }
    }
    public static void main(String[] args) {
        Vehicle v = new Car();
        System.out.println(v.type());  // 자동차
    }
}`, blank:"@___ String type() { return \"자동차\"; }", answer:"Override", options:["Override","Overload","Abstract","Static"], blocks:["static class Car extends Vehicle {","    @Override","    String type() { return \"자동차\"; }","}"], hint:"@Override는 부모 메서드를 재정의함을 명시합니다. 오타를 잡아주는 역할도 합니다." },
      { title:"드릴 4 — instanceof 타입 확인", prompt:"객체의 실제 타입을 확인하는 instanceof를 완성하세요.", full:`public class Main {
    static class Animal {}
    static class Dog extends Animal {}
    public static void main(String[] args) {
        Animal a = new Dog();
        if (a instanceof Dog) {
            System.out.println("Dog 타입입니다");
        }
    }
}`, blank:"if (a ___ Dog)", answer:"instanceof", options:["instanceof","is","typeof","isInstance"], blocks:["Animal a = new Dog();","if (a instanceof Dog) {","    System.out.println(\"Dog 타입입니다\");","}"], hint:"instanceof는 객체가 특정 클래스의 인스턴스인지 확인합니다." }
    ]
  },
  { cat:5, id:3, title:"인터페이스와 람다",
    prompt:"Java의 <code>interface</code>와 함수형 인터페이스, 람다식을 코딩테스트 관점에서 익힙니다.",
    full:`import java.util.*;
public class Main {
    // 함수형 인터페이스 (추상 메서드 1개)
    interface Compareable {
        int compare(int a, int b);
    }

    public static void main(String[] args) {
        // 람다로 구현
        Compareable asc = (a, b) -> a - b;
        Compareable desc = (a, b) -> b - a;

        int[] arr = {3, 1, 4, 1, 5};
        // Comparator 람다 (코딩테스트 핵심!)
        List<Integer> list = new ArrayList<>(Arrays.asList(3, 1, 4, 1, 5));
        list.sort((a, b) -> a - b);   // 오름차순
        System.out.println(list);     // [1, 1, 3, 4, 5]
        list.sort((a, b) -> b - a);   // 내림차순
        System.out.println(list);     // [5, 4, 3, 1, 1]
    }
}`,
    hint:"람다식 (a, b) -> a - b 는 Comparator입니다. 반환이 양수면 a가 뒤로, 음수면 a가 앞으로 정렬됩니다.",
    concept: {
      title: "인터페이스와 람다식",
      desc: `interface는 메서드 시그니처만 선언하는 계약입니다. 추상 메서드가 하나인 함수형 인터페이스는 람다식으로 구현할 수 있습니다. 코딩테스트에서는 주로 Comparator 람다를 씁니다.`,
      syntax: `// 인터페이스 선언
interface Checker {
    boolean check(int n);
}

// 람다로 구현
Checker isEven = n -> n % 2 == 0;
Checker isPositive = n -> n > 0;

// Comparator 람다 (정렬에 필수!)
list.sort((a, b) -> a - b);          // 오름차순
list.sort((a, b) -> b - a);          // 내림차순
list.sort((a, b) -> a.compareTo(b)); // String 오름차순

// 2D 배열 정렬
Arrays.sort(arr2d, (a, b) -> a[0] - b[0]); // 첫 열 기준`,
      note: `💡 Comparator 람다: (a, b) -> a - b에서 양수 반환 시 a가 b보다 뒤로, 음수 반환 시 a가 b보다 앞으로 이동합니다.`,
      dart: `list.sort((a, b) => a.compareTo(b)) → 동일 구조`
    },
    drills: [
      { title:"드릴 1 — Comparator 오름차순 람다", prompt:"리스트를 오름차순으로 정렬하는 람다를 완성하세요.", full:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>(Arrays.asList(5, 2, 8, 1));
        list.sort((a, b) -> a - b);
        System.out.println(list);  // [1, 2, 5, 8]
    }
}`, blank:"list.sort((a, b) -> a ___ b);", answer:"- ", options:["- ","+ ","* ","/ "], blocks:["list.sort((a, b) -> a - b);","System.out.println(list);"], hint:"(a, b) -> a - b: a < b이면 음수 반환 → a가 앞으로 → 오름차순." },
      { title:"드릴 2 — 절댓값 기준 정렬", prompt:"절댓값 기준 오름차순으로 정렬하는 람다를 완성하세요.", full:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>(Arrays.asList(-3, 1, -2, 4, -1));
        list.sort((a, b) -> Math.abs(a) - Math.abs(b));
        System.out.println(list);  // [-1, 1, -2, -3, 4] (절댓값 오름차순)
    }
}`, blank:"list.sort((a, b) -> Math.abs(a) - Math.abs(___));", answer:"b", options:["b","a","0","1"], blocks:["list.sort((a, b) -> Math.abs(a) - Math.abs(b));","System.out.println(list);"], hint:"절댓값 기준: Math.abs(a) - Math.abs(b)이면 절댓값 오름차순입니다." },
      { title:"드릴 3 — 2D 배열 다중 기준 정렬", prompt:"2차원 배열을 첫 번째 열 오름차순, 같으면 두 번째 열 내림차순으로 정렬하는 람다를 완성하세요.", full:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        int[][] arr = {{2,3},{1,5},{1,2},{2,1}};
        Arrays.sort(arr, (a, b) -> {
            if (a[0] != b[0]) return a[0] - b[0];
            return b[1] - a[1];
        });
        for (int[] row : arr) System.out.println(Arrays.toString(row));
    }
}`, blank:"if (a[0] != b[0]) return a[0] - b[0];\nreturn ___ - a[1];", answer:"b[1]", options:["b[1]","a[1]","a[0]","b[0]"], blocks:["Arrays.sort(arr, (a, b) -> {","    if (a[0] != b[0]) return a[0] - b[0];","    return b[1] - a[1];","});"], hint:"다중 기준: 첫 번째 기준이 같을 때 두 번째 기준을 적용합니다. b[1] - a[1]은 두 번째 열 내림차순." },
      { title:"드릴 4 — 문자열 다중 기준 정렬", prompt:"문자열 배열을 길이 오름차순, 같으면 사전순으로 정렬하는 코드를 완성하세요.", full:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        String[] words = {"dog","cat","elephant","bee","ant"};
        Arrays.sort(words, (a, b) -> {
            if (a.length() != b.length()) return a.length() - b.length();
            return a.compareTo(b);
        });
        System.out.println(Arrays.toString(words));
    }
}`, blank:"return a.___(b);", answer:"compareTo", options:["compareTo","equals","compare","indexOf"], blocks:["Arrays.sort(words, (a, b) -> {","    if (a.length() != b.length()) return a.length() - b.length();","    return a.compareTo(b);","});","System.out.println(Arrays.toString(words));"], hint:"String.compareTo()는 사전순 비교 결과를 정수로 반환합니다. 오름차순 정렬에 바로 사용할 수 있습니다." }
    ]
  },

// ─── CAT 6 추가 ─────────────────────────────────────────,

  // ───────────────────────────────────────────────────
  // CAT 6 — String 조작
  // ───────────────────────────────────────────────────
  { cat:6, id:0, title:"String 주요 메서드",
    prompt:"Java String의 핵심 메서드들을 익힙니다. Python 문자열 메서드와 이름이 다른 것에 주의하세요.",
    full:`public class Main {
    public static void main(String[] args) {
        String s = "Hello, Java!";
        System.out.println(s.length());         // 12
        System.out.println(s.charAt(0));        // 'H'
        System.out.println(s.substring(7));     // "Java!"
        System.out.println(s.substring(7, 11)); // "Java"
        System.out.println(s.toLowerCase());    // "hello, java!"
        System.out.println(s.replace("Java", "World")); // "Hello, World!"
        System.out.println(s.contains("Java")); // true
    }
}`,
    hint:"s.length()는 메서드 (괄호 있음). 배열의 .length와 다릅니다!",
    concept: {
      title: "String 주요 메서드",
      desc: `Java String 메서드는 Python과 이름이 비슷하지만 다른 것들이 있습니다. 특히 length()는 괄호가 있으며, charAt()으로 개별 문자에 접근합니다.`,
      syntax: `String s = "Hello";
s.length()              // 5 (괄호 있음! 배열.length와 다름)
s.charAt(0)             // 'H'
s.substring(1)          // "ello"
s.substring(1, 3)       // "el" (끝 미포함)
s.indexOf("ll")         // 2
s.contains("ll")        // true
s.replace("l", "r")     // "Herro"
s.toLowerCase()         // "hello"
s.toUpperCase()         // "HELLO"
s.trim()                // 앞뒤 공백 제거
s.split(",")            // String[] 배열 반환`,
      note: `💡 String.length() (괄호 O) vs 배열.length (괄호 X) vs ArrayList.size() (괄호 O). 이 세 가지를 구분하는 것이 핵심!`,
      dart: `s.length → s.length()\ns[i] → s.charAt(i)\ns.substring(a,b) 동일\ns.contains(sub) 동일\ns.split(',') → s.split(",") String[]반환`
    },
    drills: [
      { title:"드릴 1 — length() 메서드", prompt:"문자열 길이를 반환하는 메서드를 완성하세요.<br><code>int len = s.___();</code>", full:`public class Main {
    public static void main(String[] args) {
        String s = "Hello";
        int len = s.length();
        System.out.println(len);  // 5
    }
}`, blank:"int len = s.___();", answer:"length", options:["length","size","count","len"], blocks:["String s = \"Hello\";","int len = s.length();","System.out.println(len);"], hint:"String의 길이는 .length() 메서드 (괄호 있음). 배열의 .length (괄호 없음)와 다릅니다." },
      { title:"드릴 2 — charAt으로 문자 접근", prompt:"문자열의 인덱스로 문자에 접근하는 메서드를 완성하세요.<br><code>char c = s.___(0);</code>", full:`public class Main {
    public static void main(String[] args) {
        String s = "Hello";
        char c = s.charAt(0);
        System.out.println(c);  // 'H'
    }
}`, blank:"char c = s.___(0);", answer:"charAt", options:["charAt","get","indexOf","at"], blocks:["String s = \"Hello\";","char c = s.charAt(0);","System.out.println(c);"], hint:"s.charAt(i)는 인덱스 i의 문자를 반환합니다. Python의 s[i]에 해당합니다." },
      { title:"드릴 3 — substring 추출", prompt:"인덱스 7부터 끝까지 부분 문자열을 추출하는 코드를 완성하세요.", full:`public class Main {
    public static void main(String[] args) {
        String s = "Hello, Java!";
        String sub = s.substring(7);
        System.out.println(sub);  // Java!
    }
}`, blank:"String sub = s.___(7);", answer:"substring", options:["substring","slice","substr","sub"], blocks:["String s = \"Hello, Java!\";","String sub = s.substring(7);","System.out.println(sub);"], hint:"substring(시작인덱스)는 해당 인덱스부터 끝까지 반환합니다." },
      { title:"드릴 4 — split으로 분리", prompt:"쉼표로 구분된 문자열을 배열로 분리하는 코드를 완성하세요.", full:`public class Main {
    public static void main(String[] args) {
        String s = "apple,banana,cherry";
        String[] parts = s.split(",");
        for (String part : parts) {
            System.out.println(part);
        }
    }
}`, blank:"String[] parts = s.___(\".\");", answer:"split(\",\")", options:["split(\",\")","split(\" \")","split(\".\")", "split(\";\" )"], blocks:["String s = \"apple,banana,cherry\";","String[] parts = s.split(\",\");","for (String part : parts) {","    System.out.println(part);","}"], hint:"split(\",\")는 쉼표를 구분자로 분리합니다. String[]을 반환합니다." }
    ]
  },
  { cat:6, id:1, title:"StringBuilder — 효율적 문자열 조합",
    prompt:"반복 문자열 연결 시 <code>StringBuilder</code>를 사용하는 이유와 방법을 익힙니다.",
    full:`public class Main {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder();
        for (int i = 1; i <= 5; i++) {
            sb.append(i);
            if (i < 5) sb.append(", ");
        }
        System.out.println(sb.toString());  // 1, 2, 3, 4, 5

        // reverse 예시
        StringBuilder sb2 = new StringBuilder("Hello");
        System.out.println(sb2.reverse());  // olleH
    }
}`,
    hint:"String + String 반복은 O(n²). StringBuilder.append()는 O(1). 반복문 안에서는 항상 StringBuilder를 쓰세요.",
    concept: {
      title: "StringBuilder — 가변 문자열 빌더",
      desc: `Java의 String은 불변(immutable)입니다. 반복문 안에서 str += x를 하면 매번 새 String 객체가 만들어져 O(n²)의 비효율이 발생합니다. StringBuilder를 사용하면 O(n)으로 해결됩니다.`,
      syntax: `StringBuilder sb = new StringBuilder();

sb.append("Hello");    // 끝에 추가
sb.append(42);         // 숫자도 자동 변환
sb.insert(0, "Hi ");  // 특정 위치에 삽입
sb.reverse();          // 뒤집기 (palindrome 검사에 유용!)
sb.deleteCharAt(0);    // 특정 인덱스 문자 삭제
sb.delete(1, 3);       // 범위 삭제

String result = sb.toString();  // String으로 변환`,
      note: `💡 sb.reverse()는 StringBuilder 자체를 변경합니다. 팰린드롬 검사: s.equals(new StringBuilder(s).reverse().toString())`,
      dart: `StringBuffer sb = StringBuffer() → StringBuilder sb = new StringBuilder()\nsb.write(x) → sb.append(x)\nsb.toString() 동일`
    },
    drills: [
      { title:"드릴 1 — append 메서드", prompt:"StringBuilder에 문자열을 추가하는 메서드를 완성하세요.<br><code>sb.___( \"Hello\" );</code>", full:`public class Main {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder();
        sb.append("Hello");
        sb.append(", World!");
        System.out.println(sb.toString());  // Hello, World!
    }
}`, blank:"sb.___( \"Hello\" );", answer:"append", options:["append","add","insert","push"], blocks:["StringBuilder sb = new StringBuilder();","sb.append(\"Hello\");","sb.append(\", World!\");","System.out.println(sb.toString());"], hint:"append()는 StringBuilder 끝에 문자열/숫자를 추가합니다. Python의 += 또는 join과 유사합니다." },
      { title:"드릴 2 — reverse()로 뒤집기", prompt:"문자열을 뒤집는 StringBuilder 메서드를 완성하세요.", full:`public class Main {
    public static void main(String[] args) {
        String s = "Hello";
        String reversed = new StringBuilder(s).reverse().toString();
        System.out.println(reversed);  // olleH
    }
}`, blank:"new StringBuilder(s).___().toString();", answer:"reverse", options:["reverse","flip","invert","mirror"], blocks:["String s = \"Hello\";","String reversed = new StringBuilder(s).reverse().toString();","System.out.println(reversed);"], hint:"reverse()는 StringBuilder의 내용을 반전시킵니다. Python의 s[::-1]에 해당합니다." },
      { title:"드릴 3 — toString()으로 변환", prompt:"StringBuilder를 String으로 변환하는 메서드를 완성하세요.", full:`public class Main {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder();
        sb.append("Java");
        String result = sb.toString();
        System.out.println(result);  // Java
    }
}`, blank:"String result = sb.___();", answer:"toString", options:["toString","toStr","getString","convert"], blocks:["StringBuilder sb = new StringBuilder();","sb.append(\"Java\");","String result = sb.toString();","System.out.println(result);"], hint:"StringBuilder에서 일반 String을 얻으려면 .toString()을 호출합니다." },
      { title:"드릴 4 — char 배열로 문자열 처리", prompt:"문자열의 각 문자를 순회해 대문자로 변환하는 코드를 완성하세요.", full:`public class Main {
    public static void main(String[] args) {
        String s = "hello";
        char[] chars = s.toCharArray();
        for (int i = 0; i < chars.length; i++) {
            chars[i] = Character.toUpperCase(chars[i]);
        }
        System.out.println(new String(chars));  // HELLO
    }
}`, blank:"char[] chars = s.___();", answer:"toCharArray", options:["toCharArray","chars()","charArray()","getChars()"], blocks:["String s = \"hello\";","char[] chars = s.toCharArray();","for (int i = 0; i < chars.length; i++) {","    chars[i] = Character.toUpperCase(chars[i]);","}","System.out.println(new String(chars));"], hint:"toCharArray()는 String을 char[] 배열로 변환합니다. 개별 문자를 수정할 수 있습니다." }
    ]
  },

  // ───────────────────────────────────────────────────
  // CAT 7 — 정렬 & 탐색
  // ───────────────────────────────────────────────────,
  { cat:6, id:2, title:"String 파싱 — split, trim, startsWith",
    prompt:"코딩테스트에서 자주 쓰는 문자열 파싱 메서드들을 익힙니다. <code>split</code>, <code>trim</code>, <code>startsWith</code>, <code>endsWith</code>를 확인하세요.",
    full:`public class Main {
    public static void main(String[] args) {
        String s = "  hello world  ";
        System.out.println(s.trim());              // "hello world"

        String csv = "1,2,3,4,5";
        String[] parts = csv.split(",");
        for (String p : parts) System.out.print(p + " "); // 1 2 3 4 5
        System.out.println();

        String url = "https://example.com";
        System.out.println(url.startsWith("https")); // true
        System.out.println(url.endsWith(".com"));    // true

        System.out.println("hello".indexOf("ll"));   // 2
        System.out.println("hello".lastIndexOf('l')); // 3
    }
}`,
    hint:"split()은 String[]를 반환합니다. trim()은 앞뒤 공백/개행을 제거합니다.",
    concept: {
      title: "문자열 파싱 메서드",
      desc: `코딩테스트에서 입력 문자열을 파싱하는 작업이 빈번합니다. split, trim, startsWith, endsWith, indexOf, replace 등을 자유롭게 사용할 수 있어야 합니다.`,
      syntax: `String s = "  hello world  ";
s.trim()                // 앞뒤 공백 제거
s.strip()               // trim()과 유사 (유니코드 공백도)

s.split(",")            // 쉼표로 분리 → String[]
s.split(" +")           // 하나 이상 공백으로 분리 (정규식)
s.split("", 0)          // 문자 단위로 분리 (Java 8+)

s.startsWith("he")      // true
s.endsWith("ld")        // true
s.contains("ello")      // true
s.indexOf("ll")         // 2 (처음 등장 위치)
s.lastIndexOf('l')      // 3 (마지막 등장 위치)

String joined = String.join("-", "a","b","c");  // "a-b-c"`,
      note: `💡 split("\\\\.")처럼 .은 정규식 메타문자라 이스케이프 필요. 공백 구분은 split(" ") 또는 split(" +").`,
      dart: `s.trim() 동일\ns.split(',') 동일 (List 반환)\ns.startsWith('he') 동일\ns.contains('ll') 동일`
    },
    drills: [
      { title:"드릴 1 — trim으로 공백 제거", prompt:"입력 문자열 앞뒤 공백을 제거하는 메서드를 완성하세요.", full:`public class Main {
    public static void main(String[] args) {
        String s = "  hello  ";
        System.out.println(s.trim());  // "hello"
    }
}`, blank:"System.out.println(s.___());", answer:"trim", options:["trim","strip","clean","removeSpaces"], blocks:["String s = \"  hello  \";","System.out.println(s.trim());"], hint:"trim()은 문자열 앞뒤의 공백 문자를 제거합니다." },
      { title:"드릴 2 — startsWith 접두사 확인", prompt:"문자열이 특정 문자열로 시작하는지 확인하는 코드를 완성하세요.", full:`public class Main {
    public static void main(String[] args) {
        String s = "Java Programming";
        System.out.println(s.startsWith("Java"));  // true
        System.out.println(s.startsWith("Python")); // false
    }
}`, blank:"s.___( \"Java\" )", answer:"startsWith", options:["startsWith","beginsWith","indexOf","contains"], blocks:["String s = \"Java Programming\";","System.out.println(s.startsWith(\"Java\"));","System.out.println(s.startsWith(\"Python\"));"], hint:"startsWith()는 문자열이 지정한 접두사로 시작하면 true를 반환합니다." },
      { title:"드릴 3 — String.join으로 결합", prompt:"문자열 배열을 '-'로 연결하는 코드를 완성하세요.", full:`public class Main {
    public static void main(String[] args) {
        String[] parts = {"2024", "01", "15"};
        String result = String.join("-", parts);
        System.out.println(result);  // 2024-01-15
    }
}`, blank:"String result = String.___(\"-\", parts);", answer:"join", options:["join","concat","combine","merge"], blocks:["String[] parts = {\"2024\", \"01\", \"15\"};","String result = String.join(\"-\", parts);","System.out.println(result);"], hint:"String.join(구분자, 배열)은 배열 원소를 구분자로 연결합니다. Python의 '-'.join(list)에 해당합니다." },
      { title:"드릴 4 — 문자열 replace", prompt:"문자열에서 특정 부분을 다른 문자열로 교체하는 코드를 완성하세요.", full:`public class Main {
    public static void main(String[] args) {
        String s = "Hello, Python!";
        String result = s.replace("Python", "Java");
        System.out.println(result);  // Hello, Java!
    }
}`, blank:"String result = s.replace(\"Python\", ___);", answer:"\"Java\"", options:["\"Java\"","Java","'Java'","(Java)"], blocks:["String s = \"Hello, Python!\";","String result = s.replace(\"Python\", \"Java\");","System.out.println(result);"], hint:"replace(대상, 교체)는 모든 일치 부분을 교체한 새 String을 반환합니다." }
    ]
  },
  { cat:6, id:3, title:"정규식과 문자열 검사",
    prompt:"<code>matches()</code>와 <code>replaceAll()</code>로 정규식을 활용하는 방법과 <code>Character</code> 클래스의 문자 검사 메서드를 익힙니다.",
    full:`public class Main {
    public static void main(String[] args) {
        String num = "12345";
        System.out.println(num.matches("[0-9]+"));    // true (숫자만)
        System.out.println(num.matches("[a-z]+"));    // false

        String s = "Hello 123 World";
        System.out.println(s.replaceAll("[0-9]", "*")); // Hello *** World

        // Character 클래스
        char c = 'A';
        System.out.println(Character.isLetter(c));   // true
        System.out.println(Character.isDigit(c));    // false
        System.out.println(Character.isUpperCase(c));// true
        System.out.println(Character.toLowerCase(c));// 'a'
    }
}`,
    hint:"matches()는 전체 문자열이 패턴에 맞는지 확인합니다. Character 클래스로 개별 문자를 검사할 수 있습니다.",
    concept: {
      title: "정규식과 Character 클래스",
      desc: `Java String의 matches(), replaceAll(), split() 메서드는 정규식을 지원합니다. Character 클래스는 개별 문자의 종류(숫자/문자/대소문자)를 검사하는 정적 메서드를 제공합니다.`,
      syntax: `// 정규식
s.matches("[0-9]+")       // 숫자만 구성
s.matches("[a-zA-Z]+")    // 영문자만
s.replaceAll("\\\\s+", "") // 공백 모두 제거
s.replaceAll("[^0-9]", "") // 숫자 외 모두 제거

// Character 유틸
Character.isDigit(c)      // 숫자 문자?
Character.isLetter(c)     // 영문자?
Character.isAlphabetic(c) // 알파벳?
Character.isUpperCase(c)  // 대문자?
Character.isLowerCase(c)  // 소문자?
Character.toUpperCase(c)  // 대문자로 변환
Character.toLowerCase(c)  // 소문자로 변환`,
      note: `💡 Java 정규식에서 \\d는 "\\\\d"로 이스케이프합니다. matches()는 전체 매칭, 부분 매칭은 Pattern/Matcher를 씁니다.`,
      dart: `RegExp(r'[0-9]+') → "[0-9]+" (matches)\nString.fromCharCode / codeUnitAt → Character 클래스`
    },
    drills: [
      { title:"드릴 1 — matches로 숫자 확인", prompt:"문자열이 숫자로만 이루어졌는지 확인하는 코드를 완성하세요.", full:`public class Main {
    public static void main(String[] args) {
        String s = "12345";
        System.out.println(s.matches("[0-9]+"));  // true
        System.out.println("abc".matches("[0-9]+")); // false
    }
}`, blank:"s.matches(\"___+\")", answer:"[0-9]", options:["[0-9]","\\\\d","0-9","num"], blocks:["String s = \"12345\";","System.out.println(s.matches(\"[0-9]+\"));","System.out.println(\"abc\".matches(\"[0-9]+\"));"], hint:"[0-9]+는 숫자 한 자리 이상을 의미합니다. matches()는 전체 문자열이 패턴에 맞아야 true입니다." },
      { title:"드릴 2 — Character.isDigit", prompt:"문자가 숫자인지 확인하는 Character 메서드를 완성하세요.", full:`public class Main {
    public static void main(String[] args) {
        char c1 = '5';
        char c2 = 'a';
        System.out.println(Character.isDigit(c1));  // true
        System.out.println(Character.isDigit(c2));  // false
    }
}`, blank:"Character.___(c1)", answer:"isDigit", options:["isDigit","isNumber","isInt","isNumeric"], blocks:["char c1 = '5';","System.out.println(Character.isDigit(c1));"], hint:"Character.isDigit(c)는 문자가 0~9 사이의 숫자이면 true를 반환합니다." },
      { title:"드릴 3 — replaceAll 숫자 제거", prompt:"문자열에서 숫자를 모두 제거하는 코드를 완성하세요.", full:`public class Main {
    public static void main(String[] args) {
        String s = "a1b2c3";
        String result = s.replaceAll("[0-9]", "");
        System.out.println(result);  // "abc"
    }
}`, blank:"s.replaceAll(\"___\", \"\")", answer:"[0-9]", options:["[0-9]","[a-z]","\\\\w","\\\\s"], blocks:["String s = \"a1b2c3\";","String result = s.replaceAll(\"[0-9]\", \"\");","System.out.println(result);"], hint:"[0-9]는 숫자 한 자리를 나타내는 정규식입니다. replaceAll로 빈 문자열로 교체하면 제거됩니다." },
      { title:"드릴 4 — 팰린드롬 검사", prompt:"문자열이 팰린드롬인지 검사하는 코드를 완성하세요.", full:`public class Main {
    static boolean isPalindrome(String s) {
        String rev = new StringBuilder(s).reverse().toString();
        return s.equals(rev);
    }
    public static void main(String[] args) {
        System.out.println(isPalindrome("racecar")); // true
        System.out.println(isPalindrome("hello"));   // false
    }
}`, blank:"String rev = new StringBuilder(s).___.toString();", answer:"reverse()", options:["reverse()","flip()","mirror()","sort()"], blocks:["String rev = new StringBuilder(s).reverse().toString();","return s.equals(rev);"], hint:"StringBuilder의 reverse()로 문자열을 뒤집은 뒤 equals()로 원본과 비교합니다." }
    ]
  },

// ─── CAT 7 추가 ─────────────────────────────────────────,

  // ───────────────────────────────────────────────────
  // CAT 7 — 정렬 & 탐색
  // ───────────────────────────────────────────────────
  { cat:7, id:0, title:"Arrays.sort와 기본 정렬",
    prompt:"Java의 <code>Arrays.sort()</code>로 배열을 정렬하는 방법을 익힙니다.",
    full:`import java.util.Arrays;
public class Main {
    public static void main(String[] args) {
        int[] arr = {5, 2, 8, 1, 9, 3};
        Arrays.sort(arr);
        System.out.println(Arrays.toString(arr)); // [1, 2, 3, 5, 8, 9]

        String[] words = {"banana", "apple", "cherry"};
        Arrays.sort(words);
        System.out.println(Arrays.toString(words)); // [apple, banana, cherry]
    }
}`,
    hint:"Arrays.sort()는 원본 배열을 변경합니다. 정렬 결과를 출력할 때는 Arrays.toString()을 씁니다.",
    concept: {
      title: "Arrays.sort — 배열 정렬",
      desc: `Arrays.sort()는 Java 기본 라이브러리의 배열 정렬 메서드입니다. int[] 같은 기본형 배열에 사용하며, 원본 배열을 수정합니다. Python의 list.sort()와 유사합니다.`,
      syntax: `import java.util.Arrays;

int[] arr = {3, 1, 2};
Arrays.sort(arr);                  // [1, 2, 3] (오름차순)
System.out.println(Arrays.toString(arr)); // 배열을 문자열로

// 부분 정렬: 인덱스 1~2만 정렬
Arrays.sort(arr, 1, 3);  // arr[1]부터 arr[2]까지

// String 배열도 동일
String[] words = {"c","a","b"};
Arrays.sort(words);  // ["a","b","c"]`,
      note: `💡 Arrays.sort()는 기본형 배열에서 내림차순 정렬 불가! 내림차순은 Integer[] (래퍼 클래스)으로 변환 후 Collections.reverseOrder() 사용.`,
      dart: `arr.sort() → Arrays.sort(arr)\narr.toString() → Arrays.toString(arr)`
    },
    drills: [
      { title:"드릴 1 — Arrays.sort 기본", prompt:"배열을 오름차순으로 정렬하는 코드를 완성하세요.", full:`import java.util.Arrays;
public class Main {
    public static void main(String[] args) {
        int[] arr = {3, 1, 4, 1, 5};
        Arrays.sort(arr);
        System.out.println(Arrays.toString(arr));
    }
}`, blank:"___.sort(arr);", answer:"Arrays", options:["Arrays","Collections","Array","Sort"], blocks:["import java.util.Arrays;","int[] arr = {3, 1, 4, 1, 5};","Arrays.sort(arr);","System.out.println(Arrays.toString(arr));"], hint:"기본형 배열(int[])의 정렬은 Arrays.sort()를 사용합니다." },
      { title:"드릴 2 — Comparator 람다 정렬", prompt:"문자열 배열을 길이 기준 오름차순으로 정렬하는 람다를 완성하세요.", full:`import java.util.Arrays;
public class Main {
    public static void main(String[] args) {
        String[] words = {"banana", "fig", "apple", "kiwi"};
        Arrays.sort(words, (a, b) -> a.length() - b.length());
        System.out.println(Arrays.toString(words));
    }
}`, blank:"Arrays.sort(words, (a, b) -> a.___() - b.___());", answer:"length", options:["length","size","compareTo","charAt"], blocks:["String[] words = {\"banana\", \"fig\", \"apple\", \"kiwi\"};","Arrays.sort(words, (a, b) -> a.length() - b.length());","System.out.println(Arrays.toString(words));"], hint:"람다 Comparator: (a, b) -> 양수면 b가 앞, 음수면 a가 앞. a.length() - b.length()는 오름차순." },
      { title:"드릴 3 — 2D 배열 정렬", prompt:"2차원 배열을 첫 번째 열 기준 오름차순으로 정렬하는 코드를 완성하세요.", full:`import java.util.Arrays;
public class Main {
    public static void main(String[] args) {
        int[][] arr = {{3,2},{1,4},{2,1}};
        Arrays.sort(arr, (a, b) -> a[0] - b[0]);
        for (int[] row : arr)
            System.out.println(Arrays.toString(row));
    }
}`, blank:"Arrays.sort(arr, (a, b) -> a[0] - b[___]);", answer:"0", options:["0","1","-1","2"], blocks:["int[][] arr = {{3,2},{1,4},{2,1}};","Arrays.sort(arr, (a, b) -> a[0] - b[0]);","for (int[] row : arr)","    System.out.println(Arrays.toString(row));"], hint:"a[0]은 각 행의 첫 번째 원소. a[0] - b[0] 이면 첫 번째 열 기준 오름차순 정렬." },
      { title:"드릴 4 — Collections.sort 내림차순", prompt:"ArrayList를 내림차순으로 정렬하는 코드를 완성하세요.", full:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<>(Arrays.asList(3, 1, 4, 1, 5));
        Collections.sort(list, Collections.reverseOrder());
        System.out.println(list);  // [5, 4, 3, 1, 1]
    }
}`, blank:"Collections.sort(list, Collections.___());", answer:"reverseOrder", options:["reverseOrder","reverse","descending","sortDesc"], blocks:["ArrayList<Integer> list = new ArrayList<>(Arrays.asList(3, 1, 4, 1, 5));","Collections.sort(list, Collections.reverseOrder());","System.out.println(list);"], hint:"Collections.reverseOrder()는 내림차순 Comparator를 반환합니다." }
    ]
  },
  { cat:7, id:1, title:"이진 탐색과 최솟값/최댓값",
    prompt:"정렬된 배열에서 <code>Arrays.binarySearch()</code>와 스트림을 이용한 최솟값/최댓값 탐색을 익힙니다.",
    full:`import java.util.Arrays;
public class Main {
    public static void main(String[] args) {
        int[] arr = {1, 3, 5, 7, 9};
        int idx = Arrays.binarySearch(arr, 5);
        System.out.println(idx);  // 2

        // 스트림으로 최댓값/최솟값
        int max = Arrays.stream(arr).max().getAsInt();
        int min = Arrays.stream(arr).min().getAsInt();
        System.out.println(max);  // 9
        System.out.println(min);  // 1
    }
}`,
    hint:"binarySearch는 정렬된 배열에서만 사용 가능합니다. 찾는 값이 없으면 음수를 반환합니다.",
    concept: {
      title: "이진 탐색과 최솟값/최댓값",
      desc: `Arrays.binarySearch()는 정렬된 배열에서 O(log n)으로 값을 탐색합니다. 배열의 최솟값/최댓값은 직접 반복하거나 Java 스트림을 활용합니다.`,
      syntax: `int[] sorted = {1, 3, 5, 7, 9};

// 이진 탐색 (정렬된 배열에서만!)
int idx = Arrays.binarySearch(sorted, 5);  // 2
int notFound = Arrays.binarySearch(sorted, 4); // 음수 반환

// 스트림으로 최솟값/최댓값
int max = Arrays.stream(arr).max().getAsInt();
int min = Arrays.stream(arr).min().getAsInt();
int sum = Arrays.stream(arr).sum();

// 직접 탐색
int myMax = arr[0];
for (int x : arr) if (x > myMax) myMax = x;`,
      note: `💡 binarySearch 전에 반드시 Arrays.sort() 먼저! 정렬되지 않은 배열에서는 결과가 보장되지 않습니다.`,
      dart: `이진탐색: 직접 구현\nmax: list.reduce(max)\nmin: list.reduce(min)`
    },
    drills: [
      { title:"드릴 1 — binarySearch 기본", prompt:"정렬된 배열에서 이진 탐색으로 값 5의 인덱스를 찾는 코드를 완성하세요.", full:`import java.util.Arrays;
public class Main {
    public static void main(String[] args) {
        int[] arr = {1, 3, 5, 7, 9};
        int idx = Arrays.binarySearch(arr, 5);
        System.out.println(idx);  // 2
    }
}`, blank:"int idx = Arrays.___(arr, 5);", answer:"binarySearch", options:["binarySearch","search","find","indexOf"], blocks:["int[] arr = {1, 3, 5, 7, 9};","int idx = Arrays.binarySearch(arr, 5);","System.out.println(idx);"], hint:"Arrays.binarySearch(배열, 찾을값)은 정렬된 배열에서 해당 값의 인덱스를 반환합니다." },
      { title:"드릴 2 — 스트림 최댓값", prompt:"배열의 최댓값을 스트림으로 구하는 코드를 완성하세요.", full:`import java.util.Arrays;
public class Main {
    public static void main(String[] args) {
        int[] arr = {3, 1, 4, 1, 5, 9};
        int max = Arrays.stream(arr).max().getAsInt();
        System.out.println(max);  // 9
    }
}`, blank:"int max = Arrays.stream(arr).___().getAsInt();", answer:"max", options:["max","maximum","biggest","largest"], blocks:["int[] arr = {3, 1, 4, 1, 5, 9};","int max = Arrays.stream(arr).max().getAsInt();","System.out.println(max);"], hint:"Arrays.stream(arr).max()는 OptionalInt를 반환합니다. getAsInt()로 값을 꺼냅니다." },
      { title:"드릴 3 — 직접 최솟값 탐색", prompt:"반복문으로 배열의 최솟값을 찾는 코드를 완성하세요.", full:`public class Main {
    public static void main(String[] args) {
        int[] arr = {3, 1, 4, 1, 5, 9};
        int min = arr[0];
        for (int x : arr) {
            if (x < min) min = x;
        }
        System.out.println(min);  // 1
    }
}`, blank:"if (x ___ min) min = x;", answer:"<", options:["<",">","<=",">="], blocks:["int min = arr[0];","for (int x : arr) {","    if (x < min) min = x;","}","System.out.println(min);"], hint:"현재 원소가 min보다 작으면 min을 갱신합니다." },
      { title:"드릴 4 — 정렬 후 이진탐색", prompt:"배열을 정렬한 후 이진 탐색하는 코드의 순서를 올바르게 배치하세요.", full:`import java.util.Arrays;
public class Main {
    public static void main(String[] args) {
        int[] arr = {5, 2, 8, 1, 9};
        Arrays.sort(arr);          // 먼저 정렬!
        int idx = Arrays.binarySearch(arr, 8);
        System.out.println(idx);  // 3
    }
}`, blank:"___.sort(arr);  // 먼저 정렬!", answer:"Arrays", options:["Arrays","Collections","Array","List"], blocks:["int[] arr = {5, 2, 8, 1, 9};","Arrays.sort(arr);","int idx = Arrays.binarySearch(arr, 8);","System.out.println(idx);"], hint:"binarySearch는 반드시 정렬된 배열에서 사용해야 합니다. sort() → binarySearch() 순서!" }
// 아래는 2946줄 이후 전체 완성본입니다.
// 기존 파일의 2946줄까지는 그대로 두고, 2947줄부터를 아래로 교체하세요.
// ════════════════════════════════════════════════════════════════════

    ]  // ← drills 배열 닫기 (누락된 부분 복구)
  },   // ← cat:7 id:1 question 객체 닫기 (누락된 부분 복구)

  // ─── EXTENSION 추가 문제 ───────────────────────────────
  // ─── CAT 7 추가 ─────────────────────────────────────────

  { cat:7, id:2, title:"완전탐색 — 브루트포스 패턴",
    prompt:"코딩테스트 핵심인 완전탐색(브루트포스) 패턴을 Java로 구현합니다. 모든 경우의 수를 탐색합니다.",
    full:`public class Main {
    // 두 수의 합이 target인 쌍 찾기 (O(n²))
    static int[] twoSum(int[] nums, int target) {
        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    return new int[]{i, j};
                }
            }
        }
        return new int[]{-1, -1};
    }

    public static void main(String[] args) {
        int[] nums = {2, 7, 11, 15};
        int[] result = twoSum(nums, 9);
        System.out.println(result[0] + ", " + result[1]);  // 0, 1
    }
}`,
    hint:"완전탐색은 모든 경우를 다 시도합니다. 이중 for문으로 모든 쌍을 확인하는 것이 기본 패턴입니다.",
    concept: {
      title: "완전탐색 (브루트포스) 패턴",
      desc: `완전탐색은 가능한 모든 경우를 확인합니다. 데이터가 작을 때 가장 확실한 방법입니다. 최적화가 필요하면 HashMap으로 O(n)으로 개선할 수 있습니다.`,
      syntax: `// 이중 for문 완전탐색 O(n²)
for (int i = 0; i < n; i++) {
    for (int j = i+1; j < n; j++) {
        // arr[i], arr[j] 조합 처리
    }
}

// HashMap으로 O(n) 개선
HashMap<Integer, Integer> seen = new HashMap<>();
for (int i = 0; i < nums.length; i++) {
    int need = target - nums[i];
    if (seen.containsKey(need)) {
        // 찾음: seen.get(need), i
    }
    seen.put(nums[i], i);
}

// 부분 수열 (비트마스크)
for (int mask = 0; mask < (1 << n); mask++) {
    for (int i = 0; i < n; i++) {
        if ((mask >> i & 1) == 1) { /* i 포함 */ }
    }
}`,
      note: `💡 n ≤ 100이면 O(n²), n ≤ 20이면 비트마스크 완전탐색, n ≤ 1000이면 O(n²)도 가능. 시간복잡도를 먼저 계산하세요.`,
      dart: `완전탐색 구조는 동일. Python의 itertools.combinations 역할을 이중 for문으로 대체.`
    },
    drills: [
      { title:"드릴 1 — 이중 for 완전탐색", prompt:"배열에서 두 수의 합이 target인 인덱스를 찾는 코드를 완성하세요.", full:`public class Main {
    public static void main(String[] args) {
        int[] nums = {2, 7, 11, 15};
        int target = 9;
        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    System.out.println(i + " " + j);
                }
            }
        }
    }
}`, blank:"for (int j = i + 1; j < nums.___; j++)", answer:"length", options:["length","size()","count","len"], blocks:["for (int i = 0; i < nums.length; i++) {","    for (int j = i + 1; j < nums.length; j++) {","        if (nums[i] + nums[j] == target) {","            System.out.println(i + \" \" + j);","        }","    }","}"], hint:"j는 i+1부터 시작해 중복 쌍을 방지합니다. nums.length는 배열 길이입니다." },
      { title:"드릴 2 — HashMap으로 O(n) Two Sum", prompt:"HashMap을 이용해 O(n)으로 Two Sum을 해결하는 코드를 완성하세요.", full:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        int[] nums = {2, 7, 11, 15};
        int target = 9;
        HashMap<Integer, Integer> seen = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int need = target - nums[i];
            if (seen.containsKey(need)) {
                System.out.println(seen.get(need) + " " + i);
                break;
            }
            seen.put(nums[i], i);
        }
    }
}`, blank:"int need = ___ - nums[i];", answer:"target", options:["target","sum","total","0"], blocks:["HashMap<Integer, Integer> seen = new HashMap<>();","for (int i = 0; i < nums.length; i++) {","    int need = target - nums[i];","    if (seen.containsKey(need)) {","        System.out.println(seen.get(need) + \" \" + i);","        break;","    }","    seen.put(nums[i], i);","}"], hint:"현재 원소의 보완값(need = target - nums[i])이 이미 본 값인지 HashMap에서 O(1)으로 확인합니다." },
      { title:"드릴 3 — 부분합 최댓값", prompt:"배열의 연속된 부분합 중 최댓값을 구하는 코드(카데인 알고리즘)를 완성하세요.", full:`public class Main {
    public static void main(String[] args) {
        int[] arr = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
        int maxSum = arr[0];
        int curSum = arr[0];
        for (int i = 1; i < arr.length; i++) {
            curSum = Math.max(arr[i], curSum + arr[i]);
            maxSum = Math.max(maxSum, curSum);
        }
        System.out.println(maxSum);  // 6
    }
}`, blank:"curSum = Math.max(arr[i], ___ + arr[i]);", answer:"curSum", options:["curSum","maxSum","arr[0]","0"], blocks:["int maxSum = arr[0];","int curSum = arr[0];","for (int i = 1; i < arr.length; i++) {","    curSum = Math.max(arr[i], curSum + arr[i]);","    maxSum = Math.max(maxSum, curSum);","}","System.out.println(maxSum);"], hint:"카데인: 현재 원소 단독 vs 이전 구간에 현재 원소를 더한 것 중 큰 쪽을 선택합니다." },
      { title:"드릴 4 — 비트마스크 완전탐색", prompt:"배열에서 가능한 모든 부분집합의 합을 출력하는 비트마스크 코드를 완성하세요.", full:`public class Main {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3};
        int n = arr.length;
        for (int mask = 1; mask < (1 << n); mask++) {
            int sum = 0;
            for (int i = 0; i < n; i++) {
                if ((mask >> i & 1) == 1) sum += arr[i];
            }
            System.out.println(sum);
        }
    }
}`, blank:"for (int mask = 1; mask < (1 << ___); mask++)", answer:"n", options:["n","n-1","n+1","3"], blocks:["int n = arr.length;","for (int mask = 1; mask < (1 << n); mask++) {","    int sum = 0;","    for (int i = 0; i < n; i++) {","        if ((mask >> i & 1) == 1) sum += arr[i];","    }","    System.out.println(sum);","}"], hint:"n개의 원소가 있으면 2^n개의 부분집합이 존재합니다. 1 << n은 2^n을 의미합니다." }
    ]
  },

  { cat:7, id:3, title:"재귀 — 메서드 호출과 DFS",
    prompt:"Java에서 재귀 메서드와 DFS(깊이우선탐색)의 기본 패턴을 익힙니다.",
    full:`public class Main {
    static boolean[] visited = new boolean[6];
    static int[][] adj = {
        {0,1,1,0,0,0},
        {1,0,0,1,1,0},
        {1,0,0,0,0,1},
        {0,1,0,0,0,0},
        {0,1,0,0,0,0},
        {0,0,1,0,0,0}
    };

    static void dfs(int node) {
        visited[node] = true;
        System.out.print(node + " ");
        for (int i = 0; i < adj[node].length; i++) {
            if (adj[node][i] == 1 && !visited[i]) {
                dfs(i);
            }
        }
    }

    public static void main(String[] args) {
        dfs(0);  // 0 1 3 4 2 5
    }
}`,
    hint:"재귀의 핵심은 기저 조건(base case)입니다. DFS는 visited 배열로 방문 체크를 하며 재귀 호출합니다.",
    concept: {
      title: "재귀와 DFS 패턴",
      desc: `재귀는 메서드가 자기 자신을 호출하는 방식입니다. DFS는 재귀를 이용해 그래프를 깊이 방향으로 탐색합니다. 백트래킹도 재귀 기반으로 구현합니다.`,
      syntax: `// 재귀 기본 구조
static int 메서드(int n) {
    if (기저조건) return 기저값;  // 재귀 종료!
    return 메서드(n-1) + ...;    // 자기 자신 호출
}

// DFS 패턴
static boolean[] visited = new boolean[n];
static void dfs(int node) {
    visited[node] = true;
    for (int i = 0; i < adj[node].length; i++) {
        if (adj[node][i] == 1 && !visited[i]) {
            dfs(i);
        }
    }
}

// 백트래킹
static void backtrack(int start, List<Integer> current) {
    if (종료조건) { 결과저장; return; }
    for (int i = start; i < n; i++) {
        current.add(arr[i]);
        backtrack(i + 1, current);
        current.remove(current.size() - 1);  // 복원
    }
}`,
      note: `💡 재귀 깊이가 너무 깊으면 StackOverflowError 발생. Java 기본 스택 깊이는 ~10,000. 깊으면 반복문으로 전환하세요.`,
      dart: `재귀 구조 동일\nDFS 구조 동일`
    },
    drills: [
      { title:"드릴 1 — 재귀 기저 조건", prompt:"피보나치 수열의 재귀 기저 조건을 완성하세요.", full:`public class Main {
    static int fib(int n) {
        if (n <= 1) return n;    // 기저 조건
        return fib(n-1) + fib(n-2);
    }
    public static void main(String[] args) {
        System.out.println(fib(7));  // 13
    }
}`, blank:"if (n <= 1) ___ n;", answer:"return", options:["return","yield","output","print"], blocks:["static int fib(int n) {","    if (n <= 1) return n;","    return fib(n-1) + fib(n-2);","}"], hint:"기저 조건에서 return으로 재귀를 멈춥니다. n이 0 또는 1이면 그 값 자체를 반환합니다." },
      { title:"드릴 2 — DFS visited 체크", prompt:"DFS에서 방문 여부를 체크하는 코드를 완성하세요.", full:`public class Main {
    static boolean[] visited = new boolean[5];
    static void dfs(int n) {
        visited[n] = true;
        System.out.print(n + " ");
    }
    public static void main(String[] args) {
        for (int i = 0; i < 5; i++) {
            if (!visited[i]) dfs(i);
        }
    }
}`, blank:"if (!visited[i]) ___(i);", answer:"dfs", options:["dfs","bfs","visit","check"], blocks:["for (int i = 0; i < 5; i++) {","    if (!visited[i]) dfs(i);","}"], hint:"방문하지 않은 노드만 dfs()를 호출합니다. visited 배열로 재방문을 방지합니다." },
      { title:"드릴 3 — 팩토리얼 재귀", prompt:"n 팩토리얼을 재귀로 구하는 코드를 완성하세요.", full:`public class Main {
    static long factorial(int n) {
        if (n <= 1) return 1;
        return n * factorial(n - 1);
    }
    public static void main(String[] args) {
        System.out.println(factorial(10));  // 3628800
    }
}`, blank:"return n * factorial(___ - 1);", answer:"n", options:["n","n+1","1","i"], blocks:["if (n <= 1) return 1;","return n * factorial(n - 1);"], hint:"factorial(n) = n * factorial(n-1)입니다. n이 1 이하면 1을 반환합니다." },
      { title:"드릴 4 — 백트래킹 복원", prompt:"백트래킹에서 선택을 취소(복원)하는 코드를 완성하세요.", full:`import java.util.*;
public class Main {
    static void backtrack(int[] arr, int start, List<Integer> cur, List<List<Integer>> result) {
        result.add(new ArrayList<>(cur));
        for (int i = start; i < arr.length; i++) {
            cur.add(arr[i]);
            backtrack(arr, i + 1, cur, result);
            cur.remove(cur.size() - 1);  // 복원
        }
    }
    public static void main(String[] args) {
        List<List<Integer>> result = new ArrayList<>();
        backtrack(new int[]{1,2,3}, 0, new ArrayList<>(), result);
        System.out.println(result.size());  // 7 (공집합 제외 부분집합)
    }
}`, blank:"cur.remove(cur.___ - 1);  // 복원", answer:"size()", options:["size()","length","count","last"], blocks:["cur.add(arr[i]);","backtrack(arr, i + 1, cur, result);","cur.remove(cur.size() - 1);  // 복원"], hint:"cur.size() - 1은 마지막 인덱스입니다. remove()로 마지막 원소를 삭제해 이전 상태로 복원합니다." }
    ]
  },

  { cat:7, id:4, title:"BFS — 너비우선탐색",
    prompt:"Queue를 활용한 BFS(너비우선탐색) 패턴을 Java로 구현합니다. 최단 거리 탐색에 필수입니다.",
    full:`import java.util.*;
public class Main {
    static int[] dx = {0, 0, 1, -1};
    static int[] dy = {1, -1, 0, 0};

    static int bfs(int[][] grid, int startX, int startY, int endX, int endY) {
        int n = grid.length;
        boolean[][] visited = new boolean[n][n];
        Queue<int[]> queue = new LinkedList<>();
        queue.offer(new int[]{startX, startY, 0});
        visited[startX][startY] = true;

        while (!queue.isEmpty()) {
            int[] cur = queue.poll();
            int x = cur[0], y = cur[1], dist = cur[2];
            if (x == endX && y == endY) return dist;
            for (int d = 0; d < 4; d++) {
                int nx = x + dx[d], ny = y + dy[d];
                if (nx >= 0 && nx < n && ny >= 0 && ny < n
                    && !visited[nx][ny] && grid[nx][ny] == 0) {
                    visited[nx][ny] = true;
                    queue.offer(new int[]{nx, ny, dist + 1});
                }
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        int[][] grid = {{0,0,0},{0,1,0},{0,0,0}};
        System.out.println(bfs(grid, 0, 0, 2, 2));  // 4
    }
}`,
    hint:"BFS는 Queue를 사용합니다. 방문 체크를 큐에 넣을 때 해야 중복 탐색을 막을 수 있습니다.",
    concept: {
      title: "BFS (너비우선탐색) 패턴",
      desc: `BFS는 Queue를 사용해 시작점에서 가까운 노드부터 탐색합니다. 모든 간선의 비용이 동일할 때 최단 거리를 보장합니다. 2D 격자 탐색에서 자주 씁니다.`,
      syntax: `// BFS 기본 패턴
Queue<int[]> q = new LinkedList<>();
boolean[] visited = new boolean[n];
q.offer(new int[]{start, 0});  // {노드, 거리}
visited[start] = true;

while (!q.isEmpty()) {
    int[] cur = q.poll();
    int node = cur[0], dist = cur[1];
    if (node == end) { 결과처리; break; }
    for (int next : graph[node]) {
        if (!visited[next]) {
            visited[next] = true;  // 큐에 넣을 때 체크!
            q.offer(new int[]{next, dist + 1});
        }
    }
}

// 2D 격자 방향벡터
int[] dx = {0, 0, 1, -1};  // 상하좌우
int[] dy = {1, -1, 0, 0};`,
      note: `💡 visited 체크는 큐에 넣는 시점에 해야 합니다. poll 후에 체크하면 같은 노드가 여러 번 큐에 들어가 비효율적입니다.`,
      dart: `BFS 구조 동일. Queue 대신 ListQueue 사용.`
    },
    drills: [
      { title:"드릴 1 — Queue를 이용한 BFS", prompt:"BFS에서 큐에서 원소를 꺼내는 메서드를 완성하세요.", full:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Queue<Integer> q = new LinkedList<>();
        q.offer(1); q.offer(2); q.offer(3);
        while (!q.isEmpty()) {
            int cur = q.poll();
            System.out.print(cur + " ");  // 1 2 3
        }
    }
}`, blank:"int cur = q.___();", answer:"poll", options:["poll","pop","remove","get"], blocks:["Queue<Integer> q = new LinkedList<>();","q.offer(1); q.offer(2); q.offer(3);","while (!q.isEmpty()) {","    int cur = q.poll();","    System.out.print(cur + \" \");","}"], hint:"Queue의 poll()은 맨 앞 원소를 제거하고 반환합니다. BFS의 핵심 연산입니다." },
      { title:"드릴 2 — 방향벡터 활용", prompt:"2D 격자에서 상하좌우 이웃을 탐색하는 방향벡터를 완성하세요.", full:`public class Main {
    public static void main(String[] args) {
        int[] dx = {0, 0, 1, -1};
        int[] dy = {1, -1, 0, 0};
        int x = 2, y = 2;
        for (int d = 0; d < 4; d++) {
            int nx = x + dx[d];
            int ny = y + dy[d];
            System.out.println(nx + " " + ny);
        }
    }
}`, blank:"int[] dx = {0, 0, ___, -1};", answer:"1", options:["1","0","-1","2"], blocks:["int[] dx = {0, 0, 1, -1};","int[] dy = {1, -1, 0, 0};","for (int d = 0; d < 4; d++) {","    int nx = x + dx[d];","    int ny = y + dy[d];","}"], hint:"dx[]: 행 변화 (하, 상, 우, 좌). dy[]: 열 변화. {0,0,1,-1}과 {1,-1,0,0} 조합으로 4방향." },
      { title:"드릴 3 — 범위 체크", prompt:"BFS에서 격자 범위를 벗어나지 않는지 확인하는 조건을 완성하세요.", full:`public class Main {
    public static void main(String[] args) {
        int n = 5;
        int nx = 3, ny = 5;
        if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
            System.out.println("범위 내");
        } else {
            System.out.println("범위 초과");  // 출력됨
        }
    }
}`, blank:"if (nx >= 0 && nx < n && ny >= 0 && ny < ___)", answer:"n", options:["n","n-1","n+1","5"], blocks:["if (nx >= 0 && nx < n && ny >= 0 && ny < n) {","    System.out.println(\"범위 내\");","} else {","    System.out.println(\"범위 초과\");","}"], hint:"행과 열 모두 [0, n) 범위 내에 있어야 유효한 좌표입니다." },
      { title:"드릴 4 — 방문 체크 시점", prompt:"BFS에서 중복 방문 방지를 위해 방문 체크를 하는 올바른 시점을 선택하세요.", full:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        boolean[] visited = new boolean[5];
        Queue<Integer> q = new LinkedList<>();
        // 올바른 방법: 큐에 넣을 때 체크
        visited[0] = true;
        q.offer(0);
        while (!q.isEmpty()) {
            int cur = q.poll();
            for (int next = 0; next < 5; next++) {
                if (!visited[next]) {
                    visited[next] = true;  // 큐에 넣을 때 체크!
                    q.offer(next);
                }
            }
        }
    }
}`, blank:"visited[next] = ___; // 큐에 넣을 때 체크!", answer:"true", options:["true","false","1","null"], blocks:["visited[next] = true;  // 큐에 넣을 때 체크!","q.offer(next);"], hint:"큐에 넣는 시점에 visited를 true로 설정해야 같은 노드가 여러 번 큐에 들어가는 것을 막습니다." }
    ]
  },

  { cat:7, id:5, title:"Dynamic Programming 기초",
    prompt:"동적 프로그래밍(DP)의 핵심인 메모이제이션과 바텀업 방식을 Java로 구현합니다.",
    full:`public class Main {
    // 메모이제이션 (탑다운)
    static long[] memo = new long[100];

    static long fibMemo(int n) {
        if (n <= 1) return n;
        if (memo[n] != 0) return memo[n];
        memo[n] = fibMemo(n-1) + fibMemo(n-2);
        return memo[n];
    }

    // 바텀업 (타뷸레이션)
    static long fibDP(int n) {
        long[] dp = new long[n + 1];
        dp[0] = 0; dp[1] = 1;
        for (int i = 2; i <= n; i++) {
            dp[i] = dp[i-1] + dp[i-2];
        }
        return dp[n];
    }

    public static void main(String[] args) {
        System.out.println(fibMemo(40));  // 102334155
        System.out.println(fibDP(40));    // 102334155
    }
}`,
    hint:"DP의 핵심: 이미 계산한 결과를 저장(memo)해 중복 계산을 없앱니다. 탑다운=재귀+메모, 바텀업=반복+배열.",
    concept: {
      title: "동적 프로그래밍 (DP)",
      desc: `DP는 큰 문제를 작은 부분 문제로 나누고, 중복 계산을 메모이제이션으로 제거합니다. 탑다운(재귀+메모)과 바텀업(반복+배열) 두 방식이 있습니다.`,
      syntax: `// 탑다운 메모이제이션
int[] memo = new int[n+1];
Arrays.fill(memo, -1);

int dp(int n) {
    if (기저조건) return 기저값;
    if (memo[n] != -1) return memo[n]; // 캐시 확인
    return memo[n] = dp(n-1) + dp(n-2); // 저장 후 반환
}

// 바텀업 타뷸레이션
int[] dp = new int[n+1];
dp[0] = 초기값;
for (int i = 1; i <= n; i++) {
    dp[i] = dp[i-1] + ...;  // 점화식
}

// 2D DP (LCS, 배낭 등)
int[][] dp = new int[m+1][n+1];
for (int i = 1; i <= m; i++) {
    for (int j = 1; j <= n; j++) {
        dp[i][j] = ...;
    }
}`,
      note: `💡 DP 3단계: ①상태 정의(dp[i]의 의미), ②점화식 도출, ③기저 조건 설정. 이 순서로 설계하세요.`,
      dart: `DP 구조 동일. Map<int,int>으로 메모이제이션.`
    },
    drills: [
      { title:"드릴 1 — 메모이제이션", prompt:"피보나치를 메모이제이션으로 구현할 때 캐시를 확인하는 코드를 완성하세요.", full:`public class Main {
    static long[] memo = new long[100];
    static long fib(int n) {
        if (n <= 1) return n;
        if (memo[n] != 0) return memo[n];
        memo[n] = fib(n-1) + fib(n-2);
        return memo[n];
    }
    public static void main(String[] args) {
        System.out.println(fib(50));  // 12586269025
    }
}`, blank:"if (memo[n] != 0) return memo[___];", answer:"n", options:["n","n-1","0","1"], blocks:["if (n <= 1) return n;","if (memo[n] != 0) return memo[n];","memo[n] = fib(n-1) + fib(n-2);","return memo[n];"], hint:"memo[n]에 값이 있으면 이미 계산된 것이므로 바로 반환합니다." },
      { title:"드릴 2 — 바텀업 DP 점화식", prompt:"계단 오르기 DP에서 점화식을 완성하세요. 한 번에 1칸 또는 2칸 오를 수 있습니다.", full:`public class Main {
    public static void main(String[] args) {
        int n = 10;
        int[] dp = new int[n + 1];
        dp[1] = 1; dp[2] = 2;
        for (int i = 3; i <= n; i++) {
            dp[i] = dp[i-1] + dp[i-2];
        }
        System.out.println(dp[n]);  // 89
    }
}`, blank:"dp[i] = dp[i-1] + dp[___];", answer:"i-2", options:["i-2","i-1","i","i+1"], blocks:["dp[1] = 1; dp[2] = 2;","for (int i = 3; i <= n; i++) {","    dp[i] = dp[i-1] + dp[i-2];","}","System.out.println(dp[n]);"], hint:"i번째 계단에 도달하는 방법 = (i-1)에서 1칸 + (i-2)에서 2칸." },
      { title:"드릴 3 — 배열 초기화 (DP 초기값)", prompt:"DP 배열을 특정 값으로 초기화하는 Arrays.fill 코드를 완성하세요.", full:`import java.util.Arrays;
public class Main {
    public static void main(String[] args) {
        int n = 10;
        int[] dp = new int[n + 1];
        Arrays.fill(dp, Integer.MAX_VALUE);  // INF로 초기화
        dp[0] = 0;
        System.out.println(dp[0]);  // 0
        System.out.println(dp[1]);  // 2147483647 (INF)
    }
}`, blank:"Arrays.fill(dp, Integer.___);", answer:"MAX_VALUE", options:["MAX_VALUE","MIN_VALUE","INFINITY","MAX_INT"], blocks:["int[] dp = new int[n + 1];","Arrays.fill(dp, Integer.MAX_VALUE);","dp[0] = 0;","System.out.println(dp[0]);"], hint:"Integer.MAX_VALUE는 int의 최댓값(약 21억)입니다. 최단거리 DP에서 초기 INF 값으로 씁니다." },
      { title:"드릴 4 — LCS (2D DP)", prompt:"두 문자열의 최장 공통 부분수열(LCS) 길이를 구하는 2D DP를 완성하세요.", full:`public class Main {
    public static void main(String[] args) {
        String a = "ABCBDAB", b = "BDCAB";
        int m = a.length(), n = b.length();
        int[][] dp = new int[m+1][n+1];
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (a.charAt(i-1) == b.charAt(j-1)) {
                    dp[i][j] = dp[i-1][j-1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
                }
            }
        }
        System.out.println(dp[m][n]);  // 4
    }
}`, blank:"dp[i][j] = dp[i-1][j-1] + ___;", answer:"1", options:["1","0","dp[i][j]","2"], blocks:["if (a.charAt(i-1) == b.charAt(j-1)) {","    dp[i][j] = dp[i-1][j-1] + 1;","} else {","    dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);","}"], hint:"두 문자가 같으면 대각선+1, 다르면 위쪽/왼쪽 중 큰 값을 사용합니다." }
    ]
  },

  // ═══════════════════════════════════════════════════════
  // C1 — 예외 처리 (try-catch) — cat:0 추가
  // ═══════════════════════════════════════════════════════
  { cat:0, id:7, title:"예외 처리 — try-catch-finally",
    prompt:`<div style="line-height:1.7">
<b>🛡️ 예외 처리 — 코딩테스트 런타임 에러 방지</b><br><br>
<code>BufferedReader</code> 사용 시 <code>IOException</code>은 필수입니다.<br><br>
<b>📌 핵심 예외 종류</b><br>
• <code>IOException</code> — BufferedReader.readLine() 사용 시<br>
• <code>NumberFormatException</code> — Integer.parseInt() 잘못된 입력<br>
• <code>ArrayIndexOutOfBoundsException</code> — 배열 범위 초과<br>
• <code>NullPointerException</code> — null 객체 접근<br><br>
<b>⚠️ 두 가지 처리 방법</b><br>
• <code>throws IOException</code> — main에 선언 (코딩테스트 권장)<br>
• <code>try-catch</code> — 직접 예외 처리
</div>`,
    full:`// ── 1. throws IOException (코딩테스트 표준) ──
import java.io.*;
public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String line = br.readLine();
        int n = Integer.parseInt(line.trim());
        System.out.println(n);
    }
}

// ── 2. try-catch 기본 구조 ──
try {
    int n = Integer.parseInt("abc");  // 예외 발생!
} catch (NumberFormatException e) {
    System.out.println("숫자 변환 실패: " + e.getMessage());
} finally {
    System.out.println("항상 실행됨");
}

// ── 3. 다중 catch ──
try {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    int n = Integer.parseInt(br.readLine());
    int[] arr = new int[n];
    arr[n] = 1;  // ArrayIndexOutOfBoundsException
} catch (IOException e) {
    System.out.println("입력 오류");
} catch (NumberFormatException e) {
    System.out.println("숫자 형식 오류");
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("배열 범위 초과");
}`,
    hint:"코딩테스트에서는 보통 main에 throws IOException을 선언하는 것이 가장 간결합니다.",
    concept: {
      title: "예외 처리 (try-catch)",
      desc: `Java에서 예외는 checked(컴파일 타임)와 unchecked(런타임)로 나뉩니다. IOException은 checked이므로 throws나 try-catch로 처리해야 합니다.`,
      syntax: `try {\n    // 예외 가능 코드\n} catch (예외타입 e) {\n    // 예외 처리\n} finally {\n    // 항상 실행\n}`,
      note: `💡 코딩테스트에서는 main에 throws IOException을 붙이는 것이 가장 간단합니다.`,
      dart: `try { } catch (e) { } → 동일 구조`
    },
    drills: [
      { title:"드릴 1 — throws IOException 선언", prompt:"BufferedReader 사용을 위해 main에 추가할 예외 선언을 완성하세요.<br><code>public static void main(String[] args) throws ___</code>", full:`import java.io.*;
public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        System.out.println(br.readLine());
    }
}`, blank:"throws ___", answer:"IOException", options:["IOException","Exception","RuntimeException","Error"], blocks:["import java.io.*;","public static void main(String[] args) throws IOException {","    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));","    System.out.println(br.readLine());","}"], hint:"IOException은 입출력 작업에서 발생하는 체크드 예외입니다." },
      { title:"드릴 2 — try-catch 구조", prompt:"NumberFormatException을 잡는 catch 절을 완성하세요.", full:`public class Main {
    public static void main(String[] args) {
        try {
            int n = Integer.parseInt("abc");
        } catch (NumberFormatException e) {
            System.out.println("변환 실패");
        }
    }
}`, blank:"} catch (___ e) {", answer:"NumberFormatException", options:["NumberFormatException","IOException","Exception","Error"], blocks:["try {","    int n = Integer.parseInt(\"abc\");","} catch (NumberFormatException e) {","    System.out.println(\"변환 실패\");","}"], hint:"Integer.parseInt()가 변환 불가 문자열을 받으면 NumberFormatException을 던집니다." },
      { title:"드릴 3 — finally 블록", prompt:"try-catch-finally에서 항상 실행되는 키워드를 완성하세요.", full:`public class Main {
    public static void main(String[] args) {
        try {
            int n = Integer.parseInt("42");
        } catch (Exception e) {
            System.out.println("오류");
        } finally {
            System.out.println("항상 실행");
        }
    }
}`, blank:"} ___ {", answer:"finally", options:["finally","always","last","done"], blocks:["try {","    int n = Integer.parseInt(\"42\");","} catch (Exception e) {","    System.out.println(\"오류\");","} finally {","    System.out.println(\"항상 실행\");","}"], hint:"finally 블록은 예외 발생 여부와 상관없이 항상 실행됩니다." },
      { title:"드릴 4 — 안전한 parseInt 패턴", prompt:"안전하게 parseInt를 시도하고 실패 시 0을 반환하는 catch를 완성하세요.", full:`public class Main {
    static int safeInt(String s) {
        try {
            return Integer.parseInt(s.trim());
        } catch (NumberFormatException e) {
            return 0;
        }
    }
    public static void main(String[] args) {
        System.out.println(safeInt("42"));   // 42
        System.out.println(safeInt("abc"));  // 0
    }
}`, blank:"} catch (___ e) { return 0; }", answer:"NumberFormatException", options:["NumberFormatException","Exception","IOException","Error"], blocks:["try {","    return Integer.parseInt(s.trim());","} catch (NumberFormatException e) {","    return 0;","}"], hint:"NumberFormatException을 catch해 기본값을 반환하면 안전한 파싱 패턴입니다." }
    ]
  },

  // ═══════════════════════════════════════════════════════
  // C2 — Stack / Queue / Deque 패턴 강화 — cat:4 추가
  // ═══════════════════════════════════════════════════════
  { cat:4, id:4, title:"Stack / Queue / Deque — DFS/BFS 필수 자료구조",
    prompt:`<div style="line-height:1.7">
<b>🗂️ Stack / Queue / Deque — DFS/BFS 핵심 자료구조</b><br><br>
<b>Stack (LIFO)</b>: <code>push → pop → peek</code><br>
<b>Queue (FIFO)</b>: <code>offer → poll → peek</code><br>
<b>Deque (양방향)</b>: 앞/뒤 모두 추가·삭제 가능<br><br>
<b>📌 사용 권장 구현체</b><br>
• Stack 대신 → <code>ArrayDeque</code> (더 빠름)<br>
• BFS → <code>Queue&lt;int[]&gt;</code>, DFS → <code>Deque</code> 또는 재귀
</div>`,
    full:`import java.util.*;

// ── 1. Stack (LIFO) ──
Stack<Integer> stack = new Stack<>();
stack.push(1); stack.push(2); stack.push(3);
System.out.println(stack.pop());   // 3 (LIFO)
System.out.println(stack.peek());  // 2

// ── 2. Queue (FIFO) ──
Queue<Integer> queue = new LinkedList<>();
queue.offer(1); queue.offer(2); queue.offer(3);
System.out.println(queue.poll());  // 1 (FIFO)
System.out.println(queue.peek());  // 2

// ── 3. ArrayDeque (Stack+Queue 대체, 가장 빠름) ──
Deque<Integer> deque = new ArrayDeque<>();
deque.push(1); deque.push(2); deque.push(3);
System.out.println(deque.pop());   // 3 (스택처럼 LIFO)

// ── 4. BFS 패턴 (Queue + int[]) ──
Queue<int[]> bfsQ = new LinkedList<>();
bfsQ.offer(new int[]{0, 0, 0}); // {x, y, distance}
while (!bfsQ.isEmpty()) {
    int[] cur = bfsQ.poll();
    int x = cur[0], y = cur[1], dist = cur[2];
    // bfsQ.offer(new int[]{nx, ny, dist+1});
}`,
    hint:"코딩테스트에서 Stack은 ArrayDeque로 대체하는 것이 권장됩니다. BFS는 Queue, DFS는 Stack(또는 재귀)을 씁니다.",
    concept: {
      title: "Stack / Queue / Deque 완전 정리",
      desc: `Stack은 LIFO, Queue는 FIFO 구조입니다. ArrayDeque가 Stack보다 빠르므로 사용 권장. BFS에서 Queue<int[]>로 좌표+거리를 함께 저장하는 패턴이 핵심입니다.`,
      syntax: `Deque<T> stack = new ArrayDeque<>();\nstack.push(x); stack.pop(); stack.peek();\n\nQueue<T> q = new LinkedList<>();\nq.offer(x); q.poll(); q.peek();`,
      note: `💡 Java의 Stack 클래스는 레거시입니다. 성능이 더 좋은 ArrayDeque를 권장합니다.`,
      dart: `ListQueue → Queue`
    },
    drills: [
      { title:"드릴 1 — ArrayDeque 스택 push", prompt:"ArrayDeque를 스택으로 사용할 때 요소를 넣는 메서드를 완성하세요.", full:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Deque<Integer> deque = new ArrayDeque<>();
        deque.push(1); deque.push(2); deque.push(3);
        System.out.println(deque.pop());  // 3
    }
}`, blank:"deque.___(1);", answer:"push", options:["push","offer","add","insert"], blocks:["Deque<Integer> deque = new ArrayDeque<>();","deque.push(1); deque.push(2); deque.push(3);","System.out.println(deque.pop());"], hint:"ArrayDeque를 스택으로 쓸 때 push()로 넣고 pop()으로 꺼냅니다. LIFO 순서입니다." },
      { title:"드릴 2 — Queue poll()", prompt:"Queue의 맨 앞 원소를 제거하고 반환하는 메서드를 완성하세요.", full:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Queue<Integer> q = new LinkedList<>();
        q.offer(10); q.offer(20); q.offer(30);
        System.out.println(q.poll());  // 10 (FIFO)
    }
}`, blank:"int cur = q.___();", answer:"poll", options:["poll","pop","remove","get"], blocks:["Queue<Integer> q = new LinkedList<>();","q.offer(10); q.offer(20); q.offer(30);","System.out.println(q.poll());  // 10 (FIFO)"], hint:"poll()은 FIFO 순서로 앞에서 꺼냅니다. BFS의 핵심 연산입니다." },
      { title:"드릴 3 — BFS용 int[] Queue 선언", prompt:"좌표와 거리를 함께 저장하는 BFS용 Queue를 선언하는 코드를 완성하세요.", full:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Queue<int[]> q = new LinkedList<>();
        q.offer(new int[]{0, 0, 0});  // {x, y, dist}
        int[] cur = q.poll();
        System.out.println(cur[2]);  // 0
    }
}`, blank:"Queue<int[]> q = new ___<>();", answer:"LinkedList", options:["LinkedList","ArrayList","ArrayDeque","Stack"], blocks:["Queue<int[]> q = new LinkedList<>();","q.offer(new int[]{0, 0, 0});","int[] cur = q.poll();","System.out.println(cur[2]);"], hint:"BFS에서 int[] 배열을 Queue에 넣어 좌표와 거리를 함께 관리합니다." },
      { title:"드릴 4 — isEmpty 종료 조건", prompt:"큐가 빌 때까지 BFS를 수행하는 루프 조건을 완성하세요.", full:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Queue<Integer> q = new LinkedList<>();
        q.offer(1); q.offer(2); q.offer(3);
        while (!q.isEmpty()) {
            System.out.println(q.poll());
        }
    }
}`, blank:"while (!q.___())", answer:"isEmpty", options:["isEmpty","empty","isNull","size==0"], blocks:["while (!q.isEmpty()) {","    System.out.println(q.poll());","}"], hint:"isEmpty()가 true이면 큐가 비어있습니다. BFS 루프 종료 조건입니다." }
    ]
  },

  // ═══════════════════════════════════════════════════════
  // C3 — 그래프 표현 (인접 리스트) — cat:7 추가
  // ═══════════════════════════════════════════════════════
  { cat:7, id:6, title:"그래프 표현 — 인접 리스트 (BFS/DFS 필수)",
    prompt:`<div style="line-height:1.7">
<b>🔢 그래프 인접 리스트 — BFS/DFS 문제의 기반</b><br><br>
BFS/DFS 문제에서 그래프는 <b>ArrayList 배열</b>로 표현합니다.<br><br>
<b>📌 핵심 패턴</b><br>
• 선언: <code>ArrayList&lt;Integer&gt;[] graph = new ArrayList[N+1];</code><br>
• 초기화: <code>for(int i=1;i&lt;=N;i++) graph[i] = new ArrayList&lt;&gt;();</code><br>
• 간선 추가(양방향): <code>graph[u].add(v); graph[v].add(u);</code><br>
• 이웃 순회: <code>for(int next : graph[cur]) { ... }</code>
</div>`,
    full:`import java.util.*;

public class Main {
    static ArrayList<Integer>[] graph;
    static boolean[] visited;

    static void buildGraph(int n, int[][] edges) {
        graph = new ArrayList[n + 1];  // 1-indexed
        for (int i = 1; i <= n; i++) {
            graph[i] = new ArrayList<>();
        }
        for (int[] edge : edges) {
            int u = edge[0], v = edge[1];
            graph[u].add(v);  // 양방향 (무방향 그래프)
            graph[v].add(u);
        }
    }

    static void dfs(int node) {
        visited[node] = true;
        System.out.print(node + " ");
        for (int next : graph[node]) {
            if (!visited[next]) dfs(next);
        }
    }

    static void bfs(int start, int n) {
        boolean[] vis = new boolean[n + 1];
        Queue<Integer> q = new LinkedList<>();
        q.offer(start); vis[start] = true;
        while (!q.isEmpty()) {
            int cur = q.poll();
            System.out.print(cur + " ");
            for (int next : graph[cur]) {
                if (!vis[next]) { vis[next] = true; q.offer(next); }
            }
        }
    }

    public static void main(String[] args) {
        int n = 5;
        int[][] edges = {{1,2},{1,3},{2,4},{3,5}};
        buildGraph(n, edges);
        visited = new boolean[n + 1];
        System.out.print("DFS: "); dfs(1);    // 1 2 4 3 5
        System.out.println();
        System.out.print("BFS: "); bfs(1, n); // 1 2 3 4 5
    }
}`,
    hint:"그래프는 new ArrayList[N+1]로 배열을 만들고, 각 인덱스에 ArrayList를 초기화합니다. for(int next : graph[cur])로 이웃 노드를 순회합니다.",
    concept: {
      title: "인접 리스트로 그래프 표현",
      desc: `코딩테스트에서 그래프 문제는 대부분 ArrayList 배열(인접 리스트)로 표현합니다. graph[i]는 노드 i와 연결된 이웃 노드들의 리스트입니다.`,
      syntax: `ArrayList<Integer>[] g = new ArrayList[n+1];\nfor(int i=1;i<=n;i++) g[i] = new ArrayList<>();\ng[u].add(v); g[v].add(u);\nfor(int next : g[cur]) { }`,
      note: `💡 제네릭 배열 생성 시 경고가 나지만 동작에는 문제없습니다.`,
      dart: `Map<int, List<int>> graph → ArrayList<Integer>[] 대응`
    },
    drills: [
      { title:"드릴 1 — 인접 리스트 초기화", prompt:"각 노드에 ArrayList를 초기화하는 코드를 완성하세요.", full:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        int n = 5;
        ArrayList<Integer>[] graph = new ArrayList[n + 1];
        for (int i = 1; i <= n; i++) {
            graph[i] = new ArrayList<>();
        }
        System.out.println(graph[1].size());  // 0
    }
}`, blank:"graph[i] = new ___<>();", answer:"ArrayList", options:["ArrayList","LinkedList","Stack","Queue"], blocks:["ArrayList<Integer>[] graph = new ArrayList[n + 1];","for (int i = 1; i <= n; i++) {","    graph[i] = new ArrayList<>();","}"], hint:"각 노드에 빈 ArrayList를 할당해 인접 노드 목록을 저장합니다." },
      { title:"드릴 2 — 양방향 간선 추가", prompt:"무방향 그래프에서 u-v 간선을 양방향으로 추가하는 코드를 완성하세요.", full:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        ArrayList<Integer>[] graph = new ArrayList[4];
        for (int i = 1; i <= 3; i++) graph[i] = new ArrayList<>();
        int u = 1, v = 2;
        graph[u].add(v);
        graph[v].add(u);
        System.out.println(graph[1] + " " + graph[2]);  // [2] [1]
    }
}`, blank:"graph[v].add(___);", answer:"u", options:["u","v","0","1"], blocks:["graph[u].add(v);","graph[v].add(u);"], hint:"무방향 그래프에서 u→v와 v→u 모두 추가해야 양방향 연결이 됩니다." },
      { title:"드릴 3 — 이웃 노드 for-each 순회", prompt:"인접 리스트에서 이웃 노드를 순회하는 for-each를 완성하세요.", full:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        ArrayList<Integer>[] graph = new ArrayList[4];
        for (int i = 1; i <= 3; i++) graph[i] = new ArrayList<>();
        graph[1].add(2); graph[1].add(3);
        for (int next : graph[1]) {
            System.out.println(next);  // 2, 3
        }
    }
}`, blank:"for (int next : graph[___])", answer:"1", options:["1","0","cur","node"], blocks:["for (int next : graph[1]) {","    System.out.println(next);","}"], hint:"graph[node]는 node의 이웃 노드 리스트입니다. for-each로 이웃을 순회합니다." },
      { title:"드릴 4 — BFS 최단 거리 계산", prompt:"BFS에서 이웃 노드의 거리를 계산하는 코드를 완성하세요.", full:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        int n = 4;
        ArrayList<Integer>[] graph = new ArrayList[n+1];
        for(int i=1;i<=n;i++) graph[i] = new ArrayList<>();
        graph[1].add(2); graph[2].add(1);
        graph[1].add(3); graph[3].add(1);
        graph[2].add(4); graph[4].add(2);
        int[] dist = new int[n+1];
        Arrays.fill(dist, -1);
        Queue<Integer> q = new LinkedList<>();
        q.offer(1); dist[1] = 0;
        while (!q.isEmpty()) {
            int cur = q.poll();
            for (int next : graph[cur]) {
                if (dist[next] == -1) {
                    dist[next] = dist[cur] + 1;
                    q.offer(next);
                }
            }
        }
        System.out.println(Arrays.toString(dist));
    }
}`, blank:"dist[next] = dist[cur] + ___;", answer:"1", options:["1","0","dist[cur]","2"], blocks:["if (dist[next] == -1) {","    dist[next] = dist[cur] + 1;","    q.offer(next);","}"], hint:"BFS에서 이웃 노드의 거리 = 현재 노드의 거리 + 1입니다." }
    ]
  },

  // ═══════════════════════════════════════════════════════
  // C4 — Comparator / 람다 정렬 심화 — cat:7 추가
  // ═══════════════════════════════════════════════════════
  { cat:7, id:7, title:"Comparator 심화 — 복합 기준 정렬",
    prompt:`<div style="line-height:1.7">
<b>🔢 Comparator 심화 — 카카오/백준 빈출 정렬</b><br><br>
<b>📌 람다 Comparator 기본 규칙</b><br>
• <code>(a, b) -> a - b</code> — int 오름차순<br>
• <code>(a, b) -> b - a</code> — int 내림차순<br>
• <code>(a, b) -> a.compareTo(b)</code> — String 오름차순<br><br>
<b>복합 기준 정렬 패턴</b><br>
<code>if (기준1이 다르면) return 기준1 비교;</code><br>
<code>return 기준2 비교;</code><br><br>
<b>⚠️ int 오버플로우 주의</b><br>
큰 수 비교 시 <code>a - b</code> 대신 <code>Integer.compare(a, b)</code> 사용!
</div>`,
    full:`import java.util.*;

public class Main {
    public static void main(String[] args) {
        // ── 1. 단순 기준 정렬 ──
        String[] words = {"banana", "apple", "cherry", "fig"};
        Arrays.sort(words, (a, b) -> a.length() - b.length());
        // [fig, apple, banana, cherry]

        Arrays.sort(words, (a, b) -> a.compareTo(b));
        // [apple, banana, cherry, fig]

        // ── 2. 복합 기준 (카카오 빈출) ──
        // 길이 오름차순, 길이 같으면 사전순
        Arrays.sort(words, (a, b) -> {
            if (a.length() != b.length()) return a.length() - b.length();
            return a.compareTo(b);
        });

        // ── 3. 2D 배열 복합 정렬 ──
        int[][] intervals = {{1,4},{2,3},{1,2},{3,5}};
        // 첫 열 오름차순, 같으면 둘째 열 내림차순
        Arrays.sort(intervals, (a, b) -> {
            if (a[0] != b[0]) return a[0] - b[0];
            return b[1] - a[1];
        });

        // ── 4. 오버플로우 안전 비교 ──
        Integer[] arr = {Integer.MAX_VALUE, -1, 0};
        Arrays.sort(arr, Integer::compare);  // 안전
        // (a, b) -> a - b 는 오버플로우 위험!
    }
}`,
    hint:"Comparator에서 양수 반환 시 a가 b 뒤로, 음수 반환 시 a가 b 앞으로 이동합니다.",
    concept: {
      title: "Comparator 람다 완전 정리",
      desc: `람다 Comparator: (a, b) -> 반환값. 반환이 음수면 a가 앞, 양수면 b가 앞. 복합 기준은 if문으로 단계적으로 처리합니다.`,
      syntax: `Arrays.sort(arr, (a, b) -> {\n    if (기준1이 다르면) return 기준1비교;\n    return 기준2비교;\n});`,
      note: `💡 (a,b) -> a-b는 Integer.MIN_VALUE가 있을 때 오버플로우! Integer.compare(a,b)가 안전합니다.`,
      dart: `list.sort((a, b) => ...) → 동일 구조`
    },
    drills: [
      { title:"드릴 1 — 문자열 길이 오름차순 정렬", prompt:"문자열 배열을 길이 기준 오름차순으로 정렬하는 람다를 완성하세요.", full:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        String[] words = {"banana", "fig", "apple"};
        Arrays.sort(words, (a, b) -> a.length() - b.length());
        System.out.println(Arrays.toString(words));  // [fig, apple, banana]
    }
}`, blank:"Arrays.sort(words, (a, b) -> a.___() - b.___());", answer:"length", options:["length","size","compareTo","charAt"], blocks:["Arrays.sort(words, (a, b) -> a.length() - b.length());","System.out.println(Arrays.toString(words));"], hint:"a.length() - b.length()는 길이 오름차순 Comparator입니다." },
      { title:"드릴 2 — 복합 기준 (길이 → 사전순)", prompt:"길이 오름차순, 같으면 사전순으로 정렬하는 람다를 완성하세요.", full:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        String[] words = {"dog","cat","bee","ant"};
        Arrays.sort(words, (a, b) -> {
            if (a.length() != b.length()) return a.length() - b.length();
            return a.compareTo(b);
        });
        System.out.println(Arrays.toString(words));
    }
}`, blank:"return a.___(b);", answer:"compareTo", options:["compareTo","equals","compare","indexOf"], blocks:["if (a.length() != b.length()) return a.length() - b.length();","return a.compareTo(b);"], hint:"String.compareTo()는 사전순 비교 결과를 정수로 반환합니다." },
      { title:"드릴 3 — 2D 배열 복합 기준 정렬", prompt:"첫 열 오름차순, 같으면 둘째 열 내림차순으로 정렬하는 코드를 완성하세요.", full:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        int[][] arr = {{1,4},{2,3},{1,2},{2,5}};
        Arrays.sort(arr, (a, b) -> {
            if (a[0] != b[0]) return a[0] - b[0];
            return b[1] - a[1];
        });
        for (int[] r : arr) System.out.println(Arrays.toString(r));
    }
}`, blank:"return b[1] - a[___];", answer:"1", options:["1","0","-1","2"], blocks:["if (a[0] != b[0]) return a[0] - b[0];","return b[1] - a[1];"], hint:"b[1] - a[1]은 두 번째 열 내림차순입니다." },
      { title:"드릴 4 — Integer.compare 오버플로우 방지", prompt:"오버플로우 없이 안전하게 Integer를 비교하는 방법을 완성하세요.", full:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Integer[] arr = {Integer.MAX_VALUE, Integer.MIN_VALUE, 0};
        Arrays.sort(arr, (a, b) -> Integer.compare(a, b));
        System.out.println(Arrays.toString(arr));
    }
}`, blank:"Arrays.sort(arr, (a, b) -> Integer.___(a, b));", answer:"compare", options:["compare","compareTo","equals","subtract"], blocks:["Arrays.sort(arr, (a, b) -> Integer.compare(a, b));","System.out.println(Arrays.toString(arr));"], hint:"Integer.compare(a,b)는 오버플로우 없이 안전한 비교를 제공합니다." }
    ]
  },

  // ═══════════════════════════════════════════════════════
  // C5 — 비트 연산 기초 — cat:0 추가
  // ═══════════════════════════════════════════════════════
  { cat:0, id:8, title:"비트 연산 기초 — 비트마스킹",
    prompt:`<div style="line-height:1.7">
<b>🔢 비트 연산 — 코딩테스트 중급 필수</b><br><br>
<b>📌 비트 연산자</b><br>
• <code>&amp;</code> AND &nbsp;• <code>|</code> OR &nbsp;• <code>^</code> XOR &nbsp;• <code>~</code> NOT<br>
• <code>&lt;&lt;</code> 왼쪽 시프트 (×2) &nbsp;• <code>&gt;&gt;</code> 오른쪽 시프트 (÷2)<br><br>
<b>📌 자주 쓰는 패턴</b><br>
• 홀짝: <code>n &amp; 1 == 1</code> (홀수) &nbsp;• 2의 거듭제곱: <code>1 &lt;&lt; k</code><br>
• i번째 비트 확인: <code>(mask &gt;&gt; i) &amp; 1</code><br>
• 부분집합: <code>for(int m=0; m&lt;(1&lt;&lt;n); m++)</code>
</div>`,
    full:`// ── 1. 기본 비트 연산 ──
int a = 0b1010;  // 10
int b = 0b1100;  // 12
System.out.println(a & b);   // 0b1000 = 8  (AND)
System.out.println(a | b);   // 0b1110 = 14 (OR)
System.out.println(a ^ b);   // 0b0110 = 6  (XOR)
System.out.println(a << 1);  // 20 (왼쪽 시프트: ×2)
System.out.println(a >> 1);  // 5  (오른쪽 시프트: ÷2)

// ── 2. 자주 쓰는 패턴 ──
int n = 7;
System.out.println(n & 1);      // 1 (홀수), 0이면 짝수
System.out.println(1 << 3);     // 8 = 2^3
System.out.println(n & (n-1));  // 0이면 2의 거듭제곱

// ── 3. 비트마스크 부분집합 탐색 ──
int[] arr = {1, 2, 3};
int len = arr.length;
for (int mask = 0; mask < (1 << len); mask++) {
    System.out.print("{ ");
    for (int i = 0; i < len; i++) {
        if ((mask >> i & 1) == 1) {
            System.out.print(arr[i] + " ");
        }
    }
    System.out.println("}");
}
// {}, {1}, {2}, {1,2}, {3}, {1,3}, {2,3}, {1,2,3}

// ── 4. 비트 조작 ──
int mask2 = 0;
mask2 |= (1 << 2);   // 2번째 비트 켜기
mask2 &= ~(1 << 2);  // 2번째 비트 끄기
mask2 ^= (1 << 1);   // 1번째 비트 토글`,
    hint:"비트 연산은 매우 빠릅니다. n&1로 홀짝, 1<<k로 2의 거듭제곱, 비트마스크로 부분집합 탐색을 할 수 있습니다.",
    concept: {
      title: "비트 연산과 비트마스킹",
      desc: `비트 연산은 2진수 단위로 연산합니다. 홀짝 판별, 부분집합 탐색, 집합 표현에 자주 씁니다. n개 원소의 모든 부분집합을 O(2^n)으로 탐색하는 핵심 기법입니다.`,
      syntax: `n & 1          // 홀수 여부\n1 << k         // 2^k\nmask >> i & 1  // i번째 비트\nmask |= (1<<i) // 비트 켜기`,
      note: `💡 1 << n은 n이 31 이상이면 오버플로우. 큰 n에는 1L << n (long)을 사용하세요!`,
      dart: `비트 연산자 &, |, ^, ~, <<, >> 동일`
    },
    drills: [
      { title:"드릴 1 — 홀짝 판별 (비트 AND)", prompt:"비트 연산으로 홀수인지 판별하는 코드를 완성하세요.", full:`public class Main {
    public static void main(String[] args) {
        int n = 7;
        if ((n & 1) == 1) {
            System.out.println("홀수");
        } else {
            System.out.println("짝수");
        }
    }
}`, blank:"if ((n ___ 1) == 1)", answer:"&", options:["&","|","^",">>"], blocks:["if ((n & 1) == 1) {","    System.out.println(\"홀수\");","} else {","    System.out.println(\"짝수\");","}"], hint:"& 1은 최하위 비트를 확인합니다. 홀수는 마지막 비트가 1입니다." },
      { title:"드릴 2 — 왼쪽 시프트로 2의 거듭제곱", prompt:"1을 3번 왼쪽으로 시프트해 8(=2^3)을 구하는 코드를 완성하세요.", full:`public class Main {
    public static void main(String[] args) {
        int pow8 = 1 << 3;  // 2^3 = 8
        System.out.println(pow8);  // 8
    }
}`, blank:"int pow8 = 1 ___ 3;", answer:"<<", options:["<<",">>","&","|"], blocks:["int pow8 = 1 << 3;","System.out.println(pow8);"], hint:"1 << k는 2^k입니다. 왼쪽으로 k번 시프트 = k번 곱하기 2." },
      { title:"드릴 3 — 비트마스크 특정 비트 확인", prompt:"mask의 i번째 비트가 1인지 확인하는 연산자를 완성하세요.", full:`public class Main {
    public static void main(String[] args) {
        int mask = 0b1010;  // 10
        for (int i = 0; i < 4; i++) {
            if ((mask >> i & 1) == 1) {
                System.out.println(i + "번째 비트 ON");
            }
        }
    }
}`, blank:"if ((mask >> i ___ 1) == 1)", answer:"&", options:["&","|","^",">>"], blocks:["for (int i = 0; i < 4; i++) {","    if ((mask >> i & 1) == 1) {","        System.out.println(i + \"번째 비트 ON\");","    }","}"], hint:"mask >> i 로 i번째 비트를 최하위로 이동, & 1로 해당 비트값을 추출합니다." },
      { title:"드릴 4 — 부분집합 전체 탐색", prompt:"n개 원소의 모든 부분집합을 탐색하는 비트마스크 루프를 완성하세요.", full:`public class Main {
    public static void main(String[] args) {
        int n = 3;
        for (int mask = 0; mask < (1 << n); mask++) {
            for (int i = 0; i < n; i++) {
                if ((mask >> i & 1) == 1)
                    System.out.print(i + " ");
            }
            System.out.println();
        }
    }
}`, blank:"for (int mask = 0; mask < (1 ___ n); mask++)", answer:"<<", options:["<<",">>","*","^"], blocks:["for (int mask = 0; mask < (1 << n); mask++) {","    for (int i = 0; i < n; i++) {","        if ((mask >> i & 1) == 1)","            System.out.print(i + \" \");","    }","    System.out.println();","}"], hint:"1 << n = 2^n = 가능한 부분집합 수. mask 0~2^n-1이 모든 부분집합을 표현합니다." }
    ]
  },

  // ═══════════════════════════════════════════════════════
  // C6 — Math 유틸 / 오버플로우 처리 보강 — cat:0 추가
  // ═══════════════════════════════════════════════════════
  { cat:0, id:9, title:"Math 유틸 & long 오버플로우 처리",
    prompt:`<div style="line-height:1.7">
<b>📐 Math 유틸 &amp; 오버플로우 — 코딩테스트 함정 방지</b><br><br>
<b>📌 자주 쓰는 Math 메서드</b><br>
• <code>Math.max(a,b)</code> · <code>Math.min(a,b)</code> · <code>Math.abs(x)</code><br>
• <code>Math.sqrt(x)</code> → double &nbsp;• <code>Math.pow(a,b)</code> → double<br>
• <code>Math.floor/ceil/round</code> — 내림/올림/반올림<br><br>
<b>⚠️ int 오버플로우 — 코딩테스트 함정!</b><br>
• int 최대값: 약 <b>21억</b><br>
• <code>int × int</code>가 21억 초과 → <code>(long)a * b</code> 필수!<br>
• "결과가 매우 클 수 있다" = long 사용 신호
</div>`,
    full:`// ── 1. Math 클래스 주요 메서드 (import 불필요) ──
Math.max(3, 7)       // 7
Math.min(3, 7)       // 3
Math.abs(-5)         // 5
Math.sqrt(16.0)      // 4.0 (double 반환)
Math.pow(2, 10)      // 1024.0 (double 반환)
Math.floor(3.7)      // 3.0 (내림)
Math.ceil(3.2)       // 4.0 (올림)
Math.round(3.5)      // 4 (반올림, long 반환)
Math.PI              // 3.14159265358979...

// ── 2. int → long 오버플로우 방지 ──
int a = 1_000_000, b = 1_000_000;
long wrong   = a * b;          // ❌ -727379968 (오버플로우!)
long correct = (long)a * b;    // ✅ 1_000_000_000_000 (10^12)

// ── 3. int/long 최댓값/최솟값 상수 ──
int  INT_MAX  = Integer.MAX_VALUE;  // 2,147,483,647
int  INT_MIN  = Integer.MIN_VALUE;  // -2,147,483,648
long LONG_MAX = Long.MAX_VALUE;     // 약 9.2 × 10^18

// ── 4. 자주 쓰는 패턴 ──
// 소수 판별 (Math.sqrt 활용)
static boolean isPrime(int n) {
    if (n < 2) return false;
    for (int i = 2; i <= (int)Math.sqrt(n); i++) {
        if (n % i == 0) return false;
    }
    return true;
}

// GCD (유클리드 호제법)
static int gcd(int a, int b) {
    return b == 0 ? a : gcd(b, a % b);
}
// LCM (오버플로우 방지: 나누기 먼저)
static long lcm(long a, long b) {
    return a / gcd((int)a, (int)b) * b;
}`,
    hint:"Math.pow(2,10)은 double을 반환합니다. 정수로 쓰려면 (long)으로 캐스팅하세요. 큰 수 곱셈은 항상 (long) 캐스팅!",
    concept: {
      title: "Math 유틸과 int 오버플로우 처리",
      desc: `int는 약 21억까지만 저장됩니다. 10^6 × 10^6 = 10^12는 int 범위 초과입니다. 큰 수 연산 시 (long)a * b 형태로 캐스팅합니다. Math 메서드는 import 없이 사용 가능합니다.`,
      syntax: `long result = (long)a * b;  // 오버플로우 안전\nlong lcm = a / gcd(a,b) * b; // 나누기 먼저`,
      note: `💡 "결과가 매우 클 수 있습니다" = long 사용 신호! 10^9 이상 곱셈은 항상 (long) 캐스팅 먼저.`,
      dart: `pow(a,b).toInt() → (long)Math.pow(a,b)`
    },
    drills: [
      { title:"드릴 1 — Math.max로 최댓값", prompt:"두 수 중 큰 값을 반환하는 Math 메서드를 완성하세요.", full:`public class Main {
    public static void main(String[] args) {
        int a = 5, b = 9;
        int m = Math.max(a, b);
        System.out.println(m);  // 9
    }
}`, blank:"int m = Math.___(a, b);", answer:"max", options:["max","min","abs","bigger"], blocks:["int a = 5, b = 9;","int m = Math.max(a, b);","System.out.println(m);"], hint:"Math.max(a,b)는 두 값 중 큰 쪽을 반환합니다." },
      { title:"드릴 2 — long 오버플로우 방지", prompt:"두 int를 곱할 때 오버플로우를 방지하는 캐스팅을 완성하세요.", full:`public class Main {
    public static void main(String[] args) {
        int a = 1_000_000, b = 1_000_000;
        long result = (long)a * b;  // 10^12
        System.out.println(result);  // 1000000000000
    }
}`, blank:"long result = (___)a * b;", answer:"long", options:["long","int","double","Long"], blocks:["int a = 1_000_000, b = 1_000_000;","long result = (long)a * b;","System.out.println(result);"], hint:"(long)a * b: a를 먼저 long으로 캐스팅하면 곱셈이 long 범위에서 수행됩니다." },
      { title:"드릴 3 — Math.sqrt 소수 판별", prompt:"소수 판별에서 루프 상한을 Math.sqrt로 설정하는 코드를 완성하세요.", full:`public class Main {
    static boolean isPrime(int n) {
        if (n < 2) return false;
        for (int i = 2; i <= (int)Math.sqrt(n); i++) {
            if (n % i == 0) return false;
        }
        return true;
    }
    public static void main(String[] args) {
        System.out.println(isPrime(17));  // true
    }
}`, blank:"for (int i = 2; i <= (int)Math.___(n); i++)", answer:"sqrt", options:["sqrt","pow","abs","floor"], blocks:["if (n < 2) return false;","for (int i = 2; i <= (int)Math.sqrt(n); i++) {","    if (n % i == 0) return false;","}","return true;"], hint:"소수 판별: 2부터 √n까지만 확인합니다. Math.sqrt()는 double을 반환해 (int)로 캐스팅합니다." },
      { title:"드릴 4 — Integer.MAX_VALUE 초기값", prompt:"DP 배열을 INF(무한대)로 초기화하는 코드를 완성하세요.", full:`import java.util.Arrays;
public class Main {
    public static void main(String[] args) {
        int n = 5;
        int[] dist = new int[n + 1];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[0] = 0;
        System.out.println(dist[0]);  // 0
        System.out.println(dist[1]);  // 2147483647
    }
}`, blank:"Arrays.fill(dist, Integer.___);", answer:"MAX_VALUE", options:["MAX_VALUE","MIN_VALUE","MAX_INT","INFINITY"], blocks:["int[] dist = new int[n + 1];","Arrays.fill(dist, Integer.MAX_VALUE);","dist[0] = 0;"], hint:"Integer.MAX_VALUE(약 21억)를 초기 INF 값으로 씁니다. 갱신 시 오버플로우 주의!" }
    ]
  }

];