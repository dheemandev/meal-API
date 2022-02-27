
const loadCountries = () =>{
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}

loadCountries();

const countriesDiv = document.getElementById('countries')
const displayCountries = countries =>{
  countries.forEach(country => {
    const div = document.createElement('div')
    div.classList.add('country')

    div.innerHTML = `
    <h3> ${country.name} </h3>
    <p> ${country.capital} <p>
    <button onclick="loadCountry('${country.name}')"> Details </button>
    `
     countriesDiv.appendChild(div)
    
  });
}
 
const loadCountry = name =>{
   const url = `https://restcountries.com/v2/name/${name}`
   fetch(url)
   .then(res =>res.json())
   .then(data => countryDetails(data[0]));

}

const countryDetails = country =>{
  // console.log(country);
   const countryDiv = document.getElementById('country-details')
   countryDiv.innerHTML =`<h4> ${country.name} </h4>
   <p>${country.population}</p>
   <img width="200px" src="${country.flag}">`
   
     
}
