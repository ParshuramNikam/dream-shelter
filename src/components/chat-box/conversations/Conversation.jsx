import React from "react";

export default function Conversation({online}) {
  return (
    <div className="conversation flex items-center p-2 cursor-pointer hover:bg-gray-100 ">
      <div className="w-8 h-8  flex items-center justify-center relative ">
          <img
            className="h-8 w-12 rounded-full "
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          {
            online ? <div className="absolute w-2.5 h-2.5 rounded bg-lime-500 bottom-0.5 right-0.5"></div> : null
          }
        </div>
      <span className="conversationName font-medium ml-2">John Doe</span>
    </div>
  );
}
