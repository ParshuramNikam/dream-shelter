import React from 'react'
import { format } from "timeago.js";

export default function Message({ message, own }) {
  return (
    <div className={`flex mt-3 flex-col ${own ? "items-end" : "message"}`}>
      <div className="messageTop flex ">
        <img
          className="messageImg  w-8 h-8 rounded-full object-cover mr-1"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
          <p className={`${own? 'bg-gray-100': "bg-blue-600 text-white"} messageText p-1 rounded-lg p-2 w-72 `}>{message.text}</p>
      </div>
      <div className="messageBottom text-xs mt-2">{format(message.createdAt)}</div>
    </div>
  )
}
