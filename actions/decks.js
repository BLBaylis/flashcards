import { ADD_NEW_DECK, ADD_CARD_TO_DECK } from "./types";

export const addCardToDeck = (deckId, cardId) => ({
  type: ADD_CARD_TO_DECK,
  deckId,
  cardId
})

export const addNewDeck = (id, name) => ({
  type: ADD_NEW_DECK,
  name,
  id
})