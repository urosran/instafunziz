import { Constants, ImagePicker, Permissions, LinearGradient } from 'expo';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker, Button, TouchableOpacity, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import getPermission from '../utils/getPermission';

const options = {
  allowsEditing: true,
};

export default class SelectPhotoScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Select a photo'
  })
  state = {};

  _selectPhoto = async () => {
    const status = await getPermission(Permissions.CAMERA_ROLL);
    if (status) {
      const result = await ImagePicker.launchImageLibraryAsync(options);
      if (!result.cancelled) {
        this.props.navigation.navigate('NewPost', { image: result.uri });
      }
    }
  };

  _takePhoto = async () => {
    const status = await getPermission(Permissions.CAMERA);
    if (status) {
      const result = await ImagePicker.launchCameraAsync(options);
      if (!result.cancelled) {
        this.props.navigation.navigate('NewPost', { image: result.uri });
      }
    }
  };
  // submitIssue(){
  //   if(this.state.issueType === null){
  //     Alert.alert(
  //       'Missing issue type',
  //       "Please choose an issue from the list")
  //   } else{
  //       this.saveIssue(uuidv1(), this.state.issueType, Date.now())
  //       console.log(this.state.issueType) 
  //       console.log(Date.now())     
  //   }
  // }
  
  render() {
    const Icon = ({ name, action }) => (
      <Ionicons 
        style={{ marginRight: 8, alignSelf: "center"}} 
        name={name} 
        size={50} 
        color="#258CD6"
        onPress={action} />
    );
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Add a photo</Text>
        <Image style={styles.image} source={require('../assets/icons/fix.png')} />

        <View style={styles.circleGradient}>
          <TouchableOpacity onPress={this._takePhoto}>
            <Icon name="ios-camera" style={styles.visit}/>
            <Text style={styles.text_sub}>Take a photo</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._selectPhoto}>
              <Icon name="arrow-round-up"/>
              <Text style={styles.text_sub}>Upload a photo</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    marginTop: 20,
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    fontFamily: 'questral',
    borderRadius: 1,
  },
  text_sub: {
    // marginTop: 20,
    // padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'questral',
    borderRadius: 1,
    margin: 5, 
  },
  picker:{
    color: "black",
    marginTop:0, 
    paddingTop:0,
  },
  submit:{
    // paddingTop: 40,
  },
  circleGradient: {
    borderRadius: 1,
    flexDirection: 'row',
    alignSelf: "center",
    alignItems: 'center',
    alignContent: 'space-between',
    // margin: 1,
    backgroundColor: "white",
    // borderRadius: 5,
  },
  visit: {
    margin: 4,
    paddingHorizontal: 6,
    textAlign: "center",
    backgroundColor: "white",
    color: '#008f68',
    fontSize: 12
  },
  image: {
    marginTop:0, 
    flex: 1,
    // height: 400, 
    width: 400,
    alignSelf: 'center',
  }
});
