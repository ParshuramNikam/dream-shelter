const BlogCategoryChip = ({ category }) => {
    return (
        <button className="bg-blue-800 hover:bg-indigo-700 text-white text-sm rounded m-1 px-2.5 py-1" >
            {`#${category}`}
        </button>
    )
}

export default BlogCategoryChip;