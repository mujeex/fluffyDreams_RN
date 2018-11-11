import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput ,ScrollView,Platform, Dimensions} from 'react-native';
import {connect} from 'react-redux'

import Icon from 'react-native-vector-icons/Ionicons'
import FlexButton from '../UI/FlexButton'
import AddressBox from './newAddressBox'
import ExistingAddress from './existingAddress'

// const HEIGHT= Dimensions.get('window').height

 class Delivery extends Component {
  
 
  

  render() {
    //this is for displaying the newAddressBox when it gets saved
    let newDisplay
    if(this.props.mode){
      newDisplay=(
        <AddressBox/>
      )
    }
//this is for displaying the ExistingAddressBox for when it gets saved
      let display=(
        <AddressBox modeState={this.props.mode}/>
      )
      if(this.props.mode){
        display=(
          <ExistingAddress address={this.props.input.address} pobox={this.props.input.pobox} gra={this.props.input.gra} city={this.props.input.city}/>
        )
      }
    return (
      <View style={styles.container}>
 
  <ScrollView >
<View style={{justifyContent:'center', flex:1,alignItems:'center'}}>

 <ExistingAddress address='Ahmadu Bello Way' pobox='12789' gra='Nassarawa G.R.A' city='Kano'/>
<ExistingAddress address='Ahmadu Bello Way' pobox='12789' gra='Nassarawa G.R.A' city='Kano'/>
   
{display}
{/* this is to be displayed after the edit has been saved from the previous block */}
{newDisplay}

<View style={{height:70, width: '100%'}}></View>
</View>


  </ScrollView>


  <View style={styles.buttonContainer}>
<FlexButton label='PROCEED' onPress={this.props.onNavigation}/>
</View>
      
       
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    // backgroundColor:'red'
  },

  
  iconBox:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
  },
  buttonContainer:{
    height: 60,
    width:'100%',
    position: 'absolute',
    top: 350,
    // backgroundColor: 'white'
  }
})


const mapStateToProps = state =>{
  return{
    mode:state.box.save,
    input:state.box
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    // changeMode:()=>dispatch(changeMode())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Delivery)
