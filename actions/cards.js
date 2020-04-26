import { RECEIVE_INITIAL_CARDS, ADD_CARD_TO_CARDS } from "./types";

export const receiveInitialCards = cards => ({
  type: RECEIVE_INITIAL_CARDS,
  cards
})

export const addCardToCards = (id, deckId, card) => ({
  type: ADD_CARD_TO_CARDS,
  id,
  deckId,
  card
})