// Array method 연습문제 출저: 유튜브 드림코딩

// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  
  fruits.join(',')

  // answer: const result = fruits.join(','); seperator를 안넣으면 콤마로 나옴.
}

// Q2. make an array out of a string
{
  const fruits = "apple,banana,kiwi,strawberry";
  Array.from(fruits)

  // answer: const fruits.split()
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  array.reverse()

  //answer: array.reverse() *오리지널 값 변화시킴*
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const newArrary = array.slice(2,5)

 // const result = array.splice(0,2); = 요건 new array를 만들어내지 못함 
 // const result = array.slice(2,5)
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}


const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];


// Q5. find a student with the score 90
{
  students.filter((student)=>student.score===90)
  students.find((student)=>student.score===90)

  //answer
}

// Q6. make an array of enrolled students
{
  const enrolledStudents = students.filter((student)=>student.enrolled===true)
 
  //answer const enrolledStudents = students.filter((student)=>student.enrolled)
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  cosnt scoreOfStudents = students.map((student)=>student.score)

  //answer 
}

// Q8. check if there is a student with the score lower than 50
{
  students.filter((student)=>student.score<50)
  students.forEach((student)=>student.score<50)

  //answer: check이라서 const answer = students.some((student)=>student.score<50)
}

// Q9. compute students' average score
{
 const sum =  students.reduce((acc,cur)=> acc+cur.score,0);
 const averageOfSum = sum/students.length;

/*answer : 
  const result = students.reduce((prev,curr)=>prev+curr.score,0)
  console.log(result/students.length)
  */
}

// Q10. make a string containing all the scores 
// result should be: '45, 80, 90, 66, 88'
{
  const scoreOfStudents = students.map((student)=>student.score)
  scoreOfStudents.toString()
  /*answer 
  const scoreOfStudents = students
  .map((student)=>student.score)
  .join()

 *인터넷에 쳐본 .toString()과 .join()의 차이점 
 1. toString()메소드는 other objects에도 사용이 가능하나, .join()은 array method이다.
 2. toString()의 seperator 는 콤마로 고정이지만 .join([seperator])은 seperator가 옵션이기 때문에 어느 seperator든 넣을 수 있다. default는 콤마다.
  */
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const numbers = [45, 66, 80, 88, 90]
  numbers.sort((a,b)=>a-b);
}
