import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import App from "./App.jsx";
// Pages
import Desktop from "./pages/Desktop.jsx";
import VsCode from "./pages/VsCode.jsx";

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
				path: "/vs-code",
				element: <VsCode />,
				children: [
					{
						path: ":file",
						element: <VsCode />,
					},
				],
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
