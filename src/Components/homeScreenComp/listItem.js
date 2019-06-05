import React from 'react'
import {View, Image, Text, StyleSheet, TouchableOpacity, Dimensions} from "react-native"
const Width= Dimensions.get('window').width
import AvenirHeavy from '../UI/AvenirHeavy'
import AvenirMedium from '../UI/AvenirMedium'
import AvenirLight from '../UI/AvenirLight'
import AvenirBlack from '../UI/AvenirBlack'
// import {robotoWeights} from 'react-native-typography'


const listItem = (props) => (

  <TouchableOpacity style={styles.applyShadow} onPress={() => props.onPress(props.cakes.id)}>
<View style= {styles.itemList}>
        <View style={{flex:2, borderTopRightRadius: 10, borderTopLeftRadius: 10}}>

        <Image style= {{height: "100%", width: "100%", resizeMode:"cover",borderRadius: 15,}} source={props.cakes.image}/>
          
        </View>

        <View style={{flex:1}}>

        <View style={styles.top}>
        <AvenirHeavy Styles={styles.name} >{props.cakes.name}</AvenirHeavy>
        <AvenirBlack Styles={styles.price} >${props.cakes.price}</AvenirBlack>
        </View>

       <View style={styles.bottom}>
       <View style={styles.flavorContainer} >
         <AvenirLight Styles={styles.label}>flavor: </AvenirLight>
       <AvenirMedium Styles={styles.labelChildren}>{props.cakes.flavor}</AvenirMedium>
       </View>
     
       <View style={styles.sizeContainer}>
         <AvenirLight Styles={styles.label}>size: </AvenirLight>
       <AvenirMedium Styles={styles.labelChildren}>{props.cakes.size}</AvenirMedium>
       </View>

       <View style={styles.toppingsContainer}>
         <AvenirLight Styles={styles.label}>toppings: </AvenirLight>
         {props.cakes.toppings.map((topping,index)=>(
           <AvenirMedium Styles={styles.labelChildren} key={index}>{topping}. </AvenirMedium>
         ))}
       
       </View>
       </View>
       
        </View>
      </View>
  </TouchableOpacity>

)

const styles = StyleSheet.create({
    itemList:{
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 5,
         height: 230, 
         width: Width/2.1,
        //  borderWidth: 1,
        //   borderColor: "black",
          borderRadius: 15,
          backgroundColor: 'white'
        },

        applyShadow:{
          shadowColor: '#0A539B',
          shadowOffset: {
            width:0,
            height:2
          },
          shadowOpacity: 0.4,
        }
        ,
        top:{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 5,
          flex:3,
          // borderBottomColor: 'gray',
          // borderBottomWidth: 0.1,
          marginBottom: 5,
        },
        name:{
          paddingLeft: 10,
          fontWeight:'bold',
          fontSize: 14,

        },
        price:{
          marginRight: 10,
          // fontWeight: '100',
          fontSize: 16,
          fontFamily: 'Avenir-BlackOblique',
          color: '#0A539B'
        },
        bottom:{
          justifyContent: 'flex-start',
          marginTop: 5,
          flex:7,
          paddingBottom: 3,
        },
        flavorContainer:{
          flex:3,
          flexDirection: 'row',
        },
        sizeContainer:{
          flex:3,
          flexDirection: 'row',
        },
        toppingsContainer:{
          flex:4,
          flexDirection: 'row',
        },
        label:{
          fontSize:10,
          paddingLeft: 10,
          fontWeight: '100'
        },
        labelChildren:{
          fontSize: 11,
          fontWeight: '500'
        }

})

export default listItem