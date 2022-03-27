import { BellIcon } from "@heroicons/react/outline";
import { useState, useEffect } from "react";
import OneNotication from "../components/OneNotication";
import { useUserAuth } from "../context/UserAuthContextProvider";
import { db } from "../database/firebase.config";
import { notifications } from "../dummy-data/data";

const NoticationPage = () => {
  const [userNotifications,setUserNotifications] = useState([]);

  const { user } = useUserAuth();
  useEffect(() => {
    db.collection("users")
      .doc("PrAFinyKta5nDcwAWybe")
      .get()
      .then((snapshot) => {
        console.log(snapshot.data()[user.uid].notifications);
        setUserNotifications(snapshot.data()[user.uid].notifications);
      });
  }, []);

  return (
    <section className="max-w-4xl mx-auto p-1 my-2">
      <h1 className="pb-3 mx-3 font-semibold text-lg">
        Notifications
        <BellIcon className="ml-1 h-7 w-7 fill-gray-300 stroke-current inline-block relative bottom-0.5" />
      </h1>
      {userNotifications.map((notification,index) => (
        <OneNotication
          key={index}
          id={notification && notification.questionId ? notification.questionId :  index}
          img={notification.photoURL}
          timestamp={notification.timestamp}
          title={notification.title}
          desc={notification.desc}
          read={notification.read}
        />
      ))}
    </section>
  );
};

export default NoticationPage;
