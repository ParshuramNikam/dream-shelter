import { PencilIcon, ShareIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { storage } from "../../database/firebase.config";
import { db } from "../../database/firebase.config";
import firebase from "firebase";
import { useParams } from "react-router-dom";

const UserProfileCard = ({ userInfo, edit, setfname }) => {
  const [bannerUrl, setBannerUrl] = useState(
    // `url(${userInfo.bannerURL})`
    "url(https://media-exp1.licdn.com/dms/image/C4D16AQHOGTXAwxWr9A/profile-displaybackgroundimage-shrink_350_1400/0/1596362810946?e=1651104000&v=beta&t=O21KMZ5zRis5SKIIjChFY5UUr4n71s1QHg2DXQ-Ot2Q)"
    );

    const [profileUrl, setProfileUrl] = useState(
      `url(${userInfo.profileURL})`
          );

  const [profileImage, setProfileImage] = useState(null);
  const [bannerImage, setBannerImage] = useState(null);

  const {uid}=useParams(); 

  const [isEditable,setIsEditable] = useState(false);

  useEffect(()=>{
    if(userInfo.bannerURL!==""){
      setBannerUrl(`url(${userInfo.bannerURL})`);
      console.log("url updated succesfully!");
      console.log(bannerUrl);
    }
    if(userInfo.profileURL!==""){
      setProfileUrl(`url(${userInfo.profileURL})`);
      console.log("url updated succesfully!");
      console.log(profileUrl);
    }
    if(uid===localStorage.getItem('ds-user-uid')){
     setIsEditable(true); 
    }
  },[])

  async function uploadBannerImage(e) {
    console.log(e.target.files[0]);
    if (e.target.files[0]) {
      setBannerImage(e.target.files[0]);

      //firebase image upload

      let bucketName = `${localStorage.getItem('ds-user-uid')}/bannerImages`;
      let file = bannerImage;
      let storageRef = await firebase
        .storage()
        .ref(`${bucketName}/${e.target.files[0].name}`);
      // const uploadTask = await storageRef.put(file);
      await storageRef.put(file).on(firebase.storage.TaskEvent.STATE_CHANGED, async () => {
        let bannerImageURL = await storageRef.getDownloadURL();
        // bannerImageURL.then((result) => {
        //   console.log(result);
        // });
        console.log(bannerImageURL);
        setBannerUrl(`url(${bannerImageURL})`);
        await db
          .collection("Users")
          .doc(localStorage.getItem("ds-user-uid"))
          .update({
            bannerURL: bannerImageURL,
          })
          .then(() => {
            console.log("banner image uploaded successfully");
            // setBannerUrl()
          })
          .catch((error) => {
            console.log("storageerror", error);
          });
      });
    }
  }

  async function uploadProfileImage(e) {
    console.log(e.target.files[0]);
    if (e.target.files[0]) {
      setProfileImage(e.target.files[0]);

      //firebase image upload

      let bucketName = `${localStorage.getItem('ds-user-uid')}/profileImages`;
      let file = profileImage;
      let storageRef = await firebase
        .storage()
        .ref(`${bucketName}/${e.target.files[0].name}`);
      // const uploadTask = await storageRef.put(file);
      await storageRef.put(file).on(firebase.storage.TaskEvent.STATE_CHANGED, async () => {
        let profileImageURL = await storageRef.getDownloadURL();
        console.log(profileImageURL);
        setProfileUrl(`url(${userInfo.profileURL})`);
        await db
          .collection("Users")
          .doc(localStorage.getItem("ds-user-uid"))
          .update({
            photoURL: profileImageURL,
          })
          .then(() => {
            console.log("profile image uploaded successfully");
          })
          .catch((error) => {
            console.log("storageerror", error);
          });
      });
    }
  }

  // useEffect(() => {
  //   if (userInfo.bannerURL !== "") {
  //     setBannerUrl(`url(${userInfo.bannerURL})`);
  //   }
  // }, []);

  return (
    // <div className="max-w:sm block bg-white  h-max px-3 py-5 m-2 border border-gray-200 rounded-lg  overflow-hidden shadow-lg">
    <div className="bannerbg h-56 md:h-72 bg-white mt-5 ">
      {/* <img src={profileUrl} alt="lasd" /> */}
      <div
        className="banner h-44 md:h-60 w-full"
        style={{ backgroundImage: bannerUrl }}

        // style={{backgroundImage: (bannerUrl!=="" ? bannerUrl : 'url(https://media-exp1.licdn.com/dms/image/C4D16AQHOGTXAwxWr9A/profile-displaybackgroundimage-shrink_350_1400/0/1596362810946?e=1651104000&v=beta&t=O21KMZ5zRis5SKIIjChFY5UUr4n71s1QHg2DXQ-Ot2Q)')}}
      >
       {
         isEditable && 
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
       }
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
            {
              isEditable && 
              <label
              type="label"
              className="relative bottom-12 right-12 cursor-pointer p-1 rounded-full text-cyan-700 bg-white hover:text-cyan-900  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Edit Profile</span>
              <input
                type="file"
                className="hidden"
                multiple="multiple"
                accept="accept"
                onChange={(e) => {
                  uploadProfileImage(e);
                }}
              />
              <PencilIcon
                className="p-0.5 w-5 h-5 hover:stroke-white-300"
                aria-hidden="true"
              />
            </label>
            }

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
