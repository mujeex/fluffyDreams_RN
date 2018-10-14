import React, { Component } from 'react';
import { View, Text ,StyleSheet, TouchableOpacity, } from 'react-native';
import {connect} from "react-redux"
import {itemSelect} from "../../Store/Actions/index"

 class Selections extends Component {

    state={
        highlighted: false,
        id: this.props.id
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
        let bool= false
        if(this.state.id === i){
            if(!this.state.highlighted){
                bool=true
                this.setState({
                    highlighted:true
                })
                // this.props.select(bool)
            }
            else{
        
                this.setState({
                    highlighted:false
                })
                // this.props.select(bool)
            }
        }  
           }

    highlightHandler = (i,options) =>{
       
        // console.log(i)
        
        this.indexStateHandler(i)
        this.highlightStateHandler(i)
        
        this.props.priceEdit(options)
    }
   

  render() {
    return (
      <View style={styles.selectionWrapper}>
        <View style={styles.label}><Text style={{color: "black"}}>{this.props.label}</Text></View>
        <View style={styles.listContainer}>
        {this.props.options.map((options, i) => (
            <TouchableOpacity onPress={()=> this.highlightHandler(i, options)} key={i}>
            <View style={this.state.highlighted&&this.state.id == i?styles.highlighted:styles.options} > <Text style={styles.text}>{options.name}</Text> </View>
            </TouchableOpacity>
              )
        )}
        </View>
      </View>
    );
  }
}

const styles= StyleSheet.create({
    selectionWrapper:{
        width: '100%',
        height: 100,
        borderWidth: 1,
        borderColor: 'red',
    },
    label:{
        flex: 1,

    }
    ,
    listContainer:{
        flex: 3,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: 'center',
        // backgroundColor: "#7fffd4"
    },
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

const mapDispatchToProps = dispatch => {
    return{
        select: (bool)=>dispatch(itemSelect(bool))
    }
}

const mapStateToProps = state => {
    return{
        id: state.cart.id
    }
  
}

export default connect(mapStateToProps,mapDispatchToProps)(Selections)