import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import React from 'react';
import "./Login.css";

function Login() {
    const signIn = () => {
        //google login 
        auth.signInWithPopup(provider).catch(error => alert(error.message))
    };


    return (
        <div className ="login">
            

            <div className="login__logo">
                <img src = "https://logos-download.com/wp-content/uploads/2021/01/Discord_Logo-1.png"/>
            </div>
            <Button onClick={signIn}> Sign In </Button>
        </div>
    );
}

export default Login
