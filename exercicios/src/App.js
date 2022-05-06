import React from 'react';
import  { View, StyleSheet} from 'react-native';
import {Comp1, Comp2} from './componentes/Multi';
import Botao from './componentes/botao';
import Plataforma from './componentes/plataforma'
import RefatorandoPlataforma from './componentes/refatorandoPlataforma';
import EntradaUsuario from './componentes/entradaUsuario'
import EntradaSenha from './componentes/entradaSenha'
// function App(){
//     return <Text> A vida é bela </Text>
//     <View><Comp1></Comp1></View>
// }

export default () => (
    <View style={style.App}>
        <Plataforma></Plataforma>
        <Comp1></Comp1> 
        <Comp2></Comp2>
        <EntradaUsuario></EntradaUsuario>
        <EntradaSenha></EntradaSenha>
        <Botao></Botao>
        {/* <RefatorandoPlataforma></RefatorandoPlataforma> */}
    </View>
)
const style = StyleSheet.create({
    App:{
        backgroundColor: 'blue',
        flexGrow :1,
        justifyContent: "center",
        alignItems:"center",
        padding:10,
        color:'while',

    }
})