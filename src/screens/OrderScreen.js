import React, { Component } from 'react'
import {connect} from "react-redux"
import {  View, ImageBackground, StyleSheet, Button, Dimensions } from 'react-native'
import ItemData from "../Components/orderScreenComp/itemData"
import ButtonSlide from "../Components/orderScreenComp/button"
import Customize  from "../Components/orderScreenComp/customize"
import {clearSelected,updateFlavor,updateSize} from "../Store/Actions/index"
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
  total: null
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
        // console.log(bool)
          i=options.price
        // if(bool){
          this.setState(prevState=>{
            return{
              ...prevState,
              flavor:i,
              total:i+prevState.size+prevState.toppings
            }
          })
          if(bool){
            console.log("I need to add")
        }else{
          console.log("I need to subtract")
        }
        
        // }else{
        //   this.setState(prevState=>{
        //     return{
        //       ...prevState,
        //       flavor:prevState.flavor,
        //       total:prevState.flavor+prevState.size+prevState.toppings
        //     }
        //   })
        // }
       
        break;

        case "size":
        this.props.sizeUpdate(options.name)
        i=options.price
        this.setState(prevState=>{
          return{
            ...prevState,
            size:i,
            total:prevState.flavor+i+prevState.toppings
          }
        })
        break;
        
        case "toppings":
        let added;
        let newHolder=[]
        let holder
        //the holder variable below holds the value of the current state of the toppings in the component state
        holder=this.state.toppingsholder
         holder.push(options.price)
         console.log(holder)
         newHolder=holder
        added = add(newHolder)
        console.log("added: "+ added)
        
        this.setState(prevState=>{
          return{
            ...prevState,
            toppingsholder:newHolder,
            toppings:added,
            total:prevState.flavor+prevState.size+added
          }
        })
        break;
        default:
        return null
      }
      
     

      // console.log(options)
      // console.log(options.price)
      // switch()
    }
    componentWillMount = () => {
      // console.log(this.props.selectedCake)
      const price = analyse(this.props.selectedCake.flavor,this.props.selectedCake.size)
      let holder= toppingsfunc(this.props.selectedCake.toppings)
      // console.log(Array.isArray(holder))
      // console.log(holder)
      // console.log(holder.push(8))
      // console.log(holder)
      // console.log("CWM holder: "+holder)
      let added = add(holder)
      let flavor= price[0]
      let size= price[1]
      let toppings= added
      // console.log()
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
      // this.props.update(price)

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
    flavUpdate: (flavor) => dispatch(updateFlavor(flavor)),
    sizeUpdate: (size) => dispatch(updateSize(size))
    // update: (price)=> dispatch(updatePrice(price))

  }
}

const mapStateToProps = state =>{
  return{
    selected: state.order.selected,
    highlight:state.order.Rxhiglighted
    // calcPrice:state.cart.total
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(OrderScreen)