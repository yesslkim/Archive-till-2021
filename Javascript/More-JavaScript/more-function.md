## default parameter
---

```javascript
function sum(a,b = 10){
  return a+b;
}

sum(1);
sum(1,2);
```
- parameter에 default값을 넣을 수 있다.
- `sum(1)`은 b의 default값이 2이고 따로 값이 정해져 있지 않기 때문에 `1 + 10 = 11`이 나온다.
- `sum(1,2)`는 b에 2라는 argument가 들어갔기 때문에 default parameter는 무시된다.

```javascript
function sum(a,b = 10*a ){
  return a+b;
}

function temp(){
  return 10
}

function sum(a, b= temp()){
  return a+b;
}
```
- default값은 number 뿐만 아니라 안에서 연산식이 들어갈 수도 있고, 함수도 들어갈 수 있다.

---
## arguments
---

```javascript
function func(a,b,c){
  console.log(arguments)
}

func(1,2,3)
```

- function의 모든 parameter를 한번에 사용하고 싶을 때 `arguments`를 사용한다.
- `arguments`는 배열의 형식으로 값을 출력한다. 즉, for문을 활용하여 모든 parameter를 출력할 수 있을 것이다.
- 단점: 모든 parameter를 담고 있기 때문에 분할이 어려움.

---
## rest parameter
---

```javascript
function func(...rest){
  console.log(rest)
}

function func(a,b,...rest){
  console.log(rest)
}

func(1,2,3,4,5)
func2(1,2,3,4,5)
```
- 함수를 실행하기 위해 적은 모든 arguments를 출력해준다. 그래서 `func(1,2,3,4,5)` 경우 `[1,2,3,4,5]`를 출력한다.
- arguments와 다른점은 분할이 가능하다는 점이다. `func2()`를 보면 a(= 1)와 b(= 2)를 제외한 나머지인 3,4,5를 출력하게 된다. `[3,4,5]`
- rest parameter와 spread operator의 차이점은 rest parameter는 함수 파라미터에만 들어간다.
- rest parameter는 꼭 마지막에 써야하고 한번만 사용 가능하다 (그 외 라는 뜻이기 때문에)