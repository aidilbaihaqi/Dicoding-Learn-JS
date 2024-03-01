//* Basic Function
function greeting(name, language) {
  switch(language) {
    case "Indonesia" :
      console.log(`Halo, ${name}`);
      break;
    case "France" :
      console.log(`Bonjour, ${name}`);
      break;
    case "English" : 
      console.log(`Hello, ${name}`);
      break;
  }
}

greeting('Aidil', 'Indonesia');

console.log('*-*-*-*-*-*-*-*-*-*');

//* Function Parameter
const user = {
  name: "Aidil Baihaqi",
  age: 17
}

const hello = function ({name, age}) {
  console.log(`Hello my name is ${name} and im ${age} years old`);
}
hello(user);

console.log('*-*-*-*-*-*-*-*-*-*');

//* Default Parameter
function exponentsFormula(baseNumber, exponent = 2) {
  let result = baseNumber ** exponent;
  console.log(`${baseNumber} ^ ${exponent} = ${result}`);
}
exponentsFormula(5);

console.log('*-*-*-*-*-*-*-*-*-*');

//* Rest Parameter
function sum(...numbers) {
  let result = 0;
  for(let number of numbers ) {
    result += number;
  }
  return result;
}
console.log(sum(1,2,3,4,5));

console.log('*-*-*-*-*-*-*-*-*-*');

//* Arrow Function
const sayName = (name) => {
  console.log(`Hello, ${name}`);
}
sayName('Pras');

console.log('*-*-*-*-*-*-*-*-*-*');

//* Closure / Lexical scope (Nested Function)
function init() {
  let name = "Aidil Baihaqi";
  function greet() {
    console.log(`Hello ${name}`);
  }
  greet();
}
init();