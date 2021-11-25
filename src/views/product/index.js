import Views from "../index";
import {useLocation} from "react-router-dom";
import {Descriptions, PageHeader, Tag} from "antd";

const Product = () => {
	const {state} = useLocation();
	return (
		<div>
			<Views/>
			<PageHeader
				style={{
					marginTop: '30px',
					marginLeft: '90px'

				}}
				className="site-page-header"
				title="Product"
			/>

			<div
				style={{
					margin: '40px 0 0 120px',
					display: 'flex',
					flexWrap: 'wrap'
				}}>
				{/*<Descriptions title='Product Detail'>*/}
				{/*	<Descriptions.Item label='Product'>*/}
				{/*		{state.data.name}*/}
				{/*	</Descriptions.Item>*/}
				{/*	<Descriptions.Item label='Price'>*/}
				{/*		{state.data.price}*/}
				{/*	</Descriptions.Item>*/}
				{/*	<Descriptions.Item label='Description'>*/}
				{/*		{state.data.description}*/}
				{/*	</Descriptions.Item>*/}
				{/*</Descriptions>*/}
				{/*{*/}
				{/*	state.data.category.map(tag => {*/}
				{/*		return (*/}
				{/*			<Tag title='Categories'>{tag}</Tag>*/}
				{/*		)*/}
				{/*	})*/}
				{/*}*/}
				<div style={{
					display: 'flex',
					flex: '0 0 40%',
					alignItems: 'center',
					justifyContent: 'center'
				}}>
					<img
						alt="example"
						width='350px'
						height='450px'
						src="https://i.ytimg.com/vi/qU9mHegkTc4/maxresdefault.jpg"
					/>
				</div>
				<div style={{
					flex: '0 0 60%'
				}}>
					<h1>{state.data.name}</h1>
					<h2>Price: {state.data.price}</h2>
					<h2>Category:
						{
							state.data.category.map(data => {
								return (
									<Tag>{data}</Tag>
								)
							})
						}
					</h2>
					<h2>
						Description: {state.data.description}
					</h2>
				</div>
			</div>
		</div>
	)
}

export default Product