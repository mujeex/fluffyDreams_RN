import React, { Component } from 'react';
import { View, Text,StyleSheet,Platform } from 'react-native';
import SelectionBox from '../Components/UI/selectionbox.js'
import FlexButton from '../Components/UI/FlexButton'

 class payment extends Component {

    static navigatorStyle = {
        drawUnderNavBar: false,
        navBarTranslucent: true,
        navBarHidden: false,
          tabBarHidden:true,
         drawUnderTabBar: true
      };


    navigationHandler =() =>{
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
              <View style={styles.left}><Text style={styles.text}>Total amount</Text></View>
              <View style={styles.right}><Text style={styles.text}>${this.props.total}</Text></View>
          </View>
      </View>
         

          <View style={styles.button}>
        <FlexButton label='PROCEED' onPress={this.navigationHandler}/>
          </View>

      </View>
    );
  }
}

const styles=StyleSheet.create({
    container:{
       flex:1 ,
       borderWidth: 1,
       borderColor: 'red',
       alignItems: 'center',
       justifyContent:'space-between',
       padding: 15
       
    },
selection:{
    width: '100%',
    // padding: 10,
    margin: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red',
    height: 60

},
totalContainer:{
    marginTop: 50,
    width: '90%',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: 'black',
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems: 'center',

},
left:{
    width: '60%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
},
right:{
    width: '40%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
},
text:{
    fontSize: 16,
    fontWeight: 'bold'
},
button:{
    width: '100%',
    height: 60,
    marginTop:40
}
})

export default payment