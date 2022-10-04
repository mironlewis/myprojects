let accord = document.getElementsByClassName("accordeon-btn");
let i;

for (i = 0; i < accord.length; i++) {
    accord[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}


let switcher1 = document.getElementById('switcher1')
let price1 = document.getElementById('price-part4')

switcher1.addEventListener('click', func)

let x = false;

function func(){
    
    if (x) {
        switcher1.style.backgroundImage = 'url(./img/switcher1.svg)';
        price1.innerHTML = '$15';
    }  else {
        switcher1.style.backgroundImage = 'url(./img/switcher1-on.svg)';
        price1.innerHTML = '$160';
    }
    x=!x
}



let switcher2 = document.getElementById('switcher2')
let price2 = document.getElementById('price2-part4')

switcher2.addEventListener('click', func2)

let z = false;

function func2(){
    
    if (z) {
        switcher2.style.backgroundImage = 'url(./img/switcher2.svg)';
        price2.innerHTML = '$30';
    }  else {
        switcher2.style.backgroundImage = 'url(./img/switcher2-on.svg)';
        price2.innerHTML = '$340';
    }
    z=!z
}



let switcher3 = document.getElementById('switcher3')
let price3 = document.getElementById('price3-part4')

switcher3.addEventListener('click', func3)

let c = false;

function func3(){
    
    if (c) {
        switcher3.style.backgroundImage = 'url(./img/switcher1.svg)';
        price3.innerHTML = '$70';
    }  else {
        switcher3.style.backgroundImage = 'url(./img/switcher1-on.svg)';
        price3.innerHTML = '$800';
    }
    c=!c
}


