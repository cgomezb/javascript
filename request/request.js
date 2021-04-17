const countriesContainer = document.querySelector('body');
const urlCountryByName = (countryName) => `https://restcountries.eu/rest/v2/name/${countryName}`;
const urlCountryByCode = (countryCode) => `https://restcountries.eu/rest/v2/alpha/${countryCode}`;

const renderCountry = function(country) {
  const countryArticle = `
      <article class="country">
        <img class="country_img" src="${country.flag}"/>
        <div class="country_data">
          <h3 class="country_name">${country.name}</h3>
          <h4 class="country_region">${country.region}</h4>
          <p class="country_row">
            <span>Population</span>
            ${(+country.population / 1000000).toFixed(1)} people
          </p>
          <p class="country_row">
            <span>Languages</span>
            ${country.languages[0].name}
          </p>
          <p class="country_row">
            <span>Currency</span>
            ${country.currencies[0].name}
          </p>
        </div>
      </article>
    `;

  countriesContainer.insertAdjacentHTML('beforeend', countryArticle);
  countriesContainer.style.opacity = 1;
}

const getCountry = function(countryName) {
  const request = new XMLHttpRequest();
  request.open('GET', urlCountryByName(countryName));
  request.send();

  request.addEventListener('load', function() {
    const [country] = JSON.parse(this.responseText);

    renderCountry(country);
    renderNeighbor(country);
  });
};

const renderNeighbor= function(country) {
  const [neighbor] = country.borders;

  if (!neighbor) {
    return;
  }

  const request2 = new XMLHttpRequest();
  request2.open('GET', urlCountryByCode(neighbor));
  request2.send();

  request2.addEventListener('load', function() {
    const country = JSON.parse(this.responseText);

    renderCountry(country);
  });
}

getCountry('portugal');
// getCountry('usa');
