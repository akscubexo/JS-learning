// MAP


const arr= [5,2,3,1,6]

const output = arr.map((x)  => x.toString(2))
console.log(output)

const users =  [
    {firstName: 'akshara', lastName: 'sharma', age: 20},
    {firstname: 'anie', lastname: 'keni', age: 20},
    {firstName:'aki', lastName: 'ahi', age: 90},

]  //list of fullnames

const output4 = users.map((x) => x.firstName + " "+ x.lastName)
console.log(output4


//   FILTER-  filters the val within arr, 
//like filtering all the odd/even/,greater than 2 values
//numbers divisible by 3 inside an arr



// function isOdd(x){
//     return x % 2
// }

const output1 = arr.filter((x) => {
    return x> 4
})
console.log(output1)


//                REDUCE
// u have to take all the alm of an arr and -
//come up w a single val out of them


function findMax(arr){
    let max= 0
    for(let i=0; i<arr.length; i++){
        if(arr[i] > max){
            max= arr[i]
        }
    }
    return max
}
console.log(findMax(arr))

const output2 = arr.reduce(function(max, curr){
    if(curr> max) {
        max = curr
    } // acc- max, curr= arr[i]

    return max
    
}, 0)

console.log(output2)



 