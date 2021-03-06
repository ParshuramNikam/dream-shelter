import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faBuildingColumns,
  faEnvelope,
  faGlobe,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faGithub,
  faTwitter,
  faFacebook,
  faReddit,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import {
  ShareIcon,
  SearchIcon,
  CogIcon,
  LocationMarkerIcon,
  MailIcon,
  BriefcaseIcon,
  PencilAltIcon,
  PencilIcon,
} from "@heroicons/react/outline";
import { useState } from "react";
import EditInfoPopup from "./home/EditInfoPopup";
import firebase from "firebase";
import { db } from "../database/firebase.config";
import { useEffect } from "react";
import { isEditable } from "@testing-library/user-event/dist/utils";
import { useParams } from "react-router-dom";
// import { db } from "../../database/firebase.config";

function UserLinks({ userDetails, userInfo, ishiden }) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const [currentUserDetails, setCurrentUserDetails] = useState({
    userDetails,
  });

  const { uid } = useParams();
  const [isEditable, setIsEditable] = useState(false);
  const [fetchData, setFetchData] = useState(true);

  useEffect(() => {
    // db.collection("users")
    //   .get()
    //   .then((snapshot) => {
    //     console.log(snapshot);
    //     snapshot.docs.forEach((doc) => {
    //       const changes = snapshot.docChanges();
    //       changes.forEach((change) => {
    //         if (change.type === "added") {
    //           setCurrentUserDetails(change.doc);
    //           console.log("user detials changes success");
    //           console.log(change.doc);
    //         }
    //       });
    //     });
    //   });
    db.collection('users').get().then(snapshot=>{
      console.log(snapshot);
      snapshot.docs.forEach(doc=>{
        console.log(doc.data());
        setCurrentUserDetails(doc.data()[localStorage.getItem.uid])
      })
    
        // snapshot.data().forEach((change) => {
        //   setCurrentUserDetails(change.doc);
        //   console.log("user detials changes success");
        //   console.log(change.doc);
        // });
      });
    if (uid === localStorage.getItem("ds-user-uid")) {
      setIsEditable(true);
    }
  }, [fetchData]);

  return (
    <div className="w-full lg:w-96 block bg-white  px-3 py-3 m-2 border border-gray-200 rounded-lg overflow-hidden shadow-lg">
      <div className="flex justify-between">
        <h1 className="py-2 mx-3 font-bold text-xl">About</h1>
        <div className="mt-2">
          {isEditable && (
            <button
              type="button"
              className=" p-1 rounded-full text-gray-800 "
              onClick={openModal}
            >
              <span className="sr-only">Edit</span>
              <PencilAltIcon
                className="w-6 h-6 hover:stroke-cyan-800"
                aria-hidden="true"
              />
            </button>
          )}
        </div>
      </div>
      <div className="profile-bio m-2">
        <p className="">
          <span className="profile-real-name"></span>
          {userInfo.about ? userInfo.about : "..."}
          {/* Tell anything about you,
          only in one sentence.Tart I love sugar plum I love oat cake. Sweet roll caramels I love jujubes. ????????????????? */}
        </p>
      </div>
      <div className="flex gap-3 text-gray-700  pb-2 items-center font-normal text-base">
        <FontAwesomeIcon
          icon={faLocation}
          className="hover:text-cyan-500 text-black text-lg font-bold cursor-pointer"
        />
        <p>{userInfo.location}</p>
      </div>
      <div className="flex gap-3 text-gray-700  pb-2 items-center font-normal text-base">
        <FontAwesomeIcon
          icon={faEnvelope}
          className="hover:text-cyan-500 text-black text-lg font-bold cursor-pointer"
        />
        <p>{userInfo.email}</p>
      </div>
      <div className="flex gap-3 text-gray-700  pb-2 items-center font-normal text-base">
        <FontAwesomeIcon
          icon={faBriefcase}
          className="hover:text-cyan-500 text-black text-lg font-bold cursor-pointer"
        />
        <p>{userInfo.jobTitle ? userInfo.jobTitle : "NA"}</p>
      </div>
      <div className="flex gap-3 text-gray-700  pb-2  font-normal text-base">
        <FontAwesomeIcon
          icon={faBuildingColumns}
          className="hover:text-cyan-500 text-black text-lg font-bold cursor-pointer"
        />
        <p>{userInfo.collegeName ? userInfo.collegeName : "NA"}</p>
      </div>
      <EditInfoPopup
        isOpen={isOpen}
        userDetails={userInfo}
        setIsOpen={setIsOpen}
        closeModal={closeModal}
        setFetchData={setFetchData}
        fetchData={fetchData}
      />
    </div>
  );
}

export default UserLinks;
