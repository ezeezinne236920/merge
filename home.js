console.log("hello");
// alert("hello this is Zinny!");

// hoe to write a comment inline
// variables
// var b = "orange";
// console.log(b);

// var SomeNumer = 30;
// console.log(SomeNumer);
// var age = prompt("what is your age?");
// document.getElementById("check").innerHTML = "Hello World!";
// document.getElementById("see").innerHTML = 'age';
// when we say manipulate dom with javascript, we simply mena change html using javascript. we ca do that using document.getelementByid and the rest.
// Numbers in Javascript seeee this: while using getElementById, the id and its replacement should be presnted in strings. the id alone gets bracketed.

// increent numbers in javascript.
console.log(300 / 10);
var num1 = 10;
num1 = num1 + 4;
console.log(num1);

var num2 = 2;
num2++;
console.log(num2);

// decrement numbers in javascript
num1--;
console.log(num1);

// divide., multiply *, remainder %
console.log(num1 % 7);
console.log(num1 % 11);
console.log(num1 / 9);
console.log(num1 / 4);
//  increment and decrement by any number you want, say 10 fr instance
num1 += 10;
console.log(num1);
num1 -= 7;
console.log(num1);
// the decrement above was becasuse of the sequential order it wasa still maintaining.
// i will introduce the var statement to return to a flawless command line. you get? lmao

var num1 = 22;
num1 -= 4;
console.log(num1);

/* Functions
1. create a function
2. call the function
*/

// create
function fun() {
  console.log("this is  function");
}
// call the function like this
fun();
/*
let us create a function that take in a name and says hello followed by your name
for example
name: "Ezinne"
Return: "Hello Ezinne"
*/

//   how do arguments work in functions?
// how do we add 2 numbers together in a function?

function SumNumbers(num1, num2) {
  var result = num1 + num2;
  console.log(num1 + num2);
}
// SumNumbers(20, 20);
// function greeting(YourName) {
//   var result = prompt("what is your name? ");
//   console.log(result + "  hello");
// }
// // var name = prompt("what is your name?");
// greeting(name);

function sumNumbers(a, b) {
  var result = a + b;
  console.log(result);
}
SumNumbers(30, 3);

// while loop
var num = 0;
while (num < 100) {
  num += 1;
  console.log(num);
}

// for loop

// for (let num = 0; num <= 100; num++) {
//   console.log(num);
// }

// data types
let yourAge = 18; //number
let yourName = "Bob"; //string
let call = { first: "Christian", last: "Tae" }; // object in java and dictionary in python
let truth = false; //boolean
let groceries = ["banana", "oranges", "apple"]; //array
let random; //undefined
let nothing = null; //value null

// strings in javascript (common metods)
let fruit = "banana, mango, cashew, orange, blackberry, almonds, guava, lemon";
let moreFruits = "banana\napple\npawpaw"; //new line(the backward slassh plus an 'n') gives you a new line
console.log(moreFruits + " get out!");
console.log(fruit.length);
console.log(fruit.indexOf("ew"));
console.log(fruit.slice(2, 4));
console.log(fruit.replace("ban", "123"));
console.log(fruit.toUpperCase(fruit));
console.log(fruit.toLowerCase(fruit));
console.log(fruit.charAt(3));
console.log(fruit[2]); //this is the same as saying that the console should display the second character
console.log(fruit.split("")); // split by a character
console.log(fruit.split(",")); //split by a commma

// arrays
let fruits = ["banana", "apple", "orange", "pomegranades"];
let fruite = new Array("banana", "apple", "orange", "pomegranades");
// alert(fruits[0]); // 0 is banana
console.log(fruits[2]); //access value at index 2nd
fruits[0] = "pear";
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
} // what happened is that it prints it one after the other.
// ARRAY COMMON METHODS
console.log(fruits.toString());
console.log("to string", fruits.toString());
console.log(fruits.join(" * "));
console.log(fruits, fruits.pop(), fruits); //removes last item
console.log(fruits.push(" blackberry"), fruits); //appends
fruits[3] = "new fruit";
console.log(fruits);
fruits.shift(); //remove first element from an array
console.log(fruits);
fruits.unshift("kiwi"); //add first element to an array
console.log(fruits);

// concatenation in action
let vegetables = ["tomatoes", "aspargus", "broccoli"];
let allGroceries = fruits.concat(vegetables); //this combines arrays
console.log(allGroceries);
console.log(allGroceries.slice(1, 4));
console.log(allGroceries.reverse());
let SomeNumbers = [5, 10, 2, 25, 3, 255, 334, 321, 2];
console.log(
  SomeNumbers.sort(function (a, b) {
    return a - b;
  }) // what happens here is that the array gets arranged in ascending order, with the sort function ee, if the arrays are given in words, it gets sorted in alphebetical  order
);
console.log(
  SomeNumbers.sort(function (a, b) {
    return b - a;
  })
); // this sorts item in a descending order.
let emptyArray = new Array();
for (let num = 0; num < 10; num++) {
  emptyArray.push(num);
}
console.log(emptyArray);
//  objects in javascript
// dictionaries in python
// let student = {
//   first: "eze",
//   last: "ezinne",
//   age: 25,
//   height: 22,
//   studentInfo: function () {
//     return this.first + "\n " + this.last;
//   },
// };
// console.log(student.first);
// student.first = "egbeigwe"; //change value
// console.log(student.first);
// student.age++;
// console.log(student.age);
// console.log(student.studentInfo());
let student = {
  firstName: "Janet",
  lastName: "Egbeigwe",
  Age: 30,
  StudentInfo: function () {
    return this.firstName + "\n" + this.lastName + "\n" + this.Age;
  },
};
console.log(student.StudentInfo());
student.firstName = "Vodla"; //// this changes the value of student. note that i didnt reassign another variable to it.
console.log(student.StudentInfo());
//Now lets redo this one that has a lot to do with function.
// studentInfo: function () {return this.firstName + "\n"  + this.lastName + "\n" + this.comment'}

//conditionals, control flow (if... else)
// the target audience is the age bracket between 18 and 30
let age = 45;
if (age >= 18 && age <= 35) {
  status = "this is very true";
  console.log(status);
} else {
  console.log("this is false");
}
/*actually, what the tutor guide did was this:
 var age = prompt("how old are you?");  //aparently, let wasnt working in his version of visual studio code or the version of his console, so he used var instead
if (age >= 18 && age <= 35) {
  status = ("this is true"); // the thing is that the status something wasnt working for  me. 
} else {
  console.log("this is false");
} */

//switch statement
//differentiate between weekends and weekdays/
switch (9) {
  case 0:
    text = "weekend, sunday";
    break;
  case 5:
    text = "weekend, friday";
    break;
  case 6:
    text = "weekend, saturday";
    break;
  default:
    text = "weekday";
}
console.log(text);
 

//json 
// json -- used to  represent data, used for api , stands for javascript object notation. json is an array with objects inside