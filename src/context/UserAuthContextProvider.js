import { createContext, useEffect, useState, useContext } from 'react'
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
import { auth, db } from '../database/firebase.config';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase';

const errorHandler = (error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode === 'auth/wrong-password') {
        // enqueueSnackbar('Wrong Password !', {
        //     variant: 'error',
        // });
        alert("Wrong Password!")
    } else if (errorCode === 'auth/invalid-email') {
        // enqueueSnackbar('Wrong Email !', {
        //     variant: 'error',
        // });
        alert("Wrong Email !")
    } else if (errorCode === 'auth/user-disabled') {
        // enqueueSnackbar('User is Blocked !', {
        //     variant: 'error',
        // });
        alert("User is Blocked !")
    } else if (errorCode === 'auth/user-not-found') {
        // enqueueSnackbar('User not Found !', {
        //     variant: 'error',
        // });
        alert("User not Found !'");
    } else if (errorCode === 'auth/email-already-in-use') {
        // enqueueSnackbar('Email Id already register, Please Login !', {
        //     variant: 'error',
        // });
        alert("Email Id already register, Please Login !")
    } else if (errorCode === "auth/popup-closed-by-user") {
        console.log("popup closed!");
    } else {
        console.log(errorMessage)
        alert(errorMessage);
    }
    //console.log(error);
}

const useAuthContext = createContext();

var actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'http://localhost:3000/login',
    // This must be true.
    handleCodeInApp: true,
    dynamicLinkDomain: 'example.page.link'
  };

const UserAuthContextProvider = ({ children }) => {

    const [user, setUser] = useState("");

    const history = useHistory();

    const signUp = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password)
            .then((res) => {
                // send email verification
                auth.sendSignInLinkToEmail(email,actionCodeSettings)
                    .then(() => {
                        alert("Check your email!! Verification link sent to you!")
                    });

                console.log(res);
                alert("Successfully Registered !");
                alert("Store this data into Firestore DB | email: ", res.user.uid)

                try {
                    db.collection('Users').add({
                        userInfo: {
                            email: email,
                        },
                        interest: [],
                        activityWantsToDo: [],
                        emailVerified: false,
                        created: firebase.firestore.FieldValue.serverTimestamp()
                    })
                    .then(() => {
                        alert("User added in firestore");
                    })
                } catch (err) {
                    alert(err)
                }

                history.push('/');

                // if (res.user) {
                //   enqueueSnackbar('Successfully Logged In !', {
                //     variant: 'success',
                //   });
                // }
            })
            .catch((error) => {
                errorHandler(error);
            });
    }

    const logIn = (email, password) => {
        console.log(email, "  |  ", password);
        return auth.signInWithEmailAndPassword(email, password)
            .then((currentUser) => {

                if (!currentUser.user.emailVerified) {
                    return alert("Please, Do EMail verification!")
                }

                history.push('/');

                //save data into db
                if (
                    currentUser.user &&
                    (currentUser.user.uid !== null || currentUser.user.uid !== undefined)
                ) {
                    alert("Successfully Logged In ! - user : " + currentUser.user.uid)

                } else {
                    // enqueueSnackbar('Error, Try again later !', {
                    //     variant: 'error',
                    // });
                    alert('Error, Try again later !')
                }
            })
            .catch((error) => {
                errorHandler(error)
            });
    }

    const loginWithGoogle = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        firebase.auth().signInWithPopup(provider)
            .then(async (res) => {
                console.log(res);
                var token = res.credential.accessToken;
                const user = res.user;

                try {
                    let users = [];
                    // const query = await collection('Users').where('email', '==', res.user.email).get();
                    db.collection('Users').where('email','==',res.user.email).get().then(snapshot=>{
                        snapshot.docs.forEach(doc => {
                            user.push({...doc.data(), id:doc.id});
                        });
                        console.log(users);
                    })
                

                    if (users.length > 0) {
                        console.log("Here............................");
                        alert("User already logged in through google ,.. so not added in firestore");
                    } else {
                        // not found
                        db.collection('Users').add( {
                            userInfo: {
                                email: user.email,
                                photoURL: user.photoURL,
                            },
                            interest: [],
                            activityWantsToDo: [],
                            emailVerified: true,
                            created:  firebase.firestore.FieldValue.serverTimestamp()
                        }).then(() => {
                            alert("User added in firestore");
                        })
                    }


                } catch (err) {
                    alert(err)
                    console.log("error",err);
                }

                return res;
            })
    }

    const logOut = () => {
        return auth.signOut();
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <useAuthContext.Provider
            value={{ user, signUp, logIn, loginWithGoogle, logOut }}
        >
            {children}
        </useAuthContext.Provider>
    )
}

const useUserAuth = () => {
    return useContext(useAuthContext);
}

export { UserAuthContextProvider, useUserAuth }