import React from "react"
import { Text, TextInput, View } from "react-native"
import estilo from "./estilo"


export default props => {
    return(
        <View>
            <TextInput  placeholder="Digite seu email IBM"/>
            <TextInput placeholder="Digite sua senha"/>
        </View>
    )
} 
