import React from 'react'

export const AuthService = {
    validateEmail,
    validatePassword,
    inputValidation,
    lengthValidation, 
    uppercaseValidation,
    numberValidation,
}

function inputValidation(input) {
    const regex = /[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_@.]/g;
    let value = input.search(regex)
    if (value != -1) {
        return true;
    }
}


function validateEmail(email) {
    const regex = /[@]/g;

    let value = email.search(regex)
    if (value != -1) {
        return true;
    }
}

function validatePassword (password) {
    if (lengthValidation(password) && uppercaseValidation(password) && numberValidation(password)) {
        return true;
    }
    return false;
}

function lengthValidation (password)  {
    let length = String(password).length;
    if (length >= 8) {
        return true;
    }
    return false;
}

function uppercaseValidation (password)  {
    const regex = /[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/g;
    let value = password.search(regex)
    if (value != -1) {
        return true;
    }
}

function numberValidation (password)  {
    const regex = /[1234567890]/g;
    let value = password.search(regex)
    if (value != -1) {
        return true;
    }
}

// function validateEmail(email) {
//     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

// function validatePassword(password) {
//     const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
//     return strongRegex.test(password);
// }