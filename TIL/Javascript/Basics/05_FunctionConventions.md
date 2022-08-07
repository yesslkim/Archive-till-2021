# Functions Conventions

- Updates

  - [2020.08.30] - Function chapter가 너무 길어져서 따로 정리. code style, naming..etc

---

## Code Styles, Conventions & Syntax

1. parameter is optional but parameter list should be included

   ```javascript
   function greetUser() {
     // the parameter list (  the ()  ) should be included
     alert("Hi!");
   }
   ```

2. whitespace, adding a line break and indentation is optional but it's more readable
3. strings in JavaScript should be in one line - syntax error, but you can split into multiple strings and concatenated.
4. functions have a special behavior - automatically registers all functions before execution so it can be written anywhere. however, the place should be constant (on the bottom, middle, or top)

## 함수 추가 정리

- 함수 내부에서 함수 전역 변수에 접근할 수 있다. (1)
- 전역 변수에 접근 뿐만 아니라 수정도 가능 (2)
- 전역 변수는 지역변수가 없는 경우에만 사용가능
- 전역 변수와 동일한 이름을 가진 지역 변수 선언시, 지역 변수는 전역 변수를 가린다.
  (지역 변수는 함수 내에서만 사용가능, 추후 변수 선언시 전역 변수의 값을 가짐)
- 변수는 연관되는 함수 내에 선언하는 게 좋다. 즉, 함수 내부에서 외부 변수를 사용하는 방법 대신 지역 면수와 매개변수를 활용하는 것이 좋다.

```javascript
// 1번 예시
let userName = "Kim";

function greetUser() {
  let message = "Hello" + userName; // 내부에서 외부변수 접근 (1)
}

//2번 예시
let userName = "Kim";

function greetUser() {
  userName = "Park"; // 내부변수를 수정함 (2)
}

alert(userName); // 함수 호출전에는 Kim으로 출력
greetUser();
alert(userName); // 함수 호출 후에는 Park으로 출력
```

- redeclaring the variable is not allowed because it gets error but it is only not allowed on the same level, or in the same scope.
- this means that when a global variable is declared, it can redeclare the variable on the local level → this is called "shadowing"
- shadowing the variable means that they are both co-exist but the local variable shadowed the global one.

## 함수 이름 짓기

- 대게 동사이다.
- 간결하고 명확해야 한다 (어떤 동작을 하는지 설명할 수 있어야 한다)
- 함수는 동작 하나만 담당해야한다 (이름에 언급된 동작 수행)

예시 (~로 시작하는 함수)

- show : 대게 무언가를 보여주는 함수
- get : 값을 반환함
- calc : 무언가를 계산함
- create : 무언가를 생성함
- check : 무언가를 확인하고 불린값을 반환
