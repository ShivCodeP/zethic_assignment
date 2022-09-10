import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductLoading,getProductError,getProductSuccess } from "../features/Product/action";
import { baseUrl } from "../utils/baseUrl";
import ProductBox from "./ProductBox";

const Home = () => {
    const {loading,error,products} = useSelector((state) => state.productState)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductLoading());
        fetch(`${baseUrl}/api/user/product`)
        .then(res => res.json())
        .then(res => dispatch(getProductSuccess(res)))
        .catch(err => dispatch(getProductError()))

    },[])

    return <div style={{
        display:"grid",
        width:"95%",
        gap:"25px",
        margin:"auto",
        marginTop: "10vh",
        gridTemplateColumns:"repeat(4,20%)",
        justifyContent:"center"

    }}>
        {
            products.map((e) => <ProductBox {...e} key={e._id}/>)
        }
    </div>
}

export default Home;