import {RECEIVE_INITIAL_CARDS, ADD_CARD_TO_CARDS} from '../actions/types'

const cards = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_INITIAL_CARDS:
      return action.cards
    case ADD_CARD_TO_CARDS:
      const {id, deckId, card} = action
      return {
        ...state,
        [id]: {
          id,
          deckId,
          question: card.question,
          answer: card.answer
        }
      }
    default:
      return state;
  }
}

export default cards