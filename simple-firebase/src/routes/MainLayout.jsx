import React from 'react';
import Navbar from "../components/Navbar.jsx";
import Home from "../components/Home.jsx";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div className={"container mx-auto"}>
            <Navbar></Navbar>
            <Home></Home>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;