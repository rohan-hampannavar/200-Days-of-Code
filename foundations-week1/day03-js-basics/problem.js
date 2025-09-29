// ========================================================
// Day 3: JavaScript Syntax, Variables, Operators, Data Types
// ========================================================

// --------------------------------------------------------
// 1. JavaScript Syntax Basics
// --------------------------------------------------------
// - JavaScript is interpreted top-to-bottom.
// - Statements usually end with a semicolon ; (optional, safer to use).
// - Curly braces { } group blocks (functions, if/else, loops).
// - Case-sensitive → myName ≠ myname.
// - Whitespace doesn’t matter, but indentation improves readability.

{
  let x = 5;
  let y = 10;
  let sum = x + y; // inside block
}

// --------------------------------------------------------
// 2. Variables in JavaScript
// --------------------------------------------------------
// var
// - Function-scoped, hoisted, can be redeclared, avoid in modern JS.
var oldWay = "I am var";

// let
// - Block-scoped, can be reassigned, not redeclared in same scope.
let score = 50;
score = 60; // ✅ allowed

// const
// - Block-scoped, cannot be reassigned or redeclared.
// - Must be initialized at declaration.
const pi = 3.14;

// Best practice → const by default, let if value changes, avoid var.

// Block scope demo
{
  let localVar = "I'm inside a block";
  const constVar = "Block constant";
  console.log(localVar, constVar); // Works inside block
}
// console.log(localVar); // ❌ ReferenceError

// --------------------------------------------------------
// 3. Operators
// --------------------------------------------------------
// Arithmetic: + - * / % **
let addEx = 5 + 3;
let subEx = 10 - 4;
let mulEx = 6 * 2;
let divEx = 20 / 5;
let modEx = 17 % 3;
let powEx = 2 ** 4;

// Assignment: =, +=, -=
let n = 10;
n += 5; // 15

// Comparison: ==, ===, !=, >, <, >=, <=
let comp1 = 10 == "10";   // true (loose equality, coercion allowed)
let comp2 = 10 === "10";  // false (strict equality, no coercion)

// Logical: && (AND), || (OR), ! (NOT)
let logicEx1 = 5 > 2 && 10 > 5;
let logicEx2 = 5 < 2 || 10 > 5;
let logicEx3 = !true;

// --------------------------------------------------------
// 4. Data Types
// --------------------------------------------------------
// Primitive: string, number, boolean, null, undefined, symbol, bigint
// Reference: objects, arrays, functions

let strType = "Hello";
let numType = 42;
let boolType = true;
let nullType = null;
let undefType;
let bigIntType = 123n;

// typeof checks
let typeCheck1 = typeof strType;   // "string"
let typeCheck2 = typeof numType;   // "number"
let typeCheck3 = typeof nullType;  // "object" (JS quirk)

// Extra: typeof quirks
console.log(typeof NaN);        // "number" → Not a Number but still number type
console.log(typeof undefined);  // "undefined"
console.log(typeof null);       // "object" (legacy bug)

// --------------------------------------------------------
// 5. Template Literals
// --------------------------------------------------------
// Easier string building with backticks

let name = "Rohan";
let age = 22;
let intro = `My name is ${name}, I am ${age} years old.`;

// --------------------------------------------------------
// 6. Truthy and Falsy Values
// --------------------------------------------------------
// Falsy → false, 0, "", null, undefined, NaN
// Everything else is truthy.

let falsy1 = Boolean(0);      // false
let falsy2 = Boolean("");     // false
let truthy1 = Boolean("Hi");  // true
let truthy2 = Boolean(123);   // true

// --------------------------------------------------------
// 7. Dynamic Typing
// --------------------------------------------------------
// JS variables are dynamic: type can change anytime.

let dynamicVar = 10;
dynamicVar = "Hello JS";

// ========================================================
// PRACTICE PROBLEMS (Basic 15)
// ========================================================

// ---- Strings ----
let myName = "Rohan Hampannavar"; // Q1 length
let nameLength = myName.length;

let lang = "JavaScript"; // Q2 first & last char
let firstChar = lang[0];
let lastChar = lang[lang.length - 1];

let greeting = "hello world".toUpperCase(); // Q3 uppercase
let fullName = "Rohan" + " " + "Hampannavar"; // Q4 concat
let hasWord = lang.includes("Script"); // Q5 includes

// ---- Numbers ----
let a = 12, b = 5; // Q6 arithmetic
let addition = a + b;
let subtraction = a - b;
let multiplication = a * b;
let division = a / b;

let remainder = 17 % 3; // Q7 remainder
let powerExp = 2 ** 5; // Q8 power
let powerMath = Math.pow(2, 5);

let randomNum = Math.floor(Math.random() * 10) + 1; // Q9 random 1–10
let converted = Number("123") + 10; // Q10 convert string to number

// ---- Booleans ----
let looseEqual = 10 == "10"; // Q11 loose equality
let strictEqual = 10 === "10"; // Q12 strict equality

let num = 75; // Q13 range check
let inRange = num > 50 && num < 100;

let isTrue = true; // Q14 NOT operator
let inverted = !isTrue;

let x = 8, y = 3; // Q15 OR condition
let condition = x > 10 || y < 5;

let valueNull = null; // null/undefined types\ nlet valueUndefined;
let typeNull = typeof valueNull;
let typeUndefined = typeof valueUndefined;

// ========================================================
// EXTRA MINI CHALLENGES
// ========================================================

// Challenge 1: Reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}
let reversed = reverseString("JavaScript"); // "tpircSavaJ"

// Challenge 2: Check if number is even or odd
function isEven(num) {
  return num % 2 === 0;
}
let checkEven = isEven(42); // true

// Challenge 3: Find largest of two numbers
function maxOfTwo(a, b) {
  return a > b ? a : b;
}
let largest = maxOfTwo(10, 20); // 20

// Challenge 4: Count vowels in a string
function countVowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
let vowelsCount = countVowels("JavaScript"); // 3

// Challenge 5: Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return celsius * 9/5 + 32;
}
let tempF = celsiusToFahrenheit(30); // 86

// ========================================================
// TRICK QUESTIONS (JS Gotchas)
// ========================================================

// Q1: "5" + 5 = ?
let trick1 = "5" + 5; // "55" (string concatenation)

// Q2: "5" - 5 = ?
let trick2 = "5" - 5; // 0 (string converted to number)

// Q3: true + true = ?
let trick3 = true + true; // 2 (booleans become numbers)

// Q4: null == undefined ? null === undefined ?
let trick4 = null == undefined; // true (loose equality)
let trick5 = null === undefined; // false (strict equality)

// Q5: typeof NaN ?
let trick6 = typeof NaN; // "number" → NaN means Not a Number but type is number

// ========================================================
// End of Day 3 (Pro Level)
// ========================================================

// TIP: Uncomment to test
// console.log(reversed, checkEven, largest, vowelsCount, tempF);
// console.log(trick1, trick2, trick3, trick4, trick5, trick6);
// console.log(intro);
