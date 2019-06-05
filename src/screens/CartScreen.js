import React, { Component } from 'react';
import { View, StyleSheet,ScrollView,Text, TouchableOpacity} from 'react-native';
import CartList from "../Components/cartScreenComp/cartList"
import {connect} from "react-redux"
import {addItem,removeItem,removeFromCart} from "../Store/Actions/index"
import Auth from '../Components/authComp/auth'
import OrderButton from '../Components/UI/orderButton'


 class CartContainer extends Component {

  state={
    total:0,
    counter: 1
    // checkoutCart:[]
  }

  totalHandler=() =>{
    console.log("amazing")
    this.props.navigator.push({
      screen: "fluffy.SummaryScreen",
      title: "Summary",
      passProps:{
        total: this.state.total ,
        size:this.props.checkout.length,
        // amount: this.state.counter
      }
    })
  }


  getItemPrice= (quantity,item, bool) =>{
    // console.log(item)
    // console.log(bool)
    // let checkout=[]
    
    if(bool== "true"){
      // checkout.push(item)
      this.props.add(item)
      this.setState(prevState => {
        return{
          total: prevState.total+(item.price * quantity),
          // checkoutCart: checkout
        }
      })
    }else{
      this.props.remove(item)
      // checkout.slice()
      this.setState(prevState => {
        return{
          total:prevState.total-(item.price * quantity)
        }
      })
    }
    console.log(this.props.checkout)

    
  }
  
  
  deleteHandler= (id) => {
    this.props.delete(id)
    console.log(id)
  }

  counterHandler=(counter)=>{
    console.log(counter)
    this.setState({
      counter:counter
    })
  }
 
  
  
  

  render() {
// ================= Button Logic ==============================
let button = (
  <View style={ styles.totalNav}>
  <OrderButton checkout={this.props.checkout} label='Place Order' price={this.state.total!==0?this.state.total:0}/>
  </View>
)

if(this.props.checkout.length != 0){
  
 button= (<TouchableOpacity onPress={()=> this.totalHandler()}>
   <View style={ styles.totalNav}>
  <OrderButton checkout={this.props.checkout} label='Place Order' price={this.state.total!==0?this.state.total:0}/>
  </View>
   </TouchableOpacity>)
  
}
// ==============================================================

// =================Conditonal render of component=================
    if(!this.props.auth){
      return(
        <Auth/>
      )
  }else if(this.props.cartItems.length == 0){
    return (
      <Text>Sorry cart empty</Text>
    );
      }
      else{
        return(
          <View style={styles.container}>

          <ScrollView >
          <View style={styles.scrollContainer}>
          {this.props.cartItems.map((cartItems, index)=>(
            <CartList getCounter={this.counterHandler} delete={this.deleteHandler} getPrice={this.getItemPrice} cartItems={cartItems} key={index}/> )
            )}
          </View>
         
          </ScrollView>
          {button}
          </View>
        )
      }
  }
}
// ========================================================

const styles= StyleSheet.create({
    container:{
        flex: 1,
        
        // padding: 10,
      

    },
    scrollContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:5
        // borderWidth:1,
        // borderColor: "red",
    },
    totalNav:{
      alignItems: 'center',
      height: 50,
      width: '100%',
      marginBottom: 4,

    },
  
    selectAll:{
      width: "60%",
      height: '100%',
      borderWidth: 0.5,
      borderColor: "black",
      alignItems: 'center',
      justifyContent: 'center'
    },

   
    // label:{
    //   justifyContent: 'center',
    //   alignItems: 'center',
    // }
})


const mapStateToProps = state =>{
  return{
      cartItems: state.order.cart,
      checkout: state.cart.checkoutCart,
      auth: state.auth.login
  }
}

const mapDispatchToProps = dispatch => {
  return{
    add: (item) => dispatch(addItem(item)),
    remove: (item) => dispatch(removeItem(item)),
    delete:(id) => dispatch(removeFromCart(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartContainer)