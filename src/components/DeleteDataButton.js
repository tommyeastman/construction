import React, { Component } from 'react';
import firebase from 'firebase';

class DeleteDataButton extends Component {

    onButtonPress () {
        const { currentUser } = firebase.auth();
        firebase.database().ref(`/users/${currentUser.uid}/data`).child(this.props.keyPassed).remove();
    }

    render() {
        return (
            <div>
            <button
            onClick={this.onButtonPress.bind(this)}
            >
            Delete
            </button>
            </div>
        )
    }
}

export default DeleteDataButton;
