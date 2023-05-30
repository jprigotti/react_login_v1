import React from 'react'
import { useNavigate } from "react-router-dom";

const RegisterView = () => {

    const navigate = useNavigate();
    
    const handleLogin = () => {
        navigate("/login",
            { replace: true });
    }

  return (
    <div>
      <h3>Register</h3>
      <p>Already have an account? Login </p>
            <button onClick={handleLogin}>Here</button>
    </div>
  )
}

export default RegisterView
