import React from 'react';
import  { View} from 'react-native';
import {Comp1, Comp2} from './componentes/Multi';

// function App(){
//     return <Text> A vida é bela </Text>
//     <View><Comp1></Comp1></View>
// }

export default () => (
    <View>
        <Comp1></Comp1>
        <Comp2></Comp2>
    </View>
)