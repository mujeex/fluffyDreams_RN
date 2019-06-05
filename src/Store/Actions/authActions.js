import {AsyncStorage} from 'react-native'
import { TRY_AUTH,ONLOGIN,AUTH_SET_TOKEN,AUTH_REMOVE_TOKEN,ONLOGOUT} from "./actionTypes"
import {uiStartLoading, uiStopLoading} from '../Actions/index'

const apiKey='AIzaSyCUNrB_KT8aMGLLqn0z3OaTMm95lErN-ho'

export const tryAuth = (authData, authMode) => {
    return dispatch => {
        dispatch(uiStartLoading())
       
        let url='https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key='+ apiKey
        if(authMode == 'signUp'){
            url='https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key='+ apiKey
        }
        fetch(url, {
            method: "POST",
            body:JSON.stringify({
                email:authData.email,
                password:authData.password,
                returnSecureToken: true
            }),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(parsedRes => { 
            console.log(parsedRes)
            dispatch(uiStopLoading())
            if(!parsedRes.idToken){
                console.log(parsedRes)
                alert('Token not found try something else')
            }else{
                //we need to pass the token that we got from successfully having to login to the firestore in order to access database
                dispatch(authStoreToken(parsedRes.idToken,parsedRes.expiresIn,parsedRes.refreshToken))
                console.log(parsedRes)
                // this is when i allow user to view to user profile
                dispatch({type: ONLOGIN})
            }
        }).catch(error=>{
            console.log(error)
            dispatch(uiStopLoading())
            alert('There is a problem with your network')
        })
    }
}

//this is for storing the key parsed from login into the async storage and redux storage as well
export const authStoreToken=(token, expiresIn, refreshToken)=> {
    return dispatch=>{
   
        const now= new Date()
        const expiryDate = now.getTime()+ expiresIn  * 1000
        dispatch(authSetToken(token,expiryDate))
        console.log(now, new Date(expiryDate))
        AsyncStorage.setItem('fluffy:auth:token', token)
        AsyncStorage.setItem('fluffy:auth:expiryDate', expiryDate.toString())
        AsyncStorage.setItem('fluffy:auth:refreshToken',refreshToken)
    }
}

 const authSetToken =(token,expiryDate) =>{
    return {
        type: AUTH_SET_TOKEN,
        token,
        expiryDate
    }
}
 export const getAuthToken= () => {
    return (dispatch, getState) => {
        const promise= new Promise((resolve, reject)=>{
            const token= getState().auth.token
            const expiryDate= getState().auth.expiryDate
        // console.log(token)
            if(!token || new Date(expiryDate) <= new Date()){
                let fetchedToken
                //Here i checked to see if the token exists in the async storage since it doesn't exist in the redux store.
                AsyncStorage.getItem('fluffy:auth:token')
                .catch(()=> reject())
                //this 'then' block now returns the expiry date that has been stored in the async storage if it exists
                .then(tokenFromStorage=>{
                    fetchedToken= tokenFromStorage
                    if(!tokenFromStorage){
                        reject()
                        return;
                    }
                  return AsyncStorage.getItem('fluffy:auth:expiryDate')  
                })
                //the reason for this 'then' block is because async storage returns a promise
                .then(expiryDate => {
                    const parsedExpiryDate= new Date(parseInt(expiryDate)) 
                    const now= new Date()
                    if(parsedExpiryDate> now){
                        dispatch(authSetToken(fetchedToken))
                        resolve(fetchedToken)
                    }else{
                        reject()
                    }
                    })
                .catch(err=> reject())
            }else{
                //this is executed when the token exists in the redux store
                resolve(token)
            } 
        })
       return promise
       .catch(err => {
          return  AsyncStorage.getItem('fluffy:auth:refreshToken')
            .then(refreshToken=> {
                fetch('https://securetoken.googleapis.com/v1/token?key='+apiKey,{
                    method: 'POST',
                    headers:{
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                   body: "grant_type=refresh_token&refresh_token="+ refreshToken,

                })
                .then(res=> res.json())
                .then(parsedRes => {
                    if(parsedRes.id_token){
                        // if the token expires then i want it to restore everything back to the async storage and redux store
                        dispatch(authStoreToken(parsedRes.id_token,parsedRes.expires_in,parsedRes.refresh_token)) 
                        console.log('successful'+ parsedRes.refresh_token)
                        return parsedRes.id_token
                    }else{
                        dispatch(authClearStorage())
                    }
                })
            })
        })
     .then(token =>{
         if(!token){
             throw(new Error())
         }else{
             return token
         }
     }) 
    } 
}

export const autoSignIn =() =>{
    return dispatch =>{
        dispatch(getAuthToken())
        .then( token => {
            dispatch({type: ONLOGIN})
        })
        .catch(err=> console.log(err))
    }
}
    
export const authClearStorage=() =>{
    return dispatch =>{
        AsyncStorage.removeItem('fluffy:auth:token')
        AsyncStorage.removeItem('fluffy:auth:expiryDate')
       return AsyncStorage.removeItem('fluffy:auth:refreshToken')
    }
}



export const authLogOut= () => {
    return dispatch=>{
        dispatch(authClearStorage())
        .then(()=>{
            dispatch({type:ONLOGOUT})
        })
        dispatch(authRemoveToken())
    }
}

export const authRemoveToken=()=>{
    return{
        type: AUTH_REMOVE_TOKEN
    }
}