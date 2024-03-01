// ? Javascript data type for more complex data sctructure
//  * Object
const students = {
  name : 'Aidil Baihaqi',
  age : 17,
  isMarrige : false,
  "classroom" : "XII RPL"
}

let isMarrige = null;
if(students.isMarrige === true) {
  isMarrige = 'already';
}else {
  isMarrige = 'not';
}

console.log(`Hello my name is ${students.name}, i'm ${students.age} years old and ${isMarrige} married`);
console.log(students["classroom"]);

// ! Change and Add Object Data
students.name = "Cahyadi Prasetyo";
students["isMarrige"] = true;
students["country"] = "Indonesia";
console.log(students); 

// ! Delete Object data
delete students["isMarrige"];
console.log(students);
// * End Object

console.log('*-*-*-*-*-*-*-*-*-*')

// * Array
let dataArray = ['Hello World', 12, true, 12.05];
console.log(dataArray);
console.log(`The string is ${dataArray[0]}`);

dataArray.push = "Aidil Baihaqi"; // ? Push data
dataArray.pop(); // ? Remove last data
dataArray.shift(); // ? Remove first data
dataArray.unshift("First") // ? Add data from the front
delete dataArray[3] // ? Delete data without element
dataArray.splice(2, 1) // ? Delete with element

console.log(dataArray);
console.log(dataArray.push);

// * End Array

console.log('*-*-*-*-*-*-*-*-*-*')

// * Spread Operator
// ! Array Spread Operator
let arraySatu = ['Aidil', 'Pras', 'Okta'];
let arrayDua = [17, 18, 19];

const withSpread = [arraySatu, arrayDua];
const withoutSpread = [arraySatu, arrayDua];
console.log(withSpread);
console.log(withoutSpread);

// ! Object Spread Operator
// ? to spread object, both key of object must different. if same, will be overwritten
let objectSatu = {name: 'Aidil Baihaqi', age: 17};
let objectDua = {address: 'Kp Jati 3', isMarrige: false};

const withspread = {...objectSatu, ...objectDua};
const withoutspread = {objectSatu, objectDua};

console.log(withspread);
console.log(withoutspread);

// * End Spread Operator

console.log('*-*-*-*-*-*-*-*-*-*')

// * Destructing Object
// ! Basic Destructing Object
// const profile = {
//   firstname: "Aidil",
//   lastname: "Baihaqi",
//   age: 18
// }

// const {firstname, lastname, age} = profile;

// console.log(firstname, lastname, age);

// ! Destructing Assignment
// const profile = {
//   firstname: "Aidil",
//   lastname: "Baihaqi",
//   age: 18
// }

// let firstname = "Cahyadi";
// let lastname = "Prasetyo";
// let age = 17;

// ({firstname, lastname, age}=  profile);

// console.log(firstname, lastname, age);

// // ! Default Value 
// const person = {
//   name: "Yudha Prayoga",
//   address: "Kp Baru Keke"
// }

// // const {name, address, isMale} = person;
// // console.log(name, age, isMale);
// // ? to handle this, we can set a default value if undefined is true

// const {name, address, isMale = true} = person;
// console.log(name, age, isMale);

// ! Assigning to different local variable names
const profile =  {
  name: "Aidil Baihaqi", 
  address: "Kp Jati 3",
  age: 18
}

const {name: localName, address: localAddress, age: localAge} = profile;
console.log(localName, localAddress, localAge);
// * End Destructing Object

console.log('*-*-*-*-*-*-*-*-*-*')

// * Destructing Array 
// ! Basic Destructing Array
// const favorites = ['blue', 'golden hour', 'mercedes'];

// const [color, song, car] = favorites;
// console.log(color, song, car);

// ! Destructing Assingment
const favorites = ['blue', 'golden hour', 'mercedes'];

let color = "pink";
let car = "toyota";

[color, car[2]] = favorites;
console.log(color, car);

//! Default Values
const fruits = ['banana'];
const [fruit, fruit2 = 'apel'] = fruits;

console.log(fruit, fruit2);
// * End Destructing Array 

console.log('*-*-*-*-*-*-*-*-*-*')

// * Map

const myMap = new Map([
  ['first', 'first data'],
  ['second', 'second data'],
  ['third', 'third data']
])

console.log(myMap.size); //? to see how many data in array
console.log(myMap.get('first')); //? to get value of array with key
myMap.set('fourth', 666) //? to add data to map
console.log(myMap.get('fourth'));

console.log(myMap.has('first'));
myMap.delete('fourth');
console.log(myMap.size);

// * EndMap

console.log('*-*-*-*-*-*-*-*-*-*')

// * Set

const numberSet = new Set([1,9,2,3,4,5,6,4,5,4,3,2]);

numberSet.add(10); //? to add data to Set
numberSet.delete(9); //? to delete data in set 
console.log(numberSet);


// * EndSet

console.log('*-*-*-*-*-*-*-*-*-*')

//* WeakMap

let visitsCountMap = new Map(); //? Save user data

function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}

let jonas = {name : "Jonas"};
countUser(jonas); //? add user "jonas"

jonas = null; //? object data "jonas" has deleted

//? delay is needed garbage collection to work
setTimeout(function() {
  console.log(visitsCountMap);
}, 10000)
//* End WeakMap
