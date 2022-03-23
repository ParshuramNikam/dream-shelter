import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContextProvider";
import { db } from "../database/firebase.config";
import { notifyError, notifyInfo, notifySuccess, notifyWarning } from "../utils/reactToast";
// import { db } from "../database/firebase.config";
import firebase from "firebase";
import "react-toastify/dist/ReactToastify.css";
// import {
// 	notifyError,
// 	notifyInfo,
// 	notifySuccess,
// 	notifyWarning,
// } from "../utils/reactToast";


function Login() {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordToggle, setPasswordToggle] = useState(true);

	const { logIn, loginWithGoogle } = useUserAuth();

	const history = useHistory();

	const emailPasswordLoginHandler = async () => {

		if (email === "" || password === "") {
			notifyWarning("Please!!! Enter all fields!");
			return;
		}

		try {
			const isSucessfullyLoggedIn = await logIn(email, password);
			// console.log(">>>>", isSucessfullyLoggedIn);
			// console.log(">>>>", isSucessfullyLoggedIn===true);
			if (isSucessfullyLoggedIn) {
				history.push("/")
			}
			//  else {
			// 	notifyError("some error occured while logging with email & password");
			// 	return;
			// }
		} catch (error) {
			return console.log(error)
		}

		console.log(`Email : ${email} | Password : ${password}`);

	};

	async function googleLoginHandler() {
		try {
			// let res = ".";
			// const promise = new Promise(function (resolve, reject) {
			// 	res = loginWithGoogle();
			// });



			let res = await loginWithGoogle();
			// console.log(res.AdditionalUserInfo.isNewUser);

			// .then(async (res) => {
			console.log(res);
			var token = res.credential.accessToken;
			console.log(res.user.uid);
			console.log(res.user.email);

			console.log(token);

			try {

				// const query = await collection('Users').where('email', '==', res.user.email).get();
				// if (res.user.email) {
				await db
					.collection("Users")
					.where("email", "==", res.user.email)
					.get()
					.then(async (snapshot) => {
						let userData = [];
						snapshot.docs.forEach((doc) => {
							console.log(doc.data());
							userData = [{ ...doc.data(), id: doc.id }];
						});
						await console.log("snapshot : ", snapshot);
						// setUserDetails(snapshot.docs)

						console.log("where query users in google login : ", userData);
						var uid = res.user.uid;
						localStorage.setItem("ds-user-uid", uid);
						console.log("USER ARRAY : ", userData);

						console.log("UserData : ", userData);

						if (userData.length !== 0) {
							console.log("Here............................");
							notifySuccess("Login Successful");
							console.log(
								"User already logged in through google ,.. so not added in firestore"
							);
							console.log("home");
							return history.push("/")
						}
						else {
							// not found
							await db
								.collection("Users")
								.doc(res.user.uid)
								.set({
									email: res.user.email,
									photoURL: res.user.photoURL,
									interest: [],
									activityWantsToDo: [],
									emailVerified: true,
									followed: 0,
									followers: 0,
									blogs: 0,
									questionsAsked: 0,
									collegeName: "",
									bannerURL: "",
									jobtitle: "",
									created: firebase.firestore.FieldValue.serverTimestamp(),
								})
								.then(() => {
									notifyInfo("User added in firestore");
									notifySuccess("signup Successful");
									console.log("signup question");
									return history.push("/signup-questions")
								})
								.catch((err) => {
									alert(err.message);
								});
						}
					})


				// }
			} catch (err) {
				// errorHandler(err);
				console.log("error", err);
				return "signup";
			}
			//   });

			// if (res) {
			// 	console.log("hahah", res);
			// } else {
			// 	console.log("not found redirect : ", res);
			// }

			// const promise = new Promise((resolve, reject) => {

			// 	let res = loginWithGoogle();

			// 	if (res) {
			// 		resolve(res);
			// 		console.log("Resolved");
			// 	}
			// 	else {
			// 		reject(Error("Promise rejected .. some error occured in promise in login file"));
			// 	}
			// });


			// promise.then(res => {
			// 	console.log("jsjaj", res);
			// 	alert('res ', res)
			// 	if (res === 'signup-questions') {
			// 		history.push("/signup-questions")
			// 	} else if (res === 'login') {
			// 		history.push("/login")
			// 	} else if (res === 'signup') {
			// 		history.push("/signup")
			// 	} else if (res === 'home') {
			// 		history.push("/")
			// 	} else
			// 		history.push('/signup-questions')
			// }, function (error) {
			// 	console.log({ error: error });
			// });


		} catch (error) {
			console.log(error.message);
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
