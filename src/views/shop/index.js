import Views from "../index";
import {Button, Card, Col, Form, Input, notification, PageHeader, Row, Select} from "antd";
import {useSelector} from "react-redux";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Modal from "antd/es/modal/Modal";
import {setProduct} from "../../redux/actions/Product";
import {setDataToStorage} from "../../service/storageServices";

const {Meta} = Card;
const {TextArea} = Input

const Shop = () => {
	const [form] = Form.useForm();
	const [visible, setVisible] = useState(false);
	const navigate = useNavigate();
	const products = useSelector(state => state.product);

	const onFinish = (values) => {
		let submitData = {
			name: values.name,
			price: values.price,
			category: values?.category ?? [],
			description: values.description
		}
		let newList = [...products, submitData];
		setProduct(newList);
		setDataToStorage('products', newList)
		setVisible(false);
		notification.success({
			message: 'Add product success'
		})
	}

	return (
		<div>
			<Views/>

			<PageHeader
				style={{
					marginTop: '30px',
					marginLeft: '90px'
				}}
				className="site-page-header"
				title="Shop"
			/>

			<Button
				style={{
					float: 'right',
					marginLeft: '60px'
				}}
				type="primary"
				onClick={() => {
					form.resetFields();
					setVisible(true)
				}}>
				Add Product
			</Button>

			<div style={{margin: '40px 0 0 120px'}}>
				<Row gutter={16}>
					{
						products.map((product, key) => {
							return (
								<Col span={4}>
									<Card
										hoverable
										style={{width: 240}}
										onClick={() => {
											navigate('/product',
												{
													state: {
														data: product
													}
												}
											)
										}}
										cover={<img
											alt="example"
											width='70px'
											height='250px'
											src="https://i.ytimg.com/vi/qU9mHegkTc4/maxresdefault.jpg"/>}
									>
										<Meta
											title={product.name}
											description={product.price}
										/>
									</Card>
								</Col>
							)
						})
					}
				</Row>
			</div>
			<Modal
				footer={false}
				visible={visible}
				onCancel={() => {
					setVisible(false)
				}}
				title='Add Product'
			>
				<Form
					form={form}
					onFinish={onFinish}
					layout="vertical"
				>
					<Form.Item label='Name' name='name'>
						<Input placeholder='Input something...'/>
					</Form.Item>
					<Row gutter={16}>
						<Col>
							<Form.Item label='Price' name='price'>
								<Input placeholder='Input price'/>
							</Form.Item>
						</Col>
						<Col span={13}>
							<Form.Item label='Category' name='category'>
								<Select mode='multiple' placeholder="Please select">
									<Select.Option value='kitchen'>Kitchen</Select.Option>
									<Select.Option value='bathroom'>Bathroom</Select.Option>
									<Select.Option value='livingroom'>Living Room</Select.Option>
									<Select.Option value='hell'>Hell</Select.Option>
								</Select>
							</Form.Item>
						</Col>
					</Row>
					<Form.Item label='Description' name='description'>
						<TextArea placeholder='Input description'/>
					</Form.Item>
					<Form.Item>
						<Button type='primary' htmlType='submit'>Submit</Button>
					</Form.Item>
				</Form>
			</Modal>
		</div>
	)
}

export default Shop