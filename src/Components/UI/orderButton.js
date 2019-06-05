import React from 'react'
import{View, StyleSheet} from 'react-native'
import AvenirHeavy from '../UI/AvenirHeavy'
import AvenirBlack from '../UI/AvenirBlack'


const orderButton = (props) =>
(
    <View style={props.checkout!=0?styles.containerColored:styles.containerNoColor}>
    <View style={styles.text}><AvenirHeavy Styles={props.checkout!=0?styles.labelColored:styles.labelNoColor}>{props.label}</AvenirHeavy></View>
    <View style={styles.priceContainer}><AvenirBlack Styles={props.checkout!=0?styles.priceColored:styles.priceNoColor}>${props.price}</AvenirBlack></View>
    </View>
)
  


const styles= StyleSheet.create({
    containerNoColor:{
        height: '100%',
        width: '80%',
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: "#0A539B",
        borderRadius: 50,
        // alignItems: 'center',
        // justifyContent: 'space-around'
    },
    containerColored:{
        height: '100%',
        width: '80%',
        flexDirection: 'row',
        backgroundColor:"#0A539B",
        borderRadius: 50,
    },
    text:{
        flex: 7,
        justifyContent:'center',
        alignItems: 'center',
    },
    labelColored:{
        color: 'white',
        fontSize: 16,
    },
    labelNoColor:{
        color: "#0A539B",
        fontSize: 16,
    },
    priceContainer:{
        flex:3,
        justifyContent:'center',
        alignItems: 'center',
    },
    priceColored:{
        fontSize:20 ,
        fontFamily: 'Avenir-BlackOblique',
        color:"white"
       },
    priceNoColor:{
        fontSize: 20,
        fontFamily: 'Avenir-BlackOblique',
        color:"#0A539B"
    }
    // "#0A539B"

    
})

export default orderButton