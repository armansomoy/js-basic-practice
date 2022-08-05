const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 100,
    isCleaned: true,
}
const keys = Object.entries(bottle);
console.log(keys);

delete bottle.isCleaned;
console.log(bottle);

// Keys, values, entities, delete, seal, freeze