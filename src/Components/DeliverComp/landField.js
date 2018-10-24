import React,{Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native'

class LandField extends Component{

state={
    landMark:''
}
    changeLandmarkHandler = (newText) =>{
        this.setState({landMark: newText })

    }
    render(){
        return(
            <View style={styles.addressContainer}>
            <Text>{this.props.label}</Text>
            <TextInput
            value={this.state.landMark}
             onChangeText={this.changeLandmarkHandler}
             style={styles.border}
             />
        </View>
        )
    }
}
const styles= StyleSheet.create({
    addressContainer:{
        width: '80%',
        height: 50,
        marginTop: 10,
        alignSelf: 'center',
        // flexDirection: 'ro',
        // alignItems: 'center',

    },
border:{
    width: '100%',
    height: 30,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
},

})

export default LandField