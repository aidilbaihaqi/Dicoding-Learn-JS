//* Basic Object
const mail5 = {
  from: "aidilmusirjun@gmail.com",
  message: function(msg, to) {
    // console.log(`${msg}(from: ${this.from} to: ${to})`)
  }
}

mail5.message("Hello there, is my email", "cahyadi@gmail.com");

console.log('*-*-*-*-*-*-*-*-*-*');

//* Class
//? Create class with prototype
// function Mail() {
//   this.from = "aidilmusirjun@gmail.com";
// }

// Mail.prototype.sendMessage = function(msg, to) {
//   console.log(`you send: ${msg} to: ${to} from: ${this.from}`);
// }

// const mail1 = new Mail();
// mail1.sendMessage("info bg", "cahyadi");

//? Create class without prototype
function Mail1() {
  this.from = "okta@gmail.com";
  this.sendMessage = (msg, to) => {
    console.log(`you send: ${msg} to: ${to} from: ${this.from}`);
  }
}

const mail2 = new Mail1();
mail2.sendMessage("info 2 bg", "yudha");

//! Very recomendded to use prototype while we create a class
//! WHY? because objects using prototype don't copy the 'send Message' attribute to each object.
//! Using prototype can save memory storage allocation

//? Create class with class syntax
class Mail3 {
  constructor() {
    this.from = "admin@gmail.com";
  }

  sendMessage(msg, to) {
    console.log(`you send: ${msg} to: ${to} from: ${this.from}`);
  }
} 

const mail3 = new Mail3();
mail3.sendMessage("info 3 bg", "user");

console.log('*-*-*-*-*-*-*-*-*-*');


//* Property & Method
class Email {
  constructor(sender) {
    this.sender = sender;
    this._contacts = []; 
    //? PRIVATE ATTR : with the addition '_" in the class attr, now the attr can't be access in outside of class
  }
  sendMessage(msg,to) {
    console.log(`you send: ${msg} to: ${to} from: ${this.sender}`);
    this._contacts.push(to);
  }
  static isValidPhone(phone) {
    return typeof phone === 'number';
  }
  //? STATIC METHOD : we can access a method without instantiating class
}

const email = new Email('Aidil');
email.sendMessage('hey, spiderman is coming', 'cahyadi@gmail.com');
console.log(Email.isValidPhone(0192844));

//* Constructor

console.log('*-*-*-*-*-*-*-*-*-*');

//* 4 OOP Concepts
class Mail {
  constructor(author) {
    this._contacts = [];
    this.from = author;
  }

  sendMessage(msg, to) {
    console.log(`you send: ${msg} to: ${to} from: ${this.from}`);
    this._contacts.push(to);
  }
  showAllContacts() { //? Encapsulation
    return this._contacts;
  }
}

class Whatsapp extends Mail { //? inheritance
  constructor(username, isBusinessAccount, phoneNumber) { //? Overriding Constructor
    super(phoneNumber); //? Call the parent class constructor
    this.username = username;
    this.isBusinessAccount = isBusinessAccount;
  }

  myProfile() {
    return `Hello, ${this.username}. Its your ${this.isBusinessAccount ? 'Business' : 'Personal'} account`;
  }

  sendMessage(msg, to) {
    super.sendMessage(msg, to); //? Call the parent class constructor / Overriding Method
    console.log('send by Whatsapp');
  }
}

const mail = new Mail("Aidil");
mail.sendMessage("ini pesannya", "Mama");

const allContacts = mail.showAllContacts(); //? output encapsulation
console.log(allContacts);

const wa = new Whatsapp("Albyhaqee", true, "089686638807"); //? Polimorphysm
console.log(wa.myProfile()); //? output inheritance
console.log(wa.from); //? output Overriding Constructor
