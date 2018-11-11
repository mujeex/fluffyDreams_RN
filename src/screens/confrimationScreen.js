import React, {Component} from 'react'
import {View, Text,StyleSheet,Platform} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons"
import FlexButton from '../Components/UI/FlexButton'

class confirmation extends Component {

    static navigatorStyle = {
        drawUnderNavBar: true,
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
        <Text style={styles.text}>Congratulations on your order!!</Text>

        <View style={styles.buttonPosition}>
        <FlexButton styles={styles.button} label='CONTINUE SHOPPING' onPress={this.navigationHandler}/>
        </View>
        
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
    button:{
        height: 50
    },
    buttonPosition:{
        marginTop: 100
    }
})

export default confirmation








