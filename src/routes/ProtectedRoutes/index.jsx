import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../providers/UserContext"

//Proteção de rotas que precisam de login
export const ProtectedRoutes = () => {
    const { user } = useContext(UserContext);

    return user ? <Outlet /> : <Navigate to="/" />
}