import React, { Component } from 'react'
import { Text, View ,StyleSheet, Image, TouchableWithoutFeedback,TouchableHighlight} from 'react-native'

// import Icon from "react-native-vector-icons/FontAwesome5"
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Selections from "./selections"
import Toppings from "./Toppings/toppings"


 class Customize extends Component {
 

  render() {
    return (
      <View style= {styles.wrapper}>
      <TouchableWithoutFeedback onPress={()=>this.props.onPress()} >
      <View style={styles.slideIndicator}>
      <FontAwesome5 name={this.props.isShown?'angle-up':'angle-down'} size={30} regular/> 
      </View>
      </TouchableWithoutFeedback >
        {/* <View > </View> */}
        {/* z */}
        {/* <View style={{flex:8}}>  */}
        <View style={styles.scrollWrapper}>
            <Selections priceEdit= {this.props.priceHandler} label="Flavor" options={this.props.customs.Flavor}/>
            <Selections priceEdit= {this.props.priceHandler} label="Size" options={this.props.customs.Sizes}/>
            <Toppings priceEdit= {this.props.priceHandler} label="Toppings" options={this.props.customs.Toppings}/>
        </View>
        {/* </View> */}
       
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
      flex:1.5,
      width: '100%',
      alignItems: 'center',
      justifyContent:'center'
    },
    scrollWrapper:{
      flex: 8.5,
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

    },counter:{
      flexDirection: 'row',
      width: "100%",
      height: 70,
      paddingVertical: 10,
      paddingLeft: 10,
      justifyContent: "flex-start",
      alignItems: 'center',
      borderWidth:2,
      borderColor: "black", 
    }
    

})

export default Customize