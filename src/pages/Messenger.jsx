import React from "react";
import Conversation from "../components/chat-box/conversations/Conversation";
import Message from "../components/chat-box/message/Message";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function Messenger() {
  return (
      <div className="w-full ">
    <div className="messenger px-3 xl:w-9/12 mx-auto flex gap-2 my-2">
 
        <div className="chatMenu w-4/12 bg-white px-3">
          <div className="chatMenuWrapper w-full  chatMessageHeight overflow-y-auto    pr-5">
              <input placeholder="Search for friends..." className="charMenuInput w-full m-2 px-2 py-1 border-2 rounded-lg border-solid border-gray-400" />
              <Conversation online={true} />
              <Conversation  online={false}/>
              <Conversation online={false}/>
              <Conversation online={true}/>
              <Conversation online={false}/>
              <Conversation online={true}/>
              <Conversation online={true}/>
              <Conversation online={false}/>
              
          </div>
        </div>
        <div className="chatBox w-auto grow bg-white">
          <div className="chatBoxWrapper chatMessageHeight w-full flex flex-col justify-between" >

              <div className="chatBoxTop w-100 px-2 overflow-y-auto ">
                    <Message message={{text:"How are you? wann'e meet at 10:00pm ,maybe have some coffee"}} own={true}/>
                    <Message message={{text:"How are you? wann'e meet at 10:00pm ,maybe have some coffee"}} own={false}/>
                    <Message message={{text:"How are you? wann'e meet at 10:00pm ,maybe have some coffee"}} own={true}/>
                    <Message message={{text:"How are you? wann'e meet at 10:00pm ,maybe have some coffee"}} own={false}/>
                    <Message message={{text:"How are you? wann'e meet at 10:00pm ,maybe have some coffee"}} own={true}/>
                    <Message message={{text:"How are you? wann'e meet at 10:00pm ,maybe have some coffee"}} own={false}/>
                    <Message message={{text:"How are you? wann'e meet at 10:00pm ,maybe have some coffee"}} own={true}/>
                    <Message message={{text:"How are you? wann'e meet at 10:00pm ,maybe have some coffee"}} own={false}/>
              </div>
              <div className="chatBoxBottom flex mt-2 items-center m-1 ">
                  <textarea className="chatMessageInput grow h-24 p-3 border-2 rounded-lg resize-none border-gray-500" placeholder="Type a Message..."></textarea>
                  <button className="bg-gray-100 p-2.5 rounded-full">
                  <FontAwesomeIcon
              icon={faPaperPlane}
              className="hover:text-blue-600 text-gray-700 text-2xl font-bold cursor-pointer "
            />
                  </button>
              </div>
          </div>
        </div>
        {/* <div className="chatOnline w-3/12 ">
          <div className="chatOnlineWrapper w-full chatMessageHeight  overflow-y-auto ">online</div>
        </div> */}
    </div>
    </div>
  );
}
