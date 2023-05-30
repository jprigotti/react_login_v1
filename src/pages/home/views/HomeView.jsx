import React from 'react'
import { useAuth } from '../../../hooks/useAuth'

const HomeView = () => {
    const {logout, user, signout} = useAuth();

    const handleLogout = () => {
        logout();
        signout();
    }

    return (
        <div>
            <h3>Home View</h3>
            <p>Welcome {user}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default HomeView
