import { Checkout } from "../models/index.js";

const checkout = async (req,res) => {
    try {
       // making the order after checkout
       const payment_status = req.query.payment_status;
       const user_id = req.loginUser._id;
       const {ship_address,products} = req.body;

       const checkout = await Checkout.create({
        products,
        ship_address,
        user: user_id,
        payment_status: payment_status === "true"?true:false
       })

       return res.send({message: "successful"})
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({message:"Internal Server Error"})
    }
}

const orderDetail = async (req,res) => {
    try {
        // all order detail of login user
        const order = await Checkout.find({user:req.loginUser._id}).lean().exec();

        return res.send(order)
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({message:"Internal Server Error"})
    }
}

export {checkout,orderDetail}