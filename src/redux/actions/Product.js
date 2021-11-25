import {SET_PRODUCT_LIST} from "../constant/Product";
import {store} from "../store/store";

export const setProduct = (data) => {
	return store.dispatch({
		type: SET_PRODUCT_LIST,
		payload: data
	})
}