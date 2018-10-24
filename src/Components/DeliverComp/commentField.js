import React,{Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native'

class CommentField extends Component{

state={
    comment:''
}
    changeCommentHandler = (newText) =>{
        this.setState({comment: newText })

    }
    render(){
        return(
            <View style={styles.addressContainer}>
            <Text>{this.props.label}</Text>
            <TextInput
             value={this.state.comment} 
             onChangeText={this.changeCommentHandler}
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

export default CommentField