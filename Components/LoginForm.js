import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import firebase from 'firebase';

const { Component } = React;

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  inputField: {
    height: 40,
    width: '70%',
  },
};

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
    this.updateEmailInput = this.updateEmailInput.bind(this);
    this.updatePasswordInput = this.updatePasswordInput.bind(this);
    this.logIn = this.logIn.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  updateEmailInput(input) {
    this.setState({ email: input });
  }

  updatePasswordInput(input) {
    this.setState({ password: input });
  }

  logIn() {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('logged in successfully');
      })
      .catch((error) => {
        console.log('error logging in', error);
        // alert incorrect email or password
      })
  }

  signUp() {
    const { email, password } = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('sign up successful');
      })
      .catch((error) => {
        console.log('error signing up', error);
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Email: </Text>
        <TextInput
          style={styles.inputField}
          onChangeText={this.updateEmailInput}
          value={this.state.email}
        />
        <Text> Password: </Text>
        <TextInput
          style={styles.inputField}
          onChangeText={this.updatePasswordInput}
          value={this.state.password}
          autoCorrect={false}
          secureTextEntry
        />
        <Button
          onPress={this.logIn}
          title="Log In"
          accessibilityLabel="log in"
        />
        <Button
          onPress={this.signUp}
          title="Sign Up"
          accessibilityLabel="sign up"
        />
      </View>
    );
  }
}

export default LoginForm;
