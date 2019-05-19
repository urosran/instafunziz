import React from 'react'
import AppNavigator from "./utils/Navigation"
import {Container} from "./utils/Context"
import {Font} from "expo"
import Emoji from 'react-native-emoji';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      coords:"uros"
    }
  }
  componentDidMount() {
    Font.loadAsync({
      'questral': require('./assets/fonts/Questrial-Regular.ttf'),
      'pacifico': require('./assets/fonts/Pacifico-Regular.ttf'),
    });
  }

  render() {
    return (
    <Container>
      <AppNavigator/>
    </Container>
  )}
}

import { YellowBox } from 'react-native';
import _ from 'lodash';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};