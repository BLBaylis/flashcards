import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TextButton from "./TextButton";
import { clearLocalNotification, setLocalNotification } from "../services/notifications";

const QuizEnd = ({ correct, total, restartQuiz, returnToDeck }) => {
  clearLocalNotification().then(setLocalNotification)
  return (
    <View style = {styles.container}>
      <Text style = {styles.text}>You scored {correct} out of {total}</Text>
      <View style = {styles.buttonsWrapper}>
        <TextButton 
          buttonStyles = {styles.primary} 
          textStyles = {styles.primary}
          onPress = {restartQuiz}
        >Restart</TextButton>
        <TextButton 
          buttonStyles = {styles.secondary} 
          textStyles = {styles.secondary}
          onPress = {returnToDeck}
        >Quit</TextButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 30
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
  }
})

export default QuizEnd