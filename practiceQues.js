

//Q1        Write a program to find the sum of two numbers.


//a. 

const num1= 4    //declare num by const
const num2= 3

const sum= num1+num2   //declare sum var 

console.log(sum)  //console log


//b. 

function sumTriple(x, y){      
    if (x == y){
        return 3* ( x+ y)
    }else {
        return x+ y
    }

}
console.log( sumTriple(10, 20))
console.log(sumTriple(10,10))

//Q2        check even or odd

const numb = 45
const result = (numb % 2 == 0) ? 'even' : 'odd'
console.log(`the number is ${result}`)

//Q3       swap the values of two variables.

//a. Destructuring assignment


let a= 1;
let b= 2;

[a,b] = [b,a]

console.log(a)
console.log(b)


//b.  Temporary variable

let a1 = 3
let b1 = 4
let temp;

temp = a1;
a1=b1;
b1=temp;

console.log(a1)
console.log(b1)

// Q4   MAX of 2 nums

//a. 
 console.log(Math.max ( -1, -2, -3))


//b. 
const array = [1,2,3];
console.log(Math.max(...array));

//c. reduce

const arr= [1,2,3];
const max= arr.reduce((a,b)=> Math.max(a,b), -Infinity);


//Q5  Factorial of a number


//a. 
let n=5
function factorial(n){
    let ans =1

    if(n==0)
        return 1;
        for( let i=2; i<=n; i++)
        ans= ans*i
        return ans;
        
        }   
console.log(factorial(n))

//b. 
// let n = 5;

// function factorial(n) { 
// 	if (n === 0) { 
// 		return 1; 
// 	} 
// 	else { 
// 		return n * factorial( n - 1 ); 
// 	} 
// } 

// console.log(factorial(n));

//Q6    Reverse an array

//a. reverse mthd

let arra = [1,2,3,4]
console.log(arra.reverse())

//b. using reverse for loop

let arra1 = [1,2,3,4]
let rev_arra1 = []

for( i= arra1.length - 1; i>=0; i--){
    rev_arra1.push(arra1[i])
}
console.log('rev_arra1: ')
console.log(rev_arra1)

//c.  using map function

let array1 = [1, 2, 3, 4, 5];
reverse_array = array1.map((item, idx) => array1[array1.length - 1 - idx])
console.log(reverse_array);

//d. using reduce method
let original_array = [1, 2, 3, 4];

let rev_array = [];
 
rev_array = original_array
    .reduce((acc, item) => [item].concat(acc), [])

console.log(rev_array);

