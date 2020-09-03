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
