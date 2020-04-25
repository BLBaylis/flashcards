import React from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux'
import DeckPreview from './DeckPreview'

const DeckSelectScreen = ({ navigation, decks }) => {

  let decksArr = Object.keys(decks).map(deckId => decks[deckId])

  if (decksArr.length % 2) {
    decksArr = decksArr.concat({
      id: null,
      name: 'Placeholder',
      key: 'blank'
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

export default connect(({ decks }) => ({ decks }))(DeckSelectScreen)