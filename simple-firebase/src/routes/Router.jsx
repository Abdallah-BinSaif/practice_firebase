import {createBrowserRouter} from "react-router-dom";
import Login from "../components/Login.jsx";
import MainLayout from "./MainLayout.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout></MainLayout>,
        children: [
            {
                path: "/login",
                element: <Login></Login>
            }
        ]
    },

])

export default router;