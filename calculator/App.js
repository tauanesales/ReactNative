import React, {Component} from 'react';
import  { Platform, Text, View, StyleSheet} from 'react-native';
import Button from './src/components.js/Button';

// function App(){
//     return <Text> A vida Ã© bela </Text>
//     <View><Comp1></Comp1></View>
// }

export default class App extends Component {
  render() {
    return (
      <View style={styles.conteiner}>
       <View style={styles.conteiner}>
      </View>
      </View>
    );
  }

const styles = StyleSheet.create({
    conteiner:{
      flex:1,
    }, 
    flex :'row',
});
