import React, {Component} from "react"
import {Text, View, TouchableOpacity,StyleSheet} from "react-native"

class ListItems extends Component {
    state={
        highlighted: false,
        
    }
  


   
    //The purpose of this function is to set styles for the targeted index
    highlightStateHandler = () =>{     

            if(!this.state.highlighted){
                this.setState({
                    highlighted:true
                })
            }
            else{
                this.setState({
                    highlighted:false
                })
            }
        }  
           

    highlightHandler = (i,options) =>{
       
        // console.log(i)
        // this.indexStateHandler(i)
        // console.log(this.state.highlighted)
        this.highlightStateHandler()
       
        this.props.priceEdit(options)
    }

   
    render(){
       const {options,i} = this.props
        return(
            <TouchableOpacity onPress={()=> this.highlightHandler(i, options)}>
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