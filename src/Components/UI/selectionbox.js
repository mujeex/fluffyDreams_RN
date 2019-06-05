import React, { Component } from 'react';
import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import AvenirMedium from './AvenirMedium'

 class SelectionBox extends Component {

  state={
    selected: false
  }

  selectionHandler = () => {
      if(!this.state.selected)
      {
        this.setState({
            selected: true
        })
      }else{
          this.setState({
              selected:false
          })
      }
     
  }

  render() {
    return (
      <View style={styles.container}>

      <View style={styles.leftBlock}>
      <View style={styles.icon}> <Icon name={this.props.name} size={20}/></View>
        <View style={styles.textContainer}><AvenirMedium style={styles.text}>{this.props.label}</AvenirMedium></View>
      </View>
       
        <View style={styles.circleContainer}>
        <TouchableOpacity onPress={()=>this.selectionHandler()}> <View style={this.state.selected?styles.circleFilled:styles.circleNoFill}></View> </TouchableOpacity>  
        </View>
      </View>
    );
  }
}

const styles=StyleSheet.create({
 container:{
     height: '100%',
     width: '90%',
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'space-around',
     shadowColor: '#0A539B',
        shadowOpacity: 0.2,
        shadowOffset: {
            height: 3
        },
        backgroundColor:'white',
        borderRadius: 15,
 },
 leftBlock:{
     flexDirection: 'row',
     justifyContent:'space-between',
     alignItems: 'center',
     width:'60%',
     height:'100%'
 },
 icon:{
     height:'100%',
     width: '30%',
     justifyContent:'center',
     alignItems: 'center',
 },
 textContainer:{
     width: '70%',
     height: '100%',
     justifyContent:'center',
     alignItems: 'center',
    

 },
 text:{
    fontSize: 16,
    fontWeight: 'bold'
 },
 circleContainer:{
     width:'40%',
     height: '100%',
     justifyContent:'center',
     alignItems: 'center',
 },
 circleNoFill:{
     borderRadius: 100,
     borderWidth: 0.4,
     borderColor: '#0A539B',
     height: 15,
     width: 15
 },
 circleFilled:{
    borderRadius: 100,
    backgroundColor: '#0A539B',
    height: 15,
    width: 15
 }

})

export default SelectionBox
