// ========================================================
// Day 9: Event Listeners (click, input, change) + Delegation
// ========================================================

// --------------------------------------------------------
// 1. Event Listeners (Theory)
// --------------------------------------------------------
// - Event: Action user performs (click, type, change, etc).
// - Event Listener: JS function that reacts to that action.
// - Common listeners:
//   • click
//   • dblclick
//   • input
//   • change
//   • keydown / keyup
//   • mouseover / mouseout
// - Syntax: element.addEventListener("event", callback);

// - Event Object:
//   • Passed automatically to listener
//   • Contains details: target, type, key pressed, mouse position

// Example:
// const btn = document.getElementById("btn");
// btn.addEventListener("click", function(e) {
//   console.log("Clicked!", e.target);
// });

// --------------------------------------------------------
// 2. Event Listener Examples
// --------------------------------------------------------

// Assume HTML has:
// <button id="btn1">Click Me</button>
// <input id="textInput" placeholder="Type something" />
// <select id="colorSelect">
//   <option value="">Choose</option>
//   <option value="red">Red</option>
//   <option value="blue">Blue</option>
//   <option value="green">Green</option>
// </select>
// <ul id="list"></ul>
// <div id="container"></div>

const btn1 = document.getElementById("btn1");
const btn2 = document.createElement("button");
btn2.id = "btn2";
btn2.textContent = "Double Click Me";
document.body.appendChild(btn2);

const textInput = document.getElementById("textInput");
const colorSelect = document.getElementById("colorSelect");
const list = document.getElementById("list");
const container = document.getElementById("container");

// --------------------------------------------------------
// 3. 10 Practice Exercises
// --------------------------------------------------------

// Q1: Button click counter
let count = 0;
btn1.addEventListener("click", () => {
  count++;
  btn1.textContent = `Clicked ${count} times`;
});

// Q2: Double click
btn2.addEventListener("dblclick", () => {
  console.log("Button double-clicked");
});

// Q3: Input typing tracker
const p = document.createElement("p");
document.body.appendChild(p);
textInput.addEventListener("input", e => {
  p.textContent = e.target.value;
});

// Q4: Select change color
colorSelect.addEventListener("change", e => {
  document.body.style.backgroundColor = e.target.value;
});

// Q5: Dynamic list add (Enter key)
textInput.addEventListener("keydown", e => {
  if (e.key === "Enter" && textInput.value.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = textInput.value;
    list.appendChild(li);
    textInput.value = "";
  }
});

// Q6: List item click (delegation)
list.addEventListener("click", e => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("done"); // add CSS .done { text-decoration: line-through }
  }
});

// Q7: Right click remove item
list.addEventListener("contextmenu", e => {
  if (e.target.tagName === "LI") {
    e.preventDefault();
    e.target.remove();
  }
});

// Q8: Container button generator
btn1.addEventListener("click", () => {
  const newBtn = document.createElement("button");
  newBtn.textContent = "New Button";
  container.appendChild(newBtn);
});
container.addEventListener("click", e => {
  if (e.target.tagName === "BUTTON") {
    alert(`You clicked: ${e.target.textContent}`);
  }
});

// Q9: Key press detector
document.addEventListener("keydown", e => {
  console.log("You pressed:", e.key);
});

// Q10: Blur validation
textInput.addEventListener("blur", () => {
  if (textInput.value.trim() === "") {
    alert("Field cannot be empty!");
  }
});

// --------------------------------------------------------
// 4. Why This Matters for React (Theory)
// --------------------------------------------------------
// - In React, you’ll use onClick, onChange, onInput instead of addEventListener.
// - But under the hood, React uses a synthetic event system.
// - If you don’t master JS events, you’ll fail to debug React apps.
// - Event delegation in particular is crucial for performance
//   (attaching one listener to a parent instead of 100s of children).
// - Mastery here = cleaner, faster React code.

// --------------------------------------------------------
// Summary
// --------------------------------------------------------
// ✅ addEventListener basics
// ✅ Event object usage
// ✅ click, input, change
// ✅ Delegation for dynamic elements
// ✅ 10 practice problems
// ========================================================
