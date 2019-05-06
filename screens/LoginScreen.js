import React from 'react';
import { ScrollView, StyleSheet, Text, Button, View } from 'react-native';
// import {Google} from 'expo';
// import SplashScreen from './SplashScreen'
import { Constants, Location, Permissions, Font } from 'expo';
import Consumer from "../utils/Context" 

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'LoginScreen',
  };
  constructor() {
    super();
    this.onPressHandler = this.onPressHandler.bind(this);
    // this.setState({isLoading: true });
  }
  state = {
    userLocation: null,
    userAddress: null,
    isLoading: false
  };
  
  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      console.error('Location permission not granted!');
      return;
    }

    let userLocation = await Location.getCurrentPositionAsync({});
    console.log(userLocation);
    
    let userAddress = (await Location.reverseGeocodeAsync(userLocation.coords))[0];
    console.log(userAddress);

    this.setState({
      userLocation: userLocation,
      userAddress: userAddress,
    });
  };

  componentDidMount() {
    this._getLocationAsync();
    Font.loadAsync({
      'questral': require('../assets/fonts/Questrial-Regular.ttf'),
      'pacifico': require('../assets/fonts/Pacifico-Regular.ttf'),
    });
  }
  onPressHandler = () => {
    // const clientId = '649846420860-nd92louc1phcmh8h68vofonfk8mo7al1.apps.googleusercontent.com';
    // const { type, accessToken, user } = await Google.logInAsync({ clientId });

    // if (type === 'success') {
    //   /* `accessToken` is now valid and can be used to get data from the Google API with HTTP requests */
    //   console.log(user);
    // }
    // const { navigation } = this.props.navigation;
    this.props.navigation.navigate('DashboardScreen')
  };

  render() {
    return (
      <Consumer>
        { ({state, updateAddress, updateLocation}) => { 
          return(
            <ScrollView style={styles.container}>
              <Button
              title="Implement Google login"
              onPress={() => {this.onPressHandler(); 
                updateAddress(this.state.userAddress);
                updateLocation(this.state.userLocation)}}/>
              </ScrollView>
          )}
        }
      </Consumer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
  } 
})