import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
const { Component } = React;

export default class HomePage extends Component {
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
      <Text> Welcome! </Text>
      <Text style={{marginBottom: "5px"}}> Choose an activity: </Text>
    <Button 
        onPress={this.handleButtonPress}
        title="Click me!"
        accessibilityLabel="This is a button!"
    />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
