# Prop
> Prop이란 property의 줄임말로 부모 컴포넌트에 property를 정의 한 후 자식 컴포넌트에서 정보를 받아와 동적으로 정보를 사용할 수 있게 된다.

1. props로 자식에게 정보 전해주는 방법
   - `<childComp propertyName = {state명 }/>`
   - `<childComp propertyName = "정보"/>`
   - 자식컴포넌트에서 props 파라미터 입력 후 사용
   - 부모 컴포넌트에서 property는 여러개 보낼 수도 있음. 
   - string뿐만 아니라, boolean, array등 다양한 데이터타입 가능.

   ```javascript 
   import React from "react";

   function Food(props){ //(2)
     return <h1>I like {props.fav}</h1>
   }

   function App(){ //(1)
     return (
       <div>
        <Food fav="kimchi" keywords = {['yummy', 'home-made', 'korean']} />
        <Food fav="egg"/> 
        <Food fav="noodles"/> 
       </div>
     )
   }

   export default App;
   ```

   - (1) fav, keyword가 property이고 kimchi, ['yummy', 'home-made', 'korean']가 value
   - (2) 여기서 props란 App() 즉, 부모 컴포넌트에서 받은 속성들을 일컫는다. - fav, keywords
   - (2) 만약에 props란 파라미터 대신 props의 property를 바로 가져오는 방법은? `{ fav }` - destructuring 

2. Props에 key를 주는 방법은?
   - key라는 prop을 만든 다음 값을 부여하면 된다. 이건 따로 사용되지 않고, 그저 우리가 리액트에게 각 엘리먼트가 서로 다르다는 것을 알려주기 위함으로 사용된다
   - `<Food key = {foodInfo.id} />`
   - 예시는 [06_Loop.md](./06_Loop.md)에 있다.


## PropTypes 
> Prop-types는 내가 전달받은 props가 내가 원하는 props인지를 확인해줌.

1. 설치하는 방법
   - `npm i prop-types`
   - package.json에서 설치가 되었는지 확인한다.
   - 제대로 작동이 안되면? `npm i` 후 `npm start`로 서버 재시작.

2. 사용방법

  ```javascript
   import React from "react";
   import propTypes from "prop-types"; //(1)

   function Fruit({name, desc, rating}){ 
     return (
       <h1>I like {name}</h1>
       <strong>{rating}/5.0</strong>
       <p>{desc}</p>
     )
   }

   Fruit.propTypes = { //(2)
     name: PropTypes.string.isRequired,
     desc: desc.string.isRequired,
     rating: rating.number.isRequired
   }

   const fruitInfos = [
     {
       id: 1,
       name: "Orange",
       desc: "yummy and tasty",
       rating: 2.5
     },
     {
       id: 2,
       name: "Strawberry",
       desc: "yummy and tasty"
       rating: 4.0
     },
     {
       id: 3,
       name: "Watermelon",
       desc: "yummy and tasty"
       rating: 3.2
     },
     {
       id: 4,
       name: "Melon",
       desc: "yummy and tasty"
       rating: 5.0
     }
   ]

   const renderFruit = (fruitInfo) => {
     return <Fruit key = {fruitInfo.id} name = {fruitInfo.name} desc = {fruitInfo.desc} rating = {fruitInfo.rating}/>
   }

   function App(){ //(1)
     return (
       <div>
       {fruitInfos.map(renderFruit)}
       </div>
     )
   }

   export default App;
``` 
- (1) prop-types를 import 해준다.
- (2) 컴포넌트이름.propTypes라고 적고 안에 체크해야할 사항을 적어준다.
- prop types는 data type뿐 만 아니라 prop이 제대로 전달이 되었는지도 확인해준다.