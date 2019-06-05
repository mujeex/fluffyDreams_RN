import React from 'react'
import {Text, StyleSheet} from 'react-native'


const AvenirLight = (props) =>(
    <Text {...props} style={[styles.wrapper, props.Styles]}>{props.children}</Text>
)

const styles=StyleSheet.create({
    wrapper:{
        fontFamily: 'Avenir-Light',
    }
    
})

export default AvenirLight