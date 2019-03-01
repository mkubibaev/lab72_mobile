import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from "redux";
import thunkMiddleware from 'redux-thunk';
import Dishes from "./src/containers/Dishes/Dishes";
import dishesReducer from "./src/store/reducers/dishesReducer";
import orderReducer from "./src/store/reducers/orderReducer";

const rootReducer = combineReducers({
    dishes: dishesReducer,
    order: orderReducer
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Dishes/>
            </Provider>
        );
    }
}

