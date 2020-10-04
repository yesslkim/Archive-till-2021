# Sets

- Updates
  - [2020.10.04] - 개념정리

---

## Definition

- The Set constructor lets you create Set objects that store unique values of any type, whether primitive values or object references. <출저 MDN>
- 같은 값은 제외하고 나타낸다.
- length, push method 사용 못함

### Syntax

```javascript
const namesArray = ["kim", "lee", "park", "choi", "kim"];

//(1). Not allowed duplicate - 같은 값을 지워준다.

const namesSet = new Set(namesArray); // {'kim','lee','park','choi'}

//(2). {} => [] Spread를 활용하여 배열로 반환
const uniqueNames = [...namesSet]; // ['kim','lee','park','choi']

//(3). (1)~(2)를 한줄로 쓰기

const finalNames = [...new Set(namesArray)];
```

### Method모음

- `add()` / `delete()` / `size` / `has()` / `clear()`

- Array method의 push()와 같은 메소드 add(). 단, 중복 제외하고 나타냄.
- Array method의 pop()과 같은 메소드 delete()
- Array.length와 같은 메소드 new Set().size

```javascript
const ages = new Set();

ages.add(20);
ages.add(25).add(30); //chaining 가능
ages.add(25); // 위에꺼랑 중복되어 나타나지 않음.

ages.delete(25);
ages.size;
ages.has(30); // boolean값

ages.clear(); // 전체지우기

//forEach()메소드 활용하기 - Array로 변환후 사용.
const members = new Set([
  {name: "kim", age: 20},
  {name: "lee", age: 30},
  {name: "park", age: 40},
]);

members.forEach(member => {
  console.log(member.name, member.age);
});
```
