import { Constants, ImagePicker, Permissions, LinearGradient } from 'expo';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker, Button, TouchableOpacity} from 'react-native';
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
        style={{ marginRight: 8 }} 
        name={name} 
        size={100} 
        color="#258CD6"
        onPress={action} />
    );
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._takePhoto}>
          <LinearGradient start={[0, 0.5]}
                          end={[1, 0.5]}
                          colors={['#EFBB35', '#4AAE9B']}
                          style={{borderRadius: 5, margin: 10}}>
            <View style={styles.circleGradient}>
             <Icon name="ios-camera" style={styles.visit}/>
             <Text>Take a photo</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._selectPhoto}>
          <LinearGradient start={[0, 0.5]}
                          end={[1, 0.5]}
                          colors={['#EFBB35', '#4AAE9B']}
                          style={{borderRadius: 5, margin: 10}}>
            <View style={styles.circleGradient}>
              <Icon name="ios-add-circle"/>
              <Text>Upload a photo</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    padding: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  picker:{
    color: "black",
    marginTop:0, 
    paddingTop:0,
  },
  submit:{
    paddingTop: 40,
  },
  circleGradient: {
    alignItems: 'center',
    margin: 1,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10
  },
  visit: {
    margin: 4,
    paddingHorizontal: 6,
    textAlign: "center",
    backgroundColor: "white",
    color: '#008f68',
    fontSize: 12
  }
});
