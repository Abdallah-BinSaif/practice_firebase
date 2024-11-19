import React from 'react';
import {NavLink} from "react-router-dom";
import {signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import auth from "../firebase/firebase.init.js";

const Registration = () => {

    const handleRegistrationSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoURL = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, photoURL, email, password)

        signInWithEmailAndPassword(auth, email, password)
            .then(user=> {
                console.log(user)
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL:photoURL
                })
                    .then(()=> {console.log("profileUpdated")})
                    .catch((error)=> console.log(error))
            })
            .catch(error=>console.log(error))


    }

    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegistrationSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name={"name"} className="input input-bordered"
                                   />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">photoURL</span>
                            </label>
                            <input type="text" placeholder="photo" name={"photo"} className="input input-bordered"
                                   />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name={"email"} className="input input-bordered"
                                   required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name={"password"} placeholder="password"
                                   className="input input-bordered" required/>
                            <label className="label">
                                <NavLink to={"/login"} className="label-text-alt link link-hover">already have an
                                    account?</NavLink>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;