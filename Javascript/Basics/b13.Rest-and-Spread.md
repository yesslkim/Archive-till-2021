# Rest Parameter / Spread Syntax (with arrays and objects)

- Updates
  - [2020.10.04] - 개념정리
  - [2020.10.27] - spread operator 다시 공부

---

## Rest Parameter

- Arguments를 몇개 넣을지 모르는 상황에는 rest parameter를 사용한다
- parameter에 들어가면 array로 변환
- 만약에 인자가 (x...y)일경우 x를 제외한 y만 배열로 만드는것!
- ...parameter는 무조건 마지막에 와야한다.
- 결론적으로 여러 인자를 배열로 만들어 주는 것.

```javascript
const double = (...nums) => {
  return nums.map(num => num * 2);
};

const result = double(1, 3, 5, 7, 8);
```

```javascript
// 이럴 때 활용도가 좋다

const add = (a,b,...rest){
  console.log(a,b) // 1,2
  console.log(...rest) // 3,4,5
}

add(1,2,3,4,5)
// 1,2는 a,b parameter를 활용할 수 있지만 나머지 argument는 아니다. 이들은 ...rest에 포함

```

## Spread syntax with arrays

> `[...iterableObj, '4', 'five', 6];`

- 새로운 배열에 넣고 싶을 때 사용 (복사기능)
- => `const a = b` 일 때 a와 b가 reference type일 경우 Deep copy되서 값을 공유해서 같이 업데이트 된다. 이를 방지하기 위해 spread 사용!!!! (즉, object도 spread사용하여 복사)
- 배열을 분해할 때 사용 [] => string (해체기능)
- 두 배열을 합칠 때 사용 (합치는 기능)
- spread는 [], {}안에서만 사용이 가능.

```javascript
const people = ["kim", "lee", "park"];
const people2 = [...people] 
// 복사 기능 : people2의 값은 people과 같아진다.
const members = ["yang", "choi", ...people];
// ...people은 string인 'kim', 'lee', 'park' 반환 (해체 기능)
// 배열 안에 people 배열 값이 들어감 (합치는 기능)
```

## Spread syntax(Objects)

> `let objClone = { ...obj };`

- make brand new copy of object
- can edit and make new copy of object.

```javascript
const person = {
  name: "kim",
  age: 27,
  hobby: "computer",
};

const personClone = {...person};
const personEdit = {...person, age: 25}; // age만 수정한 채로 새로운 객체 만들 수 있음.
```
