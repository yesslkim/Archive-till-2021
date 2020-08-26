# Web Accessibility - HTML
- Updates
  - [2020.08.26] - 시맨틱 마크업의 장점, 일부 태그의 웹 접근성에 대해 공부 출저: mdn
  

---
## 시맨틱 마크업의 장점🔊

1. easier to develop with : easy to understand and get some functionality for free
2. better on mobile - semantic HTML is arguably lighter in file size than non-semantic code and easier to make responsive
3. good for SEO 

## 직관적인 언어의 중요성🔎

1. don't use dashes : ex) 5-7 ⇒ 5 to 7
2. expand abbreviations : ex) Jan ⇒ January
3. expand acronyms, at least once or twice. : ex) HTML ⇒ Hypertext Markup Language.

## Building keyboard accessibility back in

- 꼭 필요할 때만 쓰는게 좋다.
- `tabindex="0"` —  elements that are not normally tabbable ⇒ tabbable.
- `tabindex="-1"` — this allows not normally tabbable elements ⇒ receive focus programmatically, e.g., via JavaScript, or as the target of links.

## `<a>`태그

```html
<--good example//-->
<p>Whales are really awesome creatures. 
	<a href="whales.html">Find out more about whales</a>.
</p>
```

- `<a>`태그에 click here라고 쓰기 보다는 설명문을 적는게 좋다.
- 링크태그에는 '링크'라는 텍스트를 넣는건 안좋다! 스크린리더에서 `<a>`태그를 링크라고 읽어준다.
- link 상태: default, visited, and focus/active - 컬러 뿐만 아니라 background-color도 필요
- 링크가 새로운 페이지나 새로운 파일 형식을 여는 경우 이를 명시해줘야한다.

```html
<a target="_blank" href="[https://www.wikipedia.org/](https://www.wikipedia.org/)">Wikipedia (opens in a new window)</a>

<a target="_blank" href="2017-annual-report.ppt">2017 Annual Report (PowerPoint)</a>
```

## `<form>`태그

```html
<div>
  <label for="name">Fill in your name:</label>
  <input type="text" id="name" name="name">
</div>
```

## `<table>`태그

- adding a `<caption>` to table - summary of the table
- adding a structure - `<thead>`, `<tfoot>`, and `<tbody>`
- using column and row headers - `<th sope = "col">` or `<th scope = "row">`

## `<img>`태그

- 직관적으로 alt 속성을 적어준다.
- 의미없는 이미지는 alt를 비워주거나 CSS background-image로 넣어준다.
- title attribute: 추가적으로 적어줘야할 사항들. 스크린 리더가 읽어주고, 마우스 오버시 텍스트 생성.
- alt text가 제공하는 text paragraph과 같은 경우 : aria-labelledby와 id를 연결해준다.

  ```html
  <img src="dinosaur.png" aria-labelledby="dino-label">

  <p id="dino-label">The Mozilla red Tyrannosaurus ... </p>
  ```

- `<figure>` `<figcaption>` CSS스타일링에 유용하지만 아직 스크린 리더는 적용이 안된다.

  ```html
  <figure>
    <img src="dinosaur.png" alt="The Mozilla Tyrannosaurus">
    <figcaption>A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth.</figcaption>
  </figure>
  ```

## skip nav - `<header>`전에 있음
- 빠르게 훑어볼 수 있도록 도와줌.
- example:

  ```html
  <div id="skip"><a href="#content">Skip to Main Content</a></div>
  ```

  ```css
  #skip a
  {
  position:absolute;
  left:-10000px;
  top:auto;
  width:1px;
  height:1px;
  overflow:hidden;
  }
   
  #skip a:focus
  {
  position:static;
  width:auto;
  height:auto;
  }
  ```