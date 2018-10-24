
import React, { Component } from 'react'
import { View ,TouchableOpacity,StyleSheet,Image,Text} from 'react-native'


 class CartList extends Component {
     componentDidMount = () => {
       console.log("do something")
     };
     state={
         highlight: false,
         console: null
     }
     
     highlightHandler = cartItems => {
         if(!this.state.highlight){
            this.setState({
                highlight: true,
                console: this.props.getPrice(cartItems,"true")
            })
         }else{
             this.setState({
                 highlight: false,
                 console: this.props.getPrice(cartItems,"false")
             })
         }
       
     }

  render() {
      const {cartItems}=this.props
      
        return (
            <View style={styles.itemContainer}>
      
               
                   <View style={this.state.highlight?styles.rowWithHighlight:styles.rowNoHighlight}>
                   <TouchableOpacity onPress={()=> this.highlightHandler( cartItems)}>
                   <View style={this.state.highlight?styles.selectionButtonFilled:styles.selectionButton}></View>
                   </TouchableOpacity>
                  <View style={styles.imageContainer}>
                      <Image source={cartItems.image} style={styles.image}/>
                  </View>
                  <View style={styles.detailsContainer}>
                  <View style={styles.details}>
                  <Text>{cartItems.name}</Text>
                  <Text>{cartItems.price}</Text>
                  <Text>{cartItems.size}</Text>
                  <Text>{cartItems.flavor}</Text>
                  </View>
                  <View style={styles.toppingsDisplay}>
                  {cartItems.toppings.map((toppings,index) =>(
                      <Text key={index} style={{marginLeft: 5,}}>{toppings}</Text>
                  )  )}
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
        height: '90%',
        borderWidth: 1,
        borderColor: "black",
        justifyContent:"center",
        alignItems: 'flex-start',
        padding: 10

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

})

export default CartList