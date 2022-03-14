import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faBuildingColumns, faEnvelope, faGlobe, faLocation } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faGithub,
  faTwitter,
  faFacebook,
  faReddit,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { ShareIcon, SearchIcon, CogIcon, LocationMarkerIcon, MailIcon, BriefcaseIcon, PencilAltIcon, PencilIcon } from "@heroicons/react/outline";

const UserLinks = ({ userInfo }) => {
  return (
    <div className="w-full lg:w-96 block bg-white  px-3 py-3 m-2 border border-gray-200 rounded-lg overflow-hidden shadow-lg">
      <h1 className="py-2 mx-3 font-bold text-xl">About</h1>
      <div className="profile-bio m-2">
        <p className="">
          <span className="profile-real-name"></span>
          {userInfo.about ? userInfo.about : "..."}
          {/* Tell anything about you,
          only in one sentence.Tart I love sugar plum I love oat cake. Sweet roll caramels I love jujubes. 📷✈️🏕️ */}
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
        <p>{userInfo.jobtitle ? userInfo.jobtitle : "NA"}</p>
      </div>
      <div className="flex gap-3 text-gray-700  pb-2  font-normal text-base">
        <FontAwesomeIcon
          icon={faBuildingColumns}
          className="hover:text-cyan-500 text-black text-lg font-bold cursor-pointer"
        />
        <p>{userInfo.collegeName ? userInfo.collegeName : "NA"}</p>
      </div>
    </div>
  );
};

export default UserLinks;
