const first = {
    a: 1,
    b: 2
};
const second = {
    a: 1,
    b: 2
};
console.log(JSON.stringify(first));
// if (JSON.stringify(first) === JSON.stringify(second)) {
//     console.log("Equal");
// } else {
//     console.log("Not Equal");
// }

function compareObjects(obj1, obj2) {
    if (compareObjects.keys(obj1).length !== Object.keys(obj2).length){
        return false;
    } for ( const prop in )
}