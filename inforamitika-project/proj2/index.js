// BURGER

let getBurgerContent = document.querySelector('.burger-content');

let burgerBtn = document.querySelector('#burger_menu-btn');

burgerBtn.addEventListener('click', () => {

    getBurgerContent.classList.toggle('burger-content-active');
    burgerBtn.classList.toggle('burger-button-active');

});

// SLIDER HEADER 

let getSliderHeader = document.querySelector('.slider-line');

let rightBthHeader = document.querySelector('#right_button-slider-header');

let counterHeader = 0;

rightBthHeader.addEventListener('click', () => {
    counterHeader = counterHeader + 2495;

    if (counterHeader > 4990) {
        counterHeader = 0;
    };

    getSliderHeader.style.left = -counterHeader + 'px';

});

let leftBthHeader = document.querySelector('#left_button-slider-header');

leftBthHeader.addEventListener('click', () => {
    counterHeader = counterHeader - 2495;

    if (counterHeader < 0) {
        counterHeader = 4990;
    };

    getSliderHeader.style.left = -counterHeader + 'px';

});

// SLIDER PART3

let getSliderPart3 = document.querySelector('.slider-line-container-part3');

let rightBthPart3 = document.querySelector('#right_button-slider-part3');

let counterPart3 = 0;

rightBthPart3.addEventListener('click', () => {
    counterPart3 = counterPart3 + 386;

    if (counterPart3 > 1300) {
        counterPart3 = 0;
    };

    getSliderPart3.style.left = -counterPart3 + 'px';

});

let leftBthPart3 = document.querySelector('#left_button-slider-part3');

leftBthPart3.addEventListener('click', () => {
    counterPart3 = counterPart3 - 386;

    if (counterPart3 < 0) {
        counterPart3 = 1158;
    };

    getSliderPart3.style.left = -counterPart3 + 'px';

});


// ROFLIK 

document.querySelectorAll('#otkritiQuestion').forEach((el) => {
    el.addEventListener('click', () => {
        el.parentElement.style.display = 'none';
    });
});

// ROFL2 

let getBody = document.querySelector('body');

document.querySelector('.rofl-ficha').addEventListener('click', () => {
    getBody.classList.add('rotate');
});