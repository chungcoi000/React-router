import {Button, Card, Form, Input, notification} from "antd";
import Checkbox from "antd/es/checkbox/Checkbox";
import {Link, useNavigate} from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();
	const [form] = Form.useForm();
	const onFinish = (values) => {
		if (values.username === 'admin' && values.password === 'admin') {
			navigate('/home');
			notification.success({
				message: 'Login Success'
			})
		} else {
			notification.error({
				message: 'Username/Password Incorrect'
			})
		}
	};


	return (
		<div style={{
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-evenly',
			marginTop: '150px'
		}}>
			<Card
				title='Login Form'
			>
				<Form
					name="login"
					form={form}
					labelCol={{span: 8}}
					wrapperCol={{span: 16}}
					initialValues={{remember: true}}
					onFinish={onFinish}
				>
					<Form.Item
						label="Username"
						name="username"
						rules={[{required: true, message: 'Please input your username!'}]}
					>
						<Input/>
					</Form.Item>

					<Form.Item
						label="Password"
						name="password"
						rules={[{required: true, message: 'Please input your password!'}]}
					>
						<Input.Password/>
					</Form.Item>

					<Form.Item name="remember" valuePropName="checked" wrapperCol={{offset: 8, span: 16}}>
						<Checkbox>Remember me</Checkbox>
					</Form.Item>

					<Form.Item wrapperCol={{offset: 8, span: 16}}>
						<Button type="primary" htmlType="submit">
							Submit
						</Button>
					</Form.Item>
				</Form>
			</Card>
		</div>
	)
}

export default Login