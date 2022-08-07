# Image Slide

### 2020년 9월 15일 : 변수에 대하여

```javascript
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const slideContainer = document.querySelector(".image-slides");
const slides = document.querySelectorAll(".slide");

prevButton.addEventListener("click", () => {
  slideContainer.append(slideContainer.firstElementChild);
  slides.forEach((slide) => {
    slide.classList.add("hidden");
  });

  slideContainer.firstElementChild.classList.remove("hidden");
});
```

처음 코드를 작성한 이후, slideContainer.firstElementChild를 변수를 선언하는게 낫다고 생각하여 변수를 만들어 보았다.  
`let firstSlide = slideContainer.firstElementChild`라고 선언하고 다시 코드를 작성해 보았다.

```javascript
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const slideContainer = document.querySelector(".image-slides");
const slides = document.querySelectorAll(".slide");

prevButton.addEventListener("click", () => {
  let firstSlide = slideContainer.firstElementChild;
  slideContainer.append(firstSlide);
  slides.forEach((slide) => {
    slide.classList.add("hidden");
  });

  firstSlide.classList.remove("hidden");
});
```

이렇게 하니 작동은 그대로 되었지만 hidden 클래스를 받는 순서가 달라졌다. 고민을 해보고 console.log에 적어서 확인해보니 무엇이 문제였는지 깨달았다. 변수를 선언하기 전에는 첫 이미지를 뒤로 보내고 다시 첫 이미지(= 두번째였던 이미지)를 찾은 후 hidden 클래스를 제거해 준다.

하지만 변수를 선언해 주면, 변수에 값을 **저장**해준다. 즉, 첫번째 이미지를 변수에 저장해줬기 때문에 변수를 사용하면 append()메소드를 쓰고 난 후 **저장되어 있던 첫번째 이미지(=첫번째 이미지)**가 그대로 사용하게 된다.

실전예제로 공부해보니, 개념을 배울 때는 분명 변수가 무엇인지 값을 할당한다는게 무슨 의미인지 잘 안다고 생각했지만 전혀 아니었다. 앞으로는 변수를 선언할 때 무엇을 선언할 수 있고, 아닌지 파악할 수 있게 될거 같다!
