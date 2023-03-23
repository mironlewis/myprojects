let cardsContainer = document.querySelector('.cards-container-part3');
let arrowDown = document.querySelector('.arrow-down-rotate');
let arrowDownText = document.querySelector('.h4-part3');

document.querySelector('#open-cards-part3').addEventListener('click', () => {

    cardsContainer.classList.toggle('cards-container-part3-open');

    arrowDown.classList.toggle('arrow-down-active');

    if (arrowDownText.innerHTML === 'More') {
        arrowDownText.innerHTML = 'Close';
    } else {
        arrowDownText.innerHTML = 'More';
    }

});

let crystal = document.querySelector('.header-crystal');

window.addEventListener('scroll', () => {

    let scrollHeight = window.scrollY;

    crystal.style.top = -scrollHeight + (-30) + 'px';

});

let burgerBtn = document.querySelector('.burger-menu-btn');

burgerBtn.addEventListener('click', () => {

    burgerBtn.classList.toggle('burger-button-open');

    document.querySelector('burger-menu').classList.toggle('burger-menu-open');

});