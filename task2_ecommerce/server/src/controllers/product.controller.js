import { Users,Products } from "../models/index.js";

const showProducts = (req,res) => {
    try {
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({message:"Internal Server Error"})
    }
}

const getProduct = (req,res) => {
    try {
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({message:"Internal Server Error"})
    }
}

const deleteUserProduct = (req,res) => {
    try {
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({message:"Internal Server Error"})
    }
}

const postUserProduct = (req,res) => {
    try {
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({message:"Internal Server Error"})
    }
}


export {showProducts,getProduct,deleteUserProduct,postUserProduct};
