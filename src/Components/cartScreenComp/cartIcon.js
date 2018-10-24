import React, { Component } from 'react';
import { View, Text , StyleSheet, TouchableOpacity,Platform} from 'react-native';
import {connect} from "react-redux"
import Icon from "react-native-vector-icons/Ionicons"
// import {cart} from "../../../App"

 class CartIcon extends Component {

navigatorHandler = () =>{
    console.log('it shall be handled later')
    // this.props.navigator.push({
    //     screen:"cart"
    // })
}

  render() {
    return (
        <View style={styles.container}>
        <View style={styles.label}>
        <Text style={styles.text}> {this.props.cartSize.length} </Text>
      </View>
      <TouchableOpacity onPress={this.navigatorHandler}>
      <Icon name={Platform.OS === "android"? "md-cart": "ios-cart"} size={30}/>
      </TouchableOpacity>
     
        </View>
      
    );
  }
}

const styles= StyleSheet.create({
    container:{
       width: 40,
       height: 40,
       backgroundColor: "transparent",
       justifyContent: 'center',
       alignItems: 'center',
       
    },
    label:{
        height: 20,
        width: 20,
        borderRadius: 50,
        backgroundColor: "red",
        position: "absolute",
        justifyContent: "center",
        alignItems: 'center',
        // bottom: 5,
        top: 0,
        right: '57%',
        zIndex: 2
       
    },
    text:{
        color: "white"
    }
})

const mapStateToProps = state =>{
    return{
        cartSize: state.order.cart
    }
}

export default connect(mapStateToProps)(CartIcon)
