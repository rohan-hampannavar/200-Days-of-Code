// ========================================================
// Day 10: Forms, Validation & preventDefault()
// ========================================================

// --------------------------------------------------------
// 1. Form Basics (Theory)
// --------------------------------------------------------
// - Form submits trigger a "submit" event.
// - By default, submit refreshes/reloads the page.
// - Use event.preventDefault() to stop that behavior.
// - Validation = checking user input before submit.
// - Common checks:
//   • Required fields not empty
//   • Email format
//   • Password strength / confirm match
//   • Checkbox / radio selected
//   • Number ranges

// Example:
// const form = document.querySelector("form");
// form.addEventListener("submit", e => {
//   e.preventDefault(); // stops reload
//   console.log("Form submitted!");
// });

// --------------------------------------------------------
// 2. Assume HTML has:
// --------------------------------------------------------
// <form id="loginForm">
//   <input id="username" placeholder="Username" />
//   <input id="password" type="password" placeholder="Password" />
//   <button type="submit">Login</button>
// </form>
//
// <form id="contactForm">
//   <input id="name" placeholder="Name" />
//   <input id="email" placeholder="Email" />
//   <textarea id="message" placeholder="Message"></textarea>
//   <button type="submit">Send</button>
// </form>
//
// <form id="signupForm">
//   <input id="suUser" placeholder="Username" />
//   <input id="suPass" type="password" placeholder="Password" />
//   <input id="suConfirm" type="password" placeholder="Confirm Password" />
//   <button type="submit">Sign Up</button>
// </form>
//
// <form id="checkoutForm">
//   <input id="card" placeholder="Credit Card (16 digits)" />
//   <input id="cvv" placeholder="CVV (3 digits)" />
//   <button type="submit">Pay</button>
// </form>
//
// <form id="surveyForm">
//   <input id="surveyName" placeholder="Name" />
//   <input id="surveyAge" placeholder="Age" />
//   <input id="surveyEmail" placeholder="Email" />
//   <label><input type="checkbox" id="terms" /> Accept Terms</label>
//   <button type="submit">Submit Survey</button>
// </form>

// --------------------------------------------------------
// 3. 5 Validation Practice Exercises
// --------------------------------------------------------

// Q1: Login form - empty fields
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", e => {
  e.preventDefault();
  const u = document.getElementById("username");
  const p = document.getElementById("password");
  if (u.value.trim() === "" || p.value.trim() === "") {
    alert("All fields required");
  } else {
    console.log("Login success (fake)!");
  }
});

// Q2: Contact form - email format
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", e => {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
  if (!emailPattern.test(email)) {
    alert("Invalid email!");
  } else {
    console.log("Contact form valid");
  }
});

// Q3: Signup form - password rules + confirm
const signupForm = document.getElementById("signupForm");
signupForm.addEventListener("submit", e => {
  e.preventDefault();
  const pass = document.getElementById("suPass").value;
  const confirm = document.getElementById("suConfirm").value;
  const strong = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!strong.test(pass)) {
    alert("Password must be 8+ chars, 1 uppercase, 1 number");
    return;
  }
  if (pass !== confirm) {
    alert("Passwords don’t match!");
    return;
  }
  console.log("Signup form valid");
});

// Q4: Checkout form - numeric only
const checkoutForm = document.getElementById("checkoutForm");
checkoutForm.addEventListener("submit", e => {
  e.preventDefault();
  const card = document.getElementById("card").value.trim();
  const cvv = document.getElementById("cvv").value.trim();
  if (!/^\d{16}$/.test(card)) {
    alert("Card must be 16 digits");
    return;
  }
  if (!/^\d{3}$/.test(cvv)) {
    alert("CVV must be 3 digits");
    return;
  }
  console.log("Checkout valid");
});

// Q5: Survey form - multiple checks
const surveyForm = document.getElementById("surveyForm");
surveyForm.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("surveyName").value.trim();
  const age = parseInt(document.getElementById("surveyAge").value);
  const email = document.getElementById("surveyEmail").value.trim();
  const terms = document.getElementById("terms").checked;

  if (!name) return alert("Name required");
  if (isNaN(age) || age < 18) return alert("Must be 18+");
  if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) return alert("Invalid email");
  if (!terms) return alert("You must accept terms");

  console.log("Survey valid");
});

// --------------------------------------------------------
// 4. Why This Matters for React (Theory)
// --------------------------------------------------------
// - In React, you’ll validate inputs via controlled components + state.
// - But you *still* need these core ideas: preventDefault, regex checks.
// - Without solid JS validation skills, your React forms will be buggy.
// - Clean, reusable validation functions = production-ready apps.

// --------------------------------------------------------
// Summary
// --------------------------------------------------------
// ✅ preventDefault on forms
// ✅ Required fields, regex, numeric checks
// ✅ Password strength + confirm
// ✅ Multi-field validation
// ✅ 5 real-world form exercises
// ========================================================
