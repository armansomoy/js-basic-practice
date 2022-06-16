function loadData() {
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     .then(response => response.json())
    //     .then(json => console.log(json))

    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}


function loadPost() {

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => console.log(data))
}


// function loadUsers() {

//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(data => displayUsers(data))
// }

// function displayUsers(data) {
//     const ul = document.getElementById("users");

//     for (const user of data) {
//         const li = document.createElement('li');
//         li.innerText = `Name: ${user.name}, Email: ${user.email}`;
//         ul.appendChild(li);
//     }
// }



function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => getUser(data));
}

function getUser(data) {
    const ul = document.getElementById("users-show");
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}