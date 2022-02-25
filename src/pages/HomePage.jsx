import Categories from "../components/home/Categories";
import ExploreBlogs from "../components/home/ExploreBlogs";
import PostCard from "../components/home/PostCard";
import PostsContainer from "../components/home/PostsContainer";
import SuggestedUsers from "../components/home/SuggestedUsers";
import ChatBox from "../components/home/homechatbox/ChatBox";
import CreatePost from "../components/home/CreatePost";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <section className="xl:w-11/12 mx-auto flex justify-center">
      <div className="mx-auto flex">
        <section>
          <Categories />
          <ExploreBlogs />
        </section>
        <section>
          <CreatePost ishidden={true} />
          <PostsContainer />
        </section>
        <section>
          <SuggestedUsers />
          {/* <ChatBox /> */}
          <Footer/>
        </section>
      </div>
    </section>
  );
};

export default HomePage;
