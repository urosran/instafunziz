import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, TextInput, View, Picker, Button, StyleSheet, Text } from 'react-native';
import HeaderButtons from 'react-navigation-header-buttons';

import Fire from '../Fire';
import { SafeAreaView } from 'react-navigation';

export default class NewPostScreen extends React.Component<Props> {
  static navigationOptions = ({ navigation }) => ({
    title: 'Issue details',
    headerRight: (
      <HeaderButtons IconComponent={Ionicons} iconSize={23} color="black">
        <HeaderButtons.Item
          title="Add Issue"
          onPress={() => {
            const text = navigation.getParam('text');
            const image = navigation.getParam('image');
            const coords = navigation.getParam("userLocation")
            if (text && image) {
              navigation.navigate("Feed");
              Fire.shared.post({ text: text.trim(), image, issueType: navigation.getParam("issueType"), coords: coords });
            } else {
              alert('Need valid description');
            }
          }}
        />
      </HeaderButtons>
    ),
  });

  state = { text: '', 
            issueType: 0, 
          };
  
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
          <Text>Choose an issue type:</Text>
          <Picker style={styles.picker}
            selectedValue={this.state.issueType}
              onValueChange={(itemValue, itemIndex) => this.props.navigation.setParams({issueType: itemValue})}>
            <Picker.Item label="Electrical" value="1" />
            <Picker.Item label="Sevege" value="2" />
            <Picker.Item label="Trees" value="3" />
            <Picker.Item label="Trash" value="4" />
            <Picker.Item label="Misc" value="5" />
            <Picker.Item label="Poison" value="6" />
          </Picker>
      </View>

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
    padding: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  picker:{
    // color: "black",
    marginTop:0, 
    paddingTop:0,
    marginBottom: 100,
  },
  submit:{
    marginTop: 100,
  }
});
