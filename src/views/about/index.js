import Views from "../index";
import {PageHeader} from "antd";

const About = () => {
	return (
		<div>
			<Views />
			<PageHeader
				style={{
					marginTop: '30px'
				}}
				className="site-page-header"
				title="About"
			/>
		</div>
	)
}

export default About