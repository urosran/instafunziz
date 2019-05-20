import React from 'react';
import { ScrollView, 
  StyleSheet, 
  Text, 
  View, 
  Button, 
  Image } from 'react-native';
  import Consumer, { Container } from "../utils/Context"

export default class TopBar extends React.Component {
    render() {
        return (
            
                <View style={styles.container}>
                    <Image style={styles.image} source={require('../assets/icons/placeholder.png')} />
                    <Text style={styles.text}>
                        {this.props.city}
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
        paddingLeft: 40,
    }
})