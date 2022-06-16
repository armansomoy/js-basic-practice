const friends = ['Tom Hanks', 'Tom Cruise', ' Tom Buddy', 'Tom Satan'];
const fLengths = friends.map(friend => friend.length);
console.log(fLengths);

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

const productNames = products.map(product => product.name);
const productPrice = products.map(product => product.price);
const productColor = products.map(product => product.color);

console.log(productNames);
console.log(productPrice);
console.log(productColor);