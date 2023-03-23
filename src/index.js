import debounce from 'lodash.debounce';
import './css/styles.css';
import { Notify } from 'notiflix';
import { fetchCountries } from './JS/fetchCountries';
import {
    createMarkupCountryList,
createMarkupCountryInfo} from "./JS/createMarkup";

const DEBOUNCE_DELAY = 300;



const searchBox = document.querySelector('#search-box');
const countryList = document.querySelector(".country-list");
const countryInfo = document.querySelector(".country-info");


const cleanMarkup = ref => (ref.innerHTML = '');

searchBox.addEventListener('input', debounce(onSearchCountry, DEBOUNCE_DELAY));

function onSearchCountry(e) {
    const nameCountry = e.target.value.trim();
    if (!nameCountry) {
        cleanMarkup(countryList);
    cleanMarkup(countryInfo);
        return;
}


    fetchCountries(nameCountry)
        .then(data => {
            console.log(data);
            if (data.leng > 10) {
                Notify.info(
                    'Too many matches found. Please enter a more specific name'
                );
                return;
            }
            renderMarkup(data);
        })
        .catch(err => {
            cleanMarkup(countryList);
            cleanMarkup(countryInfo);
            Notify.failure('Oops, there is no country with that name');
        });
};

const renderMarkup = data => {
    if (data.length === 1) {
        cleanMarkup(countryList);
        const markupInfo = createMarkupCountryInfo(data);
    countryInfo.innerHTML = markupInfo;
  } else {
    cleanMarkup(countryInfo);
    const markupList = createMarkupCountryList(data);
    countryList.innerHTML = markupList;
  
    }
}