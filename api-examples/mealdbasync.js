const searchFood =  async () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);

    // Clear Data
    searchField.value = '';

    if (searchText == '') {
        // please write something to display 
        alert('Write Something');
    } else {
        // load Data
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        const res = await fetch(url);
        const data = await res.json();
        displaySearchResult(data.meals);

        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => displaySearchResult(data.meals));
    }

}

const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    if (meals.length == 0) {
        // no result 
    }
    meals.forEach(meal => {
        console.log(meal)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                </div>
            </div>
        `
        searchResult.appendChild(div);
    })
}

const loadMealDetail = async mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

    const res = await fetch(url);
    const data = await res.json();
    displayMealDetails(data.meals[0]);


    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => displayMealDetails(data.meals[0]));
}

const displayMealDetails = meal => {
    console.log(meal);

    const mealDetails = document.getElementById('meal-details');
    mealDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <div class="card" style="width: 18rem;">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}.</p>
                <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    `;
    mealDetails.appendChild(div);
}