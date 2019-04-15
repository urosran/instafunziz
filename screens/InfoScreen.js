import React, {Component} from 'react';
import { ScrollView, StyleSheet, Text, ActivityIndicator, View } from 'react-native';
import firebase from 'firebase'

class InfoScreen extends Component {

  componentDidMount(){
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged(function(user){
      if (user){
        this.props.navigation.navigate('DashboardScreen');
      } else {
        this.props.navigation.navigate("LogInScreen")
      }
    }.bind(this))
  }


  render() {
    return (
     <View><ActivityIndicator size="large"/></View>
    );
  }
}

export default InfoScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
