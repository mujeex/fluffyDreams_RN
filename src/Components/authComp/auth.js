import React, { Component } from 'react'
import { Text, View ,StyleSheet, KeyboardAvoidingView,TextInput,Platform, TouchableOpacity, Button, ActivityIndicator} from 'react-native'
// import Icon from "react-native-vector-icons/Ionicons"
import {tryAuth,autoSignIn} from '../../Store/Actions/index'
import {connect} from 'react-redux'

 class Auth extends Component {

    state={
        authMode: 'signIn',
        controls:{
            email: null,
            password: null,
            confirmPassword: null
        }
      
    }



    switchHandler=()=>{
        if(this.state.authMode == 'signIn'){
            this.setState(prevState => {
                return{
                    ...prevState,
                    authMode: 'signUp'
                }
            })
        }
       else{
            this.setState(prevState=>{
                return{
                    ...prevState,
                    authMode:'signIn'
                }
            })
        }
    }

    updateInputState = (key, value) =>{
        this.setState(prevState=>{
            return{
                ...prevState,
                controls:{
                    ...prevState.controls,
                    [key]:value
                   
                }
            }
        })
        console.log(this.state.controls[key])
    }

    loginHandler= () => {
        const authData={
            email: this.state.controls.email,
            password: this.state.controls.password
        }
        this.props.onTryAuth(authData,this.state.authMode)
    }

componentDidMount=()=>{
    this.props.autoSignIn()
}

render(){
let cPassword=null
let submitButton=(
    <TouchableOpacity style={styles.button} onPress={this.loginHandler}> 
    <View><Text>Submit</Text></View>
    </TouchableOpacity>  )

if(this.props.isLoading){
    submitButton=<ActivityIndicator/>
}
    let header=(
        <View style={styles.header}>
            <Text style={{fontSize: 20}}>Sign In</Text>
        </View>
    )

    if(this.state.authMode == 'signUp'){
        header=(  <View style={styles.header}>
            <Text style={{fontSize: 20}}>Sign Up</Text>
               </View>)

    cPassword=(( <View style={styles.confirmPasswordStyles}>
    <TextInput
     style={styles.inputStyles} 
    placeholder='Confirm password' 
    value={this.state.controls.confirmPassword}
    onChangeText={(val)=>this.updateInputState('confirmPassword', val)}
    autoCorrect={false}
    autoCapitalize="none"
    />
      </View>))
    }
  
    return(
        <View style={styles.container}>
        {header}

        <Button onPress={this.switchHandler} title='Switch'/>

        <View style={styles.secondSection}>

        <KeyboardAvoidingView style={styles.inputContainer}>

<View style={styles.emailStyles}>
      <TextInput 
      style={styles.inputStyles}
       placeholder='Email'
        value={this.state.controls.email}
        keyboardType='email-address'
        onChangeText={(val)=>this.updateInputState('email', val)}
        autoCorrect={false}
        autoCapitalize="none"
        />
       
  </View>

  <View style={styles.passwordStyles}>
      <TextInput
       style={styles.inputStyles}
       placeholder='password'
        value={this.state.controls.password}
        onChangeText={(val)=>this.updateInputState('password', val)}
        autoCorrect={false}
        autoCapitalize="none"
        />
  </View>
        {cPassword}

        {submitButton}

</KeyboardAvoidingView>

        </View>
        
        
        </View>
    )
}
 }


 const styles=StyleSheet.create({
     container:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
     },
     header:{
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
     },
     secondSection:{
        flex: 7,
        justifyContent:'center',
        alignItems: 'center',
        flexDirection: 'row',
     },
     inputContainer:{
        width: '80%',
        height: '60%',
        // borderWidth: 1,
        // borderColor: 'red'
     },
     emailStyles:{
        flex: 1
     },
     passwordStyles:{
         flex:1
     },
     confirmPasswordStyles:{
         flex: 1
     },
     inputStyles:{
        height: '100%',
        borderBottomWidth: 0.6,
        borderBottomColor: 'red',
     },
     button:{
         width: '30%',
         height: 30,
         justifyContent: 'center',
         alignItems: 'center',
         borderWidth: 0.5,
         borderColor: 'black',
         borderRadius: 20,
         alignSelf: 'center',
     }
 })

 const mapStateToProps = state => {
     return{
         isLoading: state.ui.isLoading
     }
 }

 const mapDispatchToProps= dispatch => {
     return{
        onTryAuth: (authData,authMode) => dispatch(tryAuth(authData,authMode)),
        autoSignIn: ()=> dispatch(autoSignIn())
     }
 }
export default connect(mapStateToProps, mapDispatchToProps)(Auth) 