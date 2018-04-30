import React, { Component } from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import About from './About';
import WordMatch from './WordMatch';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: null,
    };
    this.handleButtonPress = this.handleButtonPress.bind(this);
  }

  componentDidMount() {
      console.log('mounted home page')
  }

  handleButtonPress(e) {
    this.setState({ page: e.target.value });
  }

  render() {
    return (
      <View >
        <Text> Welcome! </Text>
        <Text> Choose an activity: </Text>
        <Button 
            onPress={this.handleButtonPress}
            title="About"
            value="about"
            accessibilityLabel="Read about Quenya"
        />
        <Button
            onPress={this.handleButtonPress}
            title="Match Words"
            value="match"
            accessibilityLabel="Choose option to play words match"
        />
        {this.state.page === 'about' && <About />}
        {this.state.page === 'match' && <WordMatch />}
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
