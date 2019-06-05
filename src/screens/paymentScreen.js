import React, { Component } from 'react';
import { View, Text,StyleSheet,Platform } from 'react-native';
import {connect} from 'react-redux'
import SelectionBox from '../Components/UI/selectionbox.js'
import FlexButton from '../Components/UI/FlexButton'
import {addPoints} from '../Store/Actions/index'
import AvenirMedium from '../Components/UI/AvenirMedium'
import AvenirHeavy from '../Components/UI/AvenirHeavy'

 class payment extends Component {

    static navigatorStyle = {
        drawUnderNavBar: false,
        navBarTranslucent: true,
        navBarHidden: false,
          tabBarHidden:true,
         drawUnderTabBar: true
      };


    navigationHandler =() =>{
        let totalPoints= this.props.size* 100
        this.props.addPoints(totalPoints)
        this.props.navigator.push({
            screen: "fluffy.ConfirmationScreen",
        })
    }
 

  render() {
    return (
      <View style={styles.container}>
      <View>
      <View style={styles.selection}>
              <SelectionBox name={Platform.OS=='android'?'md-cash':'ios-cash'} label='Cash'/>
          </View>

          <View style={styles.selection}>
              <SelectionBox name={Platform.OS=='android'?'md-wallet':'ios-wallet'} label='E-wallet'/>
          </View>

          <View style={styles.selection}>
              <SelectionBox name={Platform.OS=='android'?'md-card':'ios-card'} label='Credit Card'/>
          </View>

          <View style={styles.totalContainer}>
              <View style={styles.left}><Text style={styles.text}>Total Amount</Text></View>
              <View style={styles.right}><Text style={styles.text1}>${this.props.total}</Text></View>
          </View>
      </View>
         

          <View style={styles.button}>
        <FlexButton label='Proceed' onPress={this.navigationHandler}/>
          </View>

      </View>
    );
  }
}

const styles=StyleSheet.create({
    container:{
       flex:1 ,
       alignItems: 'center',
       justifyContent:'space-between',
       padding: 15
       
    },
selection:{
    width: '100%',
    // padding: 10,
    margin: 10,
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'red',
    height: 60

},
totalContainer:{
    marginTop: 50,
    width: '95%',
    height: 60,
    borderTopWidth: 0.4,
    borderTopColor: 'black',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',

},
left:{
    width: '60%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
},
right:{
    width: '40%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
},
text:{
    fontSize: 16,
    fontFamily: 'Avenir-MediumOblique'

},
text1:{
    fontSize: 20,
    fontFamily: 'Avenir-Heavy',
},
button:{
    width: '100%',
    height: 60,
    marginTop:40
}
})

const mapDispatchToProps = dispatch =>{
    return{
        addPoints: (points)=> dispatch(addPoints(points))
    }
   
}

export default connect(null, mapDispatchToProps)(payment)