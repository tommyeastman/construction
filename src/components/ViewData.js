import React, { Component } from 'react';
import firebase from 'firebase';
import lodash from 'lodash';
import DeleteDataButton from './DeleteDataButton';

class Value extends Component {
    render() {
        const {keyProp, valProp} = this.props;
        //console.log(keyProp);
        //console.log(valProp);
        return (
        <tr>
            <td><p>{valProp}</p></td>
            <td><DeleteDataButton keyPassed={keyProp}></DeleteDataButton></td>
        </tr>
        );
    }
}

class ViewData extends Component {
    constructor(props) {
        super(props);
        this.state = { keys: null, values: null };
    }

    getData() {
        const { currentUser } = firebase.auth();

        firebase.database().ref(`/users/${currentUser.uid}/data`)
            .on('value', snapshot => {
                const data = snapshot.val();
                if (snapshot.val() !==null){
                this.setState({ keys: Object.keys(data), values: Object.values(data) })}
            })
    }

    mapValues() {
        const { keys, values } = this.state;

        if (values === null) {
            this.getData();
        } else {
            return (
                lodash.zip(keys, values).map((i) => {
                return <Value keyProp={i[0]} valProp={i[1]} />
                })
            );
        }
    }

    render() {
        return (
            <div className="viewData">
                <p>Data below</p>
                <table>
                {this.mapValues()}
                </table>
            </div>
        );
    }
}

export default ViewData;
