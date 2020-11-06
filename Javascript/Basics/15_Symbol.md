# Symbol

- Updates
  - [2020.10.04] - 개념정리

---

### Syntax

```javascript
const symbolOne = Symbol();
```

### Symbol 활용법

```javascript
const symbolOne = Symbol();
const symbolTwo = Symbol();

/*
 ** (1) 똑같이 생겨도 다르다 : symbolOne !== symbolTwo
 ** (2) 활용하는 방법 ↓↓↓↓↓↓↓
 */

const myProfile = {};

myProfile.age = 27;
myProfile["hobby"] = "computer";
myProfile["hobby"] = "sleeping";

/*
 ** (1) Object는 같은 property의 값을 바꿀 시, 새로 key를 생성하는 것이 아니라 덮어쓴다.
 ** (2) 같이 쓰고 싶을 때는 Symbol()을 사용한다.
 */

const myProfile = {};

myProfile.age = 27;

const hobbyOne = Symbol("hobby");
const hobbyTwo = Symbol("hobby");

myProfile[hobbyOne] = "computer";
myProfile[hobbyTwo] = "sleeping";

console.log(myProfile);
// {age: 27, Symbol(hobby): "computer", Symbol(hobby): "sleeping"}
```
