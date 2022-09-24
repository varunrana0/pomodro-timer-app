import { createContext, useContext, useState, useEffect } from "react";
import "../../firebaseConfig";

import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
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

	function logout() {
		return signOut(auth);
	}

	useEffect(() => {
		const unregister = auth.onAuthStateChanged((user) => setCurrentUser(user));

		return unregister;
	}, []);

	const value = {
		currentUser,
		createUser,
		signIn,
		logout,
	};
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
