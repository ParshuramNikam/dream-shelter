import { createContext, useEffect, useState, useContext } from 'react'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    sendEmailVerification
} from 'firebase/auth'
import { auth, db } from '../database/firebase.config';
import { useHistory } from 'react-router-dom';

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
    } else {
        console.log(errorMessage)
        alert(errorMessage);
    }
    //console.log(error);
}

const useAuthContext = createContext();

const UserAuthContextProvider = ({ children }) => {

    const [user, setUser] = useState("");

    const history = useHistory();

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                // send email verification
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        alert("Check your email!! Verification link sent to you!")
                    });
                
                console.log(res);
                alert("Successfully Registered !");
                alert("Store this data into Firestore DB | email: ", res.user.uid)

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
        return signInWithEmailAndPassword(auth, email, password)
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

                    // enqueueSnackbar('Successfully Registered !', {
                    //     variant: 'success',
                    // });


                    // props.changeFlag(true);

                    // const saveUserIntoDb = async (currentUser, data) => {
                    //     db.collection('registerUsers')
                    //         .doc(currentUser.user.uid)
                    //         .set({
                    //             createdAt: new Date(),
                    //             firstname: data.firstname,
                    //             lastname: data.lastname,
                    //             birthdate: convertDate(data.birthdate),
                    //             phone: data.phone,
                    //             email: data.email,
                    //             city: data.city,
                    //             gym: data.gym,
                    //             plan: data.plan,
                    //             password: data.password,
                    //             confirmPassword: data.confirmPassword,
                    //             endDate: null,
                    //             license: false,
                    //             startDate: null,
                    //             type: 'user',
                    //         });
                    // };

                    // const sendRequestToAdmin = async (currentUser, data) => {
                    //     db.collection('licenseRequests')
                    //         .get()
                    //         .then((snapshot) => {
                    //             var userRequest = {
                    //                 uid: currentUser.user.uid,
                    //                 firstname: data.firstname,
                    //                 lastname: data.lastname,
                    //                 gym: data.gym,
                    //                 plan: data.plan,
                    //                 phone: data.phone,
                    //                 email: data.email,
                    //                 createdAt: new Date(),
                    //                 status: false,
                    //                 approvedOn: null,
                    //             };
                    //             if (!snapshot.empty) {
                    //                 var res = firebaseLooper(snapshot);
                    //                 db.collection('licenseRequests')
                    //                     .doc(res[0].id)
                    //                     .update({
                    //                         requests:
                    //                             firebase.firestore.FieldValue.arrayUnion(userRequest),
                    //                     });
                    //             }
                    //         });
                    // };

                    // saveUserIntoDb(currentUser, userdetails);
                    // sendRequestToAdmin(currentUser, userdetails);

                    // setUsedetails({
                    //     firstname: '',
                    //     lastname: '',
                    //     birthdate: '',
                    //     phone: '',
                    //     email: '',
                    //     city: '',
                    //     gym: '',
                    //     plan: '',
                    //     password: '',
                    //     confirmPassword: '',
                    // });

                    //console.log(currentUser);

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
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider)
            .then((res) => {
                console.log(res);
            })
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
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