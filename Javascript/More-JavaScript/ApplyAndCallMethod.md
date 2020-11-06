## apply()
---
- 자바스크립트 내장함수
```javascript
function sum(a,b,c){
  console.log(a+b+c)
}

// 이때 array를 sum 함수에 넣고 싶다면?
// 1. apply() 사용

const arr = [10,20,30];
sum.apply(undefined, arr);

// 2. spread 사용
sum(...arr);
```
- array를 함수 parameter로 넣고 싶을 때 사용
- `undefined`에 arr을 넣어달라는 뜻 

```javascript
const user = {
  greeting : function(){
    console.log('hello');
  }
} 

const user2 = {
  name: 'Kim'
}

user.greeting.apply(user2)
```
- 다른 object의 메소드를 사용하고 싶을 때
---
## call()
---
`user.greeting.call(user2)`
- apply() 메소드와 유사하게 사용.
- 차이점은 안에 파라미터를 넣어서 실행하고 싶을 때 다르다.

```javascript
user.greeting.apply(user2,[1,2,3])
user.greeting.call(user2,1,2)
```