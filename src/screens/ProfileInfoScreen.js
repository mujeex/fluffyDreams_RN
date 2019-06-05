import React, {Component} from 'react';
import {View,Text} from "react-native"
import Auth from '../Components/authComp/auth'
import {connect} from "react-redux"

class ProfileInfoScreen extends Component{


    render(){
let display=(<Auth/>)
if(this.props.auth){
    this.props.navigator.pop()
}

        return display
    }
}

const mapStateToProps= state=>{
    return{
        auth:state.auth.login
    }
}

export default connect(mapStateToProps)(ProfileInfoScreen)