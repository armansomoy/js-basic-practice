const searchFood = () => {
    const searchField = document.getElementById('search-filed');
    const searchText = searchField.value;
    // clear data
    searchField.value = '';


    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals));
}

const displaySearchResult = result => {
    const searchResult = document.getElementById('search-result');
    // searchResult.innerHTML = '';
    // console.log(result.length);

    result.forEach(meal => {
        const div = document.createElement('div');
        div.classList.add('col-lg-4');
        div.innerHTML = `
        <div class="card">
              <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
                <button class="btn btn-outline-info" onClick="loadMealDetails(${meal.idMeal})">See Details</button>
              </div>
            </div>
        `;
    })
    searchResult.appendChild(div);
}

const loadMealDetails = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showDetails(data.meals[0]))
}

const showDetails = result => {
    console.log(result);
    const modalDialog = document.getElementById('modal-dialog');
    const div = document.createElement('div');
    div.classList.add('row');
    div.innerHTML = `
    <div class="col-md-5">
    <img src="${result.strMealThumb}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-7">
        <div class="card-body">
        <h5 class="card-title">${result.strMeal}</h5>
        <p class="card-text">${result.strInstructions}</p>

        </div>
    </div>
    `;
    modalDialog.appendChild(div);
}