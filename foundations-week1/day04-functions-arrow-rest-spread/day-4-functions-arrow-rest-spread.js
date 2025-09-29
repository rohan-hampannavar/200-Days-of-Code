// ========================================================
// Day 4: Functions, Arrow Functions, Rest/Spread, Default Params
// ========================================================

// --------------------------------------------------------
// 1. Functions Basics
// --------------------------------------------------------
// - Functions group reusable code.
// - They can take inputs (parameters) and return outputs.
// - return vs console.log → return gives back a value, console.log just prints.

function add(a, b) {
  return a + b;
}
let sum1 = add(5, 10); // 15

// --------------------------------------------------------
// 2. Function Declarations vs Expressions
// --------------------------------------------------------

// Function Declaration → hoisted
console.log(foo()); // "Hello"
function foo() { return "Hello"; }

// Function Expression / Arrow → not hoisted
// console.log(bar()); // ❌ ReferenceError
const bar = () => "Hi";

// Declaration
function square(x) {
  return x * x;
}

// Expression
const squareExpr = function (x) {
  return x * x;
};

// --------------------------------------------------------
// 3. Arrow Functions (ES6)
// --------------------------------------------------------
// Shorter syntax, lexical `this`.

const multiply = (a, b) => a * b; // implicit return
const greet = (name) => `Hello, ${name}`;

// Single param → () optional
const double = x => x * 2;

// Multiple params → () required
const addNums = (a, b, c) => a + b + c;

// --------------------------------------------------------
// 4. Default Parameters
// --------------------------------------------------------
// If missing, defaults are used.

function greetUser(name = "Guest") {
  return `Welcome, ${name}`;
}
let g1 = greetUser();        // "Welcome, Guest"
let g2 = greetUser("Rohan"); // "Welcome, Rohan"

// --------------------------------------------------------
// 5. Rest Operator (...)
// --------------------------------------------------------
// Collects multiple arguments into an array.

function sumAll(...nums) {
  return nums.reduce((total, n) => total + n, 0);
}
let total = sumAll(1, 2, 3, 4, 5); // 15

// --------------------------------------------------------
// 6. Spread Operator (...)
// --------------------------------------------------------
// Expands arrays/objects into individual elements.

// Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2]; // [1,2,3,4,5,6]

// Objects
const obj1 = { name: "Rohan" };
const obj2 = { age: 22 };
const mergedObj = { ...obj1, ...obj2 }; // {name: "Rohan", age: 22}

// --------------------------------------------------------
// 7. Anonymous Functions & Callbacks
// --------------------------------------------------------
setTimeout(function () {
  console.log("Runs after 1 second");
}, 1000);

setTimeout(() => console.log("Arrow callback"), 1500);

// --------------------------------------------------------
// 8. Higher-Order Functions
// --------------------------------------------------------
// Functions that take other functions as arguments.

function operate(a, b, fn) {
  return fn(a, b);
}

const subtract = (x, y) => x - y;
let result = operate(20, 5, subtract); // 15

// --------------------------------------------------------
// 9. Function Scope
// --------------------------------------------------------
// let & const are block scoped.
{
  let a = 10;
  const b = 20;
  console.log(a, b); // Works inside block
}
// console.log(a, b); // ❌ ReferenceError

// --------------------------------------------------------
// 10. Immediately Invoked Function Expressions (IIFE)
// --------------------------------------------------------
// IIFE → executes immediately and creates private scope
(function () {
  console.log("I run immediately!");
})();

// Arrow version
(() => console.log("IIFE with arrow works!"))();

// ========================================================
// PRACTICE PROBLEMS (20)
// ========================================================

// Q1: Square a number
const squareNum = n => n * n;

// Q2: Check even/odd
const isEven = n => n % 2 === 0;

// Q3: Multiply with default param
function multiplyNum(a, b = 2) {
  return a * b;
}

// Q4: Greeting with default param
const greetPerson = (name = "Guest") => `Hello, ${name}`;

// Q5: Sum all numbers (rest)
const totalSum = (...nums) => nums.reduce((t, n) => t + n, 0);

// Q6: Largest of three numbers
const maxOfThree = (a, b, c) => Math.max(a, b, c);

// Q7: Reverse string
const reverseString = str => str.split("").reverse().join("");

// Q8: Merge arrays (spread)
const combinedArr = [...[1, 2, 3], ...[4, 5, 6]];

// Q9: Count vowels
const countVowels = str => (str.match(/[aeiou]/gi) || []).length;

// Q10: Uppercase array of words
const toUpper = words => words.map(w => w.toUpperCase());

// Q11: Anonymous function callback
[1, 2, 3].forEach(function (n) {
  console.log("Anon func number:", n);
});

// Q12: Arrow callback
[1, 2, 3].forEach(n => console.log("Arrow number:", n));

// Q13: Function returns function
function outer(x) {
  return function inner(y) {
    return x + y;
  };
}
let adder5 = outer(5);
let val = adder5(10); // 15

// Q14: Rest operator for product
const productAll = (...nums) => nums.reduce((p, n) => p * n, 1);

// Q15: Spread operator for copying object
const user = { id: 1, name: "Rohan" };
const copyUser = { ...user };

// Q16: Function with multiple defaults
function createUser(name = "Guest", role = "User") {
  return { name, role };
}

// Q17: Implicit return arrow function
const cube = n => n ** 3;

// Q18: Template literal inside function
const introduce = (name, age) => `My name is ${name} and I am ${age} years old.`;

// Q19: Immediately invoked arrow function
(() => console.log("IIFE with arrow works!"))();

// Q20: Higher-order filter
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(isEven); // [2, 4]

// ========================================================
// TRICK QUESTIONS & GOTCHAS
// ========================================================

// Function hoisting vs arrow
console.log(fooHoist()); // Works
function fooHoist() { return "Hoisted!"; }

// console.log(barArrow()); // ❌ ReferenceError
const barArrow = () => "Not Hoisted";

// --------------------------------------------------------
// TIP: Uncomment to test
// console.log(squareNum(5), isEven(4), multiplyNum(5), greetPerson(), totalSum(1,2,3));
// console.log(maxOfThree(10,20,15), reverseString("Hello"), countVowels("Javascript"));
// console.log(toUpper(["one","two"]), val, productAll(2,3,4), cube(3));
// console.log(introduce("Rohan", 22), evens);
