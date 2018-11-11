import React,{Component} from 'react';
import { Text, View ,StyleSheet,Platform,TouchableOpacity} from 'react-native'
import {connect} from "react-redux"
import {counterIncrease, counterDecrease} from "../../Store/Actions/index"
import Icon from "react-native-vector-icons/Ionicons"

class ItemCounter extends Component {
    
    
    render(){

        // const increase= 'increase'
        // const decrease= 'decrease'

        let buttonIncrease=(
            <TouchableOpacity onPress={()=>this.props.counterControl('increase')}>
            <Icon name={Platform.OS ==="android"?"md-add":"ios-add"} size={25}/>
            </TouchableOpacity>
        )
        let buttonDecrease=(
            <TouchableOpacity onPress={()=>this.props.counterControl('decrease')}>
            <Icon name={Platform.OS ==="android"?"md-remove":"ios-remove"} size={25}/>
            </TouchableOpacity>
        )
// if the item gets highlighted then make the unclickable
        if(this.props.activeButton){
            buttonIncrease=(
                <View>
                   <Icon name={Platform.OS ==="android"?"md-add":"ios-add"} size={25}/> 
                </View>
            )

            buttonDecrease=(
                <View>
                     <Icon name={Platform.OS ==="android"?"md-remove":"ios-remove"} size={25}/>
                </View>
            )
        }
        return(

             
             <View style={styles.counterWrapper}>
                {/* incbutton */}
               <View style={styles.incButton}> 
              {buttonIncrease}
                </View>
               {/* number area */}
               <View style={styles.number}>
               <Text>{this.props.counter}</Text>
               </View>
               {/* decbutton */}
               <View style={styles.decButton}>
               {buttonDecrease}
               </View>
             </View>
           

        )
    }
}

const styles=StyleSheet.create({
    counterWrapper:{
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius:10,
        height: 30,
        borderWidth: 1,
        borderColor: "red",
        flexDirection: 'row',
        justifyContent: 'center',
        width: 50
  
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