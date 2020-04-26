import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DeckSelectScreen from './DeckSelectScreen'
import DeckSummary from './DeckSummary'
import CreateCardScreen from './CreateCardScreen';
import QuizScreen from './QuizScreen';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {

  return (
    <Stack.Navigator>
      <Stack.Screen name = "Decks" component = {DeckSelectScreen} />
      <Stack.Screen name = "Deck Summary" component = {DeckSummary} />
      <Stack.Screen name = 'Quiz' component = {QuizScreen} />
      <Stack.Screen name = "Create Flashcard" component = {CreateCardScreen}/>
    </Stack.Navigator>
  );
}

export default HomeScreen