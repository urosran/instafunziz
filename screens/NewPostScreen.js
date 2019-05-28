import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, TextInput, View, Picker, Button, StyleSheet, Text } from 'react-native';
import HeaderButtons from 'react-navigation-header-buttons';

import Fire from '../Fire';
import { SafeAreaView } from 'react-navigation';
import Consumer from '../utils/Context'
import TopBar from '../utils/TopBar';

export default class NewPostScreen extends React.Component<Props> {
  static navigationOptions = ({ navigation }) => ({
    title: 'Details',
    headerRight: (
      <Consumer>
        {(context) => (
          <HeaderButtons IconComponent={Ionicons} iconSize={23} color="black">
        <HeaderButtons.Item
          title="Add"
          onPress={() => {
            const text = navigation.getParam('text');
            const image = navigation.getParam('image');
            // console.log(context.state.userLocation.coords)
            // console.log(navigation.getParam("issueType") === undefined ? "1" : navigation.getParam("issueType"))
            const coords = context.state.userLocation.coords
            if (text && image) {
              navigation.navigate("Feed");
              Fire.shared.post({ text: text.trim(), image, issueType: navigation.getParam("issueType") === undefined ? "1" : navigation.getParam("issueType"), coords: coords });
            } else {
              alert('Need valid description');
            }
          }}
          />
      </HeaderButtons>
        )}
      </Consumer>
    ),
  });

  state = { text: '', 
            issueType: 0, 
            coords: null
          };
  
  updateIssueType(itemValue) {
    console.log("item value:" + itemValue)

    if (itemValue != undefined){
      this.props.navigation.setParams({issueType: itemValue})
    } else{
      this.props.navigation.setParams({issueType: 1})
    }
  }
  // submitIssue(){
  //   const text = navigation.getParam('text');
  //   const image = navigation.getParam('image');
  //   if (text && image) {
  //     navigation.navigate("Feed");
  //     Fire.shared.post({ text: text.trim(), image, issueType: this.state.issueType });
  //   } else {
  //     alert('Need valid description');
  //   }
  // }

  render() {
    const { image } = this.props.navigation.state.params;
    return (
    
    <SafeAreaView style={styles.container}>
      <View style={{ padding: 10, flexDirection: 'row' }}>
        <Image
          source={{ uri: image }}
          style={{ resizeMode: 'contain', aspectRatio: 1, width: 72 }}
          />
        <TextInput
          multiline
          style={{ flex: 1, paddingHorizontal: 16 }}
          placeholder="Add a description..."
          onChangeText={text => {
            this.setState({ text });
            this.props.navigation.setParams({ text });
          }}
        />
        </View>
        <View>
          <Text style={styles.text_sub}>Choose an issue type:</Text>
          <Picker style={styles.picker}
            selectedValue={this.props.navigation.getParam("issueType")}
            onValueChange={(itemValue, itemIndex) => this.updateIssueType(itemValue)}>
            <Picker.Item label="Electrical" value="1" />
            <Picker.Item label="Sevege" value="2" />
            <Picker.Item label="Trees" value="3" />
            <Picker.Item label="Trash" value="4" />
            <Picker.Item label="Misc" value="5" />
            <Picker.Item label="Poison" value="6" />
          </Picker>
      </View>

      <Image style={styles.image} source={require('../assets/icons/city.jpg')}/>
            <Consumer>
                {(context) => (
                  <Text style={styles.text}>
                    {/* <Image style={styles.imageInline} source={require("../assets/icons/placeholder.png")}/>   */}
                    {context.state.userAddress.street}, {context.state.userAddress.city} 
                  </Text>
                )}
            </Consumer>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    flexWrap: 'wrap',
  },
  text: {
    // padding: 24,
    marginLeft: 10,
    // marginTop: 20,
    fontSize: 18,
    fontFamily: 'questral',

    // fontWeight: 'bold',
    textAlign: 'center',
    
  },
  picker:{
    // color: "blue",
    marginTop:0, 
    paddingTop:0,
    // marginBottom: 100,
    borderRadius: 4,
    borderColor: "black",

  },
  submit:{
    marginTop: 100,
  },
  text_sub: {
    fontSize: 20,
    // fontWeight: 'bold',
    // textAlign: 'center',
    fontFamily: 'questral',
    fontWeight: 'bold',
    borderRadius: 1,
    marginTop: 5, 
    marginLeft: 10, 
  }, 
  image: {
    flex: 1,
    height: 400,
    width: undefined,
  },
  imageInline: {
    // flex: 1,
    height: 15,
    width: 15,
    margin: 1,
    marginRight: 10,
    padding: 10
  }
});
