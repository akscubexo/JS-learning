
const arr= [5,2,3,1,6]

function findMax(arr){
    let max= 0
    for(let i=0; i<arr.length; i++){
        if(arr[i] > max){
            max= arr[i]
        }
    }
    return max
}
console.table(findMax(arr))

const output2 = arr.reduce(function(max, curr){
    if(curr> max) {
        max = curr
    } // acc- max, curr= arr[i]
   debugger
    return max
    
}, 0)

console.log(output2)