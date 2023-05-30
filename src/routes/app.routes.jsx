import {Navigate, createBrowserRouter } from "react-router-dom";
import LoginView from "../pages/login/views/LoginView";
import HomeView from "../pages/home/views/HomeView";
import RegisterView from "../pages/register/views/RegisterView";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";


export const Router = createBrowserRouter([
    {
        path: "/",
        element:
            (<ProtectedRoute>
                <HomeView />
            </ProtectedRoute>),

    },
    {
        path: "/login",
        element: 
        (<PublicRoute>
            <LoginView />
        </PublicRoute>),
    },
    {
        path: "/register",
        element: 
        (<PublicRoute>
            <RegisterView />
        </PublicRoute>),
    }
]);
