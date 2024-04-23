import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { useState } from "react";

import InputEmail from "../components/InputEmail";
import InputPassword from "../components/InputPassword";

function Login() {
	const { logInWithMedia, logIn } = useAuth();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	return (
		<section className="dark:bg-gray-900 py-6">
			<div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center px-6 mx-auto lg:py-0">
				<img
					src="https://i.ibb.co/nCRgVMV/login.png"
					alt="login form"
					className="w-11/12"
				/>
				<div className="w-full bg-white rounded-lg shadow-sm border dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
							Sign in to your account
						</h1>
						<form
							autoComplete="on"
							className="space-y-4 md:space-y-6"
							onSubmit={(e) => e.preventDefault()}
						>
							<InputEmail
								id="email"
								onChange={(e) => setEmail(e.target.value)}
							/>
							<InputPassword
								id="password"
								label="Password"
								onChange={(e) => setPassword(e.target.value)}
							/>

							<div className="flex items-center justify-between">
								<div className="flex items-start">
									<div className="flex items-center h-5">
										<input
											id="remember"
											aria-describedby="remember"
											type="checkbox"
											className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primaryForm-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primaryForm-600 dark:ring-offset-gray-800"
											required={true}
										/>
									</div>
									<div className="ml-3 text-sm">
										<label
											htmlFor="remember"
											className="text-gray-500 dark:text-gray-300"
										>
											Remember me
										</label>
									</div>
								</div>
								<a className="text-sm font-medium text-primaryForm-600 hover:underline dark:text-primaryForm-500">
									Forgot password?
								</a>
							</div>
							<button
								type="submit"
								className="w-full text-white bg-primaryForm-600 hover:bg-primaryForm-700 focus:ring-4 focus:outline-none focus:ring-primaryForm-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primaryForm-600 dark:hover:bg-primaryForm-700 dark:focus:ring-primaryForm-800"
								onClick={() => {
									logIn(email, password);
								}}
							>
								Sign in
							</button>
							<p className="text-center before:content-[''] before:w-full before:bg-gray-200 before:h-[1px] gap-1 flex items-center after:content-[''] after:w-full after:bg-gray-200 after:h-[1px]">
								or
							</p>
							<figure className="flex justify-center items-center gap-4 *:w-20 border-b pb-4 *:border *:p-4 *:rounded-lg">
								<button onClick={logInWithMedia}>
									<img
										src="https://i.postimg.cc/HWwMP6Rw/google.png"
										alt="google"
									/>
								</button>
								<button>
									<img
										src="https://i.postimg.cc/wvJNz2vd/facebook.png"
										alt="facebook"
									/>
								</button>
								<button>
									<img
										src="https://i.postimg.cc/gjH6X08S/github.png"
										alt="github"
									/>
								</button>
							</figure>
							<p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
								Don’t have an account yet?{" "}
								<Link to="/signup">
									<button className="font-medium text-primaryForm-600 hover:underline dark:text-primaryForm-500">
										Sign up
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

export default Login;
