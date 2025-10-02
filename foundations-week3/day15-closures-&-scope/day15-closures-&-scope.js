/*
===================================================================
Chapter: Closures, Scope, and Their Role in React & Modern JS
===================================================================

⚡ Introduction
---------------
Closures are one of the most important concepts in JavaScript.  
A closure happens when a function "remembers" the variables from the scope 
in which it was created, even after that scope has finished executing.

Why it matters:
- Enables **data privacy** (like private variables).
- Powers **function factories** (dynamic function creators).
- Essential for **React Hooks** (state & side-effect management).
- Used in event listeners, callbacks, and async code.

-------------------------------------------------------------------
Key Concepts
-------------------------------------------------------------------
1. **Scope**  
   - Lexical (static) scope: JS uses where functions are *defined*, not 
     where they are called, to resolve variables.

2. **Closure**  
   - Inner function retains access to outer function’s variables.

3. **Practical Uses**  
   - Counters (persistent state)
   - Function factories (generate functions dynamically)
   - React hooks (useState, useEffect depend on closure mechanics)

-------------------------------------------------------------------
Basic Example
-------------------------------------------------------------------
function outer() {
    let count = 0;
    function inner() {
        count++;
        return count;
    }
    return inner;
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
===================================================================
*/


/* =========================================================================
SECTION 1: COUNTERS (5 Exercises)
========================================================================= */

/* 1. Basic Counter */
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const c1 = createCounter();
console.log("Counter1:", c1()); // 1
console.log("Counter1:", c1()); // 2

/* 2. Independent Counters */
const c2 = createCounter();
console.log("Counter2:", c2()); // 1
console.log("Counter1 still:", c1()); // 3

/* 3. Step Counter */
function createStepCounter(step) {
    let count = 0;
    return function() {
        count += step;
        return count;
    };
}
const stepper = createStepCounter(5);
console.log(stepper()); // 5
console.log(stepper()); // 10

/* 4. Resettable Counter */
function createResettableCounter() {
    let count = 0;
    return {
        inc: () => ++count,
        reset: () => (count = 0)
    };
}
const r = createResettableCounter();
console.log(r.inc()); // 1
r.reset();
console.log(r.inc()); // 1 again

/* 5. Max-Bound Counter */
function createMaxCounter(max) {
    let count = 0;
    return function() {
        if (count < max) count++;
        return count;
    };
}
const maxC = createMaxCounter(3);
console.log(maxC(), maxC(), maxC(), maxC()); // 1,2,3,3


/* =========================================================================
SECTION 2: FUNCTION FACTORIES (5 Exercises)
========================================================================= */

/* 6. Multiplier Factory */
function multiplier(factor) {
    return function(num) {
        return num * factor;
    };
}
const double = multiplier(2);
console.log(double(10)); // 20

/* 7. Greeting Factory */
function greeter(greeting) {
    return function(name) {
        return `${greeting}, ${name}!`;
    };
}
const hi = greeter("Hi");
console.log(hi("Rohan")); // Hi, Rohan!

/* 8. Power Factory */
function powerFactory(exp) {
    return function(base) {
        return base ** exp;
    };
}
const square = powerFactory(2);
console.log(square(5)); // 25

/* 9. Range Checker */
function inRange(min, max) {
    return function(num) {
        return num >= min && num <= max;
    };
}
const between10and20 = inRange(10, 20);
console.log(between10and20(15)); // true

/* 10. Logger Factory */
function logger(prefix) {
    return function(message) {
        console.log(`${prefix} ${message}`);
    };
}
const warn = logger("⚠️ WARN:");
warn("Low battery");


/* =========================================================================
SECTION 3: REACT HOOK STYLE CLOSURES (5 Exercises)
========================================================================= */

/* 11. useState Clone */
function useState(initial) {
    let state = initial;
    function get() { return state; }
    function set(newVal) { state = newVal; }
    return [get, set];
}
const [count, setCount] = useState(0);
console.log(count()); // 0
setCount(10);
console.log(count()); // 10

/* 12. useToggle */
function useToggle(initial = false) {
    let state = initial;
    function toggle() { state = !state; return state; }
    return [() => state, toggle];
}
const [getT, toggle] = useToggle();
console.log(getT()); // false
toggle();
console.log(getT()); // true

/* 13. useCounter */
function useCounter(initial = 0, step = 1) {
    let count = initial;
    return [
        () => count,
        () => (count += step),
        () => (count -= step),
        () => (count = initial)
    ];
}
const [getC, incC, decC, resetC] = useCounter(5, 2);
console.log(getC()); // 5
incC(); incC();
console.log(getC()); // 9
resetC();
console.log(getC()); // 5

/* 14. useArray */
function useArray(initial = []) {
    let arr = [...initial];
    return [
        () => arr,
        (item) => arr.push(item),
        () => arr.pop(),
        () => (arr = [])
    ];
}
const [getArr, pushArr, popArr, clearArr] = useArray([1,2]);
pushArr(3);
console.log(getArr()); // [1,2,3]
popArr();
console.log(getArr()); // [1,2]

/* 15. useOnce (run once only) */
function useOnce(fn) {
    let called = false;
    return function(...args) {
        if (!called) {
            called = true;
            return fn(...args);
        }
    };
}
const init = useOnce(() => console.log("Initialized!"));
init(); // runs
init(); // ignored


/*
===================================================================
🔑 Final Key Takeaways:
1. Closures = function + preserved lexical scope.
2. Counters show persistent state without globals.
3. Function factories generate dynamic specialized functions.
4. React hooks are closure-based under the hood.
5. Mastering closures = mastery of modern JS + React internals.
===================================================================
*/
