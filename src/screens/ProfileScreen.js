import React, { Component } from 'react';
import {View, Text, StyleSheet,Dimensions, ImageBackground,TouchableOpacity,Platform} from "react-native"
import Auth from "../Components/authComp/auth"
import ProfileTab from '../Components/profScreenComp/ProfTab'
import MyOrder from '../Components/profScreenComp/myOrder'
// import FlexibleInput from '../Components/profScreenComp/flexInput'
import Icon from 'react-native-vector-icons/Ionicons'
import {authLogOut} from '../Store/Actions/index'
import SupportTab from '../Components/profScreenComp/supportTab'
import AvenirHeavy from '../Components/UI/AvenirHeavy'
import AvenirLight from '../Components/UI/AvenirLight'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import {connect} from 'react-redux'
import AvenirMedium from '../Components/UI/AvenirMedium';


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

  handleNavigation= ()=> {
    this.props.navigator.push({
      screen: "fluffy.ProfileInfoScreen",
      animated: true,
      animationType: "ease-in"
    })
  }

  handleDisplay=(display)=> {
    this.setState({
      display: display
    })
  }

  logoutHandler= () =>{
    this.props.logout()
  }

  render() {
    //=====================display logic==================
    let display=(
         <ProfileTab/> 
        // <View><Text>Profile tab</Text></View>
    )
    if(this.state.display == 'myOrders'){
      display=(
        <MyOrder/>
      )
    }else if(this.state.display == 'support'){
      display=(
        <SupportTab/>
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

        <ImageBackground source={require('../Assets/wildlife-mistakes.jpg')} resizeMode='cover' style={styles.background}>
        <View style= {styles.header}>
         <View style={{flex:1,justifyContent:'center',alignItems: 'flex-end',}}><AvenirMedium Styles={{color: "black", fontSize: 20}}>Profile</AvenirMedium></View> 
        <TouchableOpacity style={{flex:1,justifyContent:'center', alignItems: 'flex-end',}} onPress={this.logoutHandler}>
        <FontAwesome5 name={'sign-out-alt'} size={20}/>
        {/* <Icon name={Platform.OS=='android'?'md-log-out':'ios-log-out'} size={25}/> */}
          </TouchableOpacity> 
        </View>

        <View style={styles.pointsBox}>
        <AvenirHeavy Styles={{fontSize:20, color:'#0A539B'}}>Points : {this.props.points}pts</AvenirHeavy>
          </View>
        </ImageBackground>
        {/* <View style={styles.circle}><Text>M</Text></View> */}
  
          <View style= {styles.activity}>

          <View style={styles.tabsContainer}>
          <View style={styles.tabs}>
          <TouchableOpacity onPress={()=>this.handleDisplay('profile')} style={styles.flex}>  <View style={this.state.display=='profile'? styles.line: styles.noLine} ><AvenirLight Styles={this.state.display=='profile'?styles.dark:styles.normal}>Profile</AvenirLight> </View>    </TouchableOpacity>  
          <TouchableOpacity  onPress={()=>this.handleDisplay('myOrders')} style={styles.flex}> <View style={this.state.display=='myOrders'? styles.line: styles.noLine}><AvenirLight Styles={this.state.display=='myOrders'?styles.dark:styles.normal}>History</AvenirLight></View>  </TouchableOpacity> 
          <TouchableOpacity onPress={()=>this.handleDisplay('support')} style={styles.flex}>  <View style={this.state.display=='support'? styles.line: styles.noLine} > <AvenirLight Styles={this.state.display=='support'?styles.dark:styles.normal}>Support</AvenirLight></View>  </TouchableOpacity> 
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
    height:45,
    alignItems: 'center',
    justifyContent: "center"
    ,backgroundColor: "white",
    paddingBottom: 10,
    flexDirection: 'row',
  },

  
  background:{
    backgroundColor: "maroon",
    height: '50%',
    flex: 3.5,
    justifyContent:'space-between'

  },
  pointsBox:{
    height: 40,
    width: '50%',
    backgroundColor: "white",
    borderRadius: 15,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    marginBottom: 10,

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
    backgroundColor: "white",
    flex: 6,
    // justifyContent: "center",
    // alignItems: 'center',
  },
 
tabs:{
    // marginTop: 10,
    // padding: 10,
    backgroundColor:'white',

   flex:1,
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems: 'center',

  },
  tabsContainer:{
    flex:1.5,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'white',
  
  },
  body:{
    flex: 9,
    backgroundColor: 'white'
  },
  dark:{
    fontFamily: 'Avenir-Heavy',
    fontSize: 20,
    color: '#0A539B',

  },
  normal:{
    fontFamily: 'Avenir-Light',
    fontSize: 18,
    color: '#0A539B',

  },
  line:{
    flex:1,
    borderBottomColor: '#0A539B',
    borderBottomWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  noLine:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
   
  }
  ,flex:{
    flex:1
  }

})

const mapStateToProps = state => {
  return{
    auth: state.auth.login,
    points: state.bonus.points
  }
}

const mapDispatchToProps = dispatch => {
  return{
    logout: ()=> dispatch(authLogOut())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProfileScreen)