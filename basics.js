let numbers = [10, 20, 30];
totalSum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Welcome to Node.js");
console.log(totalSum);

let student = {
  name: "Glenn Oronsaye",
  age: 20,
  grade: 10,
};

// Write a function to print the student's details.
const studentFunction = (student) => {
  console.log("Student Details:");
  console.log("Name: " + student.name);
  console.log("Age: " + student.age);
  console.log("Grade: " + student.grade);
};

studentFunction(student);

// setTimeout to print "Task complete" after 3 seconds
setTimeout(() => {
  console.log("Task complete!");
}, 3000);
