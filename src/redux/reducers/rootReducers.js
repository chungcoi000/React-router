import {combineReducers} from "redux";
import Product from "./Product";

const RootReducers = combineReducers({
	product: Product
})

export default RootReducers