// Hello World
console.log('Hello World')

console.log('*-*-*-*-*-*-*-*-*-*')

// Data Type
const txt = "Its String"; // String
const num = 999; // Numbers
let bool = true; // Boolean
let und = undefined; // Undefined
let empty = null; // Null
var bigNum = 1234567890123456789012345678901234567890n; // BigInt
var sym = Symbol("id"); // Symbols

console.log(txt, num, bool, und, empty, bigNum, sym);

console.log('*-*-*-*-*-*-*-*-*-*')

// Operator 
// Assignment Operator
function assignment() {
  let x = 1;
  x+=2;
  console.log(x);
}
function comparison() {
  let x = 2;
  console.log(x!=2);
}
function logical() {
  let x = 15;
  console.log(x < 10 && x > 12);
}
assignment();
comparison();
logical();

console.log('*-*-*-*-*-*-*-*-*-*')

// Statement Condition 
// If else
function ifelseStatement() {
  let x = 1;
  if(x<5) {
    console.log('nilai x kurang dari 5');
  }else {
    console.log('nilai x lebih dari 5');
  }
}
function switchStatement() {
  let rs = 80;
  let grade;

  switch(rs) {
    case rs > 89 :
      grade = "A";
      break;
    case rs > 79 :
      grade = "B";
      break;
    case rs > 69 :
      grade = "C";
      break;
    default :
      grade = "D";
      break;
  }
  console.log(`Your grade is ${grade}`);
}
ifelseStatement();
switchStatement();

console.log('*-*-*-*-*-*-*-*-*-*')

// Loop
function forloop() {
  for(let i=1; i <= 10; i++) {
    console.log(i);
  }
}
function whileloop() {
  let i = 1;
  while(i<=10) {
    console.log(i)
    i++
  }
}
forloop();
whileloop();

console.log('*-*-*-*-*-*-*-*-*-*')