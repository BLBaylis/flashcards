import React from 'react';
import {FlatList} from 'react-native';
import DeckPreview from './DeckPreview'

const DeckSelectScreen = ({ navigation }) => {

  decks = {
    1: {
      id: 1,
      name: 'Deck 1',
      cardIds: [1, 2]
    },
    2: {
      id: 2,
      name: 'Deck 2',
      cardIds: [3, 4, 7, 8]
    }
  }

  const decksArr = Object.keys(decks).map(deckId => decks[deckId])

  if (decksArr.length % 2) {
    decksArr = decksArr.concat({
      id: null,
      name: 'Placeholder'
    })
  }

  const onPress = deckId => {
    const { name, cardIds} = decks[deckId];
    navigation.navigate('Deck Summary', {deckId, name, cardIds})
  }

  return (
    <FlatList
      data={decksArr}
      renderItem={({item: deck}) => (
        <DeckPreview 
          onPress = {onPress} 
          deckId = {deck.id}
          name={deck.name} 
          empty = {deck.id === null}
        />
      )}
      horizontal = {false}
      numColumns = {2}
      columnWrapperStyle = {{marginHorizontal: 5}}
    />
  );
}

export default DeckSelectScreen