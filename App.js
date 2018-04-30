import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import HomePage from './Components/HomePage';

const { Component } = React;

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: false,
    };
    this.handleButtonPress = this.handleButtonPress.bind(this);
  }

  handleButtonPress() {
    this.setState({ page: true });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        { this.state.page && <HomePage/>}
        <Button 
          onPress={this.handleButtonPress}
          title="Click me!"
          accessibilityLabel="This is a button!"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
