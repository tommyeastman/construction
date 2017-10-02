import React, { Component } from 'react';
import firebase from 'firebase';
import '../App.css';

class LoginButton extends Component {
    onButtonPress(email,password) {
        console.log("hey");
        firebase.auth().signInWithEmailAndPassword(email, password)
    }
    render() {
        return (
            <button
            onClick={this.onButtonPress}
            >Login</button>
        );
    }
}

export default LoginButton;
