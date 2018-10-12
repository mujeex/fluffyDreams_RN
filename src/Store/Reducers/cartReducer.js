import {ADD_SELECTED , CLEAR_SELECTED,UPDATE_PRICE} from "../Actions/actionTypes"


const initState= {
   
        id:0,
       selected:null,
       cart:[],

       details:{
        flavor:null,
        size:null,
        toppings:null
       },

       total:null
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
        case UPDATE_PRICE:
        return{
            ...state,
            // flavor: action.price[0]
            // total: action.price[0]+action.price[1]+ action.price[2]
            total: action.flavor+ action.size + action.toppings
        }
        default:
        return state
    }
   
}

export default reducer