import {ADD_SELECTED, CLEAR_SELECTED , ITEM_SELECT,UPDATE_FLAVOR,UPDATE_SIZE} from "./actionTypes"

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