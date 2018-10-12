import React from 'react';
import {StyleSheet, Image, View} from "react-native"

const SpecialImages = (props) =>(
    <View style={styles.imageCover}>
        <Image style={styles.images} source={props.source}/>
      </View>
)

const styles= StyleSheet.create({
    imageCover:{
        height: 120, 
        width:110,
         padding: 5,
         borderWidth:1,
         borderColor: "gray",
         borderRadius: 5,
         marginLeft: 5,

    },
    images:{
        resizeMode:"cover",
         height:'100%',
          width:'100%'
    }
})

export default SpecialImages