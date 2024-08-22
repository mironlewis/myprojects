// CLOCK 

let clock = document.querySelector('.clock');
let dateText = document.querySelector('.date');
let dayContainer = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

function time() {

    let getDate = new Date();
    let hours = getDate.getHours();
    let minutes = getDate.getMinutes();

    let dayOfWeek = getDate.getDay();
    let date = getDate.getDate();
    let month = getDate.getMonth();
    let year = getDate.getFullYear();

    clock.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
    dateText.innerHTML = `${dayContainer[dayOfWeek]}  ${date < 10 ? `0${date}` : date}.${month+1 < 10 ? `0${month+1}` : month+1}.${year}`;

};

setInterval(time, 1000)
time();

// BOTTOM CONTAINERS OPENER

document.querySelectorAll('.bottom-container').forEach((bc) => {

    bc.querySelectorAll('.bottom-container-opener').forEach((bc2) => {

        bc2.addEventListener('click', () => {

            let openBottomContent = bc.querySelector('.bottom-container-content');
            openBottomContent.classList.toggle('bottom-container-content_open'); 
            
            let rotateOpenIcon = bc.querySelector('.rotate-icon');
            rotateOpenIcon.classList.toggle('open-icon');

            let completedContContent = document.querySelector('.completed-container-content')
            completedContContent.classList.toggle('completed-container-content-open')

        });

    });

});

// TODO 

let inputTodo = document.querySelector('#todo-input');
let todosContainer = document.querySelector('.todos-container');
let noAssigments = document.querySelector('.h2');
let completedContainer = document.querySelector('.completed-content');
let noCompleted = document.querySelector('.h3');
let todosCompletedCounter = 0;
let todosCounter = 0;

function checkCompletedCounter() {
    if (todosCompletedCounter > 0) {
        noCompleted.style.display = 'none';
    } else {
        noCompleted.style.display = 'block';
    }
}

document.querySelector('#add-todo-button').addEventListener('click', () => {

    if (inputTodo.value == '') {

        inputTodo.style.backgroundColor = '#252525';
        setTimeout(() => {
            inputTodo.style.backgroundColor = 'white';
        }, 1000)
        return

    } else {

        todosCounter += 1;

        let todoBlock = document.createElement('div');
        let todoText = document.createElement('h1');
        let completeTodo = document.createElement('button');
        let deleteTodo = document.createElement('button');
        todoBlock.classList.add('todo-block');
        todoText.classList.add('todo-text');
        completeTodo.classList.add('complete-todo-btn');
        completeTodo.classList.add('btns-todo');
        deleteTodo.classList.add('delete-todo-btn');
        deleteTodo.classList.add('btns-todo');
        todoText.innerHTML = inputTodo.value;
        inputTodo.value = '';

        todosContainer.appendChild(todoBlock);
        todoBlock.appendChild(todoText);
        todoBlock.appendChild(completeTodo);
        todoBlock.appendChild(deleteTodo);

        function checkCounter() {
            if (todosCounter > 0) {
                noAssigments.style.display = 'none';
            } else {
                noAssigments.style.display = 'block';
            }
        }

        checkCounter();

        // DELETE TODO 

        deleteTodo.addEventListener('click', functionDeleteTodo);

        function functionDeleteTodo() {
            todoBlock.remove();
            todosCounter -= 1;
            checkCounter();
        }

        // COMPLETE 

        completeTodo.addEventListener('click', () => {

            todoBlock.style.backgroundColor = 'rgb(225, 255, 226)';

            setTimeout(() => {

                todosCounter -= 1;
                todosCompletedCounter += 1;
                checkCompletedCounter();
                checkCounter();
                completedContainer.appendChild(todoBlock);
                todoBlock.style.backgroundColor = 'white';
                completeTodo.remove();
                deleteTodo.removeEventListener('click', functionDeleteTodo);

                deleteTodo.addEventListener('click', reappropriationFunctionDelteTodo);

                completedButton.textContent = `Completedㅤ${todosCompletedCounter}`;

                function reappropriationFunctionDelteTodo() {
                    todoBlock.remove();
                    todosCompletedCounter -= 1;
                    checkCompletedCounter();
                    completedButton.textContent = `Completedㅤ${todosCompletedCounter}`;
                };

                let backToTodos = document.createElement('button');
                backToTodos.classList.add('back_todo-btn');
                todoBlock.appendChild(backToTodos);

                backToTodos.addEventListener('click', () => {
                    todosCompletedCounter -= 1;
                    todosCounter += 1;
                    checkCompletedCounter();
                    checkCounter();
                    todosContainer.appendChild(todoBlock);
                    backToTodos.remove();
                    deleteTodo.remove();
                    todoBlock.appendChild(completeTodo);
                    todoBlock.appendChild(deleteTodo);
                    deleteTodo.removeEventListener('click', reappropriationFunctionDelteTodo);
                    deleteTodo.addEventListener('click', functionDeleteTodo);
                    completedButton.textContent = `Completedㅤ${todosCompletedCounter}`;
                });
                
            }, 600);

            checkCompletedCounter();
        
        });

        // HIGHLIGHT

        todoBlock.addEventListener('click', () => {
            todoBlock.classList.toggle('todo-block-active');
        });

    };

});

// COMPLETED 

let completedButton = document.querySelector('#completed-button');

completedButton.addEventListener('click', () => {
    document.querySelector('.bottom-container-slider').style.left = '-400px';
});

document.querySelector('#back-btn').addEventListener('click', () => {
    document.querySelector('.bottom-container-slider').style.left = '0px';
});

// DELETE ALL COMPLETED

document.querySelector('#remove_all-btn').addEventListener('click', () => {
    while (completedContainer.children.length > 1) {
        completedContainer.removeChild(completedContainer.lastChild);
    };
    todosCompletedCounter = 0;
    completedButton.textContent = `Completedㅤ${todosCompletedCounter}`;
    checkCompletedCounter();
});

// BG 

let bgCounter = 1;
let body = document.querySelector('body');

function bg() {
    
    setInterval(() => {

        bgCounter = bgCounter + 1;

        body.style.backgroundImage = `url(./img/bg${bgCounter}.png)`;

        if (bgCounter == 6) {
            body.style.backgroundImage = 'url(./img/bg1.png)';
            bgCounter = 1;
        }

    }, 60000); 

}

bg();