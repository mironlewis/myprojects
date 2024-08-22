let getUserCashText = document.getElementById('user_cash');
let getWinAmountText = document.getElementById('win-amount');

let getAmount = document.getElementById('amount_number');
let getPercent = document.getElementById('win-percent_number');
let getUserCash = Number(getUserCashText.innerHTML);

// CHECK RANGE OF INPUT ///////////////////

document.addEventListener('DOMContentLoaded', () => {
    getAmount.addEventListener('input', (letters) => {
        letters.target.value = letters.target.value.replace(/[^0-9.]/g, '').replace(/^(\d*\.\d\d).+$/, '$1');
        if (getAmount.value < 0 || getAmount.value > 200000) {
            getAmount.value = '';
        };
        getWinAmountText.innerHTML = `${getAmount.value*2} ₴`;
    });
    getPercent.addEventListener('input', (drob) => {
        drob.target.value = drob.target.value.replace(/\D+/g, "");
        if (1 > getPercent.value || getPercent.value > 95) {
            getPercent.value = '';
        };
    });
});

// PLAY ACTION ///////////////////

document.getElementById('play-bet').addEventListener('click', () => {
    if (getAmount.value && getPercent.value && getAmount.value > 0) {
        if (getAmount.value <= getUserCash) {
            getUserCash = (getUserCash - getAmount.value).toFixed(2); 
            getUserCash = Number(getUserCash);
            getUserCashText.innerHTML = getUserCash;
            console.log(getUserCash);
        }else {
            console.log('You dont have enought money!');
        };
    } else {
        console.log('Write a numbers');
    };
});