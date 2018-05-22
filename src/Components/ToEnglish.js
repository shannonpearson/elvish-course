import React, { Component } from 'react';
import { keys } from 'lodash';
import { View, Text, TextInput, Button, StyleSheet, Keyboard } from 'react-native';

import { sentences } from '../../data/SampleData';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    // flex: 1,
    width: '80%',
  },
  topContainer: {
    backgroundColor: 'purple',
    flex: 0.95,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  },
  button: {
    // flex: 1,
    width: '80%',
  },
});

export default class ToEnglish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSentence: '',
      input: '',
      correct: 0,
      incorrect: 0,
    };
    this.submitAnswer = this.submitAnswer.bind(this);
    this.randomSentence = this.randomSentence.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.keys = keys(sentences['1']);
  }

  componentWillMount() {
    this.randomSentence();
  }

  componentWillUnmount() {
    Keyboard.dismiss();
  }

  randomSentence() {
    this.setState({
      currentSentence: this.keys[Math.floor(Math.random() * this.keys.length)],
    });
  }

  updateInput(event) {
    this.setState({ input: event.nativeEvent.text }, () => {console.log(this.state.input.length)});
  }

  // figure out how to account for capitalization in data
  submitAnswer() { // answer is key so check if sentences at input is equal to current sentence
    console.log('answer submitted', this.state.input);
    if (this.state.input.toLowerCase() === sentences['1'][this.state.currentSentence]) {
      console.log('correct answer');
      this.setState({ correct: this.state.correct + 1 });
    } else {
      console.log('incorrect answer');
      this.setState({ incorrect: this.state.incorrect + 1 });
    }
    this.randomSentence();
    this.textInput.clear();
    Keyboard.dismiss();
  }

  render() {
    return (
        <View style={styles.container}>
            <View
                style={styles.topContainer}
            >
                <Text style={styles.default}> Hello nerds </Text>
                <Text style={styles.default}> {this.state.currentSentence} </Text>
                <TextInput
                    ref={(input) => { this.textInput = input; }}
                    onChange={this.updateInput}
                    style={styles.textInput}
                />
                <Button
                    onPress={this.submitAnswer}
                    title="Submit"
                    accessibilityLabel="submit answer"
                    style={styles.button}
                />
            </View>
            <View style={styles.bottomContainer}>
                <Text> Correct: { this.state.correct } </Text>
                <Text> Incorrect: { this.state.incorrect } </Text>
            </View>
        </View>
    );
  }
}
