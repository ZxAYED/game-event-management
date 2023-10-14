import { useContext } from "react";
import { authContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";




const PrivateRoute = ({children}) => {
    const location =useLocation()

    const {loading,user}=useContext(authContext)
    if(loading) { 
        return <span className="loading loading-spinner text-secondary"></span>
    }
    if(user){
      return  children
    }
    return <Navigate state={location.pathname} to='/SignIn'> </Navigate>
};

export default PrivateRoute;