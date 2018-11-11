
import React, { Component } from 'react'
import { View ,TouchableOpacity,StyleSheet,Image,Text,Platform} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons"
import ItemCounter from "./itemCounter"


 class CartList extends Component {
    
     state={
         highlight: false,
         priceHandler: null,
         counter: 1
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
                counter: this.state.counter+1
            })
        }else{
            if(this.state.counter != 1)
            this.setState({
                counter: this.state.counter-1
            })
        }

    }


  render() {
    //   const {this.props.cartItems}=this.props
    let trashButton=(
        <TouchableOpacity onPress={()=>this.props.delete(this.props.cartItems.id)}>
        <Icon name={Platform.OS=="android"?"md-trash": "ios-trash"} size={25}/>
        </TouchableOpacity> 
    )

    if(this.state.highlight){
        trashButton=(
            <View>
            <Icon name={Platform.OS=="android"?"md-trash": "ios-trash"} size={25}/> 
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
                  <View style={styles.details}>
                  <Text>{this.props.cartItems.name}</Text>
                  <Text>{this.props.cartItems.price}</Text>
                  <Text>{this.props.cartItems.size}</Text>
                  <Text>{this.props.cartItems.flavor}</Text>
                  </View>
                  <View style={styles.toppingsDisplay}>
                  {this.props.cartItems.toppings.map((toppings,index) =>(
                      <Text key={index} style={{marginLeft: 5,}}>{toppings}</Text>
                  )  )}
                  </View>

                    <View style={styles.edits}>
                  <ItemCounter counter= {this.state.counter} activeButton={this.state.highlight} counterControl={this.counterControl}/>
                  {trashButton}
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
        borderWidth: 1,
        borderColor: "black",
        height: 120,
        justifyContent:"center",
        alignItems: 'center',
        // marginLeft: 5,
        // marginRight: 5
    },
    rowNoHighlight:{
        width:'100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:"center",
        padding: 5

    },
    rowWithHighlight:{
        width:'100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:"center",
        padding: 5,
        backgroundColor: "grey"

    },
    selectionButton:{
        height : 15,
        width: 15,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "black"
    },
    selectionButtonFilled:{
        height : 15,
        width: 15,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "red"
    },

    imageContainer:{
        flex:3,
        height: '90%',
        
        margin: 5,
    },
    image:{
        height:'100%',
        width:'100%',
        resizeMode:'cover',
    },
    detailsContainer:{
        flex: 7,
        height: '95%',
        borderWidth: 1,
        borderColor: "black",
        justifyContent:"center",
        alignItems: 'flex-start',
        padding: 5

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
        alignItems: 'center',
        justifyContent:"space-around"
    }
    ,
    edits:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        width:'100%',

    }

})

export default CartList