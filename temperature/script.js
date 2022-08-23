const searchNow = () => {
    const searchBox = document.getElementById('search-field');
    const searchResult = searchBox.value;
    searchResult.value = '';

    const api = '461bf9ee101582f422aa98366faad84a';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchResult}&appid=${api}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => showResult(data))
}

const showResult = (result) => {
    console.log(result.weather[0]);
    const name = document.getElementById('name');
    name.innerHTML = result.name;
    const celsius = document.getElementById('celsius');
    celsius.innerHTML = result.main.temp;
    const lead = document.getElementById('lead');
    lead.innerHTML = result.weather[0].main;
}