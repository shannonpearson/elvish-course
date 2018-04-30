import React, { Component } from 'react';
import { Text, Button } from 'react-native';
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
        if (e.target.value === this.props.words[this.state.currentWord]) {
            this.setState({ match: true });
        } else { // make this ({ match: e.target.value === this.props... }) ?
            this.setState({ match: false });
        }
    }

    render() {
        if (this.state.currentWord.length) {

        } else {

        }
    }
}