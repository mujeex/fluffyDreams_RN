import React from 'react'
import {View,TouchableOpacity,Text,StyleSheet} from 'react-native'
import AvenirHeavy from '../UI/AvenirHeavy'

const flexButton =(props) =>(
    <TouchableOpacity style={[styles.container, props.Styles]} onPress={()=>props.onPress()}>
        <View style={[styles.textContainer,props.innerStyles]}>
            <AvenirHeavy Styles={styles.text}>{props.label}</AvenirHeavy>
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
        borderRadius:50,
        // borderWidth: 3,
        // borderColor: "#0A539B",
        backgroundColor: "#0A539B"
    },
    text:{
     fontSize: 15,
    //  fontWeight:'bold' ,
     color: 'white'  
    }
})

export default flexButton