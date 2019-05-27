import React from 'react';
import { ScrollView, 
  StyleSheet, 
  Text, 
  View, 
  Button, 
  Image } from 'react-native';

export default class TopBar extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={this.props.imageUrl} />
                <Text style={styles.text}>
                    {this.props.text}
                </Text>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        height: 40,
        // borderWidth: 1,
        marginTop: 40,
        borderRadius: 30,
    }, 
    image: {
        position: "absolute",
        left: 10,
        top: 0,
        height: 30,
        width: 30
    },
    text: {
        fontSize: 30,
        fontFamily: 'questral',
        paddingLeft: 50,
    }
})