import React, { Component } from 'react';
import { View, Text ,StyleSheet, TouchableOpacity, } from 'react-native';
import {connect} from "react-redux"
import {itemSelect} from "../../Store/Actions/index"

 class Selections extends Component {

//     state={
//         prevIndex:null,
//         highlighted: false,
//         id: null

//     }
  

// // The purpose of this function is to set the state to the target index on press
//     indexStateHandler = (i) =>{
        
//              this.setState({
//                  id: i
//              })
    
// }

//     //The purpose of this function is to set styles for the targeted index
//     highlightStateHandler = (i) =>{     
//         // let bool= false
//             if(this.state.highlighted){
//                 // bool=true
//                 this.setState({
//                     highlighted:false,
                    
//                 })
//                 // this.props.select(bool)
//             }
//             else{
        
//                 this.setState({
//                     highlighted:true,

//                 })
//                 // this.props.select(bool)
//             }
         
//            }

//     highlightHandler = (i,options) =>{
       
//         // console.log(i)
        
//         this.indexStateHandler(i)
//         this.highlightStateHandler()


//         console.log("index: "+i)
//         //  console.log("state: "+this.state.id)
//         console.log(this.prevstate.highlighted)
    
        
//         this.props.priceEdit(options)
//     }
//     componentDidMount = () => {
//         console.log(this.state.highlighted)
//     };


// state = {
//     pressed: this.props.options.map(_ => false),
//     id:null
// }

// highlightHandler = optionIndex => {
//     this.setState(prevState => ({
//         pressed: prevState.pressed.map((option, index) => {
//             return optionIndex === index ? !option : option
//         }
//       ),
//       id:optionIndex
    
//     }))
//     console.log(this.state.pressed)
// }

// optionStyle = optionIndex => this.state.pressed[optionIndex] && this.state.id == optionIndex
//         ? styles.highlighted
//         : styles.options
       
state={
    tracker:0,
    index: null,
    bool:false
}

highlightHandler = (optionIndex) => {
    //Assigned it to the value of tracker in the state in order of retaining value
    let tracker=this.state.tracker
    //How to reset the tracker whenever a new element gets pressed?
    //It can be reset whenever the prev and current state are not the same
    // if(tracker ==='true'){
    //     // tracker=this.state.tracker+1
    //     console.log("awesome")
    // }
    if(this.state.index!==optionIndex){
           tracker=0
    } else{
        tracker++
    }
        console.log("=============")
        console.log("prevIndex: "+ this.state.index)
        console.log("currentIndex: "+ optionIndex)
        console.log("tracker: "+tracker)
        console.log("state tracker: "+ this.state.tracker)
   
    this.setState(prevState =>({
        tracker:tracker,
        index: optionIndex,
        bool:prevState.index == optionIndex? false: true
    }))
}

// optionStyle = () => this.state.tracker>2 {
    // (tracker!==0 && tracker%2==0)?'true':
// }
 

  render() {
    return (
      <View style={styles.selectionWrapper}>
        <View style={styles.label}><Text style={{color: "black"}}>{this.props.label}</Text></View>
        <View style={styles.listContainer}>
        {this.props.options.map((options, i) => (
            <TouchableOpacity onPress={()=> this.highlightHandler(options.uid, options)} key={i}>
            <View style={(this.state.bool&& this.state.index == options.uid) ||
                 (this.state.tracker!=0 && this.state.tracker%2==0) &&this.state.index== options.uid 
                 ? styles.highlighted:styles.options} > <Text style={styles.text}>{options.name}</Text> </View>
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