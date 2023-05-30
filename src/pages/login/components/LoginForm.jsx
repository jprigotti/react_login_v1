import React, {useState} from "react";
import { useAuth } from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const LoginForm = () => {
  const navigate = useNavigate();

  const [error, setError] = useState('');

  const { isLoggedIn, login, signin } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = new FormData(event.target);
    const { email, password } = Object.fromEntries(form.entries());

    try{    
        const response = await signin(email, password);
        console.log("signin response ", response);
        login(email);
        navigate("/", { replace: true });
    }catch(error){
        console.log(error);
        setError("Login Failed");
    }


  };

  return (
    <>
      <p>State{isLoggedIn ? "True" : "False"}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <div>
          <button type="submit">Sign In</button>
        </div>
      </form>
      {error}
    </>
  );
};

export default LoginForm;
