
// POP-UP 

let popup = document.querySelector('.popup-container');
let Btnpopup_apply = document.querySelector('#btn-apply');
let Btnpopup_close = document.querySelector('#btn-close');
let colvo_clicks = document.querySelector('.colvo-clicks');

// COMMENTS 

let input_name = document.querySelector('#name-input');
let input_color = document.querySelector('#color-input');
let input_message = document.querySelector('#message-input');
let send_button = document.querySelector('#send-button');

send_button.addEventListener('click', () => {

    if (input_name.value == ' '){
        return;
    } else {
        sendButtonClick();
    };

});

function sendButtonClick() {

    let createCommentContainer = document.createElement('div');
    let createName = document.createElement('h1');
    let createComment = document.createElement('h1');

    createCommentContainer.className = 'card-comment';
    createComment.className = 'text-message';
    createName.className = 'name-comment';

    createName.textContent = input_name.value;
    createComment.textContent = input_message.value;
    createName.style.backgroundColor = input_color.value;

    document.querySelector('.comments-container').appendChild(createCommentContainer);
    createCommentContainer.appendChild(createName);
    createCommentContainer.appendChild(createComment);
};

// CLICKER 

let clicker_area = document.querySelector('.clicker-area');
let textClickMe = document.querySelector('.clicker-area-text');
let clicks = 0;

clicker_area.addEventListener('click', () => {

    if (clicks == 0){
        textClickMe.innerHTML = 'CLICK!';
        setTimeout(() => {
            popup.style.display = 'block';
            clicks = 0;
        }, 1*1000);
    }

    clicks++;
    colvo_clicks.textContent = clicks + ' clicks';
    console.log(clicks);
});

Btnpopup_close.addEventListener('click', () => {
    textClickMe.innerHTML = 'CLICK ME!';
    popup.style.display = 'none';
});

// SCORE 

let score = 0

Btnpopup_apply.addEventListener('click', () => {

    score++;

    textClickMe.innerHTML = 'CLICK ME!';
    popup.style.display = 'none';

    let createScore = document.createElement('div');
    let createNumberScore = document.createElement('h1');
    let createColvo = document.createElement('h1')

    createScore.className = 'time-score';
    createNumberScore.className = 'number';
    createColvo.className = 'colvo-clicks';
    createColvo = colvo_clicks;

    document.querySelector('.container3').appendChild(createScore);
    createScore.appendChild(createNumberScore);
    createScore.appendChild(createColvo);

    createNumberScore.textContent = score + '.';
})



