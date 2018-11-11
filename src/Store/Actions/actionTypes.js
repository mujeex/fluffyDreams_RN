// homeReducer
export const SHOW_ITEMS = 'SHOW_ITEMS'

// cartReducer
export const ADD_ITEM= 'ADD_ITEM'
export const REMOVE_ITEM ='REMOVE_ITEM'
export const ADD_TO_DATABASE='ADD_TO_DATABASE'
// orderReducer
export const ADD_SELECTED = "ADD_SELECTED"
export const CLEAR_SELECTED = "CLEAR_SELECTED"
export const UPDATE_FLAVOR= 'UPDATE_FLAVOR'
export const UPDATE_SIZE= 'UPDATE_SIZE'
export const UPDATE_TOPPINGS='UPDATE_TOPPINGS' // for adding item in array when true
export const REUPDATE_TOPPINGS='REUPDATE_TOPPINGS' //for removing item in array when false
export const COUNTER_INCREASE ='COUNTER_INCREASE'
export const COUNTER_DECREASE= 'COUNTER_DECREASE'
export const PUSH_TO_CART= 'PUSH_TO_CART'
export const UPDATED_PRICE='UPDATED_PRICE'
export const REMOVE_FROM_CART='REMOVE_FROM_CART'
// authReducer
export const TRY_AUTH= 'TRY_AUTH'
export const ONLOGIN= 'ONLOGIN'
export const ONLOGOUT='ONLOGOUT'
export const AUTH_SET_TOKEN= 'AUTH_SET_TOKEN'
export const AUTH_REMOVE_TOKEN= 'AUTH_REMOVE_TOKEN'

// uiReducer
export const UI_START_LOADING = 'UI_START_LOADING'
export const  UI_STOP_LOADING= 'UI_STOP_LOADING'

// addressboxReducer
export const  SAVE_CONTENT= ' SAVE_CONTENT'
export const INPUT_UPDATE = 'INPUT_UPDATE'
export const CHANGE_MODE= 'CHANGE_MODE'