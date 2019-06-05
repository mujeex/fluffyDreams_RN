import React from 'react'
import {View , TouchableOpacity,StyleSheet } from 'react-native'
import AvenirMedium from './AvenirMedium'
import AvenirHeavy from './AvenirHeavy'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5Pro'


const SupportSelect= (props) =>(
    <TouchableOpacity style={styles.textContainer}>
    <View style={styles.box} >
        <FontAwesome5 name={props.name} size={25}/>
        <AvenirMedium Styles={{fontSize: 20}}>{props.label}</AvenirMedium>
    </View>
        </TouchableOpacity> 
)
   


const styles= StyleSheet.create({
    textContainer:{
        width: '90%',
        height: 42,
        
    },
    box:{
        justifyContent: 'space-around',
        paddingLeft: 20,
       borderWidth: 1,
       borderColor:'#E4ECF4',
       borderRadius: 15,
       flex:1,
       flexDirection: 'row',
       alignItems: 'center',
    }
})

export default SupportSelect