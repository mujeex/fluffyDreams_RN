import {ADD_SELECTED , CLEAR_SELECTED,UPDATE_PRICE} from "../Actions/actionTypes"


const initState= {
   
        id:0,
       selected:null,
       cart:[],
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
            total: action.price[0]+action.price[1]+ action.price[2]
        }
        default:
        return state
    }
   
}

export default reducer