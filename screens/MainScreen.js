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
import { LinearGradient } from 'expo';
import Consumer, { Container } from "../utils/Context"
import TopBar from "../utils/TopBar"
// import IosFonts from '../utils/title';

export default class MainScreen extends React.Component {
  state = {
    userLocation: undefined,
    userAddress: undefined,
  };
  
  onPressHandler = () => {
    const { navigation } = this.props.navigation;
      this.props.navigation.navigate('Home', {userLocation: navigation.getParam("userLocation", "I love me city")})
    };

    render() {
      
      return (
        // <View>
          <View style={styles.container}>
            <Consumer>
              {(context)=>(
                // <LinearGradient start={[0, 0.5]}
                // end={[1, 0.5]}
                // colors={['#EFBB35', '#4AAE9B']}
                // style={{borderRadius: 5, margin: 0, flex:1, padding:0}}>
                <View>
                <TopBar city={context.state.userAddress.city}/> 

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
                </View> 
                // </LinearGradient>
              )}
            </Consumer>
            <Text style={styles.text}>Recent reporters:</Text>
          </View> 
      // </View>
      );
  }
}

MainScreen.contextType = Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    // flexDirection: 'row',
  },
  list: {
    padding:10,
    // flex: 0.8, 
    // alignContent: 'center',
    // width: 2
  },
  map: {
    flex: 1, 
    padding: 150,
    marginTop:20
    // width:100
  },
  text: {
    // flex: 0.5,
    fontSize: 20,
    fontFamily: 'pacifico',
    paddingLeft: 5,
    paddingBottom: 5,
    justifyContent: 'center',
  }
});