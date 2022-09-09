import {ADD_PRODUCT_ERROR,ADD_PRODUCT_LOADING,ADD_PRODUCT_SUCCESS,DELETE_PRODUCT_ERROR,DELETE_PRODUCT_LOADING,DELETE_PRODUCT_SUCCESS,GET_PRODUCT_ERROR,GET_PRODUCT_LOADING,GET_PRODUCT_SUCCESS,CHECKOUT_PRODUCT_ERROR,CHECKOUT_PRODUCT_LOADING,CHECKOUT_PRODUCT_SUCCESS} from "./actionType.js"

const addProductError= (data) => ({
   type: ADD_PRODUCT_ERROR,
   payload: data   
})

const deleteProductError = (id) => ({
    type: DELETE_PRODUCT_ERROR,
    payload: id
})

const addProductLoading = () => ({
    type: ADD_PRODUCT_LOADING
})

const addProductSuccess = (data) => ({
    type:ADD_PRODUCT_SUCCESS,
    payload: data
})

const deleteProductLoading = () => ({
    type: DELETE_PRODUCT_LOADING
})

const deleteProductSuccess = (data) => ({
    type:DELETE_PRODUCT_SUCCESS,
    payload: data
}) 

const getProductLoading = () => ({
    type: GET_PRODUCT_LOADING
})

const getProductSuccess = (data) => ({
    type:GET_PRODUCT_SUCCESS,
    payload: data
})

const getProductError = (err) => ({
    type: GET_PRODUCT_ERROR,
    payload: err
}) 

const checkoutProductLoading = () => ({
    type: CHECKOUT_PRODUCT_LOADING
})

const checkoutProductSuccess = (data) => ({
    type:CHECKOUT_PRODUCT_SUCCESS,
    payload: data
})

const checkoutProductError = (err) => ({
    type: CHECKOUT_PRODUCT_ERROR,
    payload: err
}) 

export {getProductError,getProductLoading,getProductSuccess,checkoutProductError,checkoutProductLoading,checkoutProductSuccess,deleteProductError,deleteProductLoading,deleteProductSuccess,addProductError,addProductLoading,addProductSuccess};

