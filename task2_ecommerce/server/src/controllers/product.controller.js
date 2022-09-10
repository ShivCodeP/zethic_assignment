import { Users,Products } from "../models/index.js";

const showProducts = async (req,res) => {
    try {

        const products = await Products.find().lean().exec();

        return res.send(products)
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({message:"Internal Server Error"})
    }
}

const getProduct = async (req,res) => {
    try {
        const product_id = req.params.id;
        const product = await Products.findById(product_id);

        return res.send(product)

    } catch (error) {
        console.log(error);
        return res.status(500).send({message:"Internal Server Error"})
    }
}

const getUserCartProduct = async (req,res) => {
    try {
        const user = await Users.findById(req.loginUser.user._id).populate("watchlist");

        return res.send(user.watchlist)
        
    } catch (error) {
        return res.status(500).send({message:"Internal Server Error"})
    }
}

const getUserOrderProduct = async (req,res) => {
    try {
        const user = await Users.findById(req.loginUser.user._id).populate("order");

        return res.send(user.order)
        
    } catch (error) {
        return res.status(500).send({message:"Internal Server Error"})
    }
}

const deleteUserProduct = async (req,res) => {
    try {

        const product_id = req.params.id;

        let user = await Users.findById(req.loginUser._id);

        user = await Users.updateOne(user,{watchlist: user.watchlist.filter((_id) => _id !== product_id)});

        if(!user) return res.status(400).send({message:"Something went wrong try again"})

        delete user.password;

        return res.send(user)
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({message:"Internal Server Error"})
    }
}

const postUserProduct = async (req,res) => {
    try {
        const product_id = req.params.id;
        // console.log(req.loginUser)

        let user = await Users.findById(req.loginUser.user._id);
        // console.log(product_id)

        const newuser = await Users.findByIdAndUpdate(user._id,{watchlist: [...user.watchlist,product_id]});

        if(!newuser) return res.status(400).send({message:"Something went wrong try again"})

        return res.send(newuser.watchlist)
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({message:"Internal Server Error"})
    }
}


export {showProducts,getProduct,deleteUserProduct,postUserProduct,getUserCartProduct,getUserOrderProduct};
