import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from "react-native"


const Button = () => (
    
    <TouchableOpacity >
          <View style= {styles.button}>
          <Text style={styles.buttonText}>Add to cart</Text>
          </View>
      </TouchableOpacity>
)


const styles = StyleSheet.create({
   
    button:{

        backgroundColor: "#64abff",
        height: 40,
        width: '90%',
        justifyContent: "center",
        alignItems: 'center',

        borderRadius: 10,
    },
    buttonText:{
        color: "white",
        fontSize: 18,
    }
})

export default Button