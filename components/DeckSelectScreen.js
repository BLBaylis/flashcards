import React, { Component } from 'react';
import { Animated } from 'react-native';
import {connect} from 'react-redux'
import DeckPreview from './DeckPreview'

class DeckSelectScreen extends Component  {

  state = {
    opacity: new Animated.Value(1)
  }

  onPress = deckId => {
    const { navigation, decks } = this.props
    const { name, cardIds} = decks[deckId];
    navigation.navigate('Deck Summary', {deckId, name, deckSize: cardIds.length})
  }

  resetOpacity = () => this.setState({ opacity: new Animated.Value(1) })

  render() {
    const { decks } = this.props
    let decksArr = Object.keys(decks).map(deckId => decks[deckId])

    if (decksArr.length % 2) {
      decksArr = decksArr.concat({
        id: null,
        name: 'Placeholder',
        key: 'blank'
      })
    }

    return (
      <Animated.FlatList
        style = {{ 
          opacity: this.state.opacity,
          marginVertical: 5,
          flex: 1
        }}
        data={decksArr}
        renderItem={({item: deck}) => {
          const { id, cardIds, name } = deck;
          return (
            <DeckPreview 
              opacity = {this.state.opacity}
              resetOpacity={this.resetOpacity}
              onPress = {this.onPress} 
              deckId = {id}
              deckSize = {cardIds && cardIds.length}
              name = {name} 
              empty = {id === null}
            />
          )
        }}
        horizontal = {false}
        numColumns = {2}
        columnWrapperStyle = {{margin: 5}}
      />
    );
  }
}

export default connect(({ decks }) => ({ decks }))(DeckSelectScreen)