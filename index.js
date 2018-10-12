import { AppRegistry } from 'react-native';
import App from './App';
// import {App} from "./src/Components/index"
import {Provider} from "react-redux"
import configureStore from "./src/Store/configureStore"
import React from "react"

const store= configureStore()
 
const Root = () => (
    <Provider store={store} >
        <App/>
    </Provider>
);



AppRegistry.registerComponent('Fluffy', () => Root);
