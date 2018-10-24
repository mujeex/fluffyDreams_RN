import React, {Component} from "react"
import {Text, View, TouchableOpacity,StyleSheet} from "react-native"

class ListItems extends Component {
    state={
        highlighted: false,
        
    }
  


   
    //The purpose of this function is to set styles for the targeted index
    highlightStateHandler = (options) =>{     

            if(!this.state.highlighted){
                this.setState({
                    highlighted:true,
                    console:this.props.priceEdit(options,true)
                })
            }
            else{
                this.setState({
                    highlighted:false,
                    console:this.props.priceEdit(options,false)
                })
            }
        }  
           

    highlightHandler = (i,options) =>{
       
        // console.log(i)
        // this.indexStateHandler(i)
        // console.log(this.state.highlighted)
        this.highlightStateHandler(options)
        // console.log('index of toppings array: '+ i)
       
        
    }

   
    render(){
       const {options,index} = this.props
        return(
            <TouchableOpacity onPress={()=> this.highlightHandler(index, options)}>
            <View style={this.state.highlighted?styles.highlighted:styles.options} > <Text style={styles.text}>{options.name}</Text> </View>
            </TouchableOpacity>
        )
    }
}


const styles= StyleSheet.create({
    options:{
        borderRadius: 10,
        padding: 5,
        borderWidth: 1,
        borderColor: "#d0b783",
        // backgroundColor: ""
        
    },
    text:{
        color: 'black',
        textAlign: 'center'
    },

    highlighted:{
        borderRadius: 10,
        padding: 5,
        borderWidth: 1,
        // borderColor: "#d0b783",
        backgroundColor: "#d0b783"

    }
})
export default ListItems