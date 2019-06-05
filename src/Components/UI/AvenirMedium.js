import React from 'react'
import {Text, StyleSheet} from 'react-native'


const AvenirMedium = (props) =>(
    <Text {...props} style={[styles.wrapper, props.Styles]}>{props.children}</Text>
)

const styles=StyleSheet.create({
    wrapper:{
        fontFamily: 'Avenir-Medium',
    }
    
})

export default AvenirMedium