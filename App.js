import React, {Component} from 'react';
import { View, Text } from 'react-native';
import LandingScreen from './components/LandingScreen'
import DeckSelectScreen from './components/DeckSelectScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function CreateDeckScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Create Deck</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

class App extends Component {

  state = {
    userPressedStart: true //change to false for production
  }

  goToHome = () => this.setState({ userPressedStart: true })

  render() {
    const userPressedStart = this.state.userPressedStart
    return userPressedStart ? (
      <NavigationContainer>
        <Tab.Navigator initialRouteName = {'Select Deck'}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Create Deck" component={CreateDeckScreen} />
          <Tab.Screen name="Select Deck" component={DeckSelectScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    ) : <LandingScreen goToHome = {this.goToHome}/>
  }
  
}

export default App;