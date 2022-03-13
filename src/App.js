import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageLayout from './components/layout/PageLayout';
import AboutUsPage from './pages/AboutUsPage';
import BlogsPage from './pages/BlogsPage';
import BookmarksPage from './pages/BookmarksPage';
import CreatePostPage from './pages/CreatePostPage';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import NoticationPage from './pages/NoticationPage';
import OneBlogPage from './pages/OneBlogPage';
import Signup from './pages/Signup';
import SuggestionsPage from "./pages/SuggestionsPage";
import ProfilePage from "./pages/ProfilePage";
import Messenger from './pages/Messenger';

import ScrollToTop from './components/ScrollToTop';
import QuestionsPage from './pages/QuestionsPage';
import { UserAuthContextProvider } from './context/UserAuthContextProvider';

const compoentsList = [
	{ path: "/", component: <HomePage /> },
	{ path: "/aboutus", component: <AboutUsPage /> },
	{ path: "/SuggestionPage", component: <SuggestionsPage /> },
	{ path: "/OtherProfilePage", component: <ProfilePage edit={false} /> },
	{ path: "/myprofile/:uid", component: <ProfilePage edit={true} /> },
	{ path: "/blogs", component: <BlogsPage /> },
	{ path: "/create-post", component: <CreatePostPage /> },
	{ path: "/blog/:id", component: <OneBlogPage /> },
	{ path: "/notifications", component: <NoticationPage /> },
	{ path: "/notifications", component: <NoticationPage /> },
	{ path: "/bookmarks", component: <BookmarksPage /> },
	{ path: "/messenger", component: <Messenger /> }
]

function App() {
	return (
		<UserAuthContextProvider>
			<Router>
				<ScrollToTop />	{/*  👈 Imp : To always scroll page to top */}

				<Switch>

					{/* Page Layout already having navbar */}

					{/* Components with page layout */}
					{
						compoentsList.map((component, index) =>
							<Route exact path={component.path} key={index}>
								<PageLayout>
									{component.component}
								</PageLayout>
							</Route>
						)
					}

					{/* Components without page layout */}
					<Route path="/login">
						<Login />
					</Route>

					<Route path="/signup">
						<Signup />
					</Route>

					<Route path="/signup-questions">
						<QuestionsPage />
					</Route>

				</Switch>
			</Router>
		</UserAuthContextProvider>
	);
}

export default App;
