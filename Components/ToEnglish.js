import React, { Component } from 'react';
import { keys } from 'lodash';
import { View, Text, TextInput, Button } from 'react-native';

import { sentences } from '../data/SampleData';

export default class ToEnglish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSentence: '',
      input: '',
    };
    this.submitAnswer = this.submitAnswer.bind(this);
    this.randomSentence = this.randomSentence.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.keys = keys(sentences['1']);
  }

  componentWillMount() {
    this.randomSentence();
  }

  randomSentence() {
    this.setState({
      currentSentence: this.keys[Math.floor(Math.random() * this.keys.length)],
    });
  }

  updateInput(event) {
    console.log('on text change')
    this.setState({ input: event.nativeEvent.text });
  }

  // figure out how to account for capitalization in data
  submitAnswer() { // answer is key so check if sentences at input is equal to current sentence
    console.log('answer submitted', this.state.input);
    // if (this.state.currentSentence.toLowerCase() === sentences['1'][this.state.input.toLowerCase()]) {
    //   this.setState({ correct: this.state.correct + 1 });
    //   this.randomSentence();
    // } else {
    //   this.setState({ incorrect: this.state.incorrect + 1 });
    //   this.randomSentence();
    // }
  }

  render() {
    return (
        <View>
            <Text> Hello nerds </Text>
            <Text> {this.state.currentSentence} </Text>
            <TextInput
                onChange={this.updateInput}
            > </TextInput>
            <Button
                onPress={this.submitAnswer}
                title="Submit"
                accessibilityLabel="submit answer"
            ></Button>
        </View>
    );
  }
}
