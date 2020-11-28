# Object Oriented 
- 추상화 : 프로그래머 의도에 맞추어 가장 중요한 것들만을 뽑아서 복잡한 것들을 보다 단순한 모델로 변환하는 작업.
- 객체 인스턴스 : 클래스를 통해 만들 수 있다. 클래스에 정의된 데이터와 함수를 갖는 객체를 생성한다.
- 인스턴스화(instantiation) : 클래스에서 객체 인스턴스가 생성되는 일련의 가정 (이때 클래스의 생성자 함수가 호출됨)
- 다형성(polymorphism) : 여러 객체 타입에 같은 기능을 정의할 수 있는 능력.

- 객체 인스턴스를 만들 때,
  ```javascript
  var person1 = new Person('Bob');
  var person2 = new Person('Sarah');
  ```

1. 일반적인 함수를 이용해 정의하는 방법
   ```javascript
   function createNewPerson(name) {
     var obj = {};
     obj.name = name;
     obj.greeting = function() {
       alert('Hi! I\'m ' + this.name + '.');
     };
     return obj;
   }
   ```
   - 생성자 함수를 사용하면 이렇게 작성이 가능
   ```javascript
   function Person(name) {
     this.name = name;
     this.greeting = function() {
       alert('Hi! I\'m ' + this.name + '.');
     };
   ```
   - 객체 인스턴스를 만들면 생기는 일 
   ```javascript
   {
     name: 'Bob',
     greeting: function() {
       alert('Hi! I\'m ' + this.name + '.');
     }
   }

   {
     name: 'Sarah',
     greeting: function() {
       alert('Hi! I\'m ' + this.name + '.');
     }
   }
   ```
   - 두개의 객체가 생성된다. 하지만 생성자 함수를 호출 할 때마다 매번 greeting()함수를 다시 정의한다.

2. Object() 생성자
   ```javascript
   var person1 = new Object();
   person1.name = 'Chris';
   person1['age'] = 38;
   person1.greeting = function() {
     alert('Hi! I\'m ' + this.name + '.');
   };

   //같은 방법 다른 방식으로 쓰기
   var person1 = new Object({
     name: 'Chris',
     age: 38,
     greeting: function() {
       alert('Hi! I\'m ' + this.name + '.');
     }
   });
   ```
   - 객체 인스턴스를 생성할 때 
   ```javascript
   var person2 = Object.create(person1);
   ```