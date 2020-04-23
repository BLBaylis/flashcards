import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const LandingScreen = ({ goToHome }) => (
  <View style={styles.container}>
    <Text style={[styles.header, styles.text]}>FLASHCARDS</Text>
    <View style = {styles.start}>
      <Button onPress = {goToHome} title = 'start'/>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'space-between'
  },
  text: {
    textAlign: 'center',
    fontSize: 50
  },
  header: {
    marginTop: 90,
  },
  start: {
    marginBottom: 90
  }
});

export default LandingScreen