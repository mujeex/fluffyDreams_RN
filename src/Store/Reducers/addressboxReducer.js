import { SAVE_CONTENT,INPUT_UPDATE,CHANGE_MODE} from '../Actions/actionTypes'

const initState={
    save: false,
    address:'',
    pobox:'',
    gra:'',
    city:''
}

const reducer= (state=initState, action)=>{
    switch(action.type){
        case  SAVE_CONTENT:
        return{
            ...state,
            save: true
        }
        case INPUT_UPDATE:
        return{
            ...state,
            [action.key]:action.value
        }
        case CHANGE_MODE:
        return{
            ...state,
            save: false
        }
        default:
        return state
    }
}

export default reducer