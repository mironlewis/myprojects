// BURGER

let getBurgerContent = document.querySelector('.burger-content');

let burgerBtn = document.querySelector('#burger_menu-btn');

burgerBtn.addEventListener('click', () => {

    getBurgerContent.classList.toggle('burger-content-active');
    burgerBtn.classList.toggle('burger-button-active');

});