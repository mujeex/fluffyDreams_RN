import {ADD_ITEM,REMOVE_ITEM} from "../Actions/actionTypes"

const initState={
    // cart:[],
    // itemCounter: 0
    checkoutCart:[],
    // selectedItems:[]
}

const reducer = (state=initState, action) => {
    switch(action.type){
        case ADD_ITEM: 
        // //to check if it exists
        // let alreadyExists= state.checkoutCart.indexOf(action.item) > -1
        // //copy of original cart to make changes on, in order to avoid mutation
        // let copyCheckoutCart= state.checkoutCart.slice()

        // if(alreadyExists){
        //     copyCheckoutCart= copyCheckoutCart.filter(item => item.id != action.item.id)
        // }else{
        //     copyCheckoutCart.push(action.item)
        // }
        return{
            ...state,
            checkoutCart: [...state.checkoutCart, action.item]
           
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