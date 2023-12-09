/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.console";
import axios from "axios";


const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const createUser = (email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signOutAll = () => {
        setIsLoading(true);
        return signOut(auth)
    }

    const googleSignIn = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };

            setUser(currentUser);
            setIsLoading(false);
            // console.log('current user: ', currentUser);

            // if user token
            if(currentUser){
                axios.post('https://assignment-11-server-rosy-theta.vercel.app/jwt', loggedUser, {withCredentials: true})
                .then(() =>{
                    // console.log(res.data);
                })
            }
            else(
                axios.post('https://assignment-11-server-rosy-theta.vercel.app/logout', loggedUser, {withCredentials: true})
                .then(res =>{
                    console.log(res.data)
                })
            )
        })
        return () => {
            return unsubscribe;
        }
    }, [user?.email])





    const authInfo = {
        createUser,
        loginUser,
        user,
        signOutAll,
        isLoading,
        googleSignIn,
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;