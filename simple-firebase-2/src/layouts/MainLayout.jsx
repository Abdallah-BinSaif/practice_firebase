import React from 'react';
import {Outlet} from "react-router-dom";
import NavBar from "../components/NavBar.jsx";

const MainLayout = () => {
    return (
        <div className={"container mx-auto"}>
            <NavBar></NavBar>

            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;