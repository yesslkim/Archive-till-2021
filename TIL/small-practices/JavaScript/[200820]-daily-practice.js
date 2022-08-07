// variable 기초 학습용 연습문제 - 출저: MDN

/* In this task we want you to:

  Declare a variable called myName.
  Initialize myName with a suitable value, on a separate line (you can use your actual name, or something else).
  Declare a variable called myAge and initialize it with a value, on the same line.
  Try updating the live code below to recreate the finished example

*/

let myName;
myName = "kim";
const myAge = 27;

/* Variables 2
  In this task you need to add a new line to correct the value stored in the existing myName variable to your own name.

  Try updating the live code below to recreate the finished example: 
  let myName = 'Paul';
*/

myName = "kim";

/* Variables 3
  The final task for now — in this case you are provided with some existing code, which has two errors present in it. 
  The results panel should be outputting the name Chris, and a statement about how old Chris will be in 20 years' time. How can you fix the problem and correct the output?
  Try updating the live code below to recreate the finished example:


  // Add your code here

  let myName ='Default';
  myName ='Chris';

  let myAge = 42;

  // Don't edit the code below here!

  section.innerHTML = ' ';
  let para1 = document.createElement('p');
  let para2 = document.createElement('p');
  para1.textContent = myName;
  para2.textContent = `In 20 years, I will be ${myAge + 20}`;
  section.appendChild(para1);
  section.appendChild(para2);
    
*/

let myName = "Default";
myName = "Chris";

let myAge = 42;
