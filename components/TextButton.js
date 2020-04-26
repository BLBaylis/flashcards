import React from 'react'
import {Text, StyleSheet, TouchableOpacity} from 'react-native'

const TextButton = ({buttonStyles, textStyles, onPress, children, ...rest}) => {
  buttonStyles = Array.isArray(buttonStyles) ? [styles.border, styles.button, ...buttonStyles] : [styles.border, styles.button, buttonStyles]
  textStyles = Array.isArray(textStyles) ? [styles.buttonText, ...textStyles] : [styles.buttonText, textStyles]
  return (
    <TouchableOpacity style = {buttonStyles} onPress = {onPress} {...rest}>
      <Text style = {textStyles}>{children}</Text>
    </TouchableOpacity>
  )
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
    textAlign: 'center'
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

export default TextButton