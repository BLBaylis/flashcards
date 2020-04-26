import React from 'react'
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native'

const DeckPreview = ({ deckId, name, deckSize, empty, onPress }) => {
  if (empty) {
    return <View style= {[styles.deck, styles.empty]}></View>
  }
  return (
    <View style = {styles.deck}>
      <TouchableOpacity onPress = {() => onPress(deckId)}>
        <Text>{name}</Text>
        <Text>{deckSize} Cards</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  deck: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    aspectRatio : 1,
    margin: 10
  },
  empty: {
    color: 'transparent',
    borderColor: 'transparent'
  },
  text: {
    textAlign: "center"
  }
})

export default DeckPreview