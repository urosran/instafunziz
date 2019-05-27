import { Constants, ImagePicker, Permissions, LinearGradient } from 'expo';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker, Button, TouchableOpacity, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import getPermission from '../utils/getPermission';
import TopBar from '../utils/TopBar';

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
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <TopBar text={"Add a photo"} imageUrl={require('../assets/icons/camera.png')}/>

          <View style={styles.topBtns}>
            <TouchableOpacity onPress={this._takePhoto}>
              <Image source={require('../assets/icons/take_photo.png')} style={styles.visit}/>
              <Text style={styles.text_sub}>Take a photo</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this._selectPhoto}>
              <Image source={require('../assets/icons/upload.png')} style={styles.visit}/>
                <Text style={styles.text_sub}>Upload a photo</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.image}>
            <Image  source={require('../assets/icons/add_photo.jpg')} />
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
    maxHeight:190,
    elevation: 16,
  },
  text: {
    fontSize: 30,
    fontFamily: 'questral',
    paddingLeft: 40,
    marginBottom: 20,
  },
  text_sub: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'questral',
    borderRadius: 1,
    margin: 5, 
  },
  topBtns: {
    flexDirection: 'row',
        height: 100,
        marginTop: 0,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        alignContent: 'space-between',
        shadowColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4.65,
        alignSelf: 'center',
        elevation: 7,
        borderRadius: 20
  },
  visit: {
    height: 50, 
    width: 50,
    margin: 10,
    borderRadius: 20,
    alignSelf: "center",
  },

  image: {
    flex: 1,
    alignSelf: 'center',
    marginTop: -20,
    borderRadius: 20
  }
});
