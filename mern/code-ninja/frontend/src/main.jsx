import "./index.css";
import React from "react";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import store from "./redux/store/store.js";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider as ReduxProvider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ReduxProvider store={store}>
			<ChakraProvider>
				<App />
			</ChakraProvider>
		</ReduxProvider>
	</React.StrictMode>
);
