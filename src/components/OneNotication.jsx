

// Only one notication component :-
const OneNotication = () => {

    const noticationClickListner = () => {
        alert("Notication cliked!")
    }

    return (
        <div className="w-100 p-2 m-3 bg-gray-100 rounded flex items-center cursor-pointer"
            onClick={() => noticationClickListner()}
        >
            <div className="w-8 h-8 border rounded-full border-gray-500 flex items-center justify-center">
                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.00059 3.01934C9.56659 1.61334 11.9866 1.66 13.4953 3.17134C15.0033 4.68334 15.0553 7.09133 13.6526 8.662L7.99926 14.3233L2.34726 8.662C0.944589 7.09133 0.997256 4.67934 2.50459 3.17134C4.01459 1.662 6.42992 1.61134 8.00059 3.01934Z" fill="#EF4444" />
                </svg>
            </div>
            <div className="pl-3">
                <p className="text-sm leading-none">
                    <span className="text-indigo-700">James Doe</span> favourited an <span className="text-indigo-700">item</span>
                </p>
                {/* <p className="text-xs leading-3 pt-1 text-gray-500">2 hours ago</p> */}
            </div>
        </div>
    )
}

export default OneNotication
