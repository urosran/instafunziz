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
import IosFonts from '../utils/title';

export default class MainScreen extends React.Component {
  state = {
    userLocation: undefined,
    userAddress: undefined,
  };
  
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('userCity', 'Your City'),
    fontSize: 18,
    backgroundColor: '#258CD6',
    header: "Moj Grad",
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
  componentDidMount(){
    console.log("________")
    console.log(this.context.userAddress)
    console.log("________")
  //   setState({
  //     userLocation: this.context.userLocation, 
  //     userAddress: this.context.userAddress}) 
  // }
  }

    render() {
      
    return (
    <View style={styles.container}>
      <Consumer>
        {(context)=>(
          <LinearGradient start={[0, 0.5]}
            end={[1, 0.5]}
            colors={['#EFBB35', '#4AAE9B']}
            style={{borderRadius: 5, margin: 5, flex:1, padding:1}}>
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
          </LinearGradient>
        )}
      </Consumer>
      <Text style={styles.text}>Recent reporters:</Text>
      <IosFonts style={styles.list}/>
    </View>
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
    padding: 10
  },
  text: {
    // flex: 0.5,
    fontSize: 20,
    fontFamily: 'Futura',
    paddingLeft: 5,
    paddingBottom: 5,
    justifyContent: 'center',
  }
});