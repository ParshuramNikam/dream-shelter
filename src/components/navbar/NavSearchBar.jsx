import { ArrowCircleLeftIcon, ArrowLeftIcon, SearchIcon } from "@heroicons/react/outline"
import { useRef, useEffect } from "react";

const NavSearchBar = ({ toggleSearchBox, setToggleSearchBox }) => {

    const serachBox = useRef(null);

    useEffect(() => {
        if (toggleSearchBox === true) {
            serachBox.current.focus();
        }
    }, [toggleSearchBox]);

    const handleToggling = () => {
        if (toggleSearchBox) {
            console.log("FOcus goes out!!  &&  toggle search box is " + (!toggleSearchBox));
            // setToggleSearchBox(!toggleSearchBox);
        } else {
            console.log("your on > lg screen device 😁");
        }
    }

    return (
        <div className="relative mx-auto text-gray-600 flex lg:block items-center justify-center">
            {
                toggleSearchBox
                    ? <button className="inline-block mr-1.5"
                        onClick={() => setToggleSearchBox(false)}
                    >
                        <ArrowCircleLeftIcon className="h-6 w-6 stroke storke-gray-500" />
                    </button>
                    : null
            }
            <div className="flex">
                <div className="">
                    <input id="search_bar" name="search_bar" className="w-full border-2 border-gray-300 bg-gray-50 h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none"
                        type="search" placeholder="Search" ref={serachBox}
                        onBlur={handleToggling}
                    />
                </div>
                <button type="submit" className="absolute right-0 bottom-3 mt-5 mr-4">
                    <SearchIcon className="text-gray-600 h-4 w-4" />
                </button>
            </div>
        </div>
    )
}

export default NavSearchBar