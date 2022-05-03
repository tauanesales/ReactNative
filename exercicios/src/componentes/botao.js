import React from "react"
import { Button } from "react-native"

export default prop => {

    function executar() {
        console.warn('Bem vinda(o) a IBM')
        
    }

    return (
        <Button 
        title="Login"
        onPress={executar}
        />
            
        
    )
}

