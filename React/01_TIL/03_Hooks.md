# Hooks
>React Hooks는 함수형 컴포넌트에서도 상태관리(useState)를 할 수 있고 렌더링 직후 작업을 설정하는 useEffect 등의 기능을 제공한다.
- Hook은 최상위에서만 호출해야 한다. 반복문, 조건문, 중첩된 함수 내에서 Hook을 실행하면 안된다.
- 리액트 함수 컴포넌트 내에서만 Hook을 호출해야한다. (혹은, 직접 작성한 custom Hook내에서만 가능)

1. State Hook 

   ```javascript
   // 1. Hook 호출
   import React, { useState } from 'react'; 

   function Example() {
     // 2. "count"라는 새 상태 변수를 선언
     const [count, setCount] = useState(0);

     return (
       <div>
         <p>You clicked {count} times</p>
         <button onClick={() => setCount(count + 1)}>
           Click me
         </button>
       </div>
     );
   }
   ```
   - useState는 hook으로 현재의 state 값과 이 값을 업데이트하는 변경함수를 쌍으로 제공한다. (when useState(initialState)is invoked, it returns an array)
   - 여기서 count는 상태변수이고, setCount는 변경함수이다.

   1.1 State Hook의 장점   
   원래 데이터가 변경되면 HTML이 새로고침이 된다. 하지만 state hook을 사용하면 재 렌더링이 된다. 즉, 새로고침이 이루어 지지 않고 데이터가 업데이트 된다. 
   - 자주 바뀌지 않는 것은 변수에 담고, 상태관리가 필요한 것은 state로 저장한다.

   1.2 setState 활용하기 [ = 상태 변경하기 ] 
   - 함수를 만든다.
   - ++중요 Deep Copy를 한다. (because state data should be immutable data)
   - 변경한 값을 변경함수에 넣어준다. ex. 변경함수(변경한값)

2. useEffect
   > when the state changed, or state first render it gives extra function. 
```javascript
   // 1. Hook 호출
   import React, { useState, useEffect } from 'react'; 

   function Example() {
     // 2. useEffect 호출 - state가 처음 렌더링 되었을 때, 두번째 파라미터는 [] empty array이다.
     useEffect(()=>{console.log('this will work when first render')},[]);

    // 2. useEffect 호출 - state가 변경되었을 때, 즉 arr에 state를 적으면 useEffect는 state를 관찰하게 되는 것이다.
    useEffect(()=>{console.log('this will work when state updates')},[state])

     return (
       <div>
         <p>You clicked {count} times</p>
         <button onClick={() => setCount(count + 1)}>
           Click me
         </button>
       </div>
     );
   }
   ```
   - 실제 사용도: 예를 들어서 state가 검색과 관련된 경우. 검색을 할 때마다 연관검색어를 보여주는 기능을 만들 수 있다.