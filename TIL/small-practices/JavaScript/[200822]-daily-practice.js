// Strings 기초 학습용 연습문제 - 출저: MDN

/* Strings 1
 * In our first strings task, we start off small. You already have half of a famous quote inside a variable called quoteStart; we would like you to:

 * Look up the other half of the quote, and add it to the example inside a variable called quoteEnd.
 * Concatenate the two strings together to make a single string containing the complete quote. Save the result inside a variable called finalQuote.
 * You'll find that you get an error at this point. Can you fix the problem with quoteStart, so that the full quote displays correctly?

 * Try updating the live code below to recreate the finished example:
*/

// Add your code here

let quoteStart = "Don't judge each day by the harvest you reap";
// 같은 따옴표를 사용하여서 don까지밖에 인식이 안되고 error가 뜨기 때문에 이를 escaping character로 고침
// 추가 +) vscode는 저장버튼을 누르니 따옴표를 자동으로 다르게 바꿔줌
const quoteEnd = "but by the seeds that you plant";
const finalQuote = `${quoteStart} ${quoteEnd}`;
// Don't edit the code below here!

section.innerHTML = " ";
let para1 = document.createElement("p");
para1.textContent = finalQuote;

section.appendChild(para1);

/* Strings 2
  *In this task you are provided with two variables, quote and substring, which contain two strings. We would like you to:
  
  *Retrieve the length of the quote, and store it in a variable called quoteLength.
  *Find the index position where substring appears in quote, and store that value in a  variable called index.
  *Use a combination of the variables you have and available string properties/methods to trim down the original quote to "I do not like green eggs and ham.",
  *and store it in a variable called revisedQuote.
  *Try updating the live code below to recreate the finished example:
*/

let quote = "I do not like green eggs and ham. I do not like them, Sam-I-Am.";
let substring = "green eggs and ham";

// Add your code here

const quoteLength = quote.length;
const index = quote.indexOf("green eggs and ham"); // const index = quote.indexOf(substring); 이 더 깔끔함.
const revisedQuote = quote.slice(0, quoteLength - 30);
// let revisedQuote = `${quote.slice(0, index)}${substring}.`; <- codepen에서 다른 사람이 쓴 내용 굳이 몇글자 부터 잘라야하는지 셀 필요없음!!
// let revisedQuote = quote.slice(0, index + substring.length + 1); // 0부터 index까지면 green의 g바로 앞까지 + substring의 길이니까 substring포함에 .까지 한 것.

// Don't edit the code below here!

section.innerHTML = " ";
let para1 = document.createElement("p");
para1.textContent = `The quote is ${quoteLength} characters long.`;
let para2 = document.createElement("p");
para2.textContent = revisedQuote;

section.appendChild(para1);
section.appendChild(para2);

/* Strings 3
  In the next string task, you are given the same quote that you ended up with in the previous task, but it is somewhat broken! We want you to fix and update it, like so:

  Change the casing to correct sentence case (all lowercase, except for upper case first letter). Store the new quote in a variable called fixedQuote.
  In fixedQuote, replace "green eggs and ham" with another food that you really don't like.
  There is one more small fix to do — add a full stop onto the end of the quote, and save the final version in a variable called finalQuote.
  Try updating the live code below to recreate the finished example:
*/

let quote = "I dO nOT lIke gREen eGgS anD HAM";

// Add your code here
let fixedQuote = quote.toLowerCase();
fixedQuote = fixedQuote.replace(fixedQuote[0], "I"); // fixedQuote = fixedQuote.replace(fixedQuote[0],fixedQuote[0].toUpperCase()); 이렇게도 가능
fixedQuote = fixedQuote.replace(
  "green eggs and ham",
  "red beans and an egg plant"
);
finalQuote = fixedQuote.replace("plant", "plant.");

/* 다른 사람이 한 것
  let lower = quote.toLowerCase();
  let fixedQuote = lower.replace("i", "I");
  let finalQuote = fixedQuote.replace("green eggs and ham", "shrimp" + ".");

  나는 무조건 1번부터 순서대로 해야한다고 생각해서 전체를 풀어 썼는데, 이렇게 줄여서 하는게 맞다는 생각이 들었다

  마지막 라인 또 다른 방법

  let finalQuote = fixedQuote + '.';

*/

// Don't edit the code below here!

section.innerHTML = " ";
let para1 = document.createElement("p");
para1.textContent = fixedQuote;
let para2 = document.createElement("p");
para2.textContent = finalQuote;

section.appendChild(para1);
section.appendChild(para2);

/* Strings 4
 * In the final string task, we have given you the name of a theorem, two numeric values, and an incomplete string (the bits that need adding are marked with asterisks (*)).
 * We want you to change the value of the string as follows:

 * Change it from a regular string literal into a template literal.
 * Replace the four asterisks with four template literal placeholders. These should be:
 * The name of the theorem.
 * The two number values we have.
 * The length of the hypotenuse of a right-angled triangle, given that the two other side lengths are the same as the two values we have.
 * You'll need to look up how to calculate this from what you have. Do the calculation inside the placeholder.
 * Try updating the live code below to recreate the finished example:
 */

let theorem = "Pythagorean theorem";

let a = 5;
let b = 8;

let myString =
  "Using *, we can work out that that if the two shortest sides of a right-angled triangle have lengths of * and *, the length of the hypotenuse is *.";

myString = `Using ${theorem}, we can work out that that if the two shortest sides of a right-angled triangle have lengths of ${a} and ${b}, the length of the hypotenuse is ${
  a ** 2 + b ** 2
}.`;

// Don't edit the code below here!

section.innerHTML = " ";
let para1 = document.createElement("p");
para1.textContent = myString;

section.appendChild(para1);
