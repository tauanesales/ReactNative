import React, {Component} from 'react';
import  { Platform, Text, View, StyleSheet} from 'react-native';
import Button from './src/components.js/Button';

// function App(){
//     return <Text> A vida Ã© bela </Text>
//     <View><Comp1></Comp1></View>
// }

export default () => {
 
    return (
      <View style={styles.container}>
        <View style={styles.buttons}>
          <Button label='AC'/>
          <Button label='/'/>
          <Button label='7'/>
          <Button label='8'/>
          <Button label='9'/>
          <Button label='*'/>
          <Button label='S4'/>
          <Button label='5'/>
          <Button label='6'/>
          <Button label='-'/>
          <Button label='1'/>
          <Button label='2'/>
          <Button label='3'/>
          <Button label='+'/>
          <Button label='0'/>
          <Button label='.'/>
          <Button label='='/>

        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
    container:{
      flex:1,
    }, 
    buttons: {
      flexDirection:'row',
      flexWrap: 'wrap'

    }
});


