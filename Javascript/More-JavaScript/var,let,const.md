## var, let, const : Variables 총정리
---
- 선언, 할당, 범위를 기억하자

1. 재선언이 (가능하다/불가능하다)
```javascript
var name;
var name = 'Kim';
var name = 'Park';
//***** var는 재선언이 (가능하다)

let name;
let name = 'Kim';

const name;
const name = 'Kim';
//***** let, const는 재선언이 (불가능하다)
```

2. 재할당이 (가능하다/불가능하다)
```javascript
var name = 'Kim';
name = 'Park';

let name = 'Park';
name = 'Kim';
//***** var, let은 재할당이 (가능하다)


const name = 'Kim';
name = 'Park';
//***** const는 재할당이 (불가능하다)
```
- `const`로 `object`를 만들었을 때, 안에 있는 값을 변경하는 것은 가능하다 - 재할당X, 값변경O
- Tip. 수정 불가능한 object를 만들고 싶으면 `Object.freeze(user)` : user칸에 object 이름을 쓰면됨.
```javascript 
const user = {
  name: 'Kim',
  age: 27
}

user.name = 'Kim' //user를 재할당 한 것이 아니라 안에 있는 값을 변경한 것이다.
```
3. 변수의 범위
```javascript
function sayHello(){
  var name = 'Kim';
  console.log(name);
}
console.log(name)
//error : var 사용범위는 function, 그외 전역변수

if(true){
  let name = 'Kim'
  const age = 27;
  console.log(name, age)
}
 console.log(name, age)
 //error : let, const 사용범위 {} block scope ex. for문, if문, 함수 등.
```
