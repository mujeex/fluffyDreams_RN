import {createStore, combineReducers,compose, applyMiddleware} from "redux"
import homeReducer from "./Reducers/homeReducer"
import orderReducer from "./Reducers/orderReducer"
import cartReducer from "./Reducers/cartReducer"

import thunk from "redux-thunk"

const rootReducer= combineReducers({
    home: homeReducer,
    order: orderReducer,
    cart: cartReducer

})

let composeEnhancer= compose

if(__DEV__){
    composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
    return createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))
}

export default configureStore