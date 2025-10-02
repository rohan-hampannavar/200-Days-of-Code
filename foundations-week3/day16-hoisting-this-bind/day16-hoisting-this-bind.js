/*
===================================================================
Chapter 16: Hoisting, `this`, call/apply/bind, and OOP Prep in JS
===================================================================

⚡ Introduction
---------------
This chapter is about understanding **execution context**, the behavior
of `this`, and how to control function context using `call`, `apply`,
and `bind`. These are core to mastering OOP in JavaScript.

-------------------------------------------------------------------
1. Hoisting
-------------------------------------------------------------------
- Variable declarations (`var`) and function declarations are "hoisted"
  to the top of their scope before execution.
- `let` and `const` are hoisted too, but stay in the **Temporal Dead Zone (TDZ)**.
- Function expressions are *not* hoisted.

-------------------------------------------------------------------
2. `this` Keyword
-------------------------------------------------------------------
- `this` refers to the object that is executing the function.
- In the global scope → `this` is `window` (browser) or `global` (Node).
- In object methods → `this` refers to the object.
- Arrow functions → `this` is lexically scoped (from parent context).

-------------------------------------------------------------------
3. call / apply / bind
-------------------------------------------------------------------
- `call` → invoke function immediately with explicit `this` + arguments.
- `apply` → same as `call`, but takes arguments as an array.
- `bind` → creates a new function with locked `this`.

-------------------------------------------------------------------
4. OOP Prep
-------------------------------------------------------------------
- Constructor functions and ES6 classes use `this` to initialize objects.
- Prototypes and method borrowing often use `call`, `apply`, `bind`.
- Understanding context = key to mastering object-oriented JS.

===================================================================
*/


/* =========================================================================
SECTION 1: HOISTING (4 Exercises)
========================================================================= */

/* 1. Function vs Var Hoisting */
console.log(a); // undefined (var is hoisted, initialized as undefined)
var a = 5;

foo(); // Works (function declaration is hoisted)
function foo() { console.log("foo called"); }

/* 2. Temporal Dead Zone */
try {
    console.log(b); // ReferenceError
    let b = 10;
} catch (e) {
    console.log("TDZ Error:", e.message);
}

/* 3. Function Expression Hoisting */
try {
    bar(); // TypeError: bar is not a function
    var bar = function() { console.log("bar"); };
} catch (e) {
    console.log("FuncExpr Error:", e.message);
}

/* 4. Quiz */
function quiz() {
    console.log(x); // undefined
    var x = 20;
    console.log(x); // 20
}
quiz();


/* =========================================================================
SECTION 2: THIS CONTEXT (4 Exercises)
========================================================================= */

/* 5. Method vs Standalone Function */
const obj1 = {
    name: "Rohan",
    greet: function() { console.log("Hello", this.name); }
};
obj1.greet(); // Hello Rohan
const fn = obj1.greet;
fn(); // Hello undefined (or window in browser)

/* 6. Arrow vs Normal */
const obj2 = {
    name: "JS",
    normal: function() { console.log("Normal:", this.name); },
    arrow: () => console.log("Arrow:", this.name)
};
obj2.normal(); // "Normal: JS"
obj2.arrow();  // "Arrow: undefined"

/* 7. Nested this fix */
const obj3 = {
    count: 0,
    inc: function() {
        const self = this;
        function inner() {
            self.count++;
            console.log("Nested:", self.count);
        }
        inner();
    }
};
obj3.inc(); // Nested: 1

/* 8. setTimeout + this */
const obj4 = {
    count: 0,
    inc: function() {
        setTimeout(() => {
            this.count++;
            console.log("setTimeout:", this.count);
        }, 500);
    }
};
obj4.inc();


/* =========================================================================
SECTION 3: CALL / APPLY / BIND (4 Exercises)
========================================================================= */

/* 9. Borrow Method with call */
function sayHello(age) {
    console.log(`Hi, I am ${this.name}, ${age} years old`);
}
const person = { name: "Rohan" };
sayHello.call(person, 23);

/* 10. Apply for Math */
console.log("Max via apply:", Math.max.apply(null, [1,2,3,4]));

/* 11. Bind for Reuse */
function drive(extra) { return this.speed + extra; }
const car = { speed: 50 };
const fastDrive = drive.bind(car, 20);
console.log("Bind:", fastDrive()); // 70

/* 12. Event Handler with bind (simulated) */
const button = {
    label: "Click Me",
    click: function() { console.log("Button:", this.label); }
};
const boundClick = button.click.bind(button);
boundClick(); // "Button: Click Me"


/* =========================================================================
SECTION 4: OOP & CONTEXT MANIPULATION (4 Exercises)
========================================================================= */

/* 13. Constructor Function */
function Person(name) {
    this.name = name;
    this.say = function() { console.log("Hi, I’m", this.name); };
}
const p1 = new Person("Rohan");
p1.say();

/* 14. Prototype Method */
Person.prototype.greet = function() {
    console.log("Greetings from", this.name);
};
p1.greet();

/* 15. Class Syntax */
class Animal {
    constructor(type) { this.type = type; }
    speak() { console.log(`${this.type} makes a sound`); }
}
const dog = new Animal("Dog");
dog.speak();

/* 16. Method Borrowing */
const objA = { name: "Alice", show: function() { console.log(this.name); } };
const objB = { name: "Bob" };
objA.show.call(objB); // "Bob"


/*
===================================================================
🔑 Final Key Takeaways:
1. Hoisting explains "why vars/functions work before declaration".
2. `this` depends on call-site, not where defined (arrow is exception).
3. call/apply/bind let you explicitly control context.
4. Constructor functions + classes use `this` to create objects.
5. Understanding context = foundation of OOP in JavaScript.
===================================================================
*/
