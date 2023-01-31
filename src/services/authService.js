export const AuthService = {
    isValidEmail,
    isValidPassword,
    isValidInput,
    createErrorMessage,
    _isValidlength,
    _isExistUppercase,
    _isExistNumber,
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
    if (_isValidlength(password) && _isExistUppercase(password) && _isExistNumber(password)) {
        return true;
    }
    return false;
}

function _isValidlength(password) {
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


// function validateEmail(email) {
//     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

// function validatePassword(password) {
//     const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
//     return strongRegex.test(password);
// }