import React from 'react';
import { View ,StyleSheet,Image,Text} from 'react-native'

const SummaryList = (props) =>(

    <View style={styles.itemContainer}>
      
    <View style={styles.rowNoHighlight}>

   <View style={styles.imageContainer}>
       <Image source={props.cartItems.image} style={styles.image}/>
   </View>
   <View style={styles.detailsContainer}>
   <View style={styles.details}>
   <Text>{props.cartItems.name}</Text>
   <Text>{props.cartItems.price}</Text>
   <Text>{props.cartItems.size}</Text>
   <Text>{props.cartItems.flavor}</Text>
   </View>
   <View style={styles.toppingsDisplay}>
   {props.cartItems.toppings.map((toppings,index) =>(
       <Text key={index} style={{marginLeft: 5,}}>{toppings}</Text>
   )  )}
   </View>
   </View>
    </View>
 
</View>
)

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

export default SummaryList