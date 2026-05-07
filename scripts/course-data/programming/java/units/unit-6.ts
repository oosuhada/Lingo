import type { UnitSeed } from "../../../types";

export const unit6: UnitSeed = {
  "title": "Unit 6. 클래스 & 구조",
  "description": "클래스 구조, main 메서드, 접근제어자, static, 생성자, 메서드",
  "lessons": [
    {
      "title": "클래스 구조와 static 메서드",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — static 메서드 선언",
          "prompt": "두 정수의 합을 반환하는 static 메서드를 완성하세요.\n___ int add(int a, int b) { return a + b; }",
          "code": "___ int add(int a, int b)",
          "hint": "main에서 호출하는 보조 메서드는 static으로 선언해야 합니다.",
          "options": [
            {
              "text": "static",
              "correct": true
            },
            {
              "text": "public",
              "correct": false
            },
            {
              "text": "final",
              "correct": false
            },
            {
              "text": "void",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — return 타입",
          "prompt": "boolean을 반환하는 메서드의 반환 타입을 완성하세요.\nstatic ___ isEven(int n) { return n % 2 == 0; }",
          "code": "static ___ isEven(int n)",
          "hint": "Java의 참/거짓 타입은 boolean (소문자). Python의 bool과 이름이 약간 다릅니다.",
          "options": [
            {
              "text": "boolean",
              "correct": true
            },
            {
              "text": "bool",
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
          "question": "드릴 3 — 생성자와 객체 생성",
          "prompt": "Point 클래스의 객체를 생성하는 코드를 완성하세요.",
          "code": "Point p = ___ Point(3, 4);",
          "hint": "Java에서 객체를 생성할 때는 new 키워드를 사용합니다.",
          "options": [
            {
              "text": "new",
              "correct": true
            },
            {
              "text": "create",
              "correct": false
            },
            {
              "text": "make",
              "correct": false
            },
            {
              "text": "build",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — this 키워드",
          "prompt": "생성자에서 필드와 매개변수를 구분하는 코드를 완성하세요.",
          "code": "___.x = x;",
          "hint": "this는 현재 객체를 가리킵니다. this.x는 필드, x는 매개변수입니다.",
          "options": [
            {
              "text": "this",
              "correct": true
            },
            {
              "text": "self",
              "correct": false
            },
            {
              "text": "me",
              "correct": false
            },
            {
              "text": "current",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "접근제어자와 캡슐화",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — private 필드 선언",
          "prompt": "외부에서 직접 접근 불가한 필드를 선언하는 키워드를 완성하세요.",
          "code": "___ int size;",
          "hint": "private은 같은 클래스 내에서만 접근 가능합니다.",
          "options": [
            {
              "text": "private",
              "correct": true
            },
            {
              "text": "public",
              "correct": false
            },
            {
              "text": "protected",
              "correct": false
            },
            {
              "text": "static",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — getter 메서드",
          "prompt": "private 필드를 반환하는 getter를 완성하세요.",
          "code": "public String ___() { return name; }",
          "hint": "getter의 이름은 관례적으로 get + 필드명(첫 글자 대문자) 형태입니다.",
          "options": [
            {
              "text": "getName",
              "correct": true
            },
            {
              "text": "name",
              "correct": false
            },
            {
              "text": "get",
              "correct": false
            },
            {
              "text": "readName",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — toString 오버라이드",
          "prompt": "객체를 출력할 때 호출되는 메서드를 완성하세요.",
          "code": "public String ___() {",
          "hint": "toString()은 객체를 문자열로 표현합니다. System.out.println(객체) 시 자동으로 호출됩니다.",
          "options": [
            {
              "text": "toString",
              "correct": true
            },
            {
              "text": "print",
              "correct": false
            },
            {
              "text": "display",
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
          "question": "드릴 4 — 정적 팩토리 패턴",
          "prompt": "new 키워드 없이 객체를 생성하는 static 메서드 패턴을 완성하세요.",
          "code": "Counter c = Counter.___();",
          "hint": "정적 팩토리 메서드: static으로 선언된 메서드가 객체를 생성해 반환합니다.",
          "options": [
            {
              "text": "create",
              "correct": true
            },
            {
              "text": "new",
              "correct": false
            },
            {
              "text": "make",
              "correct": false
            },
            {
              "text": "build",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "상속과 다형성",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — extends 상속",
          "prompt": "Animal을 상속하는 Dog 클래스 선언을 완성하세요.",
          "code": "static class Dog ___ Animal {",
          "hint": "extends 키워드로 부모 클래스를 상속합니다.",
          "options": [
            {
              "text": "extends",
              "correct": true
            },
            {
              "text": "implements",
              "correct": false
            },
            {
              "text": "inherits",
              "correct": false
            },
            {
              "text": "is",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — super() 부모 생성자 호출",
          "prompt": "부모 생성자를 호출하는 키워드를 완성하세요.",
          "code": "___(color);  // 부모 생성자",
          "hint": "super()는 부모 클래스의 생성자를 호출합니다. 자식 생성자의 첫 줄이어야 합니다.",
          "options": [
            {
              "text": "super",
              "correct": true
            },
            {
              "text": "this",
              "correct": false
            },
            {
              "text": "parent",
              "correct": false
            },
            {
              "text": "base",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — @Override 재정의",
          "prompt": "부모 메서드를 재정의하는 어노테이션과 코드를 완성하세요.",
          "code": "@___ String type() { return \"자동차\"; }",
          "hint": "@Override는 부모 메서드를 재정의함을 명시합니다. 오타를 잡아주는 역할도 합니다.",
          "options": [
            {
              "text": "Override",
              "correct": true
            },
            {
              "text": "Overload",
              "correct": false
            },
            {
              "text": "Abstract",
              "correct": false
            },
            {
              "text": "Static",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — instanceof 타입 확인",
          "prompt": "객체의 실제 타입을 확인하는 instanceof를 완성하세요.",
          "code": "if (a ___ Dog)",
          "hint": "instanceof는 객체가 특정 클래스의 인스턴스인지 확인합니다.",
          "options": [
            {
              "text": "instanceof",
              "correct": true
            },
            {
              "text": "is",
              "correct": false
            },
            {
              "text": "typeof",
              "correct": false
            },
            {
              "text": "isInstance",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "인터페이스와 람다",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — Comparator 오름차순 람다",
          "prompt": "리스트를 오름차순으로 정렬하는 람다를 완성하세요.",
          "code": "list.sort((a, b) -> a ___ b);",
          "hint": "(a, b) -> a - b: a < b이면 음수 반환 → a가 앞으로 → 오름차순.",
          "options": [
            {
              "text": "-",
              "correct": true
            },
            {
              "text": "+",
              "correct": false
            },
            {
              "text": "*",
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
          "question": "드릴 2 — 절댓값 기준 정렬",
          "prompt": "절댓값 기준 오름차순으로 정렬하는 람다를 완성하세요.",
          "code": "list.sort((a, b) -> Math.abs(a) - Math.abs(___));",
          "hint": "절댓값 기준: Math.abs(a) - Math.abs(b)이면 절댓값 오름차순입니다.",
          "options": [
            {
              "text": "b",
              "correct": true
            },
            {
              "text": "a",
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
          "question": "드릴 3 — 2D 배열 다중 기준 정렬",
          "prompt": "2차원 배열을 첫 번째 열 오름차순, 같으면 두 번째 열 내림차순으로 정렬하는 람다를 완성하세요.",
          "code": "if (a[0] != b[0]) return a[0] - b[0];\nreturn ___ - a[1];",
          "hint": "다중 기준: 첫 번째 기준이 같을 때 두 번째 기준을 적용합니다. b[1] - a[1]은 두 번째 열 내림차순.",
          "options": [
            {
              "text": "b[1]",
              "correct": true
            },
            {
              "text": "a[1]",
              "correct": false
            },
            {
              "text": "a[0]",
              "correct": false
            },
            {
              "text": "b[0]",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — 문자열 다중 기준 정렬",
          "prompt": "문자열 배열을 길이 오름차순, 같으면 사전순으로 정렬하는 코드를 완성하세요.",
          "code": "return a.___(b);",
          "hint": "String.compareTo()는 사전순 비교 결과를 정수로 반환합니다. 오름차순 정렬에 바로 사용할 수 있습니다.",
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
        }
      ]
    }
  ]
};
