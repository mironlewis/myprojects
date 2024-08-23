let getUserCashText = document.getElementById('user_cash');
let getWinAmountText = document.getElementById('win-amount');

let getAmount = document.getElementById('amount_number');
let getPercent = document.getElementById('win-percent_number');

// LOAD FROM LOCAL STORAGE

let getUserCash = Number(localStorage.getItem('balance')) || 1000;
getUserCashText.innerHTML = getUserCash.toFixed(2);

// CHECK RANGE OF INPUT ///////////////////

document.addEventListener('DOMContentLoaded', () => {
    getAmount.addEventListener('input', (letters) => {
        letters.target.value = letters.target.value.replace(/[^0-9.]/g, '').replace(/^(\d*\.\d\d).+$/, '$1');
        if (getAmount.value < 0 || getAmount.value > 200000) {
            getAmount.value = '';
        };
        updateResult();
    });
    getPercent.addEventListener('input', (drob) => {
        drob.target.value = drob.target.value.replace(/\D+/g, "");
        if (1 > getPercent.value || getPercent.value > 95) {
            getPercent.value = '';
        };
        updateResult();
    });
});

let cashWin = 0;

function updateResult() {
    cashWin = getAmount.value / (getPercent.value/100);
    getWinAmountText.innerHTML = `${cashWin.toFixed(2)} ₴`;
};

// PLAY ACTION ///////////////////

document.getElementById('play-bet').addEventListener('click', () => {
    if (getAmount.value && getPercent.value && getAmount.value > 0) {
        if (getAmount.value <= getUserCash) {

            // RANDOMIZER ///////////////////

            let random = Math.ceil(Math.random()*100);
            console.log(random)

            // WIN CASHER ///////////////////

            if (getPercent.value/1.1 >= random) {
                getUserCash = (getUserCash + (cashWin - getAmount.value)).toFixed(2);
                getUserCash = Number(getUserCash);
                getUserCashText.innerHTML = getUserCash;
                console.log(getUserCash);
            } else {
                getUserCash = (getUserCash - getAmount.value).toFixed(2);
                getUserCash = Number(getUserCash);
                getUserCashText.innerHTML = getUserCash;
                console.log(getUserCash);
            };

            // SAVE TO LS 

            localStorage.setItem('balance', getUserCash);

        }else {
            console.log('You dont have enought money!');
        };
    } else {
        console.log('Write a numbers');
    };
});

