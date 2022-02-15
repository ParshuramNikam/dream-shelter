import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageLayout from './components/PageLayout';
import BlogsPage from './pages/BlogsPage';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import MessagesPage from './pages/MessagesPage';
import NoticationPage from './pages/NoticationPage';
import Signup from './pages/Signup';

function App() {
	return (
		<Router>
			<Switch>
				{/* Page Layout already having navbar */}
				<Route exact path="/">
					<PageLayout>
						<HomePage />
					</PageLayout>
				</Route>

				<Route exact path="/blogs">
					<PageLayout>
						<BlogsPage />
					</PageLayout>
				</Route>

				<Route exact path="/notifications">
					<PageLayout>
						<NoticationPage />
					</PageLayout>
				</Route>

				<Route exact path="/messages">
					<PageLayout>
						<MessagesPage />
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
