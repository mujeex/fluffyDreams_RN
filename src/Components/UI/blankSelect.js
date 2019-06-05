import React from 'react'
import {View , TouchableOpacity,StyleSheet } from 'react-native'
import AvenirMedium from './AvenirMedium'
import AvenirHeavy from './AvenirHeavy'


const BlankSelect= (props) =>(
    <TouchableOpacity style={styles.textContainer}>
    <View >
        <AvenirHeavy Styles={{fontSize: 20}}>{props.label}</AvenirHeavy>
    </View>
        </TouchableOpacity> 
)
   


const styles= StyleSheet.create({
    textContainer:{
        width: '90%',
        height: 42,
        justifyContent: 'center',
        paddingLeft: 20,
       backgroundColor: '#E4ECF4',
       borderRadius: 15
    }
})

export default BlankSelect