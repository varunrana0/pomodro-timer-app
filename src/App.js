import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="h-screen  overflow-auto ">
			<BrowserRouter>
					<Routes>
						<Route
							index
							path="/"
							element={<Home />}
						/>
						<Route path="/signup" element={<Signup />} />
						<Route path="/login" element={<Login />} />
					</Routes>
			</BrowserRouter>
			<ToastContainer />
		</div>
	);
}

export default App;
