const searchFood = async () => {
    const searchField = document.getElementById('search-filed');
    const searchText = searchField.value;
    // clear data
    searchField.value = '';


    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displaySearchResult(data.docs);
}

const displaySearchResult = result => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    // console.log(result.length);
    console.log(result);

    result.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('col-lg-4');
        div.innerHTML = `
        <div class="card">
              <img src="https://covers.openlibrary.org/b/id/${book.cover_i}.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <p class="card-text">Author Name: ${book.author_name} </p><p class="card-text">Publish date: ${book.publish_date} </p>
              </div>
            </div>
        `;
        searchResult.appendChild(div);
    })
}

