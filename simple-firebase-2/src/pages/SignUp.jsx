import React from 'react';
import {NavLink} from "react-router-dom";
import {createUserWithEmailAndPassword} from "firebase/auth"
import auth from "../firebase/firebase.init.js";

const SignUp = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const password = e.target.password.value
        const email = e.target.email.value
        console.log(password, email)

        createUserWithEmailAndPassword(auth, email, password).then(res=>console.log(res)).catch(error=>console.log(error.message))
    }

    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name={"email"} className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name={"password"} placeholder="password" className="input input-bordered" required/>
                            <label className="label">
                                <NavLink to={"/login"} className="label-text-alt link link-hover">already have an account?</NavLink>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">SignUp</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;