import React, { Component } from 'react';
import {View, Text, Platform, Image, StyleSheet, ScrollView, Dimensions} from "react-native"
import { connect } from "react-redux"
import Icon from "react-native-vector-icons/Ionicons" 
import {addSelected} from "../Store/Actions/index"
import initState from "../Store/Local/PriceList"
import AvenirBlack from '../Components/UI/AvenirBlack'
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5'
// import {robotoWeights} from 'react-native-typography'

import SpecialOffer from "../Components/homeScreenComp/SOS/specialOffers"
import ListItem from "../Components/homeScreenComp/listItem"
import Swiper from "../Components/homeScreenComp/specialSwiper"

 const Width = Dimensions.get("window").width


class HomeScreen extends Component {

  state = initState

  selectionHandler = (key) => {
    const custom = this.state.customizables
    const selPlace = this.props.cakes.find(cakes => {
      return cakes.id === key
    })
    //this is for adding the selected item to the redux store
    this.props.add(selPlace)
    // console.log(selPlace)
//passing the flavor, size and toppings for price determination
    this.props.navigator.push({
      screen: "fluffy.OrderScreen",
      passProps:{
        selectedCake: selPlace,
        Customs: custom
      }
    })
  }


  static navigatorStyle = {
    navBarHidden: true,
    statusBarHidden: false,
    navBarHideOnScroll: false
    // drawUnderNavBar: true,
    // navBarTranslucent: true
  };

  render() {
    

    return (
      <View style={styles.cover}>
      {/* HEADER */}
      <View style={styles.header}>
        <View>

        </View>
        <View style={styles.imageContainer}>
          <Image source={require('../Assets/fluffyDreams.png')} style={styles.image}/>
          {/* <Text style={styles.text}>Fluffy Dreams</Text> */}
        </View>
        <View style={{marginRight: 5, paddingTop: 5,}}>
          <Fontawesome5 name={'bell'} size={30} solid/>
        </View>
      </View>
      {/* SWIPER */}
      <ScrollView showsVerticalScrollIndicator={false}>

      <Swiper />
        {/* SPECIAL OFFERS */}
    <SpecialOffer Dimension={Width}/>
   
  {/* MARKET */}
  <View style={{flex: 1}}>
  <View style={{height: 50, width: Width, flexDirection: 'row', justifyContent: 'space-between',  marginTop: 10, alignItems: "center"}}>
    <View style={{padding: 5, marginLeft: 5,}}>
    <AvenirBlack > MARKET</AvenirBlack>
    </View>

    <View style={{padding: 5, marginRight: 5,}}>
    </View>
  </View>
  
<ScrollView showsHorizontalScrollIndicator={false} overScrollMode="auto" contentContainerStyle={styles.itemWrapper}>
  {this.props.cakes.map((cakes, index) => (
      <ListItem onPress={this.selectionHandler} key ={index} cakes={cakes} />
    ))}
  </ScrollView>

  
  </View>

  </ScrollView>
  </View>
    
    )
  }
}


const styles= StyleSheet.create({

  cover:{
    flex: 1,

  },
  header:{
    backgroundColor:"transparent", 
    height: 50,
     width: "100%",
      flexDirection: 'row', 
      justifyContent: "space-between",
       alignItems: 'center',
      }
  ,
  text:{
    fontSize: 25,
    fontWeight: "bold",
  },
  
    itemWrapper:{
      alignItems: "center",
      flex: 1,
      width: Width-5 ,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: "center",

    },
    imageContainer:{
      height: '100%',
      width: 40
    },
    image:{
      height:'100%',
      width:'100%',
      resizeMode: 'cover'
    }
  // OfferCarousel:{
  //   flex:3,
  //   flexDirection: 'row',
  //   //  backgroundColor: "yellow"
  // }
})
const mapDispatchToProps = dispatch =>{
  return{
    add : (item)=> dispatch(addSelected(item)),

  }

}

const mapStateToProps= state => {
return{
  cakes: state.home.cakes,
    // customizable: state.cart.customizables,
    selected: state.order.selected,

}  
  
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

// export default HomeScreen