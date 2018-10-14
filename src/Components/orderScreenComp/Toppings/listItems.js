import React, {Component} from "react"
import {Text, View, TouchableOpacity,StyleSheet} from "react-native"

class ListItems extends Component {
    state={
        highlighted: false,
        
    }
  

// The purpose of this function is to set the state to the target index on press
    indexStateHandler = (i) =>{
         if(this.state.id){
             this.setState({
                 id: i
             })
         }else{
             this.setState({ 
                 id:i
             })
         }
         console.log("index: "+i)
         console.log("state: "+this.state.id)
    }

    //The purpose of this function is to set styles for the targeted index
    highlightStateHandler = (i) =>{     
        if(this.state.id === i){
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
           }

    highlightHandler = (i,options) =>{
       
        // console.log(i)
        // this.indexStateHandler(i)
        this.highlightStateHandler(i)
        this.props.priceEdit(options)
    }
   
    render(){
       const {options,i} = this.props
        return(
            <TouchableOpacity onPress={()=> this.highlightHandler(i, options)} key={i}>
            <View style={this.state.highlighted&&this.state.id == i?styles.highlighted:styles.options} > <Text style={styles.text}>{options.name}</Text> </View>
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