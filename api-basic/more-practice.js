function getAlbum() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => getTitle(data));
}

function getTitle(users) {
    const ul = document.getElementById('title-show');
    for (const user of users) {
        console.log(user.title);
        const li = document.createElement('li');
        li.innerHTML = user.title;
        ul.appendChild(li);
    }
}

getAlbum();