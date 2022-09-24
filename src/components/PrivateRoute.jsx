import React from "react";
import { Navigate } from "react-router-dom";
import { UseAuth } from "./context/AuthContext";

function PrivateRoute({ children }) {
	// const { currentUser } = UseAuth();
	const user = localStorage.getItem("user");

	return user ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
