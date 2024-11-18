import React, {useState} from 'react';
import { signOut, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import auth from "../../__firebase__.js";



const Login = () => {
    const [user, setUser] = useState(null);


    const handleLogin = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result)=>{
                setUser(result.user)

            })
            .catch((error)=> {
                console.log(error)
            })
    }
    const handleGithubLogin = () => {
        const provider = new GithubAuthProvider();
        signInWithPopup(auth, provider).then((result)=> {
            setUser(result.user)
        }).catch((error)=>{
            console.log(error)
        })
    }
    const handleSignOut = () =>{
        signOut(auth).then(()=> setUser(null)).catch((error)=>console.log("Error: ", error))
    }

    console.log(user)

    return (

        <>

            {
                user && <div className={"my-2"}>
                    <h3>{user.displayName}</h3>
                    <p>Email: {user.email}</p>
                    <img src={user.photoURL}/>
                </div>
            }

            {
                user ?
                    <button onClick={handleSignOut} className={"p-2 font-bold bg-gray-400 rounded"}>Sign Out</button> :
                    <div>
                        <button onClick={handleLogin} className={"p-2 font-bold bg-gray-400 rounded"}>Log In with
                            google
                        </button>
                        <button onClick={handleGithubLogin} className={"p-2 font-bold bg-gray-400 rounded"}>Log In with
                            Github
                        </button>
                    </div>

            }

        </>
    );
};

export default Login;