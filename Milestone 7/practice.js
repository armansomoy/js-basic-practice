// setTimeout(function () {
//     console.log("hello")
// }, 3500)


const clickMe = () => {
    console.log('clckd')
    const input = prompt();
    const data = parseInt(input);
    console.log(data);
    const result = data + 200;
    alert(result);
}

const given = confirm("are you ok?");