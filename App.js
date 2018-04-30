import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HomePage from './Components/HomePage';

export default class App extends Component {

  render() {
    return <View>
        <Text> sup </Text>
        <HomePage />
        <Text> hmm </Text>
      </View>;
  }
}
