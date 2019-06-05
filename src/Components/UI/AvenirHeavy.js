import React from 'react'
import {Text, StyleSheet} from 'react-native'


const AvenirHeavy = (props) =>(
    <Text {...props} style={[styles.wrapper, props.Styles]}>{props.children}</Text>
)

const styles=StyleSheet.create({
    wrapper:{
        fontFamily: 'Avenir-Heavy',
    }
    
})

export default AvenirHeavy