import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faGithub, faTwitter, faFacebook, faReddit, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import React from "react";

const UserLinks = () => {
  return (
    <div className="max-w:sm block bg-white  h-max px-3 py-5 m-2 border border-gray-200 rounded-lg  overflow-hidden shadow-lg">
      <div className="flex justify-between border-b  border-gray-600 pb-1">
        <div className="flex">
          <div className="mr-2 ">
            <FontAwesomeIcon
              icon={faGlobe}
              className="hover:text-gray-500 text-2xl font-bold cursor-pointer"
            />
          </div>
          <div>
            <p className="text-base font-semibold hover:text-gray-500 cursor-pointer">
              Website
            </p>
          </div>
        </div>
        <div className="text-gray-500 ">
          <p>www.kshitighelani.com</p>
        </div>
      </div>
      <div className="flex justify-between border-b  border-gray-600 py-1">
        <div className="flex">
          <div className="mr-2 ">
            <FontAwesomeIcon
              icon={faGithub}
              className="hover:text-orange-600 text-2xl font-bold cursor-pointer"
            />
          </div>
          <div>
            <p className="text-base font-semibold hover:text-orange-600 cursor-pointer">
              Github
            </p>
          </div>
        </div>
        <div className="text-gray-500 ">
          <p>Kshiti_Ghelani</p>
        </div>
      </div>
      <div className="flex justify-between border-b  border-gray-600 py-1">
        <div className="flex">
          <div className="mr-2 ">
            <FontAwesomeIcon
              icon={faTwitter}
              className="hover:text-cyan-500 text-2xl font-bold cursor-pointer"
            />
          </div>
          <div>
            <p className="text-base font-semibold hover:text-cyan-500 cursor-pointer">
              Twitter
            </p>
          </div>
        </div>
        <div className="text-gray-500 ">
          <p>@Kshiti_Ghelani</p>
        </div>
      </div>
      <div className="flex justify-between border-b  border-gray-600 py-1">
        <div className="flex">
          <div className="mr-2 ">
            <FontAwesomeIcon
              icon={faInstagram}
              className="hover:text-rose-700 text-2xl font-bold cursor-pointer"
            />
          </div>
          <div>
            <p className="text-base font-semibold hover:text-rose-700 cursor-pointer">
              Instagram
            </p>
          </div>
        </div>
        <div className="text-gray-500 ">
          <p>@Kshiti_Ghelani</p>
        </div>
      </div>
      <div className="flex justify-between border-b  border-gray-600 py-1">
        <div className="flex">
          <div className="mr-2 ">
            <FontAwesomeIcon
              icon={faFacebook}
              className="hover:text-sky-600 text-2xl font-bold cursor-pointer"
            />
          </div>
          <div>
            <p className="text-base font-semibold hover:text-sky-600 cursor-pointer">
              Facebook
            </p>
          </div>
        </div>
        <div className="text-gray-500 ">
          <p>Kshiti_Ghelani</p>
        </div>
      </div>
      <div className="flex justify-between border-b  border-gray-600 py-1">
        <div className="flex">
          <div className="mr-2 ">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="hover:text-sky-700 text-2xl font-bold cursor-pointer"
            />
          </div>
          <div>
            <p className="text-base font-semibold hover:text-sky-700 cursor-pointer">
              Linkedin
            </p>
          </div>
        </div>
        <div className="text-gray-500 ">
          <p>Kshiti_Ghelani</p>
        </div>
      </div>
      <div className="flex justify-between pt-1">
        <div className="flex">
          <div className="mr-2 ">
            <FontAwesomeIcon
              icon={faReddit}
              className="hover:text-red-600 text-2xl font-bold cursor-pointer"
            />
          </div>
          <div>
            <p className="text-base font-semibold hover:text-red-600 cursor-pointer">
              Reddit
            </p>
          </div>
        </div>
        <div className="text-gray-500 ">
          <p>Kshiti_Ghelani</p>
        </div>
      </div>
    </div>
  );
};

export default UserLinks;
