import {ADD_DISH, REMOVE_DISH} from "./actionTypes";

export const addDish = (id, price) => ({type: ADD_DISH, id, price});
export const removeDish = (id, price) => ({type: REMOVE_DISH, id, price});
