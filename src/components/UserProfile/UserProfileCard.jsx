import { faSnapchat } from "@fortawesome/free-brands-svg-icons";
import { ShareIcon, SearchIcon, CogIcon } from "@heroicons/react/outline";
import { useEffect } from "react";
import { useState } from "react";
import { useUserAuth } from "../../context/UserAuthContextProvider";
import { auth, db } from "../../database/firebase.config";
import { categories } from "../../dummy-data/data";
import firebase from "firebase";

const UserProfileCard = ({ userInfo, edit }) => {

  const [bannerUrl, setBannerUrl] = useState("url(https://media-exp1.licdn.com/dms/image/C4D16AQHOGTXAwxWr9A/profile-displaybackgroundimage-shrink_350_1400/0/1596362810946?e=1651104000&v=beta&t=O21KMZ5zRis5SKIIjChFY5UUr4n71s1QHg2DXQ-Ot2Q)");

  useEffect(() => {
    if (userInfo.bannerURL !== "") {
      setBannerUrl(`url(${userInfo.bannerURL})`)
    }
  }, [])

  return (
    // <div className="max-w:sm block bg-white  h-max px-3 py-5 m-2 border border-gray-200 rounded-lg  overflow-hidden shadow-lg">
    <div className="bannerbg h-56 md:h-72 bg-white mt-5 ">
      <div className="banner h-44 md:h-60 w-full"
        style={{ backgroundImage: bannerUrl }}
      >
        <div className=" mx-auto text-white  relative top-20 md:top-32 left-7  sm:left-10  ">
          <div className="flex items-center ">
            <img
              className="flex w-28 h-28 md:h-36 md:w-36 rounded-full border-4 border-white "
              // src="https://res.cloudinary.com/minimal-ui/image/upload/v1614655910/upload_minimal/avatar/minimal_avatar.jpg"
              src={userInfo.photoURL
                ? userInfo.photoURL
                : "https://res.cloudinary.com/minimal-ui/image/upload/v1614655910/upload_minimal/avatar/minimal_avatar.jpg"
              }
              alt=""
            />
            <div className="ml-3">
              <p className="text-3xl mb-1  font-semibold capitalize">{userInfo.fname} {userInfo.lname}</p>
              <p className="text-base text-gray-200 font-medium ">{userInfo.jobtitle ? userInfo.jobtitle : "---"}</p>
            </div>
          </div>
        </div>
      </div>
      <div className=""></div>
      <div className="flex flex-wrap justify-end mr-2 mt-2">
        <button
          type="button"
          className=" p-1 rounded-full text-gray-800  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        >
          <span className="sr-only">Share</span>
          <ShareIcon
            className="w-6 h-6 hover:stroke-cyan-800"
            aria-hidden="true"
          />
        </button>
        <button
          type="button"
          className=" p-1 rounded-full text-gray-800  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        >
          <span className="sr-only">Edit Profile</span>
          <CogIcon
            className="w-6 h-6 hover:stroke-cyan-800"
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
    //  </div>
  );
};

export default UserProfileCard;
