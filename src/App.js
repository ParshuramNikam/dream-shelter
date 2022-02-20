import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageLayout from './components/layout/PageLayout';
import AboutUsPage from './pages/AboutUsPage';
import BlogsPage from './pages/BlogsPage';
import BookmarkPage from './pages/BookmarkPage';
import CreatePostPage from './pages/CreatePostPage';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import NoticationPage from './pages/NoticationPage';
import OneBlogPage from './pages/OneBlogPage';
import Signup from './pages/Signup';
import SuggestionsPage from "./pages/SuggestionsPage";
import OtherUserDetailedInfo from './components/OtherUserDetailedInfo';
import ProfilePage from "./pages/ProfilePage";
import OtherProfilePage from "./pages/OtherProfilePage";
import Messenger from './pages/Messenger';

// import NoticationPage from './pages/NoticationPage';

import ScrollToTop from './components/ScrollToTop';

function App() {
	return (
		<Router>
			<ScrollToTop />	{/*  👈 Imp : To always scroll page to top */}
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

				<Route exact path="/OtherProfilePage">
					<PageLayout>
						<OtherProfilePage />
					</PageLayout>
				</Route>

				<Route exact path="/OtherProfileDetailedInfoPage">
					<PageLayout>
						<OtherUserDetailedInfo />
					</PageLayout>
				</Route>

				<Route exact path="/myprofile">
					<PageLayout>
						<ProfilePage />
					</PageLayout>
				</Route>

				<Route exact path="/blogs">
					<PageLayout>
						<BlogsPage />
					</PageLayout>
				</Route>

				<Route exact path="/create-post">
					<PageLayout>
						<CreatePostPage />
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

				<Route exact path="/bookmarks">
					<PageLayout>
						<BookmarkPage />
					</PageLayout>
				</Route>

				<Route exact path="/messenger">
					<PageLayout>
						<Messenger />
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
