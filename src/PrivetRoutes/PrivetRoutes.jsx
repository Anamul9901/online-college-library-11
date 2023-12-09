/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivetRoutes = ({children}) => {
    const {user, isLoading} = useAuth();
    const location = useLocation();
    // console.log(location);

    if(isLoading){
        return <div className="flex justify-center items-center text-2xl pt-20">
            <span className="loading loading-spinner text-error text-2xl"></span>
        </div>
    }
    if(user){
        return children;
    }

    return (
        <Navigate state={location.pathname} to='/login'></Navigate>
    );
};

export default PrivetRoutes;