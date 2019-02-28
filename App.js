import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk';
import Dishes from "./src/containers/Dishes/Dishes";
import dishesReducer from "./src/store/reducers/dishesReducer";

const store = createStore(dishesReducer, applyMiddleware(thunkMiddleware));

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Dishes/>
            </Provider>
        );
    }
}

