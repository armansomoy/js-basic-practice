// Any number truth it can be plus or minus except 0 
// String are always truth including single white space 
// Empty String are always False
// empty array, object are always truth 
let x = undefined;
console.log(typeof x);
if (x) {
    console.log("Truth");
} else {
    console.log("False");
}
const y = true;
if (y) {
    console.log("Truth");
} else {
    console.log("False");
}


function work(x, y = 4) {

    return x + y;

}

console.log(work(32));