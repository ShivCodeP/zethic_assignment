import { Users } from "../models/index.js";
import jwt from "jsonwebtoken";

const newToken = (user) => {
    return jwt.sign({ user: user }, process.env.JWT_ACCESS_KEY);
};

const register = async (req, res) => {

    try {
        // check if the email address provided already exist
        let user = await Users.findOne({ email: req.body.email }).lean().exec();

        // if it already exists then throw an error 
        if (user) return res.status(400).json({ status: "failed", message: "Please provide different email address" })

        // else we will create the user
        const newuser = await (await Users.create(req.body));

        // return the user and the token

        res.status(201).json({message: "Successfully registered"});

    } catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }
}

const login = async (req, res) => {
    try {
        // check if the email address provided already exist 
        let user = await Users.findOne({email: req.body.email});
    
        // if it does not exist then throw an error 
        if (!user) return res.status(400).json({ status: "failed", message: "Please provide different email address" })
    
        // else we match the password

        const match = await user.checkpassword(req.body.password);
    
        // if not match then throw an error
        if (!match) return res.status(400).json({ status: "failed", message: "Please provide correct email address and password" })
    
        // if it matches then create the token 
        const token = newToken(user);
    
        // return the user and the token 
        delete user.password;
    
        res.status(201).json({user,token});

    } catch (e) {
        return res.status(500).json({status: "Failed", message: e.message});
    }

}

export {login,register}