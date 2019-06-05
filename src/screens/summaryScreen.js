import React, { Component } from 'react'
import {  View , StyleSheet, ScrollView, Text, TouchableOpacity} from 'react-native'
import {connect} from "react-redux"
import SummaryList from "../Components/summaryScreenComp/summaryCartList"
import {addToDatabase} from '../Store/Actions/index'
import FlexButton from '../Components/UI/FlexButton'
import AvenirHeavy from '../Components/UI/AvenirHeavy'
import AvenirMedium from '../Components/UI/AvenirMedium'
import AvenirLight from '../Components/UI/AvenirLight'

 class SummaryScreen extends Component {

// componentDidMount = () => {
//   console.log(this.props.size)
//   console.log(this.props.total)
// }
static navigatorStyle = {
    drawUnderNavBar: false,
    navBarTranslucent: true,
    navBarHidden: false,
      tabBarHidden:true,
     drawUnderTabBar: true
  };


navigationHandler = () => {
    //drop function to add checkout items to the server and remove when user 
    this.props.atdb(this.props.checkout)
    this.props.navigator.push({
        screen: "fluffy.ShippingScreen",
        title: "Shipping",
        passProps:{
            size: this.props.size,
            total: this.props.total
        }
    })
}


  render() {
    return (
        <View style={styles.container}>

        <ScrollView contentContainerStyle={styles.scrollContainer}>
        {this.props.checkout.map((checkoutItems, index)=>(
          <SummaryList cartItems={checkoutItems} key={index}/> )
          )}
        </ScrollView>

        <View style={styles.totalNav}>

            <View style={styles.sumDetails}>

            <View style={styles.firstBlock}>
            <AvenirMedium>Number of Items:</AvenirMedium>
            <AvenirHeavy Styles={{fontFamily: 'Avenir-BlackOblique',fontSize: 20}}>X {this.props.size}</AvenirHeavy>
            </View>

            <View style={styles.secondBlock}>
            <AvenirMedium>Total:</AvenirMedium>
            <AvenirHeavy Styles={{fontFamily: 'Avenir-BlackOblique',fontSize: 20,}}>${this.props.total}</AvenirHeavy>
            </View>

            </View>

            <View style={styles.buttonContainer}>
            <FlexButton innerStyles={styles.button} label='Proceed to checkout' onPress={this.navigationHandler}/>
            </View>
            
            

        </View>

        </View>
    )
  }
}

const styles= StyleSheet.create({
    container:{
        flex: 1, 
        // padding: 10,
        justifyContent: 'center',
        borderWidth: 0.2,
        borderColor: "black",
    },
    scrollContainer:{
        flex:1,
    },
    totalNav:{
        // justifyContent:"space-around",
        // backgroundColor: 'red',
        // alignItems: 'center',
        borderWidth: 0.5,
        borderColor: "gray",
        height: 150,
        width: '100%',

        // backgroundColor: "red"
    },
    sumDetails:{
        // height: '50%',
        // width: '100%',
        flex: 2,
        // borderRadius: 50
        borderWidth: 0.2,
        borderColor: "black",
        // justifyContent: 'center',
        // alignItems: 'center',
        
    },
    button:{
        // height: '50%',
        // width:'100%',
    //    height: '100%',
    //    width:'80%',
       borderRadius: 50,
    //    justifyContent:'center',
    //    alignItems: 'center',
    },
    buttonContainer:{
        flex: 1.5,
        // backgroundColor: 'gray',
        borderWidth: 0.2,
        borderColor: "black",
        marginBottom: 5,
    },
    text:{
        color: 'white',
        height: '100%',
        width: '100%',
        textAlign: 'center'
    }
,firstBlock:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'space-between',
    width:'100%',
    height: '30%',
    paddingHorizontal: 5,
},
secondBlock:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'space-between',
    width:'100%',
    height:'30%',
    paddingHorizontal: 5,
}

})

const mapDispatchToProps = dispatch =>{
    return{
        atdb: (items)=> dispatch(addToDatabase(items))
    }
}

const mapStateToProps = state => {
    return{
        checkout: state.cart.checkoutCart
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SummaryScreen)