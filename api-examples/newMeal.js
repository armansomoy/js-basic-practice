const submit = () => {
    const searchField = document.getElementById('search-filed');
    const searchText = searchField.value;
    searchField.value = '';

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showMeal(data.meals));

}

const showMeal = (meals) => {
    const showResult = document.getElementById('show-result');
    showResult.textContent = '';
    meals.forEach(meal => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            <button type="button" class="btn btn-primary" onclick="loadMealDetail(${meal.idMeal})">See Details</button>
        </div>
        `;
        showResult.appendChild(div);
    })
}

const loadMealDetail = mealIdName => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealIdName}`;
    fetch(url)
        .then(res => res.json())
        .then(data => loadMealDetails(data.meals[0]));
}

const loadMealDetails = (meal) => {
    console.log(meal);
    const mealDetailsBox = document.getElementById('meal-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text">${meal.strInstructions}</p>
    <a href="${meal.strYoutube}" class="btn btn-primary" target="_blank">Tutorial Link</a>
    </div
    `
    mealDetailsBox.appendChild(div);
}