import React from 'react';
import { ScrollView, 
  StyleSheet, 
  Text, 
  View, 
  Button,
  LayoutAnimation } from 'react-native';
import { MapView } from 'expo';
import Consumer, { Container } from "../utils/Context"
import TopBar from "../utils/TopBar"
import IssuesFilter from '../utils/IssuesFilter';

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
    LayoutAnimation.easeInEaseOut();      
      return (
            <Consumer>
              {(context)=>(
                <View>
                  <View style={styles.top}>
                  <TopBar text={context.state.userAddress.city} imageUrl={require("../assets/icons/placeholder.png")}/>
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
              )}
            </Consumer>
      );
  }
}

MainScreen.contextType = Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    padding:10,
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
  },
  text: {
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
    minHeight:190,
    elevation: 16,
    maxHeight:190,
    }
});