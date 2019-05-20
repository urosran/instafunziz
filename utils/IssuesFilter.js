import React from 'react';
import { ScrollView, 
  StyleSheet, 
  Text, 
  View, 
  Button, 
  Image } from 'react-native';

export default class IssuesFilter extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
                <Image style={styles.image} source={require('../assets/icons/light.png')} />
                <Image style={styles.image} source={require('../assets/icons/light.png')} />
                <Image style={styles.image} source={require('../assets/icons/light.png')} />
                <Image style={styles.image} source={require('../assets/icons/light.png')} />
                <Image style={styles.image} source={require('../assets/icons/light.png')} />
                <Image style={styles.image} source={require('../assets/icons/light.png')} />
                <Image style={styles.image} source={require('../assets/icons/light.png')} />
                <Image style={styles.image} source={require('../assets/icons/light.png')} />
                
            </ScrollView>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 100,
        marginTop: 10,
        // borderBottomWidth: 1,
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

        elevation: 7,
    }, 
    image: {
        // flex: 1,
        height: 50, 
        width: 50,
        margin: 10,
        
    },
    text: {
        fontSize: 30,
        fontFamily: 'questral',
        paddingLeft: 40,
    }
})