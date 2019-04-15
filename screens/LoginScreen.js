import React from 'react';
import { ScrollView, StyleSheet, Text, Button } from 'react-native';
// import {Google} from 'expo';
// import SplashScreen from './SplashScreen'
import { Constants, Location, Permissions, Font } from 'expo';

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
  
  // static navigationOptions = {
  //   title: ({ state }) => `Total K:${state.params && state.params.userAddress.city ? state.params.userAddress.city : ''}`
  // };

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      console.error('Location permission not granted!');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    // console.log(location)
    let eliotHouse = (await Location.geocodeAsync('101 Dunster St.'))[0];
    let theCrimson = (await Location.geocodeAsync('14 Plympton St.'))[0];
    let theKitty = (await Location.geocodeAsync('2 Holyoke Place'))[0];
    
    let where = (await Location.reverseGeocodeAsync(location.coords))[0];
    // console.log(where);

    this.setState({
      userLocation: location,
      userAddress: where,
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
    this.props.navigation.navigate('DashboardScreen', {
      userAddress: this.state.userAddress,
      userLocation: this.state.userLocation,
      userCity: this.state.userAddress.city
    })
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Button
        title="Implement Google login"
        onPress={() => this.onPressHandler()}/>
      </ScrollView>
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