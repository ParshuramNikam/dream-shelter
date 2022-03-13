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
    }
    //console.log(error);
}

const useAuthContext = createContext();

const UserAuthContextProvider = ({ children }) => {

    const [user, setUser] = useState("");

    const history = useHistory();

    const signUp = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password)
            .then(async (res) => {
                // send email verification
                console.log("Sending link ....");

                await auth.currentUser.sendEmailVerification()
                    .then(() => {
                        alert("Check your email!! Verification link sent to you!")
                    });

                console.log(res);
                alert("Successfully Registered !");
                alert("Store this data into Firestore DB | email: ", res.user.uid)

                console.log("Adding user to firestore......");
                await db.collection('Users').doc(res.user.uid).set({
                    userInfo: {
                        email: email,
                    },
                    interest: [],
                    activityWantsToDo: [],
                    emailVerified: false,
                    created: firebase.firestore.FieldValue.serverTimestamp()
                }).then(() => {
                        alert("User added in firestore");
                    }).catch((error) => {
                        errorHandler(error);
                        return false;
                    })

                return true;
            })
            .catch((error) => {
                errorHandler(error);
                return false;
            });
    }

    const logIn = (email, password) => {
        console.log(email, "  |  ", password);
        return auth.signInWithEmailAndPassword(email, password)
            .then((currentUser) => {

                if (!currentUser.user.emailVerified) {
                    return alert("Please, Do EMail verification!")
                }

                //save data into db
                if (
                    currentUser.user &&
                    (currentUser.user.uid !== null || currentUser.user.uid !== undefined)
                ) {
                    alert("Successfully Logged In ! - user : " + currentUser.user.uid)
                    return true;
                } else {
                    // enqueueSnackbar('Error, Try again later !', {
                    //     variant: 'error',
                    // });
                    alert('Error, Try again later !')
                    return false;
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

        // let isSucessfullyLoggedIn = false;

        return firebase.auth().signInWithPopup(provider)
            .then(async (res) => {
                console.log(res);
                var token = res.credential.accessToken;
                console.log(res.user.uid);

                console.log(token);

                try {
                    let usersArr = [];
                    // const query = await collection('Users').where('email', '==', res.user.email).get();
                    if (res.user.email) {
                        await db.collection('Users').where('userInfo.email', '==', res.user.email).get().then(snapshot => {
                            snapshot.docs.forEach(doc => {
                                usersArr.push({ ...doc.data(), id: doc.id });
                            });
                            console.log("snapshot : ", snapshot);
                        })
                    }
                    console.log("where query users in google login : ", usersArr);

                    if (usersArr.length > 0) {
                        console.log("Here............................");
                        alert("User already logged in through google ,.. so not added in firestore");
                    } else {
                        // not found
                        await db.collection('Users').doc(res.user.uid).set({
                            userInfo: {
                                email: res.user.email,
                                photoURL: res.user.photoURL,
                            },
                            interest: [],
                            activityWantsToDo: [],
                            emailVerified: true,
                            created: firebase.firestore.FieldValue.serverTimestamp()
                        }).then(() => {
                            alert("User added in firestore");
                        })
                    }

                    return true;


                } catch (err) {
                    errorHandler(err);
                    console.log("error", err);
                    return false;
                }

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