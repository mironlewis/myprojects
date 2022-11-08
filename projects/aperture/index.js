let navBar = document.querySelector('.nav')
let text_animated = document.querySelector('.h1-header')

window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;

    if (scrollDistance >= 100) {
        navBar.classList.add('nav-scrolled');
    } else if (scrollDistance < 100) {
        navBar.classList.remove('nav-scrolled');
    }

});