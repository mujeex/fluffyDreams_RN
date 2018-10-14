import {ADD_SELECTED, CLEAR_SELECTED , ITEM_SELECT} from "./actionTypes"

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