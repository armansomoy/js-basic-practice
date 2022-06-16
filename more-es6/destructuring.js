const fish = {
    id: 58,
    name: "King Hilsha",
    price: 9000,
    phone: "014234122525",
    address: "Chandpur",
    dress: "silver"
};
// const phone = fish.phone;
// const price = fish.price;
// const dress = fish.dress;
// const id = fish.dress;

const {
    phone,
    price,
    dress,
    id
} = fish;

// console.log(phone, price, dress, id);
console.log(price, phone, id);
console.log(price);
console.log(price);

const company = {
    name : "GP",
    ceo: {
        id: 1,
        name: "ajmol",
        food: 'fuchka'
    },
    web : {
        work: 'website development',
        employee: 22, 
        framework: 'react' 
    }
}

const {work, framework} = company.web;
const { food } = company.ceo;
console.log(work, framework, food); 