# 프로토타입 객체
- 프로토타입 체인이 동작한다.
- 예를 들어서 Person이라는 생성자 함수를 만들고, person1이라는 객체 인스턴스를 생성했을 때
   - person1 => Person => Object
   - 프로토타입 체인이 동작하는 것을 확인할 수 있다.
- 객체의 프로토타입 객체에 바로 접근 

# Inheritance 
```javascript
function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
};

Person.prototype.greeting = function() {
  alert('Hi! I\'m ' + this.name.first + '.');
};
```
- 선생님이라는 생성자 함수를 만들 때
  ```javascript
  function Teacher(first, last, age, gender, interests, subject) {
    Person.call(this, first, last, age, gender, interests);

    this.subject = subject;
  }

  // 위 함수랑 아래 함수의 내용은 같음
    function Teacher(first, last, age, gender, interests, subject) {
    this.name = {
      first,
      last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.subject = subject;
  }
  // 다만 이는 상속받은게 아니라 새로 생성하게 되는 것 = 코드가 길어짐.
  ```
  - `call()` 함수 
    - it allows to call a function defined somewhere else, but in the current context.
    - first parameter specifies the value of `this` that you want to use when running the function.
    - others are those that should be passed to the function when it is invoked.
  - 만약에 **속성 값을 매개변수로 받지 않는다면 매개변수에 아무것도 전달 받을 필요가 없다**

  ```javascript
  function Brick() {
    this.width = 10;
    this.height = 20;
  }

  function BlueGlassBrick() {
  Brick.call(this);

  this.opacity = 0.5;
  this.color = 'blue';
  }
  ```
- 메서드를 상속
  ```javascript
    Teacher.prototype = Object.create(Person.prototype);
    Teacher.prototype.constructor = Teacher;
  ```


## ES5 with Constructor and Prototype

- ES5에서는 사용자 정의 타입 생성이라는 접근 방식을 가졌다. 
- 생성자를 생성, 생성자의 프로토타입에 메서드 할당.

```javascript
//constructor
function User(username,email){
  this.username = username;
  this.email = email;
}

//method
User.prototype.login = function(){
  console.log(`${this.username} just logged in`)
}

//prototypal inheritance 
function Admin (username,email,title){
  User.call(this,username,email) // User 클래스의 constructor상속
  this.title = title;
}

Admin.prototype = Object.create(User.prototype) // User 클래스의 메소드 상속
```