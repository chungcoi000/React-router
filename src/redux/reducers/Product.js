import {SET_PRODUCT_LIST} from "../constant/Product";

const INITIAL_STATE = [];

const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_PRODUCT_LIST:
			return [...action.payload]
		default:
			return state
	}
}

export default reducer