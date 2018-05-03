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
    // console.log(sentences['1'][this.state.currentSentence].length + ' is equal to ' +  this.state.input.toLowerCase().length);
    // console.log('are these equal?', this.state.input.toLowerCase() === sentences['1'][this.state.currentSentence]);
    this.randomSentence();
    this.textInput.clear();
  }

  render() {
    return (
        <View>
            <Text> Hello nerds </Text>
            <Text> {this.state.currentSentence} </Text>
            <TextInput
                ref={(input) => { this.textInput = input; }}
                onChange={this.updateInput}
                // onSubmitEditing={this.on}
            > </TextInput>
            <Button
                onPress={this.submitAnswer}
                title="Submit"
                accessibilityLabel="submit answer"
            ></Button>
            <Text> Correct: { this.state.correct } </Text>
            <Text> Incorrect: { this.state.incorrect } </Text>
        </View>
    );
  }
}
