function getPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => getPhoto(data))
}


function getPhoto(photos) {

    const myDiv = document.getElementById('photos');
    for (const photo of photos) {
        console.log(photo);

        const div = document.createElement('div');
        div.classList.add('photos');
        div.innerHTML = `<img src="${photo.thumbnailUrl} " alt="">`;
        myDiv.appendChild(div);
    }
}
getPhotos();