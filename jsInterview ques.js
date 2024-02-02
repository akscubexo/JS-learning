// ways to create obj 

//1. obj literal

var object = {
    name: "Sudheer",
    age: 34
};

//2.  obj constructor

var object = Object();


//3.   Object's create method:

var object = Object.create(null);

//4. Function constructor:

function Person(name) {
    this.name = name;
    this.age = 21;
  }
  var object = new Person("Sudheer");

//5. Function constructor with prototype:

  function Person() {}
  Person.prototype.name = "Sudheer";
  var object = new Person();

//6.  ES6 Class syntax:


class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  var object = new Person("Sudheer");


//7. Singleton pattern:

var object = new (function () {
    this.name = "Sudheer";
  })();