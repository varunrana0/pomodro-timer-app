import { createContext, useContext, useState, useEffect } from "react";
import { app } from "../../firebaseConfig";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";

const AuthContext = createContext();

export function UseAuth() {
	return useContext(AuthContext);
}

const auth = getAuth();

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState();

	function createUser(email, password) {
		return createUserWithEmailAndPassword(auth, email, password);
	}

	function signIn(email, password) {
		return signInWithEmailAndPassword(auth, email, password);
	}

	useEffect(() => {
		const unregister = auth.onAuthStateChanged((user) => setCurrentUser(user));

		return unregister;
	}, []);

	const value = {
		currentUser,
		createUser,
		signIn,
	};
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
