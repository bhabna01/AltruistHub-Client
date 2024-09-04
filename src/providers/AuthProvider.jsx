// import { createContext, useEffect, useState } from "react";
// import app from "../firebase/firebase.config";
// import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
// import axios from "axios";
// export const AuthContext = createContext();
// const auth = getAuth(app);


// // eslint-disable-next-line react/prop-types
// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true)
//     const createUser = (email, password) => {
//         setLoading(true)
//         return createUserWithEmailAndPassword(auth, email, password)
//     }
//     const signIn = (email, password) => {
//         setLoading(true)
//         return signInWithEmailAndPassword(auth, email, password)
//     }
//     const googleLogin = (provider) => {
//         setLoading(true);
//         return signInWithPopup(auth, provider)
//     }
//     const logOut = () => {
//         setLoading(true)
//         return signOut(auth)
//     }
//     const updateUserProfile = (profile) => {
//         setLoading(true)
//         return updateProfile(auth.currentUser, profile)
//     }
//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, currentUser => {
//             const userEmail = currentUser?.email || user?.email;
//             const loggedUser = { email: userEmail };
//             setUser(currentUser);
//             console.log('current user', currentUser);
//             setLoading(false);

//             if (currentUser) {
//                 axios.post('http://localhost:5000/jwt', loggedUser, { withCredentials: true })
//                     .then(res => {
//                         console.log('token response', res.data);
//                     })
//             }
//             else {
//                 axios.post('http://localhost:5000/logout', loggedUser, {
//                     withCredentials: true
//                 })
//                     .then(res => {
//                         console.log(res.data);
//                     })
//             }
//         });
//         return () => {
//             return unsubscribe();
//         }
//     }, [])

//     const authInfo = {
//         user,
//         loading,
//         createUser,
//         logOut,
//         signIn,
//         googleLogin,
//         updateUserProfile
//     }
//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                setLoading(false);
                return user;
            });
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                setLoading(false);
                return user;
            });
    }

    const googleLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
            .then(async (result) => {
                const user = result.user;
                setUser(user);
                setLoading(false);

                // Send user data to your server to set the cookie
                const loggedUser = { email: user.email };

                try {
                    const response = await axios.post('http://localhost:5000/jwt', loggedUser, {
                        withCredentials: true, // This ensures the cookie is set in the user's browser
                    });
                    console.log('Token response', response.data);
                } catch (error) {
                    console.error('Error setting cookie:', error);
                }

                return user;
            })
            .catch((error) => {
                console.error('Google login failed:', error);
                setLoading(false);
            });
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
            .then(() => {
                setUser(null);
                setLoading(false);
            });
    }

    const updateUserProfile = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile)
            .then(() => {
                // Update user state with the new profile data
                setUser({ ...auth.currentUser });
                setLoading(false);
            });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);

            if (currentUser) {
                const loggedUser = { email: currentUser.email };
                axios.post('http://localhost:5000/jwt', loggedUser, { withCredentials: true })
                    .then((res) => {
                        console.log('Token response', res.data);
                    })
                    .catch((error) => console.error(error));
            } else {
                axios.post('http://localhost:5000/logout', { withCredentials: true })
                    .then((res) => {
                        console.log(res.data);
                    })
                    .catch((error) => console.error(error));
            }
        });
        return () => unsubscribe();
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        logOut,
        signIn,
        googleLogin,
        updateUserProfile,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
