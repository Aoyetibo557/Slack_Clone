import React from 'react';
import './Login.css';
import SlackLogo from '../images/Slack_RGB.svg';
import { Button } from '@material-ui/core';
import {auth, provider} from '../firebase';
import { useStateValue } from '../StateProvider';
import {actionTypes} from '../reducer'


function Login() {
    const [{}, dispatch] = useStateValue();

    const signIn = (e) => {
        auth.signInWithPopup(provider)
        .then(result => {
            console.log(result);
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        })
        .catch((error) => {
            alert(error.message)
        });
    }


    return (
        <div className="login">
            <div className="login__container">  
                <img src={SlackLogo} alt="" />
                <h1>SIGN IN TO CLONE APP</h1>
                <p></p>
                <Button onClick={signIn} className="login__btn">Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login
