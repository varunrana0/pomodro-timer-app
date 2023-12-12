import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

import { UseAuth } from "./context/AuthContext";

function Login() {
	const [toggle, setToggle] = useState(false);
	const userEmail = useRef();
	const userPass = useRef();
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	const { signIn } = UseAuth();

	function handleToggle() {
		setToggle(!toggle);
	}

	async function handleSubmit(e) {
		e.preventDefault();

		if (!userEmail.current.value || !userPass.current.value) return;
		try {
			setLoading(true);
			// await signIn(userEmail.current.value, userPass.current.value)
			// 	.then((res) => {
			// 		toast.success("loggedIn Successfully");
			// 		localStorage.setItem("user", res.user.email);
			// 		navigate("/");
			// 	})
				// .catch((err) => {
				// 	const code = err.code;
				// 	toast.error(code);
				// 	console.log(err.code);
				// });
					navigate("/");
		} catch (error) {
			console.log(error);
		}

		setLoading(false);
	}

	return (
		<div className="h-full w-full flex flex-col items-center justify-center bg-indigo-400 md:p-4 p-2">
			<div className="absolute inset-x-0 bottom-1 ">
				<svg
					viewBox="0 0 224 12"
					fill="currentColor"
					className="w-full -mb-1 text-white"
					preserveAspectRatio="none">
					<path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
				</svg>
			</div>
			<form
				className="max-w-sm mx-auto w-full border border-indigo-200/30 md:py-8 md:px-5 py-4 px-3 rounded-lg"
				onSubmit={handleSubmit}
				>
				<h3 className="text-indigo-50 font-semibold lg:text-4xl text-3xl text-center ">
					Login
				</h3>
				<div className="mt-10 flex flex-col space-y-2">
					<label
						className="text-indigo-200 font-medium tracking-wide text-sm"
						htmlFor="UserName">
						UserName
					</label>
					<input
						ref={userEmail}
						type="email"
						className="py-2 px-4 block w-full bg-transparent transition-colors ease-in duration-200 border border-indigo-200/30 rounded-lg placeholder:text-indigo-100 outline-none text-indigo-50 hover:bg-indigo-900 hover:bg-opacity-5"
						placeholder="Email"
					/>
				</div>
				<div className="mt-4 flex flex-col space-y-2">
					<label
						className="text-indigo-200 font-medium tracking-wide text-sm"
						htmlFor="Password">
						Password
					</label>
					<div className="flex items-center h-10 w-full border border-indigo-200/30 rounded-lg overflow-hidden">
						<input
							ref={userPass}
							type={toggle ? "text" : "password"}
							className="block w-full h-full py-2 px-4  bg-transparent transition-colors ease-in duration-200 placeholder:text-indigo-100 outline-none hover:bg-indigo-900 hover:bg-opacity-5 text-indigo-50"
							placeholder="Password"
						/>
						<div className="h-full border-l border-indigo-200/30 w-fit flex items-center justify-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								onClick={handleToggle}
								className="w-8 h-full px-1 flex-none hover:bg-indigo-900 hover:bg-opacity-5 transition-colors ease-in duration-200  text-indigo-100 cursor-pointer">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
								/>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
								/>
							</svg>
						</div>
					</div>
				</div>
				<p className="mt-2 text-indigo-50 text-xs font-medium tracking-wider cursor-pointer underline">
					forgot password?
				</p>

				{/* SUBMIT BUTTON */}
				<button
					disabled={loading}
					className="py-1 px-3 disabled:bg-opacity-40 flex items-center justify-center mt-10 hover:bg-indigo-900/10 transition-colors duration-300 ease-linear bg-opacity-5 rounded-lg border border-indigo-200/30 text-indigo-50 capitalize font-semibold">
					login
				</button>
			</form>
			<p className="mt-2">
				<span className="text-indigo-200 text-sm">Need an account?</span>
				&nbsp;&nbsp;
				<Link
					to="/signup"
					className="text-indigo-100 capitalize font-medium text-base tracking-wide">
					create
				</Link>
			</p>
		</div>
	);
}

export default Login;
