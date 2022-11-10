new WOW().init();

let navBar = document.querySelector('.nav')
let text_animated = document.querySelector('.h1-header')
let busAre = document.querySelector('.busAre')

window.addEventListener('scroll', () => {

    let scrollDistance = window.scrollY;

    if (scrollDistance >= 100) {
        navBar.classList.add('nav-scrolled');
    } else if (scrollDistance < 100) {
        navBar.classList.remove('nav-scrolled');
    };

});

let burgerMenuButton = document.querySelector('#burger-menu-button');
let closeBurgerButton = document.querySelector('#close-burger-button')
let burgerContainer = document.querySelector('.burger-menu-container')

burgerMenuButton.addEventListener('click', openMenu)

function openMenu() {
    burgerContainer.classList.add('open-burger');
    document.body.style.overflow = 'hidden';
    window.addEventListener('click', (e) => {
        if (e.target == burgerContainer) {
            burgerContainer.classList.remove('open-burger');
            closeBurgerButton.style.display = 'none';
            burgerMenuButton.style.display = 'block';
            document.body.style.overflow = 'visible';
        }
    });
    closeBurgerButton.style.display = 'block';
    burgerMenuButton.style.display = 'none';
};

closeBurgerButton.addEventListener('click', () => {
    burgerContainer.classList.remove('open-burger');
    closeBurgerButton.style.display = 'none';
    burgerMenuButton.style.display = 'block';
    document.body.style.overflow = 'visible';
});

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click', (e2) => {
    e2.preventDefault();
    const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth", 
            block: "start"
        });
    });
};