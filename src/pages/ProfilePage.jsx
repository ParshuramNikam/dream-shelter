import UserProfileCard from "../components/UserProfile/UserProfileCard";
import Activity from "../components/UserProfile/Activity";
import UserLinks from "../components/UserLinks";
import UserDetailedInfo from "../components/UserDetailedInfo";
import AboutUserDetail from "../components/AboutUserDetail";
import UserSkills from "../components/UserSkills";

const ProfilePage = ({edit}) => {
  return (
    <section className=" mx-auto lg:flex flex-row overflow-x-hidden">
      <div className="sm:flex">
        <section className="">
          <UserProfileCard edit={edit} />
          <UserLinks />
        </section>
        <section >
          {/* <Activity /> */}
          <AboutUserDetail />
        </section>
      </div>
      <section className="sm:flex lg:block">
        <UserDetailedInfo edit={edit} />
        <UserSkills />
      </section>
    </section>
  );
};

export default ProfilePage;
