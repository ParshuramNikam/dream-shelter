import Categories from '../components/Categories';
import PostCard from '../components/PostCard';

const HomePage = () => {
    return (
        <section className="xl:w-11/12 mx-auto grid grid-cols-3 justify-center">
            <Categories />
            <PostCard />
            <Categories />
        </section>
    )
}

export default HomePage
