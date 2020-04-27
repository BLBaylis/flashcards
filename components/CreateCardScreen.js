import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {connect} from 'react-redux'
import { addCardToCards, addCardToDeck } from "../actions";
import { generateUID } from "../utils";

class CreateCardScreen extends Component {

  state = {
    question: '',
    answer: ''
  }

  handleChangeText = (text, name) => this.setState({ [name]: text })

  handleSubmit = () => {
    const createAlert = message => Alert.alert(`Card creation failed: ${message}`)
    const {question, answer} = this.state
    const { handleNewCard, navigation, route } = this.props
    const { deckId, deckSize } = route.params
    console.log(deckSize)
    this.setState({ question: '', answer: ''})
    if (!question || !answer) {
      return createAlert('Missing field')
    }
    try {
      handleNewCard(deckId, { question, answer })
      navigation.navigate('Deck Summary', {deckSize: deckSize + 1 })
    } catch (error) {
      createAlert(error.message)
    }
  }
  
  render() {
    const {question, answer} = this.state
    return (
      <View style = {styles.container}>
        <TextInput 
          value = {question} 
          onChangeText = {text => this.handleChangeText(text, 'question')}
          style = {[styles.subheader, styles.border, styles.textInput]}
          placeholder = 'Question'
          name = 'question'
        />
        <TextInput 
          value = {answer} 
          onChangeText = {text => this.handleChangeText(text, 'answer')}
          style = {[styles.subheader, styles.border, styles.textInput]}
          placeholder = 'Answer'
          name = 'answer'
        />
        <TouchableOpacity 
          style = {[styles.border, styles.button, styles.primary]}
          onPress = {this.handleSubmit}
        >
          <Text style = {[styles.buttonText, styles.primary]}>Create Flashcard</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    fontSize: 50,
    marginBottom: 60
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
  },
  textInput: {
    width: '90%',
    paddingHorizontal: 15,
    marginBottom: 20
  }
})

const mapDispatchToProps = dispatch => ({
  handleNewCard: (deckId, card) => {
    const cardId = generateUID();
    dispatch(addCardToCards(cardId, deckId, card))
    dispatch(addCardToDeck(deckId, cardId))
  }
})

export default connect(null, mapDispatchToProps)(CreateCardScreen)