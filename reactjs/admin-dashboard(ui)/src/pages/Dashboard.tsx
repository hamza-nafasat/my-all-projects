import { FaRegBell } from "react-icons/fa";
import AdminAside from "../components/AdminAside";
import { BsSearch } from "react-icons/bs";

const Dashboard = () => {
	return (
		<div className="adminContainer">
			<AdminAside />
			<main className="dashboard">
				{/* SECTION ONE  */}
				{/* ===========  */}
				<section className="searchBar">
					<BsSearch />
					<input
						type="text"
						id="adminSearch"
						name="adminSearch"
						placeholder="Search about users and docs"
					/>
					<FaRegBell />
					<img
						src="https://avatars.githubusercontent.com/u/149063128?v=4"
						alt="user dp"
					/>
				</section>
				{/* SECTOIN TWO  */}
				{/* ===========  */}
				<section className="widgetContainer"></section>
			</main>
		</div>
	);
};

export default Dashboard;
