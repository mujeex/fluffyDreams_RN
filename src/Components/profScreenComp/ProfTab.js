import React, { Component } from 'react';
import { View, StyleSheet, ScrollView} from 'react-native';
// import FlexibleInput from '../Components/profScreenComp/FlexInput'
import BlankSelect from '../UI/blankSelect'
import AvenirLight from '../UI/AvenirLight'
import AvenirHeavy from '../UI/AvenirHeavy'

 class profTab extends Component {

  render() {
    return (

      <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.content}>
        <AvenirLight Styles={{fontFamily: 'Avenir-LightOblique',fontSize: 14,}}>Username</AvenirLight>
      <BlankSelect label='Mujahid'/>
      </View>
      
      <View style={styles.content} >
        <AvenirLight Styles={{fontFamily: 'Avenir-LightOblique',fontSize: 14,}}>Email</AvenirLight>
      <BlankSelect label='mujahidbappai@yahoo.com'/>
      </View>
      
      </ScrollView>

    );
  }
}

const styles= StyleSheet.create({
 container:{
     flex:1,
    margin: 10,
    padding: 10,
    alignItems: 'center',
 },
 content:{
     height: 70,
     width: '100%',
     justifyContent:'center',
     marginTop: 10

 },
 input:{
     borderColor: 'red',
 }
})

export default profTab