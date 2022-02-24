import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faGithub,
  faTwitter,
  faFacebook,
  faReddit,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <section className="w-72 hidden lg:block sticky top-2 h-max px-3 py-2 m-2 bg-white border border-gray-200 rounded-lg overflow-hidden shadow">
      <div className="flex flex-col">
        <h1 className="flex  justify-center font-bold text-cyan-800 text-2xl">
          DS
        </h1>
        <p className="flex justify-center text-sm">DreamShelter&copy;2021</p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col">
          <h1 className="flex  pt-3 font-semibold text-cyan-800 text-lg">
            Company
          </h1>
          <div className="flex flex-col text-sm">
            <p className="my-0.5">About Us</p>
            <p className="my-0.5">How it Works?</p>
            <p className="my-0.5">Blog</p>
            <p className="my-0.5">Refer &#38; Earn</p>
            <p className="my-0.5">Carrers</p>
            <p className="my-0.5">Founders</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="flex pt-3 font-semibold text-cyan-800 text-lg">
            Support
          </h1>
          <div className="flex flex-col text-sm">
            <p className="my-0.5">Contact Us</p>
            <p className="my-0.5">FAQ</p>
            <p className="my-0.5">Help Center</p>
            <p className="my-0.5">Terms &#38; <br/>Conditions</p>
            <p className="my-0.5">Privacy Policy</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-1 py-1">
        <div className="flex px-1">
          <div className="mr-1 relative top-0.5 ">
            <FontAwesomeIcon
              icon={faGithub}
              className="hover:text-orange-600 text-cyan-900 text-2xl font-bold cursor-pointer"
            />
          </div>
        </div>
        <div className="flex  py-1">
          <div className="flex px-1">
            <div className="mr-1 ">
              <FontAwesomeIcon
                icon={faTwitter}
                className="hover:text-cyan-500 text-cyan-900 text-2xl font-bold cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="flex py-1">
          <div className="flex px-1">
            <div className="mr-1">
              <FontAwesomeIcon
                icon={faInstagram}
                className="hover:text-rose-700 text-cyan-900 text-2xl font-bold cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="flex  py-1">
          <div className="flex px-1">
            <div className="mr-1 ">
              <FontAwesomeIcon
                icon={faFacebook}
                className="hover:text-sky-600 text-cyan-900 text-2xl font-bold cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="flex   py-1">
          <div className="flex px-1">
            <div className="mr-1 ">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="hover:text-sky-700 text-cyan-900 text-2xl font-bold cursor-pointer"
              />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Footer;
