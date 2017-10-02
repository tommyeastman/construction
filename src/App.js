import React, { Component } from 'react';
import firebase from 'firebase';
import logo from './img/man.svg';
import './normalize.css';
import './skeleton.css';
import LoginScreen from './screens/LoginScreen';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCsDdxt0wRWtyEK4Ja3x5ez51pXdP2ZZQ8',
      authDomain: 'constructiondata-37f56.firebaseapp.com',
      databaseURL: 'https://constructiondata-37f56.firebaseio.com',
      projectId: 'constructiondata-37f56',
      storageBucket: '',
      messagingSenderId: '147091822977'
    });
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Construction Data</h1>
        </header>
        <LoginScreen/>
      </div>
    );
  }
}

export default App;
