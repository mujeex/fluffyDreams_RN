import React, { Component } from 'react'
import { Text, View ,StyleSheet, KeyboardAvoidingView,Image, TouchableOpacity, ActivityIndicator} from 'react-native'
// import Icon from "react-native-vector-icons/Ionicons"
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FlexInput from '../UI/FlexInput'
import {tryAuth,autoSignIn} from '../../Store/Actions/index'
import {connect} from 'react-redux'
import AvenirHeavy from '../UI/AvenirHeavy'
import AvenirMedium from '../UI/AvenirMedium'
import AvenirLight from '../UI/AvenirLight'
import {validate} from 'email-validator'

 class Auth extends Component {

    state={
        authMode: 'signIn',
        controls:{
            email:{
                value:'',
                valid:false
            },
            password:{
                value:'',
                valid:false
            },
            confirmPassword: {
                value:'',
                valid:false
            }
        }
      
    }



   

    signInHandler = () => {
        this.setState(prevState=>{
            return{
                ...prevState,
                authMode:'signIn'
            }
        })
    }

    signUpHandler = () => {

            this.setState(prevState => {
                return{
                    ...prevState,
                    authMode: 'signUp'
                }
            })
        
    }

    updateInputState = (key, value) =>{
        // emailValidator= await validateEmail()
        this.setState(prevState=>{
            return{
                ...prevState,
                controls:{
                    ...prevState.controls,
                    [key]:{
                        ...prevState.controls[key],
                        value: value,
                        valid: (validate(value))
                        // valid: prevState.controls[key] == 'email'? validator(): anotherValidator()
                    }
                    // [key]:value
                   
                }
            }
        })
        console.log(this.state.controls[key])
    }

    loginHandler= () => {
        const authData={
            email: this.state.controls.email.value,
            password: this.state.controls.password.value
        }
        this.props.onTryAuth(authData,this.state.authMode)
    }

componentDidMount=()=>{
    this.props.autoSignIn()
}

render(){
let cPassword=null
let  submitButton=(
        <View style={styles.buttonBlur} onPress={this.loginHandler}> 
        <View><AvenirLight Styles={{color: 'white'}}>{this.state.authMode}</AvenirLight></View>
        </View>  )


if(this.props.isLoading){
    submitButton=<ActivityIndicator/>
}

else if(this.state.controls.email.valid){
    submitButton=(
        <TouchableOpacity style={styles.button} onPress={this.loginHandler}> 
        <View><AvenirLight Styles={{color: 'white'}}>{this.state.authMode}</AvenirLight></View>
        </TouchableOpacity> 
         )}
    

    if(this.state.authMode == 'signUp'){
    cPassword=(( <View style={styles.confirmPasswordStyles}>
    <FlexInput
     Style={styles.inputStyles} 
    placeholder='Confirm password' 
    placeholderTextColor='#85A9CD'
    value={this.state.controls.confirmPassword.value}
    onChangeText={(val)=>this.updateInputState('confirmPassword', val)}
    autoCorrect={false}
    autoCapitalize="none"
    />
      </View>))
    }
  
    return(
        <View style={styles.container}>

        <View style={styles.firstBlock}>
        <View style={styles.imageContainer}><Image style={styles.image} source={require('../../Assets/fluffyDreams.png')}/></View>
        </View>

        {/* second block */}
        <View style={styles.secondBlock}>
        <KeyboardAvoidingView style={this.state.authMode == 'signUp'?styles.containerSignUp:styles.containerSignIn}>

<View style={styles.emailStyles}>
      <FlexInput 
      Style={styles.inputStyles}
       placeholder='Email'
       placeholderTextColor='#85A9CD'
        value={this.state.controls.email.value}
        keyboardType='email-address'
        onChangeText={(val)=>this.updateInputState('email', val)}
        autoCorrect={false}
        autoCapitalize="none"
        valid= {this.state.controls.email.valid}
        />
       
  </View>

  <View style={styles.passwordStyles}>
      <FlexInput
       Style={styles.inputStyles}
       placeholder='password'
       placeholderTextColor='#85A9CD'
        value={this.state.controls.password.value}
        onChangeText={(val)=>this.updateInputState('password', val)}
        autoCorrect={false}
        autoCapitalize="none"
        />
  </View>
       {cPassword}
        {submitButton}

</KeyboardAvoidingView>

        </View>

        {/* third block */}
        <View style={styles.thirdBlock}>
        <TouchableOpacity style={styles.signIn} onPress={()=>this.signInHandler()}> <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
        {/* <FontAwesome5 name={'sign-in-alt'} size={20} Light/> */}
        <AvenirLight Styles={this.state.authMode=='signIn'?{fontSize:18,color:"#0A539B",fontFamily: 'Avenir-Heavy',}:{fontSize:12,color:"#0A539B"}}>Sign In</AvenirLight>
        </View></TouchableOpacity> 

        <TouchableOpacity style={styles.signUp} onPress={()=>this.signUpHandler()}><View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        {/* <FontAwesome5 name={'user-plus'} size={20} Light/> */}
        <AvenirLight Styles={this.state.authMode=="signUp"?{fontSize:18,color:"#0A539B",fontFamily: 'Avenir-Heavy',}:{fontSize:12,color:"#0A539B"}} >Sign Up</AvenirLight>
        </View></TouchableOpacity>  
        </View>

        {/* {header} */}

        {/* <Button onPress={this.switchHandler} title='Switch'/> */}

       
        
        
        </View>
    )
}
 }


 const styles=StyleSheet.create({
     container:{
        flex: 1,
        // justifyContent:'center',
        // alignItems: 'center',
     },
     header:{
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
     },
     containerSignIn:{
        width: '90%',
        height: '55%',
        // borderWidth: 1,
        // borderColor: 'red',
        justifyContent:'center',
        paddingLeft: 4,
        paddingRight: 4,
        
     },
     containerSignUp:{
        width: '90%',
        height: '70%',
        // borderWidth: 1,
        // borderColor: 'red',
        justifyContent:'center',
        paddingLeft: 4,
        paddingRight: 4,
     },
     emailStyles:{
        // flex: 1
        height: 40,
        // borderWidth: 1,
        // borderColor: 'black',
        marginTop: 10,
     },
     passwordStyles:{
        //  flex:1
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: 'transparent',
        marginTop: 10,

     },
     confirmPasswordStyles:{
        //  flex: 1
        height: 40,
        // borderWidth: 1,
        // borderColor: 'black',
        marginTop: 10,
     },
     inputStyles:{
        height: '100%',
        // borderBottomWidth: 0.6,
        // borderBottomColor: "#0A539B",
     },
     button:{
         width: '30%',
         height: 30,
         justifyContent: 'center',
         alignItems: 'center',
         borderRadius: 50,
         alignSelf: 'flex-start',
         marginTop: 20,
         backgroundColor:"#0A539B"
     },
     buttonBlur:{
        width: '30%',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        alignSelf: 'flex-start',
        marginTop: 20,
        backgroundColor:'#85A9CD'
    },
    firstBlock:{
        flex:3.5,
        backgroundColor: 'white',
        alignItems: 'flex-start',
        paddingLeft: 15,
        justifyContent:'flex-end'
    },
    secondBlock:{
        flex:5.5,
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        paddingBottom: 20,
        // borderWidth: 1,
        // borderColor: 'red'
    },
    thirdBlock:{
        flex:1,
        flexDirection: 'row',
        // borderColor:'red',
        // borderWidth: 1,
        
    },
    signIn:{
    flex:1,
        // borderColor:'black',
        // borderWidth: 1,
    },
    signUp:{
    flex:1, 
        // borderColor:'black',
        // borderWidth: 1,
    },
    imageContainer:{
        height: '90%',
        width: 150,
    },
    image:{
        resizeMode: 'cover',
        height: '100%',
        width: '100%'
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