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
        console.log('options', options)
        const choices = map(options, (key) => {
            return words[key];
        });
        console.log('choices', choices);
        this.setState({ currentWord: options[0], choices: shuffle(choices), guess: '' }, () => {console.log(this.state)});
    }

    handleChoose(event) {
        this.setState({ guess: event._dispatchInstances.memoizedProps.accessibilityLabel });
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
                            <Button
                                onPress={this.handleChoose}
                                title={option}
                                color={color}
                                key={option}
                                accessibilityLabel={option}
                            />)
                        })
                    }
                        {
                            // this.state.guess.length &&
                            // <Button
                            //     onPress={this.randomWord}
                            //     title="Next"
                            //     accessibilityLabel="Advance to next word"
                            // />
                        }
                    </View>
                }
            </View>
        )
    }
}
