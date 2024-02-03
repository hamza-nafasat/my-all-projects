import { useState } from "react";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaCartPlus, FaSearch, FaSignInAlt, FaUserTie } from "react-icons/fa";

const user = {
	id: "hami",
	role: "admin",
};

const Header = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [isRegisterOpen, setIsRegisterOpen] = useState<boolean>(false);
	const onClose = () => {
		setIsOpen(false);
	};
	const logOutHandler = () => {
		onClose();
	};
	return (
		<nav className="header">
			<Link onClick={onClose} to={"/"} aria-label="home page">
				<IoHome />
			</Link>
			<Link onClick={onClose} to={"/search"} aria-label="search page">
				<FaSearch />
			</Link>
			<Link onClick={onClose} to={"/cart"} aria-label="cart page">
				<FaCartPlus />
			</Link>
			{/* IF USER LOGIN */}
			{/* ============= */}
			{user?.id ? (
				<>
					<button title="profile" onClick={() => setIsOpen((prev) => !prev)}>
						<FaUserTie />
					</button>
					<dialog open={isOpen}>
						<div>
							{user?.role === "admin" ? (
								<Link
									onClick={onClose}
									to={"/admin/dashboard"}
									aria-label="admin page"
								>
									Admin
								</Link>
							) : undefined}
							<Link onClick={onClose} to={"/orders"} aria-label="admin page">
								Orders
							</Link>
							<button onClick={logOutHandler}>Logout</button>
						</div>
					</dialog>
				</>
			) : (
				<>
					{/* IF USER NOT LOGIN */}
					{/* ================= */}
					<button onClick={() => setIsRegisterOpen((prev) => !prev)}>
						<FaSignInAlt color="blue" />
					</button>
					<dialog open={isRegisterOpen}>
						<div>
							<Link
								onClick={() => setIsRegisterOpen(false)}
								to={"/login"}
								aria-label="login page"
							>
								Login
							</Link>
							<Link
								onClick={() => setIsRegisterOpen(false)}
								to={"/signup"}
								aria-label="signup page"
							>
								Signup
							</Link>
						</div>
					</dialog>
				</>
			)}
		</nav>
	);
};

export default Header;
