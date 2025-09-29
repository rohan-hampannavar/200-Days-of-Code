// ========================================================
// Day 5: Conditionals & Loops
// ========================================================

// --------------------------------------------------------
// 1. Conditional Statements
// --------------------------------------------------------
// if, if...else, if...else if
// switch → good for multiple discrete cases
// ternary: condition ? valueIfTrue : valueIfFalse

let num = 10;
if (num > 0) console.log("Positive");
else if (num < 0) console.log("Negative");
else console.log("Zero");

// Ternary
let status = num % 2 === 0 ? "Even" : "Odd";

// Switch
let day = 3;
switch(day){
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  default: console.log("Other day");
}

// --------------------------------------------------------
// 2. Loops
// --------------------------------------------------------
// for, while, do...while, for...of, for...in

// For loop
for(let i=1;i<=5;i++) console.log("For loop:", i);

// While loop
let i=1;
while(i<=5){ console.log("While loop:", i); i++; }

// Do...while
i=1;
do{ console.log("DoWhile loop:", i); i++; } while(i<=5);

// For...of (arrays)
let arr = [10,20,30];
for(let val of arr) console.log("For of:", val);

// For...in (object keys)
let obj = {a:1, b:2};
for(let key in obj) console.log("For in:", key, obj[key]);

// --------------------------------------------------------
// 3. Practice Problems (Standard)
// --------------------------------------------------------

const isEven = n => n % 2 === 0;
const isOdd = n => n % 2 !== 0;

// Q1: Check even/odd
console.log(isEven(4), isOdd(7));

// Q2: Sum 1–50
let sum=0; for(let i=1;i<=50;i++) sum+=i; console.log(sum);

// Q3: Multiplication table of 7
for(let i=1;i<=10;i++) console.log(`7 x ${i} = ${7*i}`);

// Q4: Reverse string
const reverseString = str => str.split("").reverse().join("");
console.log(reverseString("Hello"));

// Q5: Count vowels in string
const countVowels = str => (str.match(/[aeiou]/gi)||[]).length;
console.log(countVowels("Javascript"));

// Q6: Largest in array
const arrNums = [12,45,67,23,89,5];
console.log(Math.max(...arrNums));

// Q7: FizzBuzz 1–50
for(let i=1;i<=50;i++){
  if(i%15===0) console.log("FizzBuzz");
  else if(i%3===0) console.log("Fizz");
  else if(i%5===0) console.log("Buzz");
  else console.log(i);
}

// Q8: GCD of two numbers
const gcd = (a,b) => b===0?a:gcd(b,a%b);
console.log(gcd(48,18));

// Q9: Menu-driven calculator
function calculator(a,b,op){
  switch(op){
    case "+": return a+b;
    case "-": return a-b;
    case "*": return a*b;
    case "/": return a/b;
    default: return "Invalid op";
  }
}
console.log(calculator(10,5,"*"));

// Q10: Print primes 2–50
for(let n=2;n<=50;n++){
  let isPrime=true;
  for(let i=2;i<=Math.sqrt(n);i++) if(n%i===0){isPrime=false; break;}
  if(isPrime) console.log("Prime:", n);
}

// --------------------------------------------------------
// 4. Hard-Mode Exercises
// --------------------------------------------------------

// Q11: Triangle star pattern
for(let i=1;i<=5;i++){ console.log("*".repeat(i)); }

// Q12: Numbers divisible by 3 and 7 (1–200)
for(let i=1;i<=200;i++) if(i%3===0 && i%7===0) console.log(i);

// Q13: Fibonacci series up to n=10
let a=0,b=1; console.log(a); console.log(b);
for(let i=3;i<=10;i++){ let c=a+b; console.log(c); a=b; b=c; }

// Q14: Reverse number
let number=12345, rev=0;
while(number>0){ rev=rev*10+number%10; number=Math.floor(number/10); }
console.log("Reversed:", rev);

// Q15: Armstrong number check
const isArmstrong = n => {
  let sum=0, temp=n;
  while(temp>0){ sum+=Math.pow(temp%10,3); temp=Math.floor(temp/10); }
  return sum===n;
};
console.log(isArmstrong(153), isArmstrong(123));

// Q16: Pangram check
const isPangram = str => {
  str = str.toLowerCase();
  for(let c=97;c<=122;c++) if(!str.includes(String.fromCharCode(c))) return false;
  return true;
};
console.log(isPangram("The quick brown fox jumps over the lazy dog"));

// Q17: Number guessing game (1–10)
const guessGame = (guess,num=7)=> guess===num ? "Correct!" : "Try again"; 
console.log(guessGame(7), guessGame(5));

// Q18: Do...while repeat until user input simulation (pseudo)
let count=0;
do{ count++; }while(count<3); console.log("Looped 3 times");

// Q19: Multiplication table grid (1–5)
for(let i=1;i<=5;i++){
  let row=""; for(let j=1;j<=5;j++) row+=i*j+"\t"; console.log(row);
}

// Q20: Menu calculator repeat until exit (pseudo loop)
let exit=false;
while(!exit){ exit=true; } // simulate user exits

// ========================================================
// TIP: Test individual functions or loops by uncommenting console.logs
// ========================================================
