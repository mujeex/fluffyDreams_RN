import React, { Component } from 'react';
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native';
import FlexButton from "../UI/FlexButton"
import AvenirHeavy from '../UI/AvenirHeavy'
import AvenirMedium from '../UI/AvenirMedium'
import AvenirLight from "../UI/AvenirLight"

 class PickUp extends Component {


   state={
       select: false
   }

   selectHandler = () => {
       this.setState(prevState=> ({
           select: !prevState.select
       }))
   }

  render() {
    return (
        
 <View style={[this.props.bodyStyle , styles.container]}>
     <TouchableOpacity onPress={()=>this.selectHandler()} style={this.state.select?styles.selected:styles.box}> 
      <View style={styles.bakery}>
            <AvenirLight Styles={styles.labels}>Bakery</AvenirLight>
            <AvenirHeavy Styles={styles.bold}>No 5 Tukur Road</AvenirHeavy>
        </View>

        <View style={styles.openingHoursContainer}>
            <AvenirLight Styles={styles.labels}>Opening Hours</AvenirLight>
            <View Styles={styles.openingHours}>
                <AvenirHeavy Styles={styles.bold}>Mon-Fri: 9:00 - 20:00</AvenirHeavy>
                <AvenirHeavy Styles={styles.bold}>Sat-Sun: 11:00 - 22:00</AvenirHeavy>
            </View>
        </View>

        <View style={styles.phone}>
        <AvenirLight Styles={styles.labels}>Phone Number</AvenirLight>
        <AvenirHeavy Styles={styles.bold}>(862)15140221630</AvenirHeavy>
        </View>
     </TouchableOpacity>

      <View style={styles.buttonContainer}>
          <FlexButton label='PROCEED' onPress={()=>this.props.onNavigation()}/>
      </View>
       
      </View>
       
     
    );
  }
}

const styles= StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'space-between',
       
        // borderWidth:1,
        // borderColor:'red'

    },
    buttonContainer:{ 
        height: 60,
        width: '100%',
        marginTop: 100
    },
    bakery:{
        marginTop: 10,
        marginLeft: 10,
    },
    openingHoursContainer:{
        marginTop: 10,
        marginLeft: 10,
    },
    openingHours:{
        // fontSize: 25,
    },
    phone:{
        marginTop: 10,
        marginLeft: 10,
    },
    labels:{
        fontSize: 12,
        color: 'gray'
    },
    bold:{
        fontSize: 20
    },
    box:{
        marginTop: 15,
        width: '80%',
        borderRadius: 5,
        padding: 5,
        shadowColor: '#0A539B',
        shadowOpacity: 0.2,
        shadowOffset: {
            height: 3
        },
        backgroundColor:'white'
    },
    selected:{
        marginTop: 15,
        width: '80%',
        borderRadius: 5,
        padding: 5,
        backgroundColor:'white',
        borderWidth: 2,
        borderColor: '#0A539B',
    }

})

export default PickUp