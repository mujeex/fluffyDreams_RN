import React from 'react'
import {View, Image, Text, StyleSheet, TouchableOpacity, Dimensions} from "react-native"
const Width= Dimensions.get('window').width
import {robotoWeights} from 'react-native-typography'


const listItem = (props) => (

  <TouchableOpacity onPress={() => props.onPress(props.cakes.id)}>
<View  style= {styles.itemList}>
        <View style={{flex:2}}>

        <Image style= {{height: "100%", width: "100%", resizeMode:"cover"}} source={props.cakes.image}/>
          
        </View>
        <View style={{flex:1}}>
        <Text style={robotoWeights.medium}>{props.cakes.name}</Text>
        <Text style={robotoWeights.light}>{props.cakes.price}</Text>
        <Text style={robotoWeights.light}>{props.cakes.flavor}</Text>
        <Text style={robotoWeights.light}>{props.cakes.size}</Text>
        </View>
      </View>
  </TouchableOpacity>

)

const styles = StyleSheet.create({
    itemList:{
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 5,
         height: 210, 
         width: Width/2.1,
         borderWidth: 1,
          borderColor: "black",
          borderRadius: 5,
        },
})

export default listItem