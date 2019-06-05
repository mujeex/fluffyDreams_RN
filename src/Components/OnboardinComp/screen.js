import React, { Component } from 'react';
import {
  StyleSheet,   // CSS-like styles
  Text,         // Renders text
  View          // Container component
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Button from '../OnboardinComp/button';
import Swiper from "../OnboardinComp/swiper"

export default class Screens extends Component {
  render() {
    return (
        <Swiper>
      <View style={[styles.slide, { backgroundColor: 'white' }]}>
      {/* <FontAwesome5 name={'chess'} {...iconStyles} /> */}
      <Icon name="ios-color-palette" {...iconStyles} />
        <Text style={styles.header}>VARIETY</Text>
        <Text style={styles.text}>Explore the delicacies we have to offer.</Text>

      </View>
       {/* Second screen */}
       <View style={[styles.slide, { backgroundColor: 'white' }]}>
       {/* <FontAwesome5 name={'truck'} {...iconStyles} /> */}
       <Icon name="ios-rocket" {...iconStyles} />
       <Text style={styles.header}>DELIVERY</Text>
       <Text style={styles.text}>Sit back, relax and leave your address with us.</Text>
     </View>
     {/* Third screen */}
     <View style={[styles.slide, { backgroundColor: 'white' }]}>
     {/* <FontAwesome5 name={'hammer'} {...iconStyles} /> */}
       <Icon name="ios-settings" {...iconStyles} />
       <Text style={styles.header}>CUSTOMIZE</Text>
       <Text style={styles.text}>Tailor your design to your taste.</Text>
     </View>
     </Swiper>
    );
  }
}

const iconStyles = {
    size: 100,
    color: '#0A539B',
  }; 

const styles = StyleSheet.create({
    // Slide styles
    slide: {
      flex: 1,                    // Take up all screen
      justifyContent: 'center',   // Center vertically
      alignItems: 'center',       // Center horizontally
    },
    // Header styles
    header: {
      color: '#0A539B',
      fontFamily: 'Avenir',
      fontSize: 30,
      fontWeight: 'bold',
      marginVertical: 15,
    },
    // Text below header
    text: {
      color: 'black',
      fontFamily: 'Avenir',
      fontSize: 18,
      marginHorizontal: 40,
      textAlign: 'center',
    },
  });
  