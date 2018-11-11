
import { SAVE_CONTENT,INPUT_UPDATE,CHANGE_MODE} from './actionTypes'

export const save = ()=>{
return{
    type: SAVE_CONTENT
}
}

export const inputUpdate = (key,value)=>{
    return{
        type: INPUT_UPDATE,
        key,
        value
    }
}

export const changeMode= ()=>{
    return {
        type: CHANGE_MODE
    }
}