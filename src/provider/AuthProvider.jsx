import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import { useEffect } from 'react';



export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [showPassword, setShowPassword] = useState(false);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(()=>{
        onAuthStateChanged(auth, currentUser => {
            console.log('current user -->', currentUser)
            setUser(currentUser)
        })
    },[])



    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        signInWithGoogle,
        showPassword,
        setShowPassword,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;