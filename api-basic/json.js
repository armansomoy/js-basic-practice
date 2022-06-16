// js object Notation 
//  JSON

const user = {
    id: 11,
    name: 'Gorib Amir',
    job: 'actor'
};

const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    name: " Aliya Store",
    address: 'Ranbir Road',
    profit: 15000,
    products: ['laptop', 'mobile', 'pepse'],
    owner: {
        name: 'Aliya Bhatt',
        profession: 'Actor'
    },
    isExpensive: false
}

const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted);