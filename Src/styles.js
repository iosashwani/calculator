import React from 'react';
import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({

  container:{
    flex:1,
    flexDirection:'column'
  },
  contHistory:{
    flex:0.3,
    backgroundColor: 'red'
  },

  contOutput:{
      flex:0.2,
  },

  contButtons:{
    flex:0.5,
    backgroundColor:'#bdc3c7'
  },

  placeHolderOutput:{
    flex:1,
    backgroundColor:'green'

  },
   txtDefault:{

     color:'#fff',
     fontSize: 30
   }


})

export default styles;
