import React, { Component } from 'react'
import { Text, View ,StyleSheet, Image, Platform, ScrollView,TouchableOpacity} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons"
import Selections from "./selections"
import Toppings from "./Toppings/toppings"


export default class Customize extends Component {
 

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

            {/* button component */}
            <View style={styles.counter}>
            <View style={styles.counterWrapper}>
            {/* incbutton */}
              <View style={styles.incButton}> 
              <TouchableOpacity>
              <Icon name={Platform.OS ==="android"?"md-add":"ios-add"} size={25}/>
              </TouchableOpacity>
               </View>
              {/* number area */}
              <View style={styles.number}>
              <Text>1</Text>
              </View>
              {/* decbutton */}
              <View style={styles.decButton}>
              <TouchableOpacity>
              <Icon name={Platform.OS ==="android"?"md-remove":"ios-remove"} size={25}/>
              </TouchableOpacity>
              
              </View>
            </View>
          
            </View>
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
    ,counterWrapper:{
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
      borderTopRightRadius: 10,
      borderBottomRightRadius:10,
      height: 50,
      borderWidth: 1,
      borderColor: "red",
      flexDirection: 'row',
      justifyContent: 'center',
      width: '60%'

    },
    incButton:{
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      flex:2,
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
    },
    decButton:{
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      flex:2,
      borderTopRightRadius: 10,
      borderBottomRightRadius:10
    },
    number:{
      height: '100%',
      flex:3,
      justifyContent:"center",
      alignItems: 'center',
    }

})