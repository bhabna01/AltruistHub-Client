import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Spinner } from "flowbite-react";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const loaction = useLocation()
    if (loading) {
        return <Spinner aria-label="Extra large spinner example" size="xl" />
    }
    if (user?.email) {
        return children
    }
    return <Navigate state={loaction.pathname} to='/login' replace></Navigate>
};

export default PrivateRoute;