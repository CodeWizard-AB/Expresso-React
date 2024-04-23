/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
// import { useEffect } from "react";

function ProtectedRoute({ children }) {
	const location = useLocation();
	const { user } = useAuth();

	return user ? children : <Navigate to="/login" state={location.pathname} />;
}

export default ProtectedRoute;
