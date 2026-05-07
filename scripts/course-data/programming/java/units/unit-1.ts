import type { UnitSeed } from "../../../types";

export const unit1: UnitSeed = {
  "title": "Unit 1. 입출력 & 자료형",
  "description": "Scanner, BufferedReader, int/double/String 변환, printf/format, 메모리 구조",
  "lessons": [
    {
      "title": "종합 기본개념 — 입출력 & 자료형",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — main 메서드 키워드",
          "prompt": "Java 프로그램의 시작점인 main 메서드의 올바른 시그니처에서 빈칸을 채우세요.\npublic ___ void main(String[] args)",
          "code": "public ___ void main(String[] args)",
          "hint": "main 메서드는 객체를 생성하지 않고 호출되므로 static 키워드가 필요합니다.",
          "options": [
            {
              "text": "static",
              "correct": true
            },
            {
              "text": "final",
              "correct": false
            },
            {
              "text": "abstract",
              "correct": false
            },
            {
              "text": "private",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — Scanner nextInt() 메서드",
          "prompt": "Scanner로 정수 하나를 입력받을 때 사용하는 메서드를 완성하세요.\nint n = sc.___Int();",
          "code": "int n = sc.___Int();",
          "hint": "Scanner에서 정수를 읽는 메서드는 next + 타입 형태입니다. nextInt(), nextDouble(), next() 등이 있습니다.",
          "options": [
            {
              "text": "next",
              "correct": true
            },
            {
              "text": "read",
              "correct": false
            },
            {
              "text": "get",
              "correct": false
            },
            {
              "text": "scan",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — System.out.println 출력 구조",
          "prompt": "Java에서 콘솔에 줄바꿈과 함께 출력하는 메서드의 전체 이름을 완성하세요.\nSystem.out.___(\"Hello\");",
          "code": "System.out.___(\"Hello\");",
          "hint": "println = print + line(줄). 출력 후 자동으로 줄바꿈을 합니다. print는 줄바꿈 없이 출력합니다.",
          "options": [
            {
              "text": "println",
              "correct": true
            },
            {
              "text": "print",
              "correct": false
            },
            {
              "text": "printf",
              "correct": false
            },
            {
              "text": "write",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — Integer.parseInt() 형변환",
          "prompt": "문자열 \"42\"를 정수로 변환하는 메서드를 완성하세요.\nint n = Integer.___(\"42\");",
          "code": "int n = Integer.___(\"42\");",
          "hint": "Integer.parseInt()는 Python의 int()에 해당하는 String→int 변환 메서드입니다. 모든 입력 파싱의 핵심!",
          "options": [
            {
              "text": "parseInt",
              "correct": true
            },
            {
              "text": "toInt",
              "correct": false
            },
            {
              "text": "valueOf",
              "correct": false
            },
            {
              "text": "convert",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Scanner로 정수 입력",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — Scanner 정수 읽기",
          "prompt": "Scanner를 사용해 정수를 읽는 메서드 이름의 빈칸을 채우세요.\nint n = sc.___Int();",
          "code": "int n = sc.___Int();",
          "hint": "Scanner에서 정수를 읽는 메서드는 next + 타입 형태입니다.",
          "options": [
            {
              "text": "next",
              "correct": true
            },
            {
              "text": "read",
              "correct": false
            },
            {
              "text": "get",
              "correct": false
            },
            {
              "text": "scan",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — Integer.parseInt 활용",
          "prompt": "문자열 \"42\"를 정수로 변환하는 코드의 빈칸을 채우세요.\nint n = Integer.___(\"42\");",
          "code": "int n = Integer.___( \"42\" );",
          "hint": "Integer.parseInt()는 Python의 int()에 해당하는 String → int 변환 메서드입니다.",
          "options": [
            {
              "text": "parseInt",
              "correct": true
            },
            {
              "text": "toInt",
              "correct": false
            },
            {
              "text": "valueOf",
              "correct": false
            },
            {
              "text": "convert",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 한 줄 여러 정수 입력",
          "prompt": "StringTokenizer로 '3 5'를 입력받아 두 정수 a, b에 저장하는 코드를 완성하세요.",
          "code": "int a = Integer.parseInt(st.___(  ));",
          "hint": "StringTokenizer의 nextToken()은 다음 토큰(공백으로 구분된 문자열)을 반환합니다.",
          "options": [
            {
              "text": "nextToken",
              "correct": true
            },
            {
              "text": "next",
              "correct": false
            },
            {
              "text": "nextInt",
              "correct": false
            },
            {
              "text": "readLine",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — printf 포맷 출력",
          "prompt": "실수 3.14159를 소수점 2자리로 출력하는 코드를 완성하세요.\nSystem.out.printf(\"___.2f%n\", 3.14159);",
          "code": "System.out.printf(\"___.2f%n\", 3.14159);",
          "hint": "printf의 포맷 지정자는 %로 시작합니다. %.2f는 소수점 2자리 실수를 의미합니다.",
          "options": [
            {
              "text": "%",
              "correct": true
            },
            {
              "text": "#",
              "correct": false
            },
            {
              "text": "$",
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
      "title": "자료형과 형변환",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — int를 String으로 변환",
          "prompt": "정수 42를 String으로 변환하는 메서드의 빈칸을 채우세요.\nString s = String.___(42);",
          "code": "String s = String.___(42);",
          "hint": "String.valueOf()는 기본형을 String으로 변환하는 메서드입니다.",
          "options": [
            {
              "text": "valueOf",
              "correct": true
            },
            {
              "text": "toString",
              "correct": false
            },
            {
              "text": "parse",
              "correct": false
            },
            {
              "text": "convert",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — double을 int로 캐스팅",
          "prompt": "실수를 정수로 변환할 때 사용하는 명시적 캐스팅 문법을 완성하세요.\nint n = (___)3.9;",
          "code": "int n = (___)3.9;",
          "hint": "소괄호 안에 변환하려는 타입명을 쓰는 것이 캐스팅 문법입니다.",
          "options": [
            {
              "text": "int",
              "correct": true
            },
            {
              "text": "Integer",
              "correct": false
            },
            {
              "text": "floor",
              "correct": false
            },
            {
              "text": "round",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 정수 나눗셈 주의",
          "prompt": "5 / 2의 결과를 실수로 얻으려면 다음과 같이 캐스팅합니다. 빈칸을 채우세요.\ndouble result = (___)5 / 2;",
          "code": "double result = (___)5 / 2;",
          "hint": "정수/정수는 정수 결과입니다. 하나를 double로 캐스팅하면 실수 나눗셈이 됩니다.",
          "options": [
            {
              "text": "double",
              "correct": true
            },
            {
              "text": "float",
              "correct": false
            },
            {
              "text": "long",
              "correct": false
            },
            {
              "text": "real",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — char와 int 변환",
          "prompt": "문자 '5'를 숫자 5로 변환하는 방법의 빈칸을 채우세요.\nint n = '5' - ___;",
          "code": "int n = '5' - ___;",
          "hint": "아스키코드에서 '0'은 48입니다. 문자 숫자에서 '0'을 빼면 정수 숫자가 됩니다.",
          "options": [
            {
              "text": "'0'",
              "correct": true
            },
            {
              "text": "'a'",
              "correct": false
            },
            {
              "text": "48,",
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
      "title": "BufferedReader 빠른 입력",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — BufferedReader 선언",
          "prompt": "BufferedReader를 생성하는 코드의 빈칸을 채우세요.\nBufferedReader br = new BufferedReader(new ___(System.in));",
          "code": "new BufferedReader(new ___(System.in));",
          "hint": "System.in (바이트 스트림)을 문자 스트림으로 변환하는 클래스가 InputStreamReader입니다.",
          "options": [
            {
              "text": "InputStreamReader",
              "correct": true
            },
            {
              "text": "StreamReader",
              "correct": false
            },
            {
              "text": "ConsoleReader",
              "correct": false
            },
            {
              "text": "InputReader",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — throws IOException 선언",
          "prompt": "BufferedReader 사용 시 main 메서드에 예외 선언이 필요합니다. 빈칸을 채우세요.\npublic static void main(String[] args) throws ___",
          "code": "public static void main(String[] args) throws ___",
          "hint": "BufferedReader.readLine()은 체크드 예외(checked exception)인 IOException을 던질 수 있습니다.",
          "options": [
            {
              "text": "IOException",
              "correct": true
            },
            {
              "text": "Exception",
              "correct": false
            },
            {
              "text": "RuntimeException",
              "correct": false
            },
            {
              "text": "InputException",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — readLine으로 정수 파싱",
          "prompt": "br.readLine()으로 읽은 줄을 정수로 변환하는 코드를 완성하세요.",
          "code": "int n = Integer.___(br.readLine().trim());",
          "hint": "br.readLine()은 문자열을 반환하므로 Integer.parseInt()로 변환해야 합니다.",
          "options": [
            {
              "text": "parseInt",
              "correct": true
            },
            {
              "text": "valueOf",
              "correct": false
            },
            {
              "text": "intValue",
              "correct": false
            },
            {
              "text": "toInt",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — StringBuilder로 빠른 출력",
          "prompt": "반복 출력 시 StringBuilder를 사용하면 빠릅니다. 빈칸을 채우세요.",
          "code": "StringBuilder sb = new ___();",
          "hint": "StringBuilder는 문자열을 효율적으로 누적하는 클래스입니다. append()로 추가하고 toString()으로 변환합니다.",
          "options": [
            {
              "text": "StringBuilder",
              "correct": true
            },
            {
              "text": "StringBuffer",
              "correct": false
            },
            {
              "text": "String",
              "correct": false
            },
            {
              "text": "Writer",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "여러 줄 입력 처리",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — N줄 정수 합산",
          "prompt": "N개의 정수를 N줄로 입력받아 합산하는 코드의 빈칸을 채우세요.",
          "code": "for (int i = 0; i < ___; i++)",
          "hint": "n번 반복해서 readLine()으로 한 줄씩 읽습니다.",
          "options": [
            {
              "text": "n",
              "correct": true
            },
            {
              "text": "10",
              "correct": false
            },
            {
              "text": "i",
              "correct": false
            },
            {
              "text": "sum",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 공백 구분 두 정수 입력",
          "prompt": "한 줄에 두 정수가 공백으로 구분될 때 split으로 파싱하는 코드를 완성하세요.",
          "code": "String[] parts = br.readLine().split(\"___\");",
          "hint": "공백으로 구분된 값은 split(\" \")로 분리합니다.",
          "options": [
            {
              "text": "\" \"",
              "correct": true
            },
            {
              "text": "\":\"",
              "correct": false
            },
            {
              "text": "\",\"",
              "correct": false
            },
            {
              "text": "\"\\n\"",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — System.out.println vs print",
          "prompt": "줄바꿈 없이 출력하는 메서드를 완성하세요.\nSystem.out.___(\"Hello \");",
          "code": "System.out.___( \"Hello \" );",
          "hint": "println은 줄바꿈 포함, print는 줄바꿈 없이 출력합니다.",
          "options": [
            {
              "text": "print",
              "correct": true
            },
            {
              "text": "println",
              "correct": false
            },
            {
              "text": "write",
              "correct": false
            },
            {
              "text": "out",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — String.format 포맷",
          "prompt": "String.format으로 소수점 2자리 포맷 문자열을 만드는 코드를 완성하세요.",
          "code": "String s = String.format(\"___.2f\", x);",
          "hint": "String.format은 printf와 같은 형식 지정자를 씁니다. %.2f는 소수점 2자리.",
          "options": [
            {
              "text": "%",
              "correct": true
            },
            {
              "text": "#",
              "correct": false
            },
            {
              "text": "$",
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
      "title": "Math 클래스 활용",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — Math.max / Math.min",
          "prompt": "두 수 중 큰 값을 반환하는 메서드를 완성하세요.\nint m = Math.___(a, b);",
          "code": "int m = Math.___(a, b);",
          "hint": "Math.max(a, b)는 a, b 중 큰 값을 반환합니다.",
          "options": [
            {
              "text": "max",
              "correct": true
            },
            {
              "text": "min",
              "correct": false
            },
            {
              "text": "bigger",
              "correct": false
            },
            {
              "text": "large",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — Math.abs 절댓값",
          "prompt": "음수의 절댓값을 구하는 코드를 완성하세요.",
          "code": "int result = Math.___(x);",
          "hint": "Math.abs()는 절댓값을 반환합니다. Python의 abs()와 동일합니다.",
          "options": [
            {
              "text": "abs",
              "correct": true
            },
            {
              "text": "absolute",
              "correct": false
            },
            {
              "text": "positive",
              "correct": false
            },
            {
              "text": "fabs",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — Math.sqrt 제곱근",
          "prompt": "정수의 제곱근을 구해 정수로 변환하는 코드를 완성하세요.",
          "code": "int root = (int) Math.___(n);",
          "hint": "Math.sqrt()는 double을 반환합니다. 정수로 쓰려면 (int)로 캐스팅하세요.",
          "options": [
            {
              "text": "sqrt",
              "correct": true
            },
            {
              "text": "pow",
              "correct": false
            },
            {
              "text": "root",
              "correct": false
            },
            {
              "text": "sq",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — Math.pow 거듭제곱",
          "prompt": "2의 10제곱을 계산하는 코드를 완성하세요.",
          "code": "long result = (long) Math.___(2, 10);",
          "hint": "Math.pow(밑, 지수)는 double을 반환합니다. 큰 정수 결과면 (long)으로 캐스팅하세요.",
          "options": [
            {
              "text": "pow",
              "correct": true
            },
            {
              "text": "power",
              "correct": false
            },
            {
              "text": "exp",
              "correct": false
            },
            {
              "text": "mul",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "int ↔ String 변환 총정리",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 2진수 문자열로 변환",
          "prompt": "정수를 2진수 문자열로 변환하는 메서드를 완성하세요.",
          "code": "Integer.___(n)",
          "hint": "Integer.toBinaryString()은 정수를 2진수 문자열로 변환합니다.",
          "options": [
            {
              "text": "toBinaryString",
              "correct": true
            },
            {
              "text": "toHexString",
              "correct": false
            },
            {
              "text": "toOctalString",
              "correct": false
            },
            {
              "text": "toString",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — n진수 파싱",
          "prompt": "16진수 문자열 \"ff\"를 10진수 정수로 변환하는 코드를 완성하세요.",
          "code": "int n = Integer.parseInt(\"ff\", ___);",
          "hint": "Integer.parseInt(문자열, 진수)로 해당 진수의 문자열을 10진수로 변환합니다.",
          "options": [
            {
              "text": "16",
              "correct": true
            },
            {
              "text": "2",
              "correct": false
            },
            {
              "text": "8",
              "correct": false
            },
            {
              "text": "10",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 숫자 ↔ 문자 변환",
          "prompt": "문자 '7'을 정수 7로 변환하는 코드를 완성하세요.",
          "code": "int n = c - ___;",
          "hint": "숫자 문자에서 '0'을 빼면 해당 정수값이 됩니다. 아스키 코드 차이 활용입니다.",
          "options": [
            {
              "text": "'0'",
              "correct": true
            },
            {
              "text": "0",
              "correct": false
            },
            {
              "text": "'a'",
              "correct": false
            },
            {
              "text": "48",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — 자리수 합 구하기",
          "prompt": "정수를 String으로 변환한 뒤 각 자리 숫자를 합산하는 코드를 완성하세요.",
          "code": "String s = String.___(n);",
          "hint": "String.valueOf(n)으로 정수를 문자열로 변환한 뒤 toCharArray()로 각 자리를 처리합니다.",
          "options": [
            {
              "text": "valueOf",
              "correct": true
            },
            {
              "text": "toString",
              "correct": false
            },
            {
              "text": "parse",
              "correct": false
            },
            {
              "text": "format",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "예외 처리 — try-catch-finally",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — throws IOException 선언",
          "prompt": "BufferedReader 사용을 위해 main에 추가할 예외 선언을 완성하세요.\npublic static void main(String[] args) throws ___",
          "code": "throws ___",
          "hint": "IOException은 입출력 작업에서 발생하는 체크드 예외입니다.",
          "options": [
            {
              "text": "IOException",
              "correct": true
            },
            {
              "text": "Exception",
              "correct": false
            },
            {
              "text": "RuntimeException",
              "correct": false
            },
            {
              "text": "Error",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — try-catch 구조",
          "prompt": "NumberFormatException을 잡는 catch 절을 완성하세요.",
          "code": "} catch (___ e) {",
          "hint": "Integer.parseInt()가 변환 불가 문자열을 받으면 NumberFormatException을 던집니다.",
          "options": [
            {
              "text": "NumberFormatException",
              "correct": true
            },
            {
              "text": "IOException",
              "correct": false
            },
            {
              "text": "Exception",
              "correct": false
            },
            {
              "text": "Error",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — finally 블록",
          "prompt": "try-catch-finally에서 항상 실행되는 키워드를 완성하세요.",
          "code": "} ___ {",
          "hint": "finally 블록은 예외 발생 여부와 상관없이 항상 실행됩니다.",
          "options": [
            {
              "text": "finally",
              "correct": true
            },
            {
              "text": "always",
              "correct": false
            },
            {
              "text": "last",
              "correct": false
            },
            {
              "text": "done",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — 안전한 parseInt 패턴",
          "prompt": "안전하게 parseInt를 시도하고 실패 시 0을 반환하는 catch를 완성하세요.",
          "code": "} catch (___ e) { return 0; }",
          "hint": "NumberFormatException을 catch해 기본값을 반환하면 안전한 파싱 패턴입니다.",
          "options": [
            {
              "text": "NumberFormatException",
              "correct": true
            },
            {
              "text": "Exception",
              "correct": false
            },
            {
              "text": "IOException",
              "correct": false
            },
            {
              "text": "Error",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "비트 연산 기초 — 비트마스킹",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — 홀짝 판별 (비트 AND)",
          "prompt": "비트 연산으로 홀수인지 판별하는 코드를 완성하세요.",
          "code": "if ((n ___ 1) == 1)",
          "hint": "& 1은 최하위 비트를 확인합니다. 홀수는 마지막 비트가 1입니다.",
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
              "text": "^",
              "correct": false
            },
            {
              "text": ">>",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — 왼쪽 시프트로 2의 거듭제곱",
          "prompt": "1을 3번 왼쪽으로 시프트해 8(=2^3)을 구하는 코드를 완성하세요.",
          "code": "int pow8 = 1 ___ 3;",
          "hint": "1 << k는 2^k입니다. 왼쪽으로 k번 시프트 = k번 곱하기 2.",
          "options": [
            {
              "text": "<<",
              "correct": true
            },
            {
              "text": ">>",
              "correct": false
            },
            {
              "text": "&",
              "correct": false
            },
            {
              "text": "|",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — 비트마스크 특정 비트 확인",
          "prompt": "mask의 i번째 비트가 1인지 확인하는 연산자를 완성하세요.",
          "code": "if ((mask >> i ___ 1) == 1)",
          "hint": "mask >> i 로 i번째 비트를 최하위로 이동, & 1로 해당 비트값을 추출합니다.",
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
              "text": "^",
              "correct": false
            },
            {
              "text": ">>",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — 부분집합 전체 탐색",
          "prompt": "n개 원소의 모든 부분집합을 탐색하는 비트마스크 루프를 완성하세요.",
          "code": "for (int mask = 0; mask < (1 ___ n); mask++)",
          "hint": "1 << n = 2^n = 가능한 부분집합 수. mask 0~2^n-1이 모든 부분집합을 표현합니다.",
          "options": [
            {
              "text": "<<",
              "correct": true
            },
            {
              "text": ">>",
              "correct": false
            },
            {
              "text": "*",
              "correct": false
            },
            {
              "text": "^",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "Math 유틸 & long 오버플로우 처리",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — Math.max로 최댓값",
          "prompt": "두 수 중 큰 값을 반환하는 Math 메서드를 완성하세요.",
          "code": "int m = Math.___(a, b);",
          "hint": "Math.max(a,b)는 두 값 중 큰 쪽을 반환합니다.",
          "options": [
            {
              "text": "max",
              "correct": true
            },
            {
              "text": "min",
              "correct": false
            },
            {
              "text": "abs",
              "correct": false
            },
            {
              "text": "bigger",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — long 오버플로우 방지",
          "prompt": "두 int를 곱할 때 오버플로우를 방지하는 캐스팅을 완성하세요.",
          "code": "long result = (___)a * b;",
          "hint": "(long)a * b: a를 먼저 long으로 캐스팅하면 곱셈이 long 범위에서 수행됩니다.",
          "options": [
            {
              "text": "long",
              "correct": true
            },
            {
              "text": "int",
              "correct": false
            },
            {
              "text": "double",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — Math.sqrt 소수 판별",
          "prompt": "소수 판별에서 루프 상한을 Math.sqrt로 설정하는 코드를 완성하세요.",
          "code": "for (int i = 2; i <= (int)Math.___(n); i++)",
          "hint": "소수 판별: 2부터 √n까지만 확인합니다. Math.sqrt()는 double을 반환해 (int)로 캐스팅합니다.",
          "options": [
            {
              "text": "sqrt",
              "correct": true
            },
            {
              "text": "pow",
              "correct": false
            },
            {
              "text": "abs",
              "correct": false
            },
            {
              "text": "floor",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — Integer.MAX_VALUE 초기값",
          "prompt": "DP 배열을 INF(무한대)로 초기화하는 코드를 완성하세요.",
          "code": "Arrays.fill(dist, Integer.___);",
          "hint": "Integer.MAX_VALUE(약 21억)를 초기 INF 값으로 씁니다. 갱신 시 오버플로우 주의!",
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
              "text": "MAX_INT",
              "correct": false
            },
            {
              "text": "INFINITY",
              "correct": false
            }
          ]
        }
      ]
    }
  ]
};
