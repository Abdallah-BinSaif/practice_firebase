import React, {useState} from 'react';
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import auth from "../firebase/firebase.init.js";

const Login = () => {
    const [user, setUser] = useState(null);
    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then(result => console.log(result.user)).catch(error => console.log(error))

    }
    const handleGithubSignIn = () => {
        console.log("Github")
    }

    const handleSingOut = () => {
        signOut(auth).then(()=>{
            setUser(null)
        }).catch((error)=> console.log(error))
        console.log(user)

    }

    return (


        <div className={"space-x-4"}>
            {
                user ? <button onClick={handleSingOut} className={"btn"}>LogOut</button> :
                    <>
                        <button onClick={handleGoogleSignIn} className={"btn"}>Log In with google</button>
                        <button onClick={handleGithubSignIn} className={"btn"}>Log In with Github</button>
                    </>
            }


        </div>
    )
        ;
};

export default Login;