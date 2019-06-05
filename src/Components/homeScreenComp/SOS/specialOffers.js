
import React, { Component } from 'react'
import { Text, View, StyleSheet , ScrollView } from 'react-native'
import SpecialImage from "./specialImage"
import AvenirHeavy from '../../UI/AvenirHeavy'
import AvenirBlack from "../../UI/AvenirBlack"

 class SpecialOffer extends Component {
  render() {
    return (
      <View  style={styles.OfferWrapper}>
 <View style={styles.OfferTexts}>
      <AvenirBlack Styles={{ marginLeft: 10,}}>SPECIAL OFFER</AvenirBlack>
      <AvenirBlack Styles={{color: "red", marginRight: 10,}}>50%</AvenirBlack>
    </View>

         <View style={{flex: 3, flexDirection: 'row', width:this.props.Dimension} }>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal= {true}>
      <SpecialImage source={require('../../../Assets/bakery-baking-blueberries-291528.jpg')}/>
      <SpecialImage source={require('../../../Assets/baking-berry-birthday-357748.jpg')}/>
      <SpecialImage source={require('../../../Assets/birthday-birthday-cake-cake-140831.jpg')}/>
      <SpecialImage source={require('../../../Assets/blur-cake-cheesecake-219293.jpg')}/>
      <SpecialImage source={require('../../../Assets/blur-cake-close-up-355290.jpg')}/>
      <SpecialImage source={require('../../../Assets/cafe-cake-cream-9820.jpg')}/>
      
      </ScrollView>

    </View>
     
      </View>
        
    )
  }
}
const styles = StyleSheet.create({
  OfferWrapper: {
    height: 170,
    marginTop: 5,
    

  },
  
  OfferTexts:{
    flex: 1,
     backgroundColor:"white",
    //  borderBottomWidth: 1,
     marginBottom: 2,
    //  borderBottomColor: "black",
     flexDirection: 'row',
     justifyContent: "space-between",
     alignItems: 'center',
  },
 
  
})


export default SpecialOffer