import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<Link to={"/admin/dashboard"}>Admin Dashboard</Link>
		</div>
	);
};

export default Home;
