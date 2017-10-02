import React, { Component } from 'react';
import firebase from 'firebase';
import '../App.css';

class LoginButton extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
      }

    onLoginSuccess() {
        console.log("success");
    }

    onLoginFail() {
        console.log("fail");
    }

    onButtonPress() {
        const { email, password } = this.state;
        console.log(email);
        console.log(password);
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            this.onLoginSuccess();
        })
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(() => {
                    this.onLoginSuccess();
                })
                .catch(() => {
                    this.onLoginFail();
                })
        })
    }

    updateEmail(e){
        this.setState({email: e.target.value});
        //console.log(this.state);
    }

    updatePassword(e){
        this.setState({password: e.target.value});
        //console.log(this.state);
    }

    render() {
        return (
            <div className = "container">
            <div><input id="emailInput" type="email" placeholder="email@gmail.com" onChange={this.updateEmail.bind(this)}></input></div>
            <div><input id="passwordInput" type="password" placeholder="******" onChange={this.updatePassword.bind(this)}></input></div>
            <div className = "container"><button
            onClick={this.onButtonPress.bind(this)}
            >Login/Sign Up</button></div>
            </div>
        );
    }
}

export default LoginButton;
