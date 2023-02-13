// CLOCK, DATE, WEATHER 

let clock = document.querySelector('.clock');
let dateContainer = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let dateText = document.querySelector('.date');

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const dateWeek = date.getUTCDay();
    const dayOfTheMonth = date.getUTCDate();
    const monthOfTheYear = date.getUTCMonth();
    const year = date.getFullYear();
    dateText.innerHTML = `${dateContainer[dateWeek]}, ${dayOfTheMonth}.${monthOfTheYear < 10 ? `0${monthOfTheYear}` : monthOfTheYear}.${year}`;
    clock.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

}

function init() {

    getTime();
    setInterval(getTime, 1000);

}

init();

// BOTTOM CONTAINERS

document.querySelectorAll('.nav-bottom-container').forEach((el) => {

    el.addEventListener('click', () => {
        
        let getContent = el.nextElementSibling;
        let getBtnBottom = el.lastElementChild;

        getContent.classList.toggle('ogranichitel-opened');
        getBtnBottom.classList.toggle('button-bottom-open');
        
    });

});

// TIMER 



// TODO 

let inputToDo = document.querySelector('#input-todo');
let addTodo = document.querySelector('#new-todos');
let contentAreaTodo = document.querySelector('.content-area-todo');
let getCompletedArea = document.querySelector('.content-deleted-area-todo');
let getH3Bottom = document.querySelector('.h3-bottom');
let completedCounter = 0;

addTodo.addEventListener('click', () => {

    if (inputToDo.value === '') {

        inputToDo.style.backgroundColor = 'rgb(30, 30, 30)';
        setTimeout(() => {
            inputToDo.style.backgroundColor = 'white';
        }, 1000);

    } else {

        let newToDo = document.createElement('div');
        let newTextToDo = document.createElement('h1');
        let completeToDo = document.createElement('button');
        let deleteToDo = document.createElement('button');

        let deleteAllCompletedToDo = document.querySelector('#delete-all-todos');

        newToDo.className = 'newToDo';
        newTextToDo.className = 'h1-newToDo';
        completeToDo.className = 'complete-btn-todo';
        deleteToDo.className = 'delete-btn-todo';
        contentAreaTodo.appendChild(newToDo);
        newToDo.appendChild(newTextToDo);
        newToDo.appendChild(completeToDo);
        newToDo.appendChild(deleteToDo);    
        newTextToDo.innerHTML = inputToDo.value;
        inputToDo.value = '';

        newToDo.addEventListener('click', () => {

            newToDo.classList.toggle('on-working')

        });

        deleteToDo.addEventListener('click', () => {

            newToDo.remove();
    
        });

        completeToDo.addEventListener('click', () => {

            newToDo.style.backgroundColor = '#ace1af';
            completedCounter = completedCounter + 1;
            openCompleted.textContent = `Completedㅤ${completedCounter}`;

            setTimeout(() => {

                newToDo.remove();
                getCompletedArea.appendChild(newToDo);
                newToDo.style.backgroundColor = 'white';
                completeToDo.remove();
                console.log(completedCounter);

                if (completedCounter > 0) {
                    getH3Bottom.style.display = 'none';
                } else {
                    getH3Bottom.style.display = 'block'
                }

                deleteToDo.addEventListener('click', () => {

                    completedCounter = completedCounter - 1;
                    
                    if (completedCounter <= 0) {
                        getH3Bottom.style.display = 'block'
                    } else {
                        getH3Bottom.style.display = 'none'
                    }

                    console.log(completedCounter);
                    openCompleted.textContent = `Completedㅤ${completedCounter}`;

                    newToDo.remove();
            
                });

            }, 1000);

            deleteAllCompletedToDo.addEventListener('click', () => {

                newToDo.remove();
                completedCounter = 0;
                getH3Bottom.style.display = 'block'
                openCompleted.textContent = 'Completedㅤ0';

            });
    
        });

    };

});

// OPEN AND BACK COMPLETED

let openCompleted = document.querySelector('#completed-todos');
let backCompleted = document.querySelector('#back-todos');

openCompleted.addEventListener('click', () => {

    document.querySelectorAll('.slider-line').forEach((el2) => {

        el2.style.left = '-390px';

    });

});

backCompleted.addEventListener('click', () => {

    document.querySelectorAll('.slider-line').forEach((el2) => {

        el2.style.left = '0px';

    });

});

// BACKGROUND

let imagesContainer = ['url(./img/bg1.jpg)', 'url(./img/bg2.jpg)', 'url(./img/bg3.jpg)','url(./img/bg4.jpg)','url(./img/bg5.jpg)']
let getBody = document.querySelector('body');
let indexImagesCont = 0;

setInterval(() => {

    indexImagesCont = indexImagesCont + 1;

    getBody.style.backgroundImage = imagesContainer[indexImagesCont];

    if (indexImagesCont >= 5) {

        getBody.style.backgroundImage = 'url(./img/bg1.jpg)';
        indexImagesCont = 0;

    }
    
}, 60000);

getBody.style.backgroundImage = 'url(./img/bg1.jpg)';
