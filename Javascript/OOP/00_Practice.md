# 연습문제 모음
- 문제: 
    - 몇 개의 객체를 더 생성하는 코드 작성
    - 생성된 객체 인스턴스의 멤버들 사용하고 변경해보세요
    - bio()의 대명사 'He'를 성별에 따라 다르게 보여주기
    - interests 는 항상 두개만 출력됨 => 이를 해결할 방법은? 
```javascript
  function Person(first, last, age, gender, interests) {
    this.name = {
      'first': first,
      'last': last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function () {
      alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    };
    this.greeting = function () {
      alert('Hi! I\'m ' + this.name.first + '.');
    };
  }

  var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
```
- 내 답안:
```javascript
    function Person(first, last, age, gender, interests) {
    this.name = {
      'first': first,
      'last': last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function () {

      this.gender === 'male' ? target = 'He' : target = 'She'
      const likes = this.interests.map((interest, index) => {
        if (index >= this.interests.length - 1) {
          return `and ${interest}`
        }
        return interest
      })
      alert(`${this.name.first} ${this.name.last} is ${this.age} years old. ${target} like ${likes}.`)
    };
    this.greeting = function () {
      alert('Hi! I\'m ' + this.name.first + '.');
    };
  }

  const person2 = new Person('Ye Seul', 'Kim', 27, 'female', ['walking', 'music', 'skiing', 'flower']);
  const person3 = new Person('David', 'Kim', 20, 'male', ['game', 'music', 'sleeping']);
```

- 모범답안
  - 우선 성별은 F, f, M, m 으로도 구별가능하고 대문자 소문자도 생각해야 한다.
```javascript
  if(this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
    pronoun = 'He likes ';
  } else if(this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
    pronoun = 'She likes ';
  } else {
    pronoun = 'They like ';
  }
```
- 관심사 전체 입력
```javascript
  if(this.interests.length === 1) {
    string += this.interests[0] + '.';
  } else if(this.interests.length === 2) {
    string += this.interests[0] + ' and ' + this.interests[1] + '.';
  } else {
    // if there are more than 2 interests, we loop through them
    // all, adding each one to the main string followed by a comma,
    // except for the last one, which needs an and & a full stop
    for(var i = 0; i < this.interests.length; i++) {
      if(i === this.interests.length - 1) {
        string += 'and ' + this.interests[i] + '.';
      } else {
        string += this.interests[i] + ', ';
      }
    }
  }
```

- 답안 보고 다시 만들어본 답
```javascript
   function Person(first, last, age, gender, interests) {
    this.name = {
      'first': first,
      'last': last
    };
    this.age = age;
    this.gender = gender.toLowerCase();
    this.interests = interests;
    this.bio = function () {
      let pronoun;
      const firstLetterOfGender = [...this.gender][0];
      if (firstLetterOfGender === 'm') {
        pronoun = 'He likes'
      } else if (firstLetterOfGender === 'f') {
        pronoun = 'She likes'
      } else {
        pronoun = 'They like'
      }

      let sentence = `${this.name.first} ${this.name.last} is ${this.age} years old. ${pronoun} `

      this.interests.map((interest, index) => {
        if (index >= this.interests.length - 1) {
          return sentence += `and ${interest}.`
        }
        return sentence += `${interest}, `
      })

      alert(sentence)
    };
    this.greeting = function () {
      alert('Hi! I\'m ' + this.name.first + '.');
    };
  }
```

https://github.com/mdn/learning-area/blob/master/javascript/oojs/introduction/oojs-class-further-exercises.html