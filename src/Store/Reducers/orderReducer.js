import {ADD_SELECTED , CLEAR_SELECTED,ITEM_SELECT,UPDATE_FLAVOR,UPDATE_SIZE} from "../Actions/actionTypes"


const initState= {
   
        id:0,
       selected:null,
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
        // case UPDATE_FLAVOR:
        // return {
        //     ...state,
        //     selected:{
        //         ...selected,
        //         flavor: action.flavor
        //     }
        // }
        // case ITEM_SELECT:
        // return {
        //     ...state,
        //     Rxhighlighted:action.payload
        // }
       
        default:
        return state
    }
   
}

export default reducer