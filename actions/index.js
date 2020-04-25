import { addNewDeck } from "./decks";
import { generateUID } from "../utils";

export const handleNewDeck = name => {
  if (!name) {
    throw new Error('Missing name')
  }
  return addNewDeck(generateUID(), name)
}