import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from './actions'
import { createStackNavigator } from '@react-navigation/stack';
import {setLocalNotification} from './services/notifications'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import LandingScreen from './components/LandingScreen';
import HomeScreen from './components/HomeScreen';
import Logo from './components/Logo'
import DeckSummary from './components/DeckSummary'
import CreateCardScreen from './components/CreateCardScreen';
import QuizScreen from './components/QuizScreen';

const Stack = createStackNavigator();

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#9400d3',
    text: '#0e0e10',
  },
};

class App extends Component {

  state = {
    userPressedStart: false, //change to false for production
    loading: true
  }

  componentDidMount() {
    this.props.handleInitialData().then(() => this.setState({ loading: false }))
    setLocalNotification()
  }

  goToHome = () => this.setState({ userPressedStart: true })

  render() {
    const userPressedStart = this.state.userPressedStart
    if (this.state.loading) {
      return <Logo/>
    }
    return userPressedStart ? (
      <NavigationContainer theme = {Theme}>
        <Stack.Navigator>
          <Stack.Screen name = "Decks" component = {HomeScreen} options = {{headerShown: false}}/>
          <Stack.Screen name = "Deck Summary" component = {DeckSummary} />
          <Stack.Screen name = 'Quiz' component = {QuizScreen} />
          <Stack.Screen name = "Create Flashcard" component = {CreateCardScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    ) : <LandingScreen goToHome = {this.goToHome}/>
  }
}

export default connect(null, {handleInitialData})(App);