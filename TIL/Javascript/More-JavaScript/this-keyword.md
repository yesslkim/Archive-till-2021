# this 키워드

1. 그냥 쓰거나 일반 함수 안에서 쓰면 window object
2. 객체 내 함수 안에서 쓰면 그 함수를 가지고 있는 object를 뜻함 (해당 객체!)

* object내에 있는 object안에 있는 this는? obj2를 가리킨다.
```javascript
var obj = {
  obj2 : {
    func : function(){
      console.log(this)
    }
  }
}
```
3. arrow function = 상위 this의 값을 물려 받는 다. 

- 변수나 함수를 만들 때 window object에서 보관하게 된다. 즉, 전역공간에서 쓰이게 되면 가장 가까운 객체가 window이기 때문에 이는 window를 뜻하게 된다. 하지만 객체 안에 담기게 되면 가장 가까운 객체는 window object가 아닌 this가 담긴 object 그 자체이기 때문에 object를 뜻하게 된다.
- 즉, this는 this를 담고 있는 object를 가리킨다 

4. constructor = instance(새로 생성되는 object)

```javascript
function User(){
  this.name = 'Kim' // **** 새로 생성되는 object의 키는 name 값은 'Kim'으로 지정한다.
}

const obj = new User();
```
```javascript
const obj = {
  people : ['kim','lee','park'],
  func : function(){
    console.log(this) //***********object 
    obj.people.forEach(function(){
      console.log(this) //**********window
    })
  }
}
// * 가장 가까운 위치를 잊지말자
```
5. Event Listener = e.currentTarget과 같은 의미 = 지금 이벤트가 동작하고 있는 요소 

```javascript
//1 addEventListener에서의 this = .btn 태그 자체
document.querySelector('.btn').addEventListener('click',function(e){
  console.log(this, e.currentTarget);
})
```
```javascript
//2 일반 함수 내에서 사용 = window
document.querySelector('.btn').addEventListener('click',function(e){
  const arr = [1,2,3];
  arr.forEach(function(a){
    console.log(this) 
  })
})
```


