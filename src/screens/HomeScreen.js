import React, { Component } from 'react';
import {View, Text, Platform, Image, StyleSheet, ScrollView, Dimensions} from "react-native"
import { connect } from "react-redux"
import Icon from "react-native-vector-icons/Ionicons" 
import {addSelected} from "../Store/Actions/index"
import initState from "../Store/Local/PriceList"


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
    drawUnderNavBar: true,
    // navBarTranslucent: true
  };

  render() {
    

    return (
      <View style={styles.cover}>
      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <Icon name={Platform.OS === "android"? "md-menu": "ios-menu"} size={30}/>
        </View>
        <View>
          <Text style={styles.text}>Fluffy Dreams</Text>
        </View>
        <View>
          <Icon name={Platform.OS === "android"? "md-notifications": "ios-notifications"} size={30}/>
        </View>
      </View>
      {/* SWIPER */}
      <ScrollView showsVerticalScrollIndicator={false}>

      <Swiper />
        {/* SPECIAL OFFERS */}
    <SpecialOffer Dimension={Width}/>
   
  {/* MARKET */}
  <View style={{flex: 1}}>
  <View style={{height: 50, width: Width, flexDirection: 'row', justifyContent: 'space-between', borderWidth: 2, borderColor: "black", marginTop: 10, alignItems: "center"}}>
    <View style={{padding: 5, marginLeft: 5,}}>
    <Text style={{ fontWeight: "bold"}}> MARKET</Text>
    </View>

    <View style={{padding: 5, marginRight: 5,}}>
    <Icon name={Platform.OS === "android"? "md-color-filter": "ios-color-filter"} size={30}/>
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
    backgroundColor:"red", 
    height: 70,
     width: "100%",
      flexDirection: 'row', 
      justifyContent: "space-between",
       alignItems: 'center',
      }
  ,
  text:{
    fontSize: 20,
    fontWeight: "bold",
  },
  
    itemWrapper:{
      alignItems: "center",
      flex: 1,
      width: Width-5 ,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: "center",

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