import {RECEIVE_INITIAL_DECKS, ADD_NEW_DECK, ADD_CARD_TO_DECK} from '../actions/types'

const decks = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_INITIAL_DECKS:
      return action.decks
    case ADD_NEW_DECK:
      const { id, name } = action
      return {
        ...state,
        [id]: {
          id,
          name,
          cardIds: []
        }
      }
    case ADD_CARD_TO_DECK:
      const deckId = action.deckId
      return {
        ...state,
        [deckId]: deck(state[deckId], action)
      }
    default:
      return state;
  }
}

const deck = (state = {}, action) => {
  switch (action.type) {
    case ADD_CARD_TO_DECK:
      const {cardIds} = state
      const {cardId: newCardId} = action
      return {
        ...state,
        cardIds: cardIds.includes(newCardId) ? cardIds : cardIds.concat(newCardId)
      }
    default:
      return state;
  }
}

export default decks