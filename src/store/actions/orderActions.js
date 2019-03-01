import {ADD_DISH, ORDER_FAILURE, ORDER_REQUEST, ORDER_SUCCESS, REMOVE_DISH, RESET_ORDER} from "./actionTypes";
import axios from '../../axios-dishes';

export const addDish = (id, price) => ({type: ADD_DISH, id, price});
export const removeDish = (id, price) => ({type: REMOVE_DISH, id, price});

export const orderRequest = () => ({type: ORDER_REQUEST});
export const orderSuccess = () => ({type: ORDER_SUCCESS});
export const orderFailure = error => ({type: ORDER_FAILURE, error});

export const resetOrder = () => ({type: RESET_ORDER});

export const createOrder = (orderData) => {
    return dispatch => {
        dispatch(orderRequest());

        return axios.post('dishes-orders.json', orderData).then(
            () => {
                dispatch(orderSuccess());
                dispatch(resetOrder());
            },
            error => dispatch(orderFailure(error))
        );
    }
};
