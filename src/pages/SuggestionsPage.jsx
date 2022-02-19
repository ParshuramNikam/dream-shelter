import OneSuggestedUserCard from "../components/OneSuggestedUserCard";
import SuggestedUsers from "../components/home/SuggestedUsers"

const SuggestionsPage = () => {
    return (
        <section className="xl:w-12/12 mx-auto p-3 my-2 rounded ">
            <h1 className="ml-3 pb-2 font-semibold text-lg">Suggestions For You</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mx-auto 3xl:grid-cols-5 gap-2 items-center justify-center">
                <OneSuggestedUserCard/>
                <OneSuggestedUserCard/>
                <OneSuggestedUserCard/>
                <OneSuggestedUserCard/>
                <OneSuggestedUserCard/>
                <OneSuggestedUserCard/>
                <OneSuggestedUserCard/>
                <OneSuggestedUserCard/>
            </div>
        </section>
    )
}

export default SuggestionsPage;
