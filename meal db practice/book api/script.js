const searchFood = () => {
    const searchFiled = document.getElementById('search-filed');
    const searchResult = searchFiled.value;
    searchResult.value = '';

    const url = `https://openlibrary.org/search.json?q=${searchResult}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showResult(data.docs))
}

const showResult = (results) => {
    // const bookContainer = document.getElementById('book-container');

    // results.forEach(book => {
    //     console.log(book.title);
    //     const div = document.createElement('div');
    //     div.classList.add('card');
    //     div.innerHTML = `
    //         <img src="..." class="card-img-top" alt="...">
    //         <div class="card-body">
    //             <h5 class="card-title">Card title</h5>
    //             <p class="card-text">This card has supporting text below as a natural lead-in to additional content.
    //             </p>
    //             <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    //         </div>
    //         `;
    // });
    // bookContainer.appendChild(div);


    const searchResult = document.getElementById('search-result');
    // searchResult.innerHTML = '';
    // console.log(result.length);

    results.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('col-lg-4');
        div.innerHTML = `
        <div class="card">
              <img src="" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                
               
              </div>
            </div>
        `;
    })
    searchResult.appendChild(div);

}