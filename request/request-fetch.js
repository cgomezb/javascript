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


const request = await fetch('https://restcountries.eu/rest/v2/name/portugal');
const response = await request.json();
console.log(response);

const getCountryData = function(countryName) {
  fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    renderCountry(data[0]);
  });
}

const getCountryData = function(countryName) {
  fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
  .then((response) => response.json())
  .then((data) => renderCountry(data[0]));
}

const getCountryData = (countryName) => {
  fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
  .then((response) => response.json())
  .then((data) => renderCountry(data[0]));
}

getCountryData('portugal');

// --------- ---------- ---------- -----------

const countriesContainer = document.querySelector('body');

const getCountryData = (countryName) => {
  fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
  .then((response) => response.json())
  .then((data) => {
    renderCountry(data[0]);

    const [neighbor] = data[0].borders;
    
    if (!neighbor) {
      return;
    }

    return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbor}`);
  })
  .then((response) => response.json())
  .then((data) => renderCountry(data));
}

getCountryData('portugal');

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

// --------- ---------- ---------- -----------

const countriesContainer = document.querySelector('body');

const getCountryData = (countryName) => {
  fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
  .then(
    response => response.json(),
    err => console.log('Error ', err)
  )
  .then((data) => {
    renderCountry(data[0]);

    const [neighbor] = data[0].borders;
    
    if (!neighbor) {
      return;
    }

    return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbor}`);
  })
  .then(response => response.json())
  .then(data => renderCountry(data))
  .catch(err => console.log('Error ', err))
  .finally(() => {
    countriesContainer.style.opacity = 1;
  });
}

getCountryData('portugal');

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
}

// --------- ---------- ---------- -----------

const countriesContainer = document.querySelector('body');

const getJSON = function(url, msg = 'Something went wrong') {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${msg} (${response.status})`);
      }

      return response.json();
    });
};

const getCountryData = (countryName) => {
  getJSON(
    `https://restcountries.eu/rest/v2/name/${countryName}`,
    'Country not found'
  )
  .then((data) => {
    renderCountry(data[0]);

    const [neighbor] = data[0].borders;
    
    if (!neighbor) {
      throw new Error('No neighbor found');
    }

    return getJSON(
      `https://restcountries.eu/rest/v2/alpha/${neighbor}`,
      'Country not found'
    );
  })
  .then(data => renderCountry(data))
  .catch(err => console.log('Error ', err))
  .finally(() => {
    countriesContainer.style.opacity = 1;
  });
}

getCountryData('australia');

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
}
