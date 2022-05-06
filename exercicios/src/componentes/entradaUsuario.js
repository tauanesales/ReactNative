import React, { useState } from "react"
import { Text, TextInput, View} from "react-native"
import estilo from "./estilo"


export default props => {
    const [email, setEmail ] = useState ('annne@ibm.com')
    const [senha,setSenha] = useState ('1234')

 
    return(
        <View>
            <TextInput  placeholder="Digite seu email IBM"
            value={email}
            onChangeText={email => setEmail(email)}/>

            <TextInput placeholder="Digite sua senha"
            value={senha}
            onChangeText={senha => setSenha(email)}/>
        </View>
    )
} 
