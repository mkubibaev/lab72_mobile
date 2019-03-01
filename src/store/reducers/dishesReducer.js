import {FETCH_DISHES_SUCCESS} from "../actions/actionTypes";


const initialState = {
    dishes: {},
};

const dishesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DISHES_SUCCESS:
            return {
                ...state,
                dishes: action.dishes
            };
        default:
            return state;
    }
};

export default dishesReducer;
