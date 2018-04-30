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

  handleButtonPress(event) {
    console.log('button press');
    const page = event._dispatchInstances.memoizedProps.accessibilityLabel;
    this.setState({ page });
  }

  render() {
    return (
      <View >
        <Text> Welcome! </Text>
        <Text> Choose an activity: </Text>
        <Button 
            onPress={this.handleButtonPress}
            title="About"
            accessibilityLabel="about"
        />
        <Button
            onPress={this.handleButtonPress}
            title="Match Words"
            value="match"
            accessibilityLabel="match"
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
