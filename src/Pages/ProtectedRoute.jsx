import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
	const navigate = useNavigate();
	const { user } = useAuth();

	useEffect(() => {
		if (!user) navigate("/login");
		return;
	}, [user, navigate]);

	return user && children;
}

export default ProtectedRoute;
