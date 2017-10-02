import React, { Component } from 'react';
import AddDataButton from '../components/AddDataButton';
import ViewData from '../components/ViewData';

class DataScreen extends Component {
    render(){
        return(
            <div>
                <h1>Click to add data</h1>
                <AddDataButton/>
                <ViewData/>
            </div>
        )
    }
}

export default DataScreen;
