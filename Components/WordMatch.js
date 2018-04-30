import React, { Component } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import words from '../data/SampleData';
import { keys, shuffle, map } from 'lodash';


export default class WordMatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guess: '',
            currentWord: '',
            choices: [],
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
        const choices = map(options, (key) => {
            return words[key];
        });
        this.setState({ currentWord: options[0], choices, guess: '' });
    }

    handleChoose(e) {
        this.setState({ guess: e.target.value });
    }

    render() {
        const loading = !this.state.currentWord.length;
        return (
            <View>
                {loading || <ActivityIndicator size="large" />}
                {loading && 
                    <View>
                        <Text> {this.state.currentWord} </Text>
                        {this.state.choices.map((option) => {
                            let color;
                            if (this.state.guess.length) {
                                if (option === words[this.state.currentWord]) {
                                    color = '#2ed114';
                                } else if (this.state.guess === option) {
                                        color = '#dd1313';
                                } else {
                                    color = '#a2c0f2';
                                }
                            } else {
                                color = '#a2c0f2';
                            }
                            return (
                            <Button
                                onPress={this.handleChoose}
                                title={option}
                                value={option}
                                color={}
                                accessibilityLabel={'Select option ' + option}
                            />)
                        })}
                        {this.state.guess.length &&
                            <Button
                                onPress={this.randomWord}
                                title="Next"
                                accessibilityLabel="Advance to next word"
                            />
                        }
                    </View>
                }
            </View>
        )
    }
}
