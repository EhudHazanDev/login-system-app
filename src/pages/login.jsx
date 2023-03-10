import React, { useState } from 'react'
import { Loader } from "../cmps/Loader";
import { useHistory } from "react-router-dom";
import { AuthService } from "../services/authService";

export const Login = () => {

    const [email, setEmail] = useState("");
    const [emailMessage, setEmailMessage] = useState("");
    const [password, setPassword] = useState("");
    const [passwordMessage, setPasswordMessage] = useState("");
    const [disabledLogin, setDisabledLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();

    const handleChangeEmail = (value) => {
        setEmail(value);
        if (AuthService.isValidEmail(value)) {
            setEmailMessage("");
        } else {
            let length = String(value).length;
            if (length == 0) {
                setEmailMessage("");
            } else {
                setEmailMessage("Invalid email - email must contain @ sign");
            }

        }
        checkDisableLogin(value, password);
    }

    const handleChangePassword = (value) => {
        setPassword(value);
        if (AuthService.isValidPassword(value)) {
            setPasswordMessage("");
        } else {
            const massage = AuthService.createErrorMessage(value)
            setPasswordMessage(massage);
        }
        checkDisableLogin(email, value);
    }

    const checkDisableLogin = (email, password) => {
        AuthService.isValidPassword(password) && AuthService.isValidEmail(email) ?
            setDisabledLogin(false)
            :
            setDisabledLogin(true)
    }

    const doLogin = async (event) => {
        setIsLoading(true);
        event.preventDefault();
        const token = await AuthService.login(email, password);
        if (token) {
            history.push(`/Info`);
        }
        setTimeout(() => {
            setIsLoading(false);
          }, 200000);
    }

    return (
        <form className="login">
            <h1>Login</h1>
            <input
                placeholder='insert email'
                id="Email"
                name="Email"
                value={email}
                onChange={(event) => {
                    handleChangeEmail(event.target.value);
                }}
            />
            <p>{emailMessage}</p>
            <input
                type="password"
                placeholder='insert password'
                value={password}
                onChange={(event) => {
                    handleChangePassword(event.target.value);
                }}
            />
            <p>{passwordMessage}</p>
            <button
                id="buttonId"
                onClick={(event) => {
                    doLogin(event);
                }}
                disabled={disabledLogin}
            >Login
            </button>
            <div>
                {isLoading && <Loader/>}
            </div>
                                {/* <div style={{ cursor: isLoading ? 'wait' : 'default' }}> */}
                                    {/* Your content goes here */}
                                {/* </div> */}
        </form>
    )
}
