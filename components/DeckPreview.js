import React, {Component} from 'react'
import {TouchableWithoutFeedback, StyleSheet, View, Text, Animated} from 'react-native'

class DeckPreview extends Component {
  
  state = {
    elevation: new Animated.Value(1)
  }

  onPress = () => {
    Animated.parallel([
      Animated.sequence([
        Animated.timing(this.state.elevation, {toValue: 2, duration: 300}),
        Animated.timing(this.state.elevation, {toValue: 1, duration: 300})
      ]),
      Animated.sequence([
        Animated.timing(this.props.opacity, {toValue: 0.5, duration: 600}),
        Animated.timing(this.props.opacity, {toValue: 1, duration: 1})
      ]),
      
    ]).start(() => {
      this.props.onPress(this.props.deckId)
    })
  }

  render(){
    const { name, deckSize, empty } = this.props
    if (empty) {
      return <View style= {[styles.deck, styles.empty]}></View>
    }
    return (
      <Animated.View style = {[styles.deck, { elevation: this.state.elevation }]}>
        <TouchableWithoutFeedback style = {styles.button} onPress = {this.onPress}>
          <View style = {styles.textWrapper}>
            <Text style = {styles.buttonText}>{name}</Text>
            <Text style = {styles.buttonText}>{deckSize} {deckSize > 1 ? 'Cards' : 'Card'}</Text>
          </View>
        </TouchableWithoutFeedback>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  deck: {
    flex: 1,
    aspectRatio : 0.75,
    borderStyle: 'solid',
    borderColor: 'transparent',
    marginHorizontal: 5
  },
  empty: {
    color: 'transparent',
    borderColor: 'transparent',
    elevation: 0
  },
  textWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    flex: 1,
  },
  buttonText: {
    fontSize: 25,
    textAlign: "center"
  }
})

export default DeckPreview