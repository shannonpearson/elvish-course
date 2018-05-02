import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';

import About from './Components/About';
import HomePage from './Components/HomePage';
import WordMatch from './Components/WordMatch';

const App = StackNavigator({
  Home: { screen: HomePage },
  About: { screen: About },
  WordMatch: { screen: WordMatch },
});


// export default class App extends Component {

//   render() {
//     return (
//       <View style={styles.container}>
//         <HomePage />
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: "#d0baef",
  }
});

export default App;
