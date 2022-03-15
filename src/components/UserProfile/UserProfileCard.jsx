import { PencilIcon, ShareIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { storage } from "../../database/firebase.config";
import { db } from "../../database/firebase.config";

const UserProfileCard = ({ userInfo, edit, setfname }) => {
  const [bannerUrl, setBannerUrl] = useState(
    "url(https://media-exp1.licdn.com/dms/image/C4D16AQHOGTXAwxWr9A/profile-displaybackgroundimage-shrink_350_1400/0/1596362810946?e=1651104000&v=beta&t=O21KMZ5zRis5SKIIjChFY5UUr4n71s1QHg2DXQ-Ot2Q)"
  );

  const [profileImage, setProfileImage] = useState(null);
  const [bannerImage, setBannerImage] = useState(null);

  async function uploadBannerImage(e) {
    console.log(e.target.files[0]);
    if (e.target.files[0]) {
      setBannerImage(e.target.files[0]);

      //firebase image upload
        if (bannerImage) {
          await storage.ref(`BannerImages/${e.target.files[0].name}`)
        .put(bannerImage).then(()=>{
          storage.ref("bannerImages")
          .child(bannerImage.name)
          .getDownloadURL()
          .then(async (url) => {
            console.log(url);

            await db
              .collection("Users")
              .doc(localStorage.getItem("ds-user-uid"))
              .update({
                bannerURL: url,
              })
              .then(() => {
                console.log("banner image uploaded successfully");
              })
              .catch((error) => {
                console.log("storageerror",error);
              });
          });
        });
        }
        // uploadTask.on(
        //   "state_changed",
        //   (snapshot) => {},
        //   (error) => {
        //     console.log("snapshoterror",error);
        //   },
        //   () => {
        //     storage
        //       .ref("bannerImages")
        //       .child(bannerImage.name)
        //       .getDownloadURL()
        //       .then(async (url) => {
        //         console.log(url);

        //         await db
        //           .collection("Users")
        //           .doc(localStorage.getItem("ds-user-uid"))
        //           .update({
        //             bannerImage: url,
        //           })
        //           .then(() => {
        //             console.log("banner image uploaded successfully");
        //           })
        //           .catch((error) => {
        //             console.log("storageerror",error);
        //           });
        //       });
        //   }
        // );
    }
  }

  useEffect(() => {
    if (userInfo.bannerURL !== "") {
      setBannerUrl(`url(${userInfo.bannerURL})`);
    }
  }, []);

  return (
    // <div className="max-w:sm block bg-white  h-max px-3 py-5 m-2 border border-gray-200 rounded-lg  overflow-hidden shadow-lg">
    <div className="bannerbg h-56 md:h-72 bg-white mt-5 ">
      <div
        className="banner h-44 md:h-60 w-full"
        style={{ backgroundImage: bannerUrl }}
      >
        <div
          className="flex flex-wrap justify-end relative top-4 right-4
        "
        >
          <label
            type="label"
            className=" right-14 cursor-pointer p-1 rounded-full text-cyan-700 bg-white hover:text-cyan-900  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          >
            <span className="sr-only">Edit Profile</span>
            <input
              type="file"
              multiple="multiple"
              className="hidden"
              accept="accept"
              onChange={(e) => {
                uploadBannerImage(e);
              }}
              name="profileImageInput"
            />
            <PencilIcon
              className="p-0.5 w-6 h-6 hover:stroke-white-300"
              aria-hidden="true"
            />
          </label>
        </div>
        <div className=" mx-auto text-white  relative top-20 md:top-28 left-7  sm:left-10  ">
          <div className="flex items-center ">
            <img
              className="flex w-28 h-28 md:h-36 md:w-36 cursor-pointer rounded-full border-4 border-white "
              // src="https://res.cloudinary.com/minimal-ui/image/upload/v1614655910/upload_minimal/avatar/minimal_avatar.jpg"
              src={
                userInfo.photoURL
                  ? userInfo.photoURL
                  : "https://res.cloudinary.com/minimal-ui/image/upload/v1614655910/upload_minimal/avatar/minimal_avatar.jpg"
              }
              alt=""
            />
            <label
              type="label"
              className="relative bottom-12 right-12 cursor-pointer p-1 rounded-full text-cyan-700 bg-white hover:text-cyan-900  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Edit Profile</span>
              <input
                type="file"
                class="hidden"
                multiple="multiple"
                accept="accept"
              />
              <PencilIcon
                className="p-0.5 w-5 h-5 hover:stroke-white-300"
                aria-hidden="true"
              />
            </label>

            <div className="">
              <p className="text-3xl mb-1  font-semibold capitalize">
                {userInfo.fname} {userInfo.lname}
              </p>
              <p className="text-base text-gray-200 font-medium ">
                {/* onChange={(e) => setfname(e.target.value)} */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    //  </div>
  );
};

export default UserProfileCard;
