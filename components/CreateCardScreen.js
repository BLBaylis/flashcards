import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

class CreateCardScreen extends Component {

  state = {
    question: '',
    answer: ''
  }

  handleChange = ({ target }) => this.setState({ [target.name]: target.value })
  
  render() {
    const {question, answer} = this.state
    return (
      <View style = {styles.container}>
        <Text style = {styles.header}>New Flashcard</Text>
        <TextInput 
          value = {question} 
          onChange = {this.handleChange}
          style = {[styles.subheader, styles.border, styles.textInput]}
          placeholder = 'Question'
          name = 'question'
        />
        <TextInput 
          value = {answer} 
          onChange = {this.handleChange}
          style = {[styles.subheader, styles.border, styles.textInput]}
          placeholder = 'Answer'
          name = 'answer'
        />
        <TouchableOpacity style = {[styles.border, styles.button, styles.primary]}>
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

export default CreateCardScreen