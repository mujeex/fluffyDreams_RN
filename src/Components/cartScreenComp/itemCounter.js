import React,{Component} from 'react';
import { Text, View ,StyleSheet,Platform,TouchableOpacity} from 'react-native'
import {connect} from "react-redux"
import {counterIncrease, counterDecrease} from "../../Store/Actions/index"
// import Icon from "react-native-vector-icons/Ionicons"
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AvenirMedium from '../UI/AvenirMedium';
import AvenirLight from '../UI/AvenirLight';
import AvenirBlack from '../UI/AvenirBlack'

class ItemCounter extends Component {
    
    
    render(){

        // const increase= 'increase'
        // const decrease= 'decrease'

        let buttonIncrease=(
            <TouchableOpacity onPress={()=>this.props.counterControl('increase')}>
            <AvenirMedium Styles={styles.balance}>+</AvenirMedium>
            </TouchableOpacity>
        )
        let buttonDecrease=(
            <TouchableOpacity  onPress={()=>this.props.counterControl('decrease')}>
           <AvenirMedium Styles={styles.balance}>-</AvenirMedium>
            </TouchableOpacity>
        )
// if the item gets highlighted then make the unclickable
        if(this.props.activeButton){
            buttonIncrease=(
                <View>
                   <AvenirLight Styles={styles.balance}>+</AvenirLight>
                </View>
            )

            buttonDecrease=(
                <View>
                     <AvenirLight Style={styles.balance}>-</AvenirLight>
                </View>
            )
        }
        return(

             
             <View style={styles.counterWrapper}>
                {/* incbutton */}
               <View  style={styles.decButton}> 
               {buttonDecrease}
                </View>
               {/* number area */}
               <View style={styles.number}>
               <AvenirBlack Styles={styles.counter}>{this.props.counter}</AvenirBlack>
               </View>
               {/* decbutton */}
               <View style={styles.incButton}>
               {buttonIncrease}
               </View>
             </View>
           

        )
    }
}

const styles=StyleSheet.create({
    counterWrapper:{
       borderRadius: 5,
        height: 16,
        borderWidth: 0.4,
        borderColor: "black",
        flexDirection: 'row',
        justifyContent: 'center',
        width: 80,
        alignItems: 'center',
        // marginLeft: 2,
  
      },
      incButton:{
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        flex:2,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
      },
      decButton:{
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        flex:2,
        borderTopRightRadius: 10,
        borderBottomRightRadius:10
      },
      number:{
        height: '100%',
        flex:3,
        justifyContent:"center",
        alignItems: 'center',
        borderRightWidth: 0.4,
        borderLeftWidth: 0.4,
        borderColor:'black'
      },
      balance:{
        //   justifyContent:'center',
        //   alignItems: 'center',
          height:'100%',
          width:'100%',
          textAlign:'center',
      },
      counter:{
          height:'100%',
          width:'100%',
          textAlign:'center',
          fontFamily: 'Avenir-BlackOblique',
        //   justifyContent:'center',
        //   alignItems: 'center',
      }
})
// const mapDispatchToProps= dispatch =>{
//     return{
//         increase: () => dispatch(counterIncrease()),
//         decrease: () => dispatch(counterDecrease())
//     }
// }

// const mapStateToProps= state => {
//     return{
//         count: state.order.itemCounter
//     }
    
// }

export default ItemCounter