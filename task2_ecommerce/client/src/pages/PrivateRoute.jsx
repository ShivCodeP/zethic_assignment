import { useSelector,useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const authState = useSelector((state) => state.authState);
    
    const {loading,error,isAuth,isRegister,isLogin} = authState;
    console.log(isAuth,isLogin)

    return isAuth&&isLogin?children:<Navigate to="/login" />
}

export default PrivateRoute;