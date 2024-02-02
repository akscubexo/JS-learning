//   promise

 const promise = new Promise(( resolve, reject) => {
    // contain an operation

     setTimeout( ()=> {
       const success = Math.random() < 0.5
    
    //return the state
    if(success){
        resolve( " async op completed")
    } else{
        reject( Error ("async op failed"))
    }
 } , 1000)
})

 promise
   .then((result) => {
    console.log("Success:" , result)
   })
   .catch((error) => {
    console.error("Error:", error.message)
   })


 // a promise is an object that encapsulates 
 //the result of an asynchronous operation.


//  A promise object has a state that can be one of the following:

//  Pending
//  Fulfilled with a value
//  Rejected for a reason

//To get the value of a promise when it’s fulfilled,
// you call the then() method of the promise object. 

//promise chaining
//you want to execute two or more related asynchronous operations, 
//where the next operation starts with the result from the previous step.

let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 3 * 100);
});

p.then((result) => {
    console.log(result);
    return result * 2;
}).then((result) => {
    console.log(result);
    return result * 3;
});

//The Promise.all() method returns a single promise
// that resolves when all the input promises have been resolved.

//promise.race()- d accepts a list of promises as an iterable object and returns 
//a new promise that fulfills or rejects as soon as there is one promise that 
//fulfills or rejects, with the value or reason from that promise.

//Promise.any() returns a single promise 
//that resolves to a value which is the result of the fulfilled promise:

//Promise.allSettled() method that accepts a list of Promises and returns a new promise that 
//resolves after all the input promises have settled, either resolved or rejected.

// Promise finally() method to 
//execute the code once the promise is settled, regardless of its outcome.

//async code- setTimeout
//The await will wait for the Promise returned from the f() to settle. 
//You use the await keyword to wait for a Promise to settle 
//either in a resolved or rejected state

let pizza 
function orderPizza(){
    console.log('Order Pizza')
    setTimeout(()=> {
        pizza = 'yum';
        console.log(`${pizza} is ready`)
    }, 2000)
    console.log('Pizza was ordered')
}
orderPizza()
console.log('Call qoli')
console.log(`Eat ${pizza}`)

//when you nest many callback functions, the code will be more difficult to maintain.
// And you end up with a notorious issue which is known as the callback hell.
//The async keyword allows you to define a function that handles asynchronous operations.
//Asynchronous functions execute asynchronously via the event loop. It always returns a Promise. 
//code w async keyword
async function getData(){
    return new Promise((resolve)=> {
        setTimeout(()=> {
            const data= "some data";
            resolve(data);
        }, 1000);
    });
}
async function main(){
    const result = await getData();
    console.log(result);
}
main();

// CallBack Func
function orderPizza(callback){
    setTimeout(() => {
        const pizza= 'yum'
        callback(pizza)
    }, 2000)
}
function pizzaReady(pizza){
    console.log(`Eat the ${pizza}`)
}

orderPizza(pizzaReady)
console.log('Call Qoli')
