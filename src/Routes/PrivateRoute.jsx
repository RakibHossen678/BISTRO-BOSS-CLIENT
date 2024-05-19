import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import load from '../assets/others/loader2.gif'
const PrivateRoute = ({children}) => {
    const {user,loading}=useAuth()
    const location=useLocation()
    if(loading){
        return <div> <img src={load} alt="" /> </div>
    }
    if(user){
        return children
    }
    return <Navigate state={{from:location}} replace to='/login'></Navigate>
};

export default PrivateRoute;