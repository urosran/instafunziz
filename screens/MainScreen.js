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
      this.props.navigation.navigate('Home')
    };
    render() {
      
      const { navigation } = this.props;
      const userAddress = navigation.getParam("userAddress", "I love me city")
      const userLocation = navigation.getParam("userLocation", "I love me city")

    
    return (
    <View style={styles.container}>
      <MapView
      style={styles.map}
      initialRegion={{
          latitude: userLocation.coords.latitude,
          longitude: userLocation.coords.longitude,
          latitudeDelta: 1 / 100,
          longitudeDelta: 1 / 100,
        }}
        >
      <MapView.Marker
          coordinate={userLocation.coords}
          title="You are here"
          description={userAddress.street}
          pinColor="#569752"
          flat={false}
          opacity={1}
        />
      </MapView>
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