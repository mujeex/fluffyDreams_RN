import React, { Component } from 'react'
import {  View , StyleSheet, ScrollView, Text, TouchableOpacity} from 'react-native'
import {connect} from "react-redux"
import SummaryList from "../Components/summaryScreenComp/summaryCartList"

 class SummaryScreen extends Component {

componentDidMount = () => {
  console.log(this.props.size)
  console.log(this.props.total)
}

navigationHandler = () => {
    this.props.navigator.push({
        screen: "fluffy.ShippingScreen",
        title: "YOUR ORDER",
        passProps:{
            size: this.props.size,
            total: this.props.total
        }
    })
}


  render() {
    return (
        <View style={styles.container}>

        <ScrollView contentContainerStyle={styles.scrollContainer}>
        {this.props.checkout.map((checkoutItems, index)=>(
          <SummaryList cartItems={checkoutItems} key={index}/> )
          )}
        </ScrollView>

        <View style={styles.totalNav}>

            <View style={styles.sumDetails}>
            <Text>Number of Items: {this.props.size}</Text>
            <Text>Total: {this.props.total}</Text>
            </View>

            <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={this.navigationHandler}>
            <View style={styles.button}>
            <Text style={styles.text}>Proceed to Checkout</Text>
            </View>
            
            </TouchableOpacity>
            </View>
            
            

        </View>

        </View>
    )
  }
}

const styles= StyleSheet.create({
    container:{
        flex: 1, 
        // padding: 10,
        justifyContent: 'center',
        borderWidth: 0.2,
        borderColor: "black",
    },
    scrollContainer:{
        flex:1,
    },
    totalNav:{
        // justifyContent:"space-around",
        // backgroundColor: 'red',
        // alignItems: 'center',
        borderWidth: 0.5,
        borderColor: "gray",
        height: 100,
        width: '100%',

        // backgroundColor: "red"
    },
    sumDetails:{
        // height: '50%',
        // width: '100%',
        flex: 2,
        backgroundColor: 'blue',
        // borderRadius: 50
        borderWidth: 0.2,
        borderColor: "black",
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    button:{
        // height: '50%',
        // width:'100%',
       height: '100%',
       width:'100%',
       justifyContent:'center',
       alignItems: 'center',
    },
    buttonContainer:{
        flex: 1,
        backgroundColor: 'gray',

        borderWidth: 0.2,
        borderColor: "black",
    },
    text:{
        color: 'white',
        height: '100%',
        width: '100%',
        textAlign: 'center'
    }


})


const mapStateToProps = state => {
    return{
        checkout: state.cart.checkoutCart
    }
}

export default connect(mapStateToProps)(SummaryScreen)