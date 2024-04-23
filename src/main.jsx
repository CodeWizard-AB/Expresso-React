import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./Pages/AddCoffee.jsx";
import Home from "./Pages/Home.jsx";
import CoffeeDetail from "./Pages/CoffeeDetail.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <div>Not Found Page</div>,
		children: [
			{
				path: "/",
				element: <Home />,
				loader: () => fetch("http://localhost:5000/coffees"),
			},
			{
				path: "/add-coffee",
				element: <AddCoffee />,
			},
			{
				path: "/coffee/:id",
				element: <CoffeeDetail />,
				loader: ({ params: { id } }) =>
					fetch(`http://localhost:5000/coffees/${id}`),
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
