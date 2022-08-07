// Arrays 기초 학습용 연습문제 - 출저: MDN

/*
Arrays 1
Let's start off with some basic array practice. In this task we'd like you to create an array of three items, stored inside a variable called myArray.
The items can be anything you want — how about your favourite foods or bands?

Next, modify the first two items in the array using simple bracket notation and assignment. 
Then add a new item to the beginning of the array.

Try updating the live code below to recreate the finished example:
*/

// Add your code here
const myArray = ["number1", "number2", "number3"];
myArray[0] = "number4";
myArray[1] = "number5";

// Don't edit the code below here!

section.innerHTML = " ";
let para1 = document.createElement("p");
para1.textContent = `Array: ${myArray}`;

section.appendChild(para1);

/*
Arrays 2
Now let's move on to another task. Here you are provided with a string to work with. We'd like you to:

Convert the string into an array, removing the + characters in the process. Save the result in a variable called myArray.
Store the length of the array in a variable called arrayLength.
Store the last item in the array in a variable called lastItem.
Try updating the live code below to recreate the finished example:
*/

// Add your code here

let myString = "Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri";
const myArray = myString.split("+");
const arrayLength = myArray.length;
const lastItem = myArray[myArray.length - 1];

// 저번에도 같은 맥락으로 코드가 길어졌는데, const lastItem = myArray[myArray.length-1];는 const lastItem = myArray[arrayLength-1];로 간결하게

// Don't edit the code below here!

section.innerHTML = " ";
let para1 = document.createElement("p");
para1.textContent = `Array: ${myArray}`;

let para2 = document.createElement("p");
para2.textContent = `The length of the array is ${arrayLength}.`;

let para3 = document.createElement("p");
para3.textContent = `The last item in the array is "${lastItem}".`;

section.appendChild(para1);
section.appendChild(para2);
section.appendChild(para3);

/*
Arrays 3
For this final array task, we provide you with a starting array, and you will work in somewhat the opposite direction. You need to:

Remove the last item in the array.
Add two new names to the end of the array.
Go over each item in the array and add its index number after the name inside parentheses, 
for example Ryu (0). Note that we don't teach how to do this in the Arrays article, so you'll have to do some research.
Finally, join the array items together in a single string called myString, with a separator of " - ".
*/

let myArray = [
  "Ryu",
  "Ken",
  "Chun-Li",
  "Cammy",
  "Guile",
  "Sakura",
  "Sagat",
  "Juri",
];

// Add your code here
const deleteLast = myArray.pop();
const newItems = myArray.push("kim", "park");
let indexNum = 0;
const finalArray = myArray.map((item) => {
  return `${item} (${indexNum++})`;
});
const myString = finalArray.join(" - ");

/* 

1. 이건 MDN에서 제공한 답안
let myArray = [ "Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri" ];

myArray.pop();

myArray.push('Zangief');
myArray.push('Ibuki');

myArray.forEach(function(element, index) {
  let newElement = `${ element } (${index})`;
  myArray[index] = newElement;
});

let myString = myArray.join(' - ');

2. 이건 다른 사람 답안

for (let i = 0; i < myArray.length; i++){
myArray[i] = ${myArray[i]} (${i});
}

*/

// Don't edit the code below here!

section.innerHTML = " ";

let para1 = document.createElement("p");
para1.textContent = myString;

section.appendChild(para1);
