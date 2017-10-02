import React, { Component } from 'react';
import firebase from 'firebase';
import '../App.css';
import DataScreen from '../screens/DataScreen';

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '', user: null };
      }

    onLoginSuccess() {
        const { currentUser } = firebase.auth();
        console.log("success");
        this.setState({user: currentUser});
        firebase.database().ref(`/users/${currentUser.uid}/LogIns`).push(Date());
        //window.location.href = "./addData.html";
    }

    onLoginFail() {
        console.log("fail");
    }

    onButtonPress() {
        const { email, password } = this.state;
        
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
    }

    updatePassword(e){
        this.setState({password: e.target.value});
    }

    render() {
        if (this.state.user === null) {
        return (
            <div className = "container">
                <p>tommyeastman1@gmail.com</p>
                <p>password</p>
            <div><input id="emailInput" type="email" placeholder="email@gmail.com" onChange={this.updateEmail.bind(this)}></input></div>
            <div><input id="passwordInput" type="password" placeholder="******" onChange={this.updatePassword.bind(this)}></input></div>
            <div className = "container"><button
            onClick={this.onButtonPress.bind(this)}
            >Login/Sign Up</button></div>
            </div>
        );
        }
        return <DataScreen/>;
    }
}

export default LoginScreen;
