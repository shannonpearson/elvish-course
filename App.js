import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import About from './Components/About';
import HomePage from './Components/HomePage';
import WordMatch from './Components/WordMatch';
import ToElvish from'./Components/ToElvish';
import ToEnglish from './Components/ToEnglish';

const App = StackNavigator({
  Home: { screen: HomePage },
  About: { screen: About },
  WordMatch: { screen: WordMatch },
  ToElvish: { screen: ToElvish },
  ToEnglish: { screen: ToEnglish },
});

export default App;
