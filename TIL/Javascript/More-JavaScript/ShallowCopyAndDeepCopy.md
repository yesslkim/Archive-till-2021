# Shallow copy and Deep copy (얕은 복사와 깊은 복사)

## Definition

(1) 기본 자료형의 값 복사 (숫자, 문자열, 불린형)

```javascript
let original = 100;
const cloneOriginal = orignal; // 100

original = 200;

console.log(original); // 200
console.log(cloneOriginal); //100
```

- 값을 완전히 복사한다 (=깊은 복사),
- 두개의 변수는 독립적인 상태이다,

(2) 객체의 참조 복사 (배열, 객체등)

```javascript
let originalArr = [1, 2, 3, 4];
const cloneArr = originalArr; // 위치값을 찾아서 값을 가져온다 [1,2,3,4]

originalArr[0] = 1000;

console.log(originalArr[0]); // 1000
console.log(cloneArr[0]); //1000
```

- 객체는 변수를 저장하면 값을 저장하지 않고 객체의 위치값 즉 참조하게 된다.
- 객체를 복사 시, 값을 복사하는 것이 아닌 참조(메모리주소)를 복사할 수 있다(=얕은복사)
- 두 배열은 독립적이지 않으며(메모리 주소를 공유하기 때문에) 오리지널 배열의 첫번째 값이 1000으로 바뀌면서 위치값 안에 있는 값이 바뀌는 것이기 때문에 같은 메모리주소를 공유하고 있는 cloneArr의 첫번째 값도 바뀌게 된다.

(3) 객체의 깊은 복사

- 되지 않는 예시

```javascript
let home = {
  city: "Seoul",
  "roof color": "red",
};
let tryReassignment = obj => {
  obj = {
    country: "korea",
    "room mate": "lee",
  };
  console.log(obj); // 위에 객체를 반환한다.
};
tryReassignment(home); // reassignment는 되지 않는다.

home = {
  country: "korea",
  "room mate": "lee",
}; // 이건 됨.
```

- 객체의 속성을 하나하나 변경하는 것은 가능하다. 하지만 `tryReassignment(home)` 이렇게 할 시에는 메모리 값을 참조하기 때문에 `home`의 변수에 대해 알지 못한다

## How To

(1) 얕은 복사 - Object.assign() / spread  
(2) 깊은 복사 - 재귀함수 / JSON.stringify() / 라이브러리사용(lodash) - .cloneDeep(obj)
