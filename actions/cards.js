import { ADD_CARD_TO_CARDS } from "./types";

export const addCardToCards = (id, deckId, card) => ({
  type: ADD_CARD_TO_CARDS,
  id,
  deckId,
  card
})