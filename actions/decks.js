import { ADD_NEW_DECK } from "./types";

export const addNewDeck = (id, name) => ({
  type: ADD_NEW_DECK,
  name,
  id
})