import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./Pages/AddCoffee.jsx";
import Home from "./Pages/Home.jsx";
import CoffeeDetail from "./Pages/CoffeeDetail.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import Login from "./Pages/Login.jsx";
import SignUp from "./Pages/SignUp.jsx";
import ProtectedRoute from "./Pages/ProtectedRoute.jsx";

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
				element: (
					<ProtectedRoute>
						<AddCoffee />
					</ProtectedRoute>
				),
			},
			{
				path: "/coffee/:id",
				element: (
					<ProtectedRoute>
						<CoffeeDetail />
					</ProtectedRoute>
				),
				loader: ({ params: { id } }) =>
					fetch(`http://localhost:5000/coffees/${id}`),
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/signup",
				element: <SignUp />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	</React.StrictMode>
);
