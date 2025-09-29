// ========================================================
// Day 8: DOM Selection + Traversing Nodes
// ========================================================

// --------------------------------------------------------
// 1. DOM Selection (Theory)
// --------------------------------------------------------
// - DOM = Document Object Model (tree of HTML elements).
// - JavaScript can SELECT and MANIPULATE elements.
// - Common selection methods:
//   • getElementById("id") → selects 1 element by ID.
//   • getElementsByClassName("class") → HTMLCollection (array-like).
//   • getElementsByTagName("tag") → HTMLCollection.
//   • querySelector("css") → first match.
//   • querySelectorAll("css") → NodeList (all matches).

// Example HTML for testing:
// <div id="main" class="container">
//   <p class="text">Hello</p>
//   <p class="text">World</p>
//   <span>Sample</span>
// </div>

// --------------------------------------------------------
// 2. DOM Selection (Code Examples)
// --------------------------------------------------------
const mainDiv = document.getElementById("main");
console.log("By ID:", mainDiv);

const textParas = document.getElementsByClassName("text");
console.log("By ClassName:", textParas);

const spans = document.getElementsByTagName("span");
console.log("By TagName:", spans);

const firstText = document.querySelector(".text");
console.log("querySelector:", firstText);

const allTexts = document.querySelectorAll(".text");
console.log("querySelectorAll:", allTexts);

// --------------------------------------------------------
// 3. Traversing Nodes (Theory)
// --------------------------------------------------------
// - Once you select an element, you can navigate around:
//   • parentNode / parentElement → move up
//   • childNodes / children → move down
//   • firstChild / lastChild → first & last child
//   • nextElementSibling / previousElementSibling → sideways

// --------------------------------------------------------
// 4. Traversing (Code Examples)
// --------------------------------------------------------
const container = document.querySelector(".container");

console.log("Parent:", container.parentNode);
console.log("Children:", container.children);
console.log("First child:", container.firstElementChild);
console.log("Last child:", container.lastElementChild);

const secondPara = container.children[1];
console.log("Next sibling:", secondPara.nextElementSibling);
console.log("Previous sibling:", secondPara.previousElementSibling);

// --------------------------------------------------------
// 5. Style + Content Manipulation
// --------------------------------------------------------
firstText.style.color = "red";
firstText.style.fontSize = "20px";
firstText.textContent = "Changed text";

// --------------------------------------------------------
// 6. Practice Problems (10 Standard)
// --------------------------------------------------------

// Q1: Select an element by ID and log it
const header = document.getElementById("header");
console.log("Header:", header);

// Q2: Change background color of a div with class "box"
document.querySelector(".box").style.backgroundColor = "lightblue";

// Q3: Select all <li> items and log their textContent
document.querySelectorAll("li").forEach(li => console.log(li.textContent));

// Q4: Change text of the first <h1> to "Welcome"
document.querySelector("h1").textContent = "Welcome";

// Q5: Add a border to the last paragraph
document.querySelector("p:last-of-type").style.border = "1px solid black";

// Q6: Log the parent of an element with id="child"
console.log(document.getElementById("child").parentNode);

// Q7: Log all children of an element with class "menu"
console.log(document.querySelector(".menu").children);

// Q8: Change color of the next sibling of element with id="item1"
document.getElementById("item1").nextElementSibling.style.color = "green";

// Q9: Select all elements with class "card" and add padding
document.querySelectorAll(".card").forEach(c => c.style.padding = "10px");

// Q10: Log the previous sibling of element with class "active"
console.log(document.querySelector(".active").previousElementSibling);

// --------------------------------------------------------
// 7. Why This Matters for React (Theory)
// --------------------------------------------------------
// - Even though React handles DOM updates virtually,
//   understanding DOM traversal is critical for debugging.
// - You’ll need to:
//   • Understand how elements nest & relate.
//   • Be confident in querying & styling dynamically.
// - React abstracts DOM manipulation, but deep DOM knowledge
//   prevents bugs and helps debug when React fails.

// --------------------------------------------------------
// Summary
// --------------------------------------------------------
// ✅ getElementById / class / tag / querySelector / querySelectorAll
// ✅ Traversing: parent, child, siblings
// ✅ Manipulation: style, textContent
// ✅ 10 Practice problems for mastery
// ========================================================
