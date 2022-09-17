'use strict';

let userNumber = document.querySelector('.user_number'),
    checkNbrBtn = document.querySelector('.check_number'),
    numberCount = document.querySelector('.number_count'),
    moreOrLess = document.querySelector('.more_or_less'),
    resItem = document.querySelector('.restart'),
    resBtn = document.querySelector('.restart_btn'),
    result = Math.floor((Math.random() * 100) + 1);

moreOrLess.textContent = 'Здесь будет подсказка';
let count = 0;

checkNbrBtn.disabled = true;

userNumber.addEventListener('input', () => {
    if (userNumber.value.length == 0) {
        checkNbrBtn.disabled = true;
    } else if (userNumber.value.length >= 1) {
        checkNbrBtn.disabled = false;
    }
});

function checkNumber() {
    function numberCountFunc() {
        let element = document.createElement('span');            
        element.textContent = ' ' + userNumber.value;
        element.classList.add('elementsItem');
        numberCount.append(element);
        userNumber.value = '';
    } 

    if (userNumber.value == result) {
        moreOrLess.textContent = 'Ты угадал чиcло!';
        moreOrLess.style.color = 'green';
        userNumber.disabled = true;
        checkNbrBtn.disabled = true;
        numberCountFunc();
    } else if (userNumber.value > result) {
        moreOrLess.textContent = 'Введенное число больше, чем загаданное';
        moreOrLess.style.color = 'red';
        numberCountFunc();
    } else if (userNumber.value < result) {
        moreOrLess.textContent = 'Введенное число меньше, чем загаданное';
        moreOrLess.style.color = 'red';
        numberCountFunc();
    } else if (isNaN(userNumber.value)) {
        moreOrLess.textContent = 'введи число, а не что-то другое';
        moreOrLess.style.color = 'yellow';
    }

    function countCheck() {
        count++;
        if (count == 10 && userNumber.value != result) {
            userNumber.disabled = true;
            checkNbrBtn.disabled = true;
            moreOrLess.textContent = 'у тебя закончились попытки';
        }
    }
    countCheck();
    checkNbrBtn.disabled = true;

}
checkNbrBtn.addEventListener('click', checkNumber);

resBtn.addEventListener('click', () => {
    count = 0;
    userNumber.disabled = false;
    checkNbrBtn.disabled = true;
    moreOrLess.textContent = 'Здесь будет подсказка';
    moreOrLess.style.color = 'black';
    result = Math.floor((Math.random() * 100) + 1);
    document.querySelectorAll('.elementsItem').forEach(item => {
        item.remove();
    });
});



