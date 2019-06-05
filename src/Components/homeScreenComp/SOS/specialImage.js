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
        //  borderWidth:1,
        //  borderColor: "gray",
         borderRadius: 15,
         marginLeft: 5,
         shadowColor: '#0A539B',
         shadowOffset: {
             width:0,
             height: 2
         },
         shadowOpacity: 0.4,

    },
    images:{
        resizeMode:"cover",
         height:'100%',
          width:'100%',
          borderRadius: 15,
    }
})

export default SpecialImages