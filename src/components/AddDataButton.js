import React, { Component } from 'react';
import firebase from 'firebase';
import '../App.css';

class AddDataButton extends Component {
    onButtonPress () {
        const { currentUser } = firebase.auth();
        console.log("hey");
        firebase.database().ref(`/users/${currentUser.uid}/data`).push("hey");
    }

    render() {
        return (
            <button
            onClick={this.onButtonPress.bind(this)}
            >
            Add Data
            </button>
        )
    }
}

export default AddDataButton;
