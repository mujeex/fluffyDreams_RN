import React, { Component } from 'react';
import { View, Text, StyleSheet ,TouchableOpacity} from 'react-native';
// import SupportSelect from '../UI/SupportSelect'
import AvenirMedium from '../UI/AvenirMedium'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


export default class SupportTab extends Component {

  render() {
    return (
      <View style={styles.container}>
<TouchableOpacity style={styles.textContainer}>
    <View style={styles.box} >
       <View style={{marginRight: 50,}}><FontAwesome5 name={'headphones'} size={20}/></View> 
        <AvenirMedium Styles={{fontSize: 20,color:'#0A539B'}}>Customer Care</AvenirMedium>
    </View>
 </TouchableOpacity> 

 <TouchableOpacity style={styles.textContainer}>
    <View style={styles.box} >
        <View style={{marginRight: 70}}><FontAwesome5 name={'comments'} size={20}/></View>  
        <AvenirMedium Styles={{fontSize: 20,color:'#0A539B'}}>Feedback</AvenirMedium>
    </View>
 </TouchableOpacity> 

 <TouchableOpacity style={styles.textContainer}>
    <View style={styles.box} >
    <View style={{marginRight: 70}}><FontAwesome5 name={'globe'} size={20}/></View>   
      <AvenirMedium Styles={{fontSize: 20,color:'#0A539B'}}>Extra Service</AvenirMedium>
    </View>
 </TouchableOpacity> 

 <TouchableOpacity style={styles.textContainer}>
    <View style={styles.box} >
        <View style={{marginRight: 70}}><FontAwesome5 name={'users'} size={20}/></View> 
        <AvenirMedium Styles={{fontSize: 20,color:'#0A539B'}}>Forum</AvenirMedium>
    </View>
 </TouchableOpacity> 

 <TouchableOpacity style={styles.textContainer}>
    <View style={styles.box} >
       <View style={{marginRight: 50}}><FontAwesome5 name={'question'} size={20}/></View> 
        <AvenirMedium Styles={{fontSize: 20,color:'#0A539B'}}>Question&Answer</AvenirMedium>
    </View>
 </TouchableOpacity> 

      </View>
    );
  }
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        // justifyContent: 'center'
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent:'space-around'
    },
    textContainer:{
      width: '90%',
      height: 42,
      
  },
  box:{
      justifyContent: 'space-around',
      paddingLeft: 20,
    //  borderWidth: 1,
    //  borderColor:'#0A539B',
     borderRadius: 15,
     flex:1,
     flexDirection: 'row',
     alignItems: 'center',
     shadowColor: '#0A539B',
     shadowOpacity: 0.2,
     shadowOffset: {
         height: 3
     },
 backgroundColor: 'white'
  }
    
})
