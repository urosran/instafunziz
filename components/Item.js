import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import TopBar from '../utils/TopBar';
// import console = require('console');

const profileImageSize = 36;
const padding = 10;

export default class Item extends React.Component {
  state = {};

  componentDidMount() {
    if (!this.props.imageWidth) {
      // Get the size of the web image
      Image.getSize(this.props.image, (width, height) => {
        this.setState({ width, height });
      });
    }
  }

  render() {
    const { text, name, imageWidth, imageHeight, uid, image } = this.props;

    // Reduce the name to something
    const imgW = imageWidth || this.state.width;
    const imgH = imageHeight || this.state.height;
    const aspect = imgW / imgH || 1;

    return (
      <View>
        <Header image={{ uri: image }} name={name} />
        <View style={{
              shadowOffset: {
                width: 0,
                height: 12,
            },
            shadowOpacity: 0.2,
            shadowRadius: 4.65,
        }}>
          <Image
            resizeMode="contain"
            style={{
              backgroundColor: '#D8D8D8',
              flex: 1,
              // width: undefined,
              aspectRatio: aspect,
              borderRadius: 20, 
              marginLeft: 20,
              marginRight: 20,
              marginTop: 0,
              // marginBottom: 15,
              // padding: 10, 
            }}
            source={{ uri: image }}
            />
        </View>
        <Metadata name={name} description={text} />
      </View>
    );
  }
}

const Metadata = ({ name, description }) => (
  <View style={styles.metadata}>
    <IconBar />
    {/* <Text style={styles.text}>{name}</Text> */}
    <Text style={styles.subtitle}>{description}</Text>
  </View>
);

const Header = ({ name, image }) => (
  <View style={[styles.row, styles.padding]}>
    <View style={styles.row}>
      <Image style={styles.avatar} source={image} />
      <Text style={styles.text}>{name}</Text>
    </View>
    {/* <Icon name="ios-more" /> */}
  </View>
);

const Icon = ({ name, onPress }) => (
  <Ionicons style={{ marginRight: 8 }} name={name} size={26} color="black" />
  
);

// like = () => {
//   console.log("I LIKED")
// }
const like = () =>{
  console.log("Uros")
}
comment = () => {
  console.log("I COMMENTED")
  
}
const IconBar = () => (
  <View style={styles.row}>
    <View style={styles.row}>
      <Icon name="ios-thumbs-up" onPress={() => like()}/>
      <Icon name="ios-thumbs-up" onPress={() => this.comment()}/>
      {/* <Icon name="ios-send-outline" /> */}
    </View>
    {/* <Icon name="ios-bookmark-outline" /> */}
  </View>
);

const styles = StyleSheet.create({
  text: { fontWeight: '600' },
  subtitle: {
    opacity: 0.8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10, 
  },
  padding: {
    padding,
  },
  metadata: {
    marginLeft: 20,
  },
  avatar: {
    aspectRatio: 1,
    backgroundColor: '#D8D8D8',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#979797',
    borderRadius: profileImageSize / 2,
    width: profileImageSize,
    height: profileImageSize,
    resizeMode: 'cover',
    marginRight: 10,
    marginLeft: 15,
  },
});