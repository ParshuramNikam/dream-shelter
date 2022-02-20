import OneSuggestedUserCard from "../components/OneSuggestedUserCard";
import SuggestedUsers from "../components/home/SuggestedUsers"
import { UserGroupIcon } from "@heroicons/react/outline";

const SuggestionsPage = () => {
    return (
        <section className="xl:w-12/12 mx-auto p-3 my-2 rounded ">
            <div className="flex items-center w-max">
                <UserGroupIcon className="ml-3 h-8 w-8 stroke stroke-gray-600 fill-gray-300 relative bottom-1" />
                <h1 className="ml-3 pb-2 font-semibold text-lg">Suggestions For You</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mx-auto 3xl:grid-cols-5 gap-2 items-center justify-center">
                <OneSuggestedUserCard />
                <OneSuggestedUserCard />
                <OneSuggestedUserCard />
                <OneSuggestedUserCard />
                <OneSuggestedUserCard />
                <OneSuggestedUserCard />
                <OneSuggestedUserCard />
                <OneSuggestedUserCard />
            </div>
        </section>
    )
}

export default SuggestionsPage;
