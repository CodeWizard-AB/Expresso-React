/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import toast from "react-hot-toast";

import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from "firebase/auth";

const AuthContext = createContext();

const AuthProvider = function ({ children }) {
	const [user, setUser] = useState();

	useEffect(() => {
		const active = onAuthStateChanged(auth, (user) => {
			setUser(user);
		});
		return () => active();
	}, []);

	const signUp = async function (email, password) {
		try {
			await createUserWithEmailAndPassword(auth, email, password);
			toast.success("Sign up successfully!");
			await fetch("http://localhost:5000/user", {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({ email, password }),
			});
		} catch (error) {
			toast.error(error.message);
		}
	};

	const logIn = async function (email, password) {
		try {
			await signInWithEmailAndPassword(auth, email, password);
			toast.success("Log in successfully");
		} catch (error) {
			toast.error(error.message);
		}
	};

	const logOut = async function () {
		try {
			await signOut(auth);
			toast.success("Log out successfully");
		} catch (error) {
			toast.error(error.message);
		}
	};

	const logInWithMedia = async function () {
		const provider = new GoogleAuthProvider();
		try {
			await signInWithPopup(auth, provider);
			toast.success("Log in successfully");
		} catch (error) {
			toast.error(error.message);
		}
	};

	return (
		<AuthContext.Provider
			value={{ signUp, logIn, logOut, user, logInWithMedia }}
		>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = function () {
	const context = useContext(AuthContext);
	if (!context) throw new Error("Call outside the provider");
	return context;
};

export { useAuth, AuthProvider };
