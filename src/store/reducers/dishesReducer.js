import {FETCH_DISHES_SUCCESS} from "../actions/actionTypes";

const DELIVERY_PRICE = 150;

const initialState = {
    dishes: [],
    delivery: DELIVERY_PRICE,
    orderTotal: 0,
};

const convertToArr = obj => {
    return Object.keys(obj).map(id => {
        return {...obj[id], id};
    });
};

const dishesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DISHES_SUCCESS:
            let dishes = [];

            if (action.dishes) {
                dishes = convertToArr(action.dishes);
            }
            return {
                ...state,
                dishes
            };
        default:
            return state;
    }
};

export default dishesReducer;
