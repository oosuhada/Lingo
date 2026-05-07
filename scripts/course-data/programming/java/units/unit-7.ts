import type { UnitSeed } from "../../../types";

export const unit7: UnitSeed = {
  "title": "Unit 7. String 조작",
  "description": "String 메서드, StringBuilder, char 배열, 문자열 파싱, 불변성",
  "lessons": [
    {
      "title": "String 주요 메서드",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — length() 메서드",
          "prompt": "문자열 길이를 반환하는 메서드를 완성하세요.\nint len = s.___();",
          "code": "int len = s.___();",
          "hint": "String의 길이는 .length() 메서드 (괄호 있음). 배열의 .length (괄호 없음)와 다릅니다.",
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
          "question": "드릴 2 — charAt으로 문자 접근",
          "prompt": "문자열의 인덱스로 문자에 접근하는 메서드를 완성하세요.\nchar c = s.___(0);",
          "code": "char c = s.___(0);",
          "hint": "s.charAt(i)는 인덱스 i의 문자를 반환합니다. Python의 s[i]에 해당합니다.",
          "options": [
            {
              "text": "charAt",
              "correct": true
            },
            {
              "text": "get",
              "correct": false
            },
            {
              "text": "indexOf",
              "correct": false
            },
            {
              "text": "at",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — substring 추출",
          "prompt": "인덱스 7부터 끝까지 부분 문자열을 추출하는 코드를 완성하세요.",
          "code": "String sub = s.___(7);",
          "hint": "substring(시작인덱스)는 해당 인덱스부터 끝까지 반환합니다.",
          "options": [
            {
              "text": "substring",
              "correct": true
            },
            {
              "text": "slice",
              "correct": false
            },
            {
              "text": "substr",
              "correct": false
            },
            {
              "text": "sub",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — split으로 분리",
          "prompt": "쉼표로 구분된 문자열을 배열로 분리하는 코드를 완성하세요.",
          "code": "String[] parts = s.___(\".\");",
          "hint": "split(\",\")는 쉼표를 구분자로 분리합니다. String[]을 반환합니다.",
          "options": [
            {
              "text": "split(\",\")",
              "correct": true
            },
            {
              "text": "split(\" \")",
              "correct": false
            },
            {
              "text": "split(\".\")",
              "correct": false
            },
            {
              "text": "split(\";\" )",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "StringBuilder — 효율적 문자열 조합",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — append 메서드",
          "prompt": "StringBuilder에 문자열을 추가하는 메서드를 완성하세요.\nsb.___( \"Hello\" );",
          "code": "sb.___( \"Hello\" );",
          "hint": "append()는 StringBuilder 끝에 문자열/숫자를 추가합니다. Python의 += 또는 join과 유사합니다.",
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
              "text": "insert",
              "correct": false
            },
            {
              "text": "push",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — reverse()로 뒤집기",
          "prompt": "문자열을 뒤집는 StringBuilder 메서드를 완성하세요.",
          "code": "new StringBuilder(s).___().toString();",
          "hint": "reverse()는 StringBuilder의 내용을 반전시킵니다. Python의 s[::-1]에 해당합니다.",
          "options": [
            {
              "text": "reverse",
              "correct": true
            },
            {
              "text": "flip",
              "correct": false
            },
            {
              "text": "invert",
              "correct": false
            },
            {
              "text": "mirror",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — toString()으로 변환",
          "prompt": "StringBuilder를 String으로 변환하는 메서드를 완성하세요.",
          "code": "String result = sb.___();",
          "hint": "StringBuilder에서 일반 String을 얻으려면 .toString()을 호출합니다.",
          "options": [
            {
              "text": "toString",
              "correct": true
            },
            {
              "text": "toStr",
              "correct": false
            },
            {
              "text": "getString",
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
          "question": "드릴 4 — char 배열로 문자열 처리",
          "prompt": "문자열의 각 문자를 순회해 대문자로 변환하는 코드를 완성하세요.",
          "code": "char[] chars = s.___();",
          "hint": "toCharArray()는 String을 char[] 배열로 변환합니다. 개별 문자를 수정할 수 있습니다.",
          "options": [
            {
              "text": "toCharArray",
              "correct": true
            },
            {
              "text": "chars()",
              "correct": false
            },
            {
              "text": "charArray()",
              "correct": false
            },
            {
              "text": "getChars()",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "String 파싱 — split, trim, startsWith",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — trim으로 공백 제거",
          "prompt": "입력 문자열 앞뒤 공백을 제거하는 메서드를 완성하세요.",
          "code": "System.out.println(s.___());",
          "hint": "trim()은 문자열 앞뒤의 공백 문자를 제거합니다.",
          "options": [
            {
              "text": "trim",
              "correct": true
            },
            {
              "text": "strip",
              "correct": false
            },
            {
              "text": "clean",
              "correct": false
            },
            {
              "text": "removeSpaces",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 2 — startsWith 접두사 확인",
          "prompt": "문자열이 특정 문자열로 시작하는지 확인하는 코드를 완성하세요.",
          "code": "s.___( \"Java\" )",
          "hint": "startsWith()는 문자열이 지정한 접두사로 시작하면 true를 반환합니다.",
          "options": [
            {
              "text": "startsWith",
              "correct": true
            },
            {
              "text": "beginsWith",
              "correct": false
            },
            {
              "text": "indexOf",
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
          "question": "드릴 3 — String.join으로 결합",
          "prompt": "문자열 배열을 '-'로 연결하는 코드를 완성하세요.",
          "code": "String result = String.___(\"-\", parts);",
          "hint": "String.join(구분자, 배열)은 배열 원소를 구분자로 연결합니다. Python의 '-'.join(list)에 해당합니다.",
          "options": [
            {
              "text": "join",
              "correct": true
            },
            {
              "text": "concat",
              "correct": false
            },
            {
              "text": "combine",
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
          "question": "드릴 4 — 문자열 replace",
          "prompt": "문자열에서 특정 부분을 다른 문자열로 교체하는 코드를 완성하세요.",
          "code": "String result = s.replace(\"Python\", ___);",
          "hint": "replace(대상, 교체)는 모든 일치 부분을 교체한 새 String을 반환합니다.",
          "options": [
            {
              "text": "\"Java\"",
              "correct": true
            },
            {
              "text": "Java",
              "correct": false
            },
            {
              "text": "'Java'",
              "correct": false
            },
            {
              "text": "(Java)",
              "correct": false
            }
          ]
        }
      ]
    },
    {
      "title": "정규식과 문자열 검사",
      "challenges": [
        {
          "type": "SELECT",
          "question": "드릴 1 — matches로 숫자 확인",
          "prompt": "문자열이 숫자로만 이루어졌는지 확인하는 코드를 완성하세요.",
          "code": "s.matches(\"___+\")",
          "hint": "[0-9]+는 숫자 한 자리 이상을 의미합니다. matches()는 전체 문자열이 패턴에 맞아야 true입니다.",
          "options": [
            {
              "text": "[0-9]",
              "correct": true
            },
            {
              "text": "\\\\d",
              "correct": false
            },
            {
              "text": "0-9",
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
          "question": "드릴 2 — Character.isDigit",
          "prompt": "문자가 숫자인지 확인하는 Character 메서드를 완성하세요.",
          "code": "Character.___(c1)",
          "hint": "Character.isDigit(c)는 문자가 0~9 사이의 숫자이면 true를 반환합니다.",
          "options": [
            {
              "text": "isDigit",
              "correct": true
            },
            {
              "text": "isNumber",
              "correct": false
            },
            {
              "text": "isInt",
              "correct": false
            },
            {
              "text": "isNumeric",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 3 — replaceAll 숫자 제거",
          "prompt": "문자열에서 숫자를 모두 제거하는 코드를 완성하세요.",
          "code": "s.replaceAll(\"___\", \"\")",
          "hint": "[0-9]는 숫자 한 자리를 나타내는 정규식입니다. replaceAll로 빈 문자열로 교체하면 제거됩니다.",
          "options": [
            {
              "text": "[0-9]",
              "correct": true
            },
            {
              "text": "[a-z]",
              "correct": false
            },
            {
              "text": "\\\\w",
              "correct": false
            },
            {
              "text": "\\\\s",
              "correct": false
            }
          ]
        },
        {
          "type": "SELECT",
          "question": "드릴 4 — 팰린드롬 검사",
          "prompt": "문자열이 팰린드롬인지 검사하는 코드를 완성하세요.",
          "code": "String rev = new StringBuilder(s).___.toString();",
          "hint": "StringBuilder의 reverse()로 문자열을 뒤집은 뒤 equals()로 원본과 비교합니다.",
          "options": [
            {
              "text": "reverse()",
              "correct": true
            },
            {
              "text": "flip()",
              "correct": false
            },
            {
              "text": "mirror()",
              "correct": false
            },
            {
              "text": "sort()",
              "correct": false
            }
          ]
        }
      ]
    }
  ]
};
