import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextButton from "./TextButton";
import Logo from './Logo'

const LandingScreen = ({ goToHome }) => (
  <View style = {styles.container} >
    <Text style = {[styles.text, styles.whiteText]} >FLASHCARDS</Text>
    <View style= {styles.logoWrapper}>
      <Logo/>
    </View>
    <TextButton 
      buttonStyles = {styles.button} 
      textStyles = {styles.whiteText}
      onPress = {goToHome}
    >Start</TextButton>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9400d3',
  },
  text: {
    textAlign: 'center',
    fontSize: 50
  },
  logoWrapper: {
    marginVertical: 50
  },
  button: {
    borderColor: '#fff',
    paddingHorizontal: 40,
    paddingVertical: 15
  },
  whiteText: {
    color: '#fff'
  }
});

export default LandingScreen