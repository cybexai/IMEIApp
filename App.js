import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, PermissionsAndroid } from 'react-native'

export async function request_READ_PHONE_STATE() {

  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
      {
        'title': 'ReactNativeCode wants to READ_PHONE_STATE',
        'message': 'ReactNativeCode App needs access to your personal data. '
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {

      // Alert.alert("Permission Granted.");
    }
    else {

      //Alert.alert("Permission Not Granted");

    }
  } catch (err) {
    console.warn(err)
  }
}

export default class App extends React.Component {

  constructor () {
    super()
    this.state = {
      DeviceIMEI: '',
    }
     request_READ_PHONE_STATE() ;
     const IMEI = require('react-native-imei');
IMEI.getImei().then(imeiList => {
    console.log(imeiList[0])
});
  }

  getDeviceIMEI = () => {
    const IMEI = require('react-native-imei')
    this.setState({
      // DeviceIMEI: ''+Object.keys(IMEI.getImei()),
      DeviceIMEI: ''+IMEI.getImei()._72,
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>{this.state.DeviceIMEI}</Text>
        <TouchableOpacity onPress={this.getDeviceIMEI}>
          <Text> CLICK HERE TO GET DEVICE IMEI </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})