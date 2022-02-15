import { ArrowRightIcon } from "@heroicons/react/outline";
import { useState } from "react";

const BlogPost = ({ cover, subCategory, title, description, authorAvatar, authorName, createdAt }) => {
    const [image] = useState("https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=");
    return (
        <div class="rounded overflow-hidden shadow-lg">
            <img class="object-cover w-full h-56 rounded-xl" src={cover} alt="post image" />
            <div class="px-0.5 pt-2 pb-2">
                {
                    subCategory.map((category, index) =>
                        <span key={index} class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{"#" + category}</span>
                    )
                }
            </div>
            <div class="px-1 py-2.5">
                <div class="font-bold text-xl mb-3">{title}</div>
                <p class="text-gray-700 text-base">
                    {description.slice(200) + "..."}
                </p>
            </div>

            <div className="w-100 p-1 m-2 rounded flex justify-between cursor-pointer">
                <div className="w-max h-8  flex flex-row items-center justify-center">
                    <img
                        class="h-8 w-8 object-cover rounded-full"
                        src={image}
                        alt=""
                    />
                    <div className="pl-3">
                        <p className="text-sm leading-none">
                            <span className="text-indigo-700 font-semibold">{authorName}</span>
                            {/* favourited an <span className="text-indigo-700">item</span> */}
                        </p>
                        <p className="text-xs leading-3 pt-1 text-gray-500 float-left">
                            {createdAt}
                        </p>
                    </div>
                </div>
                <button type="button"
                    className="bg-gray-200 p-1.5 rounded-full text-gray-800 ml-7 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                    <span className="sr-only">Suggestions</span>
                    <ArrowRightIcon className="w-5 text-indigo-600 stroke-indigo-600 float-right" />
                </button>
            </div>
        </div>
    )
}

export default BlogPost;