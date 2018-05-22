import React from 'react';
import { View, Text, TextInput, Button, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';

import loginSuccess from '../actions/index';

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
      loading: false,
    };
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
    this.setState({ loading: true });
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log('logged in successfully');
        this.setState({ loading: false });
        this.props.loginSuccess(user);
      }).then(() => {
        console.log('USER EMAIL', this.props.userEmail);
      })
      .catch((error) => {
        console.log('error logging in', error);
        // console.log('PROPS', this.props);
        this.setState({ loading: false, password: '' });
        // alert incorrect email or password
      });
  }

  // onLoginSuccess() {}

  signUp() {
    this.setState({ loading: true });
    const { email, password } = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log('sign up successful');
        this.setState({ loading: false });
        this.props.login(user);
        console.log(user);
      })
      .catch((error) => {
        console.log('error signing up', error);
        this.setState({ loading: false });
        // alert failure (depending on error? username exists or other?)
      });
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
        { this.state.loading && <ActivityIndicator size="small" /> }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  userEmail: state.auth.userEmail,
});

export default connect(mapStateToProps, { loginSuccess })(LoginForm);
