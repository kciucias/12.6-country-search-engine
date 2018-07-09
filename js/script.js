//global variables
var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = document.getElementById('countries');

function searchCountries() {
    var countryName = document.getElementById('country-name').value; 
    if(!countryName.length) countryName = 'Poland';
    fetch(url + countryName)
    	.then(function(resp) {
    		return resp.json();
    	})
    	.then(showCountriesList);
}

function showCountriesList(resp) {
  	countriesList.innerHTML = '';
  	resp.forEach(function(item) {
  		var liE1 = document.createElement('li');
  		liE1.innerHTML = item.name;
  		countriesList.appendChild(liE1);
  		var liE2 = document.createElement('li');
  		liE2.innerHTML = item.capital;
  		countriesList.appendChild(liE2);
  	});
}

document.getElementById('search').addEventListener('click', searchCountries);

