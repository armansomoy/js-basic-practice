const numbers = [23, 65, 99, 21, 34];
// console.log(numbers); 
// console.log(...numbers);

const maxArrays = Math.max(...numbers);
// console.log(maxArrays);

// numbers.push(55);
// console.log(numbers);

const numbers2 = numbers;
numbers.push(55);
console.log(numbers2);


const  division =  (num1, num2) => num1 /num2;
console.log(division(4, 2));