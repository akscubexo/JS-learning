
// while loop- no. of iterations are not known in advance
//loop continues as long as specified condition is true
//suitable when the condition is checked before each iteration


let i= 1
while
    ( i<= 5){
        console.log(i)
        i++
    } 


//For Loop- no. of iterations are known in advance 
//consists of 3 parts- initializatn, conditn, iteration


for(let i=0; i<=5; i++){
    console.log(i)
}

  
//Do- while loop- gurantees that code block is executed at least once 
//before the condtn is checked
//useful when you want the code block to execute at least once.


let m=1   //initializatn
do{
    console.log(m)          //code to be executed in each iteration
    m++
} while (m<=5 )       


//Break, continue keyword in for 

for(i=0; i<=4; i++){
if(i == 3 ){
    break
} else if 
     (i % 2 == 0){ //skip even no.
        continue
    }
    console.log(i)
}



//Break continue in while 

let k=1
while(k <=4){
 
if(k == 3){
    break
} else if (k % 2 == 0){
k++
continue
}
console.log(k)
k++}

//Break in do-while
let counter = 1; // Use a different variable name

do {
    console.log(counter);
    if (counter == 3) {
        break;
    }
    counter++;
} while (counter <= 5);


//  for...in and for...of loop for iterating over array and objects

let obje = {
    name: 'akshara',
    age: '12',
    "city name":'idr'
}

obj['city name']= idr

obje.food = 'idli-sambhar'   //adding a new key

for( let key in obje){
    console.log(key + ':' + obje[key])
}


let obj = {
    name: 'ani',
    age: 89,
    
}

obj.food= 'pizza'

for(let key in obje){
    console.log(key + ":" + obj[key])
}

//for.... of loop

let arra = [1,2,3,4]

arra.push(5)

for(let num of arra){
    console.log(num)
}

//Logical Operators
let a= true
let b= false

console.log( a && b)  // false  returns true if both operands are true
console.log(a || b)   // true  returns true if atleast 1 operands are true
console.log(!a)


//Ternary Operators

//condition ? expression_if_true : expression_if_false;

let age = 20;
let message = (age >= 18) ? 'You can vote' : 'You cannot vote';
console.log(message);

//if-else

let number = 25

if(number>= 25){
    console.log('u can engage')
} else{
    console.log('u cannot dear')
}



//                             Functions

//1. Function declaratn

function functionName(parameters){
  //funcn body
}

//example  

function add(a,b){
    return a+b
}


//2.   Function Expressions-  a function is defined as part of an expression.

const functionName = function(parameters){

}

//ex

const add = function(a, b){
    return a+ b
}

//3. Arrow Functions

const functionName = (parameters) => {

}


//ex

const add = (a,b) => a + b


//4. Function Constructor 

const functionName = new Function('p1', p2)

//ex

const add = new Function( 'a', 'b', 'return a+b')


//5 IIFE

(function() {

})()

//ex

(function (){
    console.log('I am an IIFE')
})()


//6 Generator Funcn

function* generatorFunction(){
    //funcn body w yeild st
}

//ex

function* countUpTo(n){
    for(let i=1; i<=n; i++){
        yield i
    }
}

//7. Pure func- 

//given the same input, will always return the same output 
//and has no side effects. Side effects include modifying external variables, 
//logging to the console, or any other interaction with the external world.
// They only depend on their input parameters.
// They don't modify external state.
// They don't have side effects.

// Pure function
function add(a, b) {
    return a + b;
}

// Pure function
function square(x) {
    return x * x;
}


//8. Impure func
// might have side effects or depends on external state. 
//These functions are less predictable and can be harder to reason about.


// Impure function with side effect
let total = 0;

function addToTotal(x) {
    total += x;
}

// Impure function depending on external state
function getRandomNumber() {
    return Math.random();
}

//9. CallBack Func
//function passed as an argument to another function, to be executed later.
//used in asynchronous programming, event handling,
//other scenarios where you want a function to be executed after another function completes

function fetchData(callback) {
    // Simulating an asynchronous operation
    setTimeout(function() {
        const data = 'Some data from the server';
        callback(data);
    }, 1000);
}

// Using fetchData with a callback
fetchData(function(result) {
    console.log(result);
});


