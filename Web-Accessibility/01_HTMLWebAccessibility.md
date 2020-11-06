# Web Accessibility - HTML

- Updates
  - [2020.08.26] - 시맨틱 마크업의 장점, 일부 태그의 웹 접근성에 대해 공부 출저: mdn
  - [2020.09.02] - 접근 가능한 이름과 설명에 대해 공부

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
- `tabindex="0"` — elements that are not normally tabbable ⇒ tabbable.
- `tabindex="-1"` — this allows not normally tabbable elements ⇒ receive focus programmatically, e.g., via JavaScript, or as the target of links.

## `<a>`태그

```html
<--good example//-->
<p>
  Whales are really awesome creatures.
  <a href="whales.html">Find out more about whales</a>.
</p>
```

- `<a>`태그에 click here라고 쓰기 보다는 설명문을 적는게 좋다.
- 링크태그에는 '링크'라는 텍스트를 넣는건 안좋다! 스크린리더에서 `<a>`태그를 링크라고 읽어준다.
- link 상태: default, visited, and focus/active - 컬러 뿐만 아니라 background-color도 필요
- 링크가 새로운 페이지나 새로운 파일 형식을 여는 경우 이를 명시해줘야한다.

```html
<a
  target="_blank"
  href="[https://www.wikipedia.org/](https://www.wikipedia.org/)"
  >Wikipedia (opens in a new window)</a
>

<a target="_blank" href="2017-annual-report.ppt"
  >2017 Annual Report (PowerPoint)</a
>
```

## `<form>`태그

```html
<div>
  <label for="name">Fill in your name:</label>
  <input type="text" id="name" name="name" />
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
  <img src="dinosaur.png" aria-labelledby="dino-label" />

  <p id="dino-label">The Mozilla red Tyrannosaurus ...</p>
  ```

- `<figure>` `<figcaption>` CSS스타일링에 유용하지만 아직 스크린 리더는 적용이 안된다.

  ```html
  <figure>
    <img src="dinosaur.png" alt="The Mozilla Tyrannosaurus" />
    <figcaption>
      A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a
      human, with small arms, and a large head with lots of sharp teeth.
    </figcaption>
  </figure>
  ```

## skip nav - `<header>`전에 있음

- 빠르게 훑어볼 수 있도록 도와줌.
- example:

  ```html
  <div id="skip"><a href="#content">Skip to Main Content</a></div>
  ```

  ```css
  #skip a {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }

  #skip a:focus {
    position: static;
    width: auto;
    height: auto;
  }
  ```

## 접근 가능한 이름과 설명

1. 요소의 목적이나 의도를 전달
2. focus-able element, interactive element
3. 요소의 추가정보를 전달 할때 - 입력필드에 대한 지시사항, 요구사항 (placeholder)

스크린 리더가 이름과 설명을 읽는 순서

요소의 이름 > 역할 > 상태를 낭독

접근가능한 이름 혹은 설명을 넣는 방법

- 보이는 텍스트를 이용한다 - 속성을 이용하는 거보다 좋은 이유는, 만약에 유지보수를 할 때 속성은 업데이트가 안될 수도 있기 때문이다.
- HTML 속성이나 태그를 사용할 수 있다면 사용하는게 좋다 - ex. form의 label 요소, 표에 대한 caption요소
- 폴백 메서드에 기대는 것은 좋지 않다 - 만약에 의도된 요소 및 속성을 활용하여 접근 가능한 이름을 짓지 않는 경우, 브라우저는 이름을 생성하기 위한 폴백 메서드에 기대어 보조 기술 사용자를 도우려 시도한다. HTML의 `title` 속성 혹은 `placeholder` 속성은 접근 가능한 이름이 없을 경우 최후의 수단으로 사용되지만 이는 최후의 수단이기 때문에 저품질의 접근 가능한 이름을 산출한다.
- 간단 명료하게 작성하는게 좋다

접근 가능한 이름 지정 기법

- 자식 콘텐츠로 이름 지정 : 특정 요소는 포함하고 있는 contents로 부터 이름을 가져옴

**이름을 가져오는 요소들모음**

button / cell / checkbox / columnheader / gridcell / heading / link

menuitem (자식 `menu` 요소에 포함된 콘텐트는 제외 됨.) / menuitemcheckbox / menuitemradio

option / radio / row / rowheader / switch / tab / tooltip / treeitem (자식 `group` 요소에 포함된 콘텐트는 제외 됨.) / aria-lable / aria-labelledby / label / legend

**문제점 모음:**

1. <a></a> 안에 자식 컨텐츠는 모두 앵커 요소로 인식됨. 문제는 접근가능한 이름과 설명의 특징으로 간단 명료하게 작성하는게 좋다는 특징이 있는데, 앵커 요소에 여러 문장을 넣게 되면 이를 위배하게 됨. ⇒ aria-label or aria-labelledby로 연결하는 것이 좋음.
2. <tag></tag> 따로 설명 컨텐츠 없이 오직 css로 스타일링만 해줘도 위배됨. 정확한 설명이 없기 때문에 설명이 꼭 필요함.

- `aria-label` : 시각적 컨텐츠가 없을 시, 이름 대신 사용할 수 있는 요소.
- `aria-labelledby` :

브라우저가 접근 가능한 이름의 우선순위를 따질 때, 가장 높은 순위를 가진다. 자식 콘텐츠의 이름을 지정하는 거보다 높다. 숨겨진 컨텐츠도 가능

- `<label>` from form

1. 레이블 요소로 인풋을 감싼다.
2. id와 for속성을 이용한다.

- `<legend>`

1. form의 제목역할, input을 그룹화하는데 사용

- `<caption>` from table

1. table의 접근가능 한 설명. 테이블의 제목을 `aria-labelledby`로 연결해 놓으면 캡션은 자동적으로 접근가능한 설명이 된다. 하지만 제목이 없는 경우(`aria-labelledby`로 연결이 안된 경우) 자동적으로 테이블의 이름이 된다.

- `<figcaption>` from figure

1. 접근 가능한 이름이 없는 경우 `<figcaption>`역시 `<figure>`의 이름이 될것이다. 그러나 제목이 있는 경우 `<figcaption>`은 접근 가능한 설명이 되지 않는다. 접근 가능한 설명이 되기 위해서는 `aria-describedby`로 참조해야한다.

- 폴백이름 개선 방법

좋은 방법이 아니기 때문에 권장하지는 않음. 마우스가 없는 경우 접근이 어려움.
