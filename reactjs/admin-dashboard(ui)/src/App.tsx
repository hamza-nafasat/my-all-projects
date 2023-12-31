import Home from "./pages/Home";
import Loader from "./components/Loader";
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Products = lazy(() => import("./pages/Products"));
const Customers = lazy(() => import("./pages/Customers"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Transactions = lazy(() => import("./pages/Transactions"));

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
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
};

export default App;
