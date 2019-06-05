import React, {Component} from "react"
import { View, Text ,StyleSheet, TouchableOpacity, } from 'react-native';
import ListItems from "./listItems"
import AvenirHeavy from '../../UI/AvenirHeavy'

class Toppings extends Component {

   

  render() {
    return (
      <View style={styles.selectionWrapper}>
        <View style={styles.label}><AvenirHeavy style={{color: "black",fontSize: 17,}}>{this.props.label}</AvenirHeavy></View>
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
  
})

export default Toppings