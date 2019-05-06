import React from 'react';
import { ScrollView, 
  StyleSheet, 
  Text, 
  View, 
  Button } from 'react-native';
// import { ExpoLinksView } from '@expo/samples';
// import MapScreen from './MapScreen.js'
import { MapView } from 'expo';
// import LocationView from './Location'
import { Constants } from 'expo';
import Consumer from "../utils/Context"

export default class MainScreen extends React.Component {
  state = {
    // userLocation: navigation.getParam("userLocation", "I love my city"),
  };
  
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('userCity', 'Your City'),
    fontSize: 18,
    backgroundColor: '#258CD6',
    header: null,
  })
  
  onPressHandler = () => {
      const { navigation } = this.props.navigation;
      this.props.navigation.navigate('Home', {userLocation: navigation.getParam("userLocation", "I love me city")})
    };
  //     this.props.navigation.navigate('DashboardScreen', {
  //     userAddress: this.state.userAddress,
  //     userLocation: this.state.userLocation,
  //     userCity: this.state.userAddress.city
  //   })
  // };
    render() {
      
    return (
    <View style={styles.container}>
      <Consumer>
        {(context)=>(
            <MapView
            style={styles.map}
            initialRegion={{
              latitude: context.state.userLocation.coords.latitude,
              longitude: context.state.userLocation.coords.longitude,
              latitudeDelta: 1 / 100,
              longitudeDelta: 1 / 100,
            }}
            >
          <MapView.Marker
              coordinate={context.state.userLocation.coords}
              title="You are here"
              description={context.state.userAddress.street}
              pinColor="#569752"
              flat={false}
              opacity={1}
              />
        </MapView>
        )}
      </Consumer>
      <Text style={styles.text}>Recently reported issues:</Text>
    </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    // flexDirection: 'row',
  },
  btn: {
    flex: 1, 
    alignContent: 'center',
    width: 2
  },
  map: {
    flex: 1, 
    maxHeight: 300,
  },
  text: {
    flex: 1,
    fontSize: 20,
    fontFamily: 'pacifico',
    padding: 10,
    justifyContent: 'center',
  }
});