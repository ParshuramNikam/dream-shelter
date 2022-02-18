import { SearchIcon } from "@heroicons/react/outline"

const NavSearchBar = ({toggleSearchBox, setToggleSearchBox}) => {

    const handleToggling = () => {
        if(toggleSearchBox){
            console.log("FOcus goes out!!  &&  toggle search box is "+ (!toggleSearchBox));
            setToggleSearchBox(!toggleSearchBox);
        }else{
            console.log("your on > lg screen device 😁");
        }
    }

    return (
        <div className="relative mx-auto text-gray-600">
            <input className="lg:w-72 border-2 border-gray-300 bg-gray-50 h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none"
                type="search" name="search" placeholder="Search"
                onBlur={handleToggling}
            />
            <button type="submit" className="absolute right-0 bottom-2.5 mt-5 mr-4">
                <SearchIcon className="text-gray-600 h-4 w-4" />
            </button>
        </div>
    )
}

export default NavSearchBar