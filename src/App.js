import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AuthProvider } from "./components/context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";

function App() {
	return (
		<div className="h-screen  overflow-auto ">
			<BrowserRouter>
				<AuthProvider>
					<Routes>
						<Route
							index
							path="/"
							element={
								<PrivateRoute>
									<Home />
								</PrivateRoute>
							}
						/>
						<Route path="/signup" element={<Signup />} />
						<Route path="/login" element={<Login />} />
					</Routes>
				</AuthProvider>
			</BrowserRouter>
			<ToastContainer />
		</div>
	);
}

export default App;
