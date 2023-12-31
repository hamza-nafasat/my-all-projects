import { useEffect } from "react";
// import {
// 	Header,
// 	Footer,
// 	NotFound,
// 	Dashboard,
// 	CreateCourse,
// 	AdminCourses,
// 	Users,
// 	Home,
// 	Contact,
// 	About,
// 	Courses,
// 	CoursePage,
// 	Request,
// 	ForgetPassword,
// 	ResetPassword,
// 	PaymentFail,
// 	PaymentSuccess,
// 	Subscribe,
// 	Login,
// 	Signup,
// 	Profile,
// 	ChangePassword,
// 	UpdateProfile,
// } from "./components";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Courses from "./components/courses/Courses";
import CoursePage from "./components/courses/CoursePage";
import Request from "./components/request/Request";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import ForgetPassword from "./components/auth/ForgetPassword";
import ResetPassword from "./components/auth/ResetPassword";
import Subscribe from "./components/payments/Subscribe";
import PaymentFail from "./components/payments/PaymentFail";
import PaymentSuccess from "./components/payments/PaymentSuccess";
import NotFound from "./components/layout/NotFound";
import Profile from "./components/profile/Profile";
import ChangePassword from "./components/profile/ChangePassword";
import UpdateProfile from "./components/profile/UpdateProfile";
import Dashboard from "./components/admin/dashboard/Dashbaord";
import AdminCourses from "./components/admin/admincourses/AdminCourses";
import CreateCourse from "./components/admin/createcourse/CreateCourse";
import Users from "./components/admin/users/Users";
import Loader from "./components/layout/Loader";
import toast, { Toaster } from "react-hot-toast";
import { loadUser } from "./redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { ProtectedRoute } from "protected-route-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getAllCourses } from "./redux/actions/courseAction";

function App() {
	const { isAuthenticated, user, message, error, loading } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	useEffect(() => {
		if (error) {
			toast.error(error);
			dispatch({ type: "clearError" });
		}

		if (message) {
			toast.success(message);
			dispatch({ type: "clearMessage" });
		}
	}, [dispatch, error, message]);

	useEffect(() => {
		dispatch(loadUser());
		dispatch(getAllCourses());
	}, [dispatch]);

	return (
		<Router>
			<Header isAuthenticated={isAuthenticated} user={user} />
			{loading ? (
				<Loader />
			) : (
				<>
					<Routes>
						<Route path="*" element={<NotFound />} />
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/courses" element={<Courses />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/request" element={<Request />} />
						<Route path="/paymentfail" element={<PaymentFail />} />
						<Route path="/paymentsuccess" element={<PaymentSuccess />} />
						<Route
							path="/signup"
							element={
								<ProtectedRoute
									isAuthenticated={!isAuthenticated}
									redirect="/profile"
								>
									<Signup />
								</ProtectedRoute>
							}
						/>
						<Route
							path="/login"
							element={
								<ProtectedRoute
									isAuthenticated={!isAuthenticated}
									redirect="/profile"
								>
									<Login />
								</ProtectedRoute>
							}
						/>
						<Route
							path="/forgetpassword"
							element={
								<ProtectedRoute
									isAuthenticated={!isAuthenticated}
									redirect="/profile"
								>
									<ForgetPassword />
								</ProtectedRoute>
							}
						/>
						<Route
							path="/resetpassword/:token"
							element={
								<ProtectedRoute
									isAuthenticated={!isAuthenticated}
									redirect="/profile"
								>
									<ResetPassword />
								</ProtectedRoute>
							}
						/>
						<Route
							path="/profile"
							element={
								<ProtectedRoute isAuthenticated={isAuthenticated}>
									<Profile user={user} />
								</ProtectedRoute>
							}
						/>
						<Route
							path="/updateprofile"
							element={
								<ProtectedRoute isAuthenticated={isAuthenticated}>
									<UpdateProfile user={user} />
								</ProtectedRoute>
							}
						/>
						<Route
							path="/changepassword"
							element={
								<ProtectedRoute isAuthenticated={isAuthenticated}>
									<ChangePassword />
								</ProtectedRoute>
							}
						/>
						<Route
							path="/subscribe"
							element={
								<ProtectedRoute isAuthenticated={isAuthenticated}>
									<Subscribe user={user} />
								</ProtectedRoute>
							}
						/>
						<Route
							path="/course/:id"
							element={
								<ProtectedRoute isAuthenticated={isAuthenticated}>
									<CoursePage user={user} />
								</ProtectedRoute>
							}
						/>
						{/* Admin Routes */}
						<Route
							path="/admin/dashboard"
							element={
								<ProtectedRoute
									adminRoute={true}
									isAuthenticated={isAuthenticated}
									isAdmin={user && user.role === "admin"}
								>
									<Dashboard />
								</ProtectedRoute>
							}
						/>
						<Route
							path="/admin/addcourse"
							element={
								<ProtectedRoute
									adminRoute={true}
									isAuthenticated={isAuthenticated}
									isAdmin={user && user.role === "admin"}
								>
									<CreateCourse />
								</ProtectedRoute>
							}
						/>
						<Route
							path="/admin/courses"
							element={
								<ProtectedRoute
									adminRoute={true}
									isAuthenticated={isAuthenticated}
									isAdmin={user && user.role === "admin"}
								>
									<AdminCourses />
								</ProtectedRoute>
							}
						/>
						<Route
							path="/admin/users"
							element={
								<ProtectedRoute
									adminRoute={true}
									isAuthenticated={isAuthenticated}
									isAdmin={user && user.role === "admin"}
								>
									<Users />
								</ProtectedRoute>
							}
						/>
					</Routes>
				</>
			)}
			<Footer />
			<Toaster />
		</Router>
	);
}

export default App;
