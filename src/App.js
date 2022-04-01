import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageLayout from "./components/layout/PageLayout";
import AboutUsPage from "./pages/AboutUsPage";
import BlogsPage from "./pages/BlogsPage";
import BookmarksPage from "./pages/BookmarksPage";
import CreatePostPage from "./pages/CreatePostPage";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import NoticationPage from "./pages/NoticationPage";
import OneBlogPage from "./pages/OneBlogPage";
import Signup from "./pages/Signup";
import SuggestionsPage from "./pages/SuggestionsPage";
import ProfilePage from "./pages/ProfilePage";
import Messenger from "./pages/Messenger";

import ScrollToTop from "./components/ScrollToTop";
import QuestionsPage from "./pages/QuestionsPage";
import {
  useUserAuth,
  UserAuthContextProvider,
} from "./context/UserAuthContextProvider";
import { useState } from "react";
import { db } from "./database/firebase.config";
import firebase from "firebase";
import { useEffect } from "react";
import OneQuestionPage from "./pages/OneQuestionPage";

function App() {
  const [userDetails, setUserDetails] = useState({});
  const [refreshPost, setRefreshPost] = useState(true);
  // const { setUser } = useUserAuth();

  async function getCurrentUserDetails() {
    const userid = localStorage.getItem("ds-user-uid");
    try {
      await db
      .collection("users")
      .onSnapshot(async (snapshot) => {
        await snapshot.docs.forEach((doc) => {
          if (doc.data()[userid]) {
            setUserDetails({ ...doc.data()[userid], id: doc.id });
            // setUser({ ...doc.data()[userid], id: doc.id });
            console.log(doc.data()[userid]);
          }
        });
      })
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // if(user&& user.uid){
    getCurrentUserDetails();
    // }
  }, []);

  const compoentsList = [
    { path: "/", component: <HomePage userDetails={userDetails} refreshPost={refreshPost} setRefreshPost={setRefreshPost} /> },
    {
      path: "/question/:questionId",
      component: <OneQuestionPage userDetails={userDetails} />,
    },
    { path: "/aboutus", component: <AboutUsPage /> },
    { path: "/SuggestionPage", component: <SuggestionsPage /> },
    { path: "/OtherProfilePage", component: <ProfilePage edit={false} /> },
    {
      path: "/myprofile/:uid",
      component: <ProfilePage edit={true} userDetails={userDetails} />,
    },
    { path: "/blogs", component: <BlogsPage  userDetails={userDetails}/> },
    { path: "/create-post", component: <CreatePostPage userDetails={userDetails} /> },
    { path: "/blog/:id", component: <OneBlogPage /> },
    { path: "/notifications", component: <NoticationPage /> },
    { path: "/notifications", component: <NoticationPage /> },
    { path: "/bookmarks", component: <BookmarksPage /> },
    { path: "/messenger", component: <Messenger /> },
  ];

  return (
    <UserAuthContextProvider>
      <Router>
        <ScrollToTop /> {/*  👈 Imp : To always scroll page to top */}
        <Switch>
          {/* Page Layout already having navbar */}

          {/* Components with page layout */}
          {compoentsList.map((component, index) => (
            <Route exact path={component.path} key={index}>
              <PageLayout userDetails={userDetails} setRefreshPost={setRefreshPost} refreshPost={refreshPost} >
                {component.component}
              </PageLayout>
            </Route>
          ))}

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
