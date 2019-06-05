import React, {Component} from 'react'
import {View, Text,StyleSheet,Platform} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons"
import FlexButton from '../Components/UI/FlexButton'
import AvenirMedium from '../Components/UI/AvenirMedium'

class confirmation extends Component {

   
    static navigatorStyle = {
        drawUnderNavBar: false,
        navBarTranslucent: true,
        navBarHidden: true,
          tabBarHidden:true,
         drawUnderTabBar: true
      };

      navigationHandler =() => {
          this.props.navigator.popToRoot({
              animated: true,
              animationType: 'fade'
          })
      }

    render(){
        return(
            <View style={styles.container}>
        <View style={styles.iconContainer}><Icon name={Platform.OS=='android'? 'md-car': 'ios-car'} size={100}/></View>
        <View style={styles.textContainer}>
        <AvenirMedium Styles={styles.text}>Congratulations on your order!!</AvenirMedium>
        <AvenirMedium Styles={{color:'#0A539B'}}>+100 points</AvenirMedium>
        </View>

        <View style={styles.buttonPosition}>
        <FlexButton  label='Continue Shopping' onPress={this.navigationHandler}/>
        </View>
        
    </View>
        )
    }
}
    


const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconContainer:{
        flex:5,
        alignItems: 'center',
        justifyContent:'flex-end',
        paddingBottom: 10,
    },
    textContainer:{
        flex:5,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    text:{
        fontSize: 20
    },
  
    buttonPosition:{
        marginTop: 100,
        height: 50,
        width:'100%',
        position: 'absolute',
        top: 300
    }
})

export default confirmation








