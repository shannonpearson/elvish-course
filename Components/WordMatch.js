import React from 'react';
import { Text, Button } from 'react-native';
import words from '../data/SampleData';
import { keys, shuffle } from 'underscore';

const { Component } = React;

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
        this.setState({ currentWord: this.keys[Math.random() * this.keys.length] });
        // get three different keys from keys

        // get values for currentword and three new keys
        // set to state choices in random order array
    }

    handleChoose(e) {
        if (e.target.value === this.props.words[this.state.currentWord]) {
            this.setState({ match: true });
        } else { // make this ({ match: e.target.value === this.props... }) ?
            this.setState({ match: false });
        }
    }

    render() {

    }
}