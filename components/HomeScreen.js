import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import DeckSelectScreen from './DeckSelectScreen'
import CreateDeckScreen from './CreateDeckScreen';

const Tab = createMaterialTopTabNavigator();

const HomeScreen = ({ navigation }) => {

  return (
    <Tab.Navigator >
      <Tab.Screen name="Home" component={DeckSelectScreen} options = {{title: 'Decks'}}/>
      <Tab.Screen name="Create Deck" component={CreateDeckScreen}/>
    </Tab.Navigator>
  );
}

export default HomeScreen