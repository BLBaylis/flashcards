import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import TextButton from './TextButton'

class Card extends Component {

  state = {
    answered : false
  }

  revealAnswer = () => this.setState({ answered: true })

  progressQuiz = (correct, lastCard) => {
    if (correct) {
      this.props.markCorrect()
    }
    lastCard ? this.props.endQuiz() : this.props.nextCard()
    this.setState({ answered: false, marked: false })
  }

  render() {
    const {answered} = this.state
    const {question, answer, remainingCards} = this.props;
    const lastCard = remainingCards === 0;
    return (
      <View style = {styles.container}>
        <View>
          <Text style = {styles.text}>{answered ? answer : question}</Text>
        </View>
        {answered && <Text>Mark your answer</Text>}
        <View style = {styles.buttonsWrapper}>
          {!answered && <QuizCardButton onPress = {this.revealAnswer}>Show Answer</QuizCardButton>}
          {answered && (
            <>
              <QuizCardButton 
                textStyles = {styles.correct} 
                buttonStyles = {styles.correct} 
                onPress = {() => this.progressQuiz(true, lastCard)}
              >
                Correct
              </QuizCardButton>
              <QuizCardButton 
                textStyles = {styles.incorrect} 
                buttonStyles = {styles.incorrect} 
                onPress = {() => this.progressQuiz(false, lastCard)}
              >
                Incorrect
              </QuizCardButton>
            </>
          )}
        </View>
        {!(lastCard && answered) && <Text>{lastCard ? 'Final card' : `${remainingCards} cards left`}</Text>}
      </View>
    );
  }
}

const QuizCardButton = ({ onPress, children, ...rest }) => (
  <TextButton 
    buttonStyles = {styles.primary} 
    textStyles = {styles.primary}
    onPress = {onPress}
    {...rest}
  >
    {children}
  </TextButton>
)

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
  },
  correct: {
    borderColor: 'green',
    color: 'green'
  },
  incorrect: {
    borderColor: 'red',
    color: 'red'
  },
})

export default Card