import React, { Component } from 'react'
import {connect} from "react-redux"
import { View, ImageBackground, StyleSheet, Dimensions, Animated } from 'react-native'
import ItemData from "../Components/orderScreenComp/itemData"
import ButtonSlide from "../Components/orderScreenComp/button"
import FlexButton from '../Components/UI/FlexButton'
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
      constructor (){
        super()
        this.slideAnim = new Animated.Value(this.state.isShown?1:0)
        console.log(this.state.isShown)
      }

state={
  toppingsholder:null,
  flavor:null,
  size:null,
  toppings:null,
  total: null,
  priceUpdate:null,
  // slideAnim : new Animated.Value(0),
  isShown:false
}



addToCartHandler = () => {
  // price variable isn't being updated from the redux store because the current capabilities of redux isn't
  //enough to accomodate the logic needed for it's update. Hence, it got stored in the components local state and it is
  // now going to be pushed to the redux store before the whole updated customized object by the user gets pushed to the store.
  // console.log(this.props.selected)
if(!this.props.auth){
  this.props.navigator.push({
    screen: "fluffy.ProfileInfoScreen",
    title: "Login",
    passProps:{
      auth:this.props.auth
    }
  })
}else{
  this.props.pushCart(this.props.selected)
}
  

  
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

      // console.log(this.state.total)
    };
   
    slideUpHandler=()=>{
      console.log(this.slideAnim)
        this.setState({
          isShown: !this.state.isShown,
        },
        ()=> Animated.timing(
          this.slideAnim,{
            toValue: this.state.isShown?0:1,
            duration: 1000,
            useNativeDriver:true
          }
        ).start()
        ) 
    }
  render() {
    let slide=this.slideAnim.interpolate(
      {
        inputRange:[0,1],
        outputRange:[270,0]
      }
    )  
    return (
      <ImageBackground source={this.props.selected.image} style={styles.backgroundImage}>

      <View style={styles.content}>
      <ItemData  title= "Back" onPress={this.popNavigation} data={this.props.selected} price={this.state.total}/>
      </View>

      <Animated.View style={{ width: '100%', marginTop: 10,   height: '55%'  , transform: [{translateY: slide}]}} >
          <Customize isShown={this.state.isShown} onPress={this.slideUpHandler} customs={this.props.Customs} cakes={this.props.selected} priceHandler={this.priceHandler}/>
      </Animated.View>

      <View style= {styles.wrapper}>
      <FlexButton  label='Add To Cart' onPress={this.addToCartHandler}/>
       {/* <ButtonSlide onPress={()=>this.addToCartHandler()}/> */}
      </View>

      </ImageBackground>
    )
  }
}




const styles= StyleSheet.create({
    content: {
      // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '45%'
       
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
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: HEIGHT-50,
    backgroundColor: "white",
    // borderRadius: 10,
    alignSelf: 'center',
    height: 50
  },
  // customize:{
  //   width: '100%',
  //   marginTop: 10,  
  //   height: '55%'  ,
  // }
  button:{
   
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
    auth: state.auth.login
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(OrderScreen)