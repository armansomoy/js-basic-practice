const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        // console.log(country);

        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
            <h3> ${country.name} </h3> 
            <p> ${country.capital} </p>
            <button onclick="loadCountryByName('${country.name}')">Show Details</button>
        `
        // const h3 = document.createElement('h3');
        // h3.innerHTML = country.name;
        // div.appendChild(h3);
        // const p = document.createElement('p');
        // p.innerHTML = country.capital;
        // div.appendChild(p);
        countriesDiv.appendChild(div);
    })

}
const loadCountryByName = name => {
    const url = `https://restcountries.com/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]));
}

const displayCountryDetail = country => {
    const countryDiv = document.getElementById('countryDetails');
    countryDiv.innerHTML = `
    <h5>${country.name}</h5>
    <p> ${country.population} </p>
    <img width="200px" src="${country.flag}">
    `
    console.log(country);
}
loadCountries();