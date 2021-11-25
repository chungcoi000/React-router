import { Menu} from "antd";
import { Link } from "react-router-dom";
import {HomeFilled, MailOutlined, ShopFilled} from "@ant-design/icons";
import {useState} from "react";

const Views = () => {
	const [current, setCurrent] = useState('home');

	const handleClick = (event) => {
		setCurrent(event.key)
	}
	return (
		<div>
			<Menu
				onClick={handleClick}
				selectedKeys={current}
				mode='horizontal'
			>
				<Menu.Item key='home' icon={<HomeFilled/>}>
					<Link to='/home'>Home</Link>
				</Menu.Item>
				<Menu.Item key='shop' icon={<ShopFilled/>}>
					<Link to='/shop'>Shop</Link>
				</Menu.Item>
				<Menu.Item key="about" icon={<MailOutlined/>}>
					<Link to='/about'>About</Link>
				</Menu.Item>
				<Menu.Item key='logout'
					danger='true'
				>
					<Link to='/'>Logout</Link>
				</Menu.Item>
			</Menu>

		</div>
	)
}

export default Views