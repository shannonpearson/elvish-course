import React from 'react';
import { Text, Button } from 'react-native';
const { Component } = React;

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: null,
        }
    }

    render() {
        return (
            <Text>
              Lorem ipsum dolor sit amet, ea qui vidisse dissentias, duo
              dissentias constituam at. Eum copiosae liberavisse in, dolore
              vivendum duo no. Has eu admodum percipit, eius magna
              neglegentur qui id, ad sonet minimum mei. Ad quo clita putent,
              te pro summo perpetua. Mazim recusabo nec in, te cum probatus
              deserunt temporibus, vim ancillae contentiones at.
            </Text>
        );
    }
};
