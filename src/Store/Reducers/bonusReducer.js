import {ADD_POINTS} from '../Actions/actionTypes'

const initState={
    points: 0
}


const reducer= (state=initState, action)=>{
    switch(action.type){
        case ADD_POINTS:
        return{
            ...state,
            points: state.points + action.value
        }
        default:
        return state
    }
}

export default reducer