//                Creating objs and accessing Properties

//In Js obj r fundamental data type used to represent 
//and store data in key-value pairs.


// 1. Obj Literal

let person = {
    name: 'John',
    age: 30,
    city: 'New Jersey'
}


//2. Obj Constructor 

// use the Object constructor to create an empty object 
//and then add properties and values.

let human = new Object();
human.name = 'aki'
human.age = 8
human.city = 'new york'


//3. Object.create

//Object.create() to create a new object with a specified prototype object.

let Person1 = Object.create(null)
Person1.name = 'ani'
Person1.age= 9
Person1.city = 'cali'



//                              Accessing Properties:


// Once you've created an object, you can access its properties using dot notan
// (object.property) or square bracket notation (object['property']).


console.log(person.name)
console.log(human['city'])


//                        Modifying and Adding Properties:

// Modifying properties
person.age = 31;

// Adding a new property
person.gender = 'Male';

// Deleting a property
delete person.city;



//                                   Object Methods:
// Objects can also have methods, which are functions defined as properties.

let person2 = {
    name: 'agam',
    age: 67,
    sayHello(){
        console.log(`Hello, my name is ${this.name}`)
    }
}
person2.sayHello()


//                                   Object Destructuring (ES6+):
// concise way to extract properties from objects using destructuring.


let {food, age} = person 
console.log(food)
console.log(age)

//                   Object.keys, Object.values, Object.entries (ES6+)
//get an array of keys, values, or key-value pairs from an object.

let keys = Object.keys(person);
let values = Object.values(person);
let entries = Object.entries(person);

console.log(keys);    // Output: ['name', 'age', 'gender']
console.log(values);  // Output: ['John', 30, 'Male']
console.log(entries); // Output: [['name', 'John'], ['age', 30], ['gender', 'Male']]


//                   context of this


//1.  Global context

console.log(this)

//2.  Function Context

//In a regular function (not an arrow function), 
//this refers to the object that invokes the function.

const person3 = {
    name: 'anie',
    greet: function() {
        console.log(`Hello, I am ${this.name}`);
    }
};

person3.greet(); // Outputs: Hello, I am anie


//3. Arrow func
 
// const myObject = {
//     b:2,
//     myMethod: () => {
//         console.log(this.b)  //undef
//     }
// }

// myObject.myMethod()

//. Arrow functions inherit this from the surrounding scope,
//global scope 

function createMyObject(){
    return {
        b:2,
        myMethod: function(){
            console.log(this.b)
        }
    }
}
const myObject1= createMyObject()
myObject1.myMethod()


//4.   Obj mthds


//When a function is called as a method of an object, this refers to that object.
// const person = {
    name: 'ankit',
//     greet: function() {
//         console.log(`Hello , ${this.name}`)
//     }
// }
// person.greet()


//5.    Constructor funcn

function Per(name){
     this.name= name
}

const cat = new Per('cat')
console.log(cat.name)

// 6.  Event Handlers

{/* <button onclick="console.log(this)">Click me</button> */}


// creating Methods

const myObject = {
    property1: 'value',

    // Shorthand method syntax
    myMethod() {
        console.log('This is a method.');
    }
};

myObject.myMethod(); // Outputs: This is a method.



//                   in keyword

//returns true if the specified property is in the specified object 
//or its prototype chain.

const car = { make: 'honda', model: 'konw', year: 1222}
console.log('make' in car)  //true

delete car.make
if('make' in car == false){
    car.make= 'suzuki'
}

console.log(car.make)   //suzuki

//If you want to check for only non-inherited properties,
// use Object.hasOwn() instead.


//You must specify an object on the right side of the in operator.

const color1 = new String("green");
"length" in color1; // returns true

//but you cannot specify a string literal.
const color2 = "coral";
// generates an error (color2 is not a String object)
"length" in color2;


