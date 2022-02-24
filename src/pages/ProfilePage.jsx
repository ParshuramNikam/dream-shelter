import UserProfileCard from "../components/UserProfile/UserProfileCard";
import Activity from "../components/UserProfile/Activity";
import UserLinks from "../components/UserLinks";
import UserDetailedInfo from "../components/UserDetailedInfo";
import AboutUserDetail from "../components/AboutUserDetail";
import UserSkills from "../components/UserSkills";

const ProfilePage = ({ edit }) => {
  return (
    <section className="xl:w-10/12 mx-auto lg:flex flex-col overflow-x-hidden">
      <section>
        <UserProfileCard edit={edit} />
      </section>
      <section className="flex flex-col ">
        <section className="flex ">
          <UserDetailedInfo edit={edit} />
          <UserSkills />
        </section>
        <section className="flex ">
          <UserLinks />
          <AboutUserDetail />
        </section>
      </section>
    </section>
  );
};

export default ProfilePage;
