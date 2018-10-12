import React from 'react'
import {View, Image, Text, StyleSheet, TouchableOpacity, Dimensions} from "react-native"
const Width= Dimensions.get('window').width


const listItem = (props) => (

  <TouchableOpacity onPress={() => props.onPress(props.cakes.id)}>
<View  style= {styles.itemList}>
        <View style={{flex:2}}>

        <Image style= {{height: "100%", width: "100%", resizeMode:"cover"}} source={props.cakes.image}/>
          
        </View>
        <View style={{flex:1}}>
        <Text>{props.cakes.name}</Text>
        <Text>{props.cakes.price}</Text>
        <Text>{props.cakes.flavor}</Text>
        <Text>{props.cakes.size}</Text>
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