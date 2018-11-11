import React, { Component } from 'react'
import {connect} from "react-redux"
import { View, ImageBackground, StyleSheet, Dimensions } from 'react-native'
import ItemData from "../Components/orderScreenComp/itemData"
import ButtonSlide from "../Components/orderScreenComp/button"
import Customize  from "../Components/orderScreenComp/customize"
import {clearSelected,updateFlavor,updateSize,pushToCart,updateToppings, ReUpdateToppings,UpdatedPrice} from "../Store/Actions/index"
import {analyse,add,toppingsfunc} from "../priceAnalyser/analyser"




const HEIGHT= Dimensions.get('window').height

 class OrderScreen extends Component {

    static navigatorStyle = {
        drawUnderNavBar: true,
        navBarTranslucent: true,
        navBarHidden: true,
          tabBarHidden:true,
         drawUnderTabBar: true
      };

state={
  toppingsholder:null,
  flavor:null,
  size:null,
  toppings:null,
  total: null,
  priceUpdate:null

}

addToCartHandler = () => {
  // price variable isn't being updated from the redux store because the current capabilities of redux isn't
  //enough to accomodate the logic needed for it's update. Hence, it got stored in the components local state and it is
  // now going to be pushed to the redux store before the whole updated customized object by the user gets pushed to the store.

 
  // console.log(this.props.selected)
  this.props.pushCart(this.props.selected)

  
}

    popNavigation = () => {
      // this.props.clear()
        this.props.navigator.pop()
    }
    //function for changing the price of order in the state
    priceHandler = (options, bool) => {
      let i;
      switch(options.id){
      
        case "flavor":
        //dispatch action to update the redux selected item
        console.log(options.name)
        this.props.flavUpdate(options.name)
       
          i=options.price
        if(bool){
          console.log("true: "+ this.state.total)
          this.setState(prevState=>{
            return{
              ...prevState,
              flavor:i,
              total:i+prevState.size+prevState.toppings,
              priceUpdate: this.props.updPrice(i+prevState.size+prevState.toppings)
            }
          })
        
        }
        break;

        case "size":
        this.props.sizeUpdate(options.name)
        i=options.price
        this.setState(prevState=>{
          return{
            ...prevState,
            size:i,
            total:prevState.flavor+i+prevState.toppings,
            priceUpdate: this.props.updPrice(prevState.flavor+i+prevState.toppings)
          }
        })
        break;
        
        case "toppings":
        // console.log(options.name)
        let added;
        let newHolder=[]
        let holder
        //the holder variable below holds the value of the current state of the toppings in the component state
        holder=this.state.toppingsholder
         
        if(bool){
          let exist= this.props.selected.toppings.filter(selected => selected == options.name)
          if(exist == 0){
            holder.push(options.price)
            newHolder=holder
            added = add(newHolder)
            this.setState(prevState=>{
             return{
               ...prevState,
               toppingsholder:newHolder,
               toppings:added,
               total:prevState.flavor+prevState.size+added,
               priceUpdate: this.props.updPrice(prevState.flavor+prevState.size+added)
             }
           }) 
          }
          this.props.toppingsUpdate(options.name)
        }else{
          // console.log('before slice: '+ holder)
          let index= holder.indexOf(options.price)
          if(index>-1){
            holder.splice(index,1)
          }
          newHolder=holder
          console.log('After slice: '+ holder)
          added=add(newHolder)
          console.log("Added after slice: "+ added)
          this.setState(prevState=>{
            return{
              ...prevState,
              toppingsholder:newHolder,
              toppings:added,
              total:prevState.flavor+prevState.size+added,
              priceUpdate: this.props.updPrice(prevState.flavor+prevState.size+added)
            }
          }) 
          this.props.ReUpdate(options.name)
        }
        
        break;
        default:
        return null
      }
      
      

    }
    componentWillMount = () => {
      // console.log(this.props.selectedCake)
      const price = analyse(this.props.selectedCake.flavor,this.props.selectedCake.size)
      let holder= toppingsfunc(this.props.selectedCake.toppings)
      let added = add(holder)
      let flavor= price[0]
      let size= price[1]
      let toppings= added

      this.setState(prevState=>{
        return{
          ...prevState,
          toppingsholder:holder,
          flavor:flavor,
          size:size,
          toppings:toppings,
          total: flavor+size+toppings
          // +added
        }

      })

      console.log(this.state.total)
    };
    componentDidMount = () => {
      
    };
    
  
  

  render() {
    return (
      <ImageBackground source={this.props.selected.image} style={styles.backgroundImage}>

      <View style={styles.content}>
      <ItemData  title= "Back" onPress={this.popNavigation} data={this.props.selected} price={this.state.total}/>
      </View>

      <View style={styles.customize} >
          <Customize customs={this.props.Customs} cakes={this.props.selected} priceHandler={this.priceHandler}/>
      </View>

      <View style= {styles.wrapper}>
       <ButtonSlide onPress={()=>this.addToCartHandler()}/>
      </View>
 
      </ImageBackground>
    )
  }
}




const styles= StyleSheet.create({
    content: {
      // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
       
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
  }
   
})

const mapDispatchToProps = dispatch => {
  return{
    clear: ()=> dispatch(clearSelected()),
    flavUpdate: (flavor) => dispatch(updateFlavor(flavor)),
    sizeUpdate: (size) => dispatch(updateSize(size)),
    toppingsUpdate: (topping)=> dispatch(updateToppings(topping)),
    ReUpdate: (topping) => dispatch(ReUpdateToppings(topping)),
    pushCart: (item)=> dispatch(pushToCart(item)),
    updPrice: (price)=> dispatch(UpdatedPrice(price))
  }
}

const mapStateToProps = state =>{
  return{
    selected: state.order.selected,
    highlight:state.order.Rxhiglighted,
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(OrderScreen)