# 팝업창 구현 연습

- Updates
  [2020.09.02]
  - 지금까지 배운 DOM Event를 복습하기 위해 간단한 팝업창을 만들어 보았다.

---

![popup](img/popup.jpg)

```javascript
const openPopUp = document.querySelector(".pop-up-btn");
const popUp = document.querySelector(".pop-up-wrapper");
const closePopUp = document.querySelector(".pop-up-close");

openPopUp.addEventListener("click", () => {
  popUp.style.display = "block";
});

closePopUp.addEventListener("click", () => {
  popUp.style.display = "none";
});

popUp.addEventListener("click", () => {
  popUp.style.display = "none";
});
```

- 버튼에 이벤트리스너를 추가하여 버튼을 클리시, 팝업창의 `display`가 변화하도록 구현해 보았다.
