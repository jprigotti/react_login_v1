import React from 'react'
import LoginForm from '../components/LoginForm'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";


const LoginView = () => {

    const navigate = useNavigate();
    const { login, loginWithGoogle } = useAuth();
     

    const handleRegistration = () => {
        navigate("/register",
            { replace: true });
    }

    const handleLoginGoogle = async () => {
        try{    
            const response = await loginWithGoogle();
            console.log("signin response ", response);
            login(response.user.email);
            navigate("/", { replace: true });
        }catch(error){
            console.log(error);
        }

    }

    return (
        <div>
            <h3>Sign In</h3>
            <LoginForm />
            <button onClick={handleLoginGoogle}>Login with Google</button>
            <p>Don't have an account yet? Register </p>
            <button onClick={handleRegistration}>Here</button>

        </div>
    )
}

export default LoginView
