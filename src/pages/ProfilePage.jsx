import UserProfileCard from "../components/UserProfile/UserProfileCard";
import Activity from "../components/UserProfile/Activity";
import UserLinks from "../components/UserLinks";
import UserDetailedInfo from "../components/UserDetailedInfo";
import AboutUserDetail from "../components/AboutUserDetail";
import UserSkills from "../components/UserSkills";
import CreatePost from "../components/home/CreatePost";
import PostsContainer from "../components/home/PostsContainer";
import { useUserAuth } from "../context/UserAuthContextProvider";

const ProfilePage = ({ edit }) => {
  
  return (
    <section className="xl:w-10/12 mx-auto p-3 lg:flex flex-col overflow-x-hidden">
      <section >
        <UserProfileCard edit={edit} />
      </section>
      <section className="lg:flex flex-row ">
        <section className="flex-col ">
          <UserDetailedInfo edit={edit} />
          <UserLinks />
        </section>
        <section className="flex-col ">
          <CreatePost ishidden={false} />
          <PostsContainer />
        </section>
      </section>
    </section>
  );
};

export default ProfilePage;
