import { AsyncStorage } from "react-native";
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions'

const NOTIFICATION_KEY = 'flashcards:notifications';

const createNotification = () => ({
  title: 'Reminder',
  body: "Don't forget your daily flashcard quiz!",
  android: {
    sound: true,
    priority: 'high',
    sticky: false,
    vibrate: true
  }
})

export const clearLocalNotification = async () => {
  await AsyncStorage.removeItem(NOTIFICATION_KEY)
  return Notifications.cancelAllScheduledNotificationsAsync()
}

export const setLocalNotification = async () => {
  try {
    const data = JSON.parse(await AsyncStorage.getItem(NOTIFICATION_KEY))
    if (data == null) {
      const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS)
      if (status === 'granted') {
        await Notifications.cancelAllScheduledNotificationsAsync();
        
        const tomorrow = new Date()
        tomorrow.setDate(tomorrow.getDate() + 1)
        tomorrow.setHours(18)
        tomorrow.setMinutes(0)

        await Notifications.scheduleLocalNotificationAsync(
          createNotification(),
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
