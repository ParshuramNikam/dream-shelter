import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageLayout from './components/PageLayout';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import NoticationPage from './pages/NoticationPage';
import Signup from './pages/Signup';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					{/* Page Layput already having navbar */}
					<PageLayout>
						<HomePage />
					</PageLayout>
				</Route>
				<Route path="/notifications">
					<PageLayout>
						<NoticationPage />
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
