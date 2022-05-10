import React from "react";

import {
    StyleSheet, 
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native'
import { parseComponentStack } from "react-native/Libraries/LogBox/Data/parseLogBoxLog";

const styles =  StyleSheet.create({
    button : {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding:20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
    }, 
    operationButton:{
        color: '#fff',
        backgroundColor:'#000000',
    }, 
    buttonDouble: {
        width:( Dimensions.get('window').width / 4) * 2
    }, buttonDouble: {
        width:( Dimensions.get('window').width / 4) * 3
    }

})

export default props =>{
    const stylesButton = [styles.button]
    if(props.double) stylesButton.push(styles.buttonDouble)
    if(props.triple) stylesButton.push(styles.buttonTriple)
    if(props.operation) stylesButton.push(styles.operationButton)
    return(
        <TouchableHighlight onPress={props.onClick}>
            <Text style={stylesButton}> {props.label}</Text>
        </TouchableHighlight>
    )
}