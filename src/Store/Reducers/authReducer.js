import {ONLOGIN,AUTH_SET_TOKEN,AUTH_REMOVE_TOKEN,ONLOGOUT} from '../Actions/actionTypes'
const initState={
    login: false,
    token: null,
    expiryDate: null
}

const reducer = (state=initState, action) => {
    switch(action.type){
        case ONLOGIN:
        return{
            ...state,
            login: true
        }
        case AUTH_SET_TOKEN:
        return{
            ...state,
            token: action.token,
            expiryDate: action.expiryDate
        }
        case AUTH_REMOVE_TOKEN:
        return{
            ...state,
            token: null,
            expiryDate: null
        }
        case ONLOGOUT:
        return{
            ...state,
            login: false
        }
    }
    return state
}

export default reducer