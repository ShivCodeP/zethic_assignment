import { Checkout } from "../models/index.js";

const checkout = (req,res) => {
    try {
       // making the order after checkout
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({message:"Internal Server Error"})
    }
}

const orderDetail = (req,res) => {
    try {
        // all order detail of login user
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({message:"Internal Server Error"})
    }
}

export {checkout,orderDetail}