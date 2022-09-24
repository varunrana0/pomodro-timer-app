// import Login from "./components/Login";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { AuthProvider } from "./components/context/AuthContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
import Signup from "./components/Signup";

function App() {
	return (
		<div className="App h-screen flex items-center justify-center w-full">
			<AuthProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/signup" element={<Signup />} />
						{/* <Route path="/" element={<Home />} /> */}
						{/* <Route path="/login" element={<Login />} /> */}
					</Routes>
				</BrowserRouter>
				<ToastContainer />
			</AuthProvider>
		</div>
	);
}

export default App;
