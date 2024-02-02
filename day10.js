// Basic idea about Mark & Sweep Algo:
// It comprise of 2 phases - 
// 1. Mark phase
// 2. Sweep phase

// All objects are marked as 0 initially (at creation) and in mark phase the objects that will be accessible are marked as 1 (reachable) by a DFS graph traversal.

// During sweep phase, the objects marked with 0 are removed from heap memory. and also all reachable objects are again initialized with 0 (made unreachable) because the algorithm will run again.



//   Functional Programming

const radius = [3,1,2,4]

const area= function(radius){
    return Math.PI* radius* radius
}


const circumference= function(radius){
    return 2* Math.PI* radius
}


const diameter= function(radius){
    return 2* radius
}

const calculate = function(arr, logic){
    const output = []
    for(let i=0; i<arr.length; i++){
        output.push(logic(arr[i]))
    }

    return output
}

console.log(radius.map(area))

console.log(calculate(radius, area))
console.log(calculate(radius, circumference))
console.log(calculate(radius, diameter))