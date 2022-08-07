## tagged literal
---
- template literals을 해체할 수 있다

```javascript
const name = 'Kim';

function divideWord(string, variableValue){
  console.log(string); // ['hello','my','name','is']
  console.log(variableValue); // Kim
}

divideWord `hello my name is ${name}.`
```
- 변수가 1개 이상일 때는 ? parameter3을 이용하거나 spread사용.
- 분리기준 ? 중괄호 기준으로 양 옆 문자열.
- 사용도 : 문자를 해체해서 새로 나열 가능 
```javascript
function divideWord(string, variableValue){
  console.log(string[0]+ variableValue + string[3] + string[2] + string[1]); 
  // ['hello','my','name','is'] - 기존
  // 출력값 : hello Kim is my name - 문법은 안맞지만 순서는 새로 나열 가능!
  
}
```
- 사용도2 : 문자를 해체해서 새로운 문자열 삽입.
- 예시 apple의 개수가 0이 될 때 apple 0이라고 안뜨고 apple is out of stock이라고 뜸.
```javascript
const apple = 0;
const orange = 100;
function divideWord(string, variableValue, variableValue2){
  if(variableValue === 0){
    console.log(`apple is out of stock and` + string[1] +`has`+variableValue2)
  }
  console.log(string[0] + variableValue + string[1] + variableValue2)
}

divideWord `apple ${apple} orange ${orange}`
```