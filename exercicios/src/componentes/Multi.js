import React from "react"
import { Text } from "react-native"
import estilo from "./estilo"
function Comp() {
   return <Text>Primeira Frase</Text>
}

export function Comp1() {
    console.warn('ooe')
    return(<Text style={estilo.textIBM}>IBM</Text>)
}

export function Comp2() {
    
    return <Text style={estilo.txtFrase}>Think</Text>
 }