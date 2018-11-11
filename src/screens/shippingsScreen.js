import React, { Component } from 'react';
import { View, Text , StyleSheet, Image,TouchableOpacity} from 'react-native';
import Delivery from "../Components/DeliverComp/delivery"
import PickUp from "../Components/pickUpComp/pickUp"

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
                total:this.props.total}
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
        <View style={styles.total}><Text style={styles.text}>${this.props.total}</Text></View>
        <View style={styles.size}><Text style={styles.text1}>{this.props.size} item(s)</Text></View>
        </View>

        {/* And this is the User Prof */}
        <View style={styles.userProf}>
        <View style={styles.name}><Text>Mujahid Bappai</Text></View>

        <View style={styles.photoView}>
        <View style={styles.photo}><Image style={styles.image} source={require('../Assets/avatar/business man.png')}/></View>
        
        </View>
        </View>

        </View>
        {/* this is the the tab area */}
        <View style={styles.screens}>

        <View style={styles.headers}>
        <TouchableOpacity style={styles.delivery} onPress={this.navigationHandler}><View ><Text>Delivery</Text></View></TouchableOpacity>
       <TouchableOpacity style={styles.pickUp} onPress={this.navigationHandler}><View ><Text>Pick Up</Text></View></TouchableOpacity> 
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
        backgroundColor:'orange',
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
        fontSize: 20,
        color: 'white'
    },
    text1:{
        fontSize: 10,
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
    delivery:{
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: 'red',
        borderBottomWidth: 1,
    },
    pickUp:{
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