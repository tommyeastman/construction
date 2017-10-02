import React, { Component } from 'react';
import firebase from 'firebase';
import '../App.css';

class AddData extends Component {
    onButtonPress () {
        console.log("hey");
        firebase.database().ref('/users/tommy/data').push("hey");
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

export default AddData;
