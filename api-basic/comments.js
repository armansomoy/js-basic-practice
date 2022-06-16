function getComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => getData(data))
}

function getData(comments) {
    const myBox = document.getElementById("comments");
    for (const comment of comments) {
        console.log(comment);

        const div = document.createElement("div");
        div.classList.add('comments-box');
        div.innerHTML = `
        <h2>Title: ${comment.name} </h2>
        <p> Description: ${comment.body} </p> 
        `;
        myBox.appendChild(div);
    }
}
getComments();