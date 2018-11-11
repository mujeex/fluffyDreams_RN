import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'

export default class existingAddressBox extends Component {
  render() {
    return (
        <View style={styles.addressContainer}>
        <View style={styles.addressBox}>
          <Text>{this.props.address}</Text>
          <Text>{this.props.pobox}</Text>
          <Text>{this.props.gra}</Text>
          <Text>{this.props.city}</Text>
          </View>
        </View>
    )
  }
}

const styles=StyleSheet.create({
    addressContainer:{
        height: 120,
        width: '70%',
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        justifyContent:"flex-start",
        borderRadius: 5,
        marginLeft:20,
        marginTop: 10,
    
      },
      addressBox:{
        height: '70%',
        width: '100%',
      },
})