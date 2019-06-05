import React, { Component } from 'react'
import { Text, View , ScrollView,StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import SummaryList from '../summaryScreenComp/summaryCartList'

class MyOrders extends Component {
  render() {

    if(this.props.checkout.length == 0){
        return (
            <View style={styles.container}>
                <Text>Sorry nothing here yet</Text>
            </View>
        )
    }else{
        return (
            <ScrollView>
            <View style={styles.list}>
            {this.props.checkout.map((checkoutItems, index)=>(
                <SummaryList cartItems={checkoutItems} key={index}/> )
                )}
            </View>
             
            </ScrollView>
          )
    }
    
  }
}

const styles= StyleSheet.create({
list:{
    flex:1,
    margin: 10,
    padding: 10,
    justifyContent:'center',
    alignItems: 'center',
}
})

const mapStateToProps = state => {
    return{
        checkout: state.cart.checkoutCart
    }
    
}

export default connect(mapStateToProps)(MyOrders)