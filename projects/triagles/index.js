// PRELOADER 

let preLoad = document.querySelector('.preloader');
let preLoadSlide = document.querySelector('body');

setTimeout(() => {
    preLoad.style.visibility = 'hidden';
    preLoadSlide.style.overflowY = 'auto';
    // for other
    document.documentElement.scrollTop = 0;
    // for safari
    document.body.scrollTop = 0;
}, 1000);

// BURGER MENU 

let menuBtn = document.getElementById('burgermenu');
let closeMenuBtn = document.getElementById('close-burgermenu');
let burgerMenu = document.querySelector('.burger-menu');

menuBtn.addEventListener('click', () => {

    burgerMenu.style.opacity = '1';
    burgerMenu.style.visibility = 'visible';
    menuBtn.style.display = 'none';
    closeMenuBtn.style.display = 'block';

    closeMenuBtn.addEventListener('click', () => {

        burgerMenu.style.opacity = '0';
        burgerMenu.style.visibility = 'hidden';
        menuBtn.style.display = 'block';
        closeMenuBtn.style.display = 'none';

    });

});

// ACCORDEON

let lastAccBtn = document.getElementById('last-accordeon-button');
let lastAccCon = document.querySelector('.last_accordeon-content');

document.querySelectorAll('.accordeon-button').forEach((el) => {
    
    el.addEventListener('click', () => {

        let cont = el.nextElementSibling;
        let getPlus = el.querySelector('.plus');

        if (cont.style.maxHeight) {

            document.querySelectorAll('.accordeon-content').forEach((el) => {

                el.style.maxHeight = null;
                lastAccCon.style.visibility = 'hidden';
                lastAccBtn.style.borderBottom = '1px solid #E7E7E7';
                lastAccBtn.style.borderRadius = '0px 0px 20px 20px';

                document.querySelectorAll('.plus').forEach((el) => {
                    el.style.transform = null;
                });

            });
            
        } else {

            document.querySelectorAll('.accordeon-content').forEach((el) => {
                el.style.maxHeight = null
                lastAccCon.style.visibility = 'hidden';
                lastAccBtn.style.borderBottom = '1px solid #E7E7E7';
                lastAccBtn.style.borderRadius = '0px 0px 20px 20px';
            });

            document.querySelectorAll('.plus').forEach((el) => {
                el.style.transform = null;
            });

            cont.style.maxHeight = cont.scrollHeight + 'px';
            lastAccCon.style.visibility = 'visible';
            lastAccBtn.style.borderBottom = '0px';
            lastAccBtn.style.borderRadius = '0px';
            getPlus.style.transform = 'rotate(-45deg)';

        };
    });
});

// SLIDER 

let rightBtnSlider = document.getElementById('arrow-right');
let leftBtnSlider = document.getElementById('arrow-left');

let intrSlide1 = document.getElementById('firstSlide');
let intrSlide2 = document.getElementById('secondSlide');

let sliderLine = document.querySelector('.slider-line');

let counter = 0;

rightBtnSlider.addEventListener('click', () => {

    counter = counter + 1180;

    if (counter > 1180) {
        counter = 0
        leftBtnSlider.style.visibility = 'hidden';
    } 

    sliderLine.style.left = -counter + 'px';

    if (counter > 0) {
        leftBtnSlider.style.visibility = 'visible';
    }

    if (counter = 1180) {
        intrSlide1.style.background = '#cfcfcf';
        intrSlide2.style.background = '#222222';
        rightBtnSlider.style.visibility = 'hidden';
    }

});

leftBtnSlider.addEventListener('click', () => {

    counter = counter - 1180;

    if (counter < 0) {
        counter = 0;
    } 

    sliderLine.style.left = -counter + 'px';

    if (counter == 0) {
        intrSlide1.style.background = '#222222';
        intrSlide2.style.background = '#cfcfcf';
        rightBtnSlider.style.visibility = 'visible';
        leftBtnSlider.style.visibility = 'hidden';
    }

});