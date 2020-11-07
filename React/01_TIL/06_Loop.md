# Loop
> 리액트에서 반복문을 쓰고 싶은 경우 , 자바스크립트의 map()함수를 주로 사용.

```javascript
   import React from "react";

   function Fruit({name, desc}){ 
     return (
       <h1>I like {name}</h1>
       <p>{desc}</p>
     )
   }

   const fruitInfos = [
     {
       name: "Orange",
       desc: "yummy and tasty"
     },
     {
       name: "Strawberry",
       desc: "yummy and tasty"
     },
     {
       name: "Watermelon",
       desc: "yummy and tasty"
     },
     {
       name: "Melon",
       desc: "yummy and tasty"
     }
   ]

   function App(){ //(1)
     return (
       <div>
       {
         fruitInfos.map((fruitInfo)=>{
            <Fruit name = {fruitInfo.name} desc = {fruitInfo.desc} />
         })
       }
       </div>
     )
   }

   export default App;
```

- return문에 자바스크립트를 사용하려면 {중괄호}를 사용한다. 변수를 그냥 쓰면 text로 읽힌다.