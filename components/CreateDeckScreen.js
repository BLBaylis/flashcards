import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

class CreateDeckScreen extends Component {

  state = {
    title: ''
  }

  updateTitle = newTitle => this.setState({ title: newTitle })
  
  render() {
    const {title} = this.state
    console.log(title)
    return (
      <View style = {styles.container}>
        <Text style = {styles.header}>Deck Title</Text>
        <TextInput 
          value = {title} 
          onChangeText = {text => this.updateTitle(text)}
          style = {[styles.subheader, styles.border, styles.textInput]}
          placeholder = 'New Deck Name'
        />
        <TouchableOpacity style = {[styles.border, styles.button, styles.primary]}>
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

export default CreateDeckScreen