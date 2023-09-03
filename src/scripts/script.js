'use strict'
const languageBtn = document.getElementById('language-button');
const languageBtnSmall = document.getElementById('language-button-small');
const nav = document.getElementById('nav');
const smallMenu = document.getElementById('small-menu');
const menuOpen = document.getElementById('menu-burger');
const menuClose = document.getElementById('small-menu-close');
const header = document.getElementById('header');
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

languageBtnSmall.onclick = () => {
    changeLanguage(language.innerText);
}

menuOpen.onclick = () => {
        smallMenu.style.display = 'block';
}

menuClose.onclick = () => {
        smallMenu.style.display = 'none';
}