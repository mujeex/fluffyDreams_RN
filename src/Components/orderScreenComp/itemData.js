import React from 'react';
import {View, Text, StyleSheet,Button} from "react-native"

const ItemData = (props) => (

    <View style={styles.wrapper}>

     <View style={styles.backButton}>
        <Button onPress={()=> props.onPress()} title={props.title}/>
      </View>

    <View style={styles.itemHeader}>

    <View style={{height: 80,  borderColor: "red", justifyContent: "center"}}>
    <Text style={styles.name}>{props.data.name}</Text>
    </View>
    

    <View style={{flexDirection: 'row', }}>
    <Text style={styles.dollars}>$</Text>
    <Text style={styles.price}>{props.price}</Text>
    </View>
  
    </View>

    <View style={styles.itemDetails}>
    <View>
    <Text style={styles.flavor}>{props.data.flavor}</Text>
    <Text style={styles.size}>{props.data.size}</Text>
    </View>
    <View style= {styles.toppingsContainer}>
    {props.data.toppings.map( (toppings, i) => (
        <Text style={styles.toppingsItem} key={i}>{toppings}</Text>
    )
    )}
    </View>

    </View>

    </View>
)

   



const styles= StyleSheet.create({
    wrapper:{
        height: 200,
        width: '95%',
        backgroundColor: "gray",
        borderRadius: 10,
        alignItems: 'center',
    },
    backButton:{

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
        width: "80%"

    },
    toppingsContainer:{
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: "space-around",
        flexWrap: 'wrap',
    },
    toppingsItem:{
        color: "white",
        fontSize: 16
    },
    name:{
        fontSize: 35,
        color: "white",
        fontWeight: '900',
        // paddingLeft: 12,
        width: '100%',
        textAlign: 'center'
    },
    price:{
        fontSize: 30,
        color: "#64abff",
        fontWeight: "800",
        paddingRight: 10,
    },
    dollars:{
        fontWeight: "800",
        fontSize: 30,
        color:"#64abff"
    },
    flavor:{
        color: "white",
        fontSize: 18
    },
    size:{
        color: "white",
        fontSize: 18
    }

})

export default ItemData