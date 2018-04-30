import React, { Component } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import words from '../data/SampleData';
import { keys, shuffle, map } from 'lodash';


export default class WordMatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            match: null,
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
        this.setState({ currentWord: options[0], choices })
    }

    handleChoose(e) {
        if (e.target.value === words[this.state.currentWord]) {
            this.setState({ match: true });
        } else { // make this ({ match: e.target.value === this.props... }) ?
            this.setState({ match: false });
        }
    }

    render() {
        const loading = !this.state.currentWord.length;
        return (
            <View>
                {loading || <ActivityIndicator size="large" />}
                {loading && 
                    <View>
                        <Text> {this.state.currentWord} </Text>
                        {this.state.choices.map((option) => (
                            <Button
                                onPress={this.handleChoose}
                                title={option}
                                value={option}
                                accessibilityLabel={'Select option ' + option}
                            />
                        ))}
                        {this.state.match === null ||
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
