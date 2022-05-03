import React from 'react'
import { Platform, Text } from 'react-native'
import estilo from './estilo'

export default props => {
    
        if(Platform.OS === 'android'){
          return  <Text style={estilo.txtPlataforma}>Olá, usuario de Android</Text>
        }
        else if (Platform.OS === 'ios'){ 
            <Text style={estilo.txtPlataforma}>Olá, usuario de IOS</Text>
        }
        else{
            <Text style={estilo.txtPlataforma}> Sistema não reconhecido</Text>
        }
}