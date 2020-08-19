const task3Element = document.getElementById("task-3");

function one() {
  alert("hello!");
  addEventListener.task3Element;
}

function greet(name) {
  alert("hello" + " " + name);
}

one();
greet("mike");

function employee(num1, num2, num3) {
  const sum = "num1" + "num2" + "num3";
  alert(sum);
}

employee();

/*
 * addEventListener의 사용법에 대해 다시 숙지할 것
 * ``백틱의 사용방법은 기억났지만, ${}함수 불러내는 방법을 까먹었었다.
 * return에 대해 다시 자세히 공부할 것
 * 전체적으로 function에 대해 이해하지 못한 채 풀어본 예제라 풀면서도 이해가 안가서 다시 복습해야할 것 같다.
 */

//정답

function combine(str1, str2, str3) {
  const combinedText = `${str1} ${str2} ${str3}`; // 백틱 사용할 것
  return combinedText;
}

task3Element.addEventListener("click", greet); //이벤트리스너

const combinedString = combine("Hi", "there", "!"); //다시한번 참고해야할 것
alert(combinedString);
