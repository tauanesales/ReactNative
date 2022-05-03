import React from 'react';
import  { View, StyleSheet} from 'react-native';
import {Comp1, Comp2} from './componentes/Multi';

// function App(){
//     return <Text> A vida é bela </Text>
//     <View><Comp1></Comp1></View>
// }

export default () => (
    <View style={style.App}>
        <Comp1></Comp1>
        <Comp2></Comp2>
    </View>
)
const style = StyleSheet.create({
    App:{
        backgroundColor: 'blue',
        flexGrow :1,
        justifyContent: "center",
        alignItems:"center",
    }
})