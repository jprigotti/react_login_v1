import React from 'react'
import LoginForm from '../components/LoginForm'
import { useNavigate } from "react-router-dom";

const LoginView = () => {

    const navigate = useNavigate();
    
    const handleRegistration = () => {
        navigate("/register",
            { replace: true });
    }

    return (
        <div>
            <h3>Sign In</h3>
            <LoginForm />
            <p>Don't have an account yet? Register </p>
            <button onClick={handleRegistration}>Here</button>

        </div>
    )
}

export default LoginView
