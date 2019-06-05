import React, {Component} from "react"
import {Text, View, TouchableOpacity,StyleSheet} from "react-native"
import AvenirMedium from '../../UI/AvenirMedium'

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
            <View style={this.state.highlighted?styles.highlighted:styles.options} > <AvenirMedium Styles={this.state.highlighted?styles.textHighlighted:styles.text}>{options.name}</AvenirMedium> </View>
            </TouchableOpacity>
        )
    }
}


const styles= StyleSheet.create({
    options:{
        borderRadius: 5,
        padding: 5,
        borderWidth: 1.5,
        borderColor: "#0A539B",
        // backgroundColor: ""
        
    },
    text:{
        color: 'black',
        textAlign: 'center',
        fontSize: 12
    },
    textHighlighted:{
        color: 'white',
        textAlign: 'center',
        fontSize: 12
    },

    highlighted:{
        borderRadius: 5,
        padding: 5,
        // borderColor: "#d0b783",
        backgroundColor: "#0A539B",
        // color: 'white'

    }
})
export default ListItems