import UserProfilePage from "../components/UserProfile/UserProfileCard";
import Activity from "../components/UserProfile/Activity";
import UserLinks from "../components/UserLinks";
import UserDetailedInfo from "../components/UserDetailedInfo";
import AboutUserDetail from "../components/AboutUserDetail";
import UserSkills from "../components/UserSkills";
import OtherUser from "./OtherUserProfilePage";
import OtherUserProfilePage from "./OtherUserProfilePage";
import OtherUserDetailedInfo from "../components/OtherUserDetailedInfo";

const OtherProfilePage = () => {
  return (
    <section className="xl:w-11/12 mx-auto flex flex-row">
      <section>
        <OtherUserProfilePage />
        <Activity />
        {/* <UserLinks/> */}
      </section>
      <section>
        <OtherUserDetailedInfo />
        <AboutUserDetail />
      </section>
      <section>
        <UserLinks/>
        <UserSkills />
      </section>
    </section>
  );
};

export default OtherProfilePage;