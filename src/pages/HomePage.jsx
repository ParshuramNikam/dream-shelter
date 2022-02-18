import Categories from "../components/home/Categories";
import ExploreBlogs from "../components/home/ExploreBlogs";
import PostCard from "../components/home/PostCard";
import PostsContainer from "../components/home/PostsContainer";
import SuggestedUsers from "../components/home/SuggestedUsers";
import ChatBox from "../components/home/ChatBox";
import CreatePost from "../components/home/CreatePost";

const HomePage = () => {
  return (
    <section className="xl:w-11/12 mx-auto flex justify-center">
      <div className="mx-auto flex">
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
      </div>
    </section>
  );
};

export default HomePage;
