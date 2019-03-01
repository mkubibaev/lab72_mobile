import {FETCH_DISHES_FAILURE, FETCH_DISHES_REQUEST, FETCH_DISHES_SUCCESS} from "../actions/actionTypes";


const initialState = {
    dishes: {},
    error: null,
    loading: true
};

const dishesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DISHES_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case FETCH_DISHES_SUCCESS:
            return {
                ...state,
                dishes: action.dishes,
                loading: false,
            };

        case FETCH_DISHES_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false,
            };

        default:
            return state;
    }
};

export default dishesReducer;
