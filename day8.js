// JS is prototype based language, classes are syntactic sugar here
// it does not have classes inherently, it was introduced in ES6


// ##Object
// - collection of properties( var & const) and methods (functions)
// -toLowerCase




//              CLASSES
  class Rectangle {
    constructor(height, width){
        this.height = height
        this.width = width
    }
  }

  const Rectangle = class{

  }

  const Rectangle = class Rectangle2{

  }

 //              INHERITANCE W EXTENDS

  class Person {
    constructor(name){
        this.name = name   //name ko set krre hai
    }
    
    introduce(){
        return `Hello , I am ${this.name}`
    }

  }

  class Student extends Person{
    constructor(name, grade){
        super(name)     //parent class k name ko access krne k liye y constructor use krna pdega pr isme super define krenge
        this.grade= grade
    }


    study(){
        return `${this.name} is studying`
    }

    introduce(){
        return `${super.introduce()} I'm a student in grade ${this.grade}`  //super dot ka use krke access krte hai
    }
    introduce(name){
        return `${super.introduce()} I'm a student in grade ${this.grade} ${name}`
    }
 
    }


const student = new Student('akshara', 8)
console.log(student.introduce())
console.log(student.study())

//  Private properite #


class SecretDiary{
    #privateNote
    static employeeName= 'harsh'      // this prop only belongs to its class, not to the instances of that class

    constructor(){
        this.#privateNote = "this is a secret"
    }

    revealSecret(){
        return this.#privateNote
    }
}


const myDiary = new SecretDiary()
console.log(myDiary.revealSecret()) // this is secret
console.log(SecretDiary.employeeName)





new Object({}).




//                   FACTORY FUNCTIONS

function createCircle(radius){
    return{
        radius, 
        draw: function(){
            console.log('draw')
        }
    }
}

const circle = createCircle(1)

//                    CONSTRUCTOR FUNCTION (this+ new)

function Circle(radius){
    this.radius = radius
    this.draw = function(){
        console.log('draw')
    }
}

Circle.call({}, 1)
Circle.apply({}, [1,2,3])
const another = new Circle(1)


//                VALUES VS REFERENCE TYPE

let x= 10
let y = x

x= 20

//          ENUMERATING PROPERTIES

 
 

//               CONSTRUCTOR PROPERTY
// every obj in js has a property called constructor - that refrences the funcn that was
// used to create that obj 
// built in js const- String, boolean, numbers


//            Functions are object


// ## parts of OOPS
// Object literal


// -constructor function
// -Prototypes
// - Instances(new, this)



// # 4 pillars  //chatgpt w example

// Abstraction - hiding the details  show only essential,eg- fetch

      
function Circle(radius){


    this.radius = radius

    let defaultLocation = { x: 0, y: 0}  //implementation details


     let computeOptimumLocation = function(factor){
          ///.......
    }


    this.draw = function(){

        let x, y

        computeOptimumLocation ()

        console.log('draw')
    }
}

const circle =  new Circle(10)
circle.draw()


//            GTTERS AND SETTERS
 
          
function Circle(radius){


    this.radius = radius

    let defaultLocation = { x: 0, y: 0} 



    this.defaultLocation = function(factor){
        ///.......
        return defaultLocation
  }


    this.draw = function(){
        console.log('draw')
    }


    Object.defineProperty( this, 'defaultLocation', {
        get: function(){
            return defaultLocation
        }

        set: function(value){
            if(!value.x || !value.y)
            throw new Error('Invalid Location')

            defaultLocation = value
        }
    })
}
        
const circle =  new Circle(10)
circle.DefaultLocation = 1
circle.draw()    



// Encapsuation - wraps up method n funcn
// Inheritance
// Polymorphism - many forms 

class MathOperations{
    static add(x,y){
        return x+y
    }
    
    multiply(x, y){  
        // goes into prototype of obj 
        return x*y
    }
}
const calculator = new MathOperations();

console.log(MathOperations.multiply(3,4))
console.log(calculator.multiply(2,3))

                       constructor of a class

class Animal{
    constructor(name){
        this.name = name
    }
}

class Dog extends Animal{
    bark(){
        console.log('woof')
    }
}
const myDog = new Dog('buddy')
console.log(myDog.name)
myDog.bark()

                     new instance of a class

class Car {
    constructor(make, model){
        this.make = make
        this.model = model
    }
}

const myCar = new Car('Mercedes', 'bmw')

console.log(myCar)


    inheritance of class
class Animal {
    constructor(name, age){
    this.name = name
    this.age = age
}
}

class Dog extends Animal {
    bark (){
        console.log('woof')
    }
}
const myDog = new Dog('goldie')
console.log(myDog)

//           static methods

class mathOperation{
    static add(x, y){
        return x+y
    }
}
const result = mathOperation.add(858, 366)
console.log(result)

// get and set method

class circle {
    constructor (radius){
        this.radius = radius
    } 
    
    #private = 8
    get radius(){
        return this.#private
    }
    
    set radius(newRadius){
        if(newRadius > 0){
            this.radius = newRadius
        }
    }
}
const myCircle = new circle(7)
console.log(myCircle.radius)

//         static

class myClass{
    
    static myProp= 'i m a static prop'
    name = 'i am aki'
    
    constructor(name){
        this.name = name
    }
}
    
    console.log(myClass.myProp)
    const myInstance = new myClass
    
    console.log(myInstance.name)
