import React, { Component } from 'react';
import firebase from 'firebase';
import DeleteDataButton from './DeleteDataButton';

class Value extends Component {
    render() {
        const {keyProp, valProp} = this.props;
        //console.log(keyProp);
        //console.log(valProp);
        return (
        <tr>
            <td><p>{keyProp}</p></td>
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
        //console.log(keys);
        ///console.log(values);

        if (values === null) {
            this.getData();
        } else {
            return (
                keys.map( (key) => {
                    return <Value keyProp={key} />
                } )
                /*values.map( (value) => {
                    return <Value valProp={value} />
                } )*/
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
