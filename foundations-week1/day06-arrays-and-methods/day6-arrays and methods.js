// ========================================================
// Day 6: Arrays + Array Methods
// ========================================================

// --------------------------------------------------------
// 1. Arrays Basics (Theory)
// --------------------------------------------------------
// - An array is a special variable that can hold multiple values.
// - Values are stored in an ordered list (indexed starting at 0).
// - Arrays in JavaScript are dynamic (can grow/shrink).
// - Elements can be of ANY type (string, number, object, etc.).

let fruits = ["apple", "banana", "mango"];
console.log(fruits[0]); // "apple"

// Common array operations
fruits.push("orange");   // add at end
fruits.pop();            // remove last
fruits.unshift("grape"); // add at start
fruits.shift();          // remove first
console.log("Fruits:", fruits);

// --------------------------------------------------------
// 2. Array Methods (Theory + Syntax)
// --------------------------------------------------------

// map()
// - Transforms each element and returns a new array of SAME length.
// - Common use in React: rendering lists of components.
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(n => n * n);
console.log("Squares:", squares);

// filter()
// - Returns a new array with ONLY elements that satisfy a condition.
// - Useful for search, filtering lists in React.
const evens = numbers.filter(n => n % 2 === 0);
console.log("Evens:", evens);

// reduce()
// - Reduces an array to a single value (e.g., sum, product, max).
// - Takes an accumulator + current value, with optional initial value.
// - Common in React for totals (cart price, analytics).
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log("Sum:", sum);

// find()
// - Returns the FIRST element that matches a condition.
// - If no match → undefined.
// - Great for selecting a single object (e.g., product by ID).
const firstBig = numbers.find(n => n > 3);
console.log("First > 3:", firstBig);

// some()
// - Returns true if ANY element matches the condition.
// - Useful for quick checks (e.g., if a cart has out-of-stock items).
const hasNegative = numbers.some(n => n < 0);
console.log("Has negative?", hasNegative);

// every()
// - Returns true if ALL elements satisfy the condition.
// - Great for validations (e.g., all inputs filled).
const allPositive = numbers.every(n => n > 0);
console.log("All positive?", allPositive);

// --------------------------------------------------------
// 3. Practice Problems (10 Standard)
// --------------------------------------------------------

// Q1: Double each number
const doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled);

// Q2: Filter numbers greater than 3
const greaterThan3 = numbers.filter(n => n > 3);
console.log(">3:", greaterThan3);

// Q3: Find first odd number
const firstOdd = numbers.find(n => n % 2 !== 0);
console.log("First odd:", firstOdd);

// Q4: Check if all numbers < 10
console.log("All < 10?", numbers.every(n => n < 10));

// Q5: Check if some numbers divisible by 2
console.log("Any even?", numbers.some(n => n % 2 === 0));

// Q6: Sum of array using reduce
const total = numbers.reduce((a, b) => a + b, 0);
console.log("Total:", total);

// Q7: Flatten nested array
const nested = [[1, 2], [3, 4], [5]];
const flat = nested.reduce((acc, arr) => acc.concat(arr), []);
console.log("Flattened:", flat);

// Q8: Extract names from objects
const users = [{id: 1, name: "Alice"}, {id: 2, name: "Bob"}];
const names = users.map(u => u.name);
console.log("Names:", names);

// Q9: Filter adults from people array
const people = [
  {name: "Tom", age: 16},
  {name: "Sara", age: 21},
  {name: "John", age: 18}
];
const adults = people.filter(p => p.age >= 18);
console.log("Adults:", adults);

// Q10: Average of passing scores (>= 50, +5 bonus)
const scores = [45, 80, 32, 90, 67];
const avgHigh = scores
  .filter(s => s >= 50)   // keep passing scores
  .map(s => s + 5)        // add bonus
  .reduce((a, b, _, arr) => a + b / arr.length, 0);
console.log("Average with bonus:", avgHigh);

// --------------------------------------------------------
// 4. Why This Matters for React (Theory)
// --------------------------------------------------------
// - React components often deal with arrays of data (lists, tables).
// - map(): rendering UI lists (e.g., tasks, users).
// - filter(): searching/filtering items dynamically.
// - reduce(): calculating totals, statistics, or combining data.
// - find(): locating a specific item by ID/condition.
// - some()/every(): form validation, checking conditions.

// Example (React-style thinking):
// tasks.map(task => <TaskItem key={task.id} task={task} />)

// --------------------------------------------------------
// Summary
// --------------------------------------------------------
// ✅ Arrays let us store and organize multiple values.
// ✅ Array methods (map, filter, reduce, find, some, every)
//    are powerful tools for data manipulation.
// ✅ Mastery of these methods = smoother React learning.
// ========================================================
