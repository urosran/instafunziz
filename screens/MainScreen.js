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
import IssuesFilter from '../utils/IssuesFilter';
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
          // <View style={styles.container}>
            <Consumer>
              {(context)=>(
                <View>
                  <View style={styles.top}>
                  <TopBar city={context.state.userAddress.city}/>
                  <IssuesFilter style={styles.isssues}/> 
                </View>
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
    minHeight: 500,
    flex: 1, 
    padding: 150,
    marginTop:-15,
    zIndex:1,
    shadowOffset:{  width: 5,  height: 5,  },
    shadowColor: 'black',
    shadowOpacity: 1.0,
    // borderRadius: 20
    // width:100
  },
  text: {
    // flex: 0.5,
    fontSize: 20,
    fontFamily: 'pacifico',
    paddingLeft: 5,
    paddingBottom: 5,
    justifyContent: 'center',
  },
  isssues: {
     shadowColor: '#000',        
     backgroundColor: 'white',
     shadowColor: 'red',
     // alignItems: 'center',
     shadowOffset: {width: 1, height: 1 },
     shadowOpacity: 0.5,
     borderRadius: 20,
     zIndex:2
  }, 
  top: {
    zIndex:10,
    backgroundColor:"white",
    borderRadius:30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
    }
});