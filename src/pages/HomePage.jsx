import Categories from '../components/Categories';
import ExploreBlogs from '../components/ExploreBlogs';
import PostCard from '../components/PostCard';
import PostsContainer from '../components/PostsContainer';

const HomePage = () => {
    return (
        <section className="xl:w-11/12 mx-auto flex flex-row">
            <section>
                <Categories className="" />
                <ExploreBlogs/>
            </section>
            <PostsContainer className="" />

        </section>
    )
}

export default HomePage
