import UserProfileCard from "../components/UserProfile/UserProfileCard";
import Activity from "../components/UserProfile/Activity";
import UserLinks from "../components/UserLinks";
import UserDetailedInfo from "../components/UserDetailedInfo";
import AboutUserDetail from "../components/AboutUserDetail";
import UserSkills from "../components/UserSkills";

const ProfilePage = () => {
  return (
    <section className="xl:w-11/12 mx-auto flex flex-row">
      <section>
        <UserProfileCard />
        <Activity />
        {/* <UserLinks/> */}
      </section>
      <section>
        <UserDetailedInfo />
        <AboutUserDetail />
      </section>
      <section>
        <UserLinks/>
        <UserSkills />
      </section>
    </section>
  );
};

export default ProfilePage;
