import React, { Component } from 'react';
import firebase from 'firebase';
//import '../App.css';

class AddDataButton extends Component {
    constructor(props) {
        super(props);
        this.state = { data: null };
      }

    onButtonPress () {
        const { currentUser } = firebase.auth();
        firebase.database().ref(`/users/${currentUser.uid}/data`).push(this.state.data);
    }

    whenTyped(e) {
        this.setState({ data: e.target.value });
    }

    render() {
        return (
            <div className="addData">
            <span><input className="addData" type="text" onChange={this.whenTyped.bind(this)}></input></span>
            <span><button
            onClick={this.onButtonPress.bind(this)}
            >
            Add Data
            </button></span>
            </div>
        )
    }
}

export default AddDataButton;
