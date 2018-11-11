import React, { Component } from 'react';
import { View, StyleSheet, ScrollView} from 'react-native';
import FlexibleInput from '../Components/profScreenComp/FlexInput'

 class profTab extends Component {

  render() {
    return (

      <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
      <FlexibleInput styles={styles.input} />
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
    justifyContent:'center',
    alignItems: 'center',
 },
 content:{
     height: '100%',
     width: '100%'
 },
 input:{
     borderColor: 'red',
 }
})

export default profTab