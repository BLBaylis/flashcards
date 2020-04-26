import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const DeckSummary = ({route, navigation}) => {
  const {deckId, name, deckSize, cardIds} = route.params
  return (
    <View style = {styles.container}>
      <Text style = {styles.header}>{name}</Text>
      <Text style = {styles.subheader}>{deckSize} Cards</Text>
      <View style = {styles.buttonsWrapper}>
        <TouchableOpacity style = {[styles.border, styles.button, styles.primary]}>
          <Text style = {[styles.buttonText, styles.primary]}>Start Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => navigation.navigate('Create Flashcard', { deckId, name, deckSize })} style = {[styles.border, styles.button, styles.secondary]}>
          <Text style = {[styles.buttonText, styles.secondary]}>Add Card</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    fontSize: 50,
    marginBottom: 20
  },
  subheader: {
    fontSize: 35
  },
  border: {
    borderStyle: 'solid',
    borderWidth: 1
  },
  buttonsWrapper: {
    marginTop: 70,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    fontSize: 60,
    borderRadius: 8,
    margin: 10
  },
  buttonText: {
    fontSize: 25,
  },
  primary: {
    borderColor: 'purple',
    color: 'purple'
  },
  secondary: {
    borderColor: 'orange',
    color: 'orange'
  }
})

export default DeckSummary