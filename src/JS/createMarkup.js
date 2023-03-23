export function createMarkupCountryList(data) {
  const markup = data
    .map(({ name, flags }) => {
      return `<li><img src="${flags.svg}" alt="${name.official}" width="20" height="20">${name.official}</li>`;
    })
    .join('');
  return markup;
}

export function createMarkupCountryInfo(data) {
  const markup = data
    .map(({ name, capital, population, flags, languages }) => {
      return `<div class = "card">
        <p class ="card-name">Name: ${name.official}</p>
        <img src="${flags.svg}" alt="${name.official}"  width = "80">
        <p class="card-item">capital: ${capital}</p>
        <p class="card-item">population: ${population}</p>
        <p class="card-item">languages: ${Object.values(languages)}</p>
</div>`;
    })
    .join('');
  return markup;
}
