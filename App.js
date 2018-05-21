import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import firebase from 'firebase';

import About from './Components/About';
import HomePage from './Components/HomePage';
import WordMatch from './Components/WordMatch';
import ToElvish from './Components/ToElvish';
import ToEnglish from './Components/ToEnglish';
import LoginForm from './Components/LoginForm';


const AppNavigator = StackNavigator({
  Home: { screen: HomePage },
  Login: { screen: LoginForm },
  About: { screen: About },
  WordMatch: { screen: WordMatch },
  ToElvish: { screen: ToElvish },
  ToEnglish: { screen: ToEnglish },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: null,
    };
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAWwgTaSzsYhLBWShofpKNUNuNv15JLT94',
      authDomain: 'elvish-40a36.firebaseapp.com',
      databaseURL: 'https://elvish-40a36.firebaseio.com',
      projectId: 'elvish-40a36',
      storageBucket: 'elvish-40a36.appspot.com',
      messagingSenderId: '868722979444',
    });

    // this takes a sec to check for authentication so set a case for if loggedIn is null
    firebase.auth().onAuthStateChanged((user) => { // user is undefined if signed out, object if signed in
      this.setState({ loggedIn: user ? true : false });
    })
  }

  render() {
    return (<AppNavigator />);
  }
}

export default App;
