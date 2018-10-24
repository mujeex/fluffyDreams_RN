import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import AddressField from "./addressField"
import LandField from "./landField"
import CommentField from "./landField"

 class Delivery extends Component {
  

  render() {
      
    return (
      <View style={this.props.bodyStyles}>
        <AddressField label='Address' />
       <LandField label='Land Mark'  />
       <CommentField label='Comment'/>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  
})


export default Delivery
