
//1.      Using the Map object



const myMap = new Map()

const keyString = " a string"
const keyObj = {}                  // obj and func ref - diff one
const keyFunc= function(){}

(keyObj === {})

//setting the values

myMap.set(keyString , 'akshu')
myMap.set(keyObj, "anu")
myMap.set(keyFunc, "aaru")

console.log(myMap.size) //3

//getting the values

console.log(myMap.get(keyString))
console.log(myMap.get(keyObj))
console.log(myMap.get(keyFunc))

console.log(myMap.get(" a string"))
console.log(myMap.get({}))     //key Obj!== {}  u r creating new obj here, so here it will point to new obj refrence 
console.log(myMap.get(function(){}))    // keyFunc!== function (){}, u r creating new func here

// new obj and new func will point to diff address
//the old obj and old func will point to - their address refrence stored in the heap 
// obj and function will always point to their refrence - that too new refrence
//in case of primitive it will return the value but not in obj and func they will return ref


// 2.     Using NaN as Map keys


const myMap1= new Map()
myMap1.set(NaN, 'not a number')

myMap1.get(NaN)

const otherNaN = Number("foo")
myMap1.get(otherNaN)


//3. iterating map using forEach loop

Map.forEach(key, value) => { 

console.log(`${key} = ${value}`)
}

// 4. cloning map

const map= new Map([[1, "one"]])
const clone = new Map(map)
console.log(clone.get(1))

// 5.       merging maps

const mak1 = new Map ([
    [1, "one"],
    [2, "two"],
    [3, "three"]
])

const mak2 = new Map([
    [1, 'uno'],
    [2, 'des']
])

const merged = new Map ([ ...mak1,   ...mak2]) //use of spread

  // Spread syntax essentially converts a Map to an Array


  merged.forEach((key, value)=> {
    console.log(`${key} = ${value}`)
  })
