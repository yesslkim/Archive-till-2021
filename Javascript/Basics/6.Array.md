# Array 배열

- Updates
  - [2020.08.23] - 배열 기본 개념 공부 및 정리
  - [2020.09.04] - array method 배운 내용 추가 정리

---

- list-like objects / single objects that contain multiple values stored in a list

```javascript
// 배열은 []안에 콤마로 구분한다.
const array = [1, 2, 3, 4, 5];

// numbers, string, objects, array등 들어갈 수 있다.
const random = ["string", 15, [0, 1, 2]];
```

## Accessing and modifying array items

```javascript
// individual item 부르는 방법.
// example. 1번째를 부르면 15출력
random[1];

// individual item 변경하는 방법.
// example. 1번째를 숫자 20으로 바꿀 때
random[1] = 20;
```

## multi dimensional array - 배열 속 배열 호출하기

```javascript
const random = ["string", 15, [0, 1, 2]];
random[2][0]; //0

/*
[2] - 배열에서 2번째에 있는 item => 여기서는 배열 안에 있는 또 다른 배열을 가리킨다.
[0] - 배열 속 배열에 있는 item중 0번째에 => 0
*/
```

## Length of an array

```javascript
let shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles';
shopping.length; //5
```

- loop에서 주로 사용, 모든 아이템을 loop했는지

## Some useful array method

- split() - converting from strings to arrays

```javascript
let myData = "kim,park,lee,kwak"; //string
let myArray = myData.split(",");
myArray; // ['kim','park','lee','kwak']
```

- join() - converting from arrays to strings
- toString() - converting from arrays to strings
  > **difference:** 1. join()은 separator을 가질 수 있다. 2. join()은 배열에만 사용 가능하다.
- 구분자를 입력하지 않으면 자동으로 쉼표 이용
- .push() .pop() - adding and removing array items (배열의 뒤)
- .unshift() .shift() - adding and removing array items (배열의 앞)

```javascript
let array = [1, 2, 3];
array.push(4); // 4
array; // [1,2,3,4]
array.pop(); // [4]
```

- push()는 더해주는것, pop()는 빼주는 것. 여기서 중요한것은 push()는 push한 후 변한 배열의 길이를 반환, pop은 마지막 요소를 제거한 후 그 요소를 반환.
- .map() : map the array and update the item . / destructive [example 바로가기](./6a.Array-Method-example.md)
- .forEach() [example 바로가기](./6a.Array-Method-example.md)

> .map과 .forEach의 매개변수로는 함수가 들어온다.  
> 배열.map(function(값, 자릿수) { 조건 })  
> 배열.forEach(function(값, 자릿수) { 조건 }) 쓰는방식 일치  
> map과 forEach의 차이점은 map은 바뀐 새 배열을 반환, forEach는 반환 x. 따라서 forEach보다는 >map이 활용성이 더 높다.

- filter() : 배열 안 item을 특정조건에 따라 필터링 해주는 메소드 / non-destructive  
  [example 바로가기](./6a.Array-Method-example.md)
- reduce() : it can return any value from the array [example 바로가기](./6a.Array-Method-example.md)
- find() : 조건에 만족하는 처음 value를 리턴한다.

```javascript
const scores = [10, 20, 30, 40, 50];

const findScores = scores.find((score) => {
  return score > 20;
}); // 30
```

- sort() : 원하는 방식으로 sort하는 방법 /destructive [example 바로가기](./6a.Array-Method-example.md)
- reverse() : 배열 items 의 position을 반대로

- chaining array method:

```javascript
const fruits = [
	{name: 'melon', price: 20}
	{name: 'orange', price: 40}
	{name: 'banana', price: 50}
	{name: 'melon', price: 60}
	{name: 'tangerine', price: 10}
	{name: 'pear', price: 20}
];

const filtered = fruits.filter(fruit => fruit.price > 20)
const promos = filtered.map(fruit => {
	return `the ${fruit.name} is ${fruit.price/2} pounds`;
});

//chaining version

const promos = product
 .filter(fruit=> fruit.price > 20)
 .map(fruit=> `the ${fruit.name} is ${fruit.price/2} pounds`)
})

```
