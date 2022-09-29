import * as Notifications from 'expo-notifications';

export async function getPushNoticationToken() {
  const { granted } = await Notifications.getPermissionsAsync();

  if(!granted) {
    await Notifications.requestPermissionsAsync();
  }

  if(granted) {
    const pushToken = await Notifications.getExpoPushTokenAsync();
    console.log('Notication Token =>', pushToken.data);

    return pushToken.data;
  }
}