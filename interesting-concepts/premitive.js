/*
Primitive Types
1. Number 
2. Staring 
3. Boolean 
4. Undefined 
5. Null 
7. Symbol 

Non Primitive 
6. Object 
 */


let a = "Hello";
let b = a;
console.log(a, b);

a = 'gello';
console.log(a, b);

const x = {
    job: "Web Developer"
}
const y = x;
console.log(x, y);

y.job = "Front end Developer";
console.log(x, y);