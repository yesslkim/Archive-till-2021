# Small Quiz 창 구현 연습

- Updates
  [2020.09.02]
  - 지금까지 배운 DOM Event 중 form event에 대해 배운 내용을 복습하기 위해 퀴즈창을 구현해보았다.

---

![popup](img/quiz.jpg)

```javascript
const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const correctAnswer = ["answer2", "answer1", "answer1", "answer1"];
  const userAnswer = [
    form.question1.value,
    form.question2.value,
    form.question3.value,
    form.question4.value,
  ];
  let score = 0;

  correctAnswer.forEach((answer, index) => {
    if (answer === userAnswer[index]) {
      score += 25;
    }
  });

  const result = document.querySelector(".result");
  result.style.display = "block";
  result.querySelector(".result-score").textContent = `${score}%`;
});
```

[2020.09.03] - 배열을 이용하여 유저가 보낸 form의 value가 정답과 일치하는지 확인 및 점수를 더하는 것을 구현

### 구현해볼 예정인 것

- [ ] `setInterval`을 이용해 점수판이 0점부터 유저가 받은 점수로 올라가는 것.
