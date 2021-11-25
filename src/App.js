import React, {useEffect} from "react";
import 'antd/dist/antd.css';
import {Routes, Route, Navigate} from "react-router-dom";
import Login from "./views/login";
import Home from "./views/home";
import About from "./views/about";
import Shop from "./views/shop";
import {getDataFromStorage} from "./service/storageServices";
import {setProduct} from "./redux/actions/Product";
import {useSelector} from "react-redux";
import Product from "./views/product";

const App = () => {

	useEffect(() => {
		const data = getDataFromStorage('products');
		setProduct(data);
	}, [])


	return (
		<div>
			<Routes>
				<Route path='/' element={<Login/>} />
				<Route path='/home' element={<Home/>}/>
				<Route path='/about' element={<About/>}/>
				<Route path='/shop' element={<Shop/>}/>
				<Route path='/product' element={<Product/>}/>
			</Routes>
		</div>
	)
}

export default App