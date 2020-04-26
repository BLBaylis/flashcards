import { AsyncStorage } from "react-native";

const KEY = 'flashcards'

export const loadState = async () => {
  try {
    return JSON.parse(await AsyncStorage.getItem(KEY))
  } catch (err) {
    return undefined
  }
}

export const saveState = async state => {
  try {
    const serialisedState = JSON.stringify(state)
    await AsyncStorage.setItem(KEY, serialisedState)
  } catch (err) {
    console.warn('Saving state to AsyncStorage failed!')
  }
}