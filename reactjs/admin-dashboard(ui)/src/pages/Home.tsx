import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div style={{ textAlign: "center" }}>
			<Link
				to={"/admin/dashboard"}
				style={{ color: "blue", fontWeight: 800, textDecoration: "underline" }}
			>
				Admin Dashboard
			</Link>
		</div>
	);
};

export default Home;
