import React, { Component } from 'react';
import { View, Text ,StyleSheet, TouchableOpacity, } from 'react-native';
import {connect} from "react-redux"
import {itemSelect} from "../../Store/Actions/index"
import AvenirHeavy from '../UI/AvenirHeavy'
import AvenirMedium from '../UI/AvenirMedium'

 class Selections extends Component {

state={
    tracker:0,
    index: null,
    bool:false,
    price:false
}

highlightHandler = (optionIndex,options) => {
    //Assigned it to the value of tracker in the state in order of retaining value
    
    let tracker=this.state.tracker
    this.state.index!==optionIndex?tracker=0:tracker++

    this.setState(prevState =>({
        tracker:tracker,
        index: optionIndex,
        bool:prevState.index == optionIndex? false: true,
        price: tracker%2==0?this.props.priceEdit(options,true)
        :this.props.priceEdit(options,false)
    }))
}

  render() {
    return (
      <View style={styles.selectionWrapper}>
        <View style={styles.label}><AvenirHeavy Styles={{color: "black",fontSize: 17,}}>{this.props.label}</AvenirHeavy></View>
        <View style={styles.listContainer}>
        {this.props.options.map((options, i) => (
            <TouchableOpacity onPress={()=> this.highlightHandler(options.uid, options)} key={i}>
            <View style={(this.state.bool&& this.state.index == options.uid) ||
                 (this.state.tracker!=0 && this.state.tracker%2==0) &&this.state.index== options.uid 
                 ? styles.highlighted:styles.options} > 
                 <AvenirMedium Styles={(this.state.bool&& this.state.index == options.uid) ||
                    (this.state.tracker!=0 && this.state.tracker%2==0) &&this.state.index== options.uid 
                    ? styles.textHighlighted:styles.text}> {options.name}</AvenirMedium> </View>
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
        height: 80,
        // borderWidth: 1,
        // borderColor: 'red',
    },
    label:{
        flex: 1,
        marginTop: 5,
        marginLeft: 5,

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

const mapDispatchToProps = dispatch => {
    return{
        select: (bool)=>dispatch(itemSelect(bool))
    }
}

const mapStateToProps = state => {
    return{
        id: state.order.id,
        highlight:state.order.Rxhighlighted
    }
  
}

export default connect(mapStateToProps,mapDispatchToProps)(Selections)