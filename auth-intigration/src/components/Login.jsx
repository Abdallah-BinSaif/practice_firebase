import React, {useContext} from 'react';
import {Navigate, NavLink} from "react-router-dom";
import {AuthContext} from "../provider/AuthProvider.jsx";

const Login = () => {
    const {loginUser, user} = useContext(AuthContext);
    const handleLogin = (e) => {

        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        loginUser(email, password).then(res => console.log(res.user)).catch(error => console.log(error))

    }

    if (user){
        return <Navigate to={"/"}></Navigate>
    }

    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold">Login now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name={"email"} placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name={"password"} placeholder="password" className="input input-bordered" required/>
                            <label className="label">
                                <p> New to this website? please
                                    <NavLink to="/register" className="text-base label-text-alt link link-hover underline ml-2 text-green-700">Register</NavLink>
                                </p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;