import { Link } from "react-router-dom/cjs/react-router-dom.min"


const HorizontalBlog = () => {


    return (
        // replace url to navigate to specific blog
        <Link to={"/blogs/1"}>
            <div className="mt-2 flex gap-2 justify-center items-center border border-gray-200 mb-3 rounded p-1">
                <div className="w-20 h-20 rounded">
                    <img src="https://shortner-urls.herokuapp.com/1LNNz6U" alt="BLOG-IMAGE" className="rounded" />
                </div>
                <div className="break-words w-full">
                    <p className="text-sm font-medium">Lorem ipsum dolor sit amet.</p>
                    <p className="text-xs">
                        {/* slice the para to show fixed no of chars on home */}
                        {"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium ipsam eum minus quidem, officiis nulla omnis obcaecati aperiam odio quibusdam."
                            + "..."
                        }
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default HorizontalBlog
