const favNum = 7;

function add(first, second) {
    const result = first + second;
    if (result > 9) {
        const mood = "happy";
        console.log(mood);
    }
    return result;
}

const sum = add(11, 35);
console.log(sum);