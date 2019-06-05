import React, { Component } from 'react';
import { View, Text , StyleSheet, Image,TouchableOpacity} from 'react-native';
import Delivery from "../Components/DeliverComp/delivery"
import PickUp from "../Components/pickUpComp/pickUp"
import AvenirMedium from '../Components/UI/AvenirMedium'
import AvenirHeavy from '../Components/UI/AvenirHeavy'
import AvenirLight from '../Components/UI/AvenirLight'
import AvenirBlack from '../Components/UI/AvenirBlack'


 class ShippingScreen extends Component {

    static navigatorStyle = {
        drawUnderNavBar: false,
        navBarTranslucent: true,
        navBarHidden: false,
          tabBarHidden:true,
         drawUnderTabBar: true
      };

  
    state={
        delivery: true,
        pickup: false
    }

    handlePayment = () => {


        this.props.navigator.push({
            screen: "fluffy.PaymentScreen",
            title:'Payment',
            passProps: {
                total:this.props.total,
            size: this.props.size
            }
        })
    }

    navigationHandler = ()=>{
        if(this.state.delivery){
            this.setState({
                delivery:false,
                pickup:true
            })
        }else{
            this.setState({
                delivery:true,
                pickup:false
            })
        }
    }
  render() {
      let display= (<Delivery bodyStyles={styles.body} onNavigation={this.handlePayment}/>)

      if(this.state.pickup){
          display = (<PickUp bodyStyles={styles.body} onNavigation={this.handlePayment}/>)
      }
    return (
      <View style={styles.container}>

        <View style={styles.details}>

        {/* this is the payment ifo */}
        <View style={styles.paymentDetails}>
        <View style={styles.total}><AvenirHeavy Styles={styles.text}>${this.props.total}</AvenirHeavy></View>
        <View style={styles.size}><AvenirMedium Styles={styles.text1}>{this.props.size} item(s)</AvenirMedium></View>
        </View>

        {/* And this is the User Prof */}
        <View style={styles.userProf}>
        <View style={styles.name}><AvenirHeavy Styles={{fontSize:20}}>Mujahid</AvenirHeavy></View>

        <View style={styles.photoView}>
        <View style={styles.photo}><Image style={styles.image} source={require('../Assets/avatar/business man.png')}/></View>
        
        </View>
        </View>

        </View>
        {/* this is the the tab area */}
        <View style={styles.screens}>

        <View style={styles.headers}>
        <TouchableOpacity style={this.state.delivery?styles.deliveryLined:styles.deliveryNoLined}
         onPress={this.navigationHandler}>
         <View ><AvenirBlack 
          Styles={this.state.delivery?{fontFamily: 'Avenir-Black',color:'#0A539B'}:{fontFamily: 'Avenir-Medium'}}>Delivery</AvenirBlack></View>
         </TouchableOpacity>

       <TouchableOpacity style={this.state.pickup?styles.pickUpLined:styles.pickUpNoLined} 
       onPress={this.navigationHandler}>
       <View ><AvenirBlack 
       Styles={this.state.pickup?{fontFamily: 'Avenir-Black',color:'#0A539B'}:{fontFamily: 'Avenir-Medium',}}>Pick Up</AvenirBlack></View>
       </TouchableOpacity>

        </View>

        <View style={styles.body}>
        <View style={{flex:1}}>
        {display}
        </View>
           
        </View>
        </View>
      </View>
    );
  }
}


const styles= StyleSheet.create({
    container:{
        flex: 1
    },
    details:{
        flex: 3,
        // backgroundColor: 'red'
    },
    paymentDetails:{
        flex: 1,
        backgroundColor:'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      
    },
    total:{
        height: '100%',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    size:{
        height: '100%',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontSize: 25,
        color: 'black',
        fontFamily: 'Avenir-HeavyOblique',
    },
    text1:{
        fontSize: 20,
        color: 'black'
    },
    userProf:{
        flex: 1,
        // backgroundColor: 'green',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    name:{
        height: '100%',
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    photoView:{
        height: '100%',
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: "pink"

    },
    photo:{
     height: 70,
    width: 70,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 50,
        // backgroundColor: 'yellow'
    },
image:{
    // backgroundColor: 'red',
    // borderRadius: 50,
    height: '100%',
    width: '100%',
    resizeMode: 'contain'

},

    screens:{
        flex: 7,
        // backgroundColor: "gray"
    },
    headers:{
        flex: 1,
        flexDirection: 'row',

    },
    deliveryLined:{
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#0A539B',
        borderBottomWidth: 2,
    },
    deliveryNoLined:{
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pickUpLined:{
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#0A539B',
        borderBottomWidth: 2,
    },
    pickUpNoLined:{
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    body:{
        flex: 9,
        // alignItems: 'center',
        // borderWidth: 1,
        // borderColor: 'black',
    }
})

export default ShippingScreen