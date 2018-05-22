import React, { Component } from 'react';
import { View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native';
import words from '../../data/SampleData';
import { keys, shuffle, map } from 'lodash';


export default class WordMatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guess: '',
      currentWord: '',
      choices: [],
      correct: 0,
      incorrect: 0,
    };
    this.handleChoose = this.handleChoose.bind(this);
    this.randomWord = this.randomWord.bind(this);
    this.keys = keys(words);
  }

  componentWillMount() {
    this.randomWord();
  }

  randomWord() {
    const options = shuffle(this.keys).slice(0, 4);
    const choices = map(options, (key) => words[key]);
    this.setState({ currentWord: options[0], choices: shuffle(choices), guess: '' }, () => { console.log(this.state); });
  }

  handleChoose(event) {
    const guess = event._dispatchInstances.memoizedProps.accessibilityLabel;
    if (!this.state.guess.length) {
      if (guess === words[this.state.currentWord]) {
        this.setState({ guess, correct: this.state.correct + 1 });
      } else {
        this.setState({ guess, incorrect: this.state.incorrect + 1 });
      }
    }
  }

  render() {
    return (
            <View>
                {!!this.state.currentWord.length || <ActivityIndicator size="large" />}
                {!!this.state.currentWord.length &&
                    <View>
                        <Text> {this.state.currentWord} </Text>
                        {
                            this.state.choices.map((option) => {
                                let color;
                                if (this.state.guess.length) {
                                    if (option === words[this.state.currentWord]) {
                                        color = '#2ed114';
                                    } else if (option === this.state.guess) {
                                            color = '#dd1313';
                                    } else {
                                        color = '#a2c0f2';
                                    }
                                } else {
                                    color = '#a2c0f2';
                                }
                                return (
                                <View key={option} style={styles.guessButton}>
                                    <Button
                                        onPress={this.handleChoose}
                                        title={option}
                                        color={color}
                                        accessibilityLabel={option}
                                    />
                                </View>
                                );
                            })
                        }
                        {
                            !!this.state.guess.length &&
                            <View style={styles.nextButton}>
                                <Button
                                    onPress={this.randomWord}
                                    title="Next"
                                    accessibilityLabel="Advance to next word"
                                />
                            </View>
                        }
                        <View style={{ flex: 1 }}>
                            <Text style={styles.counterText}> Correct: { this.state.correct } </Text>
                            <Text style={styles.counterText}> Incorrect: { this.state.incorrect } </Text>
                        </View>
                    </View>
                }
            </View>
    );
  }
}

const styles = StyleSheet.create({
  guessButton: {
    marginTop: 10,
    width: '80%',
  },
  nextButton: {
    marginTop: 20,
    width: '80%',
  },
  container: {
    flex: 1,
  },
  counterText: {
    marginLeft: 20,
    // fontFamily: '"Trebuchet MS",Helvetica,sans-serif',
  },
});
