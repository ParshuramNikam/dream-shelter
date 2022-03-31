import UserProfileCard from "../components/UserProfile/UserProfileCard";
import Activity from "../components/UserProfile/Activity";
import UserLinks from "../components/UserLinks";
import UserDetailedInfo from "../components/UserDetailedInfo";
import AboutUserDetail from "../components/AboutUserDetail";
import UserSkills from "../components/UserSkills";
import CreatePost from "../components/home/CreatePost";
import PostsContainer from "../components/home/PostsContainer";
import { useEffect, useState } from "react";
import firebase from "firebase";
import { db, auth } from "../database/firebase.config";
import { useUserAuth } from "../context/UserAuthContextProvider";
import { useParams } from "react-router-dom";

const ProfilePage = ({ edit, userDetails }) => {
  const { uid } = useParams();
  const [isEditable, setIsEditable] = useState(false);
  const [refreshPost,setRefreshPost]=useState(true);

  useEffect(() => {
    if (uid === localStorage.getItem("ds-user-uid")) {
      setIsEditable(true);
    }
  });

  return (
    <section className="xl:w-10/12 mx-auto p-3 lg:flex flex-col overflow-x-hidden">
      {userDetails !== null ? (
        <>
          <section>
            <UserProfileCard userInfo={userDetails} edit={edit} />
          </section>
          <section className="lg:flex flex-row ">
            <section className="flex-col ">
              <UserDetailedInfo userInfo={userDetails} edit={edit} />
              <UserLinks userInfo={userDetails} userDetails={userDetails} />
            </section>
            <section className="flex-col ">
              {isEditable && (
                <CreatePost
                  userInfo={userDetails}
                  ishidden={true}
                  userDetails={userDetails}
                />
              )}
              <PostsContainer isProfilePage={true} userDetails={userDetails} refreshPost={refreshPost} />
            </section>
          </section>
        </>
      ) : (
        "Loading..."
      )}
    </section>
  );
};

export default ProfilePage;
