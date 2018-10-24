import React,{Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native'

class AddressField extends Component{

state={
    address:''
}
    changeAddressHandler = (newText) =>{
        this.setState({address: newText })
        // console.log(this.state.address)
    }
    render(){
        return(
            <View style={styles.addressContainer}>
            <Text>{this.props.label}</Text>
            <TextInput
             value={this.state.address}
             onChangeText={this.changeAddressHandler}
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

export default AddressField