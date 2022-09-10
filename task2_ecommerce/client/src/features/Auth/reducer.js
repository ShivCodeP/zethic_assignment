import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  REGISTER_ERROR,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  LOGOUT,
  LOGOUT_LOADING,
  LOGOUT_SUCCESS,
} from "./actionType.js";
import { loadData, saveData, savetoken,getToken, removeToken } from "../../utils/cookieStorage.js";
import { baseUrl } from "../../utils/baseUrl.js";

const initialState = {
  loading: false,
  isAuth: getToken?true:false,
  isLogin: getToken?true:false,
  isRegister:false,
  error: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true,
        error: false,
        isLogin: true
      };

    case LOGIN_ERROR:
      return {
        ...state,
        error: true,
        loading: false
      };

    case REGISTER_LOADING:
      return {
        ...state,
        loading: true,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        isRegister: true
      };

    case REGISTER_ERROR:
      return {
        ...state,
        isRegister: false,
        loading: false,
        error: true,
      };
      case LOGOUT_LOADING:
        return {
          ...state,
          loading: true,
        };
  
      case LOGOUT_SUCCESS:
        return {
          ...state,
          loading: false,
        };
  
      case LOGOUT:
        removeToken();
        return {
          ...state,
          isRegister: false,
          isLogin: false,
          isAuth: false,
        };

      default: 
        return state;
  }
};

export default reducer;