import React, { useState } from "react"
import { Text, TextInput, View} from "react-native"
import estilo from "./estilo"


export default props => {
    const [senha, setSenha] = useState ('1234')

 
    return(
        <View>

            <TextInput placeholder="Digite sua senha"
            value={senha}
            onChangeText={senha => setSenha(senha)}/>
        </View>
    )
} 
