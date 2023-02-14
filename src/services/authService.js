import { HttpService } from "./generalService/httpService";

export const AuthService = {
    isValidEmail,
    isValidPassword,
    isValidInput,
    createErrorMessage,
    _isValidLength,
    _isExistUppercase,
    _isExistNumber,
    login, 
}
const minLenPassword = 8;

function createErrorMessage(password) {
    let msg = "";

    if (!_isExistUppercase(password))
        msg += "Password should contains at least one uppercase letter. ";

    if (!_isExistNumber(password))
        msg += "Password should contains at least one number. ";

    let length = String(password).length;
    if (length > 0) {
        msg += "Password should contains least 8 characters long. ";
    } else {
        msg = "";
    }
    return msg;
}

function isValidInput(input) {
    const regex = /[1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_@.]/g;
    let value = input.search(regex)
    if (value != -1) {
        return true;
    }
}

function isValidEmail(email) {
    const regex = /[@]/g;

    let value = email.search(regex)
    if (value != -1) {
        return true;
    }
    return false;
}

function isValidPassword(password) {
    if (_isValidLength(password) && _isExistUppercase(password) && _isExistNumber(password)) {
        return true;
    }
    return false;
}

function _isValidLength(password) {
    let length = String(password).length;
    if (length >= minLenPassword) {
        return true;
    }
    return false;
}

function _isExistUppercase(password) {
    const regex = /[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/g;
    let value = password.search(regex)
    if (value != -1) {
        return true;
    }
}

function _isExistNumber(password) {
    const regex = /[1234567890]/g;
    let value = password.search(regex)
    if (value != -1) {
        return true;
    }
}

async function login(email, password) {
    const data = {
        email,
        password,
    }
    const res = await HttpService.post("/authenticate", data);
    const token = res[0].token;
    const personalDetails = JSON.stringify(res[0].personalDetails);
    console.log(token);
    localStorage.setItem("token", `${token}`);
    localStorage.setItem("personalDetails", `${personalDetails}`);
    return token;
}