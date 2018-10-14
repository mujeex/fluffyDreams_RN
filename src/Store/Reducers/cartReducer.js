import {ADD_SELECTED , CLEAR_SELECTED,ITEM_SELECT} from "../Actions/actionTypes"


const initState= {
   
        id:0,
       selected:null,
       cart:[],
       Rxhighlighted:false

       
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
        case ITEM_SELECT:
        return {
            ...state,
            Rxhighlighted:action.payload
        }
       
        default:
        return state
    }
   
}

export default reducer