# Styling React Component

1. inline style
   - property로 style을 넣고 스타일링한다.
   - 장점: 심플.
   - 단점: 유지보수 어려움. 코드가 지저분해보임. 

2. CSS파일을 만들고 import해온다.
   - className으로 작업.
   - App.module.css로 저장하게 되면 object처럼 사용할 수 있고, 모듈이기 때문에 클래스네임이 같더라도 충돌이 일어나지 않음.
   - 예시. `import s from './css/App.module.css'; className = { s.title }`
   - 장점: 쉽고 간편하다, 대부분 작은 프로젝트에 사용됨. 
   - 단점: 큰 프로젝트에서는 관리하기 어려울 수 있음.

3. SCSS 사용 
   - npm install node-sass
   - sass 작성
   - `import '../styles/App.scss'`

4. Styled-Component
   - npm install --save styled-components
   - import styled from 'styled-components';
   - 장점: 같은 파일에서 사용가능, autocomplete은 익스텐션으로 가능.
  ```javascript
    const post = styled.h1 `
       background-color: "black";
       font-size: 20px;
    `
  ```
    