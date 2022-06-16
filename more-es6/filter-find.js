const numbers = [5, 13, 7, 41, 30, 5, 2, 19];
const bigNumbers = numbers.filter(number => number > 20);
const smallNumbers = numbers.filter(number => number < 10);
console.log(bigNumbers);
console.log(smallNumbers);

const products = [{
    name: 'water bottle',
    price: 50,
    color: 'yellow'
},
{
    name: 'mobile phone',
    price: 1150,
    color: 'black'
},
{
    name: 'smart watch',
    price: 5010,
    color: 'pink'
},
{
    name: 'sticky notes',
    price: 40,
    color: 'pink'
},
{
    name: 'water glass',
    price: 540,
    color: 'white'
},
];

const expensive = products.filter( product => product.price > 100);
console.log(expensive);

const pink = products.filter(product => product.color == 'pink');
console.log(pink);