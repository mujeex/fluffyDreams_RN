import React from 'react';
import {View, Text, StyleSheet, Image} from "react-native"

const Content= (props) => (
    <View style={styles.wrapper}>

    <View style={styles.imageWrapper}>
        <Image style={styles.image} source={props.uri}/>
    </View>

    <View style={styles.content}>
    <Text style={{fontWeight:"bold", textAlign:"center", margin: 10,}}>{props.subtitle}</Text>
    <View style= {styles.announcement}>
    <Text style={{fontSize: 16, color: "white", textAlign:"center", lineHeight: 23}}>
    This one is the user interface for ordering and delivering food, 
    namely burgers. Its extended functionality allows users to order 
    a traditional burger from the menu or customize any option for 
    themselves adding or removing the ingredients. As for the color
     palette in the app, the designer played with the contrast of 
     backgrounds: interactions zones aimed at reading copy, observing
      and manipulating positions in the lists are presented on the
       
    </Text>
    </View>
    </View>
     


    </View>
)

const styles= StyleSheet.create({
    wrapper:{
        height: "100%",
        // alignItems: 'center',
        // justifyContent:"space-between"
    },
    announcement:{

        backgroundColor: "#aca1a1",
        padding: 10

    },
    content:{
        height: '50%',
    },

    imageWrapper:{
        height: "40%",
        padding: 5,
        

    },
    image:{
        width:'100%',
        height: '100%',
        resizeMode: "cover"
    }
})

export default Content