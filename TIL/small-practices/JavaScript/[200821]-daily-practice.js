// Math 기초 학습용 연습문제 - 출저: MDN
/*
  * Math 1
  * Let's start out by testing your knowledge of basic math operators. You will have to create four numeric values, 
  * then add the first two together, then subtract the fourth from the third, then multiply the two secondary results together to get a result of 48. 
  * Finally, we need to write a test that proves that this value is an even number.

  * So, try updating the live code below to recreate the finished example, following these steps:

  * Create four variables that contain numbers. Call the variables something sensible.
  * Add the first two variables together and store the result in another variable.
  * Subtract the fourth variable from the third and store the result in another variable.
  * Multiply the results from the last two steps together, storing the result in a variable called finalResult.
  * The product should be 48. If it isn't, you'll have to adjust some of the initial input values.
  * Finally, write a calculation that checks whether finalResult is an even number. Store the result in a variable called evenOddResult.
*/

let finalResult;

let evenOddResult;

// Add your code here

const number1 = 2;
const number2 = 4;
const number3 = 10;
const number4 = 18;

const sum = number1 + number2;
const subtract = number4 - number3;

finalResult = sum * subtract;

evenOddResult = 0;
evenOddResult == finalResult % 2;
// Don't edit the code below here!

section.innerHTML = " ";
let para1 = document.createElement("p");
let finalResultCheck =
  finalResult === 48 ? `Yes, well done!` : `No, it is ${finalResult}`;
para1.textContent = `Is the finalResult 48? ${finalResultCheck}`;
let para2 = document.createElement("p");
let evenOddResultCheck =
  evenOddResult === 0
    ? "The final result is even!"
    : "The final result is odd. Hrm.";
para2.textContent = evenOddResultCheck;

section.appendChild(para1);
section.appendChild(para2);

/*
  * Math 2
  * In the second task you are already provided with two calculations, with the results stored in the variables result and result2. 
  * But these results aren't what we want; you'll need to take the calculations and change them to give us what we want.

  * What do we want? After multiplying the two results together and formatting the result to 2 decimal places, the final result should be 10.42.

  * Try updating the live code below to recreate the finished example, following these steps:

  * Write a calculation that multiplies result and result2 together and assigns the result back to result. This will require assignment shorthand.
  * Write a line of code that takes result and formats it to 2 decimal places, storing the result of this in a variable called finalResult.
  * Check the data type of finalResult using typeof; you'll probably see that it is actually of string type! Write a line of code that converts it to a number type, 
  * storing the result in a variable called finalNumber.
  * The value of finalNumber needs to be 10.42. Go back and update the original calculations you were provided with so that they give this final result. 
  * Don't update the numbers or the operators.
*/

// Final result should be 10.42
// Add/update your code here

let result = (7 + 13) / (9 + 7);
let result2 = 100 / (2 * 6);

result *= result2;
const finalResult = result.toFixed(2); //toFixed()가 기억이 나지 않아서 인터넷에 쳐보았다
const finalNumber = Number(finalResult);

// Don't edit the code below here!

section.innerHTML = " ";
let para1 = document.createElement("p");
para1.textContent = `Your finalResult is ${finalResult}`;
let para2 = document.createElement("p");
let finalNumberCheck =
  isNaN(finalNumber) === false
    ? "finalNumber is a number type. Well done!"
    : `Ooops! finalNumber is not a number.`;
para2.textContent = finalNumberCheck;

section.appendChild(para1);
section.appendChild(para2);

/*
 * Math 3
 * In the final task for this article, we want you to write some tests. You've got three groups, each consisting of a statement and two variables.
 * For each one, write a test that proves or disproves the statement made.
 * Store the results of those tests in variables called weightComparison, heightComparison, and pwdMatch, respectively.
 */

// Statement 1: The elephant weights less than the mouse
let eleWeight = 1000;
let mouseWeight = 2;

const weightComparison = eleWeight < mouseWeight;

// Statement 2: The Ostrich is taller than the duck
let ostrichHeight = 2;
let duckHeight = 0.3;

const heightComparison = ostrichHeight > duckHeight;

// Statement 3: The two passwords match
let pwd1 = "stromboli";
let pwd2 = "stROmBoLi";

pwd1 === pwd2;
const pwdMatch = pwd1;

// Add your code here

// Don't edit the code below here!

section.innerHTML = " ";
let para1 = document.createElement("p");
let para2 = document.createElement("p");
let para3 = document.createElement("p");

let weightTest = weightComparison
  ? "True — elephants weight less than mice!?"
  : "False — of course an elephant is heavier than a mouse!";
let heightTest = heightComparison
  ? "True — an ostrich is indeed taller than a duck!"
  : "False — apparently a duck is taller than an ostrich!?";
let pwdTest = pwdMatch
  ? "True — the passwords match."
  : "False — the passwords do not match; please check them";

para1.textContent = weightTest;
section.appendChild(para1);
