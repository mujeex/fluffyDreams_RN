import React from 'react';
import {View, Text, StyleSheet,Button,TouchableOpacity} from "react-native"
import CartIcon from "../cartScreenComp/cartIcon"
import AvenirMedium from '../UI/AvenirMedium'
import AvenirHeavy from '../UI/AvenirHeavy'
import AvenirLight from '../UI/AvenirLight'
import AvenirBlack from '../UI/AvenirBlack'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const ItemData = (props) => (

    <View style={styles.wrapper}>

     <View style={styles.backButton}>
    <TouchableOpacity  onPress={()=> props.onPress()}><FontAwesome5 name={'angle-left'} size={27}/></TouchableOpacity>
        <CartIcon/>
      </View>

    <View style={styles.itemHeader}>

    <View style={{height: 80,  borderColor: "red", justifyContent: "center"}}>
    {/* <Text style={styles.name}>{props.data.name}</Text> */}
    <AvenirMedium Styles={styles.name}>{props.data.name}</AvenirMedium>
    </View>
    

    <View style={{flexDirection: 'row', }}>
    <AvenirBlack Styles={styles.dollars}>$</AvenirBlack>
    <AvenirBlack Styles={styles.price}>{props.price}</AvenirBlack>
    </View>
  
    </View>

    <View style={styles.itemDetails}>

    <View style={styles.ingridientContainers}>
         <AvenirLight Styles={styles.label}>flavor: </AvenirLight>
       <AvenirMedium Styles={styles.labelChildren}>{props.data.flavor}</AvenirMedium>
       </View>

       <View style={styles.ingridientContainers}>
         <AvenirLight Styles={styles.label}>size: </AvenirLight>
       <AvenirMedium Styles={styles.labelChildren}>{props.data.size}</AvenirMedium>
       </View>

       <View style= {styles.ingridientContainers}>
       <AvenirLight Styles={styles.label}>toppings: </AvenirLight>
    {props.data.toppings.map((toppings, i) => (
        <AvenirMedium Styles={styles.toppingsItem} key={i}>{toppings}.  </AvenirMedium>
    )
    )}
    </View>

    </View>
   

    </View>
)

   



const styles= StyleSheet.create({
    wrapper:{
        height: 210,
        width: '95%',
        backgroundColor: "white",
        borderRadius: 10,
        alignItems: 'center',
    },
    backButton:{
        flexDirection: 'row',
        width: '100%',
        height: 40,
        // borderWidth: 1,
        // borderColor: "black",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 5
    },
    itemHeader:{
        flex: 1,
       flexDirection: 'row',
       justifyContent: "space-between",
       alignItems: 'center',
    //    borderWidth: 1,
    //    borderColor: "red", 
       width: '100%'

    },
    itemDetails:{
        flex: 2,
        width: "100%"

    },
    ingridientContainers:{
        flexDirection: 'row',
        flex:1,
        flexWrap: 'wrap',
        marginLeft: 10
    },
    toppingsContainer:{
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: "space-around",
        flexWrap: 'wrap',
    },
    toppingsItem:{
        color: "black",
        fontSize: 16
    },
    name:{
        fontSize: 27,
        color: "black",
        // fontWeight: '900',
        paddingLeft: 10,
        width: '100%',
        textAlign: 'center',

    },
    price:{
        fontSize: 30,
        color: "#0A539B",
        fontWeight: "800",
        paddingRight: 12,
        fontFamily:'Avenir-BlackOblique'
    },
    dollars:{

        fontSize: 30,
        color:"#0A539B"
    },
    label:{
        color: "black",
        fontSize: 15
    },
    labelChildren:{
        color: "black",
        fontSize: 18,

    }

})

export default ItemData