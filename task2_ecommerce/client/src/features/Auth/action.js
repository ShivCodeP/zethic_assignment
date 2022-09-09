import {LOGIN_ERROR,LOGIN_LOADING,LOGIN_SUCCESS,REGISTER_ERROR,REGISTER_LOADING,REGISTER_SUCCESS,LOGOUT,LOGOUT_LOADING,LOGOUT_SUCCESS} from "./actionType.js";

const loginUser = (user) => ({
    type: LOGIN_ERROR
});

const loginUserLoading = () => ({
    type: LOGIN_LOADING
})

const loginUserSuccess = () => ({
    type: LOGIN_SUCCESS
})

const registerUser = () => ({
    type: REGISTER_ERROR
});

const registerUserLoading = () => ({
    type: REGISTER_LOADING
})

const registerUserSuccess = () => ({
    type: REGISTER_SUCCESS
})

const LogoutUser = () => ({
    type: LOGOUT
});

const LogoutUserLoading = () => ({
    type: LOGOUT_LOADING
})

const LogoutUserSuccess = (user) => ({
    type: LOGOUT_SUCCESS,
    payload: user
})

export {loginUser,loginUserLoading,loginUserSuccess,registerUser,registerUserLoading,registerUserSuccess,LogoutUser,LogoutUserLoading,LogoutUserSuccess};