import {ADD_SELECTED, CLEAR_SELECTED , UPDATE_PRICE} from "./actionTypes"

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

export const updatePrice = (price) => {

    return {
        type: UPDATE_PRICE,
        price
        // flavor: price[0],
        // size: price[1],
        // toppings: price[3]
        
    }
}