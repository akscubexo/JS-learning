

console.log( 2 == "2") //return true , coercion takes place loose equality
//type coercion- convert operands into same type before making comparison
console.log(2 === "2") //typeof val is compared and conv dont takes place
//checks equality strict


console.log("Akshara".slice(3, 6))

let v= "animesh"
let w= v.slice(1,3)
console.log(w)

console.log("corporate".indexOf('rp'))
console.log("ankit".indexOf('k'))

const akshara = "   bitti"
console.log(akshara.trim())
console.log(String(12345).padStart(7, '0')) //padEnd

let sentence= "Leading case of benjamin bhutto"
let words= sentence.split(",")
console.log(words)
console.log(words.join("."))
console.log("aki".repeat(3))
console.log("akshara".length)

let s= 13.562376333
console.log(s.toPrecision(3))
console.log(s.toPrecision(14))

// function f(x){
//     console.log(x.toString())
//     console.log(x.toFixed(0))
//     console.log(x.valueOf())
// }



console.log(String(123)) //rep seq of characters
console.log((1).toString())  // can be called on an obj to obtain its strng rep
console.log(Number(123))
console.log(+(456))

console.log(typeof null)
console.log(String("true"))
console.log(true.toString())  

let val = true;
// let strVal = val + " " 
let strVal = !!val //true is coverted to boolea by double negation operator
console.log(strVal)

console.log(`${42}`)

console.log(typeof y)
console.log(Array.isArray([1,2,3]))
console.log(typeof NaN)// limitation of typeof- returns number 