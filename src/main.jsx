import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
// Pages
import Desktop from "./pages/Desktop.jsx";
import Home from "./pages/Home.jsx";

import "./styles/index.css";

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				element: <Desktop />,
				path: "/",
			},
			{
				element: <Home />,
				path: "/home",
			},
		],
	},
]);
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
