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
    // this.handleButtonPress = this.handleButtonPress.bind(this);
  }

  static navigationOptions = {
      title: 'Welcome',
  }

//   handleButtonPress(event) {
//     const page = event._dispatchInstances.memoizedProps.accessibilityLabel;
//     this.setState({ page });
//   }

  render() {
    const { navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
            <View>
                <Text> Welcome! </Text>
                <Text> Choose an activity: </Text>
            </View>
            <View style={styles.button}>
                <Button 
                    onPress={() => {
                        navigate('About');
                    }}
                    title="About"
                    accessibilityLabel="about"
                />
            </View>
            <View style={styles.button}>
                <Button
                    onPress={() => {
                        navigate('WordMatch');
                    }}
                    title="Match Words"
                    accessibilityLabel="match"
                />
            </View>
        {this.state.page === 'about' && <About />}
        {this.state.page === 'match' && <WordMatch />}
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
  button: {
    width: "80%",
  },
  text: {
  }
});
