import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import auth from '../firebase.config'
import { GithubAuthProvider } from "firebase/auth";


export const authContext = createContext(null);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);

    }
    const githubProvider = new GithubAuthProvider();
    const githubLogin = (email, password) => {
        return signInWithPopup(auth,githubProvider);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)

    }
    const SignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
        })
        return () => unsubscribe();
    }
        , [])


    const GoogleProvider = new GoogleAuthProvider();
    const googleSignIn = (email, password) => {
        return signInWithPopup(auth,GoogleProvider);
    }

    const authInfo = {
        user,
        createUser,
        logOut,
        SignIn,
        loading,googleSignIn,
        githubLogin

    }
    return (
        <authContext.Provider value={authInfo}>

            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;