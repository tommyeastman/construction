import React, { Component } from 'react';
import firebase from 'firebase';

class Value extends Component {
    render() {
        return <p>{this.props.valProp}</p>;
    }
}

class ViewData extends Component {
    constructor(props) {
        super(props);
        this.state = { values: null };
    }

    getData() {
        const { currentUser } = firebase.auth();

        firebase.database().ref(`/users/${currentUser.uid}/data`)
            .on('value', snapshot => {
                const data = snapshot.val();
                this.setState({ values: Object.values(data) })
            })
    }

    mapValues() {
        const { values } = this.state;

        if (values === null) {
            this.getData();
        } else {
            return (
                values.map( (value) => {
                    return <Value valProp={value} />
                } )
            );
        }
    }

    render() {
        return (
            <div className="viewData">
                <p>Data below</p>
                {this.mapValues()}
            </div>
        );
    }
}

export default ViewData;
