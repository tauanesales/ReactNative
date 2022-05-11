import React, { useState } from "react"
import { Text, TextInput, View} from "react-native"
import estilo from "./estilo"


export default props => {
    const [email, setEmail ] = useState ('usuario@ibm.com')

 
    return(
        <View>
            <TextInput  placeholder="Digite seu email IBM"
            value={email}
            onChangeText={email => setEmail(email)}/>
        </View>
    )
} 
