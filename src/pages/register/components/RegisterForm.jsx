import React from "react";
import { useAuth } from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  
  const navigate = useNavigate();
  const { signup } = useAuth();

  
  const handleSubmit = (event) => {
    event.preventDefault();
  
    const form = new FormData(event.target);
    const { email, password } = Object.fromEntries(form.entries());
  
    signup(email, password);

    // en caso que no dispongamos de PubliRoute, PrivateRoute, podemos usar estar redireccion:
    navigate("/", { replace: true });
  };
  
  return (
    <>
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
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </>
  );
  
};


export default RegisterForm;
