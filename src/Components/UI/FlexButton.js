import React from 'react'
import {View,TouchableOpacity,Text,StyleSheet} from 'react-native'

const flexButton =(props) =>(
    <TouchableOpacity style={[styles.container, props.styles]} onPress={()=>props.onPress()}>
        <View style={[styles.textContainer]}>
            <Text style={styles.text}>{props.label}</Text>
        </View>
    </TouchableOpacity>
)

const styles= StyleSheet.create({
    container:{
        width:'75%',
        height: '80%',
        alignSelf: 'center',
    },
    textContainer:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'blue',
       borderRadius: 5,
    },
    text:{
     fontSize: 20,
     fontWeight:'bold' ,
     color: 'white'  
    }
})

export default flexButton