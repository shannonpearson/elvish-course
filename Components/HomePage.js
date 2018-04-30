import React, { Component } from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: null,
    };
    this.handleButtonPress = this.handleButtonPress.bind(this);
  }

  handleButtonPress(e) {
    this.setState({ page: e.target.value });
  }

  render() {
    return (

      <View style={styles.container}>
        {this.state.page || 
            <View>
                <Text> Welcome! </Text>
                <Text style={{marginBottom: "5px"}}> Choose an activity: </Text>
                <Button 
                    onPress={this.handleButtonPress}
                    title="About"
                    value="about"
                    accessibilityLabel="Read about Quenya"
                />
                <Button
                    onPress={this.handleButtonPress}
                    title="Match Words"
                    value="match"
                    accessibilityLabel="Choose option to play words match"
                />
            </View>
        }
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
