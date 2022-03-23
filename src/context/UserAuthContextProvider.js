import { createContext, useEffect, useState, useContext } from "react";
// import { collection, addDoc, Timestamp, query, where, onSnapshot } from 'firebase/firestore'
// import {
//     createUserWithEmailAndPassword,
//     signInWithEmailAndPassword,
//     signOut,
//     onAuthStateChanged,
//     GoogleAuthProvider,
//     signInWithPopup,
//     sendEmailVerification
// } from 'firebase/auth'
import { auth, db } from "../database/firebase.config";
import { useHistory } from "react-router-dom";
import firebase from "firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  notifyError,
  notifyInfo,
  notifySuccess,
  notifyWarning,
} from "../utils/reactToast";

const errorHandler = (error) => {
  var errorCode = error.code;
  var errorMessage = error.message;
  if (errorCode === "auth/wrong-password") {
    // enqueueSnackbar('Wrong Password !', {
    //     variant: 'error',
    // });
    notifyWarning("Wrong Password!");
    return;
  } else if (errorCode === "auth/invalid-email") {
    // enqueueSnackbar('Wrong Email !', {
    //     variant: 'error',
    // });
    notifyWarning("Wrong Email !");
    return;
  } else if (errorCode === "auth/user-disabled") {
    // enqueueSnackbar('User is Blocked !', {
    //     variant: 'error',
    // });
    notifyWarning("User is Blocked !");
    return;
  } else if (errorCode === "auth/user-not-found") {
    // enqueueSnackbar('User not Found !', {
    //     variant: 'error',
    // });
    notifyWarning("User not Found !");
    return;
  } else if (errorCode === "auth/email-already-in-use") {
    // enqueueSnackbar('Email Id already register, Please Login !', {
    //     variant: 'error',
    // });
    notifyWarning("Email Id already register, Please Login !");
    return;
  } else if (errorCode === "auth/too-many-requests") {
    return notifyWarning(
      "account has been temporarily disabled due to many failed login attempts"
    );
  } else if (errorCode == "auth/network-request-failed") {
    return notifyError("Network request Failed!");
  } else if (errorCode === "auth/popup-closed-by-user") {
    console.log("popup closed!");
  } else {
    console.log(errorMessage);
  }
  //console.log(error);
};

const useAuthContext = createContext();

const UserAuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [userDetails, setUserDetails] = useState("");

  // const getuserdetails=()=>{

  // }

  const history = useHistory();

  const signUp = (email, password) => {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then(async (res) => {
        // send email verification
        console.log("Sending link ....");

        await auth.currentUser.sendEmailVerification().then(() => {
          // for user verification
          notifyInfo("Check your email!! Verification link sent to you!");
        });

        console.log(res);
        console.log("Successfully Registered !");
        await db
          .collection("Users")
          .doc(res.user.uid)
          .set({
            email: email,
            interest: [],
            activityWantsToDo: [],
            emailVerified: false,
            photoURL: "https://firebasestorage.googleapis.com/v0/b/dream-shelter-cce6d.appspot.com/o/common%2Favatar.png?alt=media&token=72157de7-fdf6-4b11-a76a-623c61b4e0f9",
            followed: 0,
            followers: 0,
            blogs: 0,
            questionsAsked: 0,
            collegeName: "",
            bannerURL: "",
            jobtitle: "",
            created: firebase.firestore.FieldValue.serverTimestamp(),
          })
          .then(() => {
            console.log("User added in firestore");
          })
          .catch((error) => {
            errorHandler(error);
            return "signup";
          });
        var uid = res.user.uid;
        localStorage.setItem("ds-user-uid", uid);

        notifySuccess("Signup Successful");
        return "signup-questions";
      })
      .catch((error) => {
        errorHandler(error);
        return "signup";
      });
  };

  const logIn = (email, password) => {
    console.log(email, "  |  ", password);
    return auth
      .signInWithEmailAndPassword(email, password)
      .then((currentUser) => {
        if (!currentUser.user.emailVerified) {
          return notifyWarning("Please, Do email verification!");
        }

        //save data into db
        if (
          currentUser.user &&
          (currentUser.user.uid !== null || currentUser.user.uid !== undefined)
        ) {
          console.log(
            "Successfully Logged In ! - user : " + currentUser.user.uid
          );
          return true;
        } else {
          // enqueueSnackbar('Error, Try again later !', {
          //     variant: 'error',
          // });
          notifyError("Error, Try again later !");
          return false;
        }
      })
      .catch((error) => {
        errorHandler(error);
      });
  };

  const loginWithGoogle = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");

    // let isSucessfullyLoggedIn = false;

    return firebase
      .auth()
      .signInWithPopup(provider)

  };

  const logOut = () => {
    return auth.signOut().then(() => {
      notifySuccess("Signout Successful");
      localStorage.removeItem('ds-user-uid')
    });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      console.log("running");
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <useAuthContext.Provider
      value={{ user, setUser, signUp, logIn, loginWithGoogle, logOut }}
    >
      {children}
      <ToastContainer />
    </useAuthContext.Provider>
  );
};

const useUserAuth = () => {
  return useContext(useAuthContext);
};

export { UserAuthContextProvider, useUserAuth };
