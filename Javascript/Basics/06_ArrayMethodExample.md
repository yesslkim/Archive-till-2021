# Array Method Example

- Updates

  - [2020.08.30] - forEach문 정리
  - [2020.09.04] - array method example 추가 정리

---

## map()

```javascript
//이게 오리지널 변수를 변하게 한다 -> 오리지널 변수를 냅두려면 새로운 변수에 저장해야 된다.
const prices = [10,20,30,40,50,60,70]

const salePrices = prices.map((price)=>{
	return price / 2
}) //shortened : const salePrices = prices.map(price=> price / 2);

const fruits = [
	{name: 'melon', price: 20}
	{name: 'orange', price: 40}
	{name: 'banana', price: 50}
	{name: 'apple', price: 60}
	{name: 'tangerine', price: 10}
	{name: 'pear', price: 20}
];

const saleFruits = fruits.map((fruit)=>{
	if(fruit.price > 30) {
		return {name: fruit.name, price: fruit.price/2};
  } else {
	  return fruit
  }
})
```

## forEach()

forEach is buit in method that iterate loop

```javascript
let people = ["kim", "lee", "park"];
people.forEach(function () {
  console.log("hello!");
});
```

1. forEach body에 적힌 console.log('hello!')는 배열의 item마다 실행된다.
2. 즉 example에서는 총 3번 hello!라고 뜬다.

forEach문 역시 arrow function을 활용하여 짧게 작성할 수 있다.

```javascript
let people = ["kim", "lee", "park"];
people.forEach((person) => {
  console.log("hello!");
});
```

1. 여기서 person은 forEach가 갖는 parameter이다.

## filter()

```javascript
변수.filter((콜백함수매개변수)=>{
	return 필터링할 조건;
})

//이게 오리지널 변수를 변하게 하지는 않는다 => 다른 변수에 저장해야됨.

const scores = [10,20,30,40,50,60,70]

const filteredScores = scores.filter((score)=>{
	return score>20;
})

//이렇게 줄일 수 있다.
scores.filter(score => score>20);

const users = [
	{name: 'kim', premium: true}
	{name: 'lee', premium: true}
	{name: 'park', premium: true}
];

const premiumUsers = user.filter(user => {
	return user.premium;
})

//한번 더 줄이면

const premiumUsers = user.filter(user => user.premium);
})
```

## reduce()

```javascript
const scores = [10,20,30,40,50,60,70]

// acc = accumulator, total curr = current value
const result = scores.reduce((acc,curr)=>{
	if(curr>50){
		acc++;
	}
	return acc;
},0) // initial accumulator = 0

// 2로 나온다. 50이상인 value는 2개이기 때문에

const fruits = [
	{name: 'melon', price: 20}
	{name: 'orange', price: 40}
	{name: 'banana', price: 50}
	{name: 'melon', price: 60}
	{name: 'tangerine', price: 10}
	{name: 'pear', price: 20}
];

const melonTotal = fruits.reduce((acc,curr)=>{
	if(curr.name==='melon'){
		acc += curr.price
	}
	return acc;
},0)

//80나온다. 필요한 정보인 멜론 네임을 찾아서 price를 더하는 것.

```

## sort()

```javascript
const names=['kim', 'lee', 'park']

const sortNames = names.sort();

-

const scores [10, 20, 30, 5, 40, 50, 60]

const sortScores= scores.sort(); // 10, 20, 30, 40, 5, 50, 60 앞글자만 sort해줌.

scores.sort((a,b) => a-b);

-

const users = [
	{name: 'kim', score: 20}
	{name: 'lee', score: 10}
	{name: 'park', score: 50}
	{name: 'choi', score: 10}
	{name: 'Ann', score: 50}
];

// a,b는 연속된 element를 가리킨다. 김와 이, 이와 박 처럼 연속된.
// value는 positive, negative, 0로 나뉜다.
users.sort((a,b)=>{
	if(a.score > b.score) {
		return -1;
	} else if (b.score > a.score){
		return 1;
	} else {
		return 0;
	}
});

//short version : users.sort((a,b) => b.score - a.score); 내림차수
//short version : users.sort((a,b) => a.score - b.score); 올림차수
```
