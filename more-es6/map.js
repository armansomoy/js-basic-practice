const numbers = [4, 6, 8, 10];
const output2 = [];

// const doubleIt = number => number * 2;

// for (const number of numbers) {
//     const result = doubleIt(number);
//     output2.push(result);
// }
// console.log(output);

const output = numbers.map( x => x * 2);
console.log(output);


const squares = numbers.map( x => x * x );
// const squares = numbers.map(x => x * x);
console.log(squares);