import {ADD_PRODUCT_ERROR,ADD_PRODUCT_LOADING,ADD_PRODUCT_SUCCESS,DELETE_PRODUCT_ERROR,DELETE_PRODUCT_LOADING,DELETE_PRODUCT_SUCCESS,GET_PRODUCT_ERROR,GET_PRODUCT_LOADING,GET_PRODUCT_SUCCESS,CHECKOUT_PRODUCT_ERROR,CHECKOUT_PRODUCT_LOADING,CHECKOUT_PRODUCT_SUCCESS} from "./actionType.js";

import { loadData,saveData } from "../../utils/cookieStorage.js";

const initialState = {
    loading: false,
    error: false,
    products: [],
    order: [],
    watchlist: []
}

const reducer = (state=initialState,{type,payload}) => {
    switch(type) {
        case ADD_PRODUCT_ERROR: 
        return {
            ...state,
            error: true,
            loading:false
        }
        case ADD_PRODUCT_LOADING: 
        return {
            ...state,
            loading: true
        }
        case ADD_PRODUCT_SUCCESS: 
        return {
            ...state,
            loading: false,
            error: false,
            watchlist: payload
        }
        case DELETE_PRODUCT_ERROR: 
        return {
            ...state,
            loading: false,
            error: true
        }
        case DELETE_PRODUCT_LOADING: 
        return {
            ...state,
            loading: true
        }
        case DELETE_PRODUCT_SUCCESS: 
        return {
            ...state,
            loading: false,
            error: false,
            watchlist: state.watchlist.filter(({_id}) => _id !== payload)
        }
        case GET_PRODUCT_ERROR: 
        return {
            ...state,
            loading: false,
            error: true
        }
        case GET_PRODUCT_LOADING: 
        return {
            ...state,
            loading: true
        }
        case GET_PRODUCT_SUCCESS: 
        return {
            ...state,
            loading: false,
            error: false,
            products: payload
        }
        case CHECKOUT_PRODUCT_ERROR: 
        return {
            ...state,
            loading: false,
            error: true
        }
        case CHECKOUT_PRODUCT_LOADING: 
        return {
            ...state,
            loading: true
        }
        case CHECKOUT_PRODUCT_SUCCESS: 
        return {
            ...state,
            loading: false,
            error: false,
            order: payload
        }
        default: 
        return state;
    }
}

export default reducer;