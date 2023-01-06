let input = document.querySelector('#input'); 
let btn_add = document.querySelector('#add-btn');
let list = document.querySelector('.container-text');
let result = document.querySelector('.colvo')

let num = 0

btn_add.addEventListener('click', () => {
    if (input.value === ' '){
        return
    } else {
        CreateDEleteElements()
    }
});

// CREATE AND DELETE

function CreateDEleteElements(){

    num++

    let cardOnlist = document.createElement('div');
    cardOnlist.className = 'card'; 
    list.appendChild(cardOnlist); 

    let cardh = document.createElement('h1');
    cardh.className = 'h1-text';
    cardh.innerHTML = input.value;
    cardOnlist.appendChild(cardh);
     
    // DELETE CARD 

    let dlt_btn = document.createElement('button');
    dlt_btn.classList = 'delete';
    dlt_btn.innerText = 'X';
    cardOnlist.appendChild(dlt_btn);
    dlt_btn.addEventListener('click', (a) => {
        num--
        result.textContent = num;
        list.removeChild(cardOnlist);
    });

    input.value = ' '

    // INTERACT 

    cardOnlist.addEventListener('click', () => {
        cardOnlist.classList.toggle('card-active');
    });

    cardOnlist.addEventListener('mouseover', () => {
        cardOnlist.classList.toggle('card-hover');
        cardOnlist.addEventListener('mouseout', () => {
            cardOnlist.classList.remove('card-hover');
        });
    });
    
    // COUNTER

    result.textContent = num;
};

// for (let i = 10; i > 0; i++) {
//     CreateDEleteElements();
// };