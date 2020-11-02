# Why JSX?
- Rendering logic is inherently coupled with other UI logic.
- Instead of putting markup and logic in seperate files, react coupled units with the term 'components'.
- React DOESN'T REQUIRE using JSX, but people find it HELPFUL as a visual aid and also allows to get error and warning messages easier.

### Embedding Expressions in JSX
1. You can put any valid JS expression inside the curly brases in JSX.
   ```jsx
   const name = 'Kim';
   const greeting = <p>Hello, I am {name}</p>
   ```
   + in the JSX
   + 2 + 2 - allowed
   + user.firstName - allowed
   + Greeting(user) - allowed
   + HTML을 동적으로 만들기 용이하다.
   + 변수 안에 import를 통해 이미지를 담을 수 있다.
   + 모든 속성 안에 데이터 바인딩 할 수 있다 {}. className에도 가능.
  
2. You can use JSX inside of `if` statements, `for` loops, assign it to variables, accept it as arguments, and return it from functions.
   
### Specifying Attributes with JSX
1. use as normal CSS. 
   + but, use camelCase for property. Ex. tab-index (x) tabIndex
2. use curly brases to embed a JS expression in an attribute.
   + Don't put quotes around { }.
   + inline-style을 작성할 경우 object형식으로 작성해야한다.
   ```jsx
   <div style={{color: 'blue', fontSize : '30px'}}>
   ```


#### ETC
- className - class

   
