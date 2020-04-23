import React from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import Deck from './Deck'

const DeckSelectScreen = () => {

  let decks = Array(19).fill().map((curr, index) => ({
    id: `${index + 1}`,
    empty: false
  }))

  if (decks.length % 2) {
    decks = decks.concat({
      id: 'blank',
      empty: true
    })
  }

  console.log(decks)

  return (
    <FlatList
      data={decks}
      horizontal = {false}
      numColumns = {2}
      renderItem={({item}) => <Deck deckNum={item.id} empty = {item.id === 'blank'}/>}
      columnWrapperStyle = {{marginHorizontal: 5}}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 40,
    marginTop: 30,
    margin: 30,
    textAlign: "center",
    flex: 2
  },
  deckContainer: {
    flex : 1,
    borderColor : '#000',
    borderStyle: 'solid',
    borderWidth: 1
  }
})

export default DeckSelectScreen