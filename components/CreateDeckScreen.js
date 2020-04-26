import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {connect} from 'react-redux'
import { generateUID } from "../utils";
import { addNewDeck } from "../actions";

class CreateDeckScreen extends Component {

  state = {
    title: ''
  }

  updateTitle = newTitle => this.setState({ title: newTitle })

  handleSubmit = () => {
    const createAlert = message => Alert.alert(`Deck creation failed: ${message}`)
    const title = this.state.title
    const { handleNewDeck, navigation, deckNames } = this.props
    this.setState({ title: '' })
    if (!title) {
      return createAlert('Missing name')
    }
    if (deckNames.includes(title.toLowerCase())) {
      return createAlert('A deck with this name already exists')
    }
    try {
      const id = handleNewDeck(title)
      navigation.navigate('Deck Summary', {deckId: id, name: title, deckSize: 0})
    } catch (error) {
      createAlert(error.message)
    }
  }
  
  render() {
    const {title} = this.state
    return (
      <View style = {styles.container}>
        <Text style = {styles.header}>Deck Title</Text>
        <TextInput 
          value = {title} 
          onChangeText = {text => this.updateTitle(text)}
          style = {[styles.subheader, styles.border, styles.textInput]}
          placeholder = 'New Deck Name'
        />
        <TouchableOpacity style = {[styles.border, styles.button, styles.primary]} onPress = {this.handleSubmit}>
          <Text style = {[styles.buttonText, styles.primary]}>Create Deck</Text>
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

const mapStateToProps = ({ decks }) => ({ deckNames: Object.keys(decks).map(deckId => decks[deckId].name.toLowerCase())})

const mapDispatchToProps = dispatch => ({ 
  handleNewDeck: name => {
    const id = generateUID()
    dispatch(addNewDeck(id, name))
    return id
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateDeckScreen)