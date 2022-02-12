import { XCircleIcon } from "@heroicons/react/outline"
import { useState } from "react"
import { categories } from "../dummy-data/data"

const Categories = () => {

    const [myCategories, setMyCategories] = useState(categories);

    const crossClickListner = (category) => {
        let arr = myCategories.filter(arrCategory => arrCategory !== category);
        console.log(arr);
        setMyCategories(arr);
        alert(category + " category removed!!")
    }

    return (
        <section className="w-80 hidden lg:block  h-max px-3 py-5 m-2 border border-gray-200 rounded-lg overflow-hidden shadow-lg">

            <h1 className="pb-3 font-semibold text-lg">Categories</h1>

            {
                myCategories.map((category, index) =>
                    <button key={index} className="inline-block w-max rounded-full px-3 py-1 text-sm font-semibold bg-gray-100 text-gray-700 mr-2 mb-2 hover:bg-indigo-200">
                        <div className="inline mr-2">{"#" + category}</div>
                        <button className="inline relative top-1"
                            onClick={() => crossClickListner(category)}
                        >
                            <XCircleIcon className="h-4 w-4 float-right stroke-1 hover:stroke-black" />
                        </button>
                    </button>
                )
            }
        </section>
    )
}

export default Categories
