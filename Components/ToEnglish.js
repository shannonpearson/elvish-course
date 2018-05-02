import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

export default class ToEnglish extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentWord: '',
            input: '',
        }
        this.submitAnswer = this.submitAnswer.bind(this);
    }

    submitAnswer() {

    }
    
    render() {

    }
}
