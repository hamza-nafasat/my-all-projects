import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import Header from "./components/Header";

// =================================
// ========== USER ROUTES ==========
// =================================
const Home = lazy(() => import("./pages/Home"));
const Search = lazy(() => import("./pages/Search"));
const Cart = lazy(() => import("./pages/Cart"));
// NON AUTHENTICATED USER ONLY
const Login = lazy(() => import("./pages/Login"));
// AUTHENTIC USER ONLY
const Shipping = lazy(() => import("./pages/Shipping"));
const Orders = lazy(() => import("./pages/Orders"));
// ==================================
// ========== ADMIN ROUTES ==========
// ==================================
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const Products = lazy(() => import("./pages/admin/Products"));
const Customers = lazy(() => import("./pages/admin/Customers"));
const Transactions = lazy(() => import("./pages/admin/Transactions"));
// CHARTS
const BarCharts = lazy(() => import("./pages/admin/charts/BarCharts"));
const PieCharts = lazy(() => import("./pages/admin/charts/PieCharts"));
const LineCharts = lazy(() => import("./pages/admin/charts/LineCharts"));
// APPS
const Toss = lazy(() => import("./pages/admin/apps/Toss"));
const Coupon = lazy(() => import("./pages/admin/apps/Coupon"));
const Stopwatch = lazy(() => import("./pages/admin/apps/Stopwatch"));
// MANAGEMENT
const NewProduct = lazy(() => import("./pages/admin/management/NewProduct"));
const ProductsManagement = lazy(() => import("./pages/admin/management/ProductsManagement"));
const TransactionManagement = lazy(() => import("./pages/admin/management/TransactionManagement"));

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Suspense fallback={<Loader />}>
				<Routes>
					{/* ============================ */}
					{/* ====== USER ROUTES ========= */}
					{/* ============================ */}
					<Route path="/" element={<Home />} />
					<Route path="/search" element={<Search />} />
					<Route path="/cart" element={<Cart />} />
					{/* NON AUTHENTIC USER ONLY */}
					<Route path="/login" element={<Login />} />
					{/* AUTHENTIC USER ONLY */}
					<Route>
						<Route path="/shipping" element={<Shipping />} />
						<Route path="/orders" element={<Orders />} />
					</Route>
					{/* ============================ */}
					{/* ======== ADMIN ONLY ======== */}
					{/* ============================ */}
					<Route>
						<Route path="/admin/dashboard" element={<Dashboard />} />
						<Route path="/admin/products" element={<Products />} />
						<Route path="/admin/customers" element={<Customers />} />
						<Route path="/admin/transactions" element={<Transactions />} />
						{/* CHARTS  */}
						<Route path="/admin/charts/bar" element={<BarCharts />} />
						<Route path="/admin/charts/pie" element={<PieCharts />} />
						<Route path="/admin/charts/line" element={<LineCharts />} />
						{/* APPS  */}
						<Route path="/admin/app/toss" element={<Toss />} />
						<Route path="/admin/app/coupon" element={<Coupon />} />
						<Route path="/admin/app/stopwatch" element={<Stopwatch />} />
						{/* MANAGEMENT  */}
						<Route path="/admin/product/new" element={<NewProduct />} />
						<Route path="/admin/product/:id" element={<ProductsManagement />} />
						<Route path="/admin/transaction/:id" element={<TransactionManagement />} />
					</Route>
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
};

export default App;
