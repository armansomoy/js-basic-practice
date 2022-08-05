const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 100,
    isCleaned: true,
};

for (const prop in bottle) {
    console.log(prop, bottle[prop]);
}

const keys = Object.keys(bottle);
// console.log(keys);
for (const prop of keys) {
    console.log(prop, bottle[prop])
}
const entries = Object.entries(bottle);
console.log(entries);
for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value);
}
// for ( let i = 0; i < 10; i++ ){

// }
// // array
// for (const number of numbers ){

// }
// // object
// for ( const prop in student ){

// }