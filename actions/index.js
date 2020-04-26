import { addNewDeck, addCardToDeck, receiveInitialDecks } from "./decks";
import { addCardToCards, receiveInitialCards } from "./cards";
import { loadState } from '../utils/api'

export { addCardToCards, addCardToDeck, addNewDeck }

export const handleInitialData = () => async dispatch => {
  try {
    const { decks, cards } = await loadState()
    dispatch(receiveInitialCards(cards))
    dispatch(receiveInitialDecks(decks))
  } catch (err) {
    console.log(err)
  }
}