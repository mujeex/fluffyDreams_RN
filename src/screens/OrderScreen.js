import React, { Component } from 'react'
import {connect} from "react-redux"
import {  View, ImageBackground, StyleSheet, Button, Dimensions } from 'react-native'
import ItemData from "../Components/orderScreenComp/itemData"
import ButtonSlide from "../Components/orderScreenComp/button"
import Customize  from "../Components/orderScreenComp/customize"
import {clearSelected,updatePrice} from "../Store/Actions/index"
import analyse from "../priceAnalyser/analyser"


const HEIGHT= Dimensions.get('window').height

 class OrderScreen extends Component {

    static navigatorStyle = {
        drawUnderNavBar: true,
        navBarTranslucent: true,
        navBarHidden: true,
          tabBarHidden:true,
         drawUnderTabBar: true
      };


    popNavigation = () => {
      this.props.clear()
        this.props.navigator.pop()
    }
    //function for changing the price of order in the state
    priceHandler = (options) => {
      console.log(options.name)
      console.log(options.price)
      // switch()
    }
    componentDidMount = () => {
      // console.log(this.props.selectedCake)
      let price = analyse(this.props.selectedCake.flavor,this.props.selectedCake.size,this.props.selectedCake.toppings)
      console.log()
      this.props.update(price)
    };
    
  
  

  render() {
    return (
      <ImageBackground source={this.props.selectedCake.image} style={styles.backgroundImage}>

     

      <View style={styles.content}>
      <ItemData  title= "Back" onPress={this.popNavigation} data={this.props.selectedCake} price={this.props.calcPrice}/>
      </View>

      <View style={styles.customize} >
          <Customize customs={this.props.Customs} cakes={this.props.selectedCake} priceHandler={this.priceHandler}/>
      </View>

      <View style= {styles.wrapper}>
       <ButtonSlide/>
      </View>
 
      </ImageBackground>
    )
  }
}




const styles= StyleSheet.create({
    content: {
        alignItems: 'center',
       
    },
    backgroundImage:{
        flex: 1,
        width: '100%'
        // resizeMode: "contain"
    },
    // header:{
    //     alignItems: 'flex-start',
    //     justifyContent: "center",
    //     height: 50,
    //     backgroundColor: "transparent"
    // },
  wrapper:{
    width: '90%',
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: HEIGHT-50,
    backgroundColor: "#64abff",
    borderRadius: 10,
    alignSelf: 'center'
  },
  customize:{
    width: '100%',
    marginTop: 10,
    // transform: [{translateY: 100} ]
    
  }
   
})

const mapDispatchToProps = dispatch => {
  return{
    clear: ()=> dispatch(clearSelected()),
    update: (price)=> dispatch(updatePrice(price))

  }
}

const mapStateToProps = state =>{
  return{
    selected: state.cart.selected,
    calcPrice:state.cart.total
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(OrderScreen)