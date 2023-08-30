'use strict'
const languageBtn = document.getElementById('language-button');
let language = document.getElementById('language');

function changeLanguage(lang) {
    if (lang === 'EN') {
        language.innerText = 'RU';
    } else {
        language.innerText = 'EN';
    }
}

languageBtn.onclick = () => {
    changeLanguage(language.innerText);
}