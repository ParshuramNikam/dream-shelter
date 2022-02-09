import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import PageLayout from "./components/PageLayout";
import Signup from "./components/Signup";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					{/* Page Layput already having navbar */}
					<PageLayout>	
						<div>This is Home - Put your component here!</div>
					</PageLayout>
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/signup">
					<Signup />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;

