// declare variable based on the name of an object property 
const myObject = {
    x: 2,
    y: 50,
    z: 600,
    a: 25,
    b: 68
};

const {
    x,
    b
} = myObject;
console.log(x, b);


// destructuring array 
const [p, q] = [45, 37];
console.log(p, q);