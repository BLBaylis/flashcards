import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

const Deck = ({ deckNum, empty }) => {
  if (empty) {
    return <View style= {[styles.deck, styles.empty]}></View>
  }
  return (
    <View style = {styles.deck}>
      <Text>Deck {deckNum}</Text>
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
  }
})

export default Deck