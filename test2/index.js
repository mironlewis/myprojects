let count = 0;

let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');

let sliderLine = document.querySelector('.slider-line');

btn1.addEventListener(('click'), () => {

    count = count - 270;

    if (count < 0) {
        count = 0;
    } 

    sliderLine.style.left = -count + 'px';

    if (count === 0) {
        btn1.setAttribute("disabled", "true");
    }

    if (count < 2000) {
        btn2.removeAttribute("disabled");
    }

});

btn2.addEventListener(('click'), () => {

    count = count + 270;

    if (count > 2250) {
        count = 0
        btn1.setAttribute("disabled", "true");
    } 

    sliderLine.style.left = -count + 'px';

    if (count > 0) {
        btn1.removeAttribute("disabled");
    }

    if (count === 2160) {
        btn2.setAttribute("disabled", "true");
    }

    console.log(count)

});