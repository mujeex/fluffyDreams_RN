import {ADD_SELECTED , CLEAR_SELECTED, UPDATE_FLAVOR, UPDATE_SIZE,COUNTER_INCREASE,COUNTER_DECREASE,PUSH_TO_CART,UPDATE_TOPPINGS,REUPDATE_TOPPINGS} from "../Actions/actionTypes"


const initState= {
   
        id:0,
       selected:null,
       itemCounter:0,

       cart:[],

    //    cart:[],
    //    Rxhighlighted:null

       
}

const reducer = (state=initState, action) =>{
    switch(action.type){
        case ADD_SELECTED :
        return {
            ...state,
            selected: action.payload
        }
        case CLEAR_SELECTED:
        return{
            ...state,
            selected: null
        }
        case UPDATE_FLAVOR:
        return {
            ...state,
            selected:{
                ...state.selected,
                flavor: action.flavor
            }
        }
        case UPDATE_SIZE:
        return {
            ...state,
            selected:{
                ...state.selected,
                size: action.size
            }
        }
        
        case UPDATE_TOPPINGS:
        let newToppings= state.selected.toppings.slice()
        let Exists= newToppings.filter(toppings => toppings == action.topping)

        if(Exists.length!=0){
            newToppings= newToppings
        }else{
            newToppings.push(action.topping)
        }
         
        return {
            ...state,
            selected:{
                ...state.selected,
                toppings: newToppings
                // [...state.selected.toppings, action.topping]
            }
        }
        case REUPDATE_TOPPINGS:
        return{
            ...state,
            selected:{
                ...state.selected,
                toppings: state.selected.toppings.filter(toppings=> toppings !== action.topping)
            }
        }
       case COUNTER_INCREASE:
       return{
           ...state,
           itemCounter: state.itemCounter+1
       }

       case COUNTER_DECREASE:
       return{
           ...state,
           itemCounter: state.itemCounter-1
       }

       case PUSH_TO_CART:

       let newCopy= state.cart.slice()
       let alreadyExists= newCopy.filter(item => item.id == action.item.id)

       if(alreadyExists.length!=0){
           newCopy= newCopy
       }else{
           newCopy.push(action.item)
       }
       return{
          
           ...state,
           cart: newCopy
        //    [...state.cart,action.item],

       }
        default:
        return state
    }
   
}

export default reducer