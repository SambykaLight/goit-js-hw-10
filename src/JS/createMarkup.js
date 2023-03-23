export function createMarkupCountryList(data) {
  const markup = data
    .map(({ name, flags }) => {
      return `<li><img src="${flags.svg}" alt="${name.official}" width="60" height="40">${name.official}</li>`;
    })
    .join('');
}

export function createMarkupCountryInfo(data) {
    const markup = data.map(({ name, capital, population, flags, language }) => {
        return `<div class = "card">
    <div class = "card-img">
        <p class ="card-name">Name: ${name.official}</p>
<img src="${flags.svg}" alt="${name.official}">
    </div>
    <ul class ="card-info"> 
        <p class="card-item">capital: ${capital}</p>
        <p class="card-item">population:${population}</p>
        <p class="card-item">languages: ${(language).join(', ')}</p>
    </ul>
</div>`;
    }).join('');
}

