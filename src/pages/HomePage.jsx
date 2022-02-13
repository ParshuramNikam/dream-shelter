import Categories from "../components/Categories";
import ExploreBlogs from "../components/ExploreBlogs";
import PostCard from "../components/PostCard";
import PostsContainer from "../components/PostsContainer";
import SuggestedUsers from "../components/SuggestedUsers";
import ChatBox from "../components/ChatBox";
import CreatePost from "../components/CreatePost";

const HomePage = () => {
  return (
    <section className="xl:w-11/12 mx-auto flex flex-row">
      <section>
        <Categories />
        <ExploreBlogs />
      </section>
      <section>
        <CreatePost />
        <PostsContainer />
      </section>
      <section>
        <SuggestedUsers />
        <ChatBox />
      </section>
    </section>
  );
};

export default HomePage;
