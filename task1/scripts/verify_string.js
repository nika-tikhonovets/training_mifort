'use strict';

const verify = require('./check_brackets');

const $enteredString = document.getElementById('enteredString');
const $checkButton = document.getElementById('checkString');
const $result = document.getElementById('result');

function setInvalidMessage() {
    $result.innerHTML = 'Invalid';
    $result.classList.remove('valid');
    $result.classList.add('invalid');
}

function setValidMessage() {
    $result.innerHTML = 'Valid';
    $result.classList.remove('invalid');
    $result.classList.add('valid');
}

function testBrackets() {
    if (verify.checkBrackets($enteredString.value)) {
        setValidMessage();
    } else {
        setInvalidMessage();
    }
}

$checkButton.addEventListener('click', testBrackets);
$enteredString.addEventListener('input', testBrackets);
