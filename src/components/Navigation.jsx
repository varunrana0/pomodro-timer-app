import React from "react";
import { UseAuth } from "./context/AuthContext";
import { useNavigate } from "react-router-dom";

function Navigation() {
	const { currentUser, logout } = UseAuth();
	const navigate = useNavigate();

	async function handleLogout() {
		try {
			await logout();
			navigate("/login");
			localStorage.removeItem("user");
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className="p-4 flex items-center justify-between w-full">
			<div className="text-base text-indigo-400 capitalize font-black">
				{currentUser && currentUser.email}
			</div>
			<button
				onClick={handleLogout}
				className="justify-end capitalize self-end bg-gray-800/30 py-2 px-4 rounded-md font-semibold text-indigo-500 hover:bg-gray-700/30 transition-colors duration-200 ease-in inline-block">
				logout
			</button>
		</div>
	);
}

export default Navigation;
