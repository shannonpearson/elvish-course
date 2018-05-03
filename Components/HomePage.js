import React, { Component } from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import About from './About';
import WordMatch from './WordMatch';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: null,
    };
  }

  static navigationOptions = {
      title: 'Welcome',
  }

  render() {
    const { navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text> Choose an activity: </Text>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button 
                        onPress={() => {
                            navigate('About');
                        }}
                        title="About"
                        accessibilityLabel="about page"
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        onPress={() => {
                            navigate('WordMatch');
                        }}
                        title="Match Words"
                        accessibilityLabel="match words"
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        onPress={() => {
                            navigate('ToEnglish');
                        }}
                        title="Translate to English"
                        accessibilityLabel="translate to english"
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        onPress={() => {
                            navigate('ToElvish');
                        }}
                        title="Translate to Elvish"
                        accessibilityLabel="translate to elvish"
                    />
                </View>
            </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  textContainer: {
      flex: 1,
      backgroundColor: 'lightblue',
      alignItems: 'center',
      justifyContent: 'flex-end',
  },
  buttonContainer: {
      flex: 2,
      backgroundColor: 'purple',
      alignItems: 'center',
      justifyContent: 'space-evenly',
  },
  button: {
    width: "80%",
  },
  text: {
  }
});
