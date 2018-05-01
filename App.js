import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HomePage from './Components/HomePage';

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <HomePage />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: "#d0baef",
  }
});
