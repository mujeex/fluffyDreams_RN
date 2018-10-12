import React, { Component } from 'react';
import {View, Text, StyleSheet,Dimensions, ImageBackground,Button} from "react-native"


const Width= Dimensions.get('window').width



export default class ProfileScreen extends Component {
  static navigatorStyle = {
    navBarHidden: true,
    drawUnderNavBar: true,
    // navBarTranslucent: true
  };

  handleNavigation= ()=>{
    this.props.navigator.push({
      screen: "fluffy.ProfileInfoScreen",
      animated: true,
      animationType: "ease-in"
    })
  }
  render() {
    return (
      <View style={{flex: 1}}>
      <View style= {styles.header}>
        <Text style={{color: "white", fontSize: 20,}}>PROFILE</Text>
      </View>

      
      <ImageBackground style={styles.background}>
      
      </ImageBackground>
      <View style={styles.circle}><Text>M</Text></View>

        <View style= {styles.progress}>
        <View style={styles.progressBox}>

        </View>
        <View style={styles.button}>
        <Button 
        onPress= {() => this.handleNavigation() }
        title="Tell us more about yourself"
           />
        </View>
       
       </View> 

      </View>

      

    )
  }
}

const styles= StyleSheet.create({
  header:{
    width: Width,
    flex: 1,
    alignItems: 'center',
    justifyContent: "center"
    ,backgroundColor: "#20265c",
    justifyContent: "flex-end",
    paddingBottom: 10,
  },

  
  background:{
    backgroundColor: "maroon",
    height: '50%',
    flex: 4

  },
  circle:{
    alignItems: 'center',
    justifyContent:"center",
    height: 100,
    width: 100,
    backgroundColor: "white",
    position: "absolute",
    borderRadius: 50,
    top: 240,
    left: 140,
    zIndex:2
    
  },
  progress:{
    backgroundColor: "black",
    flex: 5,
    zIndex: 0,
    justifyContent: "space-around",
    alignItems: 'center',
  },
  progressBox:{
    height: 70,
    width: Width/1.2,
    backgroundColor: "gray",
    borderRadius: 5,
  },
  button:{
    marginTop: 15,
    padding: 10,
    backgroundColor:"white",
    borderRadius: 50,
  }

})
