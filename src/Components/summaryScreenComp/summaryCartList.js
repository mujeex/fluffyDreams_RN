import React from 'react';
import { View ,StyleSheet,Image,Text} from 'react-native'
import AvenirHeavy from '../UI/AvenirHeavy'
import AvenirLight from '../UI/AvenirLight'
import AvenirBlack from '../UI/AvenirBlack'

const SummaryList = (props) =>(

    <View style={styles.itemContainer}>
      
    <View style={styles.rowNoHighlight}>

   <View style={styles.imageContainer}>
       <Image source={props.cartItems.image} style={styles.image}/>
   </View>

   <View style={styles.detailsContainer}>


    <View style={styles.firstBlock}>
    <AvenirHeavy Styles={{fontSize: 20,marginLeft: 5,}}>{props.cartItems.name}</AvenirHeavy>
   <AvenirBlack Styles={{fontSize: 25,fontFamily: 'Avenir-BlackOblique',color:"#0A539B",marginRight: 5,}}>${props.cartItems.price}</AvenirBlack>
    </View>

    <View style={styles.secondBlock}>

    <View style={styles.flavorContainer}>
    <AvenirLight>flavor: </AvenirLight>
    <AvenirHeavy>{props.cartItems.flavor}</AvenirHeavy>
    </View>

    <View style={styles.sizeContainer}>
    <AvenirLight>size: </AvenirLight>
    <AvenirHeavy>{props.cartItems.size}</AvenirHeavy>
    </View>

    <View style={styles.toppingsContainer}>
    <AvenirLight>toppings: </AvenirLight>
    {props.cartItems.toppings.map((toppings,index) =>(
       <AvenirHeavy key={index} style={{marginLeft: 5,}}>{toppings}</AvenirHeavy>
   )  )}
    </View>
   
   </View>

   <View style={styles.toppingsDisplay}>
  </View>
   </View>
    </View>
 
</View>
)

const styles= StyleSheet.create({

    itemContainer:{
        width:'100%',
        // borderWidth: 1,
        // borderColor: "black",
        height: 120,
        justifyContent:"center",
        alignItems: 'center',
        shadowColor: "#0A539B",
        shadowOpacity: 0.2,
        shadowOffset: {
            height: 3
        },
      
        backgroundColor:'white',
        marginTop: 10
    },
    rowNoHighlight:{
        width:'100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:"center",
        backgroundColor: "#EDF2F7"
        // padding: 5

    },
   

    imageContainer:{
        flex:3,
        height: '90%',
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
        height: '100%',
        // borderWidth: 1,
        // borderColor: "black",
        justifyContent:"center",
        // alignItems: 'flex-start',
        // padding: 10

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
    },
    firstBlock:{
        flex: 3,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'flex-start',
        paddingTop: 5,
        paddingRight: 2,
        // borderColor: 'red',
        // borderWidth: 1,
        // width: '100%'
    },
    secondBlock:{
        flex: 7,
        // justifyContent:'flex-start',
        alignItems:'flex-start',
        paddingLeft: 10,
    },
    
    flavorContainer:{
        width: '100%',
        height: '25%',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    sizeContainer:{
        width: '100%',
        height: '25%',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    toppingsContainer:{
        width: '100%',
        height: '35%',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    }

})

export default SummaryList