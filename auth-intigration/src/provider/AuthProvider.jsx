import React, {createContext, useEffect, useState} from 'react';
import { createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import auth from "../firebase.init.js";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signOutUser = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    // observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            if(currentUser){
                console.log(currentUser)
                setUser(currentUser)
                setLoading(false)
            }else{
                setUser(null)
                setLoading(true)
            }
        })
        return ()=>unSubscribe()
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        signOutUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;