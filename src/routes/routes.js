import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element:<Home/>
            },
            {
                path: "/home",
                element:<Home/>
            },
            {
                path: "/",
                element:<About/>
            }
        ]
   }
])