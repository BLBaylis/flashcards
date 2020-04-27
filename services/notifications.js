import { AsyncStorage } from "react-native";
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions'

const NOTIFICATION_KEY = 'flashcards:notifications';

const notification = {
  title: 'Flashcards reminder',
  body: "Don't forget your daily quiz!",
  android: {
    sound: true,
    priority: 'high',
    sticky: false,
    vibrate: true
  }
}

export const clearLocalNotification = () => AsyncStorage.removeItem(NOTIFICATION_KEY)

export const setLocalNotification = async () => {
  try {
    const data = JSON.parse(await AsyncStorage.getItem(NOTIFICATION_KEY))
    if (data === null) {
      const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS)
      if (status === 'granted') {
        
        const tomorrow = new Date()
        tomorrow.setDate(tomorrow.getDate())
        tomorrow.setHours(16)
        tomorrow.setMinutes(0)

        await Notifications.scheduleLocalNotificationAsync(
          notification,
          {
            time: tomorrow,
            repeat: 'day'
          }
        )

        AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
      }
    } else {
      console.log('data', data)
      clearLocalNotification()
    }
  } catch (err) {
    console.log(err)
  }
}
