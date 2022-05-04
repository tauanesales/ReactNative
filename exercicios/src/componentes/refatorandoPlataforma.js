import React from 'react'
import { Platform, Text, Veiw } from 'react-native'
import estilo from './estilo'

export default () => {
        return(
            <Veiw>
                <Text style={estilo.txtPlataforma}> Olá usuario de </Text>
                {Platform.OS === 'android' 
                    ? <Text style={estilo.txtPlataforma}>Android</Text> 
                    : <Text style={estilo.txtPlataforma}>IOS</Text>
                }
            </Veiw>
        )
}