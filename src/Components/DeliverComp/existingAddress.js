import React, { Component } from 'react'
import { Text, View,StyleSheet,TouchableOpacity } from 'react-native'
import AvenirMedium from '../UI/AvenirMedium'

export default class existingAddressBox extends Component {
 state={
   selected: false
 }

 selectHandler = () => {
   this.setState(prevState=> ({
     selected: !prevState.selected
   }))
 }
  render() {
    return (
        <TouchableOpacity onPress={()=>this.selectHandler()} style={this.state.selected?styles.selected:styles.addressContainer}>
        <View style={styles.addressBox}>
          <AvenirMedium>{this.props.address}</AvenirMedium>
          <AvenirMedium>{this.props.pobox}</AvenirMedium>
          <AvenirMedium>{this.props.gra}</AvenirMedium>
          <AvenirMedium>{this.props.city}</AvenirMedium>
          </View>
        </TouchableOpacity>
    )
  }
}

const styles=StyleSheet.create({
    addressContainer:{
        height: 110,
        width: '80%',
        padding: 10,
        justifyContent:"flex-start",
        borderRadius: 5,
        marginLeft:20,
        marginTop: 10,
        shadowColor: '#0A539B',
        shadowOpacity: 0.2,
        shadowOffset: {
            height: 3
        },
    backgroundColor: 'white'
      },
      addressBox:{
        height: '70%',
        width: '100%',
      },
      selected:{
        height: 110,
        width: '80%',
        padding: 10,
        justifyContent:"flex-start",
        borderRadius: 5,
        marginLeft:20,
        marginTop: 10,
        borderColor: '#0A539B',
        borderWidth: 2,
      
      }
})