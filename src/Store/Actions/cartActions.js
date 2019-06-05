import {ADD_ITEM,REMOVE_ITEM,ADD_TO_DATABASE} from "./actionTypes"
import {getAuthToken} from './index'




export const addItem = (item,quantity) =>{
    return{
        type: ADD_ITEM,
        item,
        // quantity
    }
}

export const removeItem = (item,quantity) =>{
    return{
        type: REMOVE_ITEM,
        item,
        // quantity
    }
}

export const addToDatabase = (items)=>{
    return dispatch =>{
         //check users details through the parsedid that will be gotten from the redux state by the gettoken function
        //for it to be used for validation.
        const itemsData={
            orderCart: items
        }
    
        dispatch(getAuthToken()).then(token => {
            return  fetch('https://fluffydreams-b8f70.firebaseio.com/orders.json?auth='+token, {
                method: 'POST',
                body: JSON.stringify(itemsData)
            })
            .then(res => res.json())
            .then(parsedRes => {
                console.log(parsedRes)
            })
            .catch(err=>{
                alert('something went wrong')
            })
          
        })  .catch(()=>{
            alert("NO valid token found")
            // <Auth/>
        })
        
       
       
       
       
    }
}