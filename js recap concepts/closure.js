// const bank = owner => {
//     balance = 0;
//     return amount => {
//         // balance = balance + amount;
//         balance += amount;
//         return balance;
//     }
// }


const bank = owner => {
    balance = 0;
    return {
        deposit: amount => {
            balance += amount;
            return balance;
        },
        withdraw: amount => {
            balance -= amount;
            return balance;
        }
    }
}
const mofijBank = bank("Mofij");
console.log(mofijBank.deposit(100));
console.log(mofijBank.deposit(300));
console.log(mofijBank.deposit(50));
console.log(mofijBank.withdraw(300));