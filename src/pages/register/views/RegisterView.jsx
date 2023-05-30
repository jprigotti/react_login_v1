import React from "react";
import { useNavigate } from "react-router-dom";
import RegisterForm from '../components/RegisterForm';

const RegisterView = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login", { replace: true });
  };

  return (
    <div>
      <h3>Register</h3>
      <RegisterForm />
      <p>Already have an account? Login </p>
      <button onClick={handleLogin}>Here</button>
    </div>
  );
};

export default RegisterView;
