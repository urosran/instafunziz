import React from 'react';
import { ScrollView, 
  StyleSheet, 
  Text, 
  View, 
  Button, 
  Image,
  TouchableOpacity } from 'react-native';

export default class IssuesFilter extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
                <TouchableOpacity onPress={this._takePhoto}>
                    <Image style={styles.image} source={require('../assets/icons/light.png')} />
                    <Text style={styles.text_sub}>Electrical</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._takePhoto}>
                    <Image style={styles.image} source={require('../assets/icons/road.png')} />
                    <Text style={styles.text_sub}>Roads</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._takePhoto}>
                    <Image style={styles.image} source={require('../assets/icons/tree.png')} />
                    <Text style={styles.text_sub}>Greens</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._takePhoto}>
                    <Image style={styles.image} source={require('../assets/icons/trash.png')} />
                    <Text style={styles.text_sub}>Trash</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._takePhoto}>
                    <Image style={styles.image} source={require('../assets/icons/water.png')} />
                    <Text style={styles.text_sub}>Water</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._takePhoto}>
                    <Image style={styles.image} source={require('../assets/icons/kanalizacija.png')} />
                    <Text style={styles.text_sub}>Sewage</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._takePhoto}>
                    <Image style={styles.image} source={require('../assets/icons/light.png')} />
                    <Text style={styles.text_sub}>filler</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._takePhoto}>
                    <Image style={styles.image} source={require('../assets/icons/light.png')} />
                    <Text style={styles.text_sub}>filler</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 100,
        marginTop: 0,
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
        borderRadius: 20,
        marginLeft: 20,
        
    },
    text: {
        fontSize: 30,
        fontFamily: 'questral',
        paddingLeft: 40,
    },
    text_sub: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'questral',
        borderRadius: 1,
        margin: 5, 
      },
})