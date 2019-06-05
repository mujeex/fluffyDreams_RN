
import React, { Component } from 'react'
import { View ,TouchableOpacity,StyleSheet,Image,Text,Platform} from 'react-native'
// import Icon from "react-native-vector-icons/Ionicons"
import ItemCounter from "./itemCounter"
import AvenirHeavy from '../UI/AvenirHeavy'
import AvenirMedium from '../UI/AvenirMedium'
import AvenirLight from '../UI/AvenirLight'
import AvenirBlack from '../UI/AvenirBlack'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


 class CartList extends Component {
    
     state={
         highlight: false,
         priceHandler: null,
         counter: 1,

     }
     
     highlightHandler = cartItems => {
         if(!this.state.highlight){
            this.setState({
                highlight: true,
                priceHandler: this.props.getPrice(this.state.counter,cartItems,"true") 
            })
         }else{
             this.setState({
                 highlight: false,
                 priceHandler: this.props.getPrice(this.state.counter,cartItems,"false")
             })
         }
       
     }
    counterControl = (type) =>{
        if(type == 'increase'){

            this.setState({
                counter: this.state.counter+1 ,
                priceHandler: this.props.getCounter(this.state.counter+1)
            })
        }else{
            if(this.state.counter != 1)
            this.setState({
                counter: this.state.counter-1, 
                priceHandler: this.props.getCounter(this.state.counter-1)
            })
        }
    }

    

   
    


  render() {
    //   const {this.props.cartItems}=this.props
    let trashButton=(
        <TouchableOpacity onPress={()=>this.props.delete(this.props.cartItems.id)}>
        {/* <FontAwesome5 name={'trash-alt'} size={20} regular/> */}
        <Image source={require('../../Assets/trashbut.jpg')} style={styles.trash}/>
        </TouchableOpacity> 
    )

    if(this.state.highlight){
        trashButton=(
            <View>
               <FontAwesome5 name={'trash-alt'} size={20} regular/>  
        </View>
        )
    }
      
        return (
            <View style={styles.itemContainer}>
      
               
                   <View style={this.state.highlight?styles.rowWithHighlight:styles.rowNoHighlight}>
                   <TouchableOpacity onPress={()=> this.highlightHandler( this.props.cartItems)}>
                   <View style={this.state.highlight?styles.selectionButtonFilled:styles.selectionButton}></View>
                   </TouchableOpacity>

                  <View style={styles.imageContainer}>
                      <Image source={this.props.cartItems.image} style={styles.image}/>
                  </View>

                  <View style={styles.detailsContainer}>

                {/* first block */}
                  <View style={styles.firstBlock}>
                  <AvenirHeavy Styles={styles.name}>{this.props.cartItems.name}</AvenirHeavy>
                  <AvenirBlack Styles={{color:"#0A539B", fontFamily: 'Avenir-BlackOblique',fontSize: 20}}>${this.props.cartItems.price}</AvenirBlack>
                </View>

                {/* second block */}
                <View style={styles.secondBlock}>
                <View style={styles.sizeContainer} >
                    <AvenirLight>size: </AvenirLight>
                <AvenirMedium>{this.props.cartItems.size}</AvenirMedium>
                </View >

                 <View style={styles.flavorContainer} >
                <AvenirLight>flavor: </AvenirLight>
                <AvenirMedium>{this.props.cartItems.flavor}</AvenirMedium>
                </View>

                <View style={styles.toppingsContainer} >
                <AvenirLight>toppings: </AvenirLight>
                <View style={styles.toppingsDisplay}>
                  {this.props.cartItems.toppings.map((toppings,index) =>(
                      <AvenirMedium key={index} style={{marginLeft: 5,}}>{toppings}. </AvenirMedium>
                  )  )}
                  </View>

                </View>
                  </View>

                 {/* third block */}
                    <View style={styles.thirdBlock}>
                  <ItemCounter highlight={this.state.highlight} counter= {this.state.counter} activeButton={this.state.highlight} counterControl={this.counterControl}/>
                  <View style={styles.buttonContainer}>
                  {trashButton}
                  </View>
                  
                    </View>
                 
                </View>
                   
                  </View>

                   </View>
                
          )
      }
   
  }


const styles= StyleSheet.create({

    itemContainer:{
        width:'95%',
        // borderWidth: 1,
        // borderColor: "black",
        height: 140,
        justifyContent:"center",
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 15,
        alignSelf: 'center',
        shadowColor: "#0A539B",
        shadowOpacity: 0.2,
        shadowOffset: {
            height: 3
        },
      
        backgroundColor:'white'
        // marginLeft: 5,
        // marginRight: 5
    },
    rowNoHighlight:{
        width:'100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:"center",
        borderRadius: 15,
    },
    rowWithHighlight:{
        width:'100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:"center",
        backgroundColor: "#EDF2F7",
        borderRadius: 15,

    },
    selectionButton:{
        height : 15,
        width: 15,
        borderRadius: 50,
        borderWidth: 0.5,
        borderColor: "#0A539B",
        marginLeft: 2,
    },
    selectionButtonFilled:{
        height : 15,
        width: 15,
        borderRadius: 50,
        // borderWidth: 0.5,
        // borderColor: "black",
        backgroundColor: "#0A539B",
        marginLeft:2
    },

    imageContainer:{
        flex:3,
        // height: '90%',
        margin: 5,
        borderRadius: 15,
    },
    image:{
        height:'100%',
        width:'100%',
        resizeMode:'cover',
        borderRadius: 15,
    },
    detailsContainer:{
        flex: 7,
        // height: '100%',
        // borderWidth: 1,
        // borderColor: "black",
        justifyContent:"center",
        alignItems: 'flex-start',
        paddingLeft: 1

    },
    details:{
        flex:3,
        justifyContent: "space-around",
        alignItems: 'center',
        paddingLeft:5
    },
    toppingsDisplay:{
        flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent:"flex-start"
    },
    firstBlock:{
        flex:2,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        // borderWidth: 0.5,
        // borderColor: 'red',
        width: '100%',
        paddingTop: 5,
        paddingRight: 7,
    },
    secondBlock:{
        flex: 5.5,
        // justifyContent:'space-around',
        width: '100%',
        // borderWidth: 0.5,
        // borderColor: 'red',
        paddingTop: 2,

    },
    thirdBlock:{
        flex:2.5,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        // borderWidth: 0.5,
        // borderColor: 'red',
        width: '100%'

    },
    flavorContainer:{
        // flex:1,
        width: '100%',
        height:'29%',
        flexDirection: 'row',
        justifyContent:'flex-start',
        // alignItems: 'center',
        // borderWidth: 0.5,
        // borderColor: 'red',
    },
    sizeContainer:{
        // flex:1,
        width: '100%',
        height:'29%',
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems: 'center',
    },
    toppingsContainer:{
        // flex:1,
        width: '100%',
        height:'29%',
        flexDirection: 'row',
        justifyContent:'flex-start',
        // alignItems: 'center',
    },
    buttonContainer:{

        marginRight: 2,
        width:50,
        height:'100%',
        justifyContent:'center',
        alignItems: 'center',
    },
    name:{
        fontSize: 18,
    },
    trash:{
    
    }

})

export default CartList