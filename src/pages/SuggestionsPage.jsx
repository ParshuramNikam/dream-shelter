import OneSuggestedUserCard from "../components/OneSuggestedUserCard";

const SuggestionsPage = () => {
    return (
        <section className="max-w-sm mx-auto p-3 my-3 bg-white border rounded border-gray-200 shadow-md">
            <h1 className="pb-3 font-semibold text-lg">Suggestions For You</h1>
            <div className="">
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
