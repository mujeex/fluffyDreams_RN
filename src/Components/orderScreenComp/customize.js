import React, { Component } from 'react'
import { Text, View ,StyleSheet, Image, Platform, ScrollView} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons"
import Selections from "./selections"
import Toppings from "./Toppings/toppings"


export default class Customize extends Component {
  state={
    
  }

  render() {
    return (
      <View style= {styles.wrapper}>
        <View style={styles.slideIndicator}> <Icon name={Platform.OS === "android"? "md-arrow-dropup": "ios-arrow-dropup" } size={25}/> </View>
        <View style={styles.Header}>
        <Image style={styles.image} source={this.props.cakes.image}/>
        <Text>{this.props.cakes.price}</Text>
        </View>
        <ScrollView contentContainerStyle={styles.scrollWrapper}>
            <Selections priceEdit= {this.props.priceHandler} label="Flavor" options={this.props.customs.Flavor}/>
            <Selections priceEdit= {this.props.priceHandler} label="Size" options={this.props.customs.Sizes}/>
            <Toppings priceEdit= {this.props.priceHandler} label="Toppings" options={this.props.customs.Toppings}/>

        </ScrollView>
      </View>
    )
  }
}

const styles= StyleSheet.create({
    wrapper: {
      width: '100%',
      height: '100%',
      backgroundColor: "#f7f7f7",
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
    },
    slideIndicator:{
      height: 25,
      width: '100%',
      alignItems: 'center',
    },
    scrollWrapper:{
      flex: 1,
      width: '100%',

      alignContent: 'center',

    },
    Header:{
      height : 70,
      width: '100%',
      flexDirection: 'row',
      justifyContent: "space-around",
      alignItems: 'center',
      backgroundColor:"#938359"
    },
    image:{
      height: '100%',
      width: 100,
      resizeMode: 'cover',

    }

})