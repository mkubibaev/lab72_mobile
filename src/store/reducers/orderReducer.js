import {ADD_DISH, FETCH_DISHES_SUCCESS, REMOVE_DISH} from "../actions/actionTypes";

const DELIVERY_PRICE = 150;

const initialState = {
    orders: {},
    delivery: DELIVERY_PRICE,
    orderTotal: 0,
};

const setCart = (dishes) => {
    const orders = {};

    Object.keys(dishes).forEach(id => {
        orders[id] = 0;
    });

    return orders;
};

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DISHES_SUCCESS:
            return {
                ...state,
                orders: setCart(action.dishes)
            };

        case ADD_DISH:
            return {
                ...state,
                orders: {
                    ...state.orders,
                    [action.id]: state.orders[action.id] + 1
                },
                orderTotal: state.orderTotal + parseFloat(action.price)
            };

        case REMOVE_DISH:
            return {
                ...state,
                orders: {
                    ...state.orders,
                    [action.id]: state.orders[action.id] - 1
                },
                orderTotal: state.orderTotal - parseFloat(action.price)
            };

        default:
            return state
    }
};

export default orderReducer;
