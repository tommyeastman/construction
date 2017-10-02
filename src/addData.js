import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import AddDataButton from './components/AddDataButton';

/*
export default class App extends Component {
    render(){
        return (
            <div>
                <h1>heyheyhey</h1>
            </div>
        );
    }
}*/

ReactDOM.render(<AddDataButton />, document.getElementById('root'));
registerServiceWorker();
