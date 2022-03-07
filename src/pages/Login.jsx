import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContextProvider";
// import { db } from "../database/firebase.config";

function Login() {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordToggle, setPasswordToggle] = useState(true);

	const { logIn, loginWithGoogle } = useUserAuth();

	const emailPasswordLoginHandler = async () => {

		if (email === "" || password === "") {
			alert("Please!!! Enter all fields!");
			return;
		}

		try {
			await logIn(email, password);
		} catch (error) {
			return alert(error)
		}

		alert(`Email : ${email} | Password : ${password}`);

	};

	async function googleLoginHandler() {
		try {
			await loginWithGoogle();
		} catch (error) {
			alert(error.message);
		}
	};

	return (
		<div className="flex items-center h-screen w-full font-sans bg-indigo-500">
			<div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 md:mx-auto">
				<p tabIndex={0} role="heading" aria-label="Login to your account" className="text-2xl font-extrabold leading-6 text-gray-800">
					Login to your account
				</p>
				<p className="text-sm mt-4 font-medium leading-none text-gray-500">
					Dont have account? &nbsp;{" "}
					<Link to="/signup">
						<span tabIndex={0} role="link" aria-label="Sign up here" className="text-sm font-bold leading-none underline text-indigo-900 cursor-pointer">
							{" "}
							Sign up here
						</span>
					</Link>
				</p>
				<button aria-label="Continue with google" role="button" className="focus:outline-none focus:ring-2 focus:ring-offset-1  py-2.5 px-4 border-2 rounded-lg border-indigo-700 flex items-center w-full mt-10"
					onClick={googleLoginHandler}
				>
					<img src="/images/google.svg" />
					<p className="text-base font-medium ml-4 text-gray-700">Continue with Google</p>
				</button>

				<div className="w-full flex items-center justify-between py-6">
					<hr className="w-full bg-gray-400" />
					<p className="text-base font-medium leading-4 px-2.5 text-gray-400">OR</p>
					<hr className="w-full bg-gray-400  " />
				</div>
				<div>
					<lable className="text-sm font-medium leading-none text-gray-800">Email</lable>
					<input aria-label="enter email adress" role="input" type="email" className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
						value={email} onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="mt-6  w-full">
					<lable className="text-sm font-medium leading-none text-gray-800">Password</lable>
					<div className="">
						<input aria-label="enter Password" role="input" className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2 pr-10"
							value={password} type={passwordToggle ? 'password' : ''} onChange={(e) => setPassword(e.target.value)}
						/>
						<div className="float-left">
							<Link href="/forgetPassword">
								<a className="px-1 mr-2 text-xs float-right font-display font-semibold text-indigo-600 hover:text-indigo-800 cursor-pointer">
									Forgot Password?
								</a>
							</Link>
						</div>
						<div className="float-right mt-1.5 flex items-center">
							<input type="checkbox" name="passswordToggle" id="passswordToggle" className="px-1 mr-1/2 cursor-pointer h-3 w-3"
								onChange={() => setPasswordToggle(!passwordToggle)}
							/>
							<label htmlFor="passswordToggle" className="text-xs cursor-pointer">Show Password</label>
						</div>
					</div>
				</div>
				<div className="mt-10">
					<button role="button" aria-label="create my account" className="focus:ring-2 focus:ring-offset focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded-lg hover:bg-indigo-600 py-4 w-full"
						onClick={emailPasswordLoginHandler}
					>
						Log In
					</button>
				</div>
			</div>
		</div>
	);
}

export default Login;
