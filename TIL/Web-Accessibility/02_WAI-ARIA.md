# Web Accessibility - HTML
- Updates  
  출저: WAI-ARIA Authoring Practices 1.2
  - [2020.08.26] - WAI-ARIA 랜드마크 및 속성 사용방법  
  

---
## 랜드마크 (role)

- 특정장소로 바로 이동하거나 돌아올수 있도록 하는 표식.
- **HTML sectioning element**를 사용하면 자동으로 랜드마크를 생성한다. (**이걸 먼저 권장**)

example : `aside`, `footer`, `header`, `nav`, `section`이 있다.

- **ARIA 랜드마크 역할 (Role)**

1. `aside` ⇒ complementary

2. `footer` ⇒ contentinfo 

3. `header` ⇒ banner

4. `main` ⇒ main

5. `nav` ⇒ navigation

6. `section` ⇒ aria-labelledby or aria-label을 사용하여 접근 가능한 이름을 부여.

## 랜드마크를 적용할 수 있는 3단계

1. 논리적으로 구조를 파악한다.
2. 각 영역에 랜드마크 역할을 부여한다.
- `banner`,`main`,`complementary`,`contentinfo` 역할을 할당하되   
무조건 `<body>`태그 바로 아래 태그여야만 한다. 랜드마크 안에는 또 다른 랜드마크가 형성 될 수 없다. 
3. 영역에 레이블 지정
- 한 페이지에 특정 랜드마크 역할이 두 번 이상 사용될 경우:
- 고유한 레이블을 제공해야한다.
- **aria-labeledby :** 간접적인 방법. 헤딩 태그와 연결.
- **aria-label :** 직접적인 방법. 태그 내에 레이블 부여
- 시맨틱 마크업에 role을 적용할 경우 시맨틱 태그를 레이블로 사용 x

## 랜드마크 영역
- 조건: 위에서 언급했듯이, 랜드마크는 중첩될 수 없고 `<body>` 직계 자식 태그에게만 부여 가능
- 조건2: 두개 이상의 같은 랜드마크가 있는 경우 레이블 지정을 해서 구별해줘야한다.  
- 태그에 `aria-labelledby` 혹은 `aria-label` 속성을 사용해준다.  
단, 일부 랜드만크는 한번만 사용할 수 있는 경우도 있다.

### (1) Banner - 로고, 검색도구가 있는 영역 = `<header>`

- `<header>`를 사용하는 것이 가장 좋다.
- 페이지의 시작영역
- 조건: 페이지에 배너 랜드마크는 한번만 사용가능
- 예외: iframe or frame 과 같이 중첩되는 경우

### (2) Complementary - 부차적인 정보, 떼어내도 독립적 = `<aisde>`

- `<aside>`사용하는 것이 가장 좋다.
- 조건: 다수의 complementary 사용 가능.

### (3) Contentinfo - 저작권, 개인정보보호 = `<footer>`

- `<footer>`사용하는 것이 좋다
- 조건: 페이지 내에 한번만 사용가능.

### (4) form - `form`영역 중에 검색영역이 아닌 것

- example: 로그인 폼
- 조건1: 검색 기능일 경우 `role=search`
- 조건2: 랜드마크 레이블로는 `aria-labelledby`를 사용하여 제목과 연결해주고 (헤딩태그), 주로 레전드태그와 연결이 된다.
- 조건3: form내에 컨트롤은 시맨틱하게 마크업 해야한다.

```html
<form aria-labelledy="login">
<fieldset>
<legend id="login"> 로그인 </legend>
<!---로그인 관련 폼 --->
</fieldset>
</form>
```

### (5) Main - `<main>`

- `<main>`태그를 사용하는 것이 좋다.
- 조건: 페이지 내에 하나만 사용해야한다.

### (6) Navigation - `<nav>`

- 조건: 하나의 <nav>사용시,직관적이기 때문에, aria-labeledby로 연결 안해줘도 된다. 
- 둘 이상의 랜드마크를 포함하는 경우 고유한 레이블 필요

```html
<nav aria-labelledby="nav1">
  <h2 id="nav1"> navigation1에 관련된 제목 </h2>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
</nav>
<nav aria-labelledby="nav2">
  <h2 id="nav2"> navigation2에 관련된 제목 </h2>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
</nav>
```

- `<nav>`태그를 사용하지 못할 때 쓰는데 role속성이다.

### Region - `<section>`

- `<section>`태그는 콘텐트의 주제별 그룹

  example: chapters, news items, contact information etc

- 조건1:  '영역'이라고 읽어주기 때문에 **레이블을 꼭 가져야한다.**
- 마크업하는 방법은 위의 방식과 같다.

### Search 
- 조건1: 검색기능이 되는 경우에만 사용 가능
- 조건2: 두개 이상일 경우 고유한 레이블 필요. aria-label사용
- 태그 내에 role="search"라고 쓴다.