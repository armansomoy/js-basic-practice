const getCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => countries(data))
}

const countries = countries => {
    const countryDiv = document.getElementById('countryBox');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('countryDiv')
        div.innerHTML = `
        <h2>Country Name:   ${country.name} </h2>
        <p> Region: ${country.region} </p>
        <button onclick="showDetails('${country.name}')">Show Details</button>
        `;
        countryDiv.appendChild(div);
    })
}

const showDetails = name => {
    const url = `https://restcountries.com/v2/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => fullInfo(data[0]))
}

const fullInfo = (info) => {
    const innerDiv = document.getElementById('innerDiv');
    innerDiv.innerHTML = `
        <h3> Country Native Name: ${info.nativeName} </h3>
        <h3> Country Population: ${info.population} </h3>
        <h3> Country Code: ${info.numericCode} </h3>
        <h3> Country Area: ${info.area} </h3>
        <img src="${info.flag}"  width="200px">
    `;
}
getCountries();