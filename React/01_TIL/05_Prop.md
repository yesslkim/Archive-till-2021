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