import React, {Component} from 'react';
import {connect} from 'react-redux'
import Card from './Card'
import QuizEnd from './QuizEnd'

class QuizScreen extends Component {

  state = {
    cardIndex: 0,
    quizEnded: false,
    correct: 0
  }

  nextCard = () => this.setState(prevState => ({ cardIndex: prevState.cardIndex + 1}))

  markCorrect = () => this.setState(prevState => ({ correct: prevState.correct + 1}))

  endQuiz = () => this.setState({ quizEnded: true})

  restartQuiz = () => this.setState({ cardIndex: 0, quizEnded: false, correct: 0})

  returnToDeck = () => {
    const {navigation, deck} = this.props
    const {id, name, cardIds} = deck
    navigation.navigate('Deck Summary', { deckId: id, name, deckSize: cardIds.length })
}
  render() {
    const { cardsInDeck } = this.props
    const { cardIndex, quizEnded, correct } = this.state
    if (quizEnded) {
      return <QuizEnd
        correct = {correct} 
        total = {cardsInDeck.length}
        restartQuiz = {this.restartQuiz}
        returnToDeck = {this.returnToDeck}
      />
    }
    const { question, answer } = cardsInDeck[cardIndex]
    return (
      <Card 
        question = {question} 
        answer = {answer} 
        markCorrect = {this.markCorrect}
        nextCard = {this.nextCard}
        endQuiz = {this.endQuiz}
        remainingCards = {cardsInDeck.length - cardIndex - 1}
      />
    )
  }
}

const mapStateToProps = ({ cards, decks }, { route }) => ({ 
  cardsInDeck: decks[route.params.deckId].cardIds.map(cardId => cards[cardId]),
  deck: decks[route.params.deckId]
})


export default connect(mapStateToProps)(QuizScreen)