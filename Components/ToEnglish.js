import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

import sentences from '../data/SampleData';

export default class ToEnglish extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSentence: '',
            input: '',
        }
        this.submitAnswer = this.submitAnswer.bind(this);
        this.randomSentence = this.randomSentence.bind(this);
        this.keys = keys(sentences['1']);
    }

    componentWillMount() {
        this.randomSentence();
    }

    randomSentence() {
        this.setState({
            currentSentence: this.keys[Math.floor(Math.random() * this.keys.length)],
        })
    }

    // figure out how to account for capitalization in data
    submitAnswer() { // answer is key so check if sentences at input is equal to current sentence
        if (this.state.currentSentence.toLowerCase() === sentences['1'][this.state.input.toLowerCase()]) {
            this.setState({ correct: this.state.correct + 1 });
            this.randomSentence();
        } else {
            this.setState({ incorrect: this.state.incorrect + 1 });
            this.randomSentence();
        }
    }
    
    render() {
        return (
            <View>
                <Text> {this.state.currentSentence} </Text>
                <TextInput> </TextInput>
            </View>
        )
    }
}
