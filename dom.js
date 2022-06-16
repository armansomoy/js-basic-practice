document.getElementById('add-border').addEventListener('click', function () {
    const container = document.getElementById('friend-container');
    container.style.border = '1px solid black';
    container.style.padding = '20px';
})

function addBackgroundColor() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = "lightgreen";
        friend.style.padding = "10px";
    }
}
document.getElementById('add-friend').addEventListener('click', function () {
    const container = document.getElementById("friend-container");
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
    <h3 class="friend-name">New Friend</h3>
    <p>Nihil, natus.</p>
    `;
    container.appendChild(friendDiv);
})


