import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { keys } from 'lodash';
import { sentences } from '../data/SampleData';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sentence: {
    backgroundColor: 'lightgreen',
  },
});

export default class ToElvish extends React.Component {
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

  randomSentence() { // keys should be ELVISH sentences
    this.setState({
      currentSentence: sentences[1][Math.floor(Math.random() * this.keys.length)],
    });
  }

  updateInput(input) {
    console.log(input);
    this.setState({ input });
  }

  submitAnswer() { // answer is value so check if sentence key = value
    console.log('answer submitted: ', this.state.input);
    if (sentences['1'][this.state.currentSentence.toLowerCase()] === this.state.input.toLowerCase()) {
      this.setState({ correct: this.state.correct + 1 });
      this.randomSentence();
    } else {
      this.setState({ incorrect: this.state.incorrect + 1 });
      this.randomSentence();
    }
  }

  render() {
    return (
      <View style={styles.container}>
          <Text> {this.state.currentSentence} </Text>
          <TextInput onTextChange={this.submitAnswer}> </TextInput>
      </View>
    );
  }
}
