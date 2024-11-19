import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.jsx";
import Login from "../components/Login.jsx";
import Home from "../components/Home.jsx";
import Register from "../components/Register.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children:[
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "login",
                element: <Login/>,
            },
            {
                path: "register",
                element: <Register/>,
            }
        ]
    },
]);


export default router;