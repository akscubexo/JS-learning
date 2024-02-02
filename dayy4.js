
//               Arrays and Methods

const arr = [ 'me', 'myself', 'love', 'why', 'got']
arr.push('akshu')  //at the end
arr.unshift('anie')  //start
arr.push('halwa')
console.log(arr)
arr.pop()  //deletes last elm
arr.shift()  //delets first elm

const arr1 = ["tell", "me", "why", "ain't", "nothing", "but", "a", "mistake"];

const arr2= arr.concat(arr1)
console.log(arr2)
console.log(arr2.includes('tell'))    //
console.log(arr2.reverse())

console.log(arr1.slice(1,3))
console.log(arr1.splice(0, 1))

//slice()
const fruits = [ 'apple', 'kiwi', 'mango']
const slicedFruits = fruits.slice(1,3)
console.log(slicedFruits)    //Returns a new array obj pehli arg ko include krega last arg -1 tk ka return krega. 

// splice()
// removing/replace existing elems,  
//first argument specifies the array position/index .
// second argument indicates the number of elements to be deleted

const fruits = ['apple', 'banana', 'orange', 'kiwi'];
fruits.splice(1, 2, 'mango', 'cherry');
console.log(fruits); // Outputs: ['apple', 'mango', 'cherry', 'kiwi']


// map- Creates a new array with the results of 
//calling a provided function on every element in the array.

const numbers = [1,2, 3]
const squaredNumbers= numbers.map(num=> num*num)
console.log(squaredNumbers)

//filter - Creates a new array with the results of calling 
//a provided function on every element in the array.

const numbers = [1, 2, 3, 4, 5]
const evenNumbers = numbers.filter(num => num % 2 ===0)
console.log(evenNumbers)

//reduce- Applies a function against an accumulator and each element 
//in the array (from left to right) to reduce it to a single value.

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // Outputs: 15  reduces arr to a single value 


//                   Iterating over arrays


//1.  for loop
const numbers = [1, 2, 3, 4, 5]

for(let i=0; i<numbers.length; i++){
    console.log(numbers[i])
}

//2. for ... of loop

//ore concise syntax introduced in ECMAScript 2015 (ES6)
// for iterating over iterable objects, including arrays.

const numbers= [1,2,3,4,5]

for(const num of numbers){
    console.log(num)
}

//3.  for... each method

// iterating over each element of an array.
// It takes a callback function as an argument.

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num) => {
  console.log(num);
});
   


//                          SET AND MAPS 

//1. SET - stores unique values , duplicate val are automatically ignored
//order- based on insertion order
//Methods- add, clear, delete, has

let mySet = new Set()

mySet.add(1)
mySet.add(2)
mySet.add(3)

console.log(mySet)
console.log(mySet.has(1))

mySet.delete(2)
console.log(mySet)


// 2. Maps- 

// collection of key val pairs, each key must be unique
//unlike obj, map allows any data type to be use as key value pair
// mthds- set, get delete, has


let myMap = new Map()

myMap.set('name', 'akshu')
myMap.set(1, 'one')
myMap.set(true, 'boolean')


// another method w bracket notation to set property
// that way of setting a property does not interact with the Map data structure. 

myMap['anie'] = "kausi"


console.log(myMap.get('name'))

console.log(myMap.has(1))

myMap.delete('name')
console.log(myMap)

//read only map obj  have size and prop like
//entries(), forEach(), get(), has(), keys(), values(), and @@iterator.

//writable obj- clear , set, delete

//Static methods -Map.groupBy()
//Instance properties- Map.prototype.constructor, Map.prototype.size
//Instance Methods- Map.prototype.clear(), Map.prototype.delete(),
//Map.prototype.entries(), Map.prototype.forEach(), Map.prototype.get()
// Map.prototype.has(), Map.prototype.keys(),
