import Home from "./pages/Home";
import Loader from "./components/Loader";
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Products = lazy(() => import("./pages/Products"));
const Customers = lazy(() => import("./pages/Customers"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Transactions = lazy(() => import("./pages/Transactions"));
// CHARTS
// ======
const BarCharts = lazy(() => import("./pages/charts/BarCharts"));
const PieCharts = lazy(() => import("./pages/charts/PieCharts"));
const LineCharts = lazy(() => import("./pages/charts/LineCharts"));
// APPS
// ====
const Toss = lazy(() => import("./pages/apps/Toss"));
const Coupon = lazy(() => import("./pages/apps/Coupon"));
const Stopwatch = lazy(() => import("./pages/apps/Stopwatch"));
// MANAGEMENT
// ==========
const NewProduct = lazy(() => import("./pages/management/NewProduct"));
const ProductsManagement = lazy(() => import("./pages/management/ProductsManagement"));
const TransactionManagement = lazy(() => import("./pages/management/TransactionManagement"));

const App = () => {
	return (
		<BrowserRouter>
			<Suspense fallback={<Loader />}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/admin/products" element={<Products />} />
					<Route path="/admin/customers" element={<Customers />} />
					<Route path="/admin/dashboard" element={<Dashboard />} />
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
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
};

export default App;
