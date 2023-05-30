import React from 'react'
import { useAuth } from '../../../hooks/useAuth';
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

    const navigate = useNavigate();

    const { isLoggedIn, login } = useAuth();

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = new FormData(event.target);
        const { email, password } = Object.fromEntries(form.entries());
        console.log(email, password);

        login(email);

        // en caso que no dispongamos de PubliRoute, PrivateRoute, podemos usar estar redireccion:
        navigate("/", 
        {replace: true});
    }

    return (
        <>
            <p>State{isLoggedIn?"True":"False"}</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <input id="email" type="email" name="email" placeholder='Email' required />
                </div>
                <div>
                    <input id="password" type="password" name="password" placeholder='Password' required />
                </div>
                <div>
                    <button type="submit">Sign In</button>
                </div>
            </form></>

    )
}

export default LoginForm
