console.log(111111);
console.log(222222);
// setTimeout(() => console.log('aaa'));
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
console.log(333333);
console.log(44444);