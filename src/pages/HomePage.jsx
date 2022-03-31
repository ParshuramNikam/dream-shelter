import Categories from "../components/home/Categories";
import ExploreBlogs from "../components/home/ExploreBlogs";
import PostCard from "../components/home/PostCard";
import PostsContainer from "../components/home/PostsContainer";
import SuggestedUsers from "../components/home/SuggestedUsers";
import ChatBox from "../components/home/homechatbox/ChatBox";
import CreatePost from "../components/home/CreatePost";
import Footer from "../components/Footer";
import { useUserAuth } from "../context/UserAuthContextProvider";
import { useState } from "react";

const HomePage = ({ userDetails,setRefreshPost,refreshPost }) => {
  const { user } = useUserAuth();
  console.log(">>", user && user.email);

  return (
    <section className="xl:w-11/12 mx-auto flex justify-center">
      <div className="mx-auto flex">
        <section>
          <Categories />
          <ExploreBlogs />
        </section>
        <section className="grow">
          <CreatePost
            ishidden={true}
            userDetails={userDetails}
            refreshPost={refreshPost}
            setRefreshPost={setRefreshPost}
          />
          <PostsContainer
            userDetails={userDetails}
            refreshPost={refreshPost}
            isProfilePage={false}
            setRefreshPost={setRefreshPost}
          />
        </section>
        <section>
          <SuggestedUsers />
          {/* <ChatBox /> */}
          <Footer />
        </section>
      </div>
    </section>
  );
};

export default HomePage;
