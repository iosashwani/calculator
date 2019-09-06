import React,{Component} from 'react'
import {
    Text,
    View,
    TouchableNativeFeedback,
    FlatList,
    TouchableOpacity,
} from 'react-native'

import styles from './styles';

const arrayOfNumbers = [
  { key: 1 },
  { key: 2 },
  { key: 3 },
  { key: '÷'},
  { key: 4 },
  { key: 5 },
  { key: 6 },
  { key: 'x' },
    { key: 7 },
  { key: 8 },
  { key: 9 },
  { key: '+' },
  { key: '.' },
  { key: '0'},
  { key: '=' },
  { key: '-' },


];

export default class NumberButtons extends Component{




  shouldComponentUpdate(nextProps, nextState){
      return false;
  }
  render(){

    return(
      <View style={styles.container}>
      <FlatList style={styles.flatList} data={arrayOfNumbers} renderItem={this.renderItemCell} numColumns={4}>
      </FlatList>
      </View>
    )
  }
  renderItemCell = ({item}) =>{
    return (
      <TouchableOpacity
        style={styles.contButton}
        onPress={this.onPressNumberKey}
      >
        <Text style={styles.txtDefault}>{item.key}</Text>
      </TouchableOpacity>
    );


  }

  onPressNumberKey= () => {

    console.log("hello friends",this)
  }

}
