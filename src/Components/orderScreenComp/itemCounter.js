import React,{Component} from 'react';
import { Text, View ,StyleSheet,Platform,TouchableOpacity} from 'react-native'
import {connect} from "react-redux"
import {counterIncrease, counterDecrease} from "../../Store/Actions/index"
import Icon from "react-native-vector-icons/Ionicons"

class ItemCounter extends Component {


    increaseHandler =() =>{
        this.props.increase()
    }

    decreaseHandler= ()=>{
        this.props.decrease()
    }
    render(){
        return(

             
             <View style={styles.counterWrapper}>
                {/* incbutton */}
               <View style={styles.incButton}> 
               <TouchableOpacity onPress={this.increaseHandler}>
               <Icon name={Platform.OS ==="android"?"md-add":"ios-add"} size={25}/>
               </TouchableOpacity>
                </View>
               {/* number area */}
               <View style={styles.number}>
               <Text>{this.props.count}</Text>
               </View>
               {/* decbutton */}
               <View style={styles.decButton}>
               <TouchableOpacity onPress={this.decreaseHandler} >
               <Icon name={Platform.OS ==="android"?"md-remove":"ios-remove"} size={25}/>
               </TouchableOpacity>
               
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
        height: 50,
        borderWidth: 1,
        borderColor: "red",
        flexDirection: 'row',
        justifyContent: 'center',
        width: '60%'
  
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
const mapDispatchToProps= dispatch =>{
    return{
        increase: () => dispatch(counterIncrease()),
        decrease: () => dispatch(counterDecrease())
    }
}

const mapStateToProps= state => {
    return{
        count: state.order.itemCounter
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemCounter)