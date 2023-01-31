import React, { useEffect, useRef, useState } from 'react'
import { AuthService } from "../services/authService";


export const Login = () => {

    const [email, setEmail] = useState("");
    const [emailMessage, setEmailMessage] = useState("");
    const [password, setPassword] = useState("");
    const [passwordMessage, setPasswordMessage] = useState("");

    let button = document.getElementById("buttonId");

    useEffect(() => {
        let button = document.getElementById("buttonId");
        button.disabled = true;
    }, []);


    const handleEmailEvent = (email) => {
        button.disabled = true;
        if (AuthService.validateEmail(email)) {
            setEmailMessage("Valid email");
            if (AuthService.validatePassword(password)) {
                button.disabled = false;
            }
        } else {
            setEmailMessage("Invalid email - email have to contain @ sign");
        }

        if (email == "") { setEmailMessage(" "); }
    }

    const handlePasswordEvent = (password) => {
        button.disabled = true;
        if (AuthService.validatePassword(password)) {
            setPasswordMessage("Valid password");
            if (AuthService.validatePassword(password)) {
                button.disabled = false;
            }
        } else {
            if(!AuthService.lengthValidation(password)){
                setPasswordMessage("Password should contains least 8 characters long");    
            }
            if(!AuthService.uppercaseValidation(password)){
                setPasswordMessage("Password should contains at least one uppercase letter");
            }
            if(!AuthService.numberValidation(password)){
                setPasswordMessage("Password should contains at least one number");
            }
        }
        if (password == "") { setPasswordMessage(" "); }
    }


    return (
        <form className="login">
            <h1>Welcome to the login page:</h1>
            <div className="emailArea">
                <div>
                    <input
                        placeholder='insert email'
                        id="Email"
                        name="Email"
                        value={email}
                        onChange={(event) => {
                            if (AuthService.inputValidation(event.target.value)) {
                                setEmail(event.target.value);
                            } else {
                                setEmailMessage("Invalid input try again");
                            }
                            handleEmailEvent(event.target.value);
                        }}
                    />
                </div>
                <div className='emailMessageArea'>
                    <p>{emailMessage}</p>
                </div>
            </div>
            <div className="pwdArea">
                <div>
                    <input
                        type="password"
                        placeholder='insert password'
                        id="pwd"
                        name="pwd"
                        value={password}
                        onChange={(event) => {
                            if (AuthService.inputValidation(event.target.value)) {
                                setPassword(event.target.value);
                            } else {
                                setPasswordMessage("Invalid input try again");
                            }
                            setPassword(event.target.value);
                            handlePasswordEvent(event.target.value);
                        }}
                    />
                </div>
                <div className='pwdMessageArea'>
                    <p>{passwordMessage}</p>
                </div>
            </div>
            <div>
                <button
                    id="buttonId"
                    onClick={(event) => {
                        // createTask(event);
                    }}
                >Login
                </button>
            </div>
        </form>
    )
}
