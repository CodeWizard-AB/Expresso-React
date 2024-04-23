import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { object, string, ref } from "yup";

import Button from "../components/Button";
import ErrorMessage from "../components/ErrorMessage";
import InputEmail from "../components/InputEmail";
import InputPassword from "../components/InputPassword";

import { useState } from "react";

const userSchema = object({
	// email: string()
	// 	.required("Email is required")
	// 	.matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address"),

	password: string()
		.min(8, "Password must be at least 8 characters long")
		.required("Password is required"),

	confirmPassword: string()
		.required("Confirm password is required")
		.oneOf([ref("password")], "Password must match"),
});

function SignUp() {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [confirmPassword, setConfirmPassword] = useState();
	const [error, setError] = useState(null);
	const { signUp, user } = useAuth();

	const validation = async function () {
		setError(null);
		try {
			await userSchema.validate(
				{ password, confirmPassword },
				{
					abortEarly: false,
				}
			);
		} catch (error) {
			const errorObj = {};
			error.inner.forEach((err) => {
				errorObj[err.path] = err.message;
			});
			setError(errorObj);
		}
	};

	console.log(user);

	const handleSignup = function (e) {
		e.preventDefault();
		validation();
		if (error === null && !user) {
			signUp(email, password);
			setEmail("");
			setPassword("");
			setConfirmPassword("");
		}
	};

	return (
		<section className="dark:bg-gray-900 py-6">
			<div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center px-6 mx-auto lg:py-0">
				<img
					src="https://i.postimg.cc/k45r3RGq/signup.jpg"
					alt="signup form"
					className="w-11/12"
				/>

				<div className="w-full bg-white rounded-lg border shadow-sm dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 ">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
							Create an account
						</h1>
						<form onSubmit={handleSignup}>
							<InputEmail
								id="email"
								onChange={(e) => setEmail(e.target.value)}
							/>
							<ErrorMessage type="email" />

							<InputPassword
								id="password"
								label="Password"
								onChange={(e) => setPassword(e.target.value)}
							/>
							<ErrorMessage error={error?.password} />

							<InputPassword
								id="confirm-password"
								label="Confirm password"
								onChange={(e) => setConfirmPassword(e.target.value)}
							/>
							<ErrorMessage error={error?.confirmPassword} />

							<div className="flex items-start">
								<div className="flex items-center h-5">
									<input
										id="terms"
										aria-describedby="terms"
										type="checkbox"
										className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primaryForm-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primaryForm-600 dark:ring-offset-gray-800"
										required={true}
									/>
								</div>
								<div className="ml-3 text-sm">
									<label
										htmlFor="terms"
										className="font-light text-gray-500 dark:text-gray-300"
									>
										I accept the{" "}
										<a
											className="font-medium text-primaryForm-600 hover:underline dark:text-primaryForm-500"
											href="#"
										>
											Terms and Conditions
										</a>
									</label>
								</div>
							</div>

							<Button>Create an account</Button>

							<p className="text-sm font-light text-gray-500 dark:text-gray-400">
								Already have an account?{" "}
								<Link to="/login">
									<button className="font-medium text-primaryForm-600 hover:underline dark:text-primaryForm-500">
										Login here
									</button>
								</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default SignUp;
