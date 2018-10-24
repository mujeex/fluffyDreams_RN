import {ADD_SELECTED, CLEAR_SELECTED , ITEM_SELECT ,UPDATE_FLAVOR ,UPDATE_SIZE, COUNTER_INCREASE,COUNTER_DECREASE,PUSH_TO_CART,UPDATE_TOPPINGS,REUPDATE_TOPPINGS} from "./actionTypes"

export const addSelected= (item) => {
    return {
        type: ADD_SELECTED,
        payload: item
    }
}

export const clearSelected= () => {
    return {
        type: CLEAR_SELECTED
    }
}

export const itemSelect = (bool) => {

    return {
        type: ITEM_SELECT,
        payload: bool
    }
}

export const updateFlavor = (flavor) => {
    return {
        type: UPDATE_FLAVOR,
        flavor
    }
}

export const updateSize = (size) =>{
    return{
        type: UPDATE_SIZE,
        size
    }
}
export const counterIncrease =() => {
    return{
        type: COUNTER_INCREASE
    }
}

export const counterDecrease =() =>{
    return{
        type: COUNTER_DECREASE
    }
}
export const pushToCart =(item) => {
    return{
        type:PUSH_TO_CART,
        item
    }
}

export const updateToppings =(topping) =>{
    return{
        type: UPDATE_TOPPINGS,
        topping
    }
}

export const ReUpdateToppings =(topping) =>{
    return{
        type: REUPDATE_TOPPINGS,
        topping
    }
}