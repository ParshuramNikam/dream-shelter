const PostCard = () => {
    return (
        <div class="p-10">
            {/* CARD */}
            <div class="max-w-sm rounded-lg overflow-hidden shadow-lg p-1 border border-gray-200">
                {/* Avatar image 👇 */}
                <div className="flex  items-center justify-between px-2">
                    <div className="flex  items-center">
                        <img class="w-10 mt-1 rounded-full" src="https://shortner-urls.herokuapp.com/BeKgZyu" alt="Avatar" />

                        <div className="text-xs ml-2">
                            <p className="font-bold ">John Doe</p>
                            <p>Khopoli - Maharashtra</p>
                        </div>
                    </div>

                    <button className="float-right"
                        onClick={()=> alert("Clicked")}
                    >
                        <div>&#xFE19;</div>
                    </button>
                </div>
                {/* Three dot */}

                {/* Post image 👇 */}
                {/* <img class="mt-3 w-full rounded-lg" src="https://shortner-urls.herokuapp.com/OxyrAsn" alt="Nature" /> */}

                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Mountain</div>
                    <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>
            </div>
        </div>
    )
}

export default PostCard
