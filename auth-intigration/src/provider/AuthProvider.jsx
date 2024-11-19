import React, {createContext, useEffect, useState} from 'react';
import { createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import auth from "../firebase.init.js";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signOutUser = ()=>{
        return signOut(auth)
    }
    // observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            if(currentUser){
                console.log(currentUser)
                setUser(currentUser)
            }else{
                setUser(null)
            }
        })
        return ()=>unSubscribe()
    }, []);

    const authInfo = {
        user,
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