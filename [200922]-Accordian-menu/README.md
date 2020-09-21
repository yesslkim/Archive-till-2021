# Login Form

### 2020년 9월 22일 : 간단한 아코디언 구현해보기

출저 : W3School [https://www.w3schools.com/howto/default.asp](https://www.w3schools.com/howto/default.asp)

느낀점 : 생각보다는 간단했던 아코디언 구현해보기. 이 역시 클릭 시, 오픈하는
형태이기 때문에 지금까지 구현했던 예제들과 거의 비슷하다고 생각한다

```javascript
const accordianBtns = document.querySelectorAll(".accordian-title button");

accordianBtns.forEach((accordianBtn, index) => {
  accordianBtn.addEventListener("click", (e) => {
    const accText = e.target.parentElement.nextElementSibling;
    if (accText.style.display === "block") {
      accText.style.display = "none";
      accordianBtn.classList.toggle("open");
    } else {
      accText.style.display = "block";
      accordianBtn.classList.toggle("open");
    }
  });
});
```

한가지 다른점이 있다면 CSS에서 새로운 점을 배웠다.

**문제점** 토글버튼의 `+`사인은 사실상 문서적으로만 봤을 때는 의미가 없기 때문에 CSS에서 after 가상요소를 활용하여 button의 after에 `+`를 넣었다.

근데 대부분의 아코디언 형태는 아코디언을 펼쳤을 때,
`+` 사인이 `-` 사인으로 바뀌게 된다. 이걸 자바스크립트로 제어하려고 했을 때 내가 원하는 방식으로 제어할 수가 없었다.

**해결점**
생각보다 간단히 CSS에 클래스를 부여하는 방식으로 가상요소의 속성을 변경할 수 있었다. 그리고 if문에 아코디언 텍스트의 display에 따라 버튼에 클래스를 부여하고 말고를 결정하면 됐었다!

```css
.accordian-title button.open::after {
  content: "―";
}

.accordian-title button::after {
  display: block;
  padding: 10px;
  color: #fff;
  font-size: 20px;
  font-weight: 800;
  content: "＋";
}
```

**새로 배운 점**

검색을 하다가 알게된 점

1. `window.getComputedStyle(element[,pseudoElt])`

- 스타일 정보를 가져올 수 있다. pseudoElt는 옵션이며 여기에서 가상요소의 스타일 정보를 가져 올 수 있다.

example

```javascript
const = document.querySelector('.accordian-title button')
window.getComputedStyle(button, ":after")
```
