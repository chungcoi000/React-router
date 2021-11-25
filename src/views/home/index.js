import Views from "../index";
import {PageHeader} from "antd";

const Home = () => {
	return (
		<div>
			<Views />
			<PageHeader
				style={{
					marginTop: '30px'
				}}
				className="site-page-header"
				title="Home"
			/>
		</div>
	)
}

export default Home