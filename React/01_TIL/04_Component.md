# Component

1. 컴포넌트란?
   - 재활용 가능한 UI를 위한 템플릿. HTML을 반환하는 함수이다.
   - 컴포넌트를 만들면 관리가 편해지지만, 꼭 필요한 것만 컴포넌트화 하는게 좋다. 예를 들면, 반복적으로 출현하는 것에 만드는게 좋다.
   - 자주 바뀌는 UI도 컴포넌트화 하면 그 부분만 재렌더링하면 성능적으로 좋다 
   - 컴포넌트의 단점: 상위 컴포넌트에서 만든 state를 쓸 때 복잡해짐. props라는 문법을 사용하여 state를 해당 컴포넌트까지 전해줘야 사용 가능함.

2. 컴포넌트 유의사항
   - 이름은 대문자로 시작한다. ★★★★★★
   - return() 안에는 태그 하나로 묶어야 한다.
   - <div></div>로 묶기 싫으면 fragment로 묶는다 <> </>
   - 리액트 어플리케이션은 컴포넌트 하나만 렌더링 해야되기 때문에 모든 컴포넌트는 App 컴포너트 안에서 이루어 진다.


3. 컴포넌트 만드는 방법
   - 컴포넌트를 위한 함수를 만든다
   - return에 원하는 HTML 템플릿을 넣는다
   - 원하는 곳에 <함수명/>이라고 기입

```javascript
// 컴포넌트의 형태
function Modal(){
  return (
    <div className="modal">
      <h2>제목</h2>
      <span>날짜</span>
      <p>싱세내용</p>
    </div>
  )
} 

// 사용시
<Modal></Modal>
<Modal/>
```
   - UI와 관련된 중요 정보들을 state로 저장해놓고
   - state에 따라서 UI가 수정되게 만들면 된다.
 
 

4. Class Component
   ```javascript
   import React from "react";

   class App extends React.Component {
     state = {
        count: 0
     }; //(1)
     add = () => this.setState(current => ({count: current.count + 1}));
     minus = () => this.setState(current => ({count: current.count - 1})); //(3)
     render(){
       return (
          <div>
             <h1> I am number {this.state.count} </h1> //(2)
             <button type="button" onClick = { this.add }> Add </button>
             <button type="button" onClick = { this.minus }> Minus </button>
          </div>
       )
     }
   }

   export default App;
   ```
   - 매 순간 setState를 호출할 때 마다 리액트는 새로운 state와 함께 render function을 호출함.
   - (1) 바꿀 데이터는 state에 저장한다.
   - (2) state를 사용하기 위해서는 이렇게 사용함.
   - (3) state를 업데이트 하기 위해서는 setState()를 사용한다.
   - (3) setState()에서 직접적으로 state를 가져오는것은 좋지않다. (예시. this.state.count) current에서 상태를 받은 다음 업데이트 하는 것이 좋다.

5. Life Cycle Method
   - life cycle method는 기본적으로 리액트가 컴포넌트를 생성하는 그리고 없애는 방법이다.
  ```javascript
  componentDidMount(){};
  componentDidUpdate(){};
  componentWillUnmount(){};
  ```
  - 처음 렌더링 할 때는 render()함수가 호출된다.
  - 렌더링이 완료 되면  componentDidMount()호출 된다.
  - 업데이트 될 때마다 componentDidUpdate()호출 된다.