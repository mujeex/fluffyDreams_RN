import React, {Component} from "react"
import { View, Text ,StyleSheet, TouchableOpacity, } from 'react-native';
import ListItems from "./listItems"

class Toppings extends Component {

   

  render() {
    return (
      <View style={styles.selectionWrapper}>
        <View style={styles.label}><Text style={{color: "black"}}>{this.props.label}</Text></View>
        <View style={styles.listContainer}>
        {this.props.options.map((options, i) => (
            <ListItems priceEdit={this.props.priceEdit} options={options} key={i} index={i}/>
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
  
})

export default Toppings