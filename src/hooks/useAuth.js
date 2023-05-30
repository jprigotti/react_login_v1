import { useContext } from "react"
import { AuthContext } from "../auth/context/AuthContext"

export const useAuth = () => {
    const { isLoggedIn, login, logout, user } = useContext(AuthContext);
    return {
        isLoggedIn,
        login,
        logout,
        user
    }
}