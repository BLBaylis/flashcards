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
        console.log('Notifications', Notifications.cancelAllScheduledNotificationsAsync)
        Notifications.cancelAllScheduledNotificationsAsync()
        

        const tomorrow = new Date()
        tomorrow.setDate(tomorrow.getDate() + 1)
        tomorrow.setHours(14)
        tomorrow.setMinutes(12)

        Notifications.scheduleLocalNotificationsAsync(
          notification,
          {
            time: tomorrow,
            repeat: 'day'
          }
        )

        AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
      }
    }
  } catch (err) {
  console.log(err)
}
}
