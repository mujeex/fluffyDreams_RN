import {ADD_ITEM,REMOVE_ITEM} from "../Actions/actionTypes"

const initState={
    // cart:[],
    // itemCounter: 0
    checkoutCart:[],
    quantity:null
    // selectedItems:[]
}

const reducer = (state=initState, action) => {
    switch(action.type){
        case ADD_ITEM: 
        return{
            ...state,
            checkoutCart: [...state.checkoutCart, action.item],
            
           
        }
        case REMOVE_ITEM:
        return{
            ...state,
            checkoutCart: state.checkoutCart.filter(cart => cart.id !== action.item.id)
        }
        default:
        return state
    }
  
}

export default reducer