# ES7 ~

## ES7
### includes : 포함되었는지 확인 - string, array 
```javascript
const string = 'flower';

string.includes('f'); //true 

const array = ['arr1', 'arr2', 'arr3'];

array.includes('arr1'); //true
```

### ** : 제곱

## ES8 
### padStart() / padEnd();

```javascript
'hello'.padStart(2);

//'  hello' 앞에 스페이스바 두번 + hello string 

'hello'.padEnd(2);

//'hello  ' 뒤에 스페이스바 두번 + hello string 
```

### object.values / object.entries / object.keys
- Used for looping through object
- forEach, map 같은 것도 사용할 수 있음.

```javascript
let obj = {
  username0: 'kim',
  username1: 'lee',
  username2: 'park'
}

Object.keys(obj).forEach((key,index)){
  console.log(key, obj[key])
}

Object.values(obj).forEach(value=>{
  console.log(value); //key 없이 value만 줌 위에서는 김,이,박
})

Object.entries(obj).forEach(value=>{
  console.log(value)'; 
})
/*
key와 value를 같이 array형태로 줌.
['username0', 'kim']
['username1', 'lee']
['username2', 'park']
*/
```
