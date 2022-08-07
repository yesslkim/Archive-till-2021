# Summary
## 생성자 (constructor)
  -  객체를 생성하는 함수를 생성자 함수라고 한다.
  -  일반 함수와 다른점은 함수이름이 대문자로 시작하게 만든다. 
  -  여기서 `this`는 생성자 함수를 가르킨다.
```javascript
function User(name, age){
  this.name = name;
  this.age = age;
  this.login = function(){
     alert(this.name +'님 로그인 되었습니다!')
  }
}

const kim = new User('Kim',100);
/*
User {
name : 'Kim',
age : 100
}

이렇게 만들어진다.
*/

```
## 프로토타입 (prototype)
- 프로토타입이란 생성자 함수에 정의한 모든 객체가 공유할 원형. 
```javascript
function User(name, age){
  this.name = name;
  this.age = age;
}

User.prototype.login = function(){
  alert(this.name +'님 로그인 되었습니다!')
}
```
- 프로토타입 객체는 사전 그대로 원형을 뜻한다. 
- 이렇게 하면 User 생성자로 만든 모든 객체는 메소드 사용이 가능하다.

## `this.login` VS `User.prototype.login`
- 모든 객체가 공유 = 최초 생성자가 만들 때 한번만 만들어 진다. 
- `this.login`은 객체 하나를 만들 때 마다 메서드도 하나씩 만들어져서 메모리 낭비가 발생한다.

## `__proto__`
- 생성자 함수를 new로 호출할 때, 정의해두었던 프로토타입을 참조한 객체 
## 상속 (inheritance) / 확장 (extends)
- 생성자의 기능을 물려받으면서 새로운 기능을 추가하는 것
```javascript
function User(name, hobby) {
  this.name = name;
  this.hobby = hobby;
}
User.prototype.sayHobby = function () {
  console.log(this.name + '님의 취미는 ' + this.hobby + '입니다.')
};

function Admin(name, hobby, event) {
  User.apply(this, arguments)
  this.event = event;
}
Admin.prototype = Object.create(User.prototype); //둘 연결
Admin.prototype.constructor = Admin; //생성자 Admin으로 조정
Admin.prototype.sayEvent = function () {
  console.log('곧 이벤트가 열립니다. 이벤트 내용은'+this.event);
};

```

## call(), apply(), bind()
- call() : 다른 객체의 함수를 사용할 때 사용
  ```javascript
  const obj = {
    name: 'kim',
    sayHi: function(){
      alert(`Hi! i am ${this.name}`)
    }
  }
  const obj2 = {name : 'lee'}

  obj.sayHi() // hi! i am kim 
  obj.sayHi.call(obj2) // hi! i am lee
  ```
- apply() 
- bind() : 호출은 하지 않고 함수만 반환할 때 사용. 
  ```javascript
  const sayHi2 = obj.sayHi.call(obj2);
  sayHi2() //이렇게 사용 가능
  ```