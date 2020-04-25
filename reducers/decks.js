import {ADD_NEW_DECK} from '../actions/types'


const decks = (state = {}, action) => {
  if (action.type === ADD_NEW_DECK) {
    const { id, name } = action
    return {
      ...state,
      [id]: {
        id,
        name,
        cardIds: []
      }
    }
  }
  return state
}

export default decks