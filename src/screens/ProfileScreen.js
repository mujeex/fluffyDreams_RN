import React, { Component } from 'react';
import {View, Text, StyleSheet,Dimensions, ImageBackground,Button,TouchableOpacity,Platform} from "react-native"
import Auth from "../Components/authComp/auth"
// import ProfileTab from '../Components/profScreenComp/ProfTab'
import MyOrder from '../Components/profScreenComp/myOrder'
// import FlexibleInput from '../Components/profScreenComp/flexInput'
import Icon from 'react-native-vector-icons/Ionicons'

import {connect} from 'react-redux'


const Width= Dimensions.get('window').width



 class ProfileScreen extends Component {
  static navigatorStyle = {
    navBarHidden: true,
    drawUnderNavBar: true,
    // navBarTranslucent: true
  };

state={
  display: 'profile'
}

  handleNavigation= ()=>{
    this.props.navigator.push({
      screen: "fluffy.ProfileInfoScreen",
      animated: true,
      animationType: "ease-in"
    })
  }

  handleDisplay=(display)=>{
    this.setState({
      display: display
    })
  }

  render() {
    //=====================display logic==================
    let display=(
        //  <ProfileTab/> 
        <View><Text>Profile tab</Text></View>
    )
    if(this.state.display == 'myOrders'){
      display=(
        <MyOrder/>
      )
    }else if(this.state.display == 'support'){
      display=(
        // <Support/>
        <View><Text>support tab</Text></View>
      )
    }

    //====================================================
    // let display= (<Auth/>)

    if(!this.props.auth){
      return(
        <Auth/>
      )
    }else{
      return (
        <View style={{flex: 1}}>

        <ImageBackground style={styles.background}>
        <View style= {styles.header}>
          <Text style={{color: "white", fontSize: 20,}}>PROFILE</Text>
        <TouchableOpacity>
        <Icon name={Platform.OS=='android'?'md-log-out':'ios-log-out'} size={25}/>
          </TouchableOpacity> 
        </View>

        <View style={styles.pointsBox}>
        <Text>Points</Text>
          </View>
        </ImageBackground>
        {/* <View style={styles.circle}><Text>M</Text></View> */}
  
          <View style= {styles.activity}>

          <View style={styles.tabsContainer}>
          <View style={styles.tabs}>
          <TouchableOpacity onPress={()=>this.handleDisplay('profile')}>  <Text>Profile</Text> </TouchableOpacity>  
          <TouchableOpacity onPress={()=>this.handleDisplay('myOrders')} > <Text>My Orders</Text> </TouchableOpacity> 
          <TouchableOpacity onPress={()=>this.handleDisplay('support')}>  <Text>Support</Text> </TouchableOpacity> 
          </View>
          </View>
        

          <View style={styles.body}>
            {display}
          </View>
         
         </View> 
  
        </View>
  
        
  
      )
    }

    
  }
}

const styles= StyleSheet.create({
  header:{
    width: Width,
    height:50,
    alignItems: 'center',
    justifyContent: "center"
    ,backgroundColor: "#20265c",
    paddingBottom: 10,
  },

  
  background:{
    backgroundColor: "maroon",
    height: '50%',
    flex: 4,
    justifyContent:'space-between'

  },
  pointsBox:{
    height: 40,
    width: '60%',
    backgroundColor: "gray",
    borderRadius: 5,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'flex-start'
  },
  // circle:{
  //   alignItems: 'center',
  //   justifyContent:"center",
  //   height: 100,
  //   width: 100,
  //   backgroundColor: "white",
  //   position: "absolute",
  //   borderRadius: 50,
  //   top: 240,
  //   left: 140,
  //   zIndex:2
    
  // },
  activity:{
    backgroundColor: "gray",
    flex: 6,
    // justifyContent: "center",
    // alignItems: 'center',
  },
 
tabs:{
    // marginTop: 10,
    // padding: 10,
    backgroundColor:'white',
    borderRadius: 50,
    height: '90%',
    width: '90%',
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems: 'center',

  },
  tabsContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'orange'
  },
  body:{
    flex: 9,
    backgroundColor: 'beige'
  }

})

const mapStateToProps = state => {
  return{
    auth: state.auth.login
  }
}

export default connect(mapStateToProps)(ProfileScreen)