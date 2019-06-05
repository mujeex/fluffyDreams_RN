import React, { Component } from 'react';
import { View, Text , StyleSheet,TouchableOpacity,Platform, Button} from 'react-native';
import {connect} from 'react-redux'
import {save,inputUpdate,changeMode} from '../../Store/Actions/index'
import FlexInput from '../UI/FlexInput'
import Icon from 'react-native-vector-icons/Ionicons'

 class AddressBox extends Component {
  state={
      box: 'empty',
      save: false,
      reduxInput:null,
      address:{
          value:'',
          touched: false
      },
      pobox:{
        value:'',
        touched: false
    },
      city:{
        value:'',
        touched: false
    },
      gra:{
        value:'',
        touched: false
    },
      
  }

  editHandler = () =>{
      if(this.props.modeState){
        this.props.changeMode()
      }

      if(this.state.box =='empty'){
          this.setState(prevState=>{
            return{
                ...prevState,
                box: 'fill'
            }
            })
      }
  }

  saveHandler= ()=>{
    // this.setState(prevState=>{
    //     return{
    //         ...prevState,
    //         save:true
    //     }
      
    // })
    this.props.save()
  }
  cancelHandler=()=>{
    this.setState(prevState=>{
        return{
            ...prevState,
            box: 'empty'
        }
      
    })
  }

  inputHandler =(text, target)=>{
      this.setState(prevState=>{
          return{
              ...prevState,
              reduxInput:this.props.inputUpdate(target,text),
            [target]:{
                value :text,
              touched:true
          }   
          }
          
      })
      console.log(text)
  }

  blurHandler =(key) =>{
    //   this.setState(prevState=>{
    //       return{
    //           ...prevState,
    //         [key]:{
    //             ...prevState.key,
    //             touched:false
    //         }
    //       }
     
    //   })
    console.log(key)
  }

  render() {

    let content =(
        <TouchableOpacity onPress={()=> this.editHandler()} style={styles.iconBox}>
        <View >
       <Icon name={Platform.OS =='android'?'md-add':'ios-add'} size={40}/>
        </View>
        </TouchableOpacity> 
        
    )
    if(this.state.box == "fill"){
        content=(

            <View style={{flex:1}}>
            <FlexInput  focus={this.state.address.touched} onChangeText={(text)=>this.inputHandler(text,'address')} value={this.state.address.value} placeholder='address'/>
            <FlexInput  focus={this.state.pobox.touched} onChangeText={(text)=>this.inputHandler(text,'pobox')} value={this.state.pobox.value} placeholder='p.o.box'/>
            <FlexInput  focus={this.state.gra.touched} onChangeText={(text)=>this.inputHandler(text,'gra')} value={this.state.gra.value} placeholder='gra'/>
            <FlexInput focus={this.state.city.touched} onChangeText={(text)=>this.inputHandler(text,'city')} value={this.state.city.value} placeholder='city'/>
  

            <View style={styles.buttonContainer}>
                <Button onPress={()=>this.saveHandler()} title='Save'/>
                <Button onPress={()=>this.cancelHandler()} title='Cancel'/>
            </View>
         </View>    
        )
    }else{
        content =(
            <TouchableOpacity onPress={()=> this.editHandler()} style={styles.iconBox}>
            <View>
           <Icon name={Platform.OS =='android'?'md-add':'ios-add'} size={40}/>
            </View>
            </TouchableOpacity>  
        ) 
    }

    //===================rendering area ==============================
   
        return (
            <View style={this.state.box=='fill'?styles.addressContainerExtended:styles.addressContainer}>
            {content}
          </View>   
      );
    
    
  }
}

const styles= StyleSheet.create({
    addressContainer:{
        height: 120,
        width: '80%',
        // borderWidth: 1,
        // borderColor: 'black',
        padding: 10,
        justifyContent:"flex-start",
        borderRadius: 5,
        marginLeft:20,
        marginTop: 10,
        shadowColor: '#0A539B',
        shadowOpacity: 0.2,
        shadowOffset: {
            height: 3
        },
        backgroundColor:'white'
    
      },
      addressContainerExtended:{
        height: 250,
        width: '80%',
        borderWidth: 1,
        borderColor: '#0A539B',
        padding: 10,
        justifyContent:"flex-start",
        borderRadius: 5,
        marginLeft:20,
        marginTop: 10,
      
      },
      addressBox:{
        height: '70%',
        width: '100%',
    
      },
      iconBox:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
      },
      buttonContainer:{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          width:'100%',
          margin: 8
      },
    
})

const mapDispatchToProps= dispatch =>{
    return{
        save:()=> dispatch(save()),
        inputUpdate:(key,value)=>dispatch(inputUpdate(key,value)),
        changeMode:()=>dispatch(changeMode())
    }
}


export default connect(null,mapDispatchToProps)(AddressBox)