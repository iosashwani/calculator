/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';
import styles from './styles';
import NumberButtons from './Component/NumberView/index.js'

export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.contHistory}>
        </View>

        <View style={styles.contOutput}>
          <View style={styles.placeHolderOutput}>
           <Text style={styles.txtDefault}>OUTPUT</Text>
          </View>
        </View>

        <View style={styles.contButtons}>
        <NumberButtons>  </NumberButtons>
        </View>

      </View>
    )
  };
}
