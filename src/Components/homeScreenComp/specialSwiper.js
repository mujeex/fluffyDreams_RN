import React from 'react'
import {View, StyleSheet, Image} from "react-native"
import Swiper from "react-native-swiper"

const swiper =(props) =>(
    <View style={styles.SwiperContainer}>
        <Swiper  autoplay= {true}>
            <View style={styles.slides} >
              <Image style={styles.images} source={require('../../Assets/bake-baked-blur-461279.jpg')}/>
            </View>
            <View style={styles.slides} >
            <Image  style={styles.images}  source={require('../../Assets/berries-berry-cake-434243.jpg')}/>
            </View>
            <View  style= {styles.slides}>
            <Image style={styles.images}  source={require('../../Assets/blur-cake-cheesecake-219293.jpg')}/>
            </View>
            </Swiper>
        </View>
)

const styles= StyleSheet.create({
    SwiperContainer:{
        height: 110,
        marginTop: 5,
        backgroundColor: "gray"
        
      },
      slides:{
        flex: 1,
        backgroundColor: "red",
        height:null,
        width: null,
        // justifyContent: "center",
        // alignItems: "center",
    
      },
      images:{
        
        height: "100%",
        width: "100%",
        resizeMode: "cover"
      },
})

export default swiper