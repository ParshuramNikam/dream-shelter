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

const ProfilePage = ({ edit,userDetails }) => {

  const [currentUser, setCurrentUser] = useState(userDetails)

  const { user } = useUserAuth();

  return (
    <section className="xl:w-10/12 mx-auto p-3 lg:flex flex-col overflow-x-hidden">
      {
        currentUser !== null
          ? <>
            <section >
              <UserProfileCard userInfo={currentUser} edit={edit} />
            </section>
            <section className="lg:flex flex-row ">
              <section className="flex-col ">
                <UserDetailedInfo userInfo={currentUser} edit={edit} />
                <UserLinks userInfo={currentUser} />
              </section>
              <section className="flex-col ">
                <CreatePost userInfo={currentUser} ishidden={false} userDetails={userDetails} />
                <PostsContainer />
              </section>
            </section>
          </>
          : "Loading..."
      }
    </section>
  );
};

export default ProfilePage;
