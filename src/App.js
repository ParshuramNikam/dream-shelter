import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PageLayout from './components/PageLayout';
import AboutUsPage from './pages/AboutUsPage';
import BlogsPage from './pages/BlogsPage';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import MessagesPage from './pages/MessagesPage';
import NoticationPage from './pages/NoticationPage';
import OneBlogPage from './pages/OneBlogPage';
import Signup from './pages/Signup';
import SuggestionsPage from "./pages/SuggestionsPage";

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

				<Route exact path="/aboutus">
					<PageLayout>
						<AboutUsPage />
					</PageLayout>
				</Route>

				<Route exact path="/SuggestionPage">
					<PageLayout>
						<SuggestionsPage />
					</PageLayout>
				</Route>

				<Route exact path="/blogs">
					<PageLayout>
						<BlogsPage />
					</PageLayout>
				</Route>

				<Route exact path="/blog/:id">
					<PageLayout>
						<OneBlogPage />
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
